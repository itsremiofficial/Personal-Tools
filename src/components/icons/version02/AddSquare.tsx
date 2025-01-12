import { FC } from 'react';

const IconAddSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M8.66992 12H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 16V8" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M16.6699 11.25H13.4199V8C13.4199 7.59 13.0799 7.25 12.6699 7.25C12.2599 7.25 11.9199 7.59 11.9199 8V11.25H8.66992C8.25992 11.25 7.91992 11.59 7.91992 12C7.91992 12.41 8.25992 12.75 8.66992 12.75H11.9199V16C11.9199 16.41 12.2599 16.75 12.6699 16.75C13.0799 16.75 13.4199 16.41 13.4199 16V12.75H16.6699C17.0799 12.75 17.4199 12.41 17.4199 12C17.4199 11.59 17.0799 11.25 16.6699 11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM16.6699 12.75H13.4199V16C13.4199 16.41 13.0799 16.75 12.6699 16.75C12.2599 16.75 11.9199 16.41 11.9199 16V12.75H8.66992C8.25992 12.75 7.91992 12.41 7.91992 12C7.91992 11.59 8.25992 11.25 8.66992 11.25H11.9199V8C11.9199 7.59 12.2599 7.25 12.6699 7.25C13.0799 7.25 13.4199 7.59 13.4199 8V11.25H16.6699C17.0799 11.25 17.4199 11.59 17.4199 12C17.4199 12.41 17.0799 12.75 16.6699 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAddSquare as IconComponent).keywords = [
  "add",
  "square",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
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

export default IconAddSquare as IconComponent;