import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconReceived: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 17.5L19 3.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 7.22998V17.5H15.27" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.99844 18.1998C4.79844 18.1998 4.59844 18.0998 4.49844 17.9998C4.19844 17.6998 4.19844 17.1998 4.49844 16.8998L18.4984 2.8998C18.7984 2.5998 19.2984 2.5998 19.5984 2.8998C19.8984 3.1998 19.8984 3.6998 19.5984 3.9998L5.59844 17.9998C5.39844 18.1998 5.19844 18.1998 4.99844 18.1998Z" fill="currentColor" /><path d="M15.2992 18.1999H4.99922C4.59922 18.1999 4.19922 17.8999 4.19922 17.3999V7.1999C4.19922 6.7999 4.49922 6.3999 4.99922 6.3999C5.49922 6.3999 5.79922 6.6999 5.79922 7.1999V16.6999H15.2992C15.6992 16.6999 16.0992 16.9999 16.0992 17.4999C16.0992 17.9999 15.6992 18.1999 15.2992 18.1999Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.4992 22.8002H3.49922C3.09922 22.8002 2.69922 22.5002 2.69922 22.0002C2.69922 21.5002 2.99922 21.2002 3.49922 21.2002H20.4992C20.8992 21.2002 21.2992 21.5002 21.2992 22.0002C21.2992 22.5002 20.8992 22.8002 20.4992 22.8002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceived as IconComponentType).keywords = [
  "received",
  "accepted",
  "acceptable",
  "prescriptive",
  "normative",
  "conventional",
  "standard",
  "acknowledged",
  "acceptance",
  "accepting"
];

export default IconReceived as IconComponentType;