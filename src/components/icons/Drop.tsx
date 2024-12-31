import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDrop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6103 2.21C12.2503 1.93 11.7503 1.93 11.3903 2.21C9.49029 3.66 3.88028 8.39 3.91028 13.9C3.91028 18.36 7.54028 22 12.0103 22C16.4803 22 20.1103 18.37 20.1103 13.91C20.1203 8.48 14.5003 3.67 12.6103 2.21Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.5904 7.41L6.31044 17.69C5.83044 18.17 5.01044 18.06 4.72044 17.45C4.20044 16.38 3.90044 15.17 3.90044 13.9C3.88044 8.38 9.48044 3.66 11.3804 2.21C11.7504 1.93 12.2504 1.93 12.6104 2.21C13.4804 2.87 15.1104 4.24 16.6404 6.04C16.9804 6.44 16.9604 7.04 16.5904 7.41Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.1 13.91C20.1 18.37 16.47 22 12 22C10.21 22 8.53996 21.42 7.18996 20.42C6.69996 20.06 6.65996 19.34 7.08996 18.91L17.16 8.84002C17.63 8.37002 18.42 8.47002 18.74 9.05002C19.56 10.56 20.11 12.2 20.1 13.91Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDrop as IconComponentType).keywords = [
  "drop",
  "shed",
  "fell",
  "flatten",
  "sink",
  "drop cloth",
  "knock off",
  "dangle",
  "swing",
  "driblet"
];

export default IconDrop as IconComponentType;