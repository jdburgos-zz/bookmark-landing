/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const title = 'Contact';

const Contact: NextPage = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: { title },
  };
};
