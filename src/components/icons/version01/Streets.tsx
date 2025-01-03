import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStreets: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M3.5 20.5002L12 12.0002M20.5 3.50024L12 12.0002M20.5 20.5002L12 12.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0124 4.04858L13.0607 12.0003L21.0124 19.9519C22 18.4556 22 16.1343 22 12.0003C22 7.86626 22 5.54492 21.0124 4.04858Z" fill="currentColor" /><path d="M12 13.0609L4.04834 21.0126C5.54468 22.0003 7.86601 22.0003 12 22.0003C16.134 22.0003 18.4554 22.0003 19.9517 21.0126L12 13.0609Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.1342 2 18.4556 2.98767 19.9519L19.9517 2.98791C18.4553 2.00024 16.134 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.1342 2 18.4556 2.98767 19.9519L19.9517 2.98791C18.4553 2.00024 16.134 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471Z" fill="currentColor" /><path d="M21.0123 4.04857L13.0607 12.0002L21.0123 19.9519C22 18.4556 22 16.1342 22 12.0002C22 7.86625 22 5.54491 21.0123 4.04857Z" fill="currentColor" /><path d="M12 13.0609L4.04833 21.0126C5.54466 22.0002 7.866 22.0002 12 22.0002C16.134 22.0002 18.4553 22.0002 19.9517 21.0126L12 13.0609Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStreets as IconComponentType).keywords = [
  "streets",
  "alleys",
  "alleyways",
  "arteries",
  "avenues",
  "benches",
  "blocks",
  "corners",
  "crowds",
  "demonstrations"
];

export default IconStreets as IconComponentType;