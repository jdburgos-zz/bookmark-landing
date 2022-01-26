/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const title = 'Pricing';

const Pricing: NextPage = () => {
  return (
    <div>
      <h1>Pricing</h1>
    </div>
  );
};

export default Pricing;

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: { title },
  };
};
