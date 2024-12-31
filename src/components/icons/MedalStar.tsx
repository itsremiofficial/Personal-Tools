import { FC } from 'react';
import { IconProps } from "../../types";

const IconMenu: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5401 8.31014C18.8987 8.31014 20.0001 7.20876 20.0001 5.85014C20.0001 4.49152 18.8987 3.39014 17.5401 3.39014C16.1814 3.39014 15.0801 4.49152 15.0801 5.85014C15.0801 7.20876 16.1814 8.31014 17.5401 8.31014Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.46001 8.31014C7.81863 8.31014 8.92 7.20876 8.92 5.85014C8.92 4.49152 7.81863 3.39014 6.46001 3.39014C5.10139 3.39014 4 4.49152 4 5.85014C4 7.20876 5.10139 8.31014 6.46001 8.31014Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.5401 20.6099C18.8987 20.6099 20.0001 19.5086 20.0001 18.1499C20.0001 16.7913 18.8987 15.6899 17.5401 15.6899C16.1814 15.6899 15.0801 16.7913 15.0801 18.1499C15.0801 19.5086 16.1814 20.6099 17.5401 20.6099Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.46001 20.6099C7.81863 20.6099 8.92 19.5086 8.92 18.1499C8.92 16.7913 7.81863 15.6899 6.46001 15.6899C5.10139 15.6899 4 16.7913 4 18.1499C4 19.5086 5.10139 20.6099 6.46001 20.6099Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.51974 13.5201L7.50977 20.9001C7.50977 21.8001 8.13977 22.2401 8.91977 21.8701L11.5998 20.6001C11.8198 20.4901 12.1898 20.4901 12.4098 20.6001L15.0998 21.8701C15.8698 22.2301 16.5098 21.8001 16.5098 20.9001V13.3401" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMenu;