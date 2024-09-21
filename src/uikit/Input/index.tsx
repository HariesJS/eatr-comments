import {Colors} from '../../shared/theme/colors';
import {StyledTextInput} from './styles';

export const Input = ({...props}) => {
  return <StyledTextInput placeholderTextColor={Colors.gray} {...props} />;
};
