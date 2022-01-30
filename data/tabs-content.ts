/** Interfaces **/
import { ITab } from '../interfaces/tab.interface';

/** Assets **/
import ImgTab1 from '../public/images/illustration-features-tab-1.svg';
import ImgTab2 from '../public/images/illustration-features-tab-2.svg';
import ImgTab3 from '../public/images/illustration-features-tab-3.svg';

export const TABS_CONTENT: ITab[] = [
  {
    img: ImgTab1,
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    img: ImgTab2,
    title: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    img: ImgTab3,
    title: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
];
