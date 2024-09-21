import {View} from 'react-native';
import {
  StyledCancelButton,
  StyledCommentInput,
  StyledKeyboardAvoidingView,
  StyledReplyText,
  StyledSelectedComment,
  StyledSendButton,
} from './styles';
import {TextFieldProps} from './interface';

export const TextField = ({
  selectedCommentId,
  setSelectedCommentId,
  commentText,
  setCommentText,
  addReply,
  addComment,
}: TextFieldProps) => {
  return (
    <StyledKeyboardAvoidingView>
      {selectedCommentId && (
        <StyledSelectedComment>
          <StyledReplyText>Reply to: {selectedCommentId?.text}</StyledReplyText>
          <StyledCancelButton
            title="Cancel"
            onPress={() => setSelectedCommentId(null)}
          />
        </StyledSelectedComment>
      )}
      <View>
        <StyledCommentInput
          placeholder={
            selectedCommentId
              ? `Reply to comment ${selectedCommentId?.username}`
              : 'Add comment'
          }
          value={commentText}
          onChangeText={setCommentText}
        />
        <StyledSendButton
          title="Send"
          onPress={selectedCommentId ? addReply : addComment}
        />
      </View>
    </StyledKeyboardAvoidingView>
  );
};
