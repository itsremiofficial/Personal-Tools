import { FC } from 'react';
import { IconProps } from "../../types";

const IconPenClose: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M21.1901 8.0399L18.0101 4.85991C16.8101 3.65991 15.1601 3.71993 14.3501 5.00993L12.5801 7.80992L18.2501 13.4799L21.0501 11.7099C22.2601 10.9399 22.3301 9.1699 21.1901 8.0399Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.2506 13.4697L18.4906 17.5897C18.7206 19.8897 17.9206 20.6897 15.7406 20.9497L7.0206 21.9797C5.1806 22.1897 3.8606 20.8698 4.0806 19.0398L5.06059 10.7598" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.5801 7.81018L10.8301 7.7002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.28125 20.7799L8.46126 17.5898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.7003 7.67981L5.32031 5.2998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.68077 5.31982L5.30078 7.69983" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill="currentColor" /><path d="M10.72 15.0298V8.9698C10.72 8.4898 10.52 8.2998 10.01 8.2998H8.71C8.2 8.2998 8 8.4898 8 8.9698V15.0298C8 15.5098 8.2 15.6998 8.71 15.6998H10C10.52 15.6998 10.72 15.5098 10.72 15.0298Z" fill="currentColor" /><path d="M15.9991 15.0298V8.9698C15.9991 8.4898 15.7991 8.2998 15.2891 8.2998H13.9991C13.4891 8.2998 13.2891 8.4898 13.2891 8.9698V15.0298C13.2891 15.5098 13.4891 15.6998 13.9991 15.6998H15.2891C15.7991 15.6998 15.9991 15.5098 15.9991 15.0298Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPenClose;