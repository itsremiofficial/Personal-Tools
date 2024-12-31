import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRanking: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3 8.1101L14.62 10.7501C14.8 11.1101 15.28 11.4701 15.68 11.5301L18.07 11.9301C19.6 12.1901 19.96 13.2901 18.86 14.3901L17 16.2501C16.69 16.5601 16.51 17.1701 16.61 17.6101L17.14 19.9201C17.56 21.7401 16.59 22.4501 14.98 21.5001L12.74 20.1701C12.33 19.9301 11.67 19.9301 11.26 20.1701L9.01996 21.5001C7.40996 22.4501 6.43995 21.7401 6.85995 19.9201L7.38998 17.6101C7.48998 17.1801 7.30997 16.5701 6.99997 16.2501L5.13998 14.3901C4.03998 13.2901 4.39996 12.1801 5.92996 11.9301L8.31997 11.5301C8.71997 11.4601 9.19997 11.1101 9.37997 10.7501L10.7 8.1101C11.41 6.6801 12.59 6.6801 13.3 8.1101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 9V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 9V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z" fill="currentColor" /><path d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z" fill="currentColor" /><path d="M15.0097 4.84999C15.3197 4.53999 15.4397 4.16999 15.3397 3.84999C15.2397 3.52999 14.9297 3.3 14.4897 3.23L13.5297 3.06999C13.4897 3.05999 13.3997 2.99998 13.3797 2.95998L12.8497 1.89998C12.4497 1.08998 11.5397 1.08998 11.1397 1.89998L10.6097 2.95998C10.5897 2.99998 10.4997 3.05999 10.4597 3.06999L9.49968 3.23C9.05968 3.3 8.75969 3.52999 8.64969 3.84999C8.54969 4.16999 8.66968 4.53999 8.97968 4.84999L9.71969 5.59999C9.74969 5.62999 9.78968 5.75 9.77968 5.79L9.56968 6.70998C9.40968 7.38998 9.66968 7.69997 9.83968 7.82997C10.0097 7.94997 10.3797 8.10999 10.9897 7.74999L11.8897 7.21999C11.9297 7.18999 12.0597 7.18999 12.0997 7.21999L12.9997 7.74999C13.2797 7.91999 13.5097 7.96999 13.6897 7.96999C13.8997 7.96999 14.0497 7.88997 14.1397 7.82997C14.3097 7.70997 14.5697 7.39998 14.4097 6.70998L14.1997 5.79C14.1897 5.74 14.2197 5.62999 14.2597 5.59999L15.0097 4.84999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRanking as IconComponentType).keywords = [
  "ranking",
  "commanding",
  "top-level",
  "top-ranking",
  "superior",
  "senior",
  "higher-ranking",
  "grading",
  "rating",
  "status"
];

export default IconRanking as IconComponentType;