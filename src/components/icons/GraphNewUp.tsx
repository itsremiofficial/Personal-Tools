import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGraphNewUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="19" cy="5" r="3" stroke="currentColor" strokeWidth={width} /><path d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="currentColor" /><path d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z" fill="currentColor" /><path d="M14.5 10.75C14.0858 10.75 13.75 10.4142 13.75 10C13.75 9.58579 14.0858 9.25 14.5 9.25H17C17.4142 9.25 17.75 9.58579 17.75 10V12.5C17.75 12.9142 17.4142 13.25 17 13.25C16.5858 13.25 16.25 12.9142 16.25 12.5V11.8107L14.2374 13.8232C13.554 14.5066 12.446 14.5066 11.7626 13.8232L10.1768 12.2374C10.0791 12.1398 9.92085 12.1398 9.82322 12.2374L7.53033 14.5303C7.23744 14.8232 6.76256 14.8232 6.46967 14.5303C6.17678 14.2374 6.17678 13.7626 6.46967 13.4697L8.76256 11.1768C9.44598 10.4934 10.554 10.4934 11.2374 11.1768L12.8232 12.7626C12.9209 12.8602 13.0791 12.8602 13.1768 12.7626L15.1893 10.75H14.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2C13.3988 2 14.59 2 15.612 2.03826C14.9196 2.82967 14.5 3.86584 14.5 5C14.5 7.48528 16.5147 9.5 19 9.5C20.1342 9.5 21.1703 9.08042 21.9617 8.38802C22 9.41 22 10.6012 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2ZM14.5 10.75C14.0858 10.75 13.75 10.4142 13.75 10C13.75 9.58579 14.0858 9.25 14.5 9.25H17C17.4142 9.25 17.75 9.58579 17.75 10V12.5C17.75 12.9142 17.4142 13.25 17 13.25C16.5858 13.25 16.25 12.9142 16.25 12.5V11.8107L14.2374 13.8232C13.554 14.5066 12.446 14.5066 11.7626 13.8232L10.1768 12.2374C10.0791 12.1398 9.92085 12.1398 9.82322 12.2374L7.53033 14.5303C7.23744 14.8232 6.76256 14.8232 6.46967 14.5303C6.17678 14.2374 6.17678 13.7626 6.46967 13.4697L8.76256 11.1768C9.44598 10.4934 10.554 10.4934 11.2374 11.1768L12.8232 12.7626C12.9209 12.8602 13.0791 12.8602 13.1768 12.7626L15.1893 10.75H14.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGraphNewUp as IconComponentType).keywords = [
  "graph",
  "new",
  "up",
  "graphical record",
  "diagram",
  "flowchart",
  "figure",
  "graphical",
  "chart",
  "map",
  "design",
  "graphically",
  "newfound",
  "fresh",
  "freshly",
  "newly",
  "brand-new",
  "recent",
  "novel",
  "recently",
  "newfangled",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconGraphNewUp as IconComponentType;