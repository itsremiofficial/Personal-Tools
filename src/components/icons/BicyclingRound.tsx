import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBicyclingRound: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="4.00049" r="2" stroke="currentColor" strokeWidth={width} /><circle opacity={duotone ? "0.5" : "1"} cx="6" cy="18.0005" r="3" stroke="currentColor" strokeWidth={width} /><circle opacity={duotone ? "0.5" : "1"} cx="18" cy="18.0005" r="3" stroke="currentColor" strokeWidth={width} /><path d="M18.4999 10.0005H14.5822C14.2052 10.0005 13.8393 9.87262 13.5444 9.63781L11.386 7.91964C10.1193 6.91132 8.25168 7.27151 7.45083 8.67854C6.67562 10.0405 7.25192 11.7741 8.68829 12.4008L11.779 13.7495C12.7312 14.165 13.1695 15.2713 12.7603 16.2263L11.9999 18.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9999 4.00049C15.9999 5.10506 15.1045 6.00049 13.9999 6.00049C12.8953 6.00049 11.9999 5.10506 11.9999 4.00049C11.9999 2.89592 12.8953 2.00049 13.9999 2.00049C15.1045 2.00049 15.9999 2.89592 15.9999 4.00049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.9189 8.50645C10.0124 7.78484 8.67576 8.04261 8.10263 9.04957C7.54784 10.0243 7.96027 11.2649 8.98823 11.7135L12.0789 13.0621C13.4091 13.6426 14.0213 15.1878 13.4496 16.5218L12.6893 18.2959C12.5261 18.6767 12.0852 18.853 11.7045 18.6898C11.3237 18.5267 11.1474 18.0858 11.3105 17.705L12.0709 15.9309C12.3178 15.3549 12.0534 14.6876 11.479 14.4369L8.38831 13.0883C6.54352 12.2833 5.80336 10.0569 6.799 8.30758C7.82756 6.50046 10.2263 6.03787 11.8531 7.33289L14.0114 9.05106C14.1736 9.18019 14.3748 9.25049 14.5822 9.25049H18.4999C18.9141 9.25049 19.2499 9.58628 19.2499 10.0005C19.2499 10.4147 18.9141 10.7505 18.4999 10.7505H14.5822C14.0355 10.7505 13.5049 10.5651 13.0772 10.2246L10.9189 8.50645Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M18 14.2505C15.9289 14.2505 14.25 15.9294 14.25 18.0005C14.25 20.0716 15.9289 21.7505 18 21.7505C20.0711 21.7505 21.75 20.0716 21.75 18.0005C21.75 15.9294 20.0711 14.2505 18 14.2505ZM18 15.7505C16.7574 15.7505 15.75 16.7578 15.75 18.0005C15.75 19.2431 16.7574 20.2505 18 20.2505C19.2426 20.2505 20.25 19.2431 20.25 18.0005C20.25 16.7578 19.2426 15.7505 18 15.7505Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6 14.2505C3.92893 14.2505 2.25 15.9294 2.25 18.0005C2.25 20.0716 3.92893 21.7505 6 21.7505C8.07107 21.7505 9.75 20.0716 9.75 18.0005C9.75 15.9294 8.07107 14.2505 6 14.2505ZM6 15.7505C4.75736 15.7505 3.75 16.7578 3.75 18.0005C3.75 19.2431 4.75736 20.2505 6 20.2505C7.24264 20.2505 8.25 19.2431 8.25 18.0005C8.25 16.7578 7.24264 15.7505 6 15.7505Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 4.00049C16 5.10506 15.1046 6.00049 14 6.00049C12.8954 6.00049 12 5.10506 12 4.00049C12 2.89592 12.8954 2.00049 14 2.00049C15.1046 2.00049 16 2.89592 16 4.00049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.919 8.50645C10.0125 7.78484 8.67587 8.04261 8.10274 9.04957C7.54795 10.0243 7.96038 11.2649 8.98833 11.7135L12.079 13.0621C13.4092 13.6426 14.0214 15.1878 13.4497 16.5218L12.6894 18.2959C12.5262 18.6767 12.0853 18.853 11.7046 18.6898C11.3238 18.5267 11.1475 18.0858 11.3106 17.705L12.071 15.9309C12.3179 15.3549 12.0535 14.6876 11.4791 14.4369L8.38842 13.0883C6.54363 12.2833 5.80347 10.0569 6.79911 8.30758C7.82766 6.50046 10.2264 6.03787 11.8532 7.33289L14.0116 9.05106C14.1738 9.18019 14.375 9.25049 14.5823 9.25049H18.5C18.9142 9.25049 19.25 9.58628 19.25 10.0005C19.25 10.4147 18.9142 10.7505 18.5 10.7505H14.5823C14.0356 10.7505 13.5051 10.5651 13.0773 10.2246L10.919 8.50645ZM6 15.7505C4.75736 15.7505 3.75 16.7578 3.75 18.0005C3.75 19.2431 4.75736 20.2505 6 20.2505C7.24264 20.2505 8.25 19.2431 8.25 18.0005C8.25 16.7578 7.24264 15.7505 6 15.7505ZM2.25 18.0005C2.25 15.9294 3.92893 14.2505 6 14.2505C8.07107 14.2505 9.75 15.9294 9.75 18.0005C9.75 20.0716 8.07107 21.7505 6 21.7505C3.92893 21.7505 2.25 20.0716 2.25 18.0005ZM18 15.7505C16.7574 15.7505 15.75 16.7578 15.75 18.0005C15.75 19.2431 16.7574 20.2505 18 20.2505C19.2426 20.2505 20.25 19.2431 20.25 18.0005C20.25 16.7578 19.2426 15.7505 18 15.7505ZM14.25 18.0005C14.25 15.9294 15.9289 14.2505 18 14.2505C20.0711 14.2505 21.75 15.9294 21.75 18.0005C21.75 20.0716 20.0711 21.7505 18 21.7505C15.9289 21.7505 14.25 20.0716 14.25 18.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBicyclingRound as IconComponentType).keywords = [
  "bicycling",
  "round",
  "bike",
  "cycle",
  "pedal",
  "wheel",
  "biking",
  "cycling",
  "motorcycling",
  "bicyclists",
  "cyclist",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose"
];

export default IconBicyclingRound as IconComponentType;