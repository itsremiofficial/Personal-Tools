import { FC } from 'react';
import { IconProps } from "@/types";

const IconDiscover: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M13.5 8C10.47 8 8 10.48 8 13.5C8 14.87 9.12 16 10.5 16C13.52 16 16 13.52 16 10.5C16 9.13 14.87 8 13.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.9808 3.0201C20.1108 2.1501 18.8808 1.8101 17.6908 2.1101L7.89084 4.5601C6.24084 4.9701 4.97084 6.2501 4.56084 7.8901L2.11084 17.7001C1.81084 18.8901 2.15084 20.1201 3.02084 20.9901C3.68084 21.6401 4.55084 22.0001 5.45084 22.0001C5.73084 22.0001 6.02084 21.9701 6.30084 21.8901L16.1108 19.4401C17.7508 19.0301 19.0308 17.7601 19.4408 16.1101L21.8908 6.3001C22.1908 5.1101 21.8508 3.8801 20.9808 3.0201Z" fill="currentColor" /><path d="M11.9991 15.8801C14.142 15.8801 15.8791 14.143 15.8791 12.0001C15.8791 9.85725 14.142 8.12012 11.9991 8.12012C9.85628 8.12012 8.11914 9.85725 8.11914 12.0001C8.11914 14.143 9.85628 15.8801 11.9991 15.8801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDiscover;