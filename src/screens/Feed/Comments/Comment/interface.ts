export interface CommentProps {
  item: CommentTypes;
  setSelectedCommentId: (user: CommentTypes) => void;
}

export interface CommentTypes {
  id: string;
  username: string;
  email: string;
  text: string;
  created_at: Date;
  replies?: {
    id: string;
    username: string;
    email: string;
    text: string;
    created_at: Date;
  }[];
}
