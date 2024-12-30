import { FC } from 'react';
import { IconProps } from "../../types";

const IconReceiptDisscount: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 13L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.9945 13H15.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.99451 7.5H9.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2 7V21C2 21.83 2.94001 22.3 3.60001 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28999 22.29C8.67999 22.68 9.32001 22.68 9.71001 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" fill="currentColor" /><path d="M11.75 9.25H9.75V7.25C9.75 6.84 9.41 6.5 9 6.5C8.59 6.5 8.25 6.84 8.25 7.25V9.25H6.25C5.84 9.25 5.5 9.59 5.5 10C5.5 10.41 5.84 10.75 6.25 10.75H8.25V12.75C8.25 13.16 8.59 13.5 9 13.5C9.41 13.5 9.75 13.16 9.75 12.75V10.75H11.75C12.16 10.75 12.5 10.41 12.5 10C12.5 9.59 12.16 9.25 11.75 9.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceiptDisscount;