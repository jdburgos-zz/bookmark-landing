/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const Features: NextPage = () => {
  return (
    <div>
      <h1>Features</h1>
    </div>
  );
};

export default Features;

export const getStaticProps: GetStaticProps = async context => {
  const title = 'Features';

  return {
    props: { title },
  };
};
