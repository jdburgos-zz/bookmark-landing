/** Next core **/
import Image from 'next/image';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

/** Components **/
import { Button, Card, Input } from '@components/ui';

/** Assets **/
import HeroImg from '../public/images/illustration-hero.svg';
import ImgTab1 from '../public/images/illustration-features-tab-1.svg';
import ImgTab2 from '../public/images/illustration-features-tab-2.svg';
import ImgTab3 from '../public/images/illustration-features-tab-3.svg';
import ChromeLogo from '../public/images/logo-chrome.svg';
import FirefoxLogo from '../public/images/logo-firefox.svg';
import OperaLogo from '../public/images/logo-opera.svg';
import Arrow from '../public/images/icon-arrow.svg';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Image src={HeroImg} alt="Hero" />
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open a new browser tab
          and see your sites load instantly. Try it for free.
        </p>
        <div>
          <Button>Get it on Chrome</Button>
          <Button>Get it on Firefox</Button>
        </div>
      </div>
      <div>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmarks sync between your devices so you can access them on the go.
        </p>
        <div>
          <div>
            <span>Simple Bookmarking</span>
            <span>Speedy Searching</span>
            <span>Easy Sharing</span>
          </div>
          <div>
            <div>
              <Image src={ImgTab1} alt="Bookmark in one click" />
              <h3>Bookmark in one click</h3>
              <p>
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives
                you complete control over how you manage your favourite sites.
              </p>
              <Button>More Info</Button>
            </div>
            <div>
              <Image src={ImgTab2} alt="Intelligent search" />
              <h3>Intelligent search</h3>
              <p>
                Our powerful search feature will help you find saved sites in no time at all. No
                need to trawl through all of your bookmarks.
              </p>
              <Button>More Info</Button>
            </div>
            <div>
              <Image src={ImgTab3} alt="Share your bookmarks" />
              <h3>Share your bookmarks</h3>
              <p>
                Easily share your bookmarks and collections with others. Create a shareable link
                that you can send at the click of a button.
              </p>
              <Button>More Info</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite
          you’d like us to prioritize.
        </p>
        <div>
          <Card>
            <Image src={ChromeLogo} alt="Chrome" />
            <h3>Add to Chrome</h3>
            <span>Minimum version 62</span>
            <Button>Add & Install Extension</Button>
          </Card>
          <Card>
            <Image src={FirefoxLogo} alt="Firefox" />
            <h3>Add to Firefox</h3>
            <span>Minimum version 55</span>
            <Button>Add & Install Extension</Button>
          </Card>
          <Card>
            <Image src={OperaLogo} alt="Opera" />
            <h3>Add to Opera</h3>
            <span>Minimum version 46</span>
            <Button>Add & Install Extension</Button>
          </Card>
        </div>
      </div>
      <div>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like answered please feel
          free to email us.
        </p>
        <div>
          <div>
            <div>
              <h3>What is Bookmark?</h3>
              <Image src={Arrow} alt="arrow" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget
              ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
            </p>
          </div>
          <div>
            <div>
              <h3>How can I request a new browser?</h3>
              <Image src={Arrow} alt="arrow" />
            </div>
            <p>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non
              ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris
              augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
            </p>
          </div>
          <div>
            <div>
              <h3>Is there a mobile app?</h3>
              <Image src={Arrow} alt="arrow" />
            </div>
            <p>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut
              condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet
              pharetra purus. Sed sollicitudin ex et ultricies bibendum.
            </p>
          </div>
          <div>
            <div>
              <h3>What about other Chromium browsers?</h3>
              <Image src={Arrow} alt="arrow" />
            </div>
            <p>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod
              dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
            </p>
          </div>
        </div>
        <Button>More Info</Button>
      </div>
      <div>
        <h3>35,000+ already joined</h3>
        <h4>Stay up-to-date with what we’re doing</h4>
        <div>
          <Input />
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
