import {Text} from 'react-native';
import {Colors} from '../../shared/theme/colors';
import {ReactNode} from 'react';

export const Title = ({
  children,
  size,
}: {
  children: ReactNode;
  size?: number;
}) => {
  return <Text style={{color: Colors.white, fontSize: size}}>{children}</Text>;
};
