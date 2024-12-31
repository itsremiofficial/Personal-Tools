import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSecurityUser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4901 2.23006L5.50015 4.10005C4.35015 4.53005 3.41016 5.89004 3.41016 7.12004V14.55C3.41016 15.73 4.19017 17.28 5.14017 17.99L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.99C19.8302 17.28 20.6101 15.73 20.6101 14.55V7.12004C20.6101 5.89004 19.6701 4.53005 18.5201 4.10005L13.5302 2.23006C12.6802 1.92006 11.3201 1.92006 10.4901 2.23006Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9997 10.9199C11.9597 10.9199 11.9097 10.9199 11.8697 10.9199C10.9297 10.8899 10.1797 10.1099 10.1797 9.15991C10.1797 8.18991 10.9697 7.3999 11.9397 7.3999C12.9097 7.3999 13.6997 8.18991 13.6997 9.15991C13.6897 10.1199 12.9397 10.8899 11.9997 10.9199Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.0091 13.7199C9.04906 14.3599 9.04906 15.4099 10.0091 16.0498C11.0991 16.7799 12.8891 16.7799 13.9791 16.0498C14.9391 15.4099 14.9391 14.3599 13.9791 13.7199C12.8991 12.9899 11.1091 12.9899 10.0091 13.7199Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.4901 2.23006L5.50015 4.10007C4.35015 4.53007 3.41016 5.89006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19017 17.2801 5.14017 17.9901L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.9901C19.8302 17.2801 20.6101 15.7301 20.6101 14.5501V7.12006C20.6101 5.89006 19.6701 4.53007 18.5201 4.10007L13.5302 2.23006C12.6802 1.92006 11.3201 1.92006 10.4901 2.23006Z" fill="currentColor" /><path d="M11.8993 11.3C11.9193 11.3 11.9393 11.3 11.9593 11.3H11.9793H11.9993C13.1493 11.26 14.0493 10.33 14.0593 9.17003C14.0593 7.99003 13.0993 7.03003 11.9193 7.03003C10.7393 7.03003 9.7793 7.99003 9.7793 9.17003C9.7993 10.32 10.6993 11.26 11.8993 11.3Z" fill="currentColor" /><path d="M14.1902 13.4101C12.9802 12.6101 11.0201 12.6101 9.80014 13.4101C9.24014 13.7901 8.91016 14.3301 8.91016 14.8901C8.91016 15.4601 9.23014 15.9801 9.80014 16.3601C10.4101 16.7601 11.2001 16.9701 11.9901 16.9701C12.7801 16.9701 13.5801 16.7701 14.1801 16.3601C14.7401 15.9801 15.0702 15.4401 15.0702 14.8801C15.0802 14.3101 14.7602 13.7901 14.1902 13.4101Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSecurityUser as IconComponentType).keywords = [
  "security",
  "user",
  "surety",
  "protection",
  "certificate",
  "security system",
  "security measures",
  "confidentiality",
  "safe",
  "secure",
  "peace",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee"
];

export default IconSecurityUser as IconComponentType;