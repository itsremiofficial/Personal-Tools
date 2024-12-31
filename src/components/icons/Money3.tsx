import { FC } from 'react';
import { IconProps } from "../../types";

const IconMoney4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 9V15H21C18 15 17 16 17 19V20.5H7V19C7 16 6 15 3 15H2V9H3C6 9 7 8 7 5V3.5H17V5C17 8 18 9 21 9H22Z" fill="currentColor" /><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor" /><path d="M7 3.5V5C7 8 6 9 3 9H2V8.5C2 5 4 3.5 7 3.5Z" fill="currentColor" /><path d="M22 8.5V9H21C18 9 17 8 17 5V3.5C20 3.5 22 5 22 8.5Z" fill="currentColor" /><path d="M7 19V20.5C4 20.5 2 19 2 15.5V15H3C6 15 7 16 7 19Z" fill="currentColor" /><path d="M22 15V15.5C22 19 20 20.5 17 20.5V19C17 16 18 15 21 15H22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMoney4;