import {Text, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../../../shared/theme/colors';

export const StyledContent = styled(View)({
  margin: 10,
  marginBottom: '5%',
  borderLeftWidth: 1,
  borderLeftColor: Colors.white,
  paddingLeft: 5,
});

export const StyledComment = styled(View)({
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flexDirection: 'row',
  flex: 1,
});

export const StyledCommentName = styled(Text)({
  color: Colors.white,
  fontSize: 20,
});

export const StyledCommentTime = styled(Text)({
  color: Colors.whiteGray,
});

export const StyledCommentText = styled(Text)({
  color: Colors.white,
});

export const StyledReply = styled(View)({
  alignItems: 'flex-end',
});

export const StyledReplyComment = styled(View)({
  marginLeft: 20,
  marginBottom: 10,
});

export const StyledReplyView = styled(View)({
  alignItems: 'flex-end',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: 1,
});

export const StyledReplyName = styled(Text)({
  color: Colors.white,
  fontSize: 14,
});

export const StyledReplyText = styled(Text)({
  color: Colors.white,
  fontSize: 12,
});
