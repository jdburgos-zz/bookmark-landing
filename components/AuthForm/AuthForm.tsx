/** React core **/
import React, { useRef, useState } from 'react';

/** Components **/
import { Button, Input } from '../ui';
import { Loader } from '../Loader';

/** Enums **/
import { INPUT_STATUS } from '@enums/input-status.enum';

/** Utils **/
import { validateEmail } from '@utils/validate-email';

/** Styles **/
import styles from './AuthForm.module.scss';

type AuthFormProps = {
  title: string;
  btnText: string;
  submit: (
    email: React.RefObject<HTMLInputElement>,
    password: React.RefObject<HTMLInputElement>,
  ) => Promise<void>;
  isLoading: boolean;
};

export const AuthForm: React.FC<AuthFormProps> = ({ title, btnText, submit, isLoading }) => {
  const [inputUserState, setInputUserState] = useState('');
  const [inputPasswordState, setInputPasswordState] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const inputUserRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const inputUserAttrs = {
    ref: inputUserRef,
    placeholder: 'User',
    type: 'text',
  };
  const inputPasswordAttrs = {
    ref: inputPasswordRef,
    placeholder: 'Password',
    type: 'password',
  };

  const userHandler = () => {
    const email = inputUserRef.current!.value;
    const emailValidation = validateEmail(email);

    const emailState = emailValidation ? '' : INPUT_STATUS.error;

    if (email === '') {
      setInputUserState('');
      setInputPasswordState('');
    } else {
      setInputUserState(emailState);
      setDisableBtn(!validateEmail(email));
    }
  };

  const passwordHandler = () => {};

  const btnContent = isLoading ? <Loader /> : btnText;

  return (
    <div className={styles['auth-form']}>
      <h2 className={styles['auth-form__title']}>{title}</h2>
      <div className={styles['auth-form__container']}>
        <Input
          className={styles['auth-form__input']}
          input={inputUserAttrs}
          state={inputUserState}
          onChange={userHandler}
        />
        <Input
          className={styles['auth-form__input']}
          input={inputPasswordAttrs}
          state={inputPasswordState}
          onChange={passwordHandler}
        />
        <Button
          className={styles['auth-form__btn']}
          onClick={submit.bind(null, inputUserRef, inputPasswordRef)}
          disabled={disableBtn}
        >
          {btnContent}
        </Button>
      </div>
    </div>
  );
};
