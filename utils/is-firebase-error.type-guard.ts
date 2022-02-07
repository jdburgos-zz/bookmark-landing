/** Dependencies **/
import { FirebaseError } from '@firebase/util/dist/src/errors';

export const isFirebaseError = (error: any): error is FirebaseError => {
  return error.name === 'FirebaseError';
};
