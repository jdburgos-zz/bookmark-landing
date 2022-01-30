/** React core **/
import React, { useRef } from 'react';

/** Next core **/
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

/** Components **/
import { Button, Input } from '@components/ui';
import { TabItem } from '@components/TabItem';
import { Tab } from '@components/Tab';
import { DownloadItem } from '@components/DownloadItem';
import { FaqItem } from '@components/FaqItem';

/** Styles **/
import styles from './Home.module.scss';

/** Data **/
import { TABS_CONTENT } from '../data/tabs-content';
import { TABS_HEADER } from '../data/tabs-header';
import { DOWNLOAD_ITEMS } from '../data/download-items';
import { FAQ_ITEMS } from '../data/faq-items';

/** Assets **/
import HeroImg from '../public/images/illustration-hero.svg';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const tabs = TABS_HEADER.map(({ text }, index) => <Tab key={index} text={text} />);
  const tabItems = TABS_CONTENT.map((tab, index) => <TabItem key={index} tab={tab} />);
  const downloadItems = DOWNLOAD_ITEMS.map((item, index) => (
    <DownloadItem key={index} item={item} />
  ));
  const faqItems = FAQ_ITEMS.map((item, index) => <FaqItem key={index} item={item} />);

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
            <div className={styles['home__features-tabs__header']}>{tabs}</div>
            <div className={styles['home__features-tabs__content']}>{tabItems}</div>
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
          <div className={styles['home__faq-content']}>{faqItems}</div>
          <Button>More Info</Button>
        </div>
      </div>
      <div>
        <h3>35,000+ already joined</h3>
        <h4>Stay up-to-date with what we’re doing</h4>
        <div>
          <Input
            input={{
              ref: inputRef,
              placeholder: 'Shorten a link here...',
              type: 'url',
            }}
            onChange={() => {}}
          />
          <Button>Contact Us</Button>
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
