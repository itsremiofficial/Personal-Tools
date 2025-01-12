import { FC } from 'react';

const IconRouteSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.0199 9.04979L15.6799 16.5898C15.1199 18.3798 12.6099 18.4098 12.0199 16.6298L11.3199 14.5598C11.1299 13.9898 10.6799 13.5298 10.1099 13.3498L8.0299 12.6498C6.2599 12.0598 6.28989 9.5298 8.07989 8.9898L15.6199 6.63979C17.0999 6.18979 18.4899 7.57979 18.0199 9.04979Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.48992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M18.0199 9.04979L15.6799 16.5898C15.1199 18.3798 12.6099 18.4098 12.0199 16.6298L11.3199 14.5598C11.1299 13.9898 10.6799 13.5298 10.1099 13.3498L8.0299 12.6498C6.2599 12.0598 6.28989 9.52979 8.07989 8.98979L15.6199 6.63979C17.0999 6.18979 18.4899 7.57979 18.0199 9.04979Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_65008)"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM18.0199 9.05L15.6799 16.59C15.1199 18.38 12.6099 18.41 12.0199 16.63L11.3199 14.56C11.1299 13.99 10.6799 13.53 10.1099 13.35L8.02992 12.65C6.26992 12.06 6.28992 9.53 8.07992 8.99L15.6199 6.64C17.0999 6.19 18.4899 7.58 18.0199 9.05Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRouteSquare as IconComponent).keywords = [
  "route",
  "square",
  "path",
  "road",
  "itinerary",
  "roadmap",
  "way",
  "thoroughfare",
  "travel",
  "tour",
  "trajectory",
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

export default IconRouteSquare as IconComponent;