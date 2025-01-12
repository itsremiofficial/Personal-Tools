import { FC } from 'react';

const IconSidebarRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6399 15V9C22.6399 4 20.6399 2 15.6399 2H9.63989C4.63989 2 2.63989 4 2.63989 9V15C2.63989 20 4.63989 22 9.63989 22H15.6399C20.6399 22 22.6399 20 22.6399 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6399 2V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.63989 9.43994L11.1999 11.9999L8.63989 14.5599" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.66992 7.81V16.19C2.66992 19.83 4.83992 22 8.47992 22H16.8599C17.0599 22 17.2599 21.99 17.4499 21.98C18.6799 21.9 19.7199 21.55 20.5399 20.95C20.9599 20.66 21.3299 20.29 21.6199 19.87C22.3099 18.92 22.6699 17.68 22.6699 16.19V7.81C22.6699 4.37 20.7299 2.24 17.4499 2.03C17.2599 2.01 17.0599 2 16.8599 2H8.47992C6.98992 2 5.74992 2.36 4.79992 3.05C4.37992 3.34 4.00992 3.71 3.71992 4.13C3.02992 5.08 2.66992 6.32 2.66992 7.81Z" fill="currentColor" /><path d="M15.95 2V22H16.86C17.06 22 17.26 21.99 17.45 21.98V2.03C17.26 2.01 17.06 2 16.86 2H15.95Z" fill="currentColor" /><path d="M9.69989 15.3099C9.88989 15.3099 10.0799 15.2399 10.2299 15.0899L12.7899 12.5299C13.0799 12.2399 13.0799 11.7599 12.7899 11.4699L10.2299 8.90988C9.93989 8.61988 9.45989 8.61988 9.16989 8.90988C8.87989 9.19988 8.87989 9.67988 9.16989 9.96988L11.1899 11.9999L9.16989 14.0299C8.87989 14.3199 8.87989 14.7999 9.16989 15.0899C9.30989 15.2399 9.49989 15.3099 9.69989 15.3099Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.47992 2C6.98992 2 5.74992 2.36 4.79992 3.05C4.37992 3.34 4.00992 3.71 3.71992 4.13C3.02992 5.08 2.66992 6.32 2.66992 7.81V16.19C2.66992 19.83 4.83992 22 8.47992 22H15.9499V2H8.47992ZM12.7899 12.53L10.2299 15.09C10.0799 15.24 9.88992 15.31 9.69992 15.31C9.50992 15.31 9.31992 15.24 9.16992 15.09C8.87992 14.8 8.87992 14.32 9.16992 14.03L11.1899 12L9.16992 9.97C8.86992 9.68 8.86992 9.2 9.16992 8.91C9.46992 8.62 9.93992 8.62 10.2299 8.91L12.7899 11.47C13.0799 11.76 13.0799 12.24 12.7899 12.53Z" fill="currentColor" /><path d="M17.45 2.03003V21.98C18.68 21.9 19.72 21.55 20.54 20.95C20.96 20.66 21.33 20.29 21.62 19.87C22.31 18.92 22.67 17.68 22.67 16.19V7.81003C22.67 4.37003 20.73 2.24003 17.45 2.03003Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSidebarRight as IconComponent).keywords = [
  "sidebar",
  "right",
  "billet",
  "margin",
  "textbox",
  "supervised",
  "inset",
  "banknote",
  "vertical",
  "ticket",
  "fare",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune"
];

export default IconSidebarRight as IconComponent;