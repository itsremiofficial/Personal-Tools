import { FC } from 'react';
import { IconProps } from "../../types";

const IconMoney2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 9H3C6 9 7 8 7 5V4" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 9H21C18 9 17 8 17 5V4" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 15H3C6 15 7 16 7 19V20" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 15H21C18 15 17 16 17 19V20" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 13C15.24 13 13 15.24 13 18C13 20.76 15.24 23 18 23C20.76 23 23 20.76 23 18C23 15.24 20.76 13 18 13ZM17.16 19.27C17.41 19.52 17.41 19.93 17.16 20.19C17.03 20.32 16.87 20.38 16.7 20.38C16.53 20.38 16.37 20.32 16.24 20.19L14.51 18.46C14.26 18.21 14.26 17.8 14.51 17.54L16.24 15.81C16.49 15.56 16.9 15.56 17.16 15.81C17.41 16.06 17.41 16.47 17.16 16.73L15.89 18L17.16 19.27ZM21.48 18.46L19.75 20.19C19.62 20.32 19.46 20.38 19.29 20.38C19.12 20.38 18.96 20.32 18.83 20.19C18.58 19.94 18.58 19.53 18.83 19.27L20.1 18L18.83 16.73C18.58 16.48 18.58 16.07 18.83 15.81C19.08 15.56 19.49 15.56 19.75 15.81L21.48 17.54C21.73 17.8 21.73 18.2 21.48 18.46Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21 7V14C20.17 13.37 19.13 13 18 13C15.24 13 13 15.24 13 18C13 19.63 13.79 21.09 15 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H8.92999L8.97 3.53003C8.99 4.34003 9.66 5 10.47 5H13.5C14.32 5 15 4.32 15 3.5V2H16C19.5 2 21 4 21 7Z" fill="currentColor" /><path d="M14.9997 2V3.5C14.9997 4.32 14.3197 5 13.4997 5H10.4697C9.6597 5 8.9897 4.34003 8.9697 3.53003L8.92969 2H14.9997Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMoney2;