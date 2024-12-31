import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBank: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.37 2.14984L21.37 5.74982C21.72 5.88982 22 6.30981 22 6.67981V9.99982C22 10.5498 21.55 10.9998 21 10.9998H3C2.45 10.9998 2 10.5498 2 9.99982V6.67981C2 6.30981 2.28 5.88982 2.63 5.74982L11.63 2.14984C11.83 2.06984 12.17 2.06984 12.37 2.14984Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4 18V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 18V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 18V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 18V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20 18V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M1 22H23" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 19V22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19Z" fill="currentColor"  strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.6" : "1"} d="M8 11H4V18H8V11Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12 11H8V18H12V11Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M16 11H12V18H16V11Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20 11H16V18H20V11Z" fill="currentColor" /><path d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z" fill="currentColor" /><path d="M21.37 5.74982L12.37 2.14984C12.17 2.06984 11.83 2.06984 11.63 2.14984L2.63 5.74982C2.28 5.88982 2 6.29981 2 6.67981V9.99982C2 10.5498 2.45 10.9998 3 10.9998H21C21.55 10.9998 22 10.5498 22 9.99982V6.67981C22 6.29981 21.72 5.88982 21.37 5.74982ZM12 8.49982C11.17 8.49982 10.5 7.82982 10.5 6.99982C10.5 6.16982 11.17 5.49982 12 5.49982C12.83 5.49982 13.5 6.16982 13.5 6.99982C13.5 7.82982 12.83 8.49982 12 8.49982Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBank as IconComponentType).keywords = [
  "bank",
  "savings bank",
  "money box",
  "swear",
  "rely",
  "trust",
  "cant",
  "camber",
  "deposit",
  "bank building"
];

export default IconBank as IconComponentType;