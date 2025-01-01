import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconScanner: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z" fill="currentColor" /><path d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V15C21.25 14.59 21.59 14.25 22 14.25C22.41 14.25 22.75 14.59 22.75 15V17C22.75 20.44 20.44 22.75 17 22.75Z" fill="currentColor" /><path d="M22 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.5 9H7.5C7.22 9 7 8.78 7 8.5V6.5C7 5.68 7.67 5 8.5 5H15.5C16.33 5 17 5.68 17 6.5V8.5C17 8.78 16.78 9 16.5 9Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.5 15H7.5C7.22 15 7 15.22 7 15.5V17.5C7 18.32 7.67 19 8.5 19H15.5C16.33 19 17 18.32 17 17.5V15.5C17 15.22 16.78 15 16.5 15Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScanner as IconComponentType).keywords = [
  "scanner",
  "scanned",
  "scanning",
  "digitizer",
  "recognizer",
  "digitisation",
  "digitization",
  "radio",
  "browser",
  "reader"
];

export default IconScanner as IconComponentType;