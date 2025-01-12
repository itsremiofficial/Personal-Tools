import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconFolderMinus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15.0996 14.55H10.0996" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 11V17C22.6699 21 21.6699 22 17.6699 22H7.66992C3.66992 22 2.66992 21 2.66992 17V7C2.66992 3 3.66992 2 7.66992 2H9.16992C10.6699 2 10.9999 2.44 11.5699 3.2L13.0699 5.2C13.4499 5.7 13.6699 6 14.6699 6H17.6699C21.6699 6 22.6699 7 22.6699 11Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.4099 9.44H2.66992V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.41992C11.0499 2 11.5599 2.53 12.2099 3.4L13.6099 5.26C13.9199 5.67 13.9599 5.73 14.5399 5.73H17.3299C19.6999 5.72 21.7199 7.28 22.4099 9.44Z" fill="currentColor" /><path d="M22.6599 10.8399C22.6399 10.3499 22.5599 9.88994 22.4099 9.43994H2.66992V16.6499C2.66992 19.5999 5.06992 21.9999 8.01992 21.9999H17.3199C20.2699 21.9999 22.6699 19.5999 22.6699 16.6499V11.0699C22.6699 10.9999 22.6699 10.9099 22.6599 10.8399ZM15.0999 16.2999H10.0999C9.68992 16.2999 9.34992 15.9599 9.34992 15.5499C9.34992 15.1399 9.68992 14.7999 10.0999 14.7999H15.0999C15.5099 14.7999 15.8499 15.1399 15.8499 15.5499C15.8499 15.9599 15.5099 16.2999 15.0999 16.2999Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6868 7.99175C22.0847 8.55833 21.6104 9.25 20.9181 9.25H3.66992C3.11764 9.25 2.66992 8.80228 2.66992 8.25V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.40992C11.0399 2 11.5499 2.53 12.1999 3.4L13.5999 5.26C13.9099 5.67 13.9499 5.72 14.5299 5.72H17.3199C19.1245 5.72 20.7216 6.61709 21.6868 7.99175Z" fill="currentColor" /><path d="M22.6533 11.7459C22.6514 11.1949 22.2042 10.7493 21.6533 10.7493L3.66989 10.75C3.11762 10.75 2.66992 11.1977 2.66992 11.75V16.65C2.66992 19.6 5.06992 22 8.01992 22H17.3199C20.2699 22 22.6699 19.6 22.6699 16.65L22.6533 11.7459ZM15.0999 16.75H10.0999C9.67992 16.75 9.34992 16.42 9.34992 16C9.34992 15.59 9.67992 15.25 10.0999 15.25H15.0999C15.5099 15.25 15.8499 15.59 15.8499 16C15.8499 16.42 15.5099 16.75 15.0999 16.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolderMinus;