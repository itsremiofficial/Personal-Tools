import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconPathSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.4202 9.11998L15.5702 7.26998C14.8702 6.56998 13.9102 6.60998 13.4402 7.34998L12.4102 8.97998L15.7002 12.27L17.3302 11.24C18.0402 10.8 18.0802 9.76998 17.4202 9.11998Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.4094 8.98017L10.0194 8.84017C8.6794 8.76017 8.2194 9.17017 8.0694 10.4402L7.4694 15.5102C7.3394 16.5802 8.1094 17.3402 9.1794 17.2202L14.2494 16.6202C15.5194 16.4702 15.9794 16.0102 15.8494 14.6702L15.7094 12.2802" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16016 16.5199L10.0102 14.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M17.3302 11.25L15.7102 12.27L12.4102 8.97998L13.4402 7.34998C13.9102 6.60998 14.8702 6.56998 15.5702 7.26998L17.4202 9.11998C18.0802 9.76998 18.0402 10.8 17.3302 11.25Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M14.2495 16.6199L9.17951 17.2199C8.95951 17.2499 8.75951 17.2399 8.56951 17.1799C8.01951 17.0599 7.62951 16.6699 7.50951 16.1199C7.44951 15.9299 7.43951 15.7299 7.46951 15.5099L8.05951 10.4399C8.21951 9.16993 8.67951 8.75993 10.0195 8.83993L12.4095 8.97993L15.7095 12.2699L15.8495 14.6699C15.9795 16.0099 15.5195 16.4699 14.2495 16.6199Z" fill="currentColor" /><path d="M10.5498 15.2001L8.56977 17.1801C8.01977 17.0601 7.62977 16.6701 7.50977 16.1201L9.47977 14.1401C9.77977 13.8501 10.2498 13.8501 10.5498 14.1401C10.8398 14.4301 10.8398 14.9101 10.5498 15.2001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM17.3299 11.25L15.7099 12.27L15.8499 14.67C15.9799 16.01 15.5199 16.47 14.2499 16.62L9.17992 17.22C8.90168 17.2579 8.80724 16.9427 9.00581 16.7441L10.5499 15.2C10.8399 14.91 10.8399 14.43 10.5499 14.14C10.2499 13.85 9.77992 13.85 9.47992 14.14L7.9447 15.683C7.74691 15.8818 7.43203 15.7879 7.46992 15.51L8.05992 10.44C8.21992 9.17 8.67992 8.76 10.0199 8.84L12.4099 8.98L13.4399 7.35C13.9099 6.61 14.8699 6.57 15.5699 7.27L17.4199 9.12C18.0799 9.77 18.0399 10.8 17.3299 11.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPathSquare;