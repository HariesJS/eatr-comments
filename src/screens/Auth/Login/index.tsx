import {Title} from '../../../uikit/Title';
import {Input} from '../../../uikit/Input';
import {Button} from '../../../uikit/Button';
import {useState} from 'react';
import {
  StyledContent,
  StyledFields,
  StyledKeyboardAvoadingView,
} from './styles';
import {LoginProps} from './interface';

export const Login = ({onLogin}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    onLogin(email, username);
  };
  return (
    <StyledKeyboardAvoadingView>
      <StyledContent>
        <Title size={24}>Authorisation</Title>
        <StyledFields>
          <Input
            placeholder={'Email'}
            keyboardType={'email-address'}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder={'Username'}
            value={username}
            onChangeText={setUsername}
          />
          <Button title={'Continue'} onPress={handleLogin} />
        </StyledFields>
      </StyledContent>
    </StyledKeyboardAvoadingView>
  );
};
