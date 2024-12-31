import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGlass: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16077 22C3.98077 22 3.14077 19.47 4.50077 16.39L8.75077 6.74H8.45077C7.80077 6.74 7.20077 6.48 6.77077 6.05C6.33077 5.62 6.07077 5.02 6.07077 4.37C6.07077 3.07 7.13077 2 8.44077 2H15.5508C16.2108 2 16.8008 2.27 17.2308 2.7C17.7908 3.26 18.0708 4.08 17.8608 4.95C17.5908 6.03 16.5508 6.74 15.4408 6.74H15.2808L19.5008 16.4C20.8508 19.48 19.9708 22 15.8308 22H8.16077Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.93945 13.1199C5.93945 13.1199 8.99945 12.9999 11.9995 13.9999C14.9995 14.9999 17.8295 13.1099 17.8295 13.1099" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.1905 16.29H10.8105V17.71H13.1905V16.29Z" fill="currentColor" /><path d="M7.94977 2.71C7.94977 3.11 7.62977 3.43 7.23977 3.43H6.28977C4.57977 3.43 3.18977 4.82 3.18977 6.52V12.4C2.33977 12.83 1.75977 13.71 1.75977 14.73V6.52C1.75977 4.03 3.78977 2 6.28977 2H7.23977C7.62977 2 7.94977 2.32 7.94977 2.71Z" fill="currentColor" /><path d="M22.2408 6.52V14.73C22.2408 13.71 21.6608 12.83 20.8108 12.4V6.52C20.8108 4.82 19.4208 3.43 17.7108 3.43H16.7608C16.3708 3.43 16.0508 3.11 16.0508 2.71C16.0508 2.32 16.3708 2 16.7608 2H17.7108C20.2108 2 22.2408 4.03 22.2408 6.52Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.8098 14.7301V19.3801C10.8098 20.8301 9.62977 22.0001 8.18976 22.0001H4.37977C2.93977 22.0001 1.75977 20.8301 1.75977 19.3801V14.7301C1.75977 13.7101 2.33977 12.8301 3.18977 12.4001C3.54977 12.2101 3.94977 12.1101 4.37977 12.1101H8.18976C9.62977 12.1101 10.8098 13.2801 10.8098 14.7301Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.2395 14.7301V19.3801C22.2395 20.8301 21.0595 22.0001 19.6195 22.0001H15.8095C14.3695 22.0001 13.1895 20.8301 13.1895 19.3801V14.7301C13.1895 13.2801 14.3695 12.1101 15.8095 12.1101H19.6195C20.0495 12.1101 20.4495 12.2101 20.8095 12.4001C21.6595 12.8301 22.2395 13.7101 22.2395 14.7301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGlass as IconComponentType).keywords = [
  "glass",
  "glaze",
  "looking glass",
  "spyglass",
  "field glass",
  "glaze over",
  "drinking glass",
  "glass in",
  "glass over",
  "coke"
];

export default IconGlass as IconComponentType;