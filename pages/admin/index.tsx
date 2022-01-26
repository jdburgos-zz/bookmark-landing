/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const title = 'Admin';

const Admin: NextPage = () => {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
};

export default Admin;

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: { title },
  };
};
