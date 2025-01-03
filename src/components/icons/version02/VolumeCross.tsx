import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVolumeCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 9.84159V13.8416C2.66992 15.8416 3.66992 16.8416 5.66992 16.8416H7.09992C7.46992 16.8416 7.83992 16.9516 8.15992 17.1416L11.0799 18.9716C13.5999 20.5516 15.6699 19.4016 15.6699 16.4316V7.25159C15.6699 4.27159 13.5999 3.13159 11.0799 4.71159L8.15992 6.54159C7.83992 6.73159 7.46992 6.84159 7.09992 6.84159H5.66992C3.66992 6.84159 2.66992 7.84159 2.66992 9.84159Z" stroke="currentColor" strokeWidth={width} /><g opacity={duotone ? "0.4" : "1"}><path d="M22.669 13.8018L18.709 9.8418" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6299 9.88184L18.6699 13.8418" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2004 13.42L21.7504 11.97L23.1504 10.57C23.4404 10.28 23.4404 9.8 23.1504 9.51C22.8604 9.22 22.3804 9.22 22.0904 9.51L20.6904 10.91L19.2404 9.46C18.9504 9.17 18.4704 9.17 18.1804 9.46C17.8904 9.75 17.8904 10.23 18.1804 10.52L19.6304 11.97L18.1404 13.46C17.8504 13.75 17.8504 14.23 18.1404 14.52C18.2904 14.67 18.4804 14.74 18.6704 14.74C18.8604 14.74 19.0504 14.67 19.2004 14.52L20.6904 13.03L22.1404 14.48C22.2904 14.63 22.4804 14.7 22.6704 14.7C22.8604 14.7 23.0504 14.63 23.2004 14.48C23.4904 14.19 23.4904 13.72 23.2004 13.42Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.4199 7.41V16.59C16.4199 18.31 15.7999 19.6 14.6899 20.22C14.2399 20.47 13.7399 20.59 13.2199 20.59C12.4199 20.59 11.5599 20.32 10.6799 19.77L7.75992 17.94C7.55992 17.82 7.32992 17.75 7.09992 17.75H6.16992V6.25H7.09992C7.32992 6.25 7.55992 6.18 7.75992 6.06L10.6799 4.23C12.1399 3.32 13.5699 3.16 14.6899 3.78C15.7999 4.4 16.4199 5.69 16.4199 7.41Z" fill="currentColor" /><path d="M6.16992 6.25V17.75H5.66992C3.24992 17.75 1.91992 16.42 1.91992 14V10C1.91992 7.58 3.24992 6.25 5.66992 6.25H6.16992Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2004 13.42L21.7504 11.97L23.1504 10.57C23.4404 10.28 23.4404 9.79999 23.1504 9.50999C22.8604 9.21999 22.3804 9.21999 22.0904 9.50999L20.6904 10.91L19.2404 9.45999C18.9504 9.16999 18.4704 9.16999 18.1804 9.45999C17.8904 9.74999 17.8904 10.23 18.1804 10.52L19.6304 11.97L18.1404 13.46C17.8504 13.75 17.8504 14.23 18.1404 14.52C18.2904 14.67 18.4804 14.74 18.6704 14.74C18.8604 14.74 19.0504 14.67 19.2004 14.52L20.6904 13.03L22.1404 14.48C22.2904 14.63 22.4804 14.7 22.6704 14.7C22.8604 14.7 23.0504 14.63 23.2004 14.48C23.4904 14.19 23.4904 13.72 23.2004 13.42Z" fill="currentColor" /><path d="M14.6899 3.78C13.5699 3.16 12.1399 3.32 10.6799 4.23L7.75992 6.06C7.55992 6.18 7.32992 6.25 7.09992 6.25H6.16992H5.66992C3.24992 6.25 1.91992 7.58 1.91992 10V14C1.91992 16.42 3.24992 17.75 5.66992 17.75H6.16992H7.09992C7.32992 17.75 7.55992 17.82 7.75992 17.94L10.6799 19.77C11.5599 20.32 12.4199 20.59 13.2199 20.59C13.7399 20.59 14.2399 20.47 14.6899 20.22C15.7999 19.6 16.4199 18.31 16.4199 16.59V7.41C16.4199 5.69 15.7999 4.4 14.6899 3.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeCross as IconComponentType).keywords = [
  "volume",
  "cross",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
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

export default IconVolumeCross as IconComponentType;