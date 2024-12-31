import { FC } from 'react';
import { IconProps } from "@/types";

const IconMaximize2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.54" : "1"}><path d="M18 12V10M6 12H12H18H6ZM6 12V10V12ZM6 12V14V12ZM18 12V14V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 6H14M12 18V6V18ZM12 18H14H12ZM12 18H10H12ZM12 6H10H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M2.75 9.97C2.34 9.97 2 9.64 2 9.22V6.91C2 4.2 4.2 2 6.91 2H9.22C9.63 2 9.97 2.34 9.97 2.75C9.97 3.16 9.64 3.5 9.22 3.5H6.91C5.03 3.5 3.5 5.03 3.5 6.91V9.22C3.5 9.64 3.16 9.97 2.75 9.97Z" fill="currentColor" /><path d="M21.2493 9.97C20.8393 9.97 20.4993 9.63 20.4993 9.22V6.91C20.4993 5.03 18.9693 3.5 17.0893 3.5H14.7793C14.3693 3.5 14.0293 3.16 14.0293 2.75C14.0293 2.34 14.3593 2 14.7793 2H17.0893C19.7993 2 21.9993 4.2 21.9993 6.91V9.22C21.9993 9.64 21.6593 9.97 21.2493 9.97Z" fill="currentColor" /><path d="M17.0892 22.0002H15.6992C15.2892 22.0002 14.9492 21.6602 14.9492 21.2502C14.9492 20.8402 15.2892 20.5002 15.6992 20.5002H17.0892C18.9692 20.5002 20.4992 18.9702 20.4992 17.0902V15.7002C20.4992 15.2902 20.8392 14.9502 21.2492 14.9502C21.6592 14.9502 21.9992 15.2902 21.9992 15.7002V17.0902C21.9992 19.8002 19.7992 22.0002 17.0892 22.0002Z" fill="currentColor" /><path d="M9.22 21.9998H6.91C4.2 21.9998 2 19.7998 2 17.0898V14.7798C2 14.3698 2.34 14.0298 2.75 14.0298C3.16 14.0298 3.5 14.3698 3.5 14.7798V17.0898C3.5 18.9698 5.03 20.4998 6.91 20.4998H9.22C9.63 20.4998 9.97 20.8398 9.97 21.2498C9.97 21.6598 9.64 21.9998 9.22 21.9998Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximize2;