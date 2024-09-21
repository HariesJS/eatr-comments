import {Alert, Keyboard} from 'react-native';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {CommentTypes} from './Comment/interface';

export const createTables = (db: SQLiteDatabase) => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS comments (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          text TEXT NOT NULL,
          username TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`,
      [],
      () => {
        console.log('success');
      },
      error => {
        console.error(error);
      },
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS replies (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          comment_id INTEGER,
          text TEXT NOT NULL,
          username TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (comment_id) REFERENCES comments (id)
        );`,
      [],
      () => {
        console.log('success');
      },
      error => {
        console.error(error);
      },
    );
  });
};

export const loadComments = (
  db: SQLiteDatabase,
  setComments: (e: []) => void,
) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM comments;',
      [],
      (tx, results) => {
        const commentsArray: CommentTypes[] = [];
        for (let i = 0; i < results.rows.length; i++) {
          commentsArray.push(results.rows.item(i));
        }

        commentsArray.forEach(comment => {
          tx.executeSql(
            'SELECT * FROM replies WHERE comment_id = ?;',
            [comment.id],
            (tx, results) => {
              comment.replies = [];
              for (let j = 0; j < results.rows.length; j++) {
                comment.replies.push(results.rows.item(j));
              }
              setComments([...commentsArray] as never);
            },
            error => {
              console.error(error);
            },
          );
        });
      },
      error => {
        console.error(error);
      },
    );
  });
};

export const createComment = (
  db: SQLiteDatabase,
  commentText: string,
  username: string,
  setComments: (e: []) => void,
  setCommentText: (e: string) => void,
) => {
  // console.warn(commentText, username); // AsyncStroga NAME
  if (commentText.trim() === '' || username.trim() === '') {
    Alert.alert('Error', 'Enter comment');
    return;
  }

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO comments (text, username, created_at) VALUES (?, ?, ?);',
      [commentText, username, Date.now()],
      (tx, results) => {
        loadComments(db, setComments);
        setCommentText('');
        Keyboard.dismiss();
      },
      error => {
        console.error(error);
      },
    );
  });
};

export const createReply = (
  db: SQLiteDatabase,
  commentText: string,
  selectedCommentId: CommentTypes | null,
  username: string,
  setComments: (e: []) => void,
  setCommentText: (e: string) => void,
  setSelectedCommentId: (e: CommentTypes | null) => void,
) => {
  if (
    commentText.trim() === '' ||
    selectedCommentId === null ||
    username.trim() === ''
  ) {
    Alert.alert('Error', 'Enter comment');
    return;
  }

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO replies (comment_id, text, username, created_at) VALUES (?, ?, ?, ?);',
      [selectedCommentId?.id, commentText, username, Date.now()],
      (tx, results) => {
        loadComments(db, setComments);
        setCommentText('');
        setSelectedCommentId(null);
        Keyboard.dismiss();
      },
      error => {
        console.error(error);
      },
    );
  });
};
