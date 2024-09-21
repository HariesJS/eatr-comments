import {StyledButtonText, StyledTouchableOpacity} from './styles';
import {ButtonProps} from './interface';

export const Button = ({title, onPress, ...props}: ButtonProps) => {
  return (
    <StyledTouchableOpacity onPress={onPress} {...props}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledTouchableOpacity>
  );
};
