import { FC } from 'react';
import { IconProps } from "../../types";

const IconReceipt: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" fill="currentColor" /><path d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z" fill="currentColor" /><path d="M15.0097 4.84999C15.3197 4.53999 15.4397 4.16999 15.3397 3.84999C15.2397 3.52999 14.9297 3.3 14.4897 3.23L13.5297 3.06999C13.4897 3.05999 13.3997 2.99998 13.3797 2.95998L12.8497 1.89998C12.4497 1.08998 11.5397 1.08998 11.1397 1.89998L10.6097 2.95998C10.5897 2.99998 10.4997 3.05999 10.4597 3.06999L9.49968 3.23C9.05968 3.3 8.75969 3.52999 8.64969 3.84999C8.54969 4.16999 8.66968 4.53999 8.97968 4.84999L9.71969 5.59999C9.74969 5.62999 9.78968 5.75 9.77968 5.79L9.56968 6.70998C9.40968 7.38998 9.66968 7.69997 9.83968 7.82997C10.0097 7.94997 10.3797 8.10999 10.9897 7.74999L11.8897 7.21999C11.9297 7.18999 12.0597 7.18999 12.0997 7.21999L12.9997 7.74999C13.2797 7.91999 13.5097 7.96999 13.6897 7.96999C13.8997 7.96999 14.0497 7.88997 14.1397 7.82997C14.3097 7.70997 14.5697 7.39998 14.4097 6.70998L14.1997 5.79C14.1897 5.74 14.2197 5.62999 14.2597 5.59999L15.0097 4.84999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceipt;