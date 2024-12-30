import { FC } from 'react';
import { IconProps } from "../../types";

const IconFacebook: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14 9.29999V12.25H16.63C16.82 12.25 16.96 12.42 16.92 12.61L16.54 14.51C16.51 14.65 16.39 14.75 16.25 14.75H14V22H11V14.75H9.29999C9.12999 14.75 9 14.62 9 14.45V12.55C9 12.38 9.12999 12.25 9.29999 12.25H11V9C11 7.34 12.34 6 14 6H16.7C16.87 6 17 6.12999 17 6.29999V8.70001C17 8.87001 16.87 9 16.7 9H14.3C14.13 9 14 9.12999 14 9.29999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" /><path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M16.7475 7H11.9175C11.5075 7 11.1675 7.34 11.1675 7.75C11.1675 8.16 11.5075 8.5 11.9175 8.5H14.9375L7.2175 16.22C6.9275 16.51 6.9275 16.99 7.2175 17.28C7.3675 17.43 7.5575 17.5 7.7475 17.5C7.9375 17.5 8.1275 17.43 8.2775 17.28L15.9975 9.56V12.58C15.9975 12.99 16.3375 13.33 16.7475 13.33C17.1575 13.33 17.4975 12.99 17.4975 12.58V7.75C17.4975 7.34 17.1575 7 16.7475 7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFacebook;