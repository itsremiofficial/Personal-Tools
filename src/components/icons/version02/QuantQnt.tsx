import { FC } from 'react';

const IconQuantQnt: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 6.44L7.66992 9.22V14.78L12.6699 17.56L17.6699 14.78V9.22L12.6699 6.44Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 2L3.66992 7V17L12.6699 22L17.6699 19.5L21.6699 22V17L17.6699 14.78L21.6699 12V7L12.6699 2Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.66992 7L7.66992 9.23" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.66992 17L7.66992 14.77" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 7L17.6699 9.23" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 6V2" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22V18" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6699 20V15" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.6" : "1"} d="M21.6699 7V12L17.6699 14.78V9.23L21.6699 7Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M12.6699 17.56V22L3.66992 17L7.66992 14.77V14.78L12.6699 17.56Z" fill="currentColor" /><path d="M7.66992 9.23V14.77L3.66992 17V7L7.66992 9.23Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M12.6699 2V6.44L7.66992 9.22V9.23L3.66992 7L12.6699 2Z" fill="currentColor" /><path d="M17.6699 9.23V9.22L12.6699 6.44V2L21.6699 7L17.6699 9.23Z" fill="currentColor" /><path d="M17.6699 14.78V19.5L12.6699 22V17.56L17.6699 14.78Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6699 17V22L17.6699 19.5V14.78L21.6699 17Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 9.21994V14.7799L12.6699 17.5599L7.66992 14.7799V9.21994L12.6699 6.43994L17.6699 9.21994Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1597 6.71L13.1597 2.27C12.8597 2.1 12.4897 2.1 12.1897 2.27L4.1897 6.71C3.8697 6.89 3.67969 7.22 3.67969 7.58V16.4C3.67969 16.76 3.8797 17.1 4.1897 17.27L12.2097 21.73C12.4997 21.89 12.8496 21.9 13.1396 21.75L17.1697 19.74C17.4797 19.58 17.8497 19.6 18.1497 19.79L20.1396 21.04C20.8096 21.46 21.6697 20.98 21.6697 20.19V17.58C21.6697 17.22 21.4697 16.88 21.1597 16.71L18.1597 15.05C17.8597 14.88 17.4897 14.88 17.1897 15.05L13.1597 17.29C12.8597 17.46 12.4897 17.46 12.1897 17.29L8.1897 15.07C7.8697 14.89 7.67969 14.56 7.67969 14.2V9.82C7.67969 9.46 7.8797 9.11999 8.1897 8.94999L12.1897 6.72999C12.4897 6.55999 12.8597 6.55999 13.1597 6.72999L17.1597 8.94999C17.4797 9.12999 17.6697 9.46 17.6697 9.82V12.88C17.6697 13.69 18.5797 14.16 19.2397 13.7L21.2397 12.31C21.5097 12.12 21.6697 11.82 21.6697 11.49V7.6C21.6697 7.23 21.4697 6.89 21.1597 6.71Z" fill="none" /><path d="M16.53 10.42V13.57C16.53 13.92 16.34 14.24 16.03 14.41L13.14 16.02C12.85 16.18 12.4901 16.18 12.2001 16.02L9.31006 14.41C9.00006 14.24 8.81006 13.92 8.81006 13.57V10.42C8.81006 10.07 9.00006 9.75001 9.31006 9.58001L12.2001 7.97001C12.4901 7.81001 12.85 7.81001 13.14 7.97001L16.03 9.58001C16.34 9.75001 16.53 10.07 16.53 10.42Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQuantQnt as IconComponent).keywords = [
  "quant",
  "qnt",
  "aux",
  "biol",
  "comps",
  "quantitative",
  "quantative",
  "qual",
  "quantitive",
  "gmat",
  "analytic"
];

export default IconQuantQnt as IconComponent;