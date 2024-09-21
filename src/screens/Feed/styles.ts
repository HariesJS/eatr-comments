import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../shared/theme/colors';

export const StyledSafeAreaView = styled(SafeAreaView)({
  backgroundColor: Colors.gray,
  flex: 1,
});

export const StyledText = styled(Text)({
  fontSize: 24,
  textAlign: 'center',
  color: Colors.white,
  opacity: 0.7,
});
