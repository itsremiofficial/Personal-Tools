import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBatteryCharging: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M21.1699 9.5C22.6699 9.5 22.6699 10 22.6699 11V13C22.6699 14 22.6699 14.5 21.1699 14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M10.6701 8L8.78012 10.5C8.39012 11.17 8.87012 12 9.64012 12H11.9401C12.7101 12 13.1901 12.83 12.8101 13.5L10.6701 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.66992 19C3.66992 19 2.66992 18 2.66992 14V10C2.66992 6 3.66992 5 7.66992 5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M13.6699 5C17.6699 5 18.6699 6 18.6699 10V14C18.6699 18 17.6699 19 13.6699 19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.5999 4.79H8.01992C3.91992 4.79 2.66992 6.04 2.66992 10.14V13.86C2.66992 17.96 3.91992 19.21 8.01992 19.21H13.5999C17.6999 19.21 18.9499 17.96 18.9499 13.86V10.14C18.9499 6.04 17.6999 4.79 13.5999 4.79Z" fill="currentColor" /><path d="M21.0901 9C20.9501 8.99 20.7701 8.98 20.5701 8.98C20.1801 8.98 19.8701 9.29 19.8701 9.68V14.33C19.8701 14.72 20.1801 15.03 20.5701 15.03C20.7701 15.03 20.9401 15.02 21.1101 15.01C22.6701 14.83 22.6701 13.73 22.6701 12.93V11.07C22.6701 10.27 22.6701 9.17 21.0901 9Z" fill="currentColor" /><path d="M10.6796 16.24C10.5096 16.24 10.3296 16.18 10.1896 16.06C9.87961 15.79 9.83961 15.32 10.1096 15L11.9096 12.89C11.9196 12.86 11.9096 12.83 11.8896 12.8C11.8696 12.76 11.8296 12.74 11.7796 12.74H9.78961C9.19961 12.74 8.67961 12.44 8.37961 11.93C8.08961 11.42 8.08961 10.82 8.37961 10.31L10.0896 8.05C10.3396 7.72 10.8096 7.65 11.1396 7.9C11.4696 8.15 11.5396 8.62 11.2896 8.95L9.63961 11.14C9.66961 11.1 9.66961 11.14 9.68961 11.19C9.70961 11.23 9.74961 11.25 9.79961 11.25H11.8096C12.3996 11.25 12.9196 11.55 13.2196 12.06C13.5096 12.57 13.5096 13.17 13.2196 13.68C13.1996 13.72 13.1696 13.76 13.1396 13.79L11.2696 15.98C11.1096 16.16 10.8996 16.24 10.6796 16.24Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0901 9C20.9501 8.99 20.7701 8.98 20.5701 8.98C20.1801 8.98 19.8701 9.29 19.8701 9.68V14.33C19.8701 14.72 20.1801 15.03 20.5701 15.03C20.7701 15.03 20.9401 15.02 21.1101 15.01C22.6701 14.83 22.6701 13.73 22.6701 12.93V11.07C22.6701 10.27 22.6701 9.17 21.0901 9Z" fill="currentColor" /><path d="M13.5999 4.78999H8.01992C3.91992 4.78999 2.66992 6.03999 2.66992 10.14V13.86C2.66992 17.96 3.91992 19.21 8.01992 19.21H13.5999C17.6999 19.21 18.9499 17.96 18.9499 13.86V10.14C18.9499 6.03999 17.6999 4.78999 13.5999 4.78999ZM13.1999 13.68C13.1799 13.72 13.1499 13.76 13.1199 13.79L11.2499 15.98C11.0999 16.15 10.8899 16.24 10.6799 16.24C10.5099 16.24 10.3299 16.18 10.1899 16.06C9.87992 15.79 9.83992 15.32 10.1099 15L11.9099 12.89C11.9199 12.86 11.9099 12.83 11.8899 12.8C11.8699 12.76 11.8299 12.74 11.7799 12.74H9.78992C9.19992 12.74 8.67992 12.44 8.37992 11.93C8.08992 11.42 8.08992 10.82 8.37992 10.31L10.0899 8.04999C10.3399 7.71999 10.8099 7.64999 11.1399 7.89999C11.4699 8.14999 11.5399 8.61999 11.2899 8.94999L9.63992 11.14C9.66992 11.1 9.66992 11.14 9.68992 11.19C9.70992 11.23 9.74992 11.25 9.79992 11.25H11.8099C12.3999 11.25 12.9199 11.55 13.2199 12.06C13.4899 12.57 13.4899 13.17 13.1999 13.68Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBatteryCharging as IconComponentType).keywords = [
  "battery",
  "charging",
  "bombardment",
  "stamp battery",
  "barrage",
  "shelling",
  "assault and battery",
  "assault",
  "barrage fire",
  "electric battery",
  "alternator",
  "consign",
  "commission",
  "mission",
  "appoint",
  "billing",
  "guardianship",
  "tutelage",
  "institutionalize",
  "send"
];

export default IconBatteryCharging as IconComponentType;