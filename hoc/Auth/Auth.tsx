/** React core **/
import React from 'react';

/** Next core **/
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Auth = (WrappedComponent: NextPage) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const Router = useRouter();
      const user = localStorage.getItem('user');

      if (!user) {
        Router.push('/auth/login');
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default Auth;
