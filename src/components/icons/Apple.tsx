import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconApple: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.5901 19.3601C19.1401 18.5201 19.3401 18.1001 19.7601 17.1601C16.6801 15.9901 16.1801 11.6001 19.2301 9.9201C18.3001 8.75011 16.9901 8.08008 15.7601 8.08008C14.8701 8.08008 14.2601 8.31008 13.7101 8.52008C13.2501 8.70008 12.8201 8.86008 12.3101 8.86008C11.7501 8.86008 11.2601 8.68009 10.7401 8.50009C10.1701 8.30009 9.58012 8.08008 8.84012 8.08008C7.45012 8.08008 5.98013 8.93009 5.04013 10.3701C3.73013 12.4101 3.95013 16.2401 6.08013 19.5101C6.84013 20.6801 7.86013 21.9901 9.19013 22.0001C9.74013 22.0101 10.1101 21.8401 10.5101 21.6601C10.9701 21.4601 11.4601 21.2301 12.3201 21.2301C13.1801 21.2201 13.6701 21.4501 14.1201 21.6601C14.5101 21.8401 14.8701 22.0001 15.4101 22.0001C16.7501 21.9901 17.8301 20.5301 18.5901 19.3601Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M16.0104 2.06982C16.1704 3.16982 15.7204 4.25981 15.1304 5.01981C14.5004 5.83981 13.4004 6.47982 12.3404 6.43982C12.1504 5.37982 12.6404 4.28981 13.2404 3.55981C13.9104 2.75981 15.0404 2.13982 16.0104 2.06982Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.0998 19.16C19.6898 18.26 19.9098 17.8 20.3598 16.79C17.0398 15.53 16.5098 10.8 19.7898 8.99C18.7898 7.73 17.3798 7 16.0498 7C15.0898 7 14.4298 7.25 13.8398 7.48C13.3398 7.67 12.8898 7.84 12.3298 7.84C11.7298 7.84 11.1998 7.65 10.6398 7.45C10.0398 7.23 9.39983 7 8.59983 7C7.10983 7 5.51983 7.91 4.50983 9.47C3.08983 11.67 3.33983 15.79 5.62983 19.31C6.44983 20.57 7.54984 21.98 8.97984 22C9.57984 22.01 9.96983 21.83 10.3998 21.64C10.8898 21.42 11.4198 21.18 12.3498 21.18C13.2798 21.17 13.7998 21.42 14.2898 21.64C14.7098 21.83 15.0898 22.01 15.6798 22C17.1198 21.98 18.2798 20.42 19.0998 19.16Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M15.8404 2C16.0004 3.1 15.5504 4.19 14.9604 4.95C14.3304 5.77 13.2304 6.41 12.1704 6.37C11.9804 5.31 12.4704 4.22 13.0704 3.49C13.7404 2.69 14.8704 2.07 15.8404 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconApple as IconComponentType).keywords = [
  "apple",
  "malus pumila",
  "orchard apple tree",
  "pomme",
  "potato",
  "tator",
  "fruit",
  "vegetable",
  "tree",
  "russet"
];

export default IconApple as IconComponentType;