import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRedo: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8691 18.3101H8.86914C6.10914 18.3101 3.86914 16.0701 3.86914 13.3101C3.86914 10.5501 6.10914 8.31006 8.86914 8.31006H19.8691" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5703 10.8099L20.1303 8.24994L17.5703 5.68994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill="currentColor" /><path d="M17.53 9.16006L15.96 7.59006C15.67 7.30006 15.19 7.30006 14.9 7.59006C14.61 7.88006 14.61 8.36006 14.9 8.65006L15.23 8.98006H10.08C7.97 8.98006 6.25 10.7001 6.25 12.8101C6.25 14.9201 7.97 16.6401 10.08 16.6401H15C15.41 16.6401 15.75 16.3001 15.75 15.8901C15.75 15.4801 15.41 15.1401 15 15.1401H10.08C8.8 15.1401 7.75 14.1001 7.75 12.8101C7.75 11.5201 8.79 10.4801 10.08 10.4801H15.16L14.9 10.7401C14.61 11.0301 14.61 11.5101 14.9 11.8001C15.05 11.9501 15.24 12.0201 15.43 12.0201C15.62 12.0201 15.81 11.9501 15.96 11.8001L17.53 10.2301C17.82 9.93006 17.82 9.46006 17.53 9.16006Z" fill="currentColor" /></svg> 
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