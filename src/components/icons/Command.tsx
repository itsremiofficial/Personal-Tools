import { FC } from 'react';
import { IconProps } from "../../types";

const IconCommand: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8H8V16H16V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19C2 20.65 3.35 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z" fill="currentColor" /><path d="M21.9701 15.9901C21.9701 19.2901 19.2901 21.9701 15.9901 21.9701C13.9501 21.9701 12.1601 20.9501 11.0801 19.4001C15.4401 18.9101 18.9101 15.4401 19.4001 11.0801C20.9501 12.1601 21.9701 13.9501 21.9701 15.9901Z" fill="currentColor" /><path d="M11.45 9.71016L9.05 8.87016C8.81 8.79016 8.76 8.77016 8.76 8.42016C8.76 8.16016 8.94 7.95016 9.17 7.95016H10.67C10.99 7.95016 11.25 8.24016 11.25 8.60016C11.25 9.01016 11.59 9.35016 12 9.35016C12.41 9.35016 12.75 9.01016 12.75 8.60016C12.75 7.45016 11.86 6.51016 10.75 6.46016V6.41016C10.75 6.00016 10.41 5.66016 10 5.66016C9.59 5.66016 9.25 5.99016 9.25 6.41016V6.46016H9.16C8.11 6.46016 7.25 7.34016 7.25 8.43016C7.25 9.38016 7.67 9.99016 8.54 10.2902L10.95 11.1302C11.19 11.2102 11.24 11.2302 11.24 11.5802C11.24 11.8402 11.06 12.0502 10.83 12.0502H9.33C9.01 12.0502 8.75 11.7602 8.75 11.4002C8.75 10.9902 8.41 10.6502 8 10.6502C7.59 10.6502 7.25 10.9902 7.25 11.4002C7.25 12.5502 8.14 13.4902 9.25 13.5402V13.6002C9.25 14.0102 9.59 14.3502 10 14.3502C10.41 14.3502 10.75 14.0102 10.75 13.6002V13.5502H10.84C11.89 13.5502 12.75 12.6702 12.75 11.5802C12.75 10.6302 12.32 10.0202 11.45 9.71016Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCommand;