import { FC } from 'react';
import { IconProps } from "../../types";

const IconMonitorRecorder: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.89V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 17.2202V22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 13H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 22H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.8598 9.36977H13.0998C11.7198 9.36977 11.2598 8.44977 11.2598 7.52977V4.00977C11.2598 2.90977 12.1598 2.00977 13.2598 2.00977H17.8598C18.8798 2.00977 19.6998 2.82977 19.6998 3.84977V7.52977C19.6998 8.54977 18.8798 9.36977 17.8598 9.36977Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.9102 7.91998L19.7002 7.06998V4.30998L20.9102 3.45998C21.5102 3.04998 22.0002 3.29998 22.0002 4.02998V7.35998C22.0002 8.08998 21.5102 8.33998 20.9102 7.91998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.97 6.41V12.91H2V6.41C2 3.98 3.98 2 6.41 2H17.56C19.99 2 21.97 3.98 21.97 6.41Z" fill="currentColor" /><path d="M2 12.9199V13.1199C2 15.5599 3.98 17.5299 6.41 17.5299H10.25C10.8 17.5299 11.25 17.9799 11.25 18.5299V19.4999C11.25 20.0499 10.8 20.4999 10.25 20.4999H7.83C7.42 20.4999 7.08 20.8399 7.08 21.2499C7.08 21.6599 7.41 21.9999 7.83 21.9999H16.18C16.59 21.9999 16.93 21.6599 16.93 21.2499C16.93 20.8399 16.59 20.4999 16.18 20.4999H13.76C13.21 20.4999 12.76 20.0499 12.76 19.4999V18.5299C12.76 17.9799 13.21 17.5299 13.76 17.5299H17.57C20.01 17.5299 21.98 15.5499 21.98 13.1199V12.9199H2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMonitorRecorder;