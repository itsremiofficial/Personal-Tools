import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVideoSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.63 7.58008C16.63 7.58008 16.66 6.63008 16.63 6.32008C16.46 4.28008 15.13 3.58008 12.52 3.58008H6.21C3.05 3.58008 2 4.63008 2 7.79008V16.2101C2 17.4701 2.38 18.7401 3.37 19.5501L4 20.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.7398 10.9502V16.2102C16.7398 19.3702 15.6898 20.4202 12.5298 20.4202H7.25977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.0002 6.74023V15.8102C22.0002 17.4802 20.8802 18.0602 19.5202 17.1002L16.7402 15.1502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.0195 2.18994L2.01953 22.1899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.65 6.56L4.2 20.01C2.8 19.12 2.25 17.53 2.25 16V8C2.25 4.58 3.58 3.25 7 3.25H13C15.89 3.25 17.29 4.2 17.65 6.56Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.7491 9.25V16C17.7491 16.08 17.7391 16.14 17.7391 16.21C17.7391 16.28 17.7291 16.35 17.7291 16.42H17.7391C17.6291 19.53 16.2791 20.75 12.9991 20.75H6.99906C6.74906 20.75 6.51906 20.74 6.28906 20.71L17.7491 9.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.7305 16.42C17.7305 16.35 17.7405 16.28 17.7405 16.21C17.7505 16.28 17.7505 16.35 17.7405 16.42H17.7305Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.7405 7.56982C17.7505 7.63982 17.7505 7.71982 17.7405 7.78982C17.7405 7.71982 17.7305 7.64982 17.7305 7.57982L17.7405 7.56982Z" fill="currentColor" /><path d="M22.7505 8.37998V15.62C22.7505 17.05 22.0605 17.62 21.6505 17.83C21.4605 17.93 21.1705 18.04 20.8005 18.04C20.3705 18.04 19.8305 17.9 19.2105 17.46L17.7405 16.42H17.7305C17.7305 16.35 17.7405 16.28 17.7405 16.21C17.7405 16.14 17.7505 16.08 17.7505 16V9.24998L21.0205 5.97998C21.2905 5.99998 21.5005 6.07998 21.6505 6.16998C22.0605 6.37998 22.7505 6.94998 22.7505 8.37998Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoSlash as IconComponentType).keywords = [
  "video",
  "slash",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
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

export default IconVideoSlash as IconComponentType;