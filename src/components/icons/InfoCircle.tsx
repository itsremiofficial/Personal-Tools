import { FC } from 'react';
import { IconProps } from "../../types";

const IconInformation: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7509 2.44982C11.4509 1.85982 12.5809 1.85982 13.2609 2.44982L14.8409 3.79982C15.1409 4.04982 15.7109 4.25982 16.1109 4.25982H17.8109C18.8709 4.25982 19.7409 5.12982 19.7409 6.18982V7.88982C19.7409 8.28982 19.9509 8.84982 20.2009 9.14982L21.5509 10.7298C22.1409 11.4298 22.1409 12.5598 21.5509 13.2398L20.2009 14.8198C19.9509 15.1198 19.7409 15.6798 19.7409 16.0798V17.7798C19.7409 18.8398 18.8709 19.7098 17.8109 19.7098H16.1109C15.7109 19.7098 15.1509 19.9198 14.8509 20.1698L13.2709 21.5198C12.5709 22.1098 11.4409 22.1098 10.7609 21.5198L9.18086 20.1698C8.88086 19.9198 8.31086 19.7098 7.92086 19.7098H6.17086C5.11086 19.7098 4.24086 18.8398 4.24086 17.7798V16.0698C4.24086 15.6798 4.04086 15.1098 3.79086 14.8198L2.44086 13.2298C1.86086 12.5398 1.86086 11.4198 2.44086 10.7298L3.79086 9.13982C4.04086 8.83982 4.24086 8.27982 4.24086 7.88982V6.19982C4.24086 5.13982 5.11086 4.26982 6.17086 4.26982H7.90086C8.30086 4.26982 8.86086 4.05982 9.16086 3.80982L10.7509 2.44982Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 8.12988V12.9599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9941 16H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M7.75 17.5H12.58C12.99 17.5 13.33 17.16 13.33 16.75C13.33 16.34 12.99 16 12.58 16H9.56L17.28 8.28C17.57 7.99 17.57 7.51 17.28 7.22C17.13 7.07 16.94 7 16.75 7C16.56 7 16.37 7.07 16.22 7.22L8.5 14.94V11.92C8.5 11.51 8.16 11.17 7.75 11.17C7.34 11.17 7 11.51 7 11.92V16.75C7 17.16 7.34 17.5 7.75 17.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconInformation;