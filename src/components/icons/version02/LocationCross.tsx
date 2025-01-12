import { FC } from 'react';

const IconLocationCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.28963 8.49C6.25963 -0.169998 19.0896 -0.159997 21.0496 8.5C22.1996 13.58 19.0396 17.88 16.2696 20.54C14.2596 22.48 11.0796 22.48 9.05963 20.54C6.29963 17.88 3.13963 13.57 4.28963 8.49Z" stroke="currentColor" strokeWidth={width} /><g opacity={duotone ? "0.4" : "1"}><path d="M14.669 12.96L10.709 9" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.6299 9.04004L10.6699 13" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2004 12.4202L13.7504 10.9702L15.1504 9.57018C15.4404 9.28018 15.4404 8.80018 15.1504 8.51018C14.8604 8.22018 14.3804 8.22018 14.0904 8.51018L12.6904 9.91018L11.2404 8.46018C10.9504 8.17018 10.4704 8.17018 10.1804 8.46018C9.89035 8.75018 9.89035 9.23018 10.1804 9.52018L11.6304 10.9702L10.1404 12.4602C9.85035 12.7502 9.85035 13.2302 10.1404 13.5202C10.2904 13.6702 10.4804 13.7402 10.6704 13.7402C10.8604 13.7402 11.0504 13.6702 11.2004 13.5202L12.6904 12.0302L14.1404 13.4802C14.2904 13.6302 14.4804 13.7002 14.6704 13.7002C14.8604 13.7002 15.0504 13.6302 15.2004 13.4802C15.4904 13.1902 15.4904 12.7202 15.2004 12.4202Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.2897 8.7C20.2497 4.07 16.2097 2 12.6697 2C12.6697 2 12.6697 2 12.6597 2C9.12967 2 5.09967 4.07 4.04967 8.69C2.86967 13.85 6.02967 18.22 8.88967 20.98C9.94967 22 11.3097 22.51 12.6697 22.51C14.0297 22.51 15.3897 22 16.4397 20.98C19.2997 18.22 22.4597 13.86 21.2897 8.7Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64827)"><path d="M21.2897 8.7C20.2497 4.07 16.2097 2 12.6697 2C12.6697 2 12.6697 2 12.6597 2C9.12967 2 5.09967 4.07 4.04967 8.69C2.86967 13.85 6.02967 18.22 8.88967 20.98C9.94967 22 11.3097 22.51 12.6697 22.51C14.0297 22.51 15.3897 22 16.4397 20.98C19.2997 18.22 22.4597 13.86 21.2897 8.7ZM15.1997 13.49C15.0497 13.64 14.8597 13.71 14.6697 13.71C14.4797 13.71 14.2897 13.64 14.1397 13.49L12.6897 12.04L11.1997 13.53C11.0497 13.68 10.8597 13.75 10.6697 13.75C10.4797 13.75 10.2897 13.68 10.1397 13.53C9.84967 13.24 9.84967 12.76 10.1397 12.47L11.6297 10.98L10.1797 9.53C9.88967 9.24 9.88967 8.76 10.1797 8.47C10.4697 8.18 10.9497 8.18 11.2397 8.47L12.6897 9.92L14.0897 8.52C14.3797 8.23 14.8597 8.23 15.1497 8.52C15.4397 8.81 15.4397 9.29 15.1497 9.58L13.7497 10.98L15.1997 12.43C15.4897 12.72 15.4897 13.19 15.1997 13.49Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLocationCross as IconComponent).keywords = [
  "location",
  "cross",
  "position",
  "placement",
  "positioning",
  "localization",
  "localisation",
  "emplacement",
  "fix",
  "locating",
  "situating",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization"
];

export default IconLocationCross as IconComponent;