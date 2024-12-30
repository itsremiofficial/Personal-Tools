import { FC } from 'react';
import { IconProps } from "../../types";

const IconRadio: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 5H7C4 5 2 7 2 10V17C2 20 4 22 7 22H17C20 22 22 20 22 17V10C22 7 20 5 17 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 16C9.88071 16 11 14.8807 11 13.5C11 12.1193 9.88071 11 8.5 11C7.11929 11 6 12.1193 6 13.5C6 14.8807 7.11929 16 8.5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 11H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 15H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 10.64 4.61 9.31 5.28 8.14C5.49 7.78 5.94999 7.66 6.29999 7.86L12.37 11.35C12.73 11.56 12.85 12.01 12.65 12.37C12.44 12.73 11.99 12.85 11.63 12.65L6.25 9.56C5.93 10.33 5.76001 11.16 5.76001 12C5.76001 15.45 8.56001 18.25 12.01 18.25C15.46 18.25 18.26 15.45 18.26 12C18.26 8.55 15.46 5.75 12.01 5.75C10.65 5.75 9.35001 6.18 8.26001 7C7.93001 7.25 7.45999 7.18001 7.20999 6.85001C6.95999 6.52001 7.02999 6.05 7.35999 5.8C8.70999 4.79 10.32 4.25 12.01 4.25C16.28 4.25 19.76 7.73 19.76 12C19.76 16.27 16.27 19.75 12 19.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRadio;