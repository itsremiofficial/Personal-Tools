import { FC } from 'react';
import { IconProps } from "../../types";

const IconTrendUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 9.5H16.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1694 10.0601H7.82933C6.64933 10.0601 6.23934 9.27007 6.92934 8.31007L11.0994 2.47007C11.5894 1.77007 12.4093 1.77007 12.8993 2.47007L17.0694 8.31007C17.7594 9.27007 17.3494 10.0601 16.1694 10.0601Z" fill="currentColor" /><path d="M17.5896 18.0001H6.4096C4.8296 18.0001 4.2896 16.9501 5.2196 15.6701L9.20959 10.0601H14.7896L18.7796 15.6701C19.7096 16.9501 19.1696 18.0001 17.5896 18.0001Z" fill="currentColor" /><path d="M12.75 18V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V18H12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTrendUp;