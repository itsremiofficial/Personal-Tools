import { FC } from 'react';
import { IconProps } from "@/types";

const IconSecurityTime: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4901 2.23006L5.50015 4.10006C4.35015 4.53006 3.41016 5.89006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19017 17.2801 5.14017 17.9901L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.9901C19.8302 17.2801 20.6101 15.7301 20.6101 14.5501V7.12006C20.6101 5.89006 19.6701 4.53006 18.5201 4.10006L13.5302 2.23006C12.6802 1.92006 11.3201 1.92006 10.4901 2.23006Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.25 10.25V11.18C12.25 11.53 12.07 11.86 11.76 12.04L11 12.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.9608 2.10989L5.46078 4.16989C4.41078 4.56989 3.55078 5.80989 3.55078 6.93989V15.0399C3.55078 15.8499 4.08078 16.9199 4.73078 17.3999L10.2308 21.5099C11.2008 22.2399 12.7908 22.2399 13.7608 21.5099L19.2608 17.3999C19.9108 16.9099 20.4408 15.8499 20.4408 15.0399V6.93989C20.4408 5.81989 19.5808 4.56988 18.5308 4.17988L13.0308 2.11989C12.4708 1.89989 11.5308 1.89989 10.9608 2.10989Z" fill="currentColor" /><path d="M12 16.25C9.38 16.25 7.25 14.12 7.25 11.5C7.25 8.88 9.38 6.75 12 6.75C14.62 6.75 16.75 8.88 16.75 11.5C16.75 14.12 14.62 16.25 12 16.25ZM12 8.25C10.21 8.25 8.75 9.71 8.75 11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5C15.25 9.71 13.79 8.25 12 8.25Z" fill="currentColor" /><path d="M10.9999 13.25C10.7499 13.25 10.4999 13.12 10.3599 12.89C10.1499 12.53 10.2599 12.07 10.6199 11.86L11.3799 11.4C11.4599 11.35 11.4999 11.27 11.4999 11.19V10.26C11.4999 9.85001 11.8399 9.51001 12.2499 9.51001C12.6599 9.51001 12.9999 9.84001 12.9999 10.25V11.18C12.9999 11.79 12.6699 12.37 12.1499 12.68L11.3799 13.14C11.2699 13.22 11.1299 13.25 10.9999 13.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSecurityTime;