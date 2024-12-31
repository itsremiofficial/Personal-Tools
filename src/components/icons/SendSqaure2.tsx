import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSendSqaure2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10.5898 7.68018H14.8298V11.9302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.8299 7.68018L9.16992 13.3402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M9.17156 14.0899C9.36156 14.0899 9.55155 14.0199 9.70155 13.8699L14.0816 9.48992V11.9199C14.0816 12.3299 14.4216 12.6699 14.8316 12.6699C15.2416 12.6699 15.5816 12.3299 15.5816 11.9199V7.67992C15.5816 7.57992 15.5616 7.48992 15.5216 7.38992C15.4416 7.20992 15.3016 7.05993 15.1116 6.97993C15.0216 6.93993 14.9216 6.91992 14.8216 6.91992H10.5816C10.1716 6.91992 9.83156 7.25992 9.83156 7.66992C9.83156 8.07992 10.1716 8.41992 10.5816 8.41992H13.0116L8.63156 12.7999C8.34156 13.0899 8.34156 13.5699 8.63156 13.8599C8.79156 14.0199 8.98156 14.0899 9.17156 14.0899Z" fill="currentColor" /><path d="M18.7107 16.28C18.5807 15.89 18.1607 15.68 17.7607 15.81C14.0407 17.05 9.95066 17.05 6.23066 15.81C5.84066 15.68 5.41067 15.89 5.28067 16.28C5.15067 16.67 5.36067 17.1 5.75067 17.23C7.76067 17.9 9.87067 18.24 11.9907 18.24C14.1107 18.24 16.2207 17.9 18.2307 17.23C18.6307 17.09 18.8407 16.67 18.7107 16.28Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSendSqaure2 as IconComponentType).keywords = [
  "send",
  "sqaure",
  "2",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit",
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

export default IconSendSqaure2 as IconComponentType;