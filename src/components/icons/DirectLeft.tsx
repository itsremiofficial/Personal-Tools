import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.71 9.1698L16.3 3.0698C19.05 1.6198 22.04 4.5498 20.65 7.3298L19.03 10.5698C18.58 11.4698 18.58 12.5298 19.03 13.4298L20.65 16.6698C22.04 19.4498 19.05 22.3698 16.3 20.9298L4.71 14.8298C2.43 13.6298 2.43 10.3698 4.71 9.1698Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.2897 17.0198L19.5497 13.5398C19.0697 12.5698 19.0697 11.4398 19.5497 10.4698L21.2897 6.98983C22.7797 3.99983 19.5697 0.859829 16.6197 2.41983L15.0797 3.23983C14.8697 3.34983 14.6997 3.52983 14.5997 3.74983L8.89969 16.3898C8.66969 16.9098 8.87969 17.5198 9.37969 17.7798L16.6197 21.5898C19.5697 23.1498 22.7797 19.9998 21.2897 17.0198Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.68953 15.6L11.4195 7.31996C11.8395 6.38996 10.8395 5.44996 9.93953 5.92996L4.16953 8.95996C1.71953 10.25 1.71953 13.75 4.16953 15.04L6.20953 16.11C6.75953 16.4 7.42953 16.17 7.68953 15.6Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectLeft as IconComponentType).keywords = [
  "direct",
  "left",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
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

export default IconDirectLeft as IconComponentType;