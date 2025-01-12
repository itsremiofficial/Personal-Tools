import { FC } from 'react';

const IconAlignRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.5699 19.25H7.76992C6.26992 19.25 5.66992 18.61 5.66992 17.02V15.98C5.66992 14.39 6.26992 13.75 7.76992 13.75H19.5699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.5699 5.25H12.7699C11.2699 5.25 10.6699 5.89 10.6699 7.48V8.52C10.6699 10.11 11.2699 10.75 12.7699 10.75H19.5699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.6699 1.98999V21.99" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.29004 15.98V17.02C5.29004 18.61 5.89004 19.25 7.41004 19.25H19.29V13.75H7.41004C5.89004 13.75 5.29004 14.39 5.29004 15.98Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.29 7.48V8.52C10.29 10.11 10.9 10.75 12.41 10.75H19.29V5.25H12.41C10.9 5.25 10.29 5.89 10.29 7.48Z" fill="currentColor" /><path d="M19.29 22C18.88 22 18.54 21.66 18.54 21.25V2.75C18.54 2.34 18.88 2 19.29 2C19.7 2 20.04 2.34 20.04 2.75V21.25C20.05 21.66 19.71 22 19.29 22Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.29004 15.98V17.02C5.29004 18.61 5.89004 19.25 7.41004 19.25H19.29V13.75H7.41004C5.89004 13.75 5.29004 14.39 5.29004 15.98Z" fill="currentColor" /><path d="M10.29 7.48V8.52C10.29 10.11 10.9 10.75 12.41 10.75H19.29V5.25H12.41C10.9 5.25 10.29 5.89 10.29 7.48Z" fill="currentColor" /><path d="M19.29 22C18.88 22 18.54 21.66 18.54 21.25V2.75C18.54 2.34 18.88 2 19.29 2C19.7 2 20.04 2.34 20.04 2.75V21.25C20.05 21.66 19.71 22 19.29 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlignRight as IconComponent).keywords = [
  "align",
  "right",
  "line up",
  "adjust",
  "coordinate",
  "aline",
  "array",
  "alignment",
  "link",
  "combine",
  "integrate",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune"
];

export default IconAlignRight as IconComponent;