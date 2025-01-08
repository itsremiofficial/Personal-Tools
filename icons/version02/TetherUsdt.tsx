import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTetherUsdt: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14012 3.35001H17.2001C18.2601 3.35001 19.5101 4.12001 19.9801 5.07001L22.3801 9.89001C22.9601 11.05 22.6401 12.7 21.6901 13.57L14.7601 19.86C13.6101 20.9 11.7401 20.9 10.5901 19.86L3.66012 13.57C2.70012 12.7 2.39012 11.05 2.97012 9.89001L5.37011 5.07001C5.83011 4.12001 7.08012 3.35001 8.14012 3.35001Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 14.5V8.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.66992 8.5H16.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M8.14012 3.35H17.2001C18.2601 3.35 19.5101 4.12 19.9801 5.07L22.3801 9.89C22.9601 11.05 22.6401 12.7 21.6901 13.57L14.7601 19.86C13.6101 20.9 11.7401 20.9 10.5901 19.86L3.66012 13.57C2.70012 12.7 2.39012 11.05 2.97012 9.89L5.37012 5.07C5.83012 4.12 7.08012 3.35 8.14012 3.35Z" fill="currentColor" /><path d="M16.6699 7.75H8.66992C8.25992 7.75 7.91992 8.09 7.91992 8.5C7.91992 8.91 8.25992 9.25 8.66992 9.25H11.9199V14.5C11.9199 14.91 12.2599 15.25 12.6699 15.25C13.0799 15.25 13.4199 14.91 13.4199 14.5V9.25H16.6699C17.0799 9.25 17.4199 8.91 17.4199 8.5C17.4199 8.09 17.0799 7.75 16.6699 7.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.38 9.9L19.98 5.08C19.51 4.13 18.26 3.36 17.2 3.36H8.14002C7.08002 3.36 5.83002 4.13 5.36002 5.08L2.96001 9.9C2.38001 11.06 2.70002 12.71 3.65002 13.58L10.58 19.87C11.73 20.91 13.6 20.91 14.75 19.87L21.68 13.58C22.64 12.71 22.96 11.05 22.38 9.9ZM16.67 9.25H13.42V14.5C13.42 14.91 13.08 15.25 12.67 15.25C12.26 15.25 11.92 14.91 11.92 14.5V9.25H8.67002C8.26002 9.25 7.92002 8.91 7.92002 8.5C7.92002 8.09 8.26002 7.75 8.67002 7.75H16.67C17.08 7.75 17.42 8.09 17.42 8.5C17.42 8.91 17.08 9.25 16.67 9.25Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTetherUsdt as IconComponentType).keywords = [
  "tether",
  "usdt",
  "leash",
  "lead",
  "fasten",
  "fastening",
  "bind",
  "attach",
  "cover",
  "cable",
  "strap"
];

export default IconTetherUsdt as IconComponentType;