import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSafeHome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9998 15.37V17.5601C22.9998 20.0001 21.2198 22.3 18.7998 22.97C18.6298 23.01 18.4499 23.01 18.2899 22.97C17.1099 22.65 16.0698 21.93 15.3398 21C14.5498 20.02 14.0898 18.8101 14.0898 17.5601V15.37C14.0898 14.95 14.3998 14.49 14.7798 14.33L17.5598 13.1899C18.1898 12.9399 18.8898 12.9399 19.5198 13.1899L20.5198 13.6L22.3098 14.33C22.6898 14.49 22.9998 14.95 22.9998 15.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.9493 11.0103L20.5193 13.6003L19.5193 13.1902C18.8893 12.9402 18.1893 12.9402 17.5593 13.1902L14.7793 14.3302C14.3993 14.4902 14.0893 14.9503 14.0893 15.3703V17.5604C14.0893 18.8104 14.5493 20.0203 15.3393 21.0003H6.1793C4.8093 21.0003 3.51931 19.9104 3.28931 18.5604L2.0293 11.0103C1.8693 10.0803 2.33929 8.83028 3.07929 8.24028L9.65931 2.98027C10.6693 2.17027 12.3093 2.17028 13.3193 2.99028L19.8993 8.24028C20.6293 8.83028 21.1093 10.0803 20.9493 11.0103Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.9998 15.3699V17.5599C22.9998 19.9999 21.2198 22.2999 18.7998 22.9699C18.6298 23.0099 18.4499 23.0099 18.2899 22.9699C17.1099 22.6499 16.0698 21.9299 15.3398 20.9999C14.5498 20.0199 14.0898 18.8099 14.0898 17.5599V15.3699C14.0898 14.9499 14.3998 14.49 14.7798 14.33L17.5598 13.1899C18.1898 12.9399 18.8898 12.9399 19.5198 13.1899L20.5198 13.5999L22.3098 14.33C22.6898 14.49 22.9998 14.9499 22.9998 15.3699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.9493 11.0101L20.5193 13.6L19.5193 13.1901C18.8893 12.9401 18.1893 12.9401 17.5593 13.1901L14.7793 14.3301C14.3993 14.4901 14.0893 14.95 14.0893 15.37V17.56C14.0893 18.81 14.5493 20.0201 15.3393 21H6.1793C4.8093 21 3.51931 19.91 3.28931 18.56L2.0293 11.0101C1.8693 10.0801 2.33929 8.83004 3.07929 8.24004L9.65931 2.98003C10.6693 2.17003 12.3093 2.17004 13.3193 2.99004L19.8993 8.24004C20.6293 8.83004 21.1093 10.0801 20.9493 11.0101Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSafeHome as IconComponentType).keywords = [
  "safe",
  "home",
  "secure",
  "safe and sound",
  "safety",
  "risk-free",
  "dependable",
  "harmless",
  "innocuous",
  "off the hook",
  "sound",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household"
];

export default IconSafeHome as IconComponentType;