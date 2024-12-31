import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMoon: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.00068 19.0001C9.00068 19.8401 9.13068 20.6601 9.37068 21.4201C5.53068 20.0901 2.63068 16.5601 2.33068 12.4301C2.03068 8.04012 4.56068 3.94012 8.65068 2.22012C9.71068 1.78012 10.2507 2.10012 10.4807 2.33012C10.7007 2.55012 11.0107 3.08012 10.5707 4.09012C10.1207 5.13012 9.90068 6.23012 9.90068 7.37012C9.91068 9.41012 10.7107 11.3001 12.0107 12.7501C10.1807 14.2101 9.00068 16.4701 9.00068 19.0001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoon as IconComponentType).keywords = [
  "moon",
  "lunar month",
  "moonlight",
  "synodic month",
  "lunation",
  "daydream",
  "moonshine",
  "moon around",
  "moon on",
  "satellite"
];

export default IconMoon as IconComponentType;