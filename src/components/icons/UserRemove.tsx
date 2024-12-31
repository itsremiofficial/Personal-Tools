import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUserRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.41016 22C3.41016 18.13 7.26015 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.0299 16.9399L16.9199 19.0499" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.9395 16.96L19.0594 19.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.0901 21.5C21.0901 21.78 20.8701 22 20.5901 22H3.41016C3.13016 22 2.91016 21.78 2.91016 21.5C2.91016 17.36 6.99015 14 12.0002 14C13.0302 14 14.0302 14.14 14.9502 14.41C14.3602 15.11 14.0002 16.02 14.0002 17C14.0002 17.75 14.2101 18.46 14.5801 19.06C14.7801 19.4 15.0401 19.71 15.3401 19.97C16.0401 20.61 16.9702 21 18.0002 21C19.1202 21 20.1302 20.54 20.8502 19.8C21.0102 20.34 21.0901 20.91 21.0901 21.5Z" fill="currentColor" /><path d="M21.8807 16.04C21.7807 15.65 21.6207 15.26 21.4007 14.91C21.2507 14.65 21.0507 14.4 20.8307 14.17C20.1107 13.45 19.1707 13.06 18.2107 13.01C17.1207 12.94 16.0107 13.34 15.1707 14.17C14.3807 14.96 13.9807 16.01 14.0007 17.06C14.0107 18.06 14.4107 19.06 15.1707 19.83C15.7007 20.36 16.3507 20.71 17.0407 20.87C17.4207 20.97 17.8207 21.01 18.2207 20.98C19.1707 20.94 20.1007 20.56 20.8307 19.83C21.8607 18.8 22.2107 17.35 21.8807 16.04ZM19.6007 18.6C19.3107 18.89 18.8307 18.89 18.5407 18.6L17.9907 18.05L17.4607 18.58C17.1707 18.87 16.6907 18.87 16.4007 18.58C16.1107 18.28 16.1107 17.81 16.4007 17.52L16.9307 16.99L16.4207 16.49C16.1307 16.19 16.1307 15.72 16.4207 15.42C16.7207 15.13 17.1907 15.13 17.4907 15.42L17.9907 15.93L18.5207 15.4C18.8107 15.11 19.2807 15.11 19.5807 15.4C19.8707 15.69 19.8707 16.17 19.5807 16.46L19.0507 16.99L19.6007 17.54C19.8907 17.83 19.8907 18.31 19.6007 18.6Z" fill="currentColor" /><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserRemove as IconComponentType).keywords = [
  "user",
  "remove",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconUserRemove as IconComponentType;