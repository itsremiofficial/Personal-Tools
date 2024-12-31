import { FC } from 'react';
import { IconProps } from "@/types";

const IconScan: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.77 10C2.34 10 2 9.66 2 9.23V6.92C2 4.21 4.21 2 6.92 2H9.23C9.66 2 10 2.34 10 2.77C10 3.2 9.66 3.54 9.23 3.54H6.92C5.05 3.54 3.54 5.06 3.54 6.92V9.23C3.54 9.66 3.19 10 2.77 10Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.23 10C20.81 10 20.46 9.66 20.46 9.23V6.92C20.46 5.05 18.94 3.54 17.08 3.54H14.77C14.34 3.54 14 3.19 14 2.77C14 2.35 14.34 2 14.77 2H17.08C19.79 2 22 4.21 22 6.92V9.23C22 9.66 21.66 10 21.23 10Z" fill="currentColor" /><path d="M17.0799 21.9999H15.6899C15.2699 21.9999 14.9199 21.6599 14.9199 21.2299C14.9199 20.8099 15.2599 20.4599 15.6899 20.4599H17.0799C18.9499 20.4599 20.4599 18.9399 20.4599 17.0799V15.6999C20.4599 15.2799 20.7999 14.9299 21.2299 14.9299C21.6499 14.9299 21.9999 15.2699 21.9999 15.6999V17.0799C21.9999 19.7899 19.7899 21.9999 17.0799 21.9999Z" fill="currentColor" /><path d="M9.23 22H6.92C4.21 22 2 19.79 2 17.08V14.77C2 14.34 2.34 14 2.77 14C3.2 14 3.54 14.34 3.54 14.77V17.08C3.54 18.95 5.06 20.46 6.92 20.46H9.23C9.65 20.46 10 20.8 10 21.23C10 21.66 9.66 22 9.23 22Z" fill="currentColor" /><path d="M18.4595 11.23H17.0995H6.89953H5.53953C5.10953 11.23 4.76953 11.58 4.76953 12C4.76953 12.42 5.10953 12.77 5.53953 12.77H6.89953H17.0995H18.4595C18.8895 12.77 19.2295 12.42 19.2295 12C19.2295 11.58 18.8895 11.23 18.4595 11.23Z" fill="currentColor" /><path d="M6.90039 13.94V14.27C6.90039 15.93 8.24039 17.27 9.90039 17.27H14.1004C15.7604 17.27 17.1004 15.93 17.1004 14.27V13.94C17.1004 13.82 17.0104 13.73 16.8904 13.73H7.11039C6.99039 13.73 6.90039 13.82 6.90039 13.94Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.90039 10.06V9.72998C6.90039 8.06998 8.24039 6.72998 9.90039 6.72998H14.1004C15.7604 6.72998 17.1004 8.06998 17.1004 9.72998V10.06C17.1004 10.18 17.0104 10.27 16.8904 10.27H7.11039C6.99039 10.27 6.90039 10.18 6.90039 10.06Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconScan;