import { FC } from 'react';

const IconFireSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z" stroke="currentColor" strokeWidth={width} /><path d="M17 12.667C17 16.9337 13.4444 18.0004 11.6667 18.0004C10.1111 18.0004 7 16.9337 7 12.667C7 10.8113 8.06292 9.63312 8.95593 9.04012C9.36421 8.76901 9.87201 8.94229 9.89841 9.43168C9.95616 10.5025 10.7814 11.3626 11.4205 10.5015C12.0054 9.71335 12.2941 8.64309 12.2941 8.00038C12.2941 7.0536 13.2525 6.45196 14.0008 7.03203C15.4593 8.16267 17 10.0562 17 12.667Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 20.5359C4.92893 22.0004 7.28595 22.0004 12 22.0004C16.714 22.0004 19.0711 22.0004 20.5355 20.5359C22 19.0714 22 16.7144 22 12.0004C22 7.28632 22 4.9293 20.5355 3.46483C19.0711 2.00037 16.714 2.00037 12 2.00037C7.28595 2.00037 4.92893 2.00037 3.46447 3.46483C2 4.9293 2 7.28632 2 12.0004C2 16.7144 2 19.0714 3.46447 20.5359Z" fill="currentColor" /><path d="M17 12.667C17 16.9337 13.4444 18.0003 11.6667 18.0003C10.1111 18.0003 7 16.9337 7 12.667C7 10.8112 8.06292 9.63306 8.95593 9.04006C9.36421 8.76894 9.87201 8.94223 9.89841 9.43161C9.95616 10.5024 10.7814 11.3625 11.4205 10.5014C12.0054 9.71329 12.2941 8.64303 12.2941 8.00032C12.2941 7.05354 13.2525 6.4519 14.0008 7.03197C15.4593 8.16261 17 10.0562 17 12.667Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46483C2 4.9293 2 7.28632 2 12.0004C2 16.7144 2 19.0714 3.46447 20.5359C4.92893 22.0004 7.28595 22.0004 12 22.0004C16.714 22.0004 19.0711 22.0004 20.5355 20.5359C22 19.0714 22 16.7144 22 12.0004C22 7.28632 22 4.9293 20.5355 3.46483C19.0711 2.00037 16.714 2.00037 12 2.00037C7.28595 2.00037 4.92893 2.00037 3.46447 3.46483ZM17 12.667C17 16.9337 13.4444 18.0004 11.6667 18.0004C10.1111 18.0004 7 16.9337 7 12.667C7 10.8113 8.06292 9.63311 8.95593 9.04011C9.36421 8.76899 9.87201 8.94228 9.89841 9.43166C9.95616 10.5025 10.7814 11.3626 11.4205 10.5015C12.0054 9.71334 12.2941 8.64308 12.2941 8.00037C12.2941 7.05359 13.2525 6.45195 14.0008 7.03202C15.4593 8.16266 17 10.0562 17 12.667Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFireSquare as IconComponent).keywords = [
  "fire",
  "square",
  "fuel",
  "flame",
  "blast",
  "flaming",
  "burn down",
  "burn",
  "kindle",
  "enkindle",
  "sack",
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

export default IconFireSquare as IconComponent;