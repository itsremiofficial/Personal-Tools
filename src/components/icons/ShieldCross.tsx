import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconShieldCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V7.12006C20.6102 5.89006 19.6702 4.53006 18.5202 4.10006L13.5302 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M14.1504 13.4404L9.90039 9.19043" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.0996 9.24023L9.84961 13.4902" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.9608 2.06008L5.46078 4.12008C4.41078 4.52008 3.55078 5.76008 3.55078 6.89008V14.9901C3.55078 15.8001 4.08078 16.8701 4.73078 17.3501L10.2308 21.4601C11.2008 22.1901 12.7908 22.1901 13.7608 21.4601L19.2608 17.3501C19.9108 16.8601 20.4408 15.8001 20.4408 14.9901V6.89008C20.4408 5.77008 19.5808 4.52008 18.5308 4.13008L13.0308 2.07008C12.4708 1.85008 11.5308 1.85008 10.9608 2.06008Z" fill="currentColor" /><path d="M14.6808 12.9099L13.0908 11.3199L14.6408 9.76989C14.9308 9.47989 14.9308 8.99989 14.6408 8.70989C14.3508 8.41989 13.8708 8.41989 13.5808 8.70989L12.0308 10.2599L10.4408 8.66989C10.1508 8.37989 9.67078 8.37989 9.38078 8.66989C9.09078 8.95989 9.09078 9.43989 9.38078 9.72989L10.9708 11.3199L9.33078 12.9599C9.04078 13.2499 9.04078 13.7299 9.33078 14.0199C9.48078 14.1699 9.67078 14.2399 9.86078 14.2399C10.0508 14.2399 10.2408 14.1699 10.3908 14.0199L12.0308 12.3799L13.6208 13.9699C13.7708 14.1199 13.9608 14.1899 14.1508 14.1899C14.3408 14.1899 14.5308 14.1199 14.6808 13.9699C14.9708 13.6699 14.9708 13.1999 14.6808 12.9099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldCross as IconComponentType).keywords = [
  "shield",
  "cross",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization"
];

export default IconShieldCross as IconComponentType;