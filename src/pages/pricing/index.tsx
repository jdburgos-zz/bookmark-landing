/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const Pricing: NextPage = () => {
  return (
    <div>
      <h1>Pricing</h1>
    </div>
  );
};

export default Pricing;

export const getStaticProps: GetStaticProps = async context => {
  const title = 'Pricing';

  return {
    props: { title },
  };
};
