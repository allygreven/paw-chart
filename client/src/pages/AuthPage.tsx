import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/useUser';
import { Register } from './Register';
import { SignIn } from './SignIn';

type Props = {
  mode: 'register' | 'sign-in' | 'sign-out';
};
export function AuthPage({ mode }: Props) {
  const { handleSignOut } = useUser();
  const navigate = useNavigate();

  if (mode === 'sign-out') {
    handleSignOut();
    navigate('/');
    return null;
  }

  return (
    <div className="container">
      {mode === 'register' && <Register />}
      {mode === 'sign-in' && <SignIn />}
    </div>
  );
}
