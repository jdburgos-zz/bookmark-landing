/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const Signup: NextPage = () => {
  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
};

export default Signup;

export const getStaticProps: GetStaticProps = async context => {
  const title = 'Signup';

  return {
    props: { title },
  };
};
