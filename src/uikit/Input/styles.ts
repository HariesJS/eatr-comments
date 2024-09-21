import {TextInput} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../shared/theme/colors';
import {INPUT_SIZE} from './const';

export const StyledTextInput = styled(TextInput)({
  color: Colors.black,
  backgroundColor: Colors.white,
  borderBottomWidth: 1,
  borderBottomColor: Colors.white,
  width: INPUT_SIZE,
  paddingVertical: 10,
  paddingHorizontal: 15,
});
