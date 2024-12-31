import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFilter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.40039 2.1001H18.6004C19.7004 2.1001 20.6004 3.0001 20.6004 4.1001V6.3001C20.6004 7.1001 20.1004 8.1001 19.6004 8.6001L15.3004 12.4001C14.7004 12.9001 14.3004 13.9001 14.3004 14.7001V19.0001C14.3004 19.6001 13.9004 20.4001 13.4004 20.7001L12.0004 21.6001C10.7004 22.4001 8.90039 21.5001 8.90039 19.9001V14.6001C8.90039 13.9001 8.50039 13.0001 8.10039 12.5001L4.30039 8.5001C3.80039 8.0001 3.40039 7.1001 3.40039 6.5001V4.2001C3.40039 3.0001 4.30039 2.1001 5.40039 2.1001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.93 2.1001L6 10.0001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5996 4.1001V6.3001C20.5996 7.1001 20.0996 8.1001 19.5996 8.6001L15.2996 12.4001C14.6996 12.9001 14.2996 13.9001 14.2996 14.7001V19.0001C14.2996 19.6001 13.8996 20.4001 13.3996 20.7001L11.9996 21.6001C10.6996 22.4001 8.89961 21.5001 8.89961 19.9001V14.6001C8.89961 13.9001 8.49961 13.0001 8.09961 12.5001L7.09961 11.4501L12.9196 2.1001H18.5996C19.6996 2.1001 20.5996 3.0001 20.5996 4.1001Z" fill="currentColor" /><path d="M11.3004 2.1001L6.12039 10.4101L4.30039 8.5001C3.80039 8.0001 3.40039 7.1001 3.40039 6.5001V4.2001C3.40039 3.0001 4.30039 2.1001 5.40039 2.1001H11.3004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilter as IconComponentType).keywords = [
  "filter",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out"
];

export default IconFilter as IconComponentType;