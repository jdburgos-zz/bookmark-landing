/** React core **/
import React, { useRef, useState } from 'react';

/** Next core **/
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

/** Dependencies **/
import { Tabs, Collapse } from 'antd';
import { ref, set } from 'firebase/database';
import { v1 as uuidV1 } from 'uuid';

/** Components **/
import { Button, Input } from '@components/ui';
import { TabItem } from '@components/TabItem';
import { DownloadItem } from '@components/DownloadItem';

/** Data **/
import { TABS_CONTENT } from '@data/tabs-content';
import { DOWNLOAD_ITEMS } from '@data/download-items';
import { FAQ_ITEMS } from '@data/faq-items';

/** Firebase **/
import { database } from '@config/firebase';

/** Utils **/
import { validateEmail } from '@utils/validate-email';

/** Enums **/
import { INPUT_HINT_TXT } from '@enums/input-hint-txt.enum';
import { INPUT_STATUS } from '@enums/input-status.enum';

/** Styles **/
import styles from './Home.module.scss';

/** Assets **/
import HeroImg from '@public/images/illustration-hero.svg';

/** Antd **/
const { TabPane } = Tabs;
const { Panel } = Collapse;

const Home: NextPage = () => {
  const [disableBtn, setDisableBtn] = useState(true);
  const [inputState, setInputState] = useState('');
  const [inputText, setInputText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const tabItems = TABS_CONTENT.map((tab, index) => (
    <TabPane tab={tab.title} key={index + 1}>
      <TabItem tab={tab} />
    </TabPane>
  ));
  const downloadItems = DOWNLOAD_ITEMS.map((item, index) => (
    <DownloadItem key={index} item={item} />
  ));
  const faqItems = FAQ_ITEMS.map((item, index) => (
    <Panel key={index + 1} header={item.title} className={styles['home__faq-item']}>
      {item.description}
    </Panel>
  ));

  const emailHandler = () => {
    const email = inputRef.current!.value;
    const emailValidation = validateEmail(email);
    const emailState = emailValidation ? '' : INPUT_STATUS.error;
    const emailTxt = emailValidation ? '' : INPUT_HINT_TXT.error;

    if (email === '') {
      setInputState('');
      setInputText('');
    } else {
      setInputState(emailState);
      setInputText(emailTxt);
      setDisableBtn(!validateEmail(email));
    }
  };

  const contactHandler = async () => {
    const id = uuidV1();
    const email = inputRef.current!.value;
    await set(ref(database, `emails/${id}`), { email });

    inputRef.current!.value = '';
    setDisableBtn(true);
    setInputState(INPUT_STATUS.success);
    setInputText(INPUT_HINT_TXT.success);

    setTimeout(() => {
      setInputState('');
      setInputText('');
    }, 5000);
  };

  const hintText = <p className={styles['home__pre-footer__hint-text']}>{inputText}</p>;

  const hintTextClass = inputText ? styles[`home__pre-footer__input-container--${inputState}`] : '';
  const inputContainerClasses =
    `${styles['home__pre-footer__input-container']} ${hintTextClass}`.trim();

  return (
    <>
      <div className={styles.home__introduction}>
        <Image src={HeroImg} alt="Hero" />
        <div className={styles.home__content}>
          <h1 className={styles.home__title}>A Simple Bookmark Manager</h1>
          <p className={styles.home__description}>
            A clean and simple interface to organize your favourite websites. Open a new browser tab
            and see your sites load instantly. Try it for free.
          </p>
          <div className={styles.home__actions}>
            <Link href="https://www.google.com/intl/es/chrome/?brand=UUXU&gclsrc=ds&gclsrc=ds">
              <a target="_blank">
                <Button>Get it on Chrome</Button>
              </a>
            </Link>
            <Link href="https://www.mozilla.org/firefox/new/">
              <a target="_blank">
                <Button variant="secondary">Get it on Firefox</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.home__features}>
        <div className={styles.home__content}>
          <h2 className={styles.home__title}>Features</h2>
          <p className={styles.home__description}>
            Our aim is to make it quick and easy for you to access your favourite websites. Your
            bookmarks sync between your devices so you can access them on the go.
          </p>
          <div className={styles['home__features-tabs']}>
            <Tabs defaultActiveKey="1" centered animated>
              {tabItems}
            </Tabs>
          </div>
        </div>
      </div>
      <div className={styles.home__downloads}>
        <div className={styles.home__content}>
          <h2 className={styles.home__title}>Download the extension</h2>
          <p className={styles.home__description}>
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite
            you’d like us to prioritize.
          </p>
          <div className={styles['home__downloads-content']}>{downloadItems}</div>
        </div>
      </div>
      <div className={styles.home__faq}>
        <div className={styles.home__content}>
          <h2 className={styles.home__title}>Frequently Asked Questions</h2>
          <p className={styles.home__description}>
            Here are some of our FAQs. If you have any other questions you’d like answered please
            feel free to email us.
          </p>
          <div className={styles['home__faq-content']}>
            <Collapse
              bordered={false}
              accordion
              expandIconPosition="right"
              className={styles['home__faq-collapse']}
            >
              {faqItems}
            </Collapse>
          </div>
          <Link href="/contact">
            <a>
              <Button>More Info</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles['home__pre-footer']}>
        <h3 className={styles['home__pre-footer__title']}>35,000+ already joined</h3>
        <h4 className={styles['home__pre-footer__subtitle']}>
          Stay up-to-date with what we’re doing
        </h4>
        <div className={styles['home__pre-footer__form']}>
          <div className={inputContainerClasses}>
            <Input
              className={styles['home__pre-footer__input']}
              input={{
                ref: inputRef,
                placeholder: 'Email',
                type: 'email',
              }}
              state={inputState}
              onChange={emailHandler}
            />
            {inputText && hintText}
          </div>
          <Button variant="tertiary" onClick={contactHandler} disabled={disableBtn}>
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  const title = 'Home';

  return {
    props: { title },
  };
};
