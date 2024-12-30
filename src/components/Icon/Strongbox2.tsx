import { FC } from 'react';
import { IconProps } from "../../types";

const IconSubtitle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5004 17.0801H15.6504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.97 17.0801H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5007 13.3198H11.9707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.27 13.3198H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M22 10.1599H14.33C14.32 10.0899 14.32 10.0099 14.3 9.93991C14.09 9.13991 13.44 8.48991 12.64 8.27991C11.2 7.89991 9.89001 8.83991 9.67001 10.1599H2V11.6599H9.91C10.11 12.0399 10.39 12.3599 10.75 12.5799V14.5599C10.75 15.2499 11.31 15.8099 12 15.8099C12.69 15.8099 13.25 15.2499 13.25 14.5599V12.5799C13.61 12.3599 13.89 12.0399 14.09 11.6599H22V10.1599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSubtitle;