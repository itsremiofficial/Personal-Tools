import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGalleryFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.1197 5.1099C15.7897 4.0699 16.1797 2.7799 17.2597 2.4299C17.8297 2.2499 18.5397 2.3999 18.9397 2.9499C19.3197 2.3799 20.0497 2.2399 20.6197 2.4299C21.7097 2.7799 22.0997 4.0699 21.7697 5.1099C21.2497 6.7499 19.4497 7.6099 18.9497 7.6099C18.4397 7.6099 16.6497 6.7699 16.1197 5.1099Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.0005 13.9001V16.1901C22.0005 19.8301 19.8305 22.0001 16.1905 22.0001H7.81055C5.26055 22.0001 3.42055 20.9301 2.56055 19.0301L2.67055 18.9501L7.59055 15.6501C8.39055 15.1101 9.52055 15.1701 10.2305 15.7901L10.5705 16.0701C11.3505 16.7401 12.6105 16.7401 13.3905 16.0701L17.5505 12.5001C18.3305 11.8301 19.5905 11.8301 20.3705 12.5001L22.0005 13.9001Z" fill="currentColor" /><path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.61 4.68C21.24 5.86 19.95 6.5 19.5 6.5C19.05 6.5 17.77 5.88 17.39 4.68C17.33 4.5 17.3 4.3 17.3 4.11C17.3 3.46 17.63 2.79 18.32 2.57C18.73 2.44 19.17 2.51 19.48 2.77C19.8 2.52 20.24 2.44 20.66 2.57C21.58 2.86 21.87 3.89 21.61 4.68Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 2.63 16.08 2.29 16.22 2C16.21 2 16.2 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03L2.67 18.95L7.59 15.65C8.39 15.11 9.52 15.17 10.23 15.79L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9V7.81C22 7.8 22 7.79 22 7.78C21.71 7.92 21.37 8 20.97 8Z" fill="currentColor" /><path d="M8.99914 10.3801C10.3136 10.3801 11.3791 9.31456 11.3791 8.00012C11.3791 6.68568 10.3136 5.62012 8.99914 5.62012C7.6847 5.62012 6.61914 6.68568 6.61914 8.00012C6.61914 9.31456 7.6847 10.3801 8.99914 10.3801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGalleryFavorite as IconComponentType).keywords = [
  "gallery",
  "favorite",
  "art gallery",
  "heading",
  "verandah",
  "veranda",
  "drift",
  "picture gallery",
  "museum",
  "beaux-arts",
  "art",
  "favored",
  "favourite",
  "preferred",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner"
];

export default IconGalleryFavorite as IconComponentType;