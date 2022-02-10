/** React core **/
import { SVGProps } from 'react';

export const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={15} {...props}>
    <path fill="#242A45" fillRule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z" />
  </svg>
);
