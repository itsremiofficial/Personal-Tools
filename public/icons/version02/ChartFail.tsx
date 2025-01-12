import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconChartFail: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.9004 20.7705L21.4404 17.2305" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.4404 20.7705L17.9004 17.2305" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M7.66992 10.5V13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 10.5V13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 10.5V13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 13V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H13.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.6699 20.97V18.03C16.6699 16.76 17.4299 16 18.6999 16H21.6399C22.0399 16 22.3799 16.08 22.6699 16.22C22.6699 16.21 22.6699 16.2 22.6699 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C16.8599 22 16.8699 22 16.8899 22C16.7499 21.71 16.6699 21.37 16.6699 20.97Z" fill="currentColor" /><path d="M7.66992 14.25C7.25992 14.25 6.91992 13.91 6.91992 13.5V10.5C6.91992 10.09 7.25992 9.75 7.66992 9.75C8.07992 9.75 8.41992 10.09 8.41992 10.5V13.5C8.41992 13.91 8.07992 14.25 7.66992 14.25Z" fill="currentColor" /><path d="M12.6699 14.25C12.2599 14.25 11.9199 13.91 11.9199 13.5V10.5C11.9199 10.09 12.2599 9.75 12.6699 9.75C13.0799 9.75 13.4199 10.09 13.4199 10.5V13.5C13.4199 13.91 13.0799 14.25 12.6699 14.25Z" fill="currentColor" /><path d="M17.6699 14.25C17.2599 14.25 16.9199 13.91 16.9199 13.5V10.5C16.9199 10.09 17.2599 9.75 17.6699 9.75C18.0799 9.75 18.4199 10.09 18.4199 10.5V13.5C18.4199 13.91 18.0799 14.25 17.6699 14.25Z" fill="currentColor" /><path d="M21.6399 16H18.6999C17.4299 16 16.6699 16.76 16.6699 18.03V20.97C16.6699 22.24 17.4299 23 18.6999 23H21.6399C22.9099 23 23.6699 22.24 23.6699 20.97V18.03C23.6699 16.76 22.9099 16 21.6399 16ZM22.1399 20.56C22.3899 20.81 22.3899 21.22 22.1399 21.47C22.0099 21.59 21.8499 21.65 21.6799 21.65C21.5199 21.65 21.3599 21.59 21.2299 21.47L20.1699 20.41L19.1199 21.47C18.9899 21.59 18.8299 21.65 18.6599 21.65C18.4999 21.65 18.3399 21.59 18.2099 21.47C17.9599 21.22 17.9599 20.81 18.2099 20.56L19.2699 19.5L18.2099 18.45C17.9599 18.2 17.9599 17.79 18.2099 17.54C18.4599 17.29 18.8699 17.29 19.1199 17.54L20.1699 18.6L21.2299 17.54C21.4799 17.29 21.8899 17.29 22.1399 17.54C22.3899 17.79 22.3899 18.2 22.1399 18.45L21.0799 19.5L22.1399 20.56Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6399 7.21C22.3599 4.48 20.1899 2.31 17.4599 2.03C17.2599 2.01 17.0599 2 16.8599 2H8.47992C8.27992 2 8.07992 2.01 7.87992 2.03C5.14992 2.31 2.97992 4.48 2.69992 7.21C2.67992 7.41 2.66992 7.61 2.66992 7.81V16.19C2.66992 16.39 2.67992 16.59 2.69992 16.79C2.97992 19.52 5.14992 21.69 7.87992 21.97C8.07992 21.99 8.27992 22 8.47992 22H14.6699C15.2199 22 15.6699 21.55 15.6699 21V18.03C15.6699 16.36 17.0299 15 18.6999 15H21.6699C22.2199 15 22.6699 14.55 22.6699 14V7.81C22.6699 7.61 22.6599 7.41 22.6399 7.21ZM8.41992 13.5C8.41992 13.91 8.07992 14.25 7.66992 14.25C7.25992 14.25 6.91992 13.91 6.91992 13.5V10.5C6.91992 10.09 7.25992 9.75 7.66992 9.75C8.07992 9.75 8.41992 10.09 8.41992 10.5V13.5ZM13.4199 13.5C13.4199 13.91 13.0799 14.25 12.6699 14.25C12.2599 14.25 11.9199 13.91 11.9199 13.5V10.5C11.9199 10.09 12.2599 9.75 12.6699 9.75C13.0799 9.75 13.4199 10.09 13.4199 10.5V13.5Z" fill="currentColor" /><path d="M21.6399 16H18.6999C17.4299 16 16.6699 16.76 16.6699 18.03V20.97C16.6699 22.24 17.4299 23 18.6999 23H21.6399C22.9099 23 23.6699 22.24 23.6699 20.97V18.03C23.6699 16.76 22.9099 16 21.6399 16ZM22.1399 20.56C22.3899 20.81 22.3899 21.22 22.1399 21.47C22.0099 21.59 21.8399 21.65 21.6799 21.65C21.5199 21.65 21.3499 21.59 21.2199 21.47L20.1599 20.41L19.1199 21.47C18.9899 21.59 18.8299 21.65 18.6499 21.65C18.4999 21.65 18.3299 21.59 18.2099 21.47C17.9599 21.22 17.9599 20.81 18.2099 20.56L19.2699 19.5L18.2099 18.45C17.9599 18.2 17.9599 17.79 18.2099 17.54C18.4599 17.29 18.8699 17.29 19.1199 17.54L20.1599 18.6L21.2199 17.54C21.4699 17.29 21.8899 17.29 22.1399 17.54C22.3899 17.79 22.3899 18.2 22.1399 18.45L21.0799 19.5L22.1399 20.56Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconChartFail;