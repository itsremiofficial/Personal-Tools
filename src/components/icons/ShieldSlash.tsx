import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconShieldSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.83984 20.0201L9.42984 21.2101C10.8398 22.2701 13.1598 22.2701 14.5698 21.2101L18.8698 18.0001C19.8198 17.2901 20.5998 15.7401 20.5998 14.5601V7.12012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.9802 4.34006C18.8302 4.25006 18.6702 4.17006 18.5102 4.10006L13.5202 2.23006C12.6902 1.92006 11.3302 1.92006 10.5002 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L5.34016 18.1401" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.3608 4.64009L5.83078 18.1701L4.73078 17.3501C4.08078 16.8601 3.55078 15.8001 3.55078 14.9801V6.89009C3.55078 5.76009 4.41078 4.52009 5.46078 4.12009L10.9608 2.06009C11.5308 1.85009 12.4708 1.85009 13.0408 2.06009L18.5408 4.12009C18.8308 4.23009 19.1108 4.41009 19.3608 4.64009Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.4491 6.89008V14.9801C20.4491 15.8001 19.9191 16.8601 19.2691 17.3501L13.7691 21.4601C12.7891 22.1801 11.2091 22.1801 10.2291 21.4601L7.53906 19.4601L20.4191 6.58008C20.4391 6.68008 20.4491 6.79008 20.4491 6.89008Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldSlash as IconComponentType).keywords = [
  "shield",
  "slash",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
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

export default IconShieldSlash as IconComponentType;