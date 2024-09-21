import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../shared/theme/colors';

export const StyledTouchableOpacity = styled(TouchableOpacity)({
  backgroundColor: Colors.blue,
});

export const StyledButtonText = styled(Text)({
  color: Colors.white,
  textTransform: 'uppercase',
  padding: 5,
});
