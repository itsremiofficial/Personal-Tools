import { FC } from 'react';
import { IconProps } from "../../types";

const IconGalleryExport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18 8V2L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 2L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8 9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z" fill="currentColor" /><path d="M15.8798 12.43L12.5298 15.78C12.2398 16.07 11.7598 16.07 11.4698 15.78L8.11984 12.43C7.82984 12.14 7.82984 11.66 8.11984 11.37C8.40984 11.08 8.88984 11.08 9.17984 11.37L11.2498 13.44V2.75C11.2498 2.34 11.5898 2 11.9998 2C12.4098 2 12.7498 2.34 12.7498 2.75V13.44L14.8198 11.37C14.9698 11.22 15.1598 11.15 15.3498 11.15C15.5398 11.15 15.7298 11.22 15.8798 11.37C16.1798 11.66 16.1798 12.13 15.8798 12.43Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGalleryExport;