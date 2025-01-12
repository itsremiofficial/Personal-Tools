import { FC } from 'react';

const IconCrop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.5699 19H19.6699V9.9C19.6699 6 18.6699 5 14.7699 5H5.66992V14.1C5.66992 18 6.66992 19 10.5699 19Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 5V2" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 5H2.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 19V22" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 19H22.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.61 4.83008H7.5C6.4 4.83008 5.5 5.73008 5.5 6.83008V13.9401C5.5 16.8301 7.84 19.1701 10.73 19.1701H17.84C18.94 19.1701 19.84 18.2701 19.84 17.1701V10.0601C19.84 7.17008 17.5 4.83008 14.61 4.83008Z" fill="currentColor" /><path d="M6.19992 2C5.77992 2 5.44992 2.34 5.44992 2.75V4.78H3.41992C3.00992 4.78 2.66992 5.11 2.66992 5.53C2.66992 5.95 3.00992 6.28 3.41992 6.28H6.19992C6.60992 6.28 6.94992 5.94 6.94992 5.53V2.75C6.94992 2.34 6.60992 2 6.19992 2Z" fill="currentColor" /><path d="M21.9201 17.72H19.1401C18.7301 17.72 18.3901 18.06 18.3901 18.47V21.25C18.3901 21.66 18.7301 22 19.1401 22C19.5501 22 19.8901 21.66 19.8901 21.25V19.22H21.9201C22.3301 19.22 22.6701 18.88 22.6701 18.47C22.6701 18.06 22.3301 17.72 21.9201 17.72Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.19992 2C5.77992 2 5.44992 2.34 5.44992 2.75V4.78H3.41992C3.00992 4.78 2.66992 5.11 2.66992 5.53C2.66992 5.95 3.00992 6.28 3.41992 6.28H6.19992C6.60992 6.28 6.94992 5.94 6.94992 5.53V2.75C6.94992 2.34 6.60992 2 6.19992 2Z" fill="currentColor" /><path d="M21.9201 17.72H19.1401C18.7301 17.72 18.3901 18.06 18.3901 18.47V21.25C18.3901 21.66 18.7301 22 19.1401 22C19.5501 22 19.8901 21.66 19.8901 21.25V19.22H21.9201C22.3301 19.22 22.6701 18.88 22.6701 18.47C22.6701 18.06 22.3301 17.72 21.9201 17.72Z" fill="currentColor" /><path d="M17.39 18.4701C17.39 17.5101 18.18 16.7201 19.14 16.7201H19.83V10.0501C19.83 7.16007 17.49 4.82007 14.6 4.82007H7.95V5.51007C7.95 6.47007 7.16 7.26007 6.2 7.26007H5.5V13.9301C5.5 16.8201 7.84 19.1601 10.73 19.1601H17.4V18.4701H17.39Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCrop as IconComponent).keywords = [
  "crop",
  "harvest",
  "cultivate",
  "pasture",
  "prune",
  "range",
  "snip",
  "dress",
  "lop",
  "graze"
];

export default IconCrop as IconComponent;