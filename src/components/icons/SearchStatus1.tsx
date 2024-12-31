import { FC } from 'react';
import { IconProps } from "../../types";

const IconSearchZoomIn: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.2002 11.7002H14.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7002 14.2002V9.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.0002 20.01C15.9763 20.01 20.0102 15.9761 20.0102 11C20.0102 6.0239 15.9763 1.98999 11.0002 1.98999C6.02415 1.98999 1.99023 6.0239 1.99023 11C1.99023 15.9761 6.02415 20.01 11.0002 20.01Z" fill="currentColor" /><path d="M14 10.25H8C7.59 10.25 7.25 9.91 7.25 9.5C7.25 9.09 7.59 8.75 8 8.75H14C14.41 8.75 14.75 9.09 14.75 9.5C14.75 9.91 14.41 10.25 14 10.25Z" fill="currentColor" /><path d="M11 13.25H8C7.59 13.25 7.25 12.91 7.25 12.5C7.25 12.09 7.59 11.75 8 11.75H11C11.41 11.75 11.75 12.09 11.75 12.5C11.75 12.91 11.41 13.25 11 13.25Z" fill="currentColor" /><path d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSearchZoomIn;