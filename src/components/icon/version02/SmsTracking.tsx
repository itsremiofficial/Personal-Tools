import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSmsTracking: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 8.5C2.66992 5 4.66992 3.5 7.66992 3.5H17.6699C20.6699 3.5 22.6699 5 22.6699 8.5V15.5C22.6699 19 20.6699 20.5 17.6699 20.5H7.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 9L14.5399 11.5C13.5099 12.32 11.8199 12.32 10.7899 11.5L7.66992 9" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 16.5H8.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 12.5H5.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66992 13C3.90992 13 1.66992 15.23 1.66992 18C1.66992 20.77 3.90992 23 6.66992 23C9.42992 23 11.6699 20.76 11.6699 18C11.6699 15.24 9.43992 13 6.66992 13ZM4.62991 15.96H6.66992C7.04992 15.96 7.34991 16.27 7.34991 16.64C7.34991 17.01 7.03992 17.32 6.66992 17.32H4.62991C4.24991 17.32 3.94992 17.01 3.94992 16.64C3.94992 16.27 4.24991 15.96 4.62991 15.96ZM8.70993 20.04H4.61993C4.23993 20.04 3.93991 19.73 3.93991 19.36C3.93991 18.99 4.24993 18.68 4.61993 18.68H8.70993C9.08993 18.68 9.38992 18.99 9.38992 19.36C9.38992 19.73 9.08993 20.04 8.70993 20.04Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 3H7.66992C4.66992 3 2.66992 4.5 2.66992 8V11.14C2.66992 11.87 3.41994 12.33 4.08994 12.04C5.18994 11.56 6.43991 11.38 7.74991 11.59C10.3699 12.02 12.5099 14.09 13.0399 16.69C13.1899 17.45 13.2099 18.19 13.1099 18.9C13.0299 19.49 13.5099 20.01 14.0999 20.01H17.6699C20.6699 20.01 22.6699 18.51 22.6699 15.01V8.00999C22.6699 4.49999 20.6699 3 17.6699 3Z" fill="currentColor" /><path d="M12.6697 11.87C11.8297 11.87 10.9797 11.61 10.3297 11.08L7.1997 8.57997C6.8797 8.31997 6.8197 7.84997 7.0797 7.52997C7.3397 7.20997 7.80969 7.14997 8.12969 7.40997L11.2597 9.90997C12.0197 10.52 13.3097 10.52 14.0697 9.90997L17.1997 7.40997C17.5197 7.14997 17.9997 7.19997 18.2497 7.52997C18.5097 7.84997 18.4597 8.32997 18.1297 8.57997L14.9997 11.08C14.3597 11.61 13.5097 11.87 12.6697 11.87Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66992 13C3.90992 13 1.66992 15.23 1.66992 18C1.66992 20.77 3.90992 23 6.66992 23C9.42992 23 11.6699 20.76 11.6699 18C11.6699 15.24 9.43992 13 6.66992 13ZM4.62992 15.96H6.66992C7.04992 15.96 7.34992 16.27 7.34992 16.64C7.34992 17.01 7.04992 17.32 6.66992 17.32H4.62992C4.24992 17.32 3.94992 17.01 3.94992 16.64C3.94992 16.27 4.24992 15.96 4.62992 15.96ZM8.70992 20.04H4.62992C4.24992 20.04 3.94992 19.73 3.94992 19.36C3.94992 18.99 4.25992 18.68 4.62992 18.68H8.71992C9.09992 18.68 9.39992 18.99 9.39992 19.36C9.39992 19.73 9.08992 20.04 8.70992 20.04Z" fill="currentColor" /><path d="M17.6699 3H7.66992C4.66992 3 2.66992 4.5 2.66992 8V11.14C2.66992 11.87 3.41992 12.33 4.08992 12.04C5.18992 11.56 6.43992 11.38 7.74992 11.59C10.3699 12.02 12.5099 14.09 13.0399 16.69C13.1899 17.45 13.2099 18.19 13.1099 18.9C13.0299 19.49 13.5099 20.01 14.0999 20.01H17.6699C20.6699 20.01 22.6699 18.51 22.6699 15.01V8C22.6699 4.5 20.6699 3 17.6699 3ZM18.1399 8.59L15.0099 11.09C14.3499 11.62 13.5099 11.88 12.6699 11.88C11.8299 11.88 10.9799 11.62 10.3299 11.09L7.19992 8.59C6.87992 8.33 6.82992 7.85 7.07992 7.53C7.33992 7.21 7.80992 7.15 8.12992 7.41L11.2599 9.91C12.0199 10.52 13.3099 10.52 14.0699 9.91L17.1999 7.41C17.5199 7.15 17.9999 7.2 18.2499 7.53C18.5099 7.85 18.4599 8.33 18.1399 8.59Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmsTracking as IconComponentType).keywords = [
  "sms",
  "tracking",
  "ms",
  "master of science",
  "samarium",
  "atomic number 62",
  "mms",
  "isa",
  "scm",
  "hsd",
  "cms",
  "trailing",
  "trace",
  "traces",
  "trail",
  "locator",
  "tailing",
  "positioning",
  "followup",
  "locate"
];

export default IconSmsTracking as IconComponentType;