import {KeyboardAvoidingView, View} from 'react-native';
import styled from 'styled-components';

export const StyledKeyboardAvoadingView = styled(KeyboardAvoidingView).attrs({
  behavior: 'padding',
})({
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

export const StyledContent = styled(View)({
  alignItems: 'center',
});

export const StyledFields = styled(View)({
  marginTop: '5%',
  gap: 15,
  alignItems: 'center',
});
