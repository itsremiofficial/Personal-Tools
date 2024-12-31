import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPath: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3195_3381)"><path d="M19.7901 7.27009L16.7601 4.24009C15.6101 3.09009 14.0401 3.15009 13.2701 4.38009L11.5801 7.05009L16.9801 12.4501L19.6501 10.7601C20.8001 10.0301 20.8701 8.35009 19.7901 7.27009Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.58 7.05045L7.64999 6.81045C5.45999 6.68045 4.68999 7.35045 4.44999 9.44045L3.46999 17.7604C3.25999 19.5104 4.52999 20.7704 6.26999 20.5604L14.59 19.5804C16.68 19.3304 17.44 18.5704 17.22 16.3804L16.99 12.4504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.60938 19.4199L7.63937 16.3799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.0205 10.6999L17.2205 12.4699L11.5605 6.80992L13.3205 4.00992C14.1405 2.71992 15.7805 2.65992 16.9905 3.85992L20.1705 7.03992C21.3005 8.16992 21.2305 9.92992 20.0205 10.6999Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.7103 19.95L6.0003 20.98C5.4003 21.05 4.8603 20.96 4.4103 20.74C3.9203 20.5 3.5403 20.12 3.3003 19.63C3.0803 19.18 3.0003 18.64 3.0603 18.05L4.1003 9.32998C4.3503 7.14998 5.1603 6.43999 7.4603 6.56999L11.5803 6.81999L17.2403 12.48L17.4803 16.6C17.6903 18.9 16.9003 19.7 14.7103 19.95Z" fill="currentColor" /><path d="M7.97906 17.1502L4.39906 20.7302C3.90906 20.4902 3.52906 20.1102 3.28906 19.6202L6.87906 16.0302C7.18906 15.7302 7.68906 15.7302 7.98906 16.0302C8.29906 16.3502 8.29906 16.8402 7.97906 17.1502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPath as IconComponentType).keywords = [
  "path",
  "way",
  "route",
  "track",
  "way of life",
  "course",
  "pathway",
  "footway",
  "footpath",
  "trailhead"
];

export default IconPath as IconComponentType;