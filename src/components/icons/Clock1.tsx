import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconClock1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 9.66016V12.4502L13.4 13.8502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 12C5.5 8.41 8.41 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 14.08 17.52 15.94 16 17.13H15.99C14.89 17.99 13.51 18.5 12 18.5C10.51 18.5 9.14 18 8.04 17.15H8.03C6.49 15.96 5.5 14.1 5.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.03027 17.1499H8.04027C9.14027 17.9999 10.5103 18.4999 12.0003 18.4999C13.5103 18.4999 14.8903 17.9899 15.9903 17.1299H16.0003L15.4903 19.5999C15.0003 21.4999 13.9003 21.9999 12.5503 21.9999H11.4603C10.1103 21.9999 9.00027 21.4999 8.52027 19.5899L8.03027 17.1499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.03027 6.85H8.04027C9.14027 6 10.5103 5.5 12.0003 5.5C13.5103 5.5 14.8903 6.01 15.9903 6.87H16.0003L15.4903 4.4C15.0003 2.5 13.9003 2 12.5503 2H11.4603C10.1103 2 9.00027 2.5 8.52027 4.41L8.03027 6.85Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M15.7106 15.93C15.5806 15.93 15.4506 15.9 15.3306 15.82L12.2306 13.97C11.4606 13.51 10.8906 12.5 10.8906 11.61V7.51001C10.8906 7.10001 11.2306 6.76001 11.6406 6.76001C12.0506 6.76001 12.3906 7.10001 12.3906 7.51001V11.61C12.3906 11.97 12.6906 12.5 13.0006 12.68L16.1006 14.53C16.4606 14.74 16.5706 15.2 16.3606 15.56C16.2106 15.8 15.9606 15.93 15.7106 15.93Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClock1 as IconComponentType).keywords = [
  "clock",
  "1",
  "time",
  "stopwatch",
  "watch",
  "impactor",
  "clockwork",
  "pendulum",
  "timer",
  "dial",
  "countdown",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconClock1 as IconComponentType;