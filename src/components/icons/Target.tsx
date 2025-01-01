import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTarget: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2 12L5 12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M19 12L22 12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 22L12 19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 5L12 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 12H10M12 12H14M12 12V14M12 12L12 10" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor" /><path d="M9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H11.25V10C11.25 9.58579 11.5858 9.25 12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H12.75V14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14V12.75H10C9.58579 12.75 9.25 12.4142 9.25 12Z" fill="currentColor" /><path d="M2.0277 12.75C2.00934 12.5024 2 12.2523 2 12C2 11.7477 2.00934 11.4976 2.0277 11.25H5C5.41421 11.25 5.75 11.5858 5.75 12C5.75 12.4142 5.41421 12.75 5 12.75H2.0277Z" fill="currentColor" /><path d="M12.75 21.9723C12.5024 21.9907 12.2523 22 12 22C11.7477 22 11.4976 21.9907 11.25 21.9723V19C11.25 18.5858 11.5858 18.25 12 18.25C12.4142 18.25 12.75 18.5858 12.75 19V21.9723Z" fill="currentColor" /><path d="M21.9723 11.25C21.9907 11.4976 22 11.7477 22 12C22 12.2523 21.9907 12.5024 21.9723 12.75H19C18.5858 12.75 18.25 12.4142 18.25 12C18.25 11.5858 18.5858 11.25 19 11.25H21.9723Z" fill="currentColor" /><path d="M12.75 2.0277V5C12.75 5.41421 12.4142 5.75 12 5.75C11.5858 5.75 11.25 5.41421 11.25 5V2.0277C11.4976 2.00934 11.7477 2 12 2C12.2523 2 12.5024 2.00934 12.75 2.0277Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.2479 2C6.30929 2.36618 2.36618 6.30929 2 11.2479H4.98056C5.39592 11.2479 5.73264 11.5846 5.73264 12C5.73264 12.4154 5.39592 12.7521 4.98056 12.7521H2C2.36618 17.6907 6.30929 21.6338 11.2479 22V19.0194C11.2479 18.6041 11.5846 18.2674 12 18.2674C12.4154 18.2674 12.7521 18.6041 12.7521 19.0194V22C17.6907 21.6338 21.6338 17.6907 22 12.7521H19.0194C18.6041 12.7521 18.2674 12.4154 18.2674 12C18.2674 11.5846 18.6041 11.2479 19.0194 11.2479H22C21.6338 6.30929 17.6907 2.36618 12.7521 2V4.98056C12.7521 5.39592 12.4154 5.73264 12 5.73264C11.5846 5.73264 11.2479 5.39592 11.2479 4.98056V2ZM9.24236 12C9.24236 11.5846 9.57908 11.2479 9.99444 11.2479H11.2479V9.99444C11.2479 9.57908 11.5846 9.24236 12 9.24236C12.4154 9.24236 12.7521 9.57908 12.7521 9.99444V11.2479H14.0056C14.4209 11.2479 14.7576 11.5846 14.7576 12C14.7576 12.4154 14.4209 12.7521 14.0056 12.7521H12.7521V14.0056C12.7521 14.4209 12.4154 14.7576 12 14.7576C11.5846 14.7576 11.2479 14.4209 11.2479 14.0056V12.7521H9.99444C9.57908 12.7521 9.24236 12.4154 9.24236 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTarget as IconComponentType).keywords = [
  "target",
  "aim",
  "place",
  "mark",
  "quarry",
  "prey",
  "butt",
  "point",
  "object",
  "objective"
];

export default IconTarget as IconComponentType;