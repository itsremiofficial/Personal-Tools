import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRouteSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.3509 9.04979L15.0109 16.5898C14.4509 18.3798 11.9409 18.4098 11.3509 16.6298L10.651 14.5598C10.461 13.9898 10.0109 13.5298 9.44095 13.3498L7.36095 12.6498C5.59095 12.0598 5.62095 9.5298 7.41095 8.9898L14.951 6.63979C16.431 6.18979 17.8209 7.57979 17.3509 9.04979Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M17.3509 9.04979L15.0109 16.5898C14.4509 18.3798 11.9409 18.4098 11.3509 16.6298L10.651 14.5598C10.461 13.9898 10.0109 13.5298 9.44095 13.3498L7.36095 12.6498C5.59095 12.0598 5.62095 9.52979 7.41095 8.98979L14.951 6.63979C16.431 6.18979 17.8209 7.57979 17.3509 9.04979Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRouteSquare as IconComponentType).keywords = [
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

export default IconRouteSquare as IconComponentType;