import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGalleryImport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18 2V8L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 8L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.0005 13.9001V16.1901C22.0005 19.8301 19.8305 22.0001 16.1905 22.0001H7.81055C5.26055 22.0001 3.42055 20.9301 2.56055 19.0301L2.67055 18.9501L7.59055 15.6501C8.39055 15.1101 9.52055 15.1701 10.2305 15.7901L10.5705 16.0701C11.3505 16.7401 12.6105 16.7401 13.3905 16.0701L17.5505 12.5001C18.3305 11.8301 19.5905 11.8301 20.3705 12.5001L22.0005 13.9001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 2.63 16.08 2.29 16.22 2C16.21 2 16.2 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03L2.67 18.95L7.59 15.65C8.39 15.11 9.52 15.17 10.23 15.79L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9V7.81C22 7.8 22 7.79 22 7.78C21.71 7.92 21.37 8 20.97 8Z" fill="currentColor" /><path d="M8.99914 10.3801C10.3136 10.3801 11.3791 9.31456 11.3791 8.00012C11.3791 6.68568 10.3136 5.62012 8.99914 5.62012C7.6847 5.62012 6.61914 6.68568 6.61914 8.00012C6.61914 9.31456 7.6847 10.3801 8.99914 10.3801Z" fill="currentColor" /><path d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1H20.97C22.24 1 23 1.76 23 3.03V5.97C23 7.24 22.24 8 20.97 8ZM21.19 4.69C21.07 4.57 20.91 4.51 20.75 4.51C20.59 4.51 20.43 4.57 20.31 4.69L20.13 4.87V2.63C20.13 2.28 19.85 2 19.5 2C19.15 2 18.87 2.28 18.87 2.63V4.87L18.69 4.69C18.45 4.45 18.05 4.45 17.81 4.69C17.57 4.93 17.57 5.33 17.81 5.57L19.06 6.82C19.11 6.87 19.18 6.91 19.25 6.94C19.27 6.95 19.29 6.95 19.31 6.96C19.36 6.98 19.41 6.99 19.47 6.99C19.49 6.99 19.51 6.99 19.53 6.99C19.6 6.99 19.66 6.98 19.73 6.95C19.74 6.95 19.74 6.95 19.75 6.95C19.82 6.92 19.88 6.88 19.93 6.83C19.94 6.82 19.94 6.82 19.95 6.82L21.2 5.57C21.44 5.33 21.44 4.93 21.19 4.69Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGalleryImport as IconComponentType).keywords = [
  "gallery",
  "import",
  "art gallery",
  "heading",
  "verandah",
  "veranda",
  "drift",
  "picture gallery",
  "museum",
  "beaux-arts",
  "art",
  "consequence",
  "signification",
  "significance",
  "implication",
  "meaning",
  "moment",
  "spell",
  "export",
  "exportation"
];

export default IconGalleryImport as IconComponentType;