/** React core **/
import React from 'react';

/** Interfaces **/
import { IBook } from '@interfaces/books.interfaces';

/** Styles **/
import styles from './Book.module.scss';

type BookProps = {
  book: IBook;
};

export const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div className={styles.book}>
      <h3 className={styles.book__title}>{book.title}</h3>
      <p className={styles.book__author}>{book.author}</p>
    </div>
  );
};
