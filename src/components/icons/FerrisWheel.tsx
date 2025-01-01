import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFerrisWheel: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth={width} /><path d="M20.5 7.5C20.5 8.05228 20.0523 8.5 19.5 8.5C18.9477 8.5 18.5 8.05228 18.5 7.5C18.5 6.94772 18.9477 6.5 19.5 6.5C20.0523 6.5 20.5 6.94772 20.5 7.5Z" stroke="currentColor" strokeWidth={width} /><path d="M20.5 16C20.5 16.5523 20.0523 17 19.5 17C18.9477 17 18.5 16.5523 18.5 16C18.5 15.4477 18.9477 15 19.5 15C20.0523 15 20.5 15.4477 20.5 16Z" stroke="currentColor" strokeWidth={width} /><path d="M5.5 7.5C5.5 8.05228 5.05228 8.5 4.5 8.5C3.94772 8.5 3.5 8.05228 3.5 7.5C3.5 6.94772 3.94772 6.5 4.5 6.5C5.05228 6.5 5.5 6.94772 5.5 7.5Z" stroke="currentColor" strokeWidth={width} /><path d="M5.5 16C5.5 16.5523 5.05228 17 4.5 17C3.94772 17 3.5 16.5523 3.5 16C3.5 15.4477 3.94772 15 4.5 15C5.05228 15 5.5 15.4477 5.5 16Z" stroke="currentColor" strokeWidth={width} /><path d="M12 2.5C12.5523 2.5 13 2.94772 13 3.5C13 4.05228 12.5523 4.5 12 4.5C11.4477 4.5 11 4.05228 11 3.5C11 2.94772 11.4477 2.5 12 2.5Z" stroke="currentColor" strokeWidth={width} /><path d="M12 18.5C12.5523 18.5 13 18.9477 13 19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5C11 18.9477 11.4477 18.5 12 18.5Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13.5 13L18.5 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10.5 13L5.5 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10.5638 3.78311C11.4591 3.29495 12.541 3.29495 13.4362 3.78311L18.2305 6.39728C19.1944 6.92292 19.7943 7.93319 19.7943 9.03117V13.9688C19.7943 15.0668 19.1944 16.0771 18.2305 16.6027L13.4362 19.2169C12.541 19.705 11.4591 19.705 10.5638 19.2169L5.76962 16.6027C4.80563 16.0771 4.20581 15.0668 4.20581 13.9688V9.03117C4.20581 7.93318 4.80563 6.92292 5.76962 6.39728L10.5638 3.78311Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M12 9.75C11.3096 9.75 10.75 10.3096 10.75 11C10.75 11.6904 11.3096 12.25 12 12.25C12.6904 12.25 13.25 11.6904 13.25 11C13.25 10.3096 12.6904 9.75 12 9.75ZM9.25 11C9.25 9.48122 10.4812 8.25 12 8.25C13.5188 8.25 14.75 9.48122 14.75 11C14.75 12.5188 13.5188 13.75 12 13.75C10.4812 13.75 9.25 12.5188 9.25 11Z" fill="currentColor" /><path d="M9.82112 12.6779L4.84452 21.6358C4.64336 21.9979 4.77382 22.4545 5.1359 22.6557C5.49799 22.8568 5.95459 22.7264 6.15575 22.3643L11.0377 13.5768C10.5524 13.3955 10.1321 13.0811 9.82112 12.6779Z" fill="currentColor" /><path d="M12.9626 13.5768L17.8445 22.3643C18.0457 22.7264 18.5023 22.8568 18.8644 22.6557C19.2265 22.4545 19.3569 21.9979 19.1558 21.6358L14.179 12.6777C13.8681 13.0809 13.4478 13.3954 12.9626 13.5768Z" fill="currentColor" /><path d="M12 5.25C11.0335 5.25 10.25 4.4665 10.25 3.5C10.25 2.5335 11.0335 1.75 12 1.75C12.9665 1.75 13.75 2.5335 13.75 3.5C13.75 4.4665 12.9665 5.25 12 5.25Z" fill="currentColor" /><path d="M2.75 7.5C2.75 6.5335 3.5335 5.75 4.5 5.75C5.4665 5.75 6.25 6.5335 6.25 7.5C6.25 8.4665 5.4665 9.25 4.5 9.25C3.5335 9.25 2.75 8.4665 2.75 7.5Z" fill="currentColor" /><path d="M19.5 5.75C18.5335 5.75 17.75 6.5335 17.75 7.5C17.75 8.4665 18.5335 9.25 19.5 9.25C20.4665 9.25 21.25 8.4665 21.25 7.5C21.25 6.5335 20.4665 5.75 19.5 5.75Z" fill="currentColor" /><path d="M19.5 14.25C18.5335 14.25 17.75 15.0335 17.75 16C17.75 16.9665 18.5335 17.75 19.5 17.75C20.4665 17.75 21.25 16.9665 21.25 16C21.25 15.0335 20.4665 14.25 19.5 14.25Z" fill="currentColor" /><path d="M4.5 14.25C3.5335 14.25 2.75 15.0335 2.75 16C2.75 16.9665 3.5335 17.75 4.5 17.75C5.4665 17.75 6.25 16.9665 6.25 16C6.25 15.0335 5.4665 14.25 4.5 14.25Z" fill="currentColor" /><path d="M10.25 19.5C10.25 20.4665 11.0335 21.25 12 21.25C12.9665 21.25 13.75 20.4665 13.75 19.5C13.75 18.5335 12.9665 17.75 12 17.75C11.0335 17.75 10.25 18.5335 10.25 19.5Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M10.6366 4.59718C10.3948 4.29705 10.25 3.91539 10.25 3.49992C10.25 3.35257 10.2682 3.20947 10.3025 3.07275C10.2695 3.0895 10.2367 3.10677 10.2041 3.12456L5.40984 5.73873C5.32726 5.78376 5.24682 5.83163 5.16861 5.88219C5.66011 6.08555 6.0388 6.50638 6.18471 7.02472L10.6366 4.59718ZM4.95508 9.19017C4.80997 9.22914 4.65741 9.24992 4.5 9.24992C4.10925 9.24992 3.74842 9.12186 3.45718 8.90541C3.45578 8.94719 3.45508 8.98909 3.45508 9.03109V13.9687C3.45508 14.1694 3.4711 14.3676 3.50223 14.562C3.78526 14.3653 4.12916 14.2499 4.5 14.2499C4.66724 14.2499 4.82901 14.2734 4.98218 14.3172C4.96429 14.203 4.95508 14.0865 4.95508 13.9687V9.19017ZM6.24997 16.0107C6.24668 16.5574 5.99273 17.0446 5.59726 17.3633L10.2041 19.8753C10.2367 19.893 10.2695 19.9103 10.3025 19.9271C10.2682 19.7904 10.25 19.6473 10.25 19.4999C10.25 19.0844 10.3948 18.7028 10.6367 18.4026L6.24997 16.0107ZM13.3629 18.4021C13.605 18.7023 13.75 19.0842 13.75 19.4999C13.75 19.647 13.7319 19.7898 13.6977 19.9263C13.7302 19.9098 13.7625 19.8928 13.7945 19.8753L18.4022 17.3628C18.0068 17.044 17.7531 16.5566 17.75 16.0099L13.3629 18.4021ZM19.0164 14.3176C19.17 14.2735 19.3322 14.2499 19.5 14.2499C19.8703 14.2499 20.2137 14.3649 20.4965 14.5612C20.5276 14.3671 20.5435 14.1691 20.5435 13.9687V9.03109C20.5435 8.98942 20.5428 8.94787 20.5415 8.90642C20.2505 9.12225 19.8901 9.24992 19.5 9.24992C19.3421 9.24992 19.1891 9.22901 19.0435 9.18979V13.9687C19.0435 14.0867 19.0343 14.2032 19.0164 14.3176ZM17.8151 7.02537C17.9608 6.50703 18.3392 6.08612 18.8305 5.88254C18.7522 5.83185 18.6715 5.78386 18.5888 5.73873L13.7945 3.12456C13.7625 3.10706 13.7302 3.09006 13.6977 3.07356C13.7319 3.21003 13.75 3.35286 13.75 3.49992C13.75 3.91563 13.605 4.29749 13.3629 4.59771L17.8151 7.02537Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.6976 3.07336C13.5072 2.31307 12.8193 1.75 12 1.75C11.1808 1.75 10.493 2.31295 10.3024 3.07312C10.2696 3.08978 10.237 3.10695 10.2046 3.12464L5.41033 5.73881C5.32768 5.78387 5.24718 5.83179 5.16891 5.88239C4.96283 5.79708 4.73691 5.75 4.5 5.75C3.5335 5.75 2.75 6.5335 2.75 7.5C2.75 8.07596 3.02825 8.58694 3.45765 8.90584C3.45626 8.94751 3.45557 8.98928 3.45557 9.03117V13.9688C3.45557 14.1693 3.47157 14.3675 3.50266 14.5618C3.04779 14.8779 2.75 15.4041 2.75 16C2.75 16.9665 3.5335 17.75 4.5 17.75C4.91556 17.75 5.29729 17.6052 5.59745 17.3632L6.90514 18.0763L4.85105 21.6242C4.64352 21.9827 4.76588 22.4415 5.12435 22.6491C5.48282 22.8566 5.94166 22.7342 6.14919 22.3758L8.22252 18.7946L10.2046 19.8753C10.237 19.893 10.2696 19.9102 10.3024 19.9269C10.493 20.687 11.1807 21.25 12 21.25C12.8193 21.25 13.5072 20.6869 13.6976 19.9266C13.7303 19.91 13.7628 19.8929 13.795 19.8753L15.7776 18.7943L17.8511 22.3758C18.0586 22.7342 18.5174 22.8566 18.8759 22.6491C19.2344 22.4415 19.3567 21.9827 19.1492 21.6242L17.0949 18.076L18.4024 17.3631C18.7026 17.6051 19.0844 17.75 19.5 17.75C20.4665 17.75 21.25 16.9665 21.25 16C21.25 15.404 20.952 14.8776 20.497 14.5616C20.528 14.3673 20.544 14.1692 20.544 13.9688V9.03117C20.544 8.98938 20.5433 8.94771 20.5419 8.90614C20.9716 8.58726 21.25 8.07615 21.25 7.5C21.25 6.5335 20.4665 5.75 19.5 5.75C19.263 5.75 19.037 5.79712 18.8308 5.88249C18.7525 5.83185 18.672 5.78391 18.5893 5.73881L13.795 3.12464C13.7628 3.10703 13.7303 3.08994 13.6976 3.07336ZM10.6368 4.59745C10.9576 4.9954 11.4491 5.25 12 5.25C12.5509 5.25 13.0423 4.99547 13.3631 4.5976L17.8152 7.02522C17.7727 7.1762 17.75 7.33545 17.75 7.5C17.75 8.30876 18.2986 8.98938 19.044 9.19V13.9688C19.044 14.0867 19.0348 14.2032 19.0169 14.3175C18.2853 14.5272 17.75 15.2011 17.75 16C17.75 16.0034 17.75 16.0069 17.75 16.0103L16.3431 16.7774L13.6516 12.1284C13.8715 11.8072 14.0001 11.4186 14.0001 11C14.0001 9.89543 13.1047 9 12.0001 9C10.8956 9 10.0001 9.89543 10.0001 11C10.0001 11.4186 10.1287 11.8072 10.3486 12.1284L7.65694 16.7777L6.24997 16.0105C6.24999 16.007 6.25 16.0035 6.25 16C6.25 15.2009 5.71444 14.5269 4.98269 14.3174C4.96478 14.2031 4.95557 14.0866 4.95557 13.9688V9.19011C5.70117 8.98963 6.25 8.30891 6.25 7.5C6.25 7.33538 6.22727 7.17606 6.18477 7.02503L10.6368 4.59745ZM8.97432 17.496L10.6368 18.4025C10.9576 18.0046 11.4491 17.75 12 17.75C12.5509 17.75 13.0423 18.0045 13.3631 18.4024L15.0258 17.4957L12.3998 12.96C12.2707 12.9862 12.137 13 12.0001 13C11.8632 13 11.7296 12.9862 11.6004 12.96L8.97432 17.496Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFerrisWheel as IconComponentType).keywords = [
  "ferris",
  "wheel",
  "farris",
  "grande",
  "big",
  "browning",
  "grand",
  "vast",
  "large",
  "great",
  "major",
  "steering wheel",
  "wheel around",
  "pedal",
  "bicycle",
  "cycle",
  "rack",
  "bike",
  "roll",
  "roulette wheel"
];

export default IconFerrisWheel as IconComponentType;