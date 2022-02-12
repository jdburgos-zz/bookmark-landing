/** React core **/
import React from 'react';

/** Interfaces **/
import { IBook } from '@interfaces/books.interfaces';

/** Styles **/
import styles from './Book.module.scss';
import Link from 'next/link';

type BookProps = {
  book: IBook;
};

export const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <Link href={`/books/${book.id}`}>
      <a className={styles.book}>
        <div>
          <h3 className={styles.book__title}>{book.title}</h3>
          <p className={styles.book__author}>{book.author}</p>
        </div>
      </a>
    </Link>
  );
};
