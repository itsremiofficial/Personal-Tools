import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVideoVertical: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.56055 2.51953V21.4795" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5605 2.51953V21.4795" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.55898 6.96973H3.20898" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.55922 12H2.69922" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.56039 16.9697H3.15039" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.559 6.96973H18.209" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.5592 12H17.6992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6406 12H6.64062" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.5604 16.9697H18.1504" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.47992 2H16.8599C16.9199 2 16.9799 2 17.0299 2.01C17.5699 2.01 18.0699 2.07 18.5299 2.18C20.6899 2.65 22.0899 4.09 22.5199 6.28C22.6199 6.75 22.6699 7.25 22.6699 7.78V16.28C22.6599 16.81 22.6099 17.31 22.5099 17.78C22.0699 19.93 20.6699 21.35 18.5299 21.82C18.0699 21.93 17.5699 21.99 17.0299 21.99C16.9799 22 16.9199 22 16.8599 22H8.47992C7.96992 22 7.47992 21.96 7.02992 21.87C4.76992 21.45 3.28992 20 2.82992 17.78C2.71992 17.31 2.66992 16.81 2.66992 16.28V7.77C2.66992 7.24 2.71992 6.74 2.81992 6.28C3.25992 4.02 4.74992 2.55 7.02992 2.13C7.47992 2.04 7.96992 2 8.47992 2Z" fill="currentColor" /><path d="M8.52992 11.25H17.0299V2.01C17.5699 2.01 18.0699 2.07 18.5299 2.18V6.28H22.5199C22.6199 6.75 22.6699 7.25 22.6699 7.78H18.5299V11.25H22.6699V12.75H18.5299V16.28H22.6699C22.6599 16.81 22.6099 17.31 22.5099 17.78H18.5299V21.82C18.0699 21.93 17.5699 21.99 17.0299 21.99V12.75H8.52992V22H8.47992C7.96992 22 7.47992 21.96 7.02992 21.87V17.76C6.98992 17.77 6.94992 17.78 6.90992 17.78H2.82992C2.71992 17.31 2.66992 16.81 2.66992 16.28H6.90992C6.94992 16.28 6.98992 16.3 7.02992 16.31V12.75H2.66992V11.25H7.02992V7.78H2.66992V7.77C2.66992 7.24 2.71992 6.74 2.81992 6.28H6.99992C7.00992 6.28 7.01992 6.29 7.02992 6.29V2.13C7.47992 2.04 7.96992 2 8.47992 2H8.52992V11.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.02992 7.78H2.66992V11.25H7.02992V7.78Z" fill="currentColor" /><path d="M7.03031 6.29V2.13C4.75031 2.55 3.26031 4.02 2.82031 6.28H7.00031C7.01031 6.28 7.02031 6.29 7.03031 6.29Z" fill="currentColor" /><path d="M7.02992 16.31V12.75H2.66992V16.28H6.90992C6.94992 16.28 6.98992 16.3 7.02992 16.31Z" fill="currentColor" /><path d="M22.5203 6.27999C22.0903 4.08999 20.6903 2.64999 18.5303 2.17999V6.27999H22.5203Z" fill="currentColor" /><path d="M17.0303 11.25V2.01C16.9803 2 16.9203 2 16.8603 2H8.53027V11.25H17.0303Z" fill="currentColor" /><path d="M22.6703 12.75H18.5303V16.28H22.6703V12.75Z" fill="currentColor" /><path d="M18.5303 21.82C20.6703 21.35 22.0703 19.93 22.5103 17.78H18.5303V21.82Z" fill="currentColor" /><path d="M6.91008 17.78H2.83008C3.29008 20 4.77008 21.45 7.03008 21.87V17.76C6.99008 17.77 6.95008 17.78 6.91008 17.78Z" fill="currentColor" /><path d="M22.6703 7.78H18.5303V11.25H22.6703V7.78Z" fill="currentColor" /><path d="M8.53027 12.75V22H16.8603C16.9203 22 16.9803 22 17.0303 21.99V12.75H8.53027Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoVertical as IconComponentType).keywords = [
  "video",
  "vertical",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "perpendicular",
  "plumb",
  "upright",
  "stand-up",
  "standing",
  "straight",
  "rearing",
  "erect",
  "erectile"
];

export default IconVideoVertical as IconComponentType;