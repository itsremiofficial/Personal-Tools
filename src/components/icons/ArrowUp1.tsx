import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowUp1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9201 15.0501L13.4001 8.53014C12.6301 7.76014 11.3701 7.76014 10.6001 8.53014L4.08008 15.0501" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.18C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path d="M12.5309 5.47L16.8209 9.76C17.1109 10.05 17.1109 10.53 16.8209 10.82C16.5309 11.11 16.0509 11.11 15.7609 10.82L12.7509 7.81V18C12.7509 18.41 12.4109 18.75 12.0009 18.75C11.5909 18.75 11.2509 18.41 11.2509 18V7.81L8.24094 10.82C7.95094 11.11 7.47094 11.11 7.18094 10.82C7.03094 10.67 6.96094 10.48 6.96094 10.29C6.96094 10.1 7.04094 9.9 7.18094 9.76L11.4709 5.47C11.6109 5.33 11.8009 5.25 12.0009 5.25C12.2009 5.25 12.3909 5.33 12.5309 5.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowUp1 as IconComponentType).keywords = [
  "arrow",
  "up",
  "1",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
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

export default IconArrowUp1 as IconComponentType;