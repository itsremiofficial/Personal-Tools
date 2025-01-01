import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMaximizeSquare3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M13 21.9994C17.0551 21.9921 19.1785 21.8926 20.5356 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5356 3.46447C19.0711 2 16.7141 2 12 2C7.28599 2 4.92896 2 3.4645 3.46447C2.10747 4.8215 2.00791 6.94493 2.00061 11" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 12L17 7M17 7H13.25M17 7V10.75" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2 18C2 16.1144 2 15.1716 2.58579 14.5858C3.17157 14 4.11438 14 6 14C7.88562 14 8.82843 14 9.41421 14.5858C10 15.1716 10 16.1144 10 18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.5 7C12.5 6.58579 12.8358 6.25 13.25 6.25H17C17.4142 6.25 17.75 6.58579 17.75 7V10.75C17.75 11.1642 17.4142 11.5 17 11.5C16.5858 11.5 16.25 11.1642 16.25 10.75V8.81066L12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303C11.1768 12.2374 11.1768 11.7626 11.4697 11.4697L15.1893 7.75H13.25C12.8358 7.75 12.5 7.41421 12.5 7Z" fill="currentColor" /><path d="M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 18C2 16.1144 2 15.1716 2.58579 14.5858C3.17157 14 4.11438 14 6 14C7.88562 14 8.82843 14 9.41421 14.5858C10 15.1716 10 16.1144 10 18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 12.3956 2 12.7746 2.00087 13.1378C2.50896 12.8047 3.06882 12.6588 3.6056 12.5866C4.25122 12.4998 5.04488 12.4999 5.91052 12.5H6.08951C6.95514 12.4999 7.74881 12.4998 8.39443 12.5866C9.10539 12.6822 9.85684 12.9071 10.4749 13.5251C11.0929 14.1432 11.3178 14.8946 11.4134 15.6056C11.5002 16.2512 11.5001 17.0449 11.5 17.9105V18.0895C11.5001 18.9552 11.5002 19.7488 11.4134 20.3944C11.3412 20.9312 11.1954 21.491 10.8622 21.9991C11.2255 22 11.6044 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM13.25 6.25C12.8358 6.25 12.5 6.58579 12.5 7C12.5 7.41421 12.8358 7.75 13.25 7.75H15.1893L11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L16.25 8.81066V10.75C16.25 11.1642 16.5858 11.5 17 11.5C17.4142 11.5 17.75 11.1642 17.75 10.75V7C17.75 6.58579 17.4142 6.25 17 6.25H13.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMaximizeSquare3 as IconComponentType).keywords = [
  "maximize",
  "square",
  "3",
  "max",
  "maximum",
  "maximal",
  "optimum",
  "broaden",
  "optimal",
  "maximisation",
  "maximise",
  "optimizing",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down"
];

export default IconMaximizeSquare3 as IconComponentType;