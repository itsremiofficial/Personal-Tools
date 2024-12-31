import { FC } from 'react';
import { IconProps } from "@/types";

const IconGalleryEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.45" : "1"}><path d="M19.1409 2.59015L15.5109 6.22015C15.3709 6.36015 15.2309 6.63015 15.2109 6.83015L15.0109 8.22015C14.9409 8.72015 15.2909 9.07015 15.7909 9.00015L17.1809 8.80015C17.3709 8.77015 17.6509 8.64015 17.7909 8.50015L21.4209 4.87015C22.0509 4.24015 22.3409 3.52015 21.4209 2.60015C20.4909 1.66015 19.7709 1.96015 19.1409 2.59015Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6191 3.10986C18.9291 4.20986 19.7891 5.06986 20.8891 5.37986" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.0005 13.9001V16.1901C22.0005 19.8301 19.8305 22.0001 16.1905 22.0001H7.81055C5.26055 22.0001 3.42055 20.9301 2.56055 19.0301L2.67055 18.9501L7.59055 15.6501C8.39055 15.1101 9.52055 15.1701 10.2305 15.7901L10.5705 16.0701C11.3505 16.7401 12.6105 16.7401 13.3905 16.0701L17.5505 12.5001C18.3305 11.8301 19.5905 11.8301 20.3705 12.5001L22.0005 13.9001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 2.63 16.08 2.29 16.22 2C16.21 2 16.2 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03L2.67 18.95L7.59 15.65C8.39 15.11 9.52 15.17 10.23 15.79L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9V7.81C22 7.8 22 7.79 22 7.78C21.71 7.92 21.37 8 20.97 8Z" fill="currentColor" /><path d="M8.99914 10.3801C10.3136 10.3801 11.3791 9.31456 11.3791 8.00012C11.3791 6.68568 10.3136 5.62012 8.99914 5.62012C7.6847 5.62012 6.61914 6.68568 6.61914 8.00012C6.61914 9.31456 7.6847 10.3801 8.99914 10.3801Z" fill="currentColor" /><path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM19.01 6.57C18.98 6.6 18.91 6.64 18.86 6.64L17.82 6.79C17.79 6.8 17.75 6.8 17.72 6.8C17.57 6.8 17.44 6.75 17.35 6.65C17.23 6.53 17.18 6.36 17.21 6.18L17.36 5.14C17.37 5.09 17.4 5.02 17.43 4.99L19.13 3.29C19.16 3.36 19.19 3.44 19.22 3.52C19.26 3.6 19.3 3.67 19.34 3.74C19.37 3.8 19.41 3.86 19.45 3.9C19.49 3.96 19.53 4.02 19.56 4.05C19.58 4.08 19.59 4.09 19.6 4.1C19.69 4.21 19.79 4.31 19.88 4.38C19.9 4.4 19.92 4.42 19.93 4.42C19.98 4.46 20.04 4.51 20.08 4.54C20.14 4.58 20.19 4.62 20.25 4.65C20.32 4.69 20.4 4.73 20.48 4.77C20.56 4.81 20.64 4.84 20.71 4.86L19.01 6.57ZM21.4 4.18L21.08 4.5C21.06 4.53 21.03 4.54 21 4.54C20.99 4.54 20.98 4.54 20.97 4.54C20.25 4.33 19.68 3.76 19.47 3.04C19.46 3 19.47 2.96 19.5 2.93L19.83 2.6C20.37 2.06 20.88 2.07 21.41 2.6C21.68 2.87 21.81 3.13 21.81 3.39C21.8 3.65 21.67 3.91 21.4 4.18Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGalleryEdit;