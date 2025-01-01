import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCode1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.89062 9C7.87063 9.49 8.71062 10.23 9.32062 11.15C9.67062 11.67 9.67062 12.34 9.32062 12.86C8.71062 13.77 7.87063 14.51 6.89062 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 8V16.19C22 19.83 19.83 22 16.19 22H7.81C4.17 22 2 19.83 2 16.19V8.01L22 8Z" fill="currentColor" /><path d="M9.00094 17.7499C8.89094 17.7499 8.77094 17.7199 8.67094 17.6699C7.90094 17.2799 7.24094 16.6999 6.76094 15.9799C6.36094 15.3799 6.36094 14.6099 6.76094 14.0099C7.24094 13.2899 7.90094 12.7099 8.67094 12.3299C9.04094 12.1399 9.49094 12.2999 9.68094 12.6699C9.87094 13.0399 9.72094 13.4899 9.34094 13.6799C8.80094 13.9499 8.34094 14.3599 8.01094 14.8599C7.95094 14.9499 7.95094 15.0699 8.01094 15.1699C8.34094 15.6699 8.80094 16.0799 9.34094 16.3499C9.71094 16.5399 9.86094 16.9899 9.68094 17.3599C9.54094 17.5999 9.27094 17.7499 9.00094 17.7499Z" fill="currentColor" /><path d="M15.2092 17.7499C14.9292 17.7499 14.6692 17.5999 14.5392 17.3399C14.3492 16.9699 14.4992 16.5199 14.8792 16.3299C15.4192 16.0599 15.8792 15.6499 16.2092 15.1499C16.2692 15.0599 16.2692 14.9399 16.2092 14.8399C15.8792 14.3399 15.4192 13.9299 14.8792 13.6599C14.5092 13.4699 14.3592 13.0199 14.5392 12.6499C14.7292 12.2799 15.1792 12.1299 15.5492 12.3099C16.3192 12.6999 16.9792 13.2799 17.4592 13.9999C17.8592 14.5999 17.8592 15.3699 17.4592 15.9699C16.9792 16.6899 16.3192 17.2699 15.5492 17.6499C15.4292 17.7199 15.3192 17.7499 15.2092 17.7499Z" fill="currentColor" /><path d="M22 7.81V8L2 8.01V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCode1 as IconComponentType).keywords = [
  "code",
  "1",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code",
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

export default IconCode1 as IconComponentType;