import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLogout3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M15.9998 2L14.9998 2C12.1714 2 10.7576 2.00023 9.87891 2.87891C9.00023 3.75759 9.00023 5.1718 9.00023 8.00023L9.00023 16.0002C9.00023 18.8287 9.00023 20.2429 9.87891 21.1215C10.7574 22 12.1706 22 14.9976 22L14.9998 22L15.9998 22C18.8282 22 20.2424 22 21.1211 21.1213C21.9998 20.2426 21.9998 18.8284 21.9998 16L21.9998 8L21.9998 7.99998C21.9998 5.17157 21.9998 3.75736 21.1211 2.87868C20.2424 2 18.8282 2 15.9998 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.75 12C15.75 11.5858 15.4142 11.25 15 11.25L4.02744 11.25L5.98809 9.56943C6.30259 9.29986 6.33901 8.82639 6.06944 8.51189C5.79988 8.1974 5.3264 8.16098 5.01191 8.43054L1.51191 11.4305C1.34567 11.573 1.25 11.781 1.25 12C1.25 12.2189 1.34567 12.4269 1.51191 12.5694L5.01191 15.5694C5.3264 15.839 5.79988 15.8026 6.06944 15.4881C6.33901 15.1736 6.30259 14.7001 5.98809 14.4305L4.02744 12.75L15 12.75C15.4142 12.75 15.75 12.4142 15.75 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.1251 12C16.1251 11.5858 15.7893 11.25 15.3751 11.25L4.40256 11.25L6.36321 9.56944C6.67771 9.29988 6.71413 8.8264 6.44456 8.51191C6.175 8.19741 5.70152 8.16099 5.38703 8.43056L1.88703 11.4306C1.72079 11.573 1.62512 11.7811 1.62512 12C1.62512 12.2189 1.72079 12.427 1.88703 12.5694L5.38703 15.5694C5.70152 15.839 6.175 15.8026 6.44456 15.4881C6.71413 15.1736 6.67771 14.7001 6.36322 14.4306L4.40256 12.75L15.3751 12.75C15.7893 12.75 16.1251 12.4142 16.1251 12Z" fill="currentColor" /><path d="M9.37512 8C9.37512 8.70219 9.37512 9.05329 9.54363 9.3055C9.6166 9.41471 9.71037 9.50848 9.81958 9.58145C10.0718 9.74996 10.4229 9.74996 11.1251 9.74996L15.3751 9.74996C16.6178 9.74996 17.6251 10.7573 17.6251 12C17.6251 13.2426 16.6178 14.25 15.3751 14.25L11.1252 14.25C10.4229 14.25 10.0718 14.25 9.81952 14.4185C9.71036 14.4915 9.61662 14.5852 9.54367 14.6944C9.37512 14.9466 9.37512 15.2977 9.37512 16C9.37512 18.8284 9.37512 20.2426 10.2538 21.1213C11.1325 22 12.5465 22 15.3749 22L16.3749 22C19.2033 22 20.6175 22 21.4962 21.1213C22.3749 20.2426 22.3749 18.8284 22.3749 16L22.3749 8C22.3749 5.17158 22.3749 3.75736 21.4962 2.87868C20.6175 2 19.2033 2 16.3749 2L15.3749 2C12.5465 2 11.1325 2 10.2538 2.87868C9.37512 3.75736 9.37512 5.17157 9.37512 8Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLogout3 as IconComponentType).keywords = [
  "logout",
  "3",
  "logoff",
  "output",
  "closure",
  "off",
  "unplug",
  "disconnect",
  "teardown",
  "disconnection",
  "disengagement",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down"
];

export default IconLogout3 as IconComponentType;