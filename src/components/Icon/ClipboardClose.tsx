import { FC } from 'react';
import { IconProps } from "../../types";

const IconClipboardClose: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M13.9991 16.1602L10.0391 12.2002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.96 12.2402L10 16.2002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.63 18.45L19.26 21.22C19.17 21.33 19.03 21.4 18.89 21.4C18.88 21.4 18.88 21.4 18.87 21.4C18.73 21.4 18.6 21.35 18.5 21.25L17.41 20.17C17.21 19.97 17.21 19.64 17.41 19.44C17.61 19.24 17.94 19.23 18.14 19.44L18.84 20.13L20.84 17.79C21.03 17.57 21.35 17.55 21.57 17.73C21.79 17.91 21.81 18.24 21.63 18.45Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16 20.97V18.03C16 16.76 16.76 16 18.03 16H20.97C21.37 16 21.71 16.08 22 16.22C22 16.21 22 16.2 22 16.18V7.81C22 4.17 19.83 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C16.19 22 16.2 22 16.22 22C16.08 21.71 16 21.37 16 20.97Z" fill="currentColor" /><path d="M7 14.25C6.59 14.25 6.25 13.91 6.25 13.5V10.5C6.25 10.09 6.59 9.75 7 9.75C7.41 9.75 7.75 10.09 7.75 10.5V13.5C7.75 13.91 7.41 14.25 7 14.25Z" fill="currentColor" /><path d="M12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V10.5C11.25 10.09 11.59 9.75 12 9.75C12.41 9.75 12.75 10.09 12.75 10.5V13.5C12.75 13.91 12.41 14.25 12 14.25Z" fill="currentColor" /><path d="M17 14.25C16.59 14.25 16.25 13.91 16.25 13.5V10.5C16.25 10.09 16.59 9.75 17 9.75C17.41 9.75 17.75 10.09 17.75 10.5V13.5C17.75 13.91 17.41 14.25 17 14.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconClipboardClose;