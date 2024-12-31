import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMouse1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1497 12.8299L14.4197 13.4099C13.9397 13.5699 13.5697 13.9399 13.4097 14.4199L12.8297 16.1499C12.3397 17.6399 10.2397 17.6099 9.7797 16.1199L7.8297 9.83988C7.4497 8.58988 8.5997 7.43989 9.8297 7.81989L16.1197 9.76987C17.6097 10.2399 17.6297 12.3399 16.1497 12.8299Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M16.1497 12.8299L14.4197 13.4099C13.9397 13.5699 13.5697 13.9399 13.4097 14.4199L12.8297 16.1499C12.3397 17.6399 10.2397 17.6099 9.7797 16.1199L7.8297 9.83988C7.4497 8.58988 8.5997 7.43989 9.8297 7.81989L16.1197 9.76987C17.6097 10.2399 17.6297 12.3399 16.1497 12.8299Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMouse1 as IconComponentType).keywords = [
  "mouse",
  "1",
  "creep",
  "pussyfoot",
  "sneak",
  "steal",
  "murine",
  "rodent",
  "rat",
  "weasel",
  "frog",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour"
];

export default IconMouse1 as IconComponentType;