import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import styled from 'styled-components';
import {WINDOW_HEIGHT} from '../../../../shared/dimensions';
import {Colors} from '../../../../shared/theme/colors';
import {Button} from '../../../../uikit/Button';

export const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  keyboardVerticalOffset: WINDOW_HEIGHT / 10,
})``;

export const StyledSelectedComment = styled(View)({
  backgroundColor: Colors.white,
  borderBottomWidth: 1,
  borderBottomColor: Colors.blue,
  height: 25,
  justifyContent: 'center',
});

export const StyledReplyText = styled(Text).attrs({
  numberOfLines: 1,
})({
  maxWidth: '70%',
});

export const StyledCancelButton = styled(Button)({
  position: 'absolute',
  backgroundColor: Colors.red,
  right: 0,
  width: 100,
  alignItems: 'center',
});

export const StyledCommentInput = styled(TextInput)({
  backgroundColor: Colors.white,
  paddingRight: 100,
  paddingLeft: 10,
  height: 50,
});

export const StyledSendButton = styled(Button)({
  position: 'absolute',
  backgroundColor: Colors.blue,
  right: 0,
  width: 100,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
});
