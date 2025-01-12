import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSendSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.66992 9.51001L12.6699 6.51001L15.6699 9.51001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 6.51001V14.51" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M6.66992 16.51C10.5599 17.81 14.7799 17.81 18.6699 16.51" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.4897C4.8497 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.8497 21.99 8.4897 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.1396 5.97968C12.4325 5.68679 12.9074 5.68679 13.2003 5.97968L16.2003 8.97968C16.4931 9.27257 16.4931 9.74745 16.2003 10.0403C15.9074 10.3332 15.4325 10.3332 15.1396 10.0403L12.6699 7.57067L10.2003 10.0403C9.90736 10.3332 9.43248 10.3332 9.13959 10.0403C8.8467 9.74745 8.8467 9.27257 9.13959 8.97968L12.1396 5.97968Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.6699 5.76001C13.0841 5.76001 13.4199 6.0958 13.4199 6.51001V14.51C13.4199 14.9242 13.0841 15.26 12.6699 15.26C12.2557 15.26 11.9199 14.9242 11.9199 14.51V6.51001C11.9199 6.0958 12.2557 5.76001 12.6699 5.76001Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.9588 16.2722C6.09008 15.8794 6.51499 15.6674 6.90784 15.7986C10.6436 17.0471 14.6967 17.0471 18.4324 15.7986C18.8253 15.6674 19.2502 15.8794 19.3815 16.2722C19.5127 16.6651 19.3007 17.09 18.9078 17.2213C14.8636 18.5729 10.4767 18.5729 6.43241 17.2213C6.03955 17.09 5.82751 16.6651 5.9588 16.2722Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM9.13992 8.98L12.1399 5.98C12.2099 5.91 12.2899 5.86 12.3799 5.82C12.5599 5.74 12.7699 5.74 12.9499 5.82C13.0399 5.86 13.1199 5.91 13.1899 5.98L16.1899 8.98C16.4799 9.27 16.4799 9.75 16.1899 10.04C16.0399 10.19 15.8499 10.26 15.6599 10.26C15.4699 10.26 15.2799 10.19 15.1299 10.04L13.4099 8.32V14.51C13.4099 14.92 13.0699 15.26 12.6599 15.26C12.2499 15.26 11.9099 14.92 11.9099 14.51V8.32L10.1899 10.04C9.89992 10.33 9.41992 10.33 9.12992 10.04C8.83992 9.75 8.84992 9.28 9.13992 8.98ZM18.9099 17.22C16.8999 17.89 14.7899 18.23 12.6699 18.23C10.5499 18.23 8.43992 17.89 6.42992 17.22C6.03992 17.09 5.82992 16.66 5.95992 16.27C6.08992 15.88 6.51992 15.66 6.90992 15.8C10.6299 17.04 14.7199 17.04 18.4399 15.8C18.8299 15.67 19.2599 15.88 19.3899 16.27C19.5099 16.67 19.2999 17.09 18.9099 17.22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSendSquare;