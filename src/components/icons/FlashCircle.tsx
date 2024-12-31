import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFlashCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.67938 11.9098L10.3294 12.3198L9.37939 16.1599C9.15939 17.0599 9.59937 17.3598 10.3594 16.8298L15.5394 13.2398C16.1694 12.7998 16.0794 12.2898 15.3294 12.0998L13.6794 11.6898L14.6294 7.84981C14.8494 6.94981 14.4094 6.64983 13.6494 7.17983L8.46939 10.7699C7.83939 11.2099 7.92938 11.7198 8.67938 11.9098Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill="currentColor" /><path d="M15.2505 11.2999H13.5505V7.33993C13.5505 6.41993 13.0505 6.22993 12.4405 6.91993L12.0005 7.41993L8.28045 11.6499C7.77045 12.2299 7.98045 12.6999 8.75045 12.6999H10.4505V16.6599C10.4505 17.5799 10.9505 17.7699 11.5605 17.0799L12.0005 16.5799L15.7205 12.3499C16.2305 11.7699 16.0205 11.2999 15.2505 11.2999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFlashCircle as IconComponentType).keywords = [
  "flash",
  "circle",
  "twinkle",
  "twinkling",
  "glint",
  "flare",
  "blink",
  "wink",
  "scud",
  "trice",
  "loud",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconFlashCircle as IconComponentType;