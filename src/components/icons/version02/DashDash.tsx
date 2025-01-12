import { FC } from 'react';

const IconDashDash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.78986 3.5H16.6699C20.6699 3.5 22.6699 6 22.6699 9.5V12C22.6699 17 19.6699 20.5 14.1699 20.5H4.60986L5.66986 16.25H13.1099C16.6699 16.25 18.4199 14 18.4199 10.94V10.75C18.4199 9 17.6699 7.75 15.4199 7.75H6.72986L7.78986 3.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.1699 10.5H4.97992C4.05992 10.5 3.25992 11.12 3.03992 12.01L2.66992 13.5H9.85992C10.7799 13.5 11.5799 12.88 11.7999 11.99L12.1699 10.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M7.78986 3.5H16.6699C20.6699 3.5 22.6699 6 22.6699 9.5V12C22.6699 17 19.6699 20.5 14.1699 20.5H4.60986L5.66986 16.25H13.1099C16.6699 16.25 18.4199 14 18.4199 10.94V10.75C18.4199 9 17.6699 7.75 15.4199 7.75H6.72986L7.78986 3.5Z" fill="currentColor" /><path d="M13.0799 10.23H5.36993C4.28993 10.23 3.34993 10.97 3.07993 12.01L2.82993 13.03C2.73993 13.4 3.01993 13.76 3.39993 13.76H11.1099C12.1899 13.76 13.1299 13.02 13.3999 11.98L13.6499 10.96C13.7499 10.59 13.4599 10.23 13.0799 10.23Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.78986 3.5H16.6699C20.6699 3.5 22.6699 6 22.6699 9.5V12C22.6699 17 19.6699 20.5 14.1699 20.5H4.60986L5.66986 16.25H13.1099C16.6699 16.25 18.4199 14 18.4199 10.94V10.75C18.4199 9 17.6699 7.75 15.4199 7.75H6.72986L7.78986 3.5Z" fill="none" /><path d="M13.0799 10.23H5.36993C4.28993 10.23 3.34993 10.97 3.07993 12.01L2.82993 13.03C2.73993 13.4 3.01993 13.76 3.39993 13.76H11.1099C12.1899 13.76 13.1299 13.02 13.3999 11.98L13.6499 10.96C13.7499 10.59 13.4599 10.23 13.0799 10.23Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDashDash as IconComponent).keywords = [
  "dash",
  "hyphen",
  "dah",
  "style",
  "flair",
  "elan",
  "flash",
  "scoot",
  "sprint",
  "shoot"
];

export default IconDashDash as IconComponent;