import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrowSwapHorizontal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M21.1702 14.9902L16.1602 20.0102" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.16992 14.9902H21.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M4.16992 9.00999L9.17992 3.98999" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.1699 9.01001H4.16992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.47992 2H16.8499C20.4999 2 22.6699 4.17 22.6699 7.81V16.18C22.6699 19.82 20.4999 21.99 16.8599 21.99H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2Z" fill="currentColor" /><path d="M18.3599 13.48C18.2799 13.3 18.1399 13.15 17.9499 13.07C17.8599 13.03 17.7599 13.01 17.6599 13.01H7.66992C7.25992 13.01 6.91992 13.35 6.91992 13.76C6.91992 14.17 7.25992 14.51 7.66992 14.51H15.8599L14.1899 16.18C13.8999 16.47 13.8999 16.95 14.1899 17.24C14.3399 17.39 14.5299 17.46 14.7199 17.46C14.9099 17.46 15.0999 17.39 15.2499 17.24L18.1999 14.29C18.2699 14.22 18.3199 14.14 18.3599 14.05C18.4399 13.86 18.4399 13.66 18.3599 13.48Z" fill="currentColor" /><path d="M6.97992 10.52C7.05992 10.7 7.19992 10.85 7.38992 10.93C7.47992 10.97 7.56992 10.99 7.66992 10.99H17.6699C18.0799 10.99 18.4199 10.65 18.4199 10.24C18.4199 9.82998 18.0799 9.48998 17.6699 9.48998H9.47992L11.1499 7.81998C11.4399 7.52998 11.4399 7.04998 11.1499 6.75998C10.8599 6.46998 10.3799 6.46998 10.0899 6.75998L7.13992 9.70998C7.06992 9.77998 7.01992 9.85998 6.97992 9.94998C6.89992 10.14 6.89992 10.34 6.97992 10.52Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM18.3599 14.05C18.3199 14.14 18.2699 14.22 18.1999 14.29L15.2499 17.24C15.0999 17.39 14.9099 17.46 14.7199 17.46C14.5299 17.46 14.3399 17.39 14.1899 17.24C13.8999 16.95 13.8999 16.47 14.1899 16.18L15.8599 14.51H7.66992C7.25992 14.51 6.91992 14.17 6.91992 13.76C6.91992 13.35 7.25992 13.01 7.66992 13.01H17.6699C17.7699 13.01 17.8599 13.03 17.9599 13.07C18.1399 13.15 18.2899 13.29 18.3699 13.48C18.4399 13.66 18.4399 13.86 18.3599 14.05ZM17.6699 10.99H7.66992C7.56992 10.99 7.47992 10.97 7.37992 10.93C7.19992 10.85 7.04992 10.71 6.96992 10.52C6.88992 10.34 6.88992 10.13 6.96992 9.95C7.01992 9.86 7.06992 9.78 7.13992 9.71L10.0899 6.76C10.3799 6.47 10.8599 6.47 11.1499 6.76C11.4399 7.05 11.4399 7.53 11.1499 7.82L9.47992 9.49H17.6699C18.0799 9.49 18.4199 9.83 18.4199 10.24C18.4199 10.65 18.0799 10.99 17.6699 10.99Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowSwapHorizontal as IconComponentType).keywords = [
  "arrow",
  "swap",
  "horizontal",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "barter",
  "quid pro quo",
  "trade",
  "swop",
  "switch",
  "exchange",
  "bartering",
  "substitute",
  "trade-in",
  "level",
  "flat",
  "crosswise",
  "swimming",
  "naiant",
  "cross-sectional",
  "transverse",
  "transversal",
  "landscape"
];

export default IconArrowSwapHorizontal as IconComponentType;