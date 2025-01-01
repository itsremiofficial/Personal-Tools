import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCosmetic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16.5 20V16M16.5 20H19.5M16.5 20H13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2 11V10.25C1.58579 10.25 1.25 10.5858 1.25 11H2ZM8 11H8.75C8.75 10.5858 8.41421 10.25 8 10.25V11ZM2 11.75H8V10.25H2V11.75ZM7.25 11V17H8.75V11H7.25ZM2.75 17V11H1.25V17H2.75ZM5 19.25C3.75736 19.25 2.75 18.2426 2.75 17H1.25C1.25 19.0711 2.92893 20.75 5 20.75V19.25ZM7.25 17C7.25 18.2426 6.24264 19.25 5 19.25V20.75C7.07107 20.75 8.75 19.0711 8.75 17H7.25Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M3 11H7V5.61799C7 4.87461 6.21769 4.39111 5.55279 4.72356L3.55279 5.72356C3.214 5.89295 3 6.23922 3 6.61799V11Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 11.5C2 11.2239 2.22386 11 2.5 11H7.5C7.77614 11 8 11.2239 8 11.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V11.5Z" fill="currentColor" /><path d="M3 11H7V5.99983C7 5.25644 6.21769 4.77295 5.55279 5.1054L3.55279 6.1054C3.214 6.27479 3 6.62105 3 6.99983V11Z" fill="currentColor" /><path d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M15.75 15.9492V19.5001H13.5C13.0858 19.5001 12.75 19.8359 12.75 20.2501C12.75 20.6643 13.0858 21.0001 13.5 21.0001H19.5C19.9142 21.0001 20.25 20.6643 20.25 20.2501C20.25 19.8359 19.9142 19.5001 19.5 19.5001H17.25V15.9492C17.0048 15.9827 16.7544 15.9999 16.5 15.9999C16.2456 15.9999 15.9952 15.9827 15.75 15.9492Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.5C2 12.2239 2.22386 12 2.5 12H7.5C7.77614 12 8 12.2239 8 12.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V12.5Z" fill="currentColor" /><path d="M3 10.5H7V5.99983C7 5.25644 6.21769 4.77295 5.55279 5.1054L3.55279 6.1054C3.214 6.27479 3 6.62105 3 6.99983V10.5Z" fill="currentColor" /><path d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z" fill="currentColor" /><path d="M15.75 17.7103C15.9964 17.7365 16.2466 17.75 16.5 17.75C16.7534 17.75 17.0036 17.7365 17.25 17.7103V19.5H19.5C19.9142 19.5 20.25 19.8358 20.25 20.25C20.25 20.6642 19.9142 21 19.5 21H13.5C13.0858 21 12.75 20.6642 12.75 20.25C12.75 19.8358 13.0858 19.5 13.5 19.5H15.75V17.7103Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCosmetic as IconComponentType).keywords = [
  "cosmetic",
  "decorative",
  "ornamental",
  "esthetic",
  "esthetical",
  "aesthetical",
  "aesthetic",
  "enhancive",
  "nonfunctional",
  "makeup"
];

export default IconCosmetic as IconComponentType;