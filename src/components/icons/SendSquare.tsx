import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSendSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9 9.50977L12 6.50977L15 9.50977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 6.50977V14.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.4697 5.97968C11.7626 5.68679 12.2374 5.68679 12.5303 5.97968L15.5303 8.97968C15.8232 9.27257 15.8232 9.74745 15.5303 10.0403C15.2374 10.3332 14.7626 10.3332 14.4697 10.0403L12 7.57067L9.53033 10.0403C9.23744 10.3332 8.76256 10.3332 8.46967 10.0403C8.17678 9.74745 8.17678 9.27257 8.46967 8.97968L11.4697 5.97968Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 5.76001C12.4142 5.76001 12.75 6.0958 12.75 6.51001V14.51C12.75 14.9242 12.4142 15.26 12 15.26C11.5858 15.26 11.25 14.9242 11.25 14.51V6.51001C11.25 6.0958 11.5858 5.76001 12 5.76001Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.28887 16.2722C5.42016 15.8794 5.84507 15.6674 6.23792 15.7986C9.97364 17.0471 14.0268 17.0471 17.7625 15.7986C18.1553 15.6674 18.5802 15.8794 18.7115 16.2722C18.8428 16.6651 18.6308 17.09 18.2379 17.2213C14.1936 18.5729 9.80677 18.5729 5.76248 17.2213C5.36963 17.09 5.15759 16.6651 5.28887 16.2722Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSendSquare as IconComponentType).keywords = [
  "send",
  "square",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconSendSquare as IconComponentType;