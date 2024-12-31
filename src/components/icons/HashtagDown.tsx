import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHashtagDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19 16V22L21 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 22L17 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><g opacity={duotone ? "0.4" : "1"}><path d="M9.95039 6.25977L8.90039 15.7298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1105 6.25977L12.0605 15.7298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5293 9.41992H15.9993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 12.5801H15.47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.19 19.31C21.07 19.43 20.91 19.49 20.75 19.49C20.59 19.49 20.43 19.43 20.31 19.31L20.13 19.13V21.37C20.13 21.72 19.85 22 19.5 22C19.15 22 18.87 21.72 18.87 21.37V19.13L18.69 19.31C18.45 19.55 18.05 19.55 17.81 19.31C17.57 19.07 17.57 18.67 17.81 18.43L19.06 17.18C19.11 17.13 19.18 17.09 19.25 17.06C19.27 17.05 19.29 17.05 19.31 17.04C19.36 17.02 19.41 17.01 19.47 17.01C19.49 17.01 19.51 17.01 19.53 17.01C19.6 17.01 19.66 17.02 19.73 17.05C19.74 17.05 19.74 17.05 19.75 17.05C19.82 17.08 19.88 17.12 19.93 17.17C19.94 17.18 19.94 17.18 19.95 17.18L21.2 18.43C21.44 18.67 21.44 19.07 21.19 19.31Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16 20.97V18.03C16 16.76 16.76 16 18.03 16H20.97C21.37 16 21.71 16.08 22 16.22C22 16.21 22 16.2 22 16.18V7.81C22 4.17 19.83 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C16.19 22 16.2 22 16.22 22C16.08 21.71 16 21.37 16 20.97Z" fill="currentColor" /><path d="M16 10.1701C16.41 10.1701 16.75 9.8301 16.75 9.4201C16.75 9.0101 16.41 8.6701 16 8.6701H13.59L13.85 6.3501C13.9 5.9401 13.6 5.5701 13.19 5.5201C12.78 5.4801 12.41 5.7701 12.36 6.1801L12.08 8.6701H10.43L10.69 6.3501C10.74 5.9401 10.44 5.5701 10.03 5.5201C9.62 5.4701 9.25 5.7701 9.2 6.1801L8.92 8.6701H6.52C6.11 8.6701 5.77 9.0101 5.77 9.4201C5.77 9.8301 6.11 10.1701 6.52 10.1701H8.75L8.57 11.8301H6C5.59 11.8301 5.25 12.1701 5.25 12.5801C5.25 12.9901 5.59 13.3301 6 13.3301H8.41L8.15 15.6501C8.1 16.0601 8.4 16.4301 8.81 16.4801C8.84 16.4801 8.87 16.4801 8.89 16.4801C9.27 16.4801 9.59 16.2001 9.63 15.8101L9.91 13.3201H11.56L11.3 15.6401C11.25 16.0501 11.55 16.4201 11.96 16.4701C11.99 16.4701 12.02 16.4701 12.04 16.4701C12.42 16.4701 12.74 16.1901 12.78 15.8001L13.06 13.3101H15.46C15.87 13.3101 16.21 12.9701 16.21 12.5601C16.21 12.1501 15.87 11.8101 15.46 11.8101H13.23L13.41 10.1501H16V10.1701ZM11.73 11.8301H10.08L10.26 10.1701H11.91L11.73 11.8301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHashtagDown as IconComponentType).keywords = [
  "hashtag",
  "down",
  "slashtag",
  "bashtag",
  "hashtagger",
  "hashflag",
  "tag cloud",
  "tweet",
  "label cloud",
  "entity tag",
  "fragment",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconHashtagDown as IconComponentType;