import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconDriverRefresh: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.66992 6.25V8.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 12V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H12.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.6699 6.25V8.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.66992 16V18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.6699 16V18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.6699 7.25H18.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66992 12H22.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.2298 20.33C21.6698 21.3 20.6198 21.95 19.4198 21.95C17.6298 21.95 16.5298 20.15 16.5298 20.15M16.5998 17.09C17.1598 16.11 18.2098 15.46 19.4198 15.46C21.5898 15.46 22.6698 17.26 22.6698 17.26M22.6698 15.25V17.25H20.6698M18.5298 20.14H16.5298V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.81V9.51C22.6699 10.28 21.8499 10.74 21.1699 10.38C19.6999 9.59 17.9299 9.28 16.0699 9.67C14.8699 9.92 13.7599 10.48 12.8499 11.25C12.3299 11.68 11.8699 12.19 11.4799 12.75C10.9399 13.54 10.5399 14.44 10.3399 15.4C9.94994 17.26 10.2599 19.03 11.0499 20.5C11.4099 21.18 10.9499 22 10.1799 22H8.47992C5.26992 22 2.66992 19.4 2.66992 16.19V7.81C2.66992 4.6 5.26992 2 8.47992 2H16.8599C20.0699 2 22.6699 4.6 22.6699 7.81Z" fill="currentColor" /><path d="M12.8499 11.25C12.3299 11.68 11.8699 12.19 11.4799 12.75H2.66992V11.25H12.8499Z" fill="currentColor" /><path d="M6.66992 9C6.25992 9 5.91992 8.66 5.91992 8.25V6.25C5.91992 5.84 6.25992 5.5 6.66992 5.5C7.07992 5.5 7.41992 5.84 7.41992 6.25V8.25C7.41992 8.66 7.07992 9 6.66992 9Z" fill="currentColor" /><path d="M10.6699 9C10.2599 9 9.91992 8.66 9.91992 8.25V6.25C9.91992 5.84 10.2599 5.5 10.6699 5.5C11.0799 5.5 11.4199 5.84 11.4199 6.25V8.25C11.4199 8.66 11.0799 9 10.6699 9Z" fill="currentColor" /><path d="M6.66992 18.75C6.25992 18.75 5.91992 18.41 5.91992 18V16C5.91992 15.59 6.25992 15.25 6.66992 15.25C7.07992 15.25 7.41992 15.59 7.41992 16V18C7.41992 18.41 7.07992 18.75 6.66992 18.75Z" fill="currentColor" /><path d="M18.6699 8H14.6699C14.2599 8 13.9199 7.66 13.9199 7.25C13.9199 6.84 14.2599 6.5 14.6699 6.5H18.6699C19.0799 6.5 19.4199 6.84 19.4199 7.25C19.4199 7.66 19.0799 8 18.6699 8Z" fill="currentColor" /><path d="M17.6699 11C14.3599 11 11.6699 13.69 11.6699 17C11.6699 20.31 14.3599 23 17.6699 23C20.9799 23 23.6699 20.31 23.6699 17C23.6699 13.69 20.9799 11 17.6699 11ZM20.5999 18.2C20.4399 18.59 20.2099 18.94 19.9099 19.24C19.3099 19.84 18.5199 20.17 17.6699 20.17C16.9899 20.17 16.3499 19.95 15.8099 19.55V19.69C15.8099 20 15.5599 20.26 15.2399 20.26C14.9299 20.26 14.6699 20.01 14.6699 19.69V18.25C14.6699 17.94 14.9199 17.68 15.2399 17.68H16.6799C16.9899 17.68 17.2499 17.93 17.2499 18.25C17.2499 18.54 17.0399 18.76 16.7599 18.8C17.5199 19.17 18.4899 19.05 19.0999 18.44C19.2899 18.25 19.4399 18.02 19.5399 17.77C19.6599 17.48 19.9899 17.34 20.2799 17.46C20.5799 17.57 20.7199 17.91 20.5999 18.2ZM20.6699 15.76C20.6699 16.07 20.4199 16.33 20.0999 16.33H18.6599C18.3499 16.33 18.0899 16.08 18.0899 15.76C18.0899 15.47 18.2999 15.25 18.5799 15.21C17.8199 14.84 16.8499 14.96 16.2299 15.57C16.0599 15.74 15.9299 15.93 15.8299 16.14C15.7299 16.35 15.5299 16.47 15.3199 16.47C15.2399 16.47 15.1599 16.45 15.0799 16.42C14.7999 16.29 14.6699 15.95 14.8099 15.66C14.9699 15.33 15.1799 15.03 15.4299 14.77C16.0299 14.17 16.8199 13.84 17.6699 13.84C18.3499 13.84 18.9899 14.06 19.5299 14.46V14.33C19.5299 14.02 19.7799 13.76 20.0999 13.76C20.4199 13.76 20.6699 14 20.6699 14.32V15.76Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5999 12.75H3.66992C3.11992 12.75 2.66992 13.2 2.66992 13.75V16.19C2.66992 19.4 5.26992 22 8.47992 22H10.1799C10.9499 22 11.4199 21.18 11.0499 20.5C10.2599 19.03 9.94992 17.26 10.3399 15.4C10.4799 14.72 10.7199 14.08 11.0399 13.48C11.2099 13.15 10.9799 12.75 10.5999 12.75ZM7.41992 18C7.41992 18.41 7.07992 18.75 6.66992 18.75C6.25992 18.75 5.91992 18.41 5.91992 18V16C5.91992 15.59 6.25992 15.25 6.66992 15.25C7.07992 15.25 7.41992 15.59 7.41992 16V18Z" fill="currentColor" /><path d="M16.8599 2H8.47992C5.26992 2 2.66992 4.6 2.66992 7.81V10.25C2.66992 10.8 3.11992 11.25 3.66992 11.25H12.5099C12.7299 11.25 12.9399 11.17 13.1199 11.03C13.9799 10.37 14.9899 9.89 16.0699 9.67C17.9299 9.28 19.6999 9.59 21.1699 10.38C21.8499 10.74 22.6699 10.28 22.6699 9.51V7.81C22.6699 4.6 20.0699 2 16.8599 2ZM7.41992 8.25C7.41992 8.66 7.07992 9 6.66992 9C6.25992 9 5.91992 8.66 5.91992 8.25V6.25C5.91992 5.84 6.25992 5.5 6.66992 5.5C7.07992 5.5 7.41992 5.84 7.41992 6.25V8.25ZM11.4199 8.25C11.4199 8.66 11.0799 9 10.6699 9C10.2599 9 9.91992 8.66 9.91992 8.25V6.25C9.91992 5.84 10.2599 5.5 10.6699 5.5C11.0799 5.5 11.4199 5.84 11.4199 6.25V8.25ZM18.6699 8H14.6699C14.2599 8 13.9199 7.66 13.9199 7.25C13.9199 6.84 14.2599 6.5 14.6699 6.5H18.6699C19.0799 6.5 19.4199 6.84 19.4199 7.25C19.4199 7.66 19.0799 8 18.6699 8Z" fill="currentColor" /><path d="M17.6699 11C14.3599 11 11.6699 13.69 11.6699 17C11.6699 20.31 14.3599 23 17.6699 23C20.9799 23 23.6699 20.31 23.6699 17C23.6699 13.69 20.9799 11 17.6699 11ZM20.5999 18.2C20.4399 18.59 20.2099 18.94 19.9099 19.24C19.3099 19.84 18.5199 20.17 17.6699 20.17C16.9899 20.17 16.3499 19.95 15.8099 19.55V19.69C15.8099 20 15.5599 20.26 15.2399 20.26C14.9199 20.25 14.6699 20 14.6699 19.68V18.24C14.6699 17.93 14.9199 17.67 15.2399 17.67H16.6799C16.9899 17.67 17.2499 17.92 17.2499 18.24C17.2499 18.53 17.0399 18.75 16.7599 18.79C17.5199 19.16 18.4899 19.04 19.0999 18.43C19.2899 18.24 19.4399 18.01 19.5399 17.76C19.6599 17.47 19.9899 17.33 20.2799 17.45C20.5799 17.57 20.7199 17.91 20.5999 18.2ZM20.6699 15.76C20.6699 16.07 20.4199 16.33 20.0999 16.33H18.6599C18.3499 16.33 18.0899 16.08 18.0899 15.76C18.0899 15.47 18.2999 15.25 18.5799 15.21C17.8199 14.84 16.8499 14.96 16.2299 15.57C16.0599 15.74 15.9299 15.93 15.8299 16.14C15.7299 16.35 15.5299 16.47 15.3199 16.47C15.2399 16.47 15.1599 16.45 15.0799 16.42C14.7999 16.29 14.6699 15.95 14.8099 15.66C14.9699 15.33 15.1799 15.03 15.4299 14.77C16.0299 14.17 16.8199 13.84 17.6699 13.84C18.3499 13.84 18.9899 14.06 19.5299 14.46V14.33C19.5299 14.02 19.7799 13.76 20.0999 13.76C20.4199 13.76 20.6699 14 20.6699 14.32V15.76Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDriverRefresh as IconComponentType).keywords = [
  "driver",
  "refresh",
  "device driver",
  "number one wood",
  "motorist",
  "passenger",
  "motorman",
  "vehicle",
  "car",
  "driving",
  "chauffeur",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive"
];

export default IconDriverRefresh as IconComponentType;