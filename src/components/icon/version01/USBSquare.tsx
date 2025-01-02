import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUSBSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="17.0004" r="1" stroke="currentColor" strokeWidth={width} /><circle cx="8" cy="9.00037" r="1" stroke="currentColor" strokeWidth={width} /><path d="M11.25 16.0004C11.25 16.4146 11.5858 16.7504 12 16.7504C12.4142 16.7504 12.75 16.4146 12.75 16.0004H11.25ZM12 6.00037L12.5303 5.47004C12.2374 5.17714 11.7626 5.17714 11.4697 5.47004L12 6.00037ZM12.4697 7.5307C12.7626 7.82359 13.2374 7.82359 13.5303 7.5307C13.8232 7.2378 13.8232 6.76293 13.5303 6.47004L12.4697 7.5307ZM10.4697 6.47004C10.1768 6.76293 10.1768 7.2378 10.4697 7.5307C10.7626 7.82359 11.2374 7.82359 11.5303 7.5307L10.4697 6.47004ZM11.4697 6.5307L12.4697 7.5307L13.5303 6.47004L12.5303 5.47004L11.4697 6.5307ZM11.4697 5.47004L10.4697 6.47004L11.5303 7.5307L12.5303 6.5307L11.4697 5.47004ZM12.75 16.0004V14.1254H11.25V16.0004H12.75ZM12.75 14.1254V6.00037H11.25V14.1254H12.75Z" fill="currentColor" /><path d="M8 10.0004V11.03C8 11.9048 8.5685 12.678 9.40345 12.9389L10.8069 13.3775C11.5167 13.5993 12 14.2567 12 15.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M16 11.0004V12.03C16 12.9048 15.4315 13.678 14.5966 13.9389L13.1931 14.3775C12.4833 14.5993 12 15.2567 12 16.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M15 10.0004C15 9.52896 15 9.29326 15.1464 9.14681C15.2929 9.00037 15.5286 9.00037 16 9.00037C16.4714 9.00037 16.7071 9.00037 16.8536 9.14681C17 9.29326 17 9.52896 17 10.0004C17 10.4718 17 10.7075 16.8536 10.8539C16.7071 11.0004 16.4714 11.0004 16 11.0004C15.5286 11.0004 15.2929 11.0004 15.1464 10.8539C15 10.7075 15 10.4718 15 10.0004Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z" fill="currentColor" /><path d="M13.5303 6.47004L12.5303 5.47004C12.2374 5.17714 11.7626 5.17714 11.4697 5.47004L10.4697 6.47004C10.1768 6.76293 10.1768 7.2378 10.4697 7.5307C10.6807 7.74172 10.9862 7.8007 11.25 7.70766V12.7418C11.1787 12.7119 11.1055 12.6851 11.0306 12.6617L9.62716 12.2231C9.10531 12.06 8.75 11.5767 8.75 11.03V10.582C9.34124 10.3011 9.75 9.69847 9.75 9.00037C9.75 8.03387 8.9665 7.25037 8 7.25037C7.0335 7.25037 6.25 8.03387 6.25 9.00037C6.25 9.69847 6.65876 10.3011 7.25 10.582V11.03C7.25 12.2328 8.03169 13.296 9.17974 13.6548L10.5832 14.0934C10.9799 14.2174 11.25 14.5847 11.25 15.0004V15.4188C10.6588 15.6996 10.25 16.3023 10.25 17.0004C10.25 17.9669 11.0335 18.7504 12 18.7504C12.9665 18.7504 13.75 17.9669 13.75 17.0004C13.75 16.3608 13.4069 15.8014 12.8948 15.4961C13.0124 15.3084 13.1948 15.1628 13.4168 15.0934L14.8203 14.6548C15.9683 14.296 16.75 13.2328 16.75 12.03V11.7088C16.9502 11.6698 17.1831 11.585 17.3839 11.3842C17.6197 11.1484 17.6955 10.8683 17.725 10.6489C17.7502 10.4617 17.7501 10.2399 17.75 10.0348V9.96592C17.7501 9.76081 17.7502 9.539 17.725 9.35179C17.6955 9.13247 17.6197 8.85228 17.3839 8.61648C17.1481 8.38068 16.8679 8.30485 16.6486 8.27536C16.4614 8.25019 16.2396 8.25028 16.0345 8.25036H15.9656C15.7604 8.25028 15.5386 8.25019 15.3514 8.27536C15.1321 8.30485 14.8519 8.38068 14.6161 8.61648C14.3803 8.85228 14.3045 9.13247 14.275 9.35179C14.2498 9.539 14.2499 9.76078 14.25 9.96589V9.96589V10.0348V10.0348C14.2499 10.2399 14.2498 10.4617 14.275 10.6489C14.3045 10.8683 14.3803 11.1484 14.6161 11.3842C14.8169 11.585 15.0498 11.6698 15.25 11.7088V12.03C15.25 12.5767 14.8947 13.06 14.3728 13.2231L12.9694 13.6617C12.8945 13.6851 12.8213 13.7119 12.75 13.7418V7.70766C13.0138 7.8007 13.3193 7.74172 13.5303 7.5307C13.8232 7.2378 13.8232 6.76293 13.5303 6.47004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46483C2 4.9293 2 7.28632 2 12.0004C2 16.7144 2 19.0714 3.46447 20.5359C4.92893 22.0004 7.28595 22.0004 12 22.0004C16.714 22.0004 19.0711 22.0004 20.5355 20.5359C22 19.0714 22 16.7144 22 12.0004C22 7.28632 22 4.9293 20.5355 3.46483C19.0711 2.00037 16.714 2.00037 12 2.00037C7.28595 2.00037 4.92893 2.00037 3.46447 3.46483ZM13.5303 6.47004L12.5303 5.47004C12.2374 5.17714 11.7626 5.17714 11.4697 5.47004L10.4697 6.47004C10.1768 6.76293 10.1768 7.2378 10.4697 7.5307C10.6807 7.74172 10.9862 7.8007 11.25 7.70766V12.7418C11.1787 12.7119 11.1055 12.6851 11.0306 12.6617L9.62716 12.2231C9.10531 12.06 8.75 11.5767 8.75 11.03V10.582C9.34124 10.3011 9.75 9.69846 9.75 9.00037C9.75 8.03387 8.9665 7.25037 8 7.25037C7.0335 7.25037 6.25 8.03387 6.25 9.00037C6.25 9.69846 6.65876 10.3011 7.25 10.582V11.03C7.25 12.2328 8.03169 13.296 9.17974 13.6548L10.5832 14.0934C10.9799 14.2174 11.25 14.5847 11.25 15.0004V15.4188C10.6588 15.6996 10.25 16.3023 10.25 17.0004C10.25 17.9669 11.0335 18.7504 12 18.7504C12.9665 18.7504 13.75 17.9669 13.75 17.0004C13.75 16.3608 13.4069 15.8014 12.8948 15.4961C13.0124 15.3084 13.1948 15.1628 13.4168 15.0934L14.8203 14.6548C15.9683 14.296 16.75 13.2328 16.75 12.03V11.7088C16.9502 11.6698 17.1831 11.585 17.3839 11.3842C17.6197 11.1484 17.6955 10.8683 17.725 10.6489C17.7502 10.4617 17.7501 10.2399 17.75 10.0348V9.96592C17.7501 9.76081 17.7502 9.539 17.725 9.35179C17.6955 9.13247 17.6197 8.85228 17.3839 8.61648C17.1481 8.38068 16.8679 8.30485 16.6486 8.27536C16.4614 8.25019 16.2396 8.25028 16.0345 8.25036H15.9656C15.7604 8.25028 15.5386 8.25019 15.3514 8.27536C15.1321 8.30485 14.8519 8.38068 14.6161 8.61648C14.3803 8.85228 14.3045 9.13247 14.275 9.35179C14.2498 9.539 14.2499 9.76079 14.25 9.96589V10.0348C14.2499 10.2399 14.2498 10.4617 14.275 10.6489C14.3045 10.8683 14.3803 11.1484 14.6161 11.3842C14.8169 11.585 15.0498 11.6698 15.25 11.7088V12.03C15.25 12.5767 14.8947 13.06 14.3728 13.2231L12.9694 13.6617C12.8945 13.6851 12.8213 13.7119 12.75 13.7418V7.70766C13.0138 7.8007 13.3193 7.74172 13.5303 7.5307C13.8232 7.2378 13.8232 6.76293 13.5303 6.47004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUSBSquare as IconComponentType).keywords = [
  "square",
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

export default IconUSBSquare as IconComponentType;