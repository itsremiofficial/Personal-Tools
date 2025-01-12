import { FC } from 'react';

const IconHierarchySquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.1198 14.4V8.5C17.1198 7.95 16.6698 7.5 16.1198 7.5H13.2197" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.7199 6L12.9199 7.5L14.7199 9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.21973 10.2V14.3999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.36993 9.89999C9.44689 9.89999 10.3199 9.02697 10.3199 7.95001C10.3199 6.87306 9.44689 6 8.36993 6C7.29298 6 6.41992 6.87306 6.41992 7.95001C6.41992 9.02697 7.29298 9.89999 8.36993 9.89999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.21991 17.9999C9.21402 17.9999 10.0199 17.194 10.0199 16.1999C10.0199 15.2058 9.21402 14.3999 8.21991 14.3999C7.2258 14.3999 6.41992 15.2058 6.41992 16.1999C6.41992 17.194 7.2258 17.9999 8.21991 17.9999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1198 17.9999C18.1139 17.9999 18.9198 17.194 18.9198 16.1999C18.9198 15.2058 18.1139 14.3999 17.1198 14.3999C16.1257 14.3999 15.3198 15.2058 15.3198 16.1999C15.3198 17.194 16.1257 17.9999 17.1198 17.9999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48993C4.84993 2 2.67993 4.17 2.67993 7.81V16.18C2.67993 19.82 4.84993 21.99 8.48993 21.99H16.8599C20.4999 21.99 22.6699 19.82 22.6699 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M9.22003 14.55V10.26C10.06 9.95001 10.67 9.15001 10.67 8.20001C10.67 6.99001 9.68003 6 8.47003 6C7.26003 6 6.27002 6.99001 6.27002 8.20001C6.27002 9.15001 6.88003 9.95001 7.72003 10.26V14.55C6.96003 14.85 6.42004 15.59 6.42004 16.45C6.42004 17.58 7.34003 18.5 8.47003 18.5C9.60003 18.5 10.52 17.58 10.52 16.45C10.52 15.59 9.98003 14.85 9.22003 14.55Z" fill="currentColor" /><path d="M18.17 14.5499V8.74993C18.17 7.78993 17.38 6.99993 16.42 6.99993H15.29L15.5 6.82991C15.82 6.55991 15.86 6.08992 15.6 5.76992C15.33 5.44992 14.86 5.40994 14.54 5.66994L12.74 7.16994C12.57 7.30994 12.47 7.51993 12.47 7.74993C12.47 7.97993 12.57 8.17991 12.74 8.32991L14.54 9.82991C14.68 9.94991 14.85 9.99993 15.02 9.99993C15.23 9.99993 15.45 9.90994 15.6 9.72994C15.87 9.40994 15.82 8.93994 15.5 8.66994L15.29 8.49993H16.42C16.56 8.49993 16.67 8.60993 16.67 8.74993V14.5499C15.91 14.8499 15.37 15.5899 15.37 16.4499C15.37 17.5799 16.29 18.4999 17.42 18.4999C18.55 18.4999 19.47 17.5799 19.47 16.4499C19.47 15.5899 18.93 14.8499 18.17 14.5499Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM10.5199 16.45C10.5199 17.58 9.59992 18.5 8.46992 18.5C7.33992 18.5 6.41992 17.58 6.41992 16.45C6.41992 15.58 6.95992 14.85 7.71992 14.55V10.26C6.87992 9.95 6.26992 9.15 6.26992 8.2C6.26992 6.99 7.25992 6 8.46992 6C9.67992 6 10.6699 6.99 10.6699 8.2C10.6699 9.15 10.0599 9.95 9.21992 10.26V14.55C9.97992 14.85 10.5199 15.59 10.5199 16.45ZM17.4199 18.5C16.2899 18.5 15.3699 17.58 15.3699 16.45C15.3699 15.58 15.9099 14.85 16.6699 14.55V8.75C16.6699 8.61 16.5599 8.5 16.4199 8.5H15.2899L15.4999 8.67C15.8199 8.94 15.8599 9.41 15.5999 9.73C15.4499 9.91 15.2299 10 15.0199 10C14.8499 10 14.6799 9.94 14.5399 9.83L12.7399 8.33C12.5699 8.18 12.4699 7.97 12.4699 7.75C12.4699 7.53 12.5699 7.32 12.7399 7.17L14.5399 5.67C14.8599 5.41 15.3299 5.45 15.5999 5.77C15.8699 6.09 15.8199 6.56 15.4999 6.83L15.2899 7H16.4199C17.3799 7 18.1699 7.79 18.1699 8.75V14.55C18.9299 14.85 19.4699 15.59 19.4699 16.45C19.4699 17.58 18.5499 18.5 17.4199 18.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHierarchySquare as IconComponent).keywords = [
  "hierarchy",
  "square",
  "power structure",
  "pecking order",
  "hierarchical",
  "seniority",
  "class",
  "leadership",
  "high-ranking",
  "affiliated",
  "authority",
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

export default IconHierarchySquare as IconComponent;