import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3909 5.21L16.8009 8.02999C16.9909 8.41999 17.5009 8.78999 17.9309 8.86999L20.4809 9.28999C22.1109 9.55999 22.4909 10.74 21.3209 11.92L19.3309 13.91C19.0009 14.24 18.8109 14.89 18.9209 15.36L19.4909 17.82C19.9409 19.76 18.9009 20.52 17.1909 19.5L14.8009 18.08C14.3709 17.82 13.6509 17.82 13.2209 18.08L10.8309 19.5C9.12091 20.51 8.08093 19.76 8.53093 17.82L9.10093 15.36C9.21093 14.9 9.02093 14.25 8.69093 13.91L6.70094 11.92C5.53094 10.75 5.91094 9.56999 7.54094 9.28999L10.0909 8.86999C10.5209 8.79999 11.0309 8.41999 11.2209 8.02999L12.6309 5.21C13.3809 3.68 14.6209 3.68 15.3909 5.21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 19H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.3909 5.21L16.8009 8.03C16.9909 8.42 17.5009 8.79 17.9309 8.87L20.4809 9.29C22.1109 9.56 22.4909 10.74 21.3209 11.92L19.3309 13.91C19.0009 14.24 18.8109 14.89 18.9209 15.36L19.4909 17.82C19.9409 19.76 18.9009 20.52 17.1909 19.5L14.8009 18.08C14.3709 17.82 13.6509 17.82 13.2209 18.08L10.8309 19.5C9.12091 20.51 8.08093 19.76 8.53093 17.82L9.10093 15.36C9.21093 14.9 9.02093 14.25 8.69093 13.91L6.70094 11.92C5.53094 10.75 5.91094 9.57 7.54094 9.29L10.0909 8.87C10.5209 8.8 11.0309 8.42 11.2209 8.03L12.6309 5.21C13.3809 3.68 14.6209 3.68 15.3909 5.21Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStar as IconComponentType).keywords = [
  "star",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner"
];

export default IconStar as IconComponentType;