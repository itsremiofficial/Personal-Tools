import { FC } from 'react';
import { IconProps } from "../../types";

const IconData2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9 5H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16" fill="none" /><path d="M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5 12.5H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.0003 5.71V15.29C22.0003 18.05 19.7603 20.29 17.0003 20.29H7.00031C6.54031 20.29 6.10031 20.23 5.67031 20.11C5.05031 19.94 4.85031 19.15 5.31031 18.69L15.9403 8.06C16.1603 7.84 16.4903 7.79 16.8003 7.85C17.1203 7.91 17.4703 7.82 17.7203 7.58L20.2903 5C21.2303 4.06 22.0003 4.37 22.0003 5.71Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.64 7.36002L4.17 17.83C3.69 18.31 2.89 18.19 2.57 17.59C2.2 16.91 2 16.12 2 15.29V5.71002C2 4.37002 2.77 4.06002 3.71 5.00002L6.29 7.59002C6.68 7.97002 7.32 7.97002 7.71 7.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.71 4.00002L14.65 5.94002C15.03 6.33002 15.03 6.97002 14.64 7.36002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconData2;