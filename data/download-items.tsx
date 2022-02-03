/** Interfaces **/
import { IDownloadItem } from '@interfaces/download-item.interface';

/** Assets **/
import { LogoChrome } from '@images/LogoChrome';
import { LogoFirefox } from '@images/LogoFirefox';
import { LogoOpera } from '@images/LogoOpera';

export const DOWNLOAD_ITEMS: IDownloadItem[] = [
  {
    name: 'Chrome',
    logo: <LogoChrome />,
    title: 'Add to Chrome',
    description: 'Minimum version 62',
    url: 'https://chrome.google.com/webstore/category/extensions?hl=en-GB',
    btnText: 'Add & Install Extension',
  },
  {
    name: 'Firefox',
    logo: <LogoFirefox />,
    title: 'Add to Firefox',
    description: 'Minimum version 55',
    url: 'https://addons.mozilla.org/en-GB/firefox/extensions/',
    btnText: 'Add & Install Extension',
  },
  {
    name: 'Opera',
    logo: <LogoOpera />,
    title: 'Add to Opera',
    description: 'Minimum version 46',
    url: 'https://addons.opera.com/en/extensions/',
    btnText: 'Add & Install Extension',
  },
];
