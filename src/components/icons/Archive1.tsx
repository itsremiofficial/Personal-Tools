import { FC } from 'react';
import { IconProps } from "../../types";

const IconArchive1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 10.2202V19.0002C19.5 21.0002 19 22.0002 16.5 22.0002H7.5C5 22.0002 4.5 21.0002 4.5 19.0002V10.2202" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M10.1797 14H13.8197" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" fill="currentColor" /><path d="M12.0007 10.2801C10.9807 10.2801 9.96074 10.1001 8.99074 9.75005C8.60074 9.61005 8.40074 9.18005 8.54074 8.79005C8.69074 8.40005 9.12074 8.20005 9.51074 8.34005C11.1207 8.92005 12.8907 8.92005 14.5007 8.34005C14.8907 8.20005 15.3207 8.40005 15.4607 8.79005C15.6007 9.18005 15.4007 9.61005 15.0107 9.75005C14.0407 10.1001 13.0207 10.2801 12.0007 10.2801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArchive1;