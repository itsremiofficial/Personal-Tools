import { FC } from 'react';
import { IconProps } from "../../types";

const IconCardAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5H13.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 16.5H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.5 16.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.5 6.25H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M19.25 9V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.5 4.5H7.25V2C7.25 1.59 6.91 1.25 6.5 1.25C6.09 1.25 5.75 1.59 5.75 2V4.5H5.5C3.91 4.5 3 5.41 3 7V13C3 14.59 3.91 15.5 5.5 15.5H5.75V22C5.75 22.41 6.09 22.75 6.5 22.75C6.91 22.75 7.25 22.41 7.25 22V15.5H7.5C9.09 15.5 10 14.59 10 13V7C10 5.41 9.09 4.5 7.5 4.5Z" fill="currentColor" /><path d="M18.5 8.5H18.25V2C18.25 1.59 17.91 1.25 17.5 1.25C17.09 1.25 16.75 1.59 16.75 2V8.5H16.5C14.91 8.5 14 9.41 14 11V17C14 18.59 14.91 19.5 16.5 19.5H16.75V22C16.75 22.41 17.09 22.75 17.5 22.75C17.91 22.75 18.25 22.41 18.25 22V19.5H18.5C20.09 19.5 21 18.59 21 17V11C21 9.41 20.09 8.5 18.5 8.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCardAdd;