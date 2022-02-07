/** Next core **/
import { GetStaticProps, NextPage } from 'next';

/** Hoc **/
import Auth from '@hoc/Auth/Auth';

const title = 'Admin';

const Admin: NextPage = () => {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
};

export default Auth(Admin);

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: { title },
  };
};
