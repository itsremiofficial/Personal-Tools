import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHeadphone: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.46005 18.4898V15.5698C5.46005 14.5998 6.22005 13.7298 7.30005 13.7298C8.27005 13.7298 9.14005 14.4898 9.14005 15.5698V18.3798C9.14005 20.3298 7.52005 21.9498 5.57005 21.9498C3.62005 21.9498 2.00005 20.3198 2.00005 18.3798V12.2198C1.89005 6.5998 6.33005 2.0498 11.95 2.0498C17.57 2.0498 22 6.5998 22 12.1098V18.2698C22 20.2198 20.38 21.8398 18.43 21.8398C16.48 21.8398 14.86 20.2198 14.86 18.2698V15.4598C14.86 14.4898 15.62 13.6198 16.7 13.6198C17.67 13.6198 18.54 14.3798 18.54 15.4598V18.4898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.74982 18.65C2.33982 18.65 1.99982 18.31 1.99982 17.9V12.2C1.94982 9.49005 2.95982 6.93005 4.83982 5.01005C6.71982 3.10005 9.23982 2.05005 11.9498 2.05005C17.4898 2.05005 21.9998 6.56005 21.9998 12.1V17.8C21.9998 18.21 21.6598 18.55 21.2498 18.55C20.8398 18.55 20.4998 18.21 20.4998 17.8V12.1C20.4998 7.39005 16.6698 3.55005 11.9498 3.55005C9.63982 3.55005 7.49982 4.44005 5.90982 6.06005C4.30982 7.69005 3.45982 9.86005 3.49982 12.18V17.89C3.49982 18.31 3.16982 18.65 2.74982 18.65Z" fill="currentColor" /><path d="M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z" fill="currentColor" /><path d="M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeadphone as IconComponentType).keywords = [
  "headphone",
  "earpiece",
  "earphone",
  "phone",
  "headset",
  "handset",
  "tag",
  "ear",
  "earphones",
  "earbuds"
];

export default IconHeadphone as IconComponentType;