/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const title = 'Not Found';

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: { title },
  };
};
