import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLanguageCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.6616 8.95996H7.68164" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6719 7.28003V8.96002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.1719 8.93994C15.1719 13.2399 11.8119 16.7199 7.67188 16.7199" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.6721 16.72C15.8721 16.72 14.2721 15.76 13.1221 14.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6719 22C18.1947 22 22.6719 17.5228 22.6719 12C22.6719 6.47715 18.1947 2 12.6719 2C7.14903 2 2.67188 6.47715 2.67188 12C2.67188 17.5228 7.14903 22 12.6719 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6719 22C18.1947 22 22.6719 17.5228 22.6719 12C22.6719 6.47715 18.1947 2 12.6719 2C7.14903 2 2.67188 6.47715 2.67188 12C2.67188 17.5228 7.14903 22 12.6719 22Z" fill="currentColor" /><path d="M17.6721 15.97C16.3621 15.97 15.1121 15.37 14.1121 14.26C15.1021 12.99 15.7421 11.42 15.8821 9.70004H17.6621C18.0721 9.70004 18.4121 9.36004 18.4121 8.95004C18.4121 8.54004 18.0721 8.20004 17.6621 8.20004H15.2321C15.2121 8.20004 15.1921 8.19003 15.1721 8.19003C15.1521 8.19003 15.1321 8.20004 15.1121 8.20004H13.4221V7.27002C13.4221 6.86002 13.0821 6.52002 12.6721 6.52002C12.2621 6.52002 11.9221 6.86002 11.9221 7.27002V8.20004H7.68213C7.27213 8.20004 6.93213 8.54004 6.93213 8.95004C6.93213 9.36004 7.27213 9.70004 7.68213 9.70004H12.6721H14.3721C14.0021 13.22 11.1421 15.97 7.66211 15.97C7.25211 15.97 6.91211 16.31 6.91211 16.72C6.91211 17.13 7.25211 17.47 7.66211 17.47C9.73211 17.47 11.6221 16.67 13.0721 15.36C14.3421 16.72 15.9521 17.47 17.6621 17.47C18.0721 17.47 18.4121 17.13 18.4121 16.72C18.4121 16.31 18.0821 15.97 17.6721 15.97Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6719 2C7.15188 2 2.67188 6.48 2.67188 12C2.67188 17.52 7.15188 22 12.6719 22C18.1919 22 22.6719 17.52 22.6719 12C22.6719 6.48 18.1919 2 12.6719 2ZM17.6719 17.47C15.9619 17.47 14.3619 16.73 13.0819 15.36C11.6319 16.67 9.74187 17.47 7.67188 17.47C7.26188 17.47 6.92188 17.13 6.92188 16.72C6.92188 16.31 7.26188 15.97 7.67188 15.97C11.1419 15.97 14.0119 13.22 14.3819 9.7H12.6719H7.68188C7.27188 9.7 6.93188 9.36 6.93188 8.95C6.93188 8.54 7.27188 8.21 7.68188 8.21H11.9219V7.28C11.9219 6.87 12.2619 6.53 12.6719 6.53C13.0819 6.53 13.4219 6.87 13.4219 7.28V8.21H15.1119C15.1319 8.21 15.1519 8.2 15.1719 8.2C15.1919 8.2 15.2119 8.21 15.2319 8.21H17.6619C18.0719 8.21 18.4119 8.55 18.4119 8.96C18.4119 9.37 18.0719 9.71 17.6619 9.71H15.8819C15.7319 11.42 15.0919 12.99 14.1119 14.27C15.1119 15.38 16.3619 15.98 17.6719 15.98C18.0819 15.98 18.4219 16.32 18.4219 16.73C18.4219 17.14 18.0819 17.47 17.6719 17.47Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLanguageCircle as IconComponentType).keywords = [
  "language",
  "circle",
  "speech",
  "nomenclature",
  "terminology",
  "lyric",
  "words",
  "linguistic communication",
  "linguistic process",
  "oral communication",
  "spoken language",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconLanguageCircle as IconComponentType;