import { FC } from 'react';
import { IconProps } from "@/types";

const IconDocumentFilter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.34985 2H12.2499C12.9899 2 13.5999 2.61001 13.5999 3.35001V4.82999C13.5999 5.36999 13.2599 6.04 12.9299 6.38L10.0299 8.94C9.62991 9.28 9.35986 9.94999 9.35986 10.49V13.39C9.35986 13.79 9.08988 14.33 8.74988 14.54L7.80987 15.15C6.92987 15.69 5.71985 15.08 5.71985 14V10.43C5.71985 9.95999 5.44987 9.35001 5.17987 9.01001L2.61987 6.31C2.27987 5.97 2.00989 5.36999 2.00989 4.95999V3.41C1.99989 2.61 2.60985 2 3.34985 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12.0002V15.0002C2 20.0002 4 22.0002 9 22.0002H15C20 22.0002 22 20.0002 22 15.0002V9.00024C22 5.88024 21.22 3.92024 19.41 2.90024C18.9 2.61024 17.88 2.39023 16.95 2.24023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13 13H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11 17H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.22998 1H11.36C12.04 1 12.59 1.56 12.59 2.25V3.62C12.59 4.12 12.28 4.73999 11.97 5.04999L9.32001 7.42001C8.95001 7.73001 8.70001 8.36001 8.70001 8.85001V11.53C8.70001 11.9 8.45002 12.4 8.15002 12.59L7.28998 13.15C6.48998 13.65 5.38 13.09 5.38 12.09V8.78C5.38 8.34 5.13001 7.78 4.89001 7.47L2.54999 4.97C2.23999 4.66 2 4.1 2 3.72V2.29001C2 1.56001 2.54998 1 3.22998 1Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17 2H14.6C14.32 2 14.1 2.22 14.1 2.5C14.1 2.98 14.1 3.62 14.1 3.62C14.1 4.61 13.57 5.57999 13.05 6.10999L10.33 8.54001C10.3 8.61001 10.25 8.71001 10.22 8.79001V11.54C10.22 12.45 9.68 13.44 8.94 13.89L8.12 14.42C7.66 14.71 7.15001 14.85 6.64001 14.85C6.18001 14.85 5.71999 14.73 5.29999 14.5C4.64999 14.14 4.2 13.55 4 12.87V10.21C4 10.08 3.94998 9.94999 3.84998 9.85999L2.84998 8.85999C2.52998 8.54999 2 8.76999 2 9.20999V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2Z" fill="currentColor" /><path d="M18 13.75H13C12.59 13.75 12.25 13.41 12.25 13C12.25 12.59 12.59 12.25 13 12.25H18C18.41 12.25 18.75 12.59 18.75 13C18.75 13.41 18.41 13.75 18 13.75Z" fill="currentColor" /><path d="M18 17.75H11C10.59 17.75 10.25 17.41 10.25 17C10.25 16.59 10.59 16.25 11 16.25H18C18.41 16.25 18.75 16.59 18.75 17C18.75 17.41 18.41 17.75 18 17.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentFilter;