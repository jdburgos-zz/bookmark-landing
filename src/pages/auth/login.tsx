/** React core **/
import React, { useState } from 'react';

/** Next core **/
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

/** Dependencies **/
import { signInWithEmailAndPassword } from 'firebase/auth';

/** Config **/
import { auth } from '@config/firebase';

/** Components **/
import { AuthForm } from '@components/AuthForm';

/** Interfaces **/
import { IUser } from '@interfaces/user.interface';

/** Hooks **/
import { useAppDispatch } from '@hooks/react-redux';

/** Reducers **/
import { setUser } from '@store/auth/auth.reducer';

/** Hoc **/
import Auth from '@hoc/Auth/Auth';

/** Utils **/
import { isFirebaseError } from '@utils/is-firebase-error.type-guard';

const Login: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const formHandler = async (
    email: React.RefObject<HTMLInputElement>,
    password: React.RefObject<HTMLInputElement>,
  ) => {
    try {
      setIsLoading(true);

      const response = await signInWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value,
      );
      const { refreshToken: authToken, email: userEmail, emailVerified } = response.user;
      const user = { authToken, email: userEmail, emailVerified, isLoggedIn: true } as IUser;

      setIsLoading(false);
      dispatch(setUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      await router.push('/admin');
    } catch (e) {
      setIsLoading(false);

      if (isFirebaseError(e)) {
        if (e.code === 'auth/invalid-email') {
          alert('invalid email');
        }

        if (e.code === 'auth/wrong-password') {
          alert('wrong password');
        }

        if (e.code === 'auth/user-not-found') {
          alert('user not found');
        }

        if (e.code === 'auth/internal-error') {
          alert('internal error');
        }
      }
    }
  };

  return (
    <div>
      <AuthForm btnText="Login" title="Login" submit={formHandler} isLoading={isLoading} />
    </div>
  );
};

export default Auth(Login);

export const getStaticProps: GetStaticProps = async context => {
  const title = 'Login';

  return {
    props: { title },
  };
};
