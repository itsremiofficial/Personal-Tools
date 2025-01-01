import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconShieldSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5902 10.5501V7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.1402 21.7401 11.0702 22.0001 12.0002 22.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.9955 21H21.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.96078 2.10989L4.46078 4.16989C3.41078 4.56989 2.55078 5.80989 2.55078 6.93989V15.0399C2.55078 15.8499 3.08078 16.9199 3.73078 17.3999L9.23078 21.5099C10.2008 22.2399 11.7908 22.2399 12.7608 21.5099L18.2608 17.3999C18.9108 16.9099 19.4408 15.8499 19.4408 15.0399V6.93989C19.4408 5.81989 18.5808 4.56988 17.5308 4.17988L12.0308 2.11989C11.4708 1.89989 10.5308 1.89989 9.96078 2.10989Z" fill="currentColor" /><path d="M16 11.51C13.52 11.51 11.5 13.53 11.5 16.01C11.5 18.49 13.52 20.51 16 20.51C18.48 20.51 20.5 18.49 20.5 16.01C20.5 13.52 18.48 11.51 16 11.51Z" fill="currentColor" /><path d="M21 21.9999C20.73 21.9999 20.48 21.8899 20.29 21.7099C20.25 21.6599 20.2 21.6099 20.17 21.5499C20.13 21.4999 20.1 21.4399 20.08 21.3799C20.05 21.3199 20.03 21.2599 20.02 21.1999C20.01 21.1299 20 21.0699 20 20.9999C20 20.8699 20.03 20.7399 20.08 20.6199C20.13 20.4899 20.2 20.3899 20.29 20.2899C20.52 20.0599 20.87 19.9499 21.19 20.0199C21.26 20.0299 21.32 20.0499 21.38 20.0799C21.44 20.0999 21.5 20.1299 21.55 20.1699C21.61 20.1999 21.66 20.2499 21.71 20.2899C21.8 20.3899 21.87 20.4899 21.92 20.6199C21.97 20.7399 22 20.8699 22 20.9999C22 21.2599 21.89 21.5199 21.71 21.7099C21.66 21.7499 21.61 21.7899 21.55 21.8299C21.5 21.8699 21.44 21.8999 21.38 21.9199C21.32 21.9499 21.26 21.9699 21.19 21.9799C21.13 21.9899 21.06 21.9999 21 21.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldSearch as IconComponentType).keywords = [
  "shield",
  "search",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking"
];

export default IconShieldSearch as IconComponentType;