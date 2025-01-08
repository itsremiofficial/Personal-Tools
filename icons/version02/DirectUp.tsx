import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.84021 4.71L3.74021 16.3C2.29021 19.05 5.22021 22.04 8.00021 20.65L11.2402 19.03C12.1402 18.58 13.2002 18.58 14.1002 19.03L17.3402 20.65C20.1202 22.04 23.0402 19.05 21.6002 16.3L15.5002 4.71C14.3002 2.43 11.0402 2.43 9.84021 4.71Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6901 21.2902L14.2101 19.5502C13.2401 19.0702 12.1101 19.0702 11.1401 19.5502L7.66008 21.2902C4.67008 22.7802 1.52008 19.5702 3.08008 16.6202L3.90008 15.0802C4.01008 14.8702 4.19008 14.7002 4.41008 14.6002L17.0501 8.90017C17.5701 8.67017 18.1801 8.88017 18.4401 9.38017L22.2501 16.6202C23.8101 19.5702 20.6701 22.7802 17.6901 21.2902Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.2704 7.69002L7.99037 11.42C7.06037 11.84 6.12037 10.84 6.60037 9.94002L9.64037 4.17002C10.9304 1.72002 14.4304 1.72002 15.7204 4.17002L16.7904 6.21002C17.0704 6.76002 16.8304 7.44002 16.2704 7.69002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64922)"><path d="M17.6901 21.2902L14.2101 19.5502C13.2401 19.0702 12.1101 19.0702 11.1401 19.5502L7.66008 21.2902C4.67008 22.7802 1.52008 19.5702 3.08008 16.6202L3.90008 15.0802C4.01008 14.8702 4.19008 14.7002 4.41008 14.6002L17.0501 8.90017C17.5701 8.67017 18.1801 8.88017 18.4401 9.38017L22.2501 16.6202C23.8101 19.5702 20.6701 22.7802 17.6901 21.2902Z" fill="currentColor" /><path d="M16.2704 7.69002L7.99037 11.42C7.06037 11.84 6.12037 10.84 6.60037 9.94002L9.64037 4.17002C10.9304 1.72002 14.4304 1.72002 15.7204 4.17002L16.7904 6.21002C17.0704 6.76002 16.8304 7.44002 16.2704 7.69002Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectUp as IconComponentType).keywords = [
  "direct",
  "up",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconDirectUp as IconComponentType;