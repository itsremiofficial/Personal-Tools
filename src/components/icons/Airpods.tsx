import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAirpods: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.72 9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 3.70003 3.7 2 5.78 2H7.67001C9.23001 2 10.5 3.28002 10.5 4.83002V7.39001V17.1C10.5 18.14 9.64999 18.99 8.60999 18.99C7.56999 18.99 6.72 18.14 6.72 17.1V9.56Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.77985 6.71979C5.25985 6.71979 4.83984 6.29985 4.83984 5.77985C4.83984 5.25985 5.25985 4.83984 5.77985 4.83984" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.28 9.56H18.22C20.3 9.56 22 7.86003 22 5.78003C22 3.70003 20.3 2 18.22 2H16.33C14.77 2 13.5 3.28002 13.5 4.83002V7.39001V17.1C13.5 18.14 14.35 18.99 15.39 18.99C16.43 18.99 17.28 18.14 17.28 17.1V9.56Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.2197 6.71979C18.7397 6.71979 19.1597 6.29985 19.1597 5.77985C19.1597 5.25985 18.7397 4.83984 18.2197 4.83984" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 22V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 22V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.5 4.83002V17.11C10.5 17.93 9.98 18.62 9.25 18.88C9.05 18.96 8.82999 19 8.60999 19C8.29999 19 8 18.92 7.75 18.78C7.14 18.47 6.72 17.84 6.72 17.11V9.56H5.78C3.7 9.56 2 7.86003 2 5.78003C2 4.74003 2.41999 3.79999 3.10999 3.10999C3.79999 2.41999 4.74 2 5.78 2H7.67001C9.22001 2 10.5 3.28002 10.5 4.83002Z" fill="currentColor" /><path d="M5.77985 7.47003C4.84985 7.47003 4.08984 6.71008 4.08984 5.77008C4.08984 4.83008 4.84985 4.08008 5.77985 4.08008C6.18985 4.08008 6.52985 4.42008 6.52985 4.83008C6.52985 5.24008 6.18985 5.58008 5.77985 5.58008C5.66985 5.58008 5.58984 5.67008 5.58984 5.77008C5.58984 5.87008 5.67985 5.97003 5.77985 5.97003C6.18985 5.97003 6.52985 6.31003 6.52985 6.72003C6.52985 7.13003 6.18985 7.47003 5.77985 7.47003Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 5.78003C22 7.86003 20.3 9.56 18.22 9.56H17.28V17.11C17.28 17.84 16.86 18.47 16.25 18.78C16 18.92 15.7 19 15.39 19C15.17 19 14.95 18.96 14.75 18.88C14.02 18.62 13.5 17.93 13.5 17.11V4.83002C13.5 3.28002 14.77 2 16.33 2H18.22C19.26 2 20.2 2.41999 20.89 3.10999C21.58 3.79999 22 4.74003 22 5.78003Z" fill="currentColor" /><path d="M18.2207 7.47003C17.8107 7.47003 17.4707 7.13003 17.4707 6.72003C17.4707 6.31003 17.8107 5.97003 18.2207 5.97003C18.3307 5.97003 18.4107 5.88008 18.4107 5.77008C18.4107 5.66008 18.3207 5.58008 18.2207 5.58008C17.8107 5.58008 17.4707 5.24008 17.4707 4.83008C17.4707 4.42008 17.8107 4.08008 18.2207 4.08008C19.1507 4.08008 19.9107 4.84008 19.9107 5.77008C19.9107 6.70008 19.1607 7.47003 18.2207 7.47003Z" fill="currentColor" /><path d="M9.25 18.88V22C9.25 22.41 8.91 22.75 8.5 22.75C8.09 22.75 7.75 22.41 7.75 22V18.78C8 18.92 8.29999 19 8.60999 19C8.82999 19 9.05 18.96 9.25 18.88Z" fill="currentColor" /><path d="M16.25 18.78V22C16.25 22.41 15.91 22.75 15.5 22.75C15.09 22.75 14.75 22.41 14.75 22V18.88C14.95 18.96 15.17 19 15.39 19C15.7 19 16 18.92 16.25 18.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirpods as IconComponentType).keywords = [
  "airpods",
  "pixel buds",
  "samsung galaxy buds series",
  "beats pill",
  "apple watch",
  "iphone 7",
  "bose portable audio products",
  "iphone 8",
  "iphone",
  "soundsticks"
];

export default IconAirpods as IconComponentType;