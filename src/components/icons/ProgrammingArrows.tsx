import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconProgrammingArrows: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2L11 4.5L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 8V17.5C5 18.6 5.9 19.5 7 19.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 22L13 19.5L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 3.75018H13.07L14.48 2.58019C14.8 2.31019 14.84 1.8402 14.58 1.5202C14.31 1.2002 13.84 1.16016 13.52 1.42016L10.52 3.92016C10.35 4.06016 10.25 4.27018 10.25 4.50018C10.25 4.73018 10.35 4.93019 10.52 5.08019L13.52 7.58019C13.66 7.70019 13.83 7.75018 14 7.75018C14.21 7.75018 14.43 7.66016 14.58 7.48016C14.85 7.16016 14.8 6.69016 14.48 6.42016L13.07 5.25018H17C17.69 5.25018 18.25 5.81018 18.25 6.50018V16.0002C18.25 16.4102 18.59 16.7502 19 16.7502C19.41 16.7502 19.75 16.4102 19.75 16.0002V6.50018C19.75 4.98018 18.52 3.75018 17 3.75018Z" fill="currentColor" /><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.48 18.92L10.48 16.42C10.16 16.15 9.69001 16.2 9.42001 16.52C9.15001 16.84 9.19999 17.31 9.51999 17.58L10.93 18.75H7C6.31 18.75 5.75 18.19 5.75 17.5V8C5.75 7.59 5.41 7.25 5 7.25C4.59 7.25 4.25 7.59 4.25 8V17.5C4.25 19.02 5.48 20.25 7 20.25H10.93L9.51999 21.42C9.19999 21.69 9.16001 22.16 9.42001 22.48C9.57001 22.66 9.78 22.75 10 22.75C10.17 22.75 10.34 22.69 10.48 22.58L13.48 20.08C13.65 19.94 13.75 19.73 13.75 19.5C13.75 19.27 13.65 19.07 13.48 18.92Z" fill="currentColor" /><path d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProgrammingArrows as IconComponentType).keywords = [
  "programming",
  "arrows",
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
  "booms",
  "keys",
  "spires",
  "arrowheads",
  "dates",
  "deflections",
  "leaders",
  "spits"
];

export default IconProgrammingArrows as IconComponentType;