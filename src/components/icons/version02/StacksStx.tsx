import { FC } from 'react';

const IconStacksStx: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M8.16992 10.5H17.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 6.5L12.4899 10.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4899 6.5L12.6699 10.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16992 13.5H17.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 17.5L12.4899 13.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4899 17.5L12.6699 13.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M8.16995 11.2501H17.17C17.58 11.2501 17.92 10.9101 17.92 10.5001C17.92 10.0901 17.58 9.75005 17.17 9.75005H14.12L16.11 6.93005C16.35 6.59005 16.27 6.12005 15.93 5.89005C15.59 5.65005 15.12 5.73005 14.89 6.07005L12.59 9.33005L10.2899 6.07005C10.0499 5.73005 9.57994 5.65005 9.24994 5.89005C8.90994 6.13005 8.82995 6.60005 9.06995 6.93005L11.06 9.75005H8.18994C7.77994 9.75005 7.43994 10.0901 7.43994 10.5001C7.43994 10.9101 7.75995 11.2501 8.16995 11.2501Z" fill="currentColor" /><path d="M17.1699 12.75H8.16992C7.75992 12.75 7.41992 13.09 7.41992 13.5C7.41992 13.91 7.75992 14.25 8.16992 14.25H11.0399L9.04993 17.07C8.80993 17.41 8.88992 17.88 9.22992 18.11C9.35992 18.2 9.50991 18.25 9.65991 18.25C9.89991 18.25 10.1299 18.14 10.2699 17.93L12.5699 14.67L14.8699 17.93C15.0199 18.14 15.2499 18.25 15.4799 18.25C15.6299 18.25 15.7799 18.21 15.9099 18.11C16.2499 17.87 16.3299 17.4 16.0899 17.07L14.0999 14.25H17.1499C17.5599 14.25 17.8999 13.91 17.8999 13.5C17.8999 13.09 17.5799 12.75 17.1699 12.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM17.1699 14.25H14.1199L16.1099 17.07C16.3499 17.41 16.2699 17.88 15.9299 18.11C15.7999 18.2 15.6499 18.25 15.4999 18.25C15.2599 18.25 15.0299 18.14 14.8899 17.93L12.5899 14.67L10.2899 17.93C10.1399 18.14 9.90993 18.25 9.67993 18.25C9.52993 18.25 9.37991 18.21 9.24991 18.11C8.90991 17.87 8.82992 17.4 9.06992 17.07L11.0599 14.25H8.18991C7.77991 14.25 7.43991 13.91 7.43991 13.5C7.43991 13.09 7.77991 12.75 8.18991 12.75H17.1899C17.5999 12.75 17.9399 13.09 17.9399 13.5C17.9399 13.91 17.5799 14.25 17.1699 14.25ZM17.1699 11.25H8.16992C7.75992 11.25 7.41992 10.91 7.41992 10.5C7.41992 10.09 7.75992 9.75 8.16992 9.75H11.0399L9.04993 6.92999C8.80993 6.58999 8.88992 6.12 9.22992 5.89C9.56992 5.65 10.0399 5.73001 10.2699 6.07001L12.5699 9.33L14.8699 6.07001C15.1099 5.73001 15.5799 5.65 15.9099 5.89C16.2499 6.13 16.3299 6.59999 16.0899 6.92999L14.0999 9.75H17.1499C17.5599 9.75 17.8999 10.09 17.8999 10.5C17.8999 10.91 17.5799 11.25 17.1699 11.25Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStacksStx as IconComponent).keywords = [
  "stacks",
  "stx",
  "piles",
  "heaps",
  "dozens",
  "tons",
  "oodles",
  "loads",
  "lashings",
  "lots",
  "gobs",
  "soh",
  "etx",
  "ttx",
  "started",
  "used",
  "acth",
  "albumin",
  "calmodulin",
  "cea"
];

export default IconStacksStx as IconComponent;