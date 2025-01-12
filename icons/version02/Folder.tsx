import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconFolder: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 11V17C22.6699 21 21.6699 22 17.6699 22H7.66992C3.66992 22 2.66992 21 2.66992 17V7C2.66992 3 3.66992 2 7.66992 2H9.16992C10.6699 2 10.9999 2.44 11.5699 3.2L13.0699 5.2C13.4499 5.7 13.6699 6 14.6699 6H17.6699C21.6699 6 22.6699 7 22.6699 11Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 11.0699V16.6499C22.6699 19.5999 20.2699 21.9999 17.3199 21.9999H8.01992C5.06992 21.9999 2.66992 19.5999 2.66992 16.6499V9.43994H22.4099C22.5599 9.88994 22.6399 10.3499 22.6599 10.8399C22.6699 10.9099 22.6699 10.9999 22.6699 11.0699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.4099 9.44H2.66992V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.41992C11.0499 2 11.5599 2.53 12.2099 3.4L13.6099 5.26C13.9199 5.67 13.9599 5.73 14.5399 5.73H17.3299C19.6999 5.72 21.7199 7.28 22.4099 9.44Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6868 7.99175C22.0847 8.55833 21.6104 9.25 20.9181 9.25H3.66992C3.11764 9.25 2.66992 8.80228 2.66992 8.25V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.40992C11.0399 2 11.5499 2.53 12.1999 3.4L13.5999 5.26C13.9099 5.67 13.9499 5.72 14.5299 5.72H17.3199C19.1245 5.72 20.7216 6.61709 21.6868 7.99175Z" fill="currentColor" /><path d="M21.6533 10.7498C22.2043 10.7498 22.6514 11.1954 22.6533 11.7464L22.6699 16.65C22.6699 19.6 20.2699 22 17.3199 22H8.01992C5.06992 22 2.66992 19.6 2.66992 16.65V11.75C2.66992 11.1977 3.11763 10.75 3.66991 10.75L21.6533 10.7498Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolder;