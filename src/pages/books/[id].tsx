/** Next core **/
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import React from 'react';
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { firestore } from '@config/firebase';
import { IBook } from '@interfaces/books.interfaces';

const Book = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Id: {book.id}</h2>
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
    </>
  );
};

export default Book;

export const getStaticPaths: GetStaticPaths = async () => {
  const q = query(collection(firestore, 'books'), orderBy('title'));
  const querySnapshot = await getDocs(q);
  const paths: { params: { id: string } }[] = [];

  querySnapshot.forEach(doc => {
    paths.push({ params: { id: doc.id } });
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  // @ts-ignore
  const { id } = params;
  const docRef = doc(firestore, 'books', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return {
      notFound: true,
    };
  }

  const book = { id, ...docSnap.data() } as IBook;
  const title = `Book - ${book.title}`;

  return {
    props: { title, book },
    revalidate: true,
  };
};
