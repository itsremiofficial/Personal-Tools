import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMessageQuestion: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 18.4302H13.6699L9.21991 21.3902C8.55991 21.8302 7.66992 21.3602 7.66992 20.5602V18.4302C4.66992 18.4302 2.66992 16.4302 2.66992 13.4302V7.43018C2.66992 4.43018 4.66992 2.43018 7.66992 2.43018H17.6699C20.6699 2.43018 22.6699 4.43018 22.6699 7.43018V13.4302C22.6699 16.4302 20.6699 18.4302 17.6699 18.4302Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6697 11.3599V11.1499C12.6697 10.4699 13.0898 10.1099 13.5098 9.81989C13.9198 9.53989 14.3297 9.1799 14.3297 8.5199C14.3297 7.5999 13.5897 6.85986 12.6697 6.85986C11.7497 6.85986 11.0098 7.5999 11.0098 8.5199" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6654 13.75H12.6744" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.6699 18.4302H13.6699L9.21991 21.3902C8.55991 21.8302 7.66992 21.3602 7.66992 20.5602V18.4302C4.66992 18.4302 2.66992 16.4302 2.66992 13.4302V7.43018C2.66992 4.43018 4.66992 2.43018 7.66992 2.43018H17.6699C20.6699 2.43018 22.6699 4.43018 22.6699 7.43018V13.4302C22.6699 16.4302 20.6699 18.4302 17.6699 18.4302Z" fill="currentColor" /><path d="M12.6697 12.1099C12.2597 12.1099 11.9197 11.7699 11.9197 11.3599V11.1499C11.9197 9.9899 12.7697 9.41989 13.0897 9.19989C13.4597 8.94989 13.5797 8.7799 13.5797 8.5199C13.5797 8.0199 13.1697 7.60986 12.6697 7.60986C12.1697 7.60986 11.7598 8.0199 11.7598 8.5199C11.7598 8.9299 11.4198 9.2699 11.0098 9.2699C10.5998 9.2699 10.2598 8.9299 10.2598 8.5199C10.2598 7.1899 11.3397 6.10986 12.6697 6.10986C13.9997 6.10986 15.0797 7.1899 15.0797 8.5199C15.0797 9.6599 14.2397 10.2299 13.9297 10.4399C13.5397 10.6999 13.4197 10.8699 13.4197 11.1499V11.3599C13.4197 11.7799 13.0797 12.1099 12.6697 12.1099Z" fill="currentColor" /><path d="M12.6699 14.6001C12.2499 14.6001 11.9199 14.2601 11.9199 13.8501C11.9199 13.4401 12.2599 13.1001 12.6699 13.1001C13.0799 13.1001 13.4199 13.4401 13.4199 13.8501C13.4199 14.2601 13.0899 14.6001 12.6699 14.6001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 2.43018H7.66992C4.66992 2.43018 2.66992 4.43018 2.66992 7.43018V13.4302C2.66992 16.4302 4.66992 18.4302 7.66992 18.4302V20.5602C7.66992 21.3602 8.55992 21.8402 9.21992 21.3902L13.6699 18.4302H17.6699C20.6699 18.4302 22.6699 16.4302 22.6699 13.4302V7.43018C22.6699 4.43018 20.6699 2.43018 17.6699 2.43018ZM12.6699 14.6002C12.2499 14.6002 11.9199 14.2602 11.9199 13.8502C11.9199 13.4402 12.2499 13.1002 12.6699 13.1002C13.0899 13.1002 13.4199 13.4402 13.4199 13.8502C13.4199 14.2602 13.0899 14.6002 12.6699 14.6002ZM13.9299 10.4502C13.5399 10.7102 13.4199 10.8802 13.4199 11.1602V11.3702C13.4199 11.7802 13.0799 12.1202 12.6699 12.1202C12.2599 12.1202 11.9199 11.7802 11.9199 11.3702V11.1602C11.9199 10.0002 12.7699 9.43018 13.0899 9.21018C13.4599 8.96018 13.5799 8.79018 13.5799 8.53018C13.5799 8.03018 13.1699 7.62018 12.6699 7.62018C12.1699 7.62018 11.7599 8.03018 11.7599 8.53018C11.7599 8.94018 11.4199 9.28018 11.0099 9.28018C10.5999 9.28018 10.2599 8.94018 10.2599 8.53018C10.2599 7.20018 11.3399 6.12018 12.6699 6.12018C13.9999 6.12018 15.0799 7.20018 15.0799 8.53018C15.0799 9.67018 14.2399 10.2402 13.9299 10.4502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessageQuestion;