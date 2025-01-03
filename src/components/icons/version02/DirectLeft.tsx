import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDirectLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.37992 9.1698L16.9699 3.0698C19.7199 1.6198 22.7099 4.5498 21.3199 7.3298L19.6999 10.5698C19.2499 11.4698 19.2499 12.5298 19.6999 13.4298L21.3199 16.6698C22.7099 19.4498 19.7199 22.3698 16.9699 20.9298L5.37992 14.8298C3.09992 13.6298 3.09992 10.3698 5.37992 9.1698Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9596 17.0198L20.2196 13.5398C19.7396 12.5698 19.7396 11.4398 20.2196 10.4698L21.9596 6.98983C23.4496 3.99983 20.2396 0.859829 17.2896 2.41983L15.7496 3.23983C15.5396 3.34983 15.3696 3.52983 15.2696 3.74983L9.56961 16.3898C9.33961 16.9098 9.54961 17.5198 10.0496 17.7798L17.2896 21.5898C20.2396 23.1498 23.4496 19.9998 21.9596 17.0198Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.35945 15.6L12.0895 7.31996C12.5095 6.38996 11.5095 5.44996 10.6095 5.92996L4.83945 8.95996C2.38945 10.25 2.38945 13.75 4.83945 15.04L6.87945 16.11C7.42945 16.4 8.09945 16.17 8.35945 15.6Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64934)"><path d="M21.9596 17.0198L20.2196 13.5398C19.7396 12.5698 19.7396 11.4398 20.2196 10.4698L21.9596 6.98983C23.4496 3.99983 20.2396 0.859829 17.2896 2.41983L15.7496 3.23983C15.5396 3.34983 15.3696 3.52983 15.2696 3.74983L9.56961 16.3898C9.33961 16.9098 9.54961 17.5198 10.0496 17.7798L17.2896 21.5898C20.2396 23.1498 23.4496 19.9998 21.9596 17.0198Z" fill="currentColor" /><path d="M8.35945 15.6L12.0895 7.31996C12.5095 6.38996 11.5095 5.44996 10.6095 5.92996L4.83945 8.95996C2.38945 10.25 2.38945 13.75 4.83945 15.04L6.87945 16.11C7.42945 16.4 8.09945 16.17 8.35945 15.6Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
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