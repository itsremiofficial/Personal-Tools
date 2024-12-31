import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTagRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.21915 3.1001H15.6592C16.3392 3.1001 17.1892 3.5701 17.5492 4.1501L21.7292 10.8301C22.1292 11.4801 22.0892 12.5001 21.6292 13.1101L16.4492 20.0101C16.0792 20.5001 15.2792 20.9001 14.6692 20.9001H4.21915C2.46915 20.9001 1.4092 18.9801 2.3292 17.4901L5.09916 13.0601C5.46916 12.4701 5.46916 11.5101 5.09916 10.9201L2.3292 6.4901C1.4092 5.0201 2.47915 3.1001 4.21915 3.1001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.8794 6.12009L3.92936 20.0701C3.49936 20.5001 2.77936 20.4601 2.42936 19.9701C1.92936 19.2801 1.82937 18.3201 2.34937 17.4901L5.10937 13.0601C5.47937 12.4701 5.47937 11.5101 5.10937 10.9201L2.34937 6.49009C1.41937 5.01009 2.48936 3.09009 4.22936 3.09009H15.6794C16.3594 3.09009 17.1994 3.56009 17.5594 4.13009L18.0294 4.87009C18.2594 5.28009 18.2094 5.79009 17.8794 6.12009Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6299 13.11L16.4499 20.01C16.0899 20.5 15.2899 20.9 14.6699 20.9H7.50986C6.61986 20.9 6.16987 19.82 6.79987 19.19L18.3099 7.67999C18.7599 7.22999 19.5299 7.30999 19.8699 7.85999L21.7199 10.83C22.1299 11.47 22.0899 12.5 21.6299 13.11Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTagRight as IconComponentType).keywords = [
  "tag",
  "right",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune"
];

export default IconTagRight as IconComponentType;