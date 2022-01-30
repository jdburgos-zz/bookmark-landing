/** Interfaces **/
import { IDownloadItem } from '../interfaces/download-item.interface';

/** Assets **/
import ChromeLogo from '../public/images/logo-chrome.svg';
import FirefoxLogo from '../public/images/logo-firefox.svg';
import OperaLogo from '../public/images/logo-opera.svg';

export const DOWNLOAD_ITEMS: IDownloadItem[] = [
  {
    name: 'Chrome',
    logo: ChromeLogo,
    title: 'Add to Chrome',
    description: 'Minimum version 62',
    url: 'https://chrome.google.com/webstore/category/extensions?hl=en-GB',
    btnText: 'Add & Install Extension',
  },
  {
    name: 'Firefox',
    logo: FirefoxLogo,
    title: 'Add to Firefox',
    description: 'Minimum version 55',
    url: 'https://addons.mozilla.org/en-GB/firefox/extensions/',
    btnText: 'Add & Install Extension',
  },
  {
    name: 'Opera',
    logo: OperaLogo,
    title: 'Add to Opera',
    description: 'Minimum version 46',
    url: 'https://addons.opera.com/en/extensions/',
    btnText: 'Add & Install Extension',
  },
];
