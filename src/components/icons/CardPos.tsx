import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCardPos: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.92969 15.8792L15.8797 3.9292" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.1016 18.2791L12.3016 17.0791" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.793 15.5887L16.183 13.1987" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 21.9985H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 22H2.75C2.34 22 2 21.66 2 21.25C2 20.84 2.34 20.5 2.75 20.5H21.25C21.66 20.5 22 20.84 22 21.25C22 21.66 21.66 22 21.25 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.5909 13.7002L13.3609 20.9302C11.9409 22.3502 9.65086 22.3502 8.24086 20.9402L3.63086 16.3302L15.9909 3.97021L20.6009 8.58021C22.0109 9.99021 22.0109 12.2802 20.5909 13.7002Z" fill="currentColor" /><path d="M15.9906 3.97016L3.62055 16.3302L2.71055 15.4202C1.30055 14.0102 1.30055 11.7202 2.72055 10.3002L9.95055 3.07016C11.3706 1.65016 13.6606 1.65016 15.0705 3.06016L15.9906 3.97016Z" fill="currentColor" /><path d="M12.8903 17.5999L11.5403 18.9499C11.2603 19.2299 10.8103 19.2299 10.5303 18.9499C10.2503 18.6699 10.2503 18.2199 10.5303 17.9399L11.8803 16.5899C12.1603 16.3099 12.6103 16.3099 12.8903 16.5899C13.1703 16.8699 13.1703 17.3199 12.8903 17.5999Z" fill="currentColor" /><path d="M17.2694 13.22L14.5794 15.91C14.2994 16.19 13.8494 16.19 13.5694 15.91C13.2894 15.63 13.2894 15.18 13.5694 14.9L16.2594 12.21C16.5394 11.93 16.9894 11.93 17.2694 12.21C17.5394 12.49 17.5394 12.94 17.2694 13.22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardPos as IconComponentType).keywords = [
  "card",
  "pos",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "polonium",
  "atomic number 84",
  "po river",
  "poc",
  "vpn",
  "pov",
  "psd",
  "sales",
  "ordering"
];

export default IconCardPos as IconComponentType;