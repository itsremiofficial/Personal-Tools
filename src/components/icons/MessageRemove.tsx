import { FC } from 'react';
import { IconProps } from "../../types";

const IconMessages: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.0003 12.8598C22.0003 15.1498 20.8203 17.1798 19.0003 18.4598L17.6603 21.4098C17.3503 22.0798 16.4503 22.2098 15.9803 21.6398L14.5003 19.8598C12.0803 19.8598 9.92031 18.7898 8.57031 17.1198L9.50031 15.9998C13.6403 15.9998 17.0003 12.8698 17.0003 8.99982C17.0003 7.94982 16.7503 6.95982 16.3003 6.06982C19.5703 6.81982 22.0003 9.5798 22.0003 12.8598Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 18.4299H13L8.54999 21.39C7.88999 21.83 7 21.3599 7 20.5599V18.4299C4 18.4299 2 16.4299 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.4299C22 16.4299 20 18.4299 17 18.4299Z" fill="currentColor" /><path d="M11.9998 12.1099C11.5898 12.1099 11.2498 11.7699 11.2498 11.3599V11.1499C11.2498 9.9899 12.0998 9.41989 12.4198 9.19989C12.7898 8.94989 12.9098 8.7799 12.9098 8.5199C12.9098 8.0199 12.4998 7.60986 11.9998 7.60986C11.4998 7.60986 11.0898 8.0199 11.0898 8.5199C11.0898 8.9299 10.7498 9.2699 10.3398 9.2699C9.92984 9.2699 9.58984 8.9299 9.58984 8.5199C9.58984 7.1899 10.6698 6.10986 11.9998 6.10986C13.3298 6.10986 14.4098 7.1899 14.4098 8.5199C14.4098 9.6599 13.5698 10.2299 13.2598 10.4399C12.8698 10.6999 12.7498 10.8699 12.7498 11.1499V11.3599C12.7498 11.7799 12.4098 12.1099 11.9998 12.1099Z" fill="currentColor" /><path d="M12 14.6001C11.58 14.6001 11.25 14.2601 11.25 13.8501C11.25 13.4401 11.59 13.1001 12 13.1001C12.41 13.1001 12.75 13.4401 12.75 13.8501C12.75 14.2601 12.42 14.6001 12 14.6001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessages;