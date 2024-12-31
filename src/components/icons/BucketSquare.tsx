import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBucketSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M8.93931 16.9304L6.1093 14.1003C5.1693 13.1603 5.1693 12.2103 6.1093 11.2703L10.8293 6.55029L16.0193 11.7403C16.2793 12.0003 16.2793 12.4204 16.0193 12.6804L11.7693 16.9304C10.8293 17.8704 9.87931 17.8704 8.93931 16.9304Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.87891 5.6001L10.8289 6.5401" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.43945 12.6399L16.1295 12.1699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.3002 14.8101C17.3002 14.8101 15.9902 16.23 15.9902 17.1C15.9902 17.82 16.5802 18.41 17.3002 18.41C18.0202 18.41 18.6102 17.82 18.6102 17.1C18.6002 16.23 17.3002 14.8101 17.3002 14.8101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M15.6595 11.93C15.6495 11.79 15.5895 11.64 15.4895 11.54L10.7895 6.84001L10.2395 6.28996C10.0495 6.09996 9.74948 6.09996 9.55948 6.28996C9.36948 6.47996 9.36948 6.77995 9.55948 6.96995L10.1095 7.52L6.5095 11.12C6.0995 11.53 5.87948 11.95 5.86948 12.36C5.85948 12.8 6.0695 13.24 6.5095 13.69L9.07947 16.26C9.93947 17.11 10.7995 17.11 11.6495 16.26L15.4995 12.41C15.6095 12.27 15.6695 12.09 15.6595 11.93Z" fill="currentColor" /><path d="M16.9589 14.1902C16.7989 14.0102 16.4889 14.0102 16.3189 14.1902C16.1189 14.4002 15.1289 15.5202 15.1289 16.3602C15.1289 17.1902 15.7989 17.8602 16.6289 17.8602C17.4589 17.8602 18.1289 17.1902 18.1289 16.3602C18.1389 15.5202 17.1589 14.4102 16.9589 14.1902Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBucketSquare as IconComponentType).keywords = [
  "bucket",
  "square",
  "pail",
  "bucketful",
  "tub",
  "basin",
  "boiler",
  "spade",
  "basket",
  "trough",
  "shovel",
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

export default IconBucketSquare as IconComponentType;