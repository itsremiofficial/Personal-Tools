import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDiscover1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7991 2.1L7.86912 4.59C6.41912 4.95 4.94912 6.42 4.58912 7.87L2.09912 17.8C1.34912 20.8 3.18912 22.65 6.19912 21.9L16.1291 19.42C17.5691 19.06 19.0491 17.58 19.4091 16.14L21.8991 6.2C22.6491 3.2 20.7991 1.35 17.7991 2.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M14.3246 14.3265C16.2069 12.4442 16.6913 9.87676 15.4065 8.59195C14.1217 7.30713 11.5542 7.7915 9.67189 9.67381C7.78958 11.5561 7.30522 14.1236 8.59003 15.4084C9.87484 16.6932 12.4423 16.2088 14.3246 14.3265Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDiscover1 as IconComponentType).keywords = [
  "discover",
  "1",
  "bring out",
  "get wind",
  "divulge",
  "detect",
  "declare",
  "find out",
  "come upon",
  "find",
  "observe",
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

export default IconDiscover1 as IconComponentType;