import { FC } from 'react';
import { IconProps } from "@/types";

const IconArrowSquareUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.4707 13.4599L12.0007 9.93994L15.5307 13.4599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M15.5302 14.2101C15.3402 14.2101 15.1502 14.1401 15.0002 13.9901L12.0002 10.9901L9.00016 13.9901C8.71016 14.2801 8.23016 14.2801 7.94016 13.9901C7.65016 13.7001 7.65016 13.2201 7.94016 12.9301L11.4702 9.40012C11.7602 9.11012 12.2402 9.11012 12.5302 9.40012L16.0602 12.9301C16.3502 13.2201 16.3502 13.7001 16.0602 13.9901C15.9102 14.1401 15.7202 14.2101 15.5302 14.2101Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowSquareUp;