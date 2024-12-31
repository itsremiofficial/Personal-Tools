import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUserTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.41016 22C3.41016 18.13 7.26015 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4395 18L17.4294 18.99L19.5594 17.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 13C17.06 13 16.19 13.33 15.5 13.88C14.58 14.61 14 15.74 14 17C14 17.75 14.21 18.46 14.58 19.06C15.27 20.22 16.54 21 18 21C19.01 21 19.93 20.63 20.63 20C20.94 19.74 21.21 19.42 21.42 19.06C21.79 18.46 22 17.75 22 17C22 14.79 20.21 13 18 13ZM20.07 16.57L17.94 18.54C17.8 18.67 17.61 18.74 17.43 18.74C17.24 18.74 17.05 18.67 16.9 18.52L15.91 17.53C15.62 17.24 15.62 16.76 15.91 16.47C16.2 16.18 16.68 16.18 16.97 16.47L17.45 16.95L19.05 15.47C19.35 15.19 19.83 15.21 20.11 15.51C20.39 15.81 20.37 16.28 20.07 16.57Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.0901 21.5C21.0901 21.78 20.8701 22 20.5901 22H3.41016C3.13016 22 2.91016 21.78 2.91016 21.5C2.91016 17.36 6.99015 14 12.0002 14C13.0302 14 14.0302 14.14 14.9502 14.41C14.3602 15.11 14.0002 16.02 14.0002 17C14.0002 17.75 14.2101 18.46 14.5801 19.06C14.7801 19.4 15.0401 19.71 15.3401 19.97C16.0401 20.61 16.9702 21 18.0002 21C19.1202 21 20.1302 20.54 20.8502 19.8C21.0102 20.34 21.0901 20.91 21.0901 21.5Z" fill="currentColor" /><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserTick as IconComponentType).keywords = [
  "user",
  "tick",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconUserTick as IconComponentType;