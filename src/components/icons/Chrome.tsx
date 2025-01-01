import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconChrome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.17 7.99988C18.15 7.33988 15.02 7.33988 12 7.99988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.94922 6.05957L3.96922 6.11957C4.97922 9.00957 6.52922 11.6896 8.53922 13.9996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8809 21.94C12.9409 19.67 14.4909 16.99 15.4309 14.08L15.4609 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 12C22 17.47 17.61 21.91 12.16 22H12C11.39 22 10.79 21.94 10.21 21.84C5.54 20.99 2 16.91 2 12C2 10.29 2.43 8.68 3.19 7.27C3.5 6.7 3.86 6.15 4.27 5.65C6.11 3.42 8.89 2 12 2C15.56 2 18.68 3.86 20.45 6.66C20.8 7.21 21.1 7.8 21.34 8.42C21.77 9.53 22 10.74 22 12Z" fill="currentColor" /><path d="M15.0995 8.0199C17.1795 7.8499 19.2695 7.9799 21.3395 8.4199C21.0995 7.7999 20.7995 7.2099 20.4495 6.6599C17.5795 6.1899 14.6795 6.2799 11.8195 6.8999C9.38945 6.9799 7.40945 8.7799 7.03945 11.1299C5.87945 9.4499 4.93945 7.6199 4.26945 5.6499C3.85945 6.1499 3.49945 6.6999 3.18945 7.2699C4.24945 9.9599 5.73945 12.3599 7.64945 14.4699C7.66945 14.4899 7.69945 14.4999 7.71945 14.5199C8.62945 15.9899 10.2395 16.8999 11.9695 16.8999C12.5795 16.8999 13.1695 16.7799 13.7195 16.5699C12.8095 18.4799 11.6495 20.2499 10.2095 21.8399C10.7895 21.9399 11.3895 21.9999 11.9995 21.9999H12.1595C14.0095 19.7399 15.4095 17.1799 16.3495 14.2999C16.7595 13.5599 16.9795 12.7299 16.9795 11.8899C16.9795 10.3199 16.2395 8.9399 15.0995 8.0199ZM14.9295 13.6099C14.3295 14.6599 13.1895 15.3199 11.9695 15.3199C10.7495 15.3199 9.61945 14.6599 9.00945 13.6099C8.69945 13.0699 8.54945 12.4999 8.54945 11.8899C8.54945 9.9999 10.0795 8.4699 11.9695 8.4699C13.8595 8.4699 15.3995 9.9999 15.3995 11.8899C15.3995 12.4999 15.2395 13.0699 14.9295 13.6099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChrome as IconComponentType).keywords = [
  "chrome",
  "chromium-plate",
  "chrome-plated",
  "vanadium",
  "plated",
  "spinel",
  "magnesite",
  "cobalt",
  "molybdenum",
  "chromium"
];

export default IconChrome as IconComponentType;