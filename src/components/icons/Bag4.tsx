import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBag4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.79424 12.0296C4.33141 9.34377 4.59999 8.00085 5.48746 7.13592C5.65149 6.97606 5.82894 6.83059 6.01786 6.7011C7.04004 6.00049 8.40956 6.00049 11.1486 6.00049H12.8515C15.5906 6.00049 16.9601 6.00049 17.9823 6.7011C18.1712 6.83059 18.3486 6.97606 18.5127 7.13592C19.4001 8.00085 19.6687 9.34377 20.2059 12.0296C20.9771 15.8856 21.3627 17.8136 20.475 19.1798C20.3143 19.4272 20.1267 19.656 19.9157 19.8621C18.7501 21.0005 16.7839 21.0005 12.8515 21.0005H11.1486C7.21622 21.0005 5.25004 21.0005 4.08447 19.8621C3.87342 19.656 3.68582 19.4272 3.5251 19.1798C2.63744 17.8136 3.02304 15.8856 3.79424 12.0296Z" stroke="currentColor" strokeWidth={width} /><circle opacity={duotone ? "0.5" : "1"} cx="15" cy="9.00049" r="1" fill="currentColor" /><circle opacity={duotone ? "0.5" : "1"} cx="9" cy="9.00049" r="1" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M9 6.00049V5.00049C9 3.34363 10.3431 2.00049 12 2.00049C13.6569 2.00049 15 3.34363 15 5.00049V6.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4.03532 11.5738C4.4971 9.26489 4.72799 8.11044 5.55742 7.43046C6.38686 6.75049 7.56417 6.75049 9.9188 6.75049H14.0812C16.4358 6.75049 17.6131 6.75049 18.4425 7.43046C19.272 8.11044 19.5029 9.26489 19.9646 11.5738L20.5646 14.5738C21.2287 17.8942 21.5608 19.5544 20.6606 20.6525C19.7604 21.7505 18.0673 21.7505 14.6812 21.7505H9.3188C5.93263 21.7505 4.23954 21.7505 3.33936 20.6525C2.43919 19.5544 2.77123 17.8942 3.43532 14.5738L4.03532 11.5738Z" fill="currentColor" /><circle cx="15" cy="9.75049" r="1" fill="currentColor" /><circle cx="9" cy="9.75049" r="1" fill="currentColor" /><path d="M9.75 5.75049C9.75 4.50785 10.7574 3.50049 12 3.50049C13.2426 3.50049 14.25 4.50785 14.25 5.75049V6.75049H14.6812C15.058 6.75049 15.4139 6.75049 15.75 6.752L15.75 5.75049C15.75 3.67942 14.0711 2.00049 12 2.00049C9.92893 2.00049 8.25 3.67942 8.25 5.75049L8.25 6.752C8.58613 6.75049 8.94198 6.75049 9.3188 6.75049H9.75V5.75049Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.25012 7.01394C8.25004 7.00947 8.25 7.00498 8.25 7.00049V6.00049C8.25 3.92942 9.92893 2.25049 12 2.25049C14.0711 2.25049 15.75 3.92942 15.75 6.00049V7.00049C15.75 7.00498 15.75 7.00947 15.7499 7.01395C17.0472 7.05024 17.8375 7.18442 18.4425 7.68046C19.272 8.36044 19.5029 9.51489 19.9646 11.8238L20.5646 14.8238C21.2287 18.1442 21.5608 19.8044 20.6606 20.9025C19.7604 22.0005 18.0673 22.0005 14.6812 22.0005H9.3188C5.93262 22.0005 4.23954 22.0005 3.33936 20.9025C2.43919 19.8044 2.77123 18.1442 3.43532 14.8238L4.03532 11.8238C4.4971 9.51489 4.72799 8.36044 5.55742 7.68046C6.16251 7.18441 6.95273 7.05024 8.25012 7.01394ZM9.75 6.00049C9.75 4.75785 10.7574 3.75049 12 3.75049C13.2426 3.75049 14.25 4.75785 14.25 6.00049V7.00049C14.25 7.00048 14.25 7.00049 14.25 7.00049C14.1944 7.00048 14.1381 7.00049 14.0812 7.00049H9.9188C9.86185 7.00049 9.80559 7.00049 9.75 7.0005C9.75 7.00049 9.75 7.0005 9.75 7.0005V6.00049ZM15 11.0005C15.5523 11.0005 16 10.5528 16 10.0005C16 9.4482 15.5523 9.00049 15 9.00049C14.4477 9.00049 14 9.4482 14 10.0005C14 10.5528 14.4477 11.0005 15 11.0005ZM9.99998 10.0005C9.99998 10.5528 9.55226 11.0005 8.99998 11.0005C8.44769 11.0005 7.99998 10.5528 7.99998 10.0005C7.99998 9.4482 8.44769 9.00049 8.99998 9.00049C9.55226 9.00049 9.99998 9.4482 9.99998 10.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBag4 as IconComponentType).keywords = [
  "bag",
  "4",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "dh",
  "f4f"
];

export default IconBag4 as IconComponentType;