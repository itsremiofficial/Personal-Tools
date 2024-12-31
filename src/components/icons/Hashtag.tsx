import { FC } from 'react';
import { IconProps } from "../../types";

const IconHashtag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L8 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 3L14 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 9H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.5 15H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.3304 14.67C20.2804 13.62 19.4504 13.96 18.7304 14.67L14.5804 18.82C14.4204 18.98 14.2704 19.29 14.2304 19.51L14.0004 21.0999C13.9204 21.6699 14.3204 22.08 14.8904 21.99L16.4804 21.76C16.7004 21.73 17.0104 21.5699 17.1704 21.4099L21.3204 17.26C22.0504 16.55 22.3804 15.72 21.3304 14.67Z" fill="currentColor" /><path d="M8.38971 2.16992V8.61993H1.92969V7.93994C1.92969 4.32994 4.0797 2.17993 7.6897 2.17993H8.38971V2.16992Z" fill="currentColor" /><path d="M21.7698 7.93018C21.7698 8.31018 21.4598 8.61017 21.0898 8.61017H15.3398V2.16016H16.0098C19.1898 2.17016 21.7698 4.75018 21.7698 7.93018Z" fill="currentColor" /><path d="M8.38947 15.5503V21.3103C8.38947 21.6903 8.07947 21.9903 7.70947 21.9903H7.69946C4.51946 21.9903 1.93945 19.4103 1.93945 16.2303V15.5503H8.38947Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.39948 8.61035H1.93945V15.5504H8.39948V8.61035Z" fill="currentColor" /><path d="M15.3306 8.61035V14.5504C15.3306 15.1004 14.8806 15.5504 14.3306 15.5504H8.39062V8.61035H15.3306Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.3306 2.16992H8.39062V8.61993H15.3306V2.16992Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHashtag;