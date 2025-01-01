import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBrush: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6 2H18C19.1 2 20 2.9 20 4V8.32001H4V4C4 2.9 4.9 2 6 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 8.31982V11.8798C4 12.9598 4.58003 13.9598 5.53003 14.4898L8.48999 16.1598C9.11999 16.5098 9.51001 17.1798 9.51001 17.8998V19.9998C9.51001 21.0998 10.41 21.9998 11.51 21.9998H12.51C13.61 21.9998 14.51 21.0998 14.51 19.9998V17.8998C14.51 17.1798 14.9 16.5098 15.53 16.1598L18.49 14.4898C19.43 13.9598 20.02 12.9598 20.02 11.8798V8.31982H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0Z" fill="currentColor" /><path d="M19.8303 1.55022C18.7803 4.16022 16.4003 7.57022 14.1203 9.80022C13.7903 7.74022 12.1503 6.13022 10.0703 5.84022C12.3103 3.56022 15.7403 1.14022 18.3603 0.0802204C18.8203 -0.0997796 19.2903 0.0402204 19.5703 0.33022C19.8803 0.63022 20.0203 1.09022 19.8303 1.55022Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.1197 9.79008C13.7197 10.1801 13.3197 10.5401 12.9397 10.8401L11.3697 12.1001C11.1697 12.2401 10.9697 12.3601 10.7497 12.4601C10.7497 12.3101 10.7297 12.1601 10.7197 12.0001C10.6297 11.3401 10.3297 10.7101 9.78969 10.1701C9.23969 9.63008 8.57969 9.32008 7.90969 9.23008C7.74969 9.21008 7.57969 9.21008 7.42969 9.21008C7.51969 8.96008 7.64969 8.73008 7.81969 8.54008L9.06969 6.97008C9.36969 6.59008 9.70969 6.21008 10.0797 5.83008C12.1497 6.12008 13.7997 7.74008 14.1197 9.79008Z" fill="currentColor" /><path d="M10.7506 12.47C10.7506 13.35 10.4106 14.19 9.78056 14.82C9.29056 15.31 8.64056 15.65 7.84056 15.75L5.88056 15.97C4.81056 16.09 3.89056 15.17 4.01056 14.09L4.23056 12.13C4.42056 10.38 5.88056 9.26 7.43056 9.23C7.58056 9.22 7.75056 9.23 7.91056 9.25C8.59056 9.34 9.24056 9.65 9.79056 10.19C10.3206 10.72 10.6306 11.36 10.7206 12.02C10.7306 12.17 10.7506 12.32 10.7506 12.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBrush as IconComponentType).keywords = [
  "brush",
  "sweep",
  "copse",
  "thicket",
  "coppice",
  "brushwood",
  "clash",
  "skirmish",
  "kiss",
  "encounter"
];

export default IconBrush as IconComponentType;