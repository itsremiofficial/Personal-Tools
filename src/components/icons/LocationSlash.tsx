import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLocationSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4209 12.9999C9.50086 12.4599 8.88086 11.4599 8.88086 10.3099C8.88086 8.58994 10.2709 7.18994 12.0009 7.18994C13.1509 7.18994 14.1509 7.80994 14.6909 8.73994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.9891 17.8101C4.1491 15.3001 2.8091 12.0901 3.6291 8.49011C5.2791 1.23011 14.5691 0.0601072 18.6791 4.98011" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.3806 8.5C21.5306 13.58 18.3706 17.88 15.6006 20.54C13.5906 22.48 10.4106 22.48 8.39062 20.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.8906 5.11L5.7906 18.21C3.9006 15.64 2.5406 12.36 3.3806 8.69C3.9006 6.38 5.1806 4.71 6.7606 3.61C8.3406 2.52 10.2306 2 12.0006 2C14.4406 2 17.1206 2.98 18.8906 5.11Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.7806 20.98C14.7206 22 13.3606 22.51 12.0006 22.51C10.6406 22.51 9.28063 21.99 8.22063 20.97C7.86063 20.63 7.50063 20.25 7.14062 19.86L20.0406 6.95996C20.2906 7.49996 20.4806 8.06996 20.6206 8.69996C21.7906 13.86 18.6306 18.22 15.7806 20.98Z" fill="currentColor" /><path d="M21.7705 2.23006C21.4705 1.92006 20.9905 1.92006 20.6905 2.23006L15.0205 7.90006L14.3005 8.62006C13.7605 7.88006 12.9105 7.44006 12.0005 7.44006C10.4205 7.44006 9.13055 8.73006 9.13055 10.3101C9.13055 11.2101 9.57055 12.0601 10.3105 12.6101L2.23055 20.6901C1.92055 20.9901 1.92055 21.4701 2.23055 21.7701C2.38055 21.9201 2.57055 22.0001 2.77055 22.0001C2.97055 22.0001 3.16055 21.9201 3.31055 21.7701L21.7705 3.31006C22.0805 3.01006 22.0805 2.53006 21.7705 2.23006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLocationSlash as IconComponentType).keywords = [
  "location",
  "slash",
  "position",
  "placement",
  "positioning",
  "localization",
  "localisation",
  "emplacement",
  "fix",
  "locating",
  "situating",
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

export default IconLocationSlash as IconComponentType;