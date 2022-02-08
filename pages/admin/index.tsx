/** Next core **/
import { GetServerSideProps, NextPage } from 'next';

/** Firebase **/
import { collection, query, getDocs, orderBy } from 'firebase/firestore';

/** Hoc **/
import Auth from '@hoc/Auth/Auth';

/** Config **/
import { firestore } from '@config/firebase';

/** Interfaces **/
import { IBook } from '@interfaces/books.interfaces';

/** Components **/
import { Book } from '@components/Book';

/** Styles **/
import styles from './Admin.module.scss';

// @ts-ignore
// eslint-disable-next-line react/prop-types
const Admin: NextPage = ({ data }) => {
  const books = Object.keys(data).map((i, index) => <Book key={index} book={data[i]} />);

  return (
    <div className={styles.admin}>
      <h1 className={styles.admin__title}>Admin</h1>
      <div className={styles.admin__container}>{books}</div>
    </div>
  );
};

export default Auth(Admin);

export const getServerSideProps: GetServerSideProps = async () => {
  const title = 'Admin';
  const q = query(collection(firestore, 'books'), orderBy('title'));
  const querySnapshot = await getDocs(q);
  const data: IBook[] = [];

  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() } as IBook);
  });

  return {
    props: { title, data },
  };
};
