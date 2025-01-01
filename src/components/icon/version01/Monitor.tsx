import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMonitor: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 13.8284 22 15.2426 21.1213 16.1213C20.2426 17 18.8284 17 16 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V10Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16 22H8M12 17V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 13H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 11.5516 22 12.5494 21.9935 13H2.00652C2 12.5494 2 11.5516 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2Z" fill="currentColor" /><path d="M7.9846 17.5C5.14528 17.5 3.72562 17.5 2.84356 16.6213C2.27207 16.052 2.07085 15.2579 2 14V13H22V14C21.9292 15.2579 21.7279 16.052 21.1564 16.6213C20.2744 17.5 18.8547 17.5 16.0154 17.5H12.7529V21.5H16.0154C16.4312 21.5 16.7683 21.8358 16.7683 22.25C16.7683 22.6642 16.4312 23 16.0154 23H7.9846C7.56879 23 7.23171 22.6642 7.23171 22.25C7.23171 21.8358 7.56879 21.5 7.9846 21.5H11.2471V17.5H7.9846Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17C5.17157 17 3.75736 17 2.87868 16.1213C2.30938 15.552 2.10893 14.7579 2.03835 13.5H21.9616C21.8911 14.7579 21.6906 15.552 21.1213 16.1213C20.2426 17 18.8284 17 16 17H12.75V21H16C16.4142 21 16.75 21.3358 16.75 21.75C16.75 22.1642 16.4142 22.5 16 22.5H8C7.58579 22.5 7.25 22.1642 7.25 21.75C7.25 21.3358 7.58579 21 8 21H11.25V17H8Z" fill="currentColor" /><path d="M10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 11.5516 22 12.0494 21.9935 12.5H2.00652C2 12.0494 2 11.5516 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMonitor as IconComponentType).keywords = [
  "monitor",
  "ride herd on",
  "supervise",
  "proctor",
  "reminder",
  "admonisher",
  "varan",
  "monitor lizard",
  "supervised",
  "manage"
];

export default IconMonitor as IconComponentType;