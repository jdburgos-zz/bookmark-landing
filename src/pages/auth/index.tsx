/** React core **/
import { useEffect } from 'react';

/** Next core **/
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Auth: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return null;
};

export default Auth;
