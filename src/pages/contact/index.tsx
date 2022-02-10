/** Next core **/
import { GetStaticProps, NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async context => {
  const title = 'Contact';

  return {
    props: { title },
  };
};
