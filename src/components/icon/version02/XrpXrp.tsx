import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconXrpXrp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.12986 2H4.71982C3.78982 2 3.31983 3.13 3.97983 3.79L9.70981 9.52C11.3498 11.16 13.9998 11.16 15.6398 9.52L21.3698 3.79C22.0298 3.13 21.5599 2 20.6299 2H19.2198C18.3898 2 17.5899 2.33 16.9999 2.92L13.4198 6.5C13.0098 6.91 12.3499 6.91 11.9399 6.5L8.35984 2.92C7.75984 2.33 6.95986 2 6.12986 2Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.12986 21.97H4.71982C3.78982 21.97 3.31983 20.84 3.97983 20.18L9.70981 14.45C11.3498 12.81 13.9998 12.81 15.6398 14.45L21.3698 20.18C22.0298 20.84 21.5599 21.97 20.6299 21.97H19.2198C18.3898 21.97 17.5899 21.64 16.9999 21.05L13.4198 17.47C13.0098 17.06 12.3499 17.06 11.9399 17.47L8.35984 21.05C7.75984 21.64 6.95986 21.97 6.12986 21.97Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M6.12983 2H4.71983C3.78983 2 3.31983 3.13 3.97983 3.79L9.70983 9.52C11.3498 11.16 13.9998 11.16 15.6398 9.52L21.3698 3.79C22.0198 3.13 21.5498 2 20.6198 2H19.2098C18.3798 2 17.5798 2.33 16.9898 2.92L13.4098 6.5C12.9998 6.91 12.3398 6.91 11.9298 6.5L8.34983 2.92C7.75983 2.33 6.95983 2 6.12983 2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.12983 21.97H4.71983C3.78983 21.97 3.31983 20.84 3.97983 20.18L9.70983 14.45C11.3498 12.81 13.9998 12.81 15.6398 14.45L21.3698 20.18C22.0298 20.84 21.5598 21.97 20.6298 21.97H19.2198C18.3898 21.97 17.5898 21.64 16.9998 21.05L13.4198 17.47C13.0098 17.06 12.3498 17.06 11.9398 17.47L8.35983 21.05C7.75983 21.64 6.95983 21.97 6.12983 21.97Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.12986 2H4.71982C3.78982 2 3.31983 3.13 3.97983 3.79L9.70981 9.52C11.3498 11.16 13.9998 11.16 15.6398 9.52L21.3698 3.79C22.0298 3.13 21.5599 2 20.6299 2H19.2198C18.3898 2 17.5899 2.33 16.9999 2.92L13.4198 6.5C13.0098 6.91 12.3499 6.91 11.9399 6.5L8.35984 2.92C7.75984 2.33 6.95986 2 6.12986 2Z" fill="none" /><path d="M6.12986 21.97H4.71982C3.78982 21.97 3.31983 20.84 3.97983 20.18L9.70981 14.45C11.3498 12.81 13.9998 12.81 15.6398 14.45L21.3698 20.18C22.0298 20.84 21.5599 21.97 20.6299 21.97H19.2198C18.3898 21.97 17.5899 21.64 16.9999 21.05L13.4198 17.47C13.0098 17.06 12.3499 17.06 11.9399 17.47L8.35984 21.05C7.75984 21.64 6.95986 21.97 6.12986 21.97Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconXrpXrp as IconComponentType).keywords = [
  "xrp"
];

export default IconXrpXrp as IconComponentType;