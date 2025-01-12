import { FC } from 'react';

const IconCourthouse: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 22H22.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 2C14.2699 2.64 16.0699 2.64 17.6699 2V5C16.0699 5.64 14.2699 5.64 12.6699 5V2Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 5V8" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6699 8H7.66992C5.66992 8 4.66992 9 4.66992 11V22H20.6699V11C20.6699 9 19.6699 8 17.6699 8Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.25 12H20.09" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66016 12V22" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6602 12V22" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6602 12V22" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.0899 1.3802C17.8799 1.2402 17.6199 1.21018 17.3899 1.30018C15.9599 1.87018 14.3799 1.87018 12.9499 1.30018C12.7199 1.21018 12.4599 1.2402 12.2499 1.3802C12.0399 1.5202 11.9199 1.7502 11.9199 2.0002V5.0002V8.0002C11.9199 8.41019 12.2599 8.7502 12.6699 8.7502C13.0799 8.7502 13.4199 8.41019 13.4199 8.0002V6.02021C13.9999 6.16021 14.5799 6.24019 15.1699 6.24019C16.1099 6.24019 17.0499 6.06021 17.9499 5.70021C18.2299 5.59021 18.4199 5.3102 18.4199 5.0002V2.0002C18.4199 1.7502 18.2999 1.5202 18.0899 1.3802Z" fill="currentColor" /><path d="M22.6699 21.25H21.4199V11C21.4199 8.58 20.0899 7.25 17.6699 7.25H7.66992C5.24992 7.25 3.91992 8.58 3.91992 11V21.25H2.66992C2.25992 21.25 1.91992 21.59 1.91992 22C1.91992 22.41 2.25992 22.75 2.66992 22.75H4.66992H20.6699H22.6699C23.0799 22.75 23.4199 22.41 23.4199 22C23.4199 21.59 23.0799 21.25 22.6699 21.25ZM19.9199 12.75V21.25H17.4099V12.75H19.9199ZM11.9099 21.25H9.40992V12.75H11.9099V21.25ZM13.4099 12.75H15.9099V21.25H13.4099V12.75ZM5.41992 12.75H7.90992V21.25H5.41992V12.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 21.2502H21.4199V11.0002C21.4199 8.58019 20.0899 7.25019 17.6699 7.25019H13.4199V6.02019C13.9999 6.16019 14.5799 6.24019 15.1699 6.24019C16.1099 6.24019 17.0499 6.06019 17.9499 5.70019C18.2299 5.59019 18.4199 5.31019 18.4199 5.00019V2.00019C18.4199 1.75019 18.2999 1.52019 18.0899 1.38019C17.8799 1.24019 17.6199 1.21019 17.3899 1.30019C15.9599 1.87019 14.3799 1.87019 12.9499 1.30019C12.7199 1.21019 12.4599 1.24019 12.2499 1.38019C12.0399 1.52019 11.9199 1.75019 11.9199 2.00019V5.00019V7.25019H7.66992C5.24992 7.25019 3.91992 8.58019 3.91992 11.0002V21.2502H2.66992C2.25992 21.2502 1.91992 21.5902 1.91992 22.0002C1.91992 22.4102 2.25992 22.7502 2.66992 22.7502H4.66992H20.6699H22.6699C23.0799 22.7502 23.4199 22.4102 23.4199 22.0002C23.4199 21.5902 23.0799 21.2502 22.6699 21.2502ZM7.90992 21.2502H5.41992V12.7502H7.90992V21.2502ZM11.9099 21.2502H9.40992V12.7502H11.9099V21.2502ZM15.9099 21.2502H13.4099V12.7502H15.9099V21.2502ZM19.9199 21.2502H17.4099V12.7502H19.9199V21.2502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCourthouse as IconComponent).keywords = [
  "courthouse",
  "courtroom",
  "tribunal",
  "palace",
  "hall",
  "court",
  "palate",
  "ictr",
  "palais",
  "courtrooms"
];

export default IconCourthouse as IconComponent;