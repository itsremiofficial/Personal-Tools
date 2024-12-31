import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStickynote: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 11H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 15H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 22H9C4 22 3 19.94 3 15.82V9.65C3 4.95 4.67 3.69 8 3.5H16C19.33 3.68 21 4.95 21 9.65V16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.5 8.37V15.82C21.5 15.97 21.45 16.12 21.32 16.25C19.87 17.71 17.29 20.31 15.81 21.8C15.68 21.94 15.51 22 15.34 22H7.37C4.68 22 2.5 19.82 2.5 17.13V8.37C2.5 5.68 4.68 3.5 7.37 3.5H16.63C19.32 3.5 21.5 5.68 21.5 8.37Z" fill="currentColor" /><path d="M8.28906 6.29C7.86906 6.29 7.53906 5.95 7.53906 5.54V2.75C7.53906 2.34 7.86906 2 8.28906 2C8.70906 2 9.03906 2.34 9.03906 2.75V5.53C9.03906 5.95 8.70906 6.29 8.28906 6.29Z" fill="currentColor" /><path d="M15.7109 6.29C15.2909 6.29 14.9609 5.95 14.9609 5.54V2.75C14.9609 2.33 15.3009 2 15.7109 2C16.1309 2 16.4609 2.34 16.4609 2.75V5.53C16.4609 5.95 16.1309 6.29 15.7109 6.29Z" fill="currentColor" /><path d="M14.7794 12.71H7.35938C6.93938 12.71 6.60938 12.37 6.60938 11.96C6.60938 11.55 6.94938 11.21 7.35938 11.21H14.7794C15.1994 11.21 15.5294 11.55 15.5294 11.96C15.5294 12.37 15.1994 12.71 14.7794 12.71Z" fill="currentColor" /><path d="M11.9994 16.4199H7.35938C6.93938 16.4199 6.60938 16.0799 6.60938 15.6699C6.60938 15.2499 6.94938 14.9199 7.35938 14.9199H11.9994C12.4194 14.9199 12.7494 15.2599 12.7494 15.6699C12.7494 16.0799 12.4194 16.4199 11.9994 16.4199Z" fill="currentColor" /><path d="M21.4995 15.8202C21.4995 15.9702 21.4495 16.1202 21.3195 16.2502C19.8695 17.7102 17.2895 20.3102 15.8095 21.8002C15.6795 21.9402 15.5095 22.0002 15.3395 22.0002C15.0095 22.0002 14.6895 21.7402 14.6895 21.3602V17.8602C14.6895 16.4002 15.9295 15.1902 17.4495 15.1902C18.3995 15.1802 19.7195 15.1802 20.8495 15.1802C21.2395 15.1802 21.4995 15.4902 21.4995 15.8202Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStickynote as IconComponentType).keywords = [
  "stickynote"
];

export default IconStickynote as IconComponentType;