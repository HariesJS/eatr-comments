export interface AuthContextTypes {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  email: string;
  username: string;
  setUsername: (e: string) => void;
}
