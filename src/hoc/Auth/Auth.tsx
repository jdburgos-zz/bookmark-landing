/** Next core **/
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Auth = (WrappedComponent: NextPage) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      const user = localStorage.getItem('user');

      if (!user) {
        if (router.pathname === '/admin') {
          router.push('/auth/login');

          return null;
        }
      } else {
        if (router.pathname === '/auth/login') {
          router.push('/');

          return null;
        }
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default Auth;
