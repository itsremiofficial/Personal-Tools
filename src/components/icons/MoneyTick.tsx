import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMoneyTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.5 9.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 18C9 18.75 8.79001 19.46 8.42001 20.06C7.73001 21.22 6.46 22 5 22C3.54 22 2.26999 21.22 1.57999 20.06C1.20999 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.43945 18L4.42944 18.99L6.55945 17.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 9V15C22 18.5 20 20 17 20H8.45001C8.80001 19.41 9 18.73 9 18C9 15.79 7.21 14 5 14C3.8 14 2.73 14.53 2 15.36V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z" fill="currentColor" /><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor" /><path d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z" fill="currentColor" /><path d="M5 14C2.79 14 1 15.79 1 18C1 18.75 1.20999 19.46 1.57999 20.06C2.26999 21.22 3.54 22 5 22C6.46 22 7.73001 21.22 8.42001 20.06C8.79001 19.46 9 18.75 9 18C9 15.79 7.21 14 5 14ZM6.97 17.67L4.84 19.64C4.7 19.77 4.50999 19.84 4.32999 19.84C4.13999 19.84 3.94999 19.77 3.79999 19.62L2.81 18.63C2.52 18.34 2.52 17.86 2.81 17.57C3.1 17.28 3.58 17.28 3.87 17.57L4.35001 18.05L5.95001 16.57C6.25001 16.29 6.73001 16.31 7.01001 16.61C7.29001 16.91 7.27 17.39 6.97 17.67Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneyTick as IconComponentType).keywords = [
  "money",
  "tick",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
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

export default IconMoneyTick as IconComponentType;