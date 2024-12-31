import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRam: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.99047 21.97L7.98047 19C7.98047 17.89 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.9697 7.77979H7.96973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.5 10V12.17C18.5 12.7 18.71 13.21 19.09 13.59L19.91 14.41C20.29 14.79 20.5 15.3 20.5 15.83V17C20.5 19.85 19.12 21.8 16.01 21.98L15.99 18.99C15.98 17.89 15.09 17 13.99 17H9.98C8.87 17 7.98 17.9 7.98 19L7.99 21.98C4.83 21.8 3.5 19.85 3.5 17V7C3.5 4 4.97 2 8.5 2H15.5C18.97 2 20.5 4 20.5 7V8C20.5 8.55 20.05 9 19.5 9C18.95 9 18.5 9.45 18.5 10Z" fill="currentColor" /><path d="M16.0105 21.98C15.8505 21.99 15.6805 22 15.5005 22H8.50047C8.32047 22 8.15047 22 7.99047 21.98L7.98047 19C7.98047 17.9 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0105 21.98Z" fill="currentColor" /><path d="M13.9707 8.53003H7.9707C7.5607 8.53003 7.2207 8.19003 7.2207 7.78003C7.2207 7.37003 7.5607 7.03003 7.9707 7.03003H13.9707C14.3807 7.03003 14.7207 7.37003 14.7207 7.78003C14.7207 8.19003 14.3907 8.53003 13.9707 8.53003Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRam as IconComponentType).keywords = [
  "ram",
  "random-access memory",
  "random access memory",
  "pound",
  "jampack",
  "pack",
  "cram",
  "run",
  "drive",
  "crash"
];

export default IconRam as IconComponentType;