import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSpeedometer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 15.22 3.08 17.68 4.84 19.49" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9991 21.5002C13.8659 21.5002 15.3792 19.987 15.3792 18.1202C15.3792 16.2535 13.8659 14.7402 11.9991 14.7402C10.1324 14.7402 8.61914 16.2535 8.61914 18.1202C8.61914 19.987 10.1324 21.5002 11.9991 21.5002Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.0992 20.2999C18.8992 20.2999 18.6992 20.2 18.5992 20.1C18.2992 19.8 18.2992 19.2999 18.5992 19C20.2992 17.3 21.1992 15 21.1992 12.5C21.1992 7.39995 17.0992 3.29995 11.9992 3.29995C6.89922 3.29995 2.79922 7.39995 2.79922 12.5C2.79922 14.9 3.69922 17.2 5.39922 19C5.69922 19.2999 5.69922 19.8 5.39922 20.1C5.09922 20.4 4.59922 20.4 4.29922 20.1C2.29922 18.1 1.19922 15.4 1.19922 12.6C1.19922 6.59995 6.09922 1.69995 11.9992 1.69995C17.8992 1.69995 22.7992 6.49995 22.7992 12.5C22.7992 15.3 21.6992 18 19.6992 20C19.4992 20.2 19.2992 20.2999 19.0992 20.2999Z" fill="currentColor" /><path d="M11.9996 22C14.1535 22 15.8996 20.2539 15.8996 18.1C15.8996 15.946 14.1535 14.2 11.9996 14.2C9.8457 14.2 8.09961 15.946 8.09961 18.1C8.09961 20.2539 9.8457 22 11.9996 22Z" fill="currentColor" /><path d="M16 8.5C14.9 8.5 14 9.4 14 10.5V11.3C14 12 14.6 12.5 15.2 12.5H16C17.1 12.5 18 11.6 18 10.5C18 9.4 17.1 8.5 16 8.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSpeedometer as IconComponentType).keywords = [
  "speedometer",
  "speed indicator",
  "tachograph",
  "odometer",
  "tachometer",
  "meter",
  "speedo",
  "trip",
  "tachometers",
  "cyclometer"
];

export default IconSpeedometer as IconComponentType;