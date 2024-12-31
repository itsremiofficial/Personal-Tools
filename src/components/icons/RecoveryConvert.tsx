import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRecoveryConvert: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6 11.5799V14.3099C13.6 16.5899 12.69 17.4999 10.41 17.4999H7.69C5.42 17.4999 4.5 16.5899 4.5 14.3099V11.5799C4.5 9.3099 5.41 8.3999 7.69 8.3999H10.42C12.69 8.3999 13.6 9.3099 13.6 11.5799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5004 7.68V10.41C17.5004 12.69 16.5904 13.6 14.3104 13.6H13.6004V11.58C13.6004 9.31 12.6904 8.4 10.4104 8.4H8.40039V7.68C8.40039 5.4 9.31039 4.5 11.5904 4.5H14.3204C16.5904 4.5 17.5004 5.41 17.5004 7.68Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M1 8C1 4.13 4.13 1 8 1L6.95 2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.0002 22.7502C14.7302 22.7502 14.4802 22.6002 14.3502 22.3702C14.2202 22.1302 14.2202 21.8502 14.3602 21.6102L15.4102 19.8602C15.6202 19.5002 16.0902 19.3902 16.4402 19.6002C16.8002 19.8102 16.9102 20.2702 16.7002 20.6302L16.4302 21.0802C19.1902 20.4302 21.2602 17.9502 21.2602 14.9902C21.2602 14.5802 21.6002 14.2402 22.0102 14.2402C22.4202 14.2402 22.7602 14.5802 22.7602 14.9902C22.7502 19.2702 19.2702 22.7502 15.0002 22.7502Z" fill="currentColor" /><path d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.87 9.78 2.15 9.64 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.8 12.6302V15.5702C14.8 18.0202 13.82 19.0002 11.37 19.0002H8.43C5.98 19.0002 5 18.0202 5 15.5702V12.6302C5 10.1802 5.98 9.2002 8.43 9.2002H11.37C13.82 9.2002 14.8 10.1802 14.8 12.6302Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.5709 5H12.6309C10.2209 5 9.24094 5.96 9.21094 8.32H11.3709C14.3109 8.32 15.6709 9.69 15.6709 12.62V14.78C18.0409 14.75 18.9909 13.77 18.9909 11.36V8.43C19.0009 5.98 18.0209 5 15.5709 5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRecoveryConvert as IconComponentType).keywords = [
  "recovery",
  "convert",
  "recuperation",
  "convalescence",
  "retrieval",
  "regaining",
  "retrieve",
  "recover",
  "rehabilitate",
  "reclaim",
  "regain",
  "change over",
  "change",
  "exchange",
  "turn",
  "win over",
  "convince",
  "commute",
  "transformation",
  "alter"
];

export default IconRecoveryConvert as IconComponentType;