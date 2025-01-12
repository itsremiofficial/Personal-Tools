import { FC } from 'react';

const IconArrowSquareLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.9302 15.53L10.4102 12L13.9302 8.46997" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M13.9298 16.28C13.7398 16.28 13.5498 16.21 13.3998 16.06L9.86984 12.53C9.57984 12.24 9.57984 11.76 9.86984 11.47L13.3998 7.94003C13.6898 7.65003 14.1698 7.65003 14.4598 7.94003C14.7498 8.23003 14.7498 8.71003 14.4598 9.00003L11.4598 12L14.4598 15C14.7498 15.29 14.7498 15.77 14.4598 16.06C14.3198 16.21 14.1298 16.28 13.9298 16.28Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM14.4599 15C14.7499 15.29 14.7499 15.77 14.4599 16.06C14.3099 16.21 14.1199 16.28 13.9299 16.28C13.7399 16.28 13.5499 16.21 13.3999 16.06L9.86992 12.53C9.57992 12.24 9.57992 11.76 9.86992 11.47L13.3999 7.94C13.6899 7.65 14.1699 7.65 14.4599 7.94C14.7499 8.23 14.7499 8.71 14.4599 9L11.4599 12L14.4599 15Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowSquareLeft as IconComponent).keywords = [
  "arrow",
  "square",
  "left",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd"
];

export default IconArrowSquareLeft as IconComponent;