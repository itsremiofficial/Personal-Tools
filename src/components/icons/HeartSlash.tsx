import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHeartSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.10999 17.4998C3.89999 15.4298 2 12.4798 2 8.67981C2 5.58981 4.49 3.08984 7.56 3.08984C9.38 3.08984 10.99 3.96983 12 5.32983C13.01 3.96983 14.63 3.08984 16.44 3.08984C17.59 3.08984 18.66 3.4398 19.55 4.0498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.7395 7C21.9095 7.53 21.9995 8.1 21.9995 8.69C21.9995 15.69 15.5195 19.82 12.6195 20.82C12.2795 20.94 11.7195 20.94 11.3795 20.82C10.7295 20.6 9.90953 20.22 9.01953 19.69" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.0009 8.69008C22.0009 9.88008 21.8108 10.9801 21.4808 12.0001C19.9008 17.0001 15.0309 19.9901 12.6209 20.8101C12.2809 20.9301 11.7209 20.9301 11.3809 20.8101C10.7409 20.5901 9.93085 20.2201 9.06085 19.7001C8.50085 19.3701 8.41085 18.5901 8.87085 18.1301L20.1509 6.85008C20.6909 6.31008 21.6409 6.54007 21.8309 7.28007C21.9409 7.73007 22.0009 8.20008 22.0009 8.69008Z" fill="currentColor" /><path d="M22.5295 1.46994C22.2395 1.17994 21.7595 1.17994 21.4695 1.46994L19.1295 3.80994C18.3395 3.35994 17.4195 3.09995 16.4395 3.09995C14.6295 3.09995 13.0095 3.97993 11.9995 5.32993C10.9895 3.97993 9.36948 3.09995 7.55948 3.09995C4.48948 3.09995 1.99948 5.59994 1.99948 8.68994C1.99948 9.87994 2.1895 10.9799 2.5195 11.9999C3.1695 14.0699 4.3895 15.8 5.7695 17.17L1.46945 21.4699C1.17945 21.7599 1.17945 22.2399 1.46945 22.5299C1.61945 22.6799 1.80948 22.7499 1.99948 22.7499C2.18948 22.7499 2.37951 22.6799 2.52951 22.5299L22.5295 2.52994C22.8195 2.23994 22.8195 1.75994 22.5295 1.46994Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeartSlash as IconComponentType).keywords = [
  "heart",
  "slash",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconHeartSlash as IconComponentType;