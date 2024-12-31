import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAlignLeft: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.09961 19.25H16.8996C18.3996 19.25 18.9996 18.61 18.9996 17.02V15.98C18.9996 14.39 18.3996 13.75 16.8996 13.75H5.09961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.09961 5.25H11.8996C13.3996 5.25 13.9996 5.89 13.9996 7.48V8.52C13.9996 10.11 13.3996 10.75 11.8996 10.75H5.09961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 1.99023V21.9902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.3809 15.98V17.02C19.3809 18.61 18.7809 19.25 17.2609 19.25H5.38086V13.75H17.2609C18.7809 13.75 19.3809 14.39 19.3809 15.98Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.3809 7.48V8.52C14.3809 10.11 13.7709 10.75 12.2609 10.75H5.38086V5.25H12.2609C13.7709 5.25 14.3809 5.89 14.3809 7.48Z" fill="currentColor" /><path d="M5.37912 22C4.96912 22 4.62912 21.66 4.62912 21.25V2.75C4.61912 2.33 4.95912 2 5.37912 2C5.79912 2 6.12912 2.34 6.12912 2.75V21.25C6.11912 21.66 5.78912 22 5.37912 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlignLeft as IconComponentType).keywords = [
  "align",
  "left",
  "line up",
  "adjust",
  "coordinate",
  "aline",
  "array",
  "alignment",
  "link",
  "combine",
  "integrate",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd"
];

export default IconAlignLeft as IconComponentType;