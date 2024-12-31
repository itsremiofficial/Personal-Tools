import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMainComponent: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.25 6.25L17.75 17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.75 6.25L6.25 17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.95 14.55L18.28 17.22L17.22 18.28L14.55 20.95C13.15 22.35 10.85 22.35 9.45002 20.95L6.78001 18.28L5.72001 17.22L3.05 14.55C1.65 13.15 1.65 10.85 3.05 9.45002L5.72001 6.78001L6.78001 5.72001L9.45002 3.05C10.85 1.65 13.15 1.65 14.55 3.05L17.22 5.72001L18.28 6.78001L20.95 9.45002C22.35 10.85 22.35 13.15 20.95 14.55Z" fill="currentColor" /><path d="M13.0607 12.0002L18.2807 17.2202L17.2207 18.2802L12.0007 13.0602L6.7807 18.2802L5.7207 17.2202L10.9407 12.0002L5.7207 6.78021L6.7807 5.72021L12.0007 10.9402L17.2207 5.72021L18.2807 6.78021L13.0607 12.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMainComponent as IconComponentType).keywords = [
  "main",
  "component",
  "principal",
  "primary",
  "important",
  "independent",
  "chief",
  "intense",
  "briny",
  "of import",
  "prime",
  "constituent",
  "part",
  "fractional",
  "portion",
  "factor",
  "ingredient",
  "element",
  "component part",
  "piece"
];

export default IconMainComponent as IconComponentType;