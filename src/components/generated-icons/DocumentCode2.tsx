import { FC } from 'react';
import { IconProps } from "@/types";

const IconDocumentCode2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4 17L2 19L4 21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 17L9 19L7 21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21 7V17C21 20 19.5 22 16 22H9C10.21 21.09 11 19.63 11 18C11 15.24 8.76 13 6 13C4.87 13 3.83 13.37 3 14V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.5 3.75C14.9142 3.75 15.25 4.08579 15.25 4.5V6.5C15.25 7.18579 15.8142 7.75 16.5 7.75H18.5C18.9142 7.75 19.25 8.08579 19.25 8.5C19.25 8.91421 18.9142 9.25 18.5 9.25H16.5C14.9858 9.25 13.75 8.01421 13.75 6.5V4.5C13.75 4.08579 14.0858 3.75 14.5 3.75Z" fill="currentColor" /><path d="M6 13C3.24 13 1 15.24 1 18C1 20.76 3.24 23 6 23C8.76 23 11 20.76 11 18C11 15.24 8.76 13 6 13ZM5.16 19.27C5.41 19.52 5.41 19.93 5.16 20.19C5.03 20.32 4.87001 20.38 4.70001 20.38C4.53001 20.38 4.36999 20.32 4.23999 20.19L2.51001 18.46C2.26001 18.21 2.26001 17.8 2.51001 17.54L4.23999 15.81C4.48999 15.56 4.9 15.56 5.16 15.81C5.41 16.06 5.41 16.47 5.16 16.73L3.89001 18L5.16 19.27ZM9.48001 18.46L7.75 20.19C7.62 20.32 7.46001 20.38 7.29001 20.38C7.12001 20.38 6.95999 20.32 6.82999 20.19C6.57999 19.94 6.57999 19.53 6.82999 19.27L8.10001 18L6.82999 16.73C6.57999 16.48 6.57999 16.07 6.82999 15.81C7.07999 15.56 7.49 15.56 7.75 15.81L9.48001 17.54C9.73001 17.8 9.73001 18.2 9.48001 18.46Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentCode2;