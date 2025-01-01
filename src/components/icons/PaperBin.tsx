import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPaperBin: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.03353 8.89004C2.55299 5.68645 2.31272 4.08466 3.21037 3.04233C4.10801 2 5.72772 2 8.96715 2H15.0329C18.2723 2 19.892 2 20.7897 3.04233C21.6873 4.08466 21.4471 5.68646 20.9665 8.89004L19.7665 16.89C19.4009 19.3276 19.2181 20.5464 18.3741 21.2732C17.5302 22 16.2978 22 13.8329 22H10.1671C7.70228 22 6.46984 22 5.62592 21.2732C4.78199 20.5464 4.59917 19.3276 4.23353 16.89L3.03353 8.89004Z" stroke="currentColor" strokeWidth={width} /><path d="M21 6H3" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8 6L3.5 11L11 19M14 6L4 16M20 6L7 19M13 19L20.5 11L16 6M10 6L20 16M4 6L17 19" stroke="currentColor" strokeWidth={width} strokeLinejoin="round" /><path d="M19 19H5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.03365 8.89004C2.55311 5.68645 2.31285 4.08466 3.21049 3.04233C4.10813 2 5.72784 2 8.96727 2H15.033C18.2724 2 19.8922 2 20.7898 3.04233C21.6874 4.08466 21.4472 5.68646 20.9666 8.89004L19.7666 16.89C19.401 19.3276 19.2182 20.5464 18.3743 21.2732C17.5303 22 16.2979 22 13.833 22H10.1673C7.7024 22 6.46997 22 5.62604 21.2732C4.78211 20.5464 4.59929 19.3276 4.23365 16.89L3.03365 8.89004Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.51737 12.1152L3.22735 10.1817L5.07173 8.13244L3.68929 6.75H2.72964C2.66015 6.18322 2.61547 5.68747 2.60657 5.25H21.3936C21.3847 5.68747 21.34 6.18322 21.2705 6.75H20.3106L18.9282 8.13244L20.7728 10.182L20.4829 12.1148L18.8825 13.8219L20.0515 14.9909L19.7748 16.8355L17.856 14.9168L15.9793 16.9187L17.3106 18.25H19.5561C19.4583 18.8397 19.3612 19.3331 19.2422 19.75H4.75803C4.63896 19.3331 4.5419 18.8397 4.44405 18.25H6.68929L8.02063 16.9187L6.14385 14.9168L4.22538 16.8352L3.94868 14.9906L5.11741 13.8219L3.51737 12.1152ZM6.07656 7.01596L5.81061 6.75H6.31592L6.07656 7.01596ZM7.13869 8.07809L8.33397 6.75H9.68929L10.9393 8L8.99995 9.93934L7.13869 8.07809ZM11.9999 6.93934L11.8106 6.75H12.1893L11.9999 6.93934ZM13.0606 8L14.3106 6.75H15.6659L16.8612 8.07809L14.9999 9.93934L13.0606 8ZM17.9233 7.01596L17.684 6.75H18.1893L17.9233 7.01596ZM16.0606 11L17.866 9.19457L19.4816 10.9896L17.8213 12.7607L16.0606 11ZM14.9999 12.0607L16.7948 13.8555L14.918 15.8574L13.0606 14L14.9999 12.0607ZM11.9999 15.0607L13.8916 16.9523L12.675 18.25H11.3249L10.1083 16.9523L11.9999 15.0607ZM15.1893 18.25H14.7311L14.9528 18.0135L15.1893 18.25ZM9.04708 18.0135L9.26877 18.25H8.81061L9.04708 18.0135ZM10.9393 14L9.08185 15.8574L7.20506 13.8555L8.99995 12.0607L10.9393 14ZM7.93929 11L6.17862 12.7607L4.51829 10.9896L6.13386 9.19457L7.93929 11ZM11.9999 12.9393L10.0606 11L11.9999 9.06066L13.9393 11L11.9999 12.9393Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.21049 3.04233C2.74667 3.58092 2.58666 4.26887 2.60662 5.25H21.3937C21.4136 4.26887 21.2536 3.58092 20.7898 3.04233C19.8922 2 18.2724 2 15.033 2H8.96727C5.72784 2 4.10813 2 3.21049 3.04233Z" fill="currentColor" /><path d="M3.03365 8.89001C2.91212 8.07985 2.80597 7.37214 2.72969 6.75H3.68934L4.93934 8L3.16613 9.77321L3.03365 8.89001Z" fill="currentColor" /><path d="M3.59911 12.6598L3.94874 14.9906L4.93934 14L3.59911 12.6598Z" fill="currentColor" /><path d="M4.22543 16.8352L4.23365 16.89C4.30912 17.3932 4.3768 17.8443 4.44411 18.25H6.68934L7.93934 17L6 15.0607L4.22543 16.8352Z" fill="currentColor" /><path d="M11.3107 18.25H12.6893L13.9393 17L12 15.0607L10.0607 17L11.3107 18.25Z" fill="currentColor" /><path d="M17.3107 18.25H19.5562C19.6235 17.8443 19.6912 17.3932 19.7666 16.89L19.7748 16.8355L18 15.0607L16.0607 17L17.3107 18.25Z" fill="currentColor" /><path d="M20.0515 14.9909L20.4012 12.6594L19.0607 14L20.0515 14.9909Z" fill="currentColor" /><path d="M20.8341 9.77347L20.9667 8.88963C21.0882 8.07989 21.1944 7.37188 21.2706 6.75H20.3107L19.0607 8L20.8341 9.77347Z" fill="currentColor" /><path d="M15.6893 6.75H14.3107L13.0607 8L15 9.93934L16.9393 8L15.6893 6.75Z" fill="currentColor" /><path d="M9.68934 6.75H8.31066L7.06066 8L9 9.93934L10.9393 8L9.68934 6.75Z" fill="currentColor" /><path d="M4.75809 19.75C4.95399 20.4359 5.20948 20.9145 5.62604 21.2732C6.46997 22 7.7024 22 10.1673 22H13.833C16.2979 22 17.5303 22 18.3743 21.2732C18.7908 20.9145 19.0463 20.4359 19.2422 19.75H4.75809Z" fill="currentColor" /><path d="M4.06066 11L6 9.06066L7.93934 11L6 12.9393L4.06066 11Z" fill="currentColor" /><path d="M7.06066 14L9 12.0607L10.9393 14L9 15.9393L7.06066 14Z" fill="currentColor" /><path d="M15 15.9393L13.0607 14L15 12.0607L16.9393 14L15 15.9393Z" fill="currentColor" /><path d="M12 12.9393L13.9393 11L12 9.06066L10.0607 11L12 12.9393Z" fill="currentColor" /><path d="M18 12.9393L16.0607 11L18 9.06066L19.9393 11L18 12.9393Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPaperBin as IconComponentType).keywords = [
  "paper",
  "bin",
  "wallpaper",
  "composition",
  "newspaper",
  "report",
  "theme",
  "newspaper publisher",
  "ink",
  "wallet",
  "stationery",
  "binful",
  "aba transit number",
  "bank identification number",
  "box",
  "shelf",
  "locker",
  "drawer",
  "coffer",
  "dumpster"
];

export default IconPaperBin as IconComponentType;