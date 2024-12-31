import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDriverRefresh: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6 6.25V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 6.25V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 16V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 7.25H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5604 20.33C21.0004 21.3 19.9504 21.95 18.7504 21.95C16.9604 21.95 15.8604 20.15 15.8604 20.15M15.9304 17.09C16.4904 16.11 17.5404 15.46 18.7504 15.46C20.9204 15.46 22.0004 17.26 22.0004 17.26M22.0004 15.25V17.25H20.0004M17.8604 20.14H15.8604V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V9.51C22 10.28 21.18 10.74 20.5 10.38C19.03 9.59 17.26 9.28 15.4 9.67C14.2 9.92 13.09 10.48 12.18 11.25C11.66 11.68 11.2 12.19 10.81 12.75C10.27 13.54 9.87001 14.44 9.67001 15.4C9.28001 17.26 9.59 19.03 10.38 20.5C10.74 21.18 10.28 22 9.51001 22H7.81C4.6 22 2 19.4 2 16.19V7.81C2 4.6 4.6 2 7.81 2H16.19C19.4 2 22 4.6 22 7.81Z" fill="currentColor" /><path d="M12.18 11.25C11.66 11.68 11.2 12.19 10.81 12.75H2V11.25H12.18Z" fill="currentColor" /><path d="M6 9C5.59 9 5.25 8.66 5.25 8.25V6.25C5.25 5.84 5.59 5.5 6 5.5C6.41 5.5 6.75 5.84 6.75 6.25V8.25C6.75 8.66 6.41 9 6 9Z" fill="currentColor" /><path d="M10 9C9.59 9 9.25 8.66 9.25 8.25V6.25C9.25 5.84 9.59 5.5 10 5.5C10.41 5.5 10.75 5.84 10.75 6.25V8.25C10.75 8.66 10.41 9 10 9Z" fill="currentColor" /><path d="M6 18.75C5.59 18.75 5.25 18.41 5.25 18V16C5.25 15.59 5.59 15.25 6 15.25C6.41 15.25 6.75 15.59 6.75 16V18C6.75 18.41 6.41 18.75 6 18.75Z" fill="currentColor" /><path d="M18 8H14C13.59 8 13.25 7.66 13.25 7.25C13.25 6.84 13.59 6.5 14 6.5H18C18.41 6.5 18.75 6.84 18.75 7.25C18.75 7.66 18.41 8 18 8Z" fill="currentColor" /><path d="M17 11C13.69 11 11 13.69 11 17C11 20.31 13.69 23 17 23C20.31 23 23 20.31 23 17C23 13.69 20.31 11 17 11ZM19.93 18.2C19.77 18.59 19.54 18.94 19.24 19.24C18.64 19.84 17.85 20.17 17 20.17C16.32 20.17 15.68 19.95 15.14 19.55V19.69C15.14 20 14.89 20.26 14.57 20.26C14.26 20.26 14 20.01 14 19.69V18.25C14 17.94 14.25 17.68 14.57 17.68H16.01C16.32 17.68 16.58 17.93 16.58 18.25C16.58 18.54 16.37 18.76 16.09 18.8C16.85 19.17 17.82 19.05 18.43 18.44C18.62 18.25 18.77 18.02 18.87 17.77C18.99 17.48 19.32 17.34 19.61 17.46C19.91 17.57 20.05 17.91 19.93 18.2ZM20 15.76C20 16.07 19.75 16.33 19.43 16.33H17.99C17.68 16.33 17.42 16.08 17.42 15.76C17.42 15.47 17.63 15.25 17.91 15.21C17.15 14.84 16.18 14.96 15.56 15.57C15.39 15.74 15.26 15.93 15.16 16.14C15.06 16.35 14.86 16.47 14.65 16.47C14.57 16.47 14.49 16.45 14.41 16.42C14.13 16.29 14 15.95 14.14 15.66C14.3 15.33 14.51 15.03 14.76 14.77C15.36 14.17 16.15 13.84 17 13.84C17.68 13.84 18.32 14.06 18.86 14.46V14.33C18.86 14.02 19.11 13.76 19.43 13.76C19.75 13.76 20 14 20 14.32V15.76Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDriverRefresh as IconComponentType).keywords = [
  "driver",
  "refresh",
  "device driver",
  "number one wood",
  "motorist",
  "passenger",
  "motorman",
  "vehicle",
  "car",
  "driving",
  "chauffeur",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive"
];

export default IconDriverRefresh as IconComponentType;