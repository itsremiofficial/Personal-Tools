import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGame: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.56953 12.46L6.51953 15.51" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5498 12.4902L9.5998 15.5402" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M13.5303 14H13.5403" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.4697 14H17.4797" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 15.98V15.96" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 12.04V12.02" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.0105 2L13.0005 3.01C12.9905 3.56 12.5505 4 12.0005 4H11.9705C11.4205 4 10.9805 4.45 10.9805 5C10.9805 5.55 11.4305 6 11.9805 6H12.9805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.1309 15.0099L9.10094 13.9799L10.0909 12.9899C10.3809 12.6999 10.3809 12.2199 10.0909 11.9299C9.80094 11.6399 9.32094 11.6399 9.03094 11.9299L8.04094 12.9199L7.08094 11.9599C6.79094 11.6699 6.31094 11.6699 6.02094 11.9599C5.73094 12.2499 5.73094 12.7299 6.02094 13.0199L6.98094 13.9799L5.99094 14.9699C5.70094 15.2599 5.70094 15.7399 5.99094 16.0299C6.14094 16.1799 6.33094 16.2499 6.52094 16.2499C6.71094 16.2499 6.90094 16.1799 7.05094 16.0299L8.04094 15.0399L9.07094 16.0699C9.22094 16.2199 9.41094 16.2899 9.60094 16.2899C9.79094 16.2899 9.98094 16.2199 10.1309 16.0699C10.4209 15.7799 10.4209 15.2999 10.1309 15.0099Z" fill="currentColor" /><path d="M13.5393 15C12.9893 15 12.5293 14.55 12.5293 14C12.5293 13.45 12.9693 13 13.5193 13H13.5393C14.0893 13 14.5393 13.45 14.5393 14C14.5393 14.55 14.0993 15 13.5393 15Z" fill="currentColor" /><path d="M17.4807 15C16.9307 15 16.4707 14.55 16.4707 14C16.4707 13.45 16.9107 13 17.4607 13H17.4807C18.0307 13 18.4807 13.45 18.4807 14C18.4807 14.55 18.0407 15 17.4807 15Z" fill="currentColor" /><path d="M15.5 16.97C14.95 16.97 14.5 16.53 14.5 15.98V15.96C14.5 15.41 14.95 14.96 15.5 14.96C16.05 14.96 16.5 15.41 16.5 15.96C16.5 16.51 16.06 16.97 15.5 16.97Z" fill="currentColor" /><path d="M15.5 13.03C14.95 13.03 14.5 12.59 14.5 12.04V12.02C14.5 11.47 14.95 11.02 15.5 11.02C16.05 11.02 16.5 11.47 16.5 12.02C16.5 12.57 16.06 13.03 15.5 13.03Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 11.07V16.65C22 19.6 19.6 22 16.65 22H7.35C4.4 22 2 19.6 2 16.65V11.07C2 8.11997 4.4 5.71997 7.35 5.71997H16.65C19.6 5.71997 22 8.11997 22 11.07Z" fill="currentColor" /><path d="M13.6394 2.71L13.6294 3.65C13.6194 4.53 12.8894 5.26 11.9994 5.26C11.8494 5.26 11.7594 5.36 11.7594 5.49C11.7594 5.62 11.8594 5.72 11.9894 5.72H10.3794C10.3694 5.65 10.3594 5.57 10.3594 5.49C10.3594 4.59 11.0894 3.86 11.9794 3.86C12.1294 3.86 12.2294 3.76 12.2294 3.63L12.2394 2.69C12.2494 2.31 12.5594 2 12.9394 2H12.9494C13.3394 2 13.6394 2.32 13.6394 2.71Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGame as IconComponentType).keywords = [
  "game",
  "spunky",
  "spirited",
  "mettlesome",
  "courageous",
  "brave",
  "back",
  "fearless",
  "gamey",
  "biz"
];

export default IconGame as IconComponentType;