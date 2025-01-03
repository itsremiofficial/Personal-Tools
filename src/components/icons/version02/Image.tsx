import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconImage: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3498 16.96L19.2198 9.65001C18.1598 7.17001 16.2098 7.07001 14.8998 9.43001L13.0098 12.84C12.0498 14.57 10.2598 14.72 9.01985 13.17L8.79985 12.89C7.50985 11.27 5.68985 11.47 4.75985 13.32L3.03985 16.77C1.82985 19.17 3.57985 22 6.25985 22H19.0198C21.6198 22 23.3698 19.35 22.3498 16.96Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.63965 8C9.2965 8 10.6396 6.65685 10.6396 5C10.6396 3.34315 9.2965 2 7.63965 2C5.98279 2 4.63965 3.34315 4.63965 5C4.63965 6.65685 5.98279 8 7.63965 8Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6896 16.82L19.5596 9.5C18.9896 8.16 18.1396 7.4 17.1696 7.35C16.2096 7.3 15.2796 7.97 14.5696 9.25L12.6696 12.66C12.2696 13.38 11.6996 13.81 11.0796 13.86C10.4496 13.92 9.81957 13.59 9.30957 12.94L9.08957 12.66C8.37957 11.77 7.49957 11.34 6.59957 11.43C5.69957 11.52 4.92957 12.14 4.41957 13.15L2.68957 16.6C2.06957 17.85 2.12957 19.3 2.85957 20.48C3.58957 21.66 4.85957 22.37 6.24957 22.37H19.0096C20.3496 22.37 21.5996 21.7 22.3396 20.58C23.0996 19.46 23.2196 18.05 22.6896 16.82Z" fill="currentColor" /><path d="M7.63977 8.38C9.50649 8.38 11.0198 6.86673 11.0198 5C11.0198 3.13328 9.50649 1.62 7.63977 1.62C5.77304 1.62 4.25977 3.13328 4.25977 5C4.25977 6.86673 5.77304 8.38 7.63977 8.38Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6896 16.82L19.5596 9.50001C18.9896 8.16001 18.1396 7.40001 17.1696 7.35001C16.2096 7.30001 15.2796 7.97001 14.5696 9.25001L12.6696 12.66C12.2696 13.38 11.6996 13.81 11.0796 13.86C10.4496 13.92 9.81957 13.59 9.30957 12.94L9.08957 12.66C8.37957 11.77 7.49957 11.34 6.59957 11.43C5.69957 11.52 4.92957 12.14 4.41957 13.15L2.68957 16.6C2.06957 17.85 2.12957 19.3 2.85957 20.48C3.58957 21.66 4.85957 22.37 6.24957 22.37H19.0096C20.3496 22.37 21.5996 21.7 22.3396 20.58C23.0996 19.46 23.2196 18.05 22.6896 16.82Z" fill="currentColor" /><path d="M7.63977 8.38C9.50649 8.38 11.0198 6.86672 11.0198 5C11.0198 3.13327 9.50649 1.62 7.63977 1.62C5.77304 1.62 4.25977 3.13327 4.25977 5C4.25977 6.86672 5.77304 8.38 7.63977 8.38Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconImage as IconComponentType).keywords = [
  "image",
  "picture",
  "figure",
  "effigy",
  "simulacrum",
  "double",
  "prototype",
  "trope",
  "persona",
  "epitome"
];

export default IconImage as IconComponentType;