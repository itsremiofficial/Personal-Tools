import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMessages: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.0003 12.8598C22.0003 15.1498 20.8203 17.1798 19.0003 18.4598L17.6603 21.4098C17.3503 22.0798 16.4503 22.2098 15.9803 21.6398L14.5003 19.8598C12.0803 19.8598 9.92031 18.7898 8.57031 17.1198L9.50031 15.9998C13.6403 15.9998 17.0003 12.8698 17.0003 8.99982C17.0003 7.94982 16.7503 6.95982 16.3003 6.06982C19.5703 6.81982 22.0003 9.5798 22.0003 12.8598Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z" fill="currentColor" /><path d="M22.0003 12.8598C22.0003 15.1498 20.8203 17.1798 19.0003 18.4598L17.6603 21.4098C17.3503 22.0798 16.4503 22.2098 15.9803 21.6398L14.5003 19.8598C12.0803 19.8598 9.92031 18.7898 8.57031 17.1198L9.50031 15.9998C13.6403 15.9998 17.0003 12.8698 17.0003 8.99982C17.0003 7.94982 16.7503 6.95982 16.3003 6.06982C19.5703 6.81982 22.0003 9.5798 22.0003 12.8598Z" fill="currentColor" /><path d="M12 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H12C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessages as IconComponentType).keywords = [
  "messages",
  "subject matter",
  "substance",
  "content",
  "mails",
  "things",
  "communication",
  "news",
  "correspondence",
  "copy"
];

export default IconMessages as IconComponentType;