import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLogin1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M11.6797 14.62L14.2397 12.06L11.6797 9.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 12.0596H14.17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z" fill="currentColor" /><path d="M12.43 8.12002L15.78 11.47C16.07 11.76 16.07 12.24 15.78 12.53L12.43 15.88C12.14 16.17 11.66 16.17 11.37 15.88C11.08 15.59 11.08 15.11 11.37 14.82L13.44 12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.59 2.34 11.25 2.75 11.25H13.44L11.37 9.18002C11.22 9.03002 11.15 8.84002 11.15 8.65002C11.15 8.46002 11.22 8.27002 11.37 8.12002C11.66 7.82002 12.13 7.82002 12.43 8.12002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLogin1 as IconComponentType).keywords = [
  "login",
  "1",
  "log in",
  "log on",
  "logon",
  "username",
  "sign-on",
  "bootable",
  "pluggable",
  "uplink",
  "log-in",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconLogin1 as IconComponentType;