import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconScissor: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.41998 10.9001C9.48037 10.9001 10.34 10.0404 10.34 8.98006C10.34 7.91967 9.48037 7.06006 8.41998 7.06006C7.3596 7.06006 6.5 7.91967 6.5 8.98006C6.5 10.0404 7.3596 10.9001 8.41998 10.9001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.41998 16.9401C9.48037 16.9401 10.34 16.0805 10.34 15.0201C10.34 13.9597 9.48037 13.1001 8.41998 13.1001C7.3596 13.1001 6.5 13.9597 6.5 15.0201C6.5 16.0805 7.3596 16.9401 8.41998 16.9401Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5002 8.7002L10.1602 14.1902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5002 15.28L10.1602 9.79004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 10C7.433 10 9 8.433 9 6.5C9 4.567 7.433 3 5.5 3C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10Z" fill="currentColor" /><path d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.2491 11.9798L22.4491 6.59978C22.7791 6.34978 22.8491 5.87978 22.5991 5.54978C22.3491 5.21978 21.8791 5.14978 21.5491 5.39978L13.9991 11.0498L8.4491 6.89978C8.1191 6.64978 7.64908 6.71978 7.39908 7.04978C7.14908 7.37978 7.21908 7.84978 7.54908 8.09978L12.7491 11.9898L6.8491 16.4098C6.5191 16.6598 6.4491 17.1298 6.6991 17.4598C6.8491 17.6598 7.06908 17.7598 7.29908 17.7598C7.45908 17.7598 7.60909 17.7098 7.74909 17.6098L14.0091 12.9298L21.5591 18.5798C21.6891 18.6798 21.8491 18.7298 22.0091 18.7298C22.2391 18.7298 22.4591 18.6298 22.6091 18.4298C22.8591 18.0998 22.7891 17.6298 22.4591 17.3798L15.2491 11.9798Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScissor as IconComponentType).keywords = [
  "scissor",
  "pair of scissors",
  "shears",
  "knife",
  "snippers",
  "tweezer",
  "needlenose",
  "tweezers",
  "stapler",
  "cutter"
];

export default IconScissor as IconComponentType;