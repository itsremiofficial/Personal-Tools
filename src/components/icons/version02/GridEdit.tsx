import { FC } from 'react';

const IconGridEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 11V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H10.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2.69922 8.5H22.6692" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.69922 15.5H12.6692" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.17969 21.9897V2.00977" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.1797 11.9897V2.00977" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M19.3998 14.6701L15.2499 18.82C15.0899 18.98 14.9398 19.29 14.8998 19.51L14.6699 21.1C14.5899 21.67 14.9899 22.08 15.5599 21.99L17.1498 21.76C17.3698 21.73 17.6798 21.5701 17.8398 21.4101L21.9899 17.26C22.6999 16.55 23.0399 15.7101 21.9899 14.6601C20.9499 13.6201 20.1198 13.9501 19.3998 14.6701Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.8101 15.26C19.1601 16.52 20.15 17.5 21.41 17.86" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9999 14.67C20.9499 13.62 20.1198 13.96 19.3998 14.67L15.2499 18.82C15.0899 18.98 14.9398 19.29 14.8998 19.51L14.6699 21.0999C14.5899 21.6699 14.9899 22.08 15.5599 21.99L17.1498 21.76C17.3698 21.73 17.6798 21.5699 17.8398 21.4099L21.9899 17.26C22.7199 16.55 23.0499 15.72 21.9999 14.67Z" fill="currentColor" /><path d="M9.06012 2.16992V8.61993H2.6001V7.93994C2.6001 4.32994 4.75011 2.17993 8.36011 2.17993H9.06012V2.16992Z" fill="currentColor" /><path d="M22.4402 7.92993C22.4402 8.30993 22.1303 8.60992 21.7603 8.60992H16.0103V2.15991H16.6802C19.8602 2.16991 22.4402 4.74993 22.4402 7.92993Z" fill="currentColor" /><path d="M9.06036 15.5498V21.3098C9.06036 21.6898 8.75037 21.9898 8.38037 21.9898H8.37036C5.19036 21.9898 2.61035 19.4098 2.61035 16.2298V15.5498H9.06036Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.07037 8.60986H2.61035V15.5499H9.07037V8.60986Z" fill="currentColor" /><path d="M16.0001 8.60986V14.5499C16.0001 15.0999 15.5501 15.5499 15.0001 15.5499H9.06006V8.60986H16.0001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.0001 2.16992H9.06006V8.61993H16.0001V2.16992Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9999 14.67C20.9499 13.62 20.1199 13.96 19.3999 14.67L15.2499 18.82C15.0899 18.98 14.9399 19.29 14.8999 19.51L14.6699 21.1C14.5899 21.67 14.9899 22.08 15.5599 21.99L17.1499 21.76C17.3699 21.73 17.6799 21.57 17.8399 21.41L21.9899 17.26C22.7199 16.55 23.0499 15.72 21.9999 14.67Z" fill="currentColor" /><path d="M7.41675 2.06549C7.96661 1.99425 8.41992 2.45112 8.41992 3.00557V6.8C8.41992 7.35229 7.97221 7.8 7.41992 7.8H3.66992C3.11764 7.8 2.66173 7.35027 2.72859 6.80204C3.05625 4.11548 4.74179 2.41205 7.41675 2.06549Z" fill="currentColor" /><path d="M21.5999 7.8H17.9199C17.3676 7.8 16.9199 7.35228 16.9199 6.8V3.00625C16.9199 2.45153 17.3741 1.99459 17.9241 2.06633C20.5578 2.40978 22.2344 4.0681 22.5999 6.68C22.6799 7.27 22.1999 7.8 21.5999 7.8Z" fill="currentColor" /><path d="M7.41992 16.3C7.97221 16.3 8.41992 16.7478 8.41992 17.3V20.92C8.41992 21.52 7.88992 22 7.28992 21.92C4.7208 21.5378 3.1 19.8911 2.74365 17.3102C2.66744 16.7582 3.12543 16.3 3.68266 16.3H7.41992Z" fill="currentColor" /><path d="M8.41992 10.3C8.41992 9.74776 7.97221 9.30005 7.41992 9.30005H3.66992C3.11764 9.30005 2.66992 9.74776 2.66992 10.3V13.8C2.66992 14.3523 3.11764 14.8 3.66992 14.8H7.41992C7.97221 14.8 8.41992 14.3523 8.41992 13.8V10.3Z" fill="currentColor" /><path d="M15.4199 10.3C15.4199 9.74776 14.9722 9.30005 14.4199 9.30005H10.9199C10.3676 9.30005 9.91992 9.74776 9.91992 10.3V13.8C9.91992 14.3523 10.3676 14.8 10.9199 14.8H14.4199C14.9699 14.8 15.4199 14.35 15.4199 13.8V10.3Z" fill="currentColor" /><path d="M15.4199 3C15.4199 2.44771 14.9722 2 14.4199 2H10.9199C10.3676 2 9.91992 2.44772 9.91992 3V6.8C9.91992 7.35229 10.3676 7.8 10.9199 7.8H14.4199C14.9722 7.8 15.4199 7.35228 15.4199 6.8V3Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGridEdit as IconComponent).keywords = [
  "grid",
  "edit",
  "gridiron",
  "control grid",
  "power grid",
  "power system",
  "reference grid",
  "crossword",
  "card",
  "bars",
  "parcel",
  "redact",
  "edit out",
  "cut",
  "editor",
  "edition",
  "publication",
  "publish",
  "publishing",
  "authoring"
];

export default IconGridEdit as IconComponent;