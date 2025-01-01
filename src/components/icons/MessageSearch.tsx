import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMessageSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2 21.3702C12.54 22.2502 11.46 22.2502 10.8 21.3702L9.29999 19.3702C9.12999 19.1502 8.77 18.9702 8.5 18.9702H8C4 18.9702 2 17.9702 2 12.9702V7.97021C2 3.97021 4 1.97021 8 1.97021H16C20 1.97021 22 3.97021 22 7.97021V12.9702" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 22L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M15.9965 11H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9945 11H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.99451 11H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.53 21.47L21.79 20.73C22.17 20.15 22.4 19.45 22.4 18.7C22.4 16.66 20.74 15 18.7 15C16.66 15 15 16.66 15 18.7C15 20.74 16.66 22.4 18.7 22.4C19.45 22.4 20.15 22.17 20.73 21.79L21.47 22.53C21.62 22.68 21.81 22.75 22 22.75C22.19 22.75 22.38 22.68 22.53 22.53C22.82 22.24 22.82 21.76 22.53 21.47Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2 12.9698V6.98977C2 4.23977 4.24 2.00977 7 2.00977H17C19.76 2.00977 22 4.23977 22 6.99977V13.9798C22 16.7298 19.76 18.9598 17 18.9598H15.5C15.19 18.9598 14.89 19.1098 14.7 19.3598L13.2 21.3498C12.54 22.2298 11.46 22.2298 10.8 21.3498L9.29999 19.3598C9.12999 19.1398 8.78 18.9598 8.5 18.9598H7C4.24 18.9598 2 16.7298 2 13.9798V12.9698Z" fill="currentColor" /><path d="M12.0002 12C11.4402 12 10.9902 11.55 10.9902 11C10.9902 10.45 11.4402 10 11.9902 10C12.5402 10 12.9902 10.45 12.9902 11C12.9902 11.55 12.5602 12 12.0002 12Z" fill="currentColor" /><path d="M16.0002 12C15.4402 12 14.9902 11.55 14.9902 11C14.9902 10.45 15.4402 10 15.9902 10C16.5402 10 16.9902 10.45 16.9902 11C16.9902 11.55 16.5602 12 16.0002 12Z" fill="currentColor" /><path d="M8.00024 12C7.44024 12 6.99023 11.55 6.99023 11C6.99023 10.45 7.44023 10 7.99023 10C8.54023 10 8.99023 10.45 8.99023 11C8.99023 11.55 8.56024 12 8.00024 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageSearch as IconComponentType).keywords = [
  "message",
  "search",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking"
];

export default IconMessageSearch as IconComponentType;