/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;

export const getStaticProps: GetStaticProps = async context => {
  const title = 'Not Found';

  return {
    props: { title },
  };
};
