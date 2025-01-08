import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBackward15Seconds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.6296 10.83H13.5696L12.8096 13.12H15.0995C15.9395 13.12 16.6296 13.8 16.6296 14.65C16.6296 15.49 15.9495 16.18 15.0995 16.18H12.8096" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.21 16.17V10.83L8.70996 12.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6895 4.46997L12.6694 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.58026 7.79999C4.47026 9.27999 3.78027 11.11 3.78027 13.11C3.78027 18.02 7.76029 22 12.6703 22C17.5803 22 21.5603 18.02 21.5603 13.11C21.5603 8.19999 17.5803 4.21997 12.6703 4.21997C11.9903 4.21997 11.3303 4.31002 10.6903 4.46002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1003 16.92H12.8104C12.4004 16.92 12.0604 16.58 12.0604 16.17C12.0604 15.76 12.4004 15.42 12.8104 15.42H15.1003C15.5303 15.42 15.8804 15.07 15.8804 14.64C15.8804 14.21 15.5303 13.86 15.1003 13.86H12.8104C12.5704 13.86 12.3404 13.74 12.2004 13.55C12.0604 13.36 12.0203 13.1 12.1003 12.87L12.8603 10.58C12.9603 10.27 13.2504 10.07 13.5704 10.07H16.6304C17.0404 10.07 17.3804 10.41 17.3804 10.82C17.3804 11.23 17.0404 11.57 16.6304 11.57H14.1103L13.8503 12.36H15.1003C16.3603 12.36 17.3804 13.38 17.3804 14.64C17.3804 15.9 16.3503 16.92 15.1003 16.92Z" fill="currentColor" /><path d="M10.2095 16.92C9.79947 16.92 9.45947 16.58 9.45947 16.17V12.78L9.26947 13C8.98947 13.31 8.51947 13.33 8.20947 13.06C7.89947 12.78 7.87947 12.31 8.14947 12L9.64947 10.33C9.85947 10.1 10.1895 10.02 10.4795 10.13C10.7695 10.24 10.9595 10.52 10.9595 10.83V16.18C10.9595 16.59 10.6295 16.92 10.2095 16.92Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6697 3.48C12.5897 3.48 12.5097 3.49001 12.4297 3.49001L13.2498 2.46999C13.5098 2.14999 13.4598 1.67 13.1298 1.42C12.7998 1.17 12.3397 1.21 12.0797 1.54L10.0997 4.01003C10.0897 4.02003 10.0897 4.04001 10.0797 4.05001C10.0497 4.09001 10.0298 4.14002 10.0098 4.19002C9.98977 4.23002 9.96972 4.27003 9.95972 4.32003C9.94972 4.37003 9.94977 4.41004 9.94977 4.46004C9.94977 4.51004 9.94977 4.56 9.94977 4.61C9.94977 4.63 9.94977 4.63999 9.94977 4.65999C9.95977 4.68999 9.97975 4.72002 9.98975 4.75002C10.0097 4.80002 10.0297 4.84003 10.0497 4.89003C10.0797 4.93003 10.1097 4.97002 10.1497 5.00002C10.1697 5.02002 10.1897 5.05004 10.2097 5.08004C10.2197 5.09004 10.2398 5.08999 10.2498 5.09999C10.2798 5.11999 10.3097 5.13004 10.3397 5.15004C10.3897 5.18004 10.4498 5.20004 10.4998 5.21004C10.5298 5.22004 10.5597 5.22 10.5997 5.23C10.6297 5.23 10.6497 5.24001 10.6797 5.24001C10.7097 5.24001 10.7298 5.22999 10.7498 5.21999C10.7798 5.21999 10.8097 5.22999 10.8397 5.21999C11.4797 5.06999 12.0797 5.00002 12.6497 5.00002C17.1397 5.00002 20.7897 8.65003 20.7897 13.14C20.7897 17.63 17.1397 21.28 12.6497 21.28C8.15972 21.28 4.50977 17.63 4.50977 13.14C4.50977 11.4 5.07973 9.72005 6.15973 8.28005C6.40973 7.95005 6.33977 7.48 6.00977 7.23C5.67977 6.98 5.20972 7.05002 4.95972 7.38002C3.67972 9.08002 3.00977 11.07 3.00977 13.14C3.00977 18.45 7.32972 22.78 12.6497 22.78C17.9697 22.78 22.2897 18.46 22.2897 13.14C22.2897 7.82003 17.9797 3.48 12.6697 3.48Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1003 16.92H12.8103C12.4003 16.92 12.0603 16.58 12.0603 16.17C12.0603 15.76 12.4003 15.42 12.8103 15.42H15.1003C15.5303 15.42 15.8803 15.07 15.8803 14.64C15.8803 14.21 15.5303 13.86 15.1003 13.86H12.8103C12.5703 13.86 12.3403 13.74 12.2003 13.55C12.0603 13.36 12.0203 13.1 12.1003 12.87L12.8603 10.58C12.9603 10.27 13.2503 10.07 13.5703 10.07H16.6303C17.0403 10.07 17.3803 10.41 17.3803 10.82C17.3803 11.23 17.0403 11.57 16.6303 11.57H14.1103L13.8503 12.36H15.1003C16.3603 12.36 17.3803 13.38 17.3803 14.64C17.3803 15.9 16.3503 16.92 15.1003 16.92Z" fill="currentColor" /><path d="M10.2103 16.92C9.80033 16.92 9.46033 16.58 9.46033 16.17V12.78L9.27033 13C8.99033 13.31 8.52033 13.33 8.21033 13.06C7.91033 12.78 7.88033 12.31 8.16033 12L9.66033 10.33C9.87033 10.1 10.2003 10.02 10.4903 10.13C10.7803 10.24 10.9703 10.52 10.9703 10.83V16.18C10.9603 16.59 10.6303 16.92 10.2103 16.92Z" fill="currentColor" /><path d="M12.6695 3.48C12.5895 3.48 12.5095 3.49 12.4295 3.49L13.2495 2.47C13.5095 2.15 13.4595 1.67 13.1295 1.42C12.7995 1.17 12.3395 1.21 12.0795 1.54L10.1095 4C10.0995 4.01 10.0995 4.02 10.0895 4.04C10.0595 4.08 10.0395 4.13 10.0195 4.17C9.99953 4.22 9.97953 4.26 9.96953 4.3C9.95953 4.35 9.95953 4.39 9.95953 4.44C9.95953 4.49 9.95953 4.54 9.95953 4.59C9.95953 4.61 9.95953 4.62 9.95953 4.64C9.96953 4.67 9.98953 4.69 9.99953 4.72C10.0195 4.77 10.0395 4.81 10.0595 4.86C10.0895 4.9 10.1195 4.94 10.1595 4.97C10.1795 5 10.1895 5.03 10.2195 5.05C10.2395 5.06 10.2495 5.07 10.2695 5.08C10.2895 5.1 10.3195 5.11 10.3495 5.12C10.3995 5.15 10.4595 5.17 10.5095 5.18C10.5495 5.2 10.5795 5.2 10.6095 5.2C10.6395 5.2 10.6595 5.21 10.6895 5.21C10.7195 5.21 10.7395 5.2 10.7595 5.19C10.7895 5.19 10.8195 5.2 10.8495 5.19C11.4895 5.04 12.0895 4.97 12.6595 4.97C17.1495 4.97 20.7995 8.62 20.7995 13.11C20.7995 17.6 17.1495 21.25 12.6595 21.25C8.16953 21.25 4.51953 17.6 4.51953 13.11C4.51953 11.37 5.08953 9.69 6.16953 8.25C6.41953 7.92 6.34953 7.45 6.01953 7.2C5.68953 6.95 5.21953 7.02 4.96953 7.35C3.68953 9.05 3.01953 11.04 3.01953 13.11C3.01953 18.42 7.33953 22.75 12.6595 22.75C17.9795 22.75 22.2995 18.43 22.2995 13.11C22.2995 7.79 17.9795 3.48 12.6695 3.48Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBackward15Seconds as IconComponentType).keywords = [
  "backward",
  "15",
  "seconds",
  "rearward",
  "back",
  "rearwards",
  "retral",
  "reversed",
  "reverse",
  "retrograde",
  "inverse",
  "reversive",
  "cardinal",
  "xv",
  "mig",
  "pmr",
  "rr",
  "15th",
  "crystal",
  "ides",
  "115",
  "sec",
  "moment",
  "instant",
  "intermediate",
  "endorsement",
  "endorse",
  "indorse",
  "forward"
];

export default IconBackward15Seconds as IconComponentType;