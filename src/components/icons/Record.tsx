import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRecord: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.12 8.13L18.7 8.98L4.76 17.34C3.66 15.85 3 14 3 12C3 7.03 7.03 3 12 3C15.58 3 18.68 5.1 20.12 8.13Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.9999 12.0002C20.9999 16.9702 16.9699 21.0002 11.9999 21.0002C9.52992 21.0002 7.29992 20.0102 5.66992 18.3902L5.75992 18.3402L19.6999 9.98018L20.6299 9.43018C20.8699 10.2502 20.9999 11.1102 20.9999 12.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRecord as IconComponentType).keywords = [
  "record",
  "phonograph record",
  "book",
  "register",
  "read",
  "disk",
  "disc",
  "show",
  "memorialize",
  "commemorate"
];

export default IconRecord as IconComponentType;