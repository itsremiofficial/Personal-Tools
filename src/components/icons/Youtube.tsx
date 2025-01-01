import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconYoutube: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.4196 9.49009L13.8896 10.9701C14.8296 11.5401 14.8296 12.4601 13.8896 13.0301L11.4196 14.5101C10.4196 15.1101 9.59961 14.6501 9.59961 13.4801V10.5101C9.59961 9.35011 10.4196 8.89009 11.4196 9.49009Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z" fill="currentColor" /><path d="M11.4196 9.49009L13.8896 10.9701C14.8296 11.5401 14.8296 12.4601 13.8896 13.0301L11.4196 14.5101C10.4196 15.1101 9.59961 14.6501 9.59961 13.4801V10.5101C9.59961 9.3501 10.4196 8.89009 11.4196 9.49009Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconYoutube as IconComponentType).keywords = [
  "youtube",
  "videos",
  "video",
  "vids",
  "facebook",
  "google",
  "vid.",
  "vlog",
  "clips",
  "myspace"
];

export default IconYoutube as IconComponentType;