import moment from 'moment';
import {Button} from '../../../../uikit/Button';
import {
  StyledComment,
  StyledCommentName,
  StyledCommentText,
  StyledCommentTime,
  StyledContent,
  StyledReply,
  StyledReplyComment,
  StyledReplyName,
  StyledReplyText,
  StyledReplyView,
} from './styles';
import {CommentProps, CommentTypes} from './interface';

export const Comment = ({item, setSelectedCommentId}: CommentProps) => {
  const replyComment = (reply: CommentTypes) => (
    <StyledReplyComment key={reply.id}>
      <StyledReplyView>
        <StyledReplyName>{reply.username}</StyledReplyName>
        <StyledCommentTime>
          {moment(new Date(reply.created_at)).fromNow()}
        </StyledCommentTime>
      </StyledReplyView>
      <StyledReplyText>{reply.text}</StyledReplyText>
    </StyledReplyComment>
  );

  return (
    <StyledContent>
      <StyledComment>
        <StyledCommentName>{item.username}</StyledCommentName>
        <StyledCommentTime>
          {moment(new Date(item.created_at)).fromNow()}
        </StyledCommentTime>
      </StyledComment>
      <StyledCommentText>{item.text}</StyledCommentText>
      <StyledReply>
        <Button title="Reply" onPress={() => setSelectedCommentId(item)} />
      </StyledReply>
      {item.replies && item.replies.map(replyComment)}
    </StyledContent>
  );
};
