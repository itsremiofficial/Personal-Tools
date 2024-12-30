import { FC } from 'react';
import { IconProps } from "../../types";

const IconWatchStatus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 2H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 22H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 14V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z" fill="currentColor" /><path d="M16 3.75H8C7.59 3.75 7.25 3.41 7.25 3C7.25 2.59 7.59 2.25 8 2.25H16C16.41 2.25 16.75 2.59 16.75 3C16.75 3.41 16.41 3.75 16 3.75Z" fill="currentColor" /><path d="M16 21.75H8C7.59 21.75 7.25 21.41 7.25 21C7.25 20.59 7.59 20.25 8 20.25H16C16.41 20.25 16.75 20.59 16.75 21C16.75 21.41 16.41 21.75 16 21.75Z" fill="currentColor" /><path d="M14.5 13.25H11.5C11.09 13.25 10.75 12.91 10.75 12.5V9.5C10.75 9.09 11.09 8.75 11.5 8.75C11.91 8.75 12.25 9.09 12.25 9.5V11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWatchStatus;