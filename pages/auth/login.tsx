/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const title = 'Login';

const Login: NextPage = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: { title },
  };
};
