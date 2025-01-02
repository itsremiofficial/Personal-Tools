import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPen2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 22.0002H20" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14.6296 2.92167L13.8881 3.66317L7.07106 10.4802C6.60933 10.9419 6.37846 11.1728 6.17992 11.4273C5.94571 11.7276 5.74491 12.0525 5.58107 12.3963C5.44219 12.6877 5.33894 12.9974 5.13245 13.6169L4.25745 16.2419L4.04356 16.8836C3.94194 17.1884 4.02128 17.5245 4.2485 17.7517C4.47573 17.979 4.81182 18.0583 5.11667 17.9567L5.75834 17.7428L8.38334 16.8678L8.3834 16.8678C9.00284 16.6613 9.31256 16.5581 9.60398 16.4192C9.94775 16.2553 10.2727 16.0545 10.5729 15.8203C10.8275 15.6218 11.0583 15.3909 11.5201 14.9292L11.5201 14.9292L18.3371 8.11219L19.0786 7.37069C20.3071 6.14213 20.3071 4.15023 19.0786 2.92167C17.85 1.6931 15.8581 1.6931 14.6296 2.92167Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13.8879 3.66333C13.8879 3.66333 13.9806 5.23903 15.3709 6.62934C16.7613 8.01966 18.337 8.11235 18.337 8.11235M5.75821 17.743L4.25732 16.2421" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M3.25 22.0002C3.25 21.586 3.58579 21.2502 4 21.2502H20C20.4142 21.2502 20.75 21.586 20.75 22.0002C20.75 22.4145 20.4142 22.7502 20 22.7502H4C3.58579 22.7502 3.25 22.4145 3.25 22.0002Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M19.0807 7.37187C20.3095 6.14303 20.3095 4.1507 19.0807 2.92187C17.8519 1.69304 15.8595 1.69304 14.6307 2.92187L13.9209 3.63166C13.9306 3.66101 13.9407 3.69076 13.9512 3.72091C14.2113 4.47078 14.7022 5.45381 15.6256 6.37722C16.549 7.30064 17.532 7.7915 18.2819 8.05167C18.3119 8.06208 18.3415 8.07211 18.3708 8.08179L19.0807 7.37187Z" fill="currentColor" /><path d="M13.9511 3.59985L13.9205 3.63041C13.9303 3.65976 13.9403 3.68952 13.9508 3.71966C14.211 4.46954 14.7018 5.45257 15.6252 6.37598C16.5487 7.2994 17.5317 7.79026 18.2816 8.05043C18.3113 8.06075 18.3407 8.0707 18.3696 8.0803L11.5198 14.9302C11.058 15.392 10.827 15.6229 10.5724 15.8215C10.2721 16.0558 9.94711 16.2566 9.60326 16.4205C9.31177 16.5594 9.00196 16.6627 8.38235 16.8692L5.11497 17.9583C4.81005 18.06 4.47388 17.9806 4.24661 17.7533C4.01934 17.5261 3.93998 17.1899 4.04162 16.885L5.13074 13.6176C5.33728 12.998 5.44055 12.6882 5.57947 12.3967C5.74334 12.0528 5.94418 11.7279 6.17844 11.4275C6.37702 11.1729 6.60794 10.942 7.06971 10.4802L13.9511 3.59985Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.25 22.0002C3.25 21.586 3.58579 21.2502 4 21.2502H20C20.4142 21.2502 20.75 21.586 20.75 22.0002C20.75 22.4145 20.4142 22.7502 20 22.7502H4C3.58579 22.7502 3.25 22.4145 3.25 22.0002Z" fill="currentColor" /><path d="M11.5201 14.9292L11.5201 14.9292L17.4368 9.0125C16.6315 8.67734 15.6777 8.12681 14.7757 7.22479C13.8736 6.32263 13.323 5.36871 12.9879 4.56336L7.07106 10.4802L7.07101 10.4802C6.60932 10.9419 6.37846 11.1728 6.17992 11.4273C5.94571 11.7276 5.74491 12.0525 5.58107 12.3963C5.44219 12.6877 5.33894 12.9974 5.13245 13.6169L4.04356 16.8836C3.94194 17.1884 4.02128 17.5245 4.2485 17.7517C4.47573 17.979 4.81182 18.0583 5.11667 17.9567L8.38334 16.8678C9.00281 16.6613 9.31256 16.5581 9.60398 16.4192C9.94775 16.2553 10.2727 16.0545 10.5729 15.8203C10.8275 15.6218 11.0584 15.3909 11.5201 14.9292Z" fill="currentColor" /><path d="M19.0786 7.37069C20.3071 6.14213 20.3071 4.15023 19.0786 2.92167C17.85 1.6931 15.8581 1.6931 14.6296 2.92167L13.9199 3.6313C13.9296 3.66064 13.9397 3.69039 13.9502 3.72053C14.2103 4.47024 14.701 5.45305 15.6243 6.37626C16.5475 7.29947 17.5303 7.79023 18.28 8.05034C18.31 8.06075 18.3396 8.07078 18.3688 8.08045L19.0786 7.37069Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPen2 as IconComponentType).keywords = [
  "pen",
  "2",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconPen2 as IconComponentType;