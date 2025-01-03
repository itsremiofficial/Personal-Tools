import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M12.8105 15.0701V13.11C12.8105 10.59 14.8506 8.54004 17.3806 8.54004H19.3405" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.29004 8.5498H8.25006C10.7701 8.5498 12.8201 10.5898 12.8201 13.1198V13.7698V17.2498" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.80975 6.75L6.00977 8.55L7.80975 10.35" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5293 6.75L19.3293 8.55L17.5293 10.35" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M20.0194 8.2702C19.9794 8.1802 19.9295 8.1002 19.8595 8.0302L18.0595 6.2302C17.7695 5.9402 17.2895 5.9402 16.9995 6.2302C16.7095 6.5202 16.7095 7.00019 16.9995 7.29019L17.5194 7.8102H17.3695C15.4195 7.8102 13.7295 8.8802 12.7995 10.4502C11.8795 8.8802 10.1895 7.8102 8.23947 7.8102H7.80948L8.32944 7.29019C8.61944 7.00019 8.61944 6.5202 8.32944 6.2302C8.03944 5.9402 7.55944 5.9402 7.26944 6.2302L5.46945 8.0302C5.17945 8.3202 5.17945 8.8002 5.46945 9.0902L7.26944 10.8902C7.41944 11.0402 7.60947 11.1102 7.79947 11.1102C7.98947 11.1102 8.17944 11.0402 8.32944 10.8902C8.61944 10.6002 8.61944 10.1202 8.32944 9.8302L7.80948 9.3102H8.22946C10.3295 9.3102 12.0395 11.0202 12.0395 13.1202V15.0802V17.2502C12.0395 17.6602 12.3795 18.0002 12.7895 18.0002C13.1995 18.0002 13.5395 17.6602 13.5395 17.2502V15.0802V13.1202C13.5395 11.0202 15.2495 9.3102 17.3595 9.3102H17.5095L16.9895 9.8302C16.6995 10.1202 16.6995 10.6002 16.9895 10.8902C17.1395 11.0402 17.3294 11.1102 17.5194 11.1102C17.7094 11.1102 17.8995 11.0402 18.0495 10.8902L19.8495 9.0902C19.9195 9.0202 19.9695 8.94021 20.0095 8.85021C20.0995 8.66021 20.0994 8.4502 20.0194 8.2702Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64996)"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM20.0199 8.84C19.9799 8.93 19.9299 9.01 19.8599 9.08L18.0599 10.88C17.9099 11.03 17.7199 11.1 17.5299 11.1C17.3399 11.1 17.1499 11.03 16.9999 10.88C16.7099 10.59 16.7099 10.11 16.9999 9.82L17.5199 9.3H17.3699C15.2699 9.3 13.5499 11.01 13.5499 13.11V15.07V17.24C13.5499 17.65 13.2099 17.99 12.7999 17.99C12.3899 17.99 12.0499 17.65 12.0499 17.24V15.07V13.11C12.0499 11.01 10.3399 9.3 8.23992 9.3H7.81992L8.33992 9.82C8.62992 10.11 8.62992 10.59 8.33992 10.88C8.18992 11.03 7.99992 11.1 7.80992 11.1C7.61992 11.1 7.42992 11.03 7.27992 10.88L5.47992 9.08C5.18992 8.79 5.18992 8.31 5.47992 8.02L7.27992 6.22C7.56992 5.93 8.04992 5.93 8.33992 6.22C8.62992 6.51 8.62992 6.99 8.33992 7.28L7.81992 7.8H8.24992C10.1999 7.8 11.8899 8.87 12.8099 10.44C13.7299 8.87 15.4199 7.8 17.3799 7.8H17.5299L17.0099 7.28C16.7199 6.99 16.7199 6.51 17.0099 6.22C17.2999 5.93 17.7799 5.93 18.0699 6.22L19.8699 8.02C19.9399 8.09 19.9899 8.17 20.0299 8.26C20.0999 8.45 20.0999 8.66 20.0199 8.84Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowSquare as IconComponentType).keywords = [
  "arrow",
  "square",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconArrowSquare as IconComponentType;