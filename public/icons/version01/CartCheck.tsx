import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCartCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M7.5 18.0005C8.32843 18.0005 9 18.6721 9 19.5005C9 20.3289 8.32843 21.0005 7.5 21.0005C6.67157 21.0005 6 20.3289 6 19.5005C6 18.6721 6.67157 18.0005 7.5 18.0005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16.5 18.0006C17.3284 18.0006 18 18.6721 18 19.5006C18 20.329 17.3284 21.0006 16.5 21.0006C15.6716 21.0006 15 20.329 15 19.5006C15 18.6721 15.6716 18.0006 16.5 18.0006Z" stroke="currentColor" strokeWidth={width} /><path d="M2.26121 3.09232L2.50997 2.38478H2.50997L2.26121 3.09232ZM2.24876 2.29294C1.85799 2.15556 1.42984 2.36096 1.29246 2.75173C1.15507 3.1425 1.36048 3.57065 1.75124 3.70803L2.24876 2.29294ZM4.58584 4.32347L5.20507 3.90032V3.90032L4.58584 4.32347ZM5.88772 14.5867L5.34345 15.1027H5.34345L5.88772 14.5867ZM20.6578 9.88324L21.3923 10.0346L21.3933 10.03L20.6578 9.88324ZM20.158 12.308L20.8926 12.4594L20.158 12.308ZM20.7345 6.69757L20.1401 7.15487L20.7345 6.69757ZM19.1336 15.0509L18.6598 14.4695L19.1336 15.0509ZM5.70808 9.76049V7.03885H4.20808V9.76049H5.70808ZM2.50997 2.38478L2.24876 2.29294L1.75124 3.70803L2.01245 3.79987L2.50997 2.38478ZM10.9375 16.2505H16.2404V14.7505H10.9375V16.2505ZM5.70808 7.03885C5.70808 6.33169 5.7091 5.74158 5.65719 5.26206C5.60346 4.76568 5.48705 4.31296 5.20507 3.90032L3.96661 4.74662C4.05687 4.87871 4.12657 5.06013 4.1659 5.42348C4.20706 5.80368 4.20808 6.2989 4.20808 7.03885H5.70808ZM2.01245 3.79987C2.68006 4.03459 3.11881 4.19014 3.44166 4.34854C3.74488 4.49733 3.87855 4.61776 3.96661 4.74662L5.20507 3.90032C4.92089 3.48446 4.54304 3.21812 4.10241 3.00192C3.68139 2.79534 3.14395 2.60768 2.50997 2.38478L2.01245 3.79987ZM4.20808 9.76049C4.20808 11.213 4.22171 12.2604 4.35876 13.0606C4.50508 13.9149 4.79722 14.5265 5.34345 15.1027L6.43198 14.0706C6.11182 13.733 5.93913 13.4023 5.83723 12.8074C5.72607 12.1583 5.70808 11.2495 5.70808 9.76049H4.20808ZM10.9375 14.7505C9.52069 14.7505 8.53763 14.7487 7.79696 14.6437C7.08215 14.5423 6.70452 14.3581 6.43198 14.0706L5.34345 15.1027C5.93731 15.729 6.69012 16.0017 7.58636 16.1288C8.45674 16.2523 9.56535 16.2505 10.9375 16.2505V14.7505ZM4.95808 6.87049H17.0888V5.37049H4.95808V6.87049ZM19.9232 9.73184L19.4235 12.1566L20.8926 12.4594L21.3923 10.0346L19.9232 9.73184ZM17.0888 6.87049C17.9452 6.87049 18.6989 6.87149 19.2937 6.93798C19.5893 6.97102 19.8105 7.01692 19.9659 7.07153C20.1273 7.12825 20.153 7.17176 20.1401 7.15487L21.329 6.24027C21.094 5.93484 20.7636 5.76194 20.4632 5.65636C20.1567 5.54866 19.8101 5.48636 19.4604 5.44727C18.7646 5.36949 17.9174 5.37049 17.0888 5.37049V6.87049ZM21.3933 10.03C21.5625 9.18215 21.7062 8.47073 21.7414 7.90087C21.7775 7.31467 21.7108 6.73666 21.329 6.24027L20.1401 7.15487C20.2021 7.23557 20.2706 7.38086 20.2442 7.80846C20.2168 8.2524 20.1002 8.84527 19.9223 9.73644L21.3933 10.03ZM16.2404 16.2505C17.0021 16.2505 17.6413 16.2518 18.1566 16.1887C18.6923 16.1232 19.1809 15.9798 19.6074 15.6323L18.6598 14.4695C18.5346 14.5715 18.3571 14.653 17.9744 14.6998C17.5712 14.7492 17.0397 14.7505 16.2404 14.7505V16.2505ZM19.4235 12.1566C19.2621 12.9394 19.1535 13.4598 19.0238 13.8446C18.9007 14.21 18.785 14.3674 18.6598 14.4695L19.6074 15.6323C20.0339 15.2847 20.2729 14.8351 20.4453 14.3237C20.6111 13.8317 20.7388 13.2054 20.8926 12.4594L19.4235 12.1566Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M11 10.8005L12.1429 12.0005L15 9.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.08416 2.75169C2.22155 2.36092 2.6497 2.15552 3.04047 2.2929L3.34187 2.39887C3.95839 2.6156 4.48203 2.79968 4.89411 3.00188C5.33474 3.21808 5.71259 3.48442 5.99677 3.90028C6.27875 4.31292 6.39517 4.76564 6.4489 5.26202C6.47295 5.48422 6.48564 5.73016 6.49233 6.00049H17.1305C18.8155 6.00049 20.3323 6.00049 20.7762 6.57757C21.2202 7.15465 21.0466 8.02418 20.6995 9.76324L20.1997 12.188C19.8846 13.7168 19.727 14.4813 19.1753 14.9309C18.6236 15.3805 17.8431 15.3805 16.2821 15.3805H10.9792C8.19028 15.3805 6.79583 15.3805 5.92943 14.4667C5.06302 13.5528 4.99979 12.5821 4.99979 9.64049L4.99979 7.03881C4.99979 6.29886 4.99877 5.80364 4.95761 5.42344C4.91828 5.06009 4.84858 4.87867 4.75832 4.74658C4.67026 4.61772 4.53659 4.49729 4.23336 4.3485C3.91052 4.1901 3.47177 4.03455 2.80416 3.79983L2.54295 3.70799C2.15218 3.57061 1.94678 3.14246 2.08416 2.75169Z" fill="currentColor" /><path d="M7.5 18.0005C8.32843 18.0005 9 18.6721 9 19.5005C9 20.3289 8.32843 21.0005 7.5 21.0005C6.67157 21.0005 6 20.3289 6 19.5005C6 18.6721 6.67157 18.0005 7.5 18.0005Z" fill="currentColor" /><path d="M16.5 18.0006C17.3284 18.0006 18 18.6721 18 19.5006C18 20.329 17.3284 21.0006 16.5 21.0006C15.6716 21.0006 15 20.329 15 19.5006C15 18.6721 15.6716 18.0006 16.5 18.0006Z" fill="currentColor" /><path d="M15.5421 9.51773C15.8278 9.21778 15.8162 8.74305 15.5163 8.45739C15.2163 8.17172 14.7416 8.1833 14.4559 8.48325L12.1419 10.913L11.5421 10.2832C11.2565 9.9833 10.7817 9.97172 10.4818 10.2574C10.1818 10.5431 10.1703 11.0178 10.4559 11.3177L11.5988 12.5177C11.7403 12.6664 11.9366 12.7505 12.1419 12.7505C12.3471 12.7505 12.5434 12.6664 12.685 12.5177L15.5421 9.51773Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.2929C2.6497 2.15552 2.22155 2.36092 2.08416 2.75169C1.94678 3.14246 2.15218 3.57061 2.54295 3.70799L2.80416 3.79983C3.47177 4.03455 3.91052 4.1901 4.23336 4.3485C4.53659 4.49729 4.67026 4.61772 4.75832 4.74658C4.84858 4.87867 4.91828 5.06009 4.95761 5.42344C4.99877 5.80364 4.99979 6.29886 4.99979 7.03881L4.99979 9.64049C4.99979 12.5821 5.06302 13.5528 5.92943 14.4667C6.79583 15.3805 8.19028 15.3805 10.9792 15.3805H16.2821C17.8431 15.3805 18.6236 15.3805 19.1753 14.9309C19.727 14.4813 19.8846 13.7168 20.1997 12.188L20.6995 9.76324C21.0466 8.02418 21.2202 7.15465 20.7762 6.57757C20.3323 6.00049 18.8155 6.00049 17.1305 6.00049H6.49233C6.48564 5.73016 6.47295 5.48422 6.4489 5.26202C6.39517 4.76564 6.27875 4.31292 5.99677 3.90028C5.71259 3.48442 5.33474 3.21808 4.89411 3.00188C4.48203 2.79968 3.95839 2.6156 3.34187 2.39887L3.04047 2.2929ZM15.5172 8.45739C15.8172 8.74305 15.8288 9.21778 15.5431 9.51773L12.686 12.5177C12.5444 12.6664 12.3481 12.7505 12.1429 12.7505C11.9376 12.7505 11.7413 12.6664 11.5998 12.5177L10.4569 11.3177C10.1712 11.0178 10.1828 10.543 10.4828 10.2574C10.7827 9.97172 11.2574 9.9833 11.5431 10.2832L12.1429 10.913L14.4569 8.48325C14.7426 8.1833 15.2173 8.17172 15.5172 8.45739Z" fill="currentColor" /><path d="M7.5 18.0005C8.32843 18.0005 9 18.6721 9 19.5005C9 20.3289 8.32843 21.0005 7.5 21.0005C6.67157 21.0005 6 20.3289 6 19.5005C6 18.6721 6.67157 18.0005 7.5 18.0005Z" fill="currentColor" /><path d="M16.5 18.0006C17.3284 18.0006 18 18.6721 18 19.5006C18 20.329 17.3284 21.0006 16.5 21.0006C15.6716 21.0006 15 20.329 15 19.5006C15 18.6721 15.6716 18.0006 16.5 18.0006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCartCheck as IconComponentType).keywords = [
  "cart",
  "check",
  "handcart",
  "pushcart",
  "go-cart",
  "haul",
  "drag",
  "dray",
  "wheelbarrow",
  "wagon",
  "bandwagon",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold"
];

export default IconCartCheck as IconComponentType;