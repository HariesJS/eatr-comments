import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {AuthContext} from '../../../context/AuthContext';
import {createComment, createReply, createTables, loadComments} from './const';
import {TextField} from './TextField';
import {Comment} from './Comment';
import {EmptyFeed} from './EmptyFeed';
import {CommentTypes} from './Comment/interface';

const db = SQLite.openDatabase(
  {
    name: 'comments5.db',
    location: 'default',
  },
  () => {
    console.log('db opened');
  },
  error => {
    console.error(error);
  },
);

export const Comments = () => {
  const {username} = useContext(AuthContext);

  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [selectedCommentId, setSelectedCommentId] =
    useState<CommentTypes | null>(null);

  useEffect(() => {
    createTables(db);
    loadComments(db, setComments);
  }, []);

  const addComment = () => {
    createComment(db, commentText, username, setComments, setCommentText);
  };

  const addReply = () => {
    createReply(
      db,
      commentText,
      selectedCommentId,
      username,
      setComments,
      setCommentText,
      setSelectedCommentId,
    );
  };

  return (
    <>
      <FlatList
        data={comments}
        ListEmptyComponent={<EmptyFeed />}
        keyExtractor={(item: CommentTypes) =>
          `${item.id.toString()}${Date.now()}`
        }
        renderItem={({item}) => (
          <Comment item={item} setSelectedCommentId={setSelectedCommentId} />
        )}
      />
      <TextField
        selectedCommentId={selectedCommentId as CommentTypes}
        setSelectedCommentId={setSelectedCommentId}
        commentText={commentText}
        setCommentText={setCommentText}
        addReply={addReply}
        addComment={addComment}
      />
    </>
  );
};
