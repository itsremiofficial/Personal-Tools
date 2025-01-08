import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLayer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6795 2.92007L19.5795 5.54007C21.2795 6.29007 21.2795 7.53007 19.5795 8.28007L13.6795 10.9001C13.0095 11.2001 11.9095 11.2001 11.2395 10.9001L5.33945 8.28007C3.63945 7.53007 3.63945 6.29007 5.33945 5.54007L11.2395 2.92007C11.9095 2.62007 13.0095 2.62007 13.6795 2.92007Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.66992 11C3.66992 11.84 4.29992 12.81 5.06992 13.15L11.8599 16.17C12.3799 16.4 12.9699 16.4 13.4799 16.17L20.2699 13.15C21.0399 12.81 21.6699 11.84 21.6699 11" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.66992 16C3.66992 16.93 4.21992 17.77 5.06992 18.15L11.8599 21.17C12.3799 21.4 12.9699 21.4 13.4799 21.17L20.2699 18.15C21.1199 17.77 21.6699 16.93 21.6699 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0396 4.89012L14.1796 2.28012C13.3196 1.90012 12.0196 1.90012 11.1596 2.28012L5.29961 4.89012C3.81961 5.55012 3.59961 6.45012 3.59961 6.93012C3.59961 7.41012 3.81961 8.31012 5.29961 8.97012L11.1596 11.5801C11.5896 11.7701 12.1296 11.8701 12.6696 11.8701C13.2096 11.8701 13.7496 11.7701 14.1796 11.5801L20.0396 8.97012C21.5196 8.31012 21.7396 7.41012 21.7396 6.93012C21.7396 6.45012 21.5296 5.55012 20.0396 4.89012Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6702 17.04C12.2902 17.04 11.9102 16.96 11.5602 16.81L4.82023 13.81C3.79023 13.35 2.99023 12.12 2.99023 10.99C2.99023 10.58 3.32023 10.25 3.73023 10.25C4.14023 10.25 4.47023 10.58 4.47023 10.99C4.47023 11.53 4.92023 12.23 5.42023 12.45L12.1602 15.45C12.4802 15.59 12.8502 15.59 13.1702 15.45L19.9102 12.45C20.4102 12.23 20.8602 11.54 20.8602 10.99C20.8602 10.58 21.1902 10.25 21.6002 10.25C22.0102 10.25 22.3402 10.58 22.3402 10.99C22.3402 12.11 21.5402 13.35 20.5102 13.81L13.7702 16.81C13.4302 16.96 13.0502 17.04 12.6702 17.04Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6702 22C12.2902 22 11.9102 21.92 11.5602 21.77L4.82023 18.77C3.71023 18.28 2.99023 17.17 2.99023 15.95C2.99023 15.54 3.32023 15.21 3.73023 15.21C4.14023 15.21 4.47023 15.54 4.47023 15.95C4.47023 16.58 4.84023 17.15 5.42023 17.41L12.1602 20.41C12.4802 20.55 12.8502 20.55 13.1702 20.41L19.9102 17.41C20.4802 17.16 20.8602 16.58 20.8602 15.95C20.8602 15.54 21.1902 15.21 21.6002 15.21C22.0102 15.21 22.3402 15.54 22.3402 15.95C22.3402 17.17 21.6202 18.27 20.5102 18.77L13.7702 21.77C13.4302 21.92 13.0502 22 12.6702 22Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0396 4.89012L14.1796 2.28012C13.3196 1.90012 12.0196 1.90012 11.1596 2.28012L5.29961 4.89012C3.81961 5.55012 3.59961 6.45012 3.59961 6.93012C3.59961 7.41012 3.81961 8.31012 5.29961 8.97012L11.1596 11.5801C11.5896 11.7701 12.1296 11.8701 12.6696 11.8701C13.2096 11.8701 13.7496 11.7701 14.1796 11.5801L20.0396 8.97012C21.5196 8.31012 21.7396 7.41012 21.7396 6.93012C21.7396 6.45012 21.5296 5.55012 20.0396 4.89012Z" fill="currentColor" /><path d="M12.6702 17.04C12.2902 17.04 11.9102 16.96 11.5602 16.81L4.82023 13.81C3.79023 13.35 2.99023 12.12 2.99023 10.99C2.99023 10.58 3.32023 10.25 3.73023 10.25C4.14023 10.25 4.47023 10.58 4.47023 10.99C4.47023 11.53 4.92023 12.23 5.42023 12.45L12.1602 15.45C12.4802 15.59 12.8502 15.59 13.1702 15.45L19.9102 12.45C20.4102 12.23 20.8602 11.54 20.8602 10.99C20.8602 10.58 21.1902 10.25 21.6002 10.25C22.0102 10.25 22.3402 10.58 22.3402 10.99C22.3402 12.11 21.5402 13.35 20.5102 13.81L13.7702 16.81C13.4302 16.96 13.0502 17.04 12.6702 17.04Z" fill="currentColor" /><path d="M12.6702 22C12.2902 22 11.9102 21.92 11.5602 21.77L4.82023 18.77C3.71023 18.28 2.99023 17.17 2.99023 15.95C2.99023 15.54 3.32023 15.21 3.73023 15.21C4.14023 15.21 4.47023 15.54 4.47023 15.95C4.47023 16.58 4.84023 17.15 5.42023 17.41L12.1602 20.41C12.4802 20.55 12.8502 20.55 13.1702 20.41L19.9102 17.41C20.4802 17.16 20.8602 16.58 20.8602 15.95C20.8602 15.54 21.1902 15.21 21.6002 15.21C22.0102 15.21 22.3402 15.54 22.3402 15.95C22.3402 17.17 21.6202 18.27 20.5102 18.77L13.7702 21.77C13.4302 21.92 13.0502 22 12.6702 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLayer as IconComponentType).keywords = [
  "layer",
  "superimposed",
  "stratified",
  "bedded",
  "ply",
  "coating",
  "veneer",
  "floor",
  "storey",
  "film"
];

export default IconLayer as IconComponentType;