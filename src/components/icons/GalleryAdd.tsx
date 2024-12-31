import { FC } from 'react';
import { IconProps } from "../../types";

const IconGalleryAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.75 5H21.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M18.5 7.75V2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.02 4.62012H6.98C5.39 4.62012 4.75 5.22012 4.75 6.74012V18.6201H10.25V6.74012C10.24 5.22012 9.6 4.62012 8.02 4.62012Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.52 9.62012H15.48C13.89 9.62012 13.25 10.2301 13.25 11.7401V18.6201H18.75V11.7401C18.75 10.2301 18.1 9.62012 16.52 9.62012Z" fill="currentColor" /><path d="M2.75 17.8799H21.25C21.66 17.8799 22 18.2199 22 18.6299C22 19.0399 21.66 19.3799 21.25 19.3799H2.75C2.34 19.3799 2 19.0399 2 18.6199C2 18.1999 2.34 17.8799 2.75 17.8799Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGalleryAdd;