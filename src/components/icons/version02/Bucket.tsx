import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBucket: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.68004 18.0001L3.67004 13.9901C2.33004 12.6501 2.33004 11.32 3.67004 9.98004L10.35 3.30005L17.7 10.6501C18.07 11.0201 18.07 11.6201 17.7 11.9901L11.68 18.0101C10.36 19.3301 9.02004 19.3301 7.68004 18.0001Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.01953 1.94995L10.3595 3.28992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.74023 11.92L17.8602 11.26" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.66992 22H16.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.5199 15C19.5199 15 17.6699 17.01 17.6699 18.24C17.6699 19.26 18.4999 20.09 19.5199 20.09C20.5399 20.09 21.3699 19.26 21.3699 18.24C21.3699 17.01 19.5199 15 19.5199 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9798 11.25C17.9998 11.51 17.9098 11.78 17.7098 11.98L11.6898 18C10.3598 19.33 9.01978 19.33 7.67978 18L3.66978 13.99C2.98978 13.3 2.64978 12.61 2.66978 11.92H2.73978L17.8598 11.26L17.9798 11.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.7099 10.6399L10.3599 3.28989L9.48992 2.41989C9.19992 2.12989 8.71992 2.12989 8.42992 2.41989C8.13992 2.70989 8.13992 3.18989 8.42992 3.47989L9.29992 4.34989L3.66992 9.97989C3.02992 10.6199 2.68992 11.2699 2.66992 11.9199H2.73992L17.8599 11.2599L17.9799 11.2499C17.9699 11.0299 17.8699 10.7999 17.7099 10.6399Z" fill="currentColor" /><path d="M16.6699 22.75H3.66992C3.25992 22.75 2.91992 22.41 2.91992 22C2.91992 21.59 3.25992 21.25 3.66992 21.25H16.6699C17.0799 21.25 17.4199 21.59 17.4199 22C17.4199 22.41 17.0799 22.75 16.6699 22.75Z" fill="currentColor" /><path d="M20.0199 14.7801C19.7599 14.5001 19.2799 14.5001 19.0199 14.7801C18.7099 15.1201 17.1699 16.86 17.1699 18.17C17.1699 19.47 18.2199 20.5201 19.5199 20.5201C20.8199 20.5201 21.8699 19.47 21.8699 18.17C21.8699 16.86 20.3299 15.1201 20.0199 14.7801Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7098 10.6399L10.3598 3.28989L9.48978 2.41989C9.19978 2.12989 8.71978 2.12989 8.42978 2.41989C8.13978 2.70989 8.13978 3.18989 8.42978 3.47989L9.29978 4.34989L3.66978 9.97989C3.02978 10.6199 2.68978 11.2699 2.66978 11.9199C2.64978 12.6099 2.98978 13.2999 3.66978 13.9899L7.67978 17.9999C9.01978 19.3299 10.3598 19.3299 11.6898 17.9999L17.7098 11.9799C17.9098 11.7799 17.9998 11.5099 17.9798 11.2499C17.9698 11.0299 17.8698 10.7999 17.7098 10.6399Z" fill="currentColor" /><path d="M16.6699 22.75H3.66992C3.25992 22.75 2.91992 22.41 2.91992 22C2.91992 21.59 3.25992 21.25 3.66992 21.25H16.6699C17.0799 21.25 17.4199 21.59 17.4199 22C17.4199 22.41 17.0799 22.75 16.6699 22.75Z" fill="currentColor" /><path d="M20.0199 14.7801C19.7599 14.5001 19.2799 14.5001 19.0199 14.7801C18.7099 15.1201 17.1699 16.8501 17.1699 18.1701C17.1699 19.4701 18.2199 20.5201 19.5199 20.5201C20.8199 20.5201 21.8699 19.4701 21.8699 18.1701C21.8699 16.8601 20.3299 15.1201 20.0199 14.7801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBucket as IconComponentType).keywords = [
  "bucket",
  "pail",
  "bucketful",
  "tub",
  "basin",
  "boiler",
  "spade",
  "basket",
  "trough",
  "shovel"
];

export default IconBucket as IconComponentType;