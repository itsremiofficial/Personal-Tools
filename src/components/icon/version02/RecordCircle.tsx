import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRecordCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6695 16.23C15.0056 16.23 16.8995 14.3362 16.8995 12C16.8995 9.66382 15.0056 7.76999 12.6695 7.76999C10.3333 7.76999 8.43945 9.66382 8.43945 12C8.43945 14.3362 10.3333 16.23 12.6695 16.23Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z" fill="currentColor" /><path d="M12.6695 16.23C15.0056 16.23 16.8995 14.3362 16.8995 12C16.8995 9.66386 15.0056 7.77002 12.6695 7.77002C10.3333 7.77002 8.43945 9.66386 8.43945 12C8.43945 14.3362 10.3333 16.23 12.6695 16.23Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6396 2C7.11965 2 2.63965 6.48 2.63965 12C2.63965 17.52 7.11965 22 12.6396 22C18.1596 22 22.6396 17.52 22.6396 12C22.6396 6.48 18.1696 2 12.6396 2ZM12.6696 16.23C10.3296 16.23 8.43965 14.34 8.43965 12C8.43965 9.66 10.3296 7.77 12.6696 7.77C15.0096 7.77 16.8996 9.66 16.8996 12C16.8996 14.34 15.0096 16.23 12.6696 16.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRecordCircle as IconComponentType).keywords = [
  "record",
  "circle",
  "phonograph record",
  "book",
  "register",
  "read",
  "disk",
  "disc",
  "show",
  "memorialize",
  "commemorate",
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

export default IconRecordCircle as IconComponentType;