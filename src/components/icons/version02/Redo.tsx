import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRedo: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.54 18.3101H9.54004C6.78004 18.3101 4.54004 16.0701 4.54004 13.3101C4.54004 10.5501 6.78004 8.31006 9.54004 8.31006H20.54" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.2397 10.8099L20.7997 8.24994L18.2397 5.68994" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.47992 2H16.8499C20.4999 2 22.6699 4.17 22.6699 7.81V16.18C22.6699 19.82 20.4999 21.99 16.8599 21.99H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2Z" fill="currentColor" /><path d="M18.1999 9.16006L16.6299 7.59006C16.3399 7.30006 15.8599 7.30006 15.5699 7.59006C15.2799 7.88006 15.2799 8.36006 15.5699 8.65006L15.8999 8.98006H10.7499C8.63992 8.98006 6.91992 10.7001 6.91992 12.8101C6.91992 14.9201 8.63992 16.6401 10.7499 16.6401H15.6699C16.0799 16.6401 16.4199 16.3001 16.4199 15.8901C16.4199 15.4801 16.0799 15.1401 15.6699 15.1401H10.7499C9.46992 15.1401 8.41992 14.1001 8.41992 12.8101C8.41992 11.5201 9.45992 10.4801 10.7499 10.4801H15.8299L15.5699 10.7401C15.2799 11.0301 15.2799 11.5101 15.5699 11.8001C15.7199 11.9501 15.9099 12.0201 16.0999 12.0201C16.2899 12.0201 16.4799 11.9501 16.6299 11.8001L18.1999 10.2301C18.4899 9.93006 18.4899 9.46006 18.1999 9.16006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM18.1999 10.22L16.6299 11.79C16.4799 11.94 16.2899 12.01 16.0999 12.01C15.9099 12.01 15.7199 11.94 15.5699 11.79C15.2799 11.5 15.2799 11.02 15.5699 10.73L15.8299 10.47H10.7499C9.46992 10.47 8.41992 11.51 8.41992 12.8C8.41992 14.09 9.45992 15.13 10.7499 15.13H15.6699C16.0799 15.13 16.4199 15.47 16.4199 15.88C16.4199 16.29 16.0799 16.63 15.6699 16.63H10.7499C8.63992 16.63 6.91992 14.91 6.91992 12.8C6.91992 10.69 8.63992 8.97 10.7499 8.97H15.8999L15.5699 8.65C15.2799 8.36 15.2799 7.88 15.5699 7.59C15.8599 7.3 16.3399 7.3 16.6299 7.59L18.1999 9.16C18.4899 9.46 18.4899 9.93 18.1999 10.22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRedo as IconComponentType).keywords = [
  "redo",
  "remake",
  "refashion",
  "reconstruct",
  "remodel",
  "make over",
  "retake",
  "restart",
  "rebuild",
  "reinstitution"
];

export default IconRedo as IconComponentType;