import {CommentTypes} from '../Comment/interface';

export interface TextFieldProps {
  selectedCommentId: CommentTypes;
  setSelectedCommentId: (e: CommentTypes | null) => void;
  commentText: string;
  setCommentText: (e: string) => void;
  addReply: () => void;
  addComment: () => void;
}
