import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBlend: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C14.4307 18 13.0307 17.42 11.9707 16.46C13.2007 15.37 13.9707 13.77 13.9707 12C13.9707 10.23 13.2007 8.63 11.9707 7.54C13.0307 6.58 14.4307 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18C4.6607 18 1.9707 15.31 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C14.4307 18 13.0307 17.42 11.9707 16.46C13.2007 15.37 13.9707 13.77 13.9707 12C13.9707 10.23 13.2007 8.63 11.9707 7.54C13.0307 6.58 14.4307 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18C4.6607 18 1.9707 15.31 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBlend as IconComponentType).keywords = [
  "blend",
  "intermingle",
  "immix",
  "intermix",
  "mix",
  "commingle",
  "immingle",
  "blend in",
  "conflate",
  "meld"
];

export default IconBlend as IconComponentType;