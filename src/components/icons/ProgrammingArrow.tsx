import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconProgrammingArrow: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2L12 4.5L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M5 9V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.75 16.1098V7.89977C7.04 7.56977 8 6.39977 8 5.00977C8 3.34977 6.66 2.00977 5 2.00977C3.34 2.00977 2 3.34977 2 5.00977C2 6.40977 2.96 7.56977 4.25 7.89977V16.1098C2.96 16.4398 2 17.6098 2 18.9998C2 20.6598 3.34 21.9998 5 21.9998C6.66 21.9998 8 20.6598 8 18.9998C8 17.5998 7.04 16.4398 5.75 16.1098Z" fill="currentColor" /><path d="M19.75 16.1102V6.50017C19.75 4.98018 18.52 3.75017 17 3.75017H14.07L15.48 2.58018C15.8 2.31018 15.84 1.84018 15.58 1.52018C15.31 1.20018 14.84 1.16017 14.52 1.42017L11.52 3.92017C11.35 4.06017 11.25 4.27017 11.25 4.50017C11.25 4.73017 11.35 4.93018 11.52 5.08018L14.52 7.58018C14.66 7.70018 14.83 7.75017 15 7.75017C15.21 7.75017 15.43 7.66017 15.58 7.48017C15.85 7.16017 15.8 6.69017 15.48 6.42017L14.07 5.25017H17C17.69 5.25017 18.25 5.81017 18.25 6.50017V16.1102C16.96 16.4402 16 17.6102 16 19.0002C16 20.6602 17.34 22.0002 19 22.0002C20.66 22.0002 22 20.6602 22 19.0002C22 17.6002 21.04 16.4402 19.75 16.1102Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProgrammingArrow as IconComponentType).keywords = [
  "programming",
  "arrow",
  "computer programming",
  "scheduling",
  "airtime",
  "television",
  "broadcasting",
  "plan",
  "software",
  "programmer",
  "programmatic",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof"
];

export default IconProgrammingArrow as IconComponentType;