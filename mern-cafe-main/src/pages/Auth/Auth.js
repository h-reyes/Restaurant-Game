import { useState } from 'react';
import styles from './Auth.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function Auth({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.Auth}>
      <div>
        <Logo />
        <h2 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h2>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}