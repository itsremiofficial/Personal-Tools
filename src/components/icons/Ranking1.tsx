import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRanking1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.5202 2.06982L13.0502 3.12982C13.1202 3.27982 13.3102 3.41982 13.4702 3.43982L14.4302 3.59982C15.0402 3.69982 15.1902 4.1498 14.7502 4.5798L14.0002 5.3298C13.8702 5.4598 13.8002 5.69981 13.8402 5.86981L14.0502 6.78982C14.2202 7.51982 13.8302 7.79983 13.1902 7.41983L12.2902 6.88983C12.1302 6.78983 11.8602 6.78983 11.7002 6.88983L10.8002 7.41983C10.1602 7.79983 9.77023 7.51982 9.94023 6.78982L10.1502 5.86981C10.1902 5.69981 10.1202 5.4498 9.99023 5.3298L9.25023 4.58981C8.81023 4.14981 8.95023 3.7098 9.57023 3.6098L10.5302 3.44983C10.6902 3.41983 10.8802 3.27983 10.9502 3.13983L11.4802 2.0798C11.7702 1.4998 12.2302 1.49982 12.5202 2.06982Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.3 8.1101L14.62 10.7501C14.8 11.1101 15.28 11.4701 15.68 11.5301L18.07 11.9301C19.6 12.1901 19.96 13.2901 18.86 14.3901L17 16.2501C16.69 16.5601 16.51 17.1701 16.61 17.6101L17.14 19.9201C17.56 21.7401 16.59 22.4501 14.98 21.5001L12.74 20.1701C12.33 19.9301 11.67 19.9301 11.26 20.1701L9.01996 21.5001C7.40996 22.4501 6.43995 21.7401 6.85995 19.9201L7.38998 17.6101C7.48998 17.1801 7.30997 16.5701 6.99997 16.2501L5.13998 14.3901C4.03998 13.2901 4.39996 12.1801 5.92996 11.9301L8.31997 11.5301C8.71997 11.4601 9.19997 11.1101 9.37997 10.7501L10.7 8.1101C11.41 6.6801 12.59 6.6801 13.3 8.1101Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6 9.75C5.59 9.75 5.25 9.41 5.25 9V2C5.25 1.59 5.59 1.25 6 1.25C6.41 1.25 6.75 1.59 6.75 2V9C6.75 9.41 6.41 9.75 6 9.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 9.75C17.59 9.75 17.25 9.41 17.25 9V2C17.25 1.59 17.59 1.25 18 1.25C18.41 1.25 18.75 1.59 18.75 2V9C18.75 9.41 18.41 9.75 18 9.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRanking1 as IconComponentType).keywords = [
  "ranking",
  "1",
  "commanding",
  "top-level",
  "top-ranking",
  "superior",
  "senior",
  "higher-ranking",
  "grading",
  "rating",
  "status",
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

export default IconRanking1 as IconComponentType;