import { FC } from 'react';
import { IconProps } from "@/types";

const IconExport3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M13 10.9998L21.2 2.7998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9999 6.83V2H17.1699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8 9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z" fill="currentColor" /><path d="M15.8798 5.56994L12.5298 2.21994C12.2398 1.92994 11.7598 1.92994 11.4698 2.21994L8.11984 5.56994C7.82984 5.85994 7.82984 6.33994 8.11984 6.62994C8.40984 6.91994 8.88984 6.91994 9.17984 6.62994L11.2498 4.55994V15.2499C11.2498 15.6599 11.5898 15.9999 11.9998 15.9999C12.4098 15.9999 12.7498 15.6599 12.7498 15.2499V4.55994L14.8198 6.62994C14.9698 6.77994 15.1598 6.84994 15.3498 6.84994C15.5398 6.84994 15.7298 6.77994 15.8798 6.62994C16.1798 6.33994 16.1798 5.86994 15.8798 5.56994Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconExport3;