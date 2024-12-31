import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconVolumeCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.00077V11.0008C1 13.0008 2 14.0008 4 14.0008H5.43C5.8 14.0008 6.17 14.1108 6.49 14.3008L9.41 16.1308C11.93 17.7108 14 16.5608 14 13.5908V4.41077C14 1.43077 11.93 0.290766 9.41 1.87077L6.49 3.70077C6.17 3.89077 5.8 4.00077 5.43 4.00077H4C2 4.00077 1 5.00077 1 7.00077Z" stroke="currentColor" strokeWidth="1.5" /><g opacity={duotone ? "0.4" : "1"}><path d="M20.9991 10.961L17.0391 7.00098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.96 7.04102L17 11.001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.5295 13.4202L21.0795 11.9702L22.4795 10.5702C22.7695 10.2802 22.7695 9.80018 22.4795 9.51018C22.1895 9.22018 21.7095 9.22018 21.4195 9.51018L20.0195 10.9102L18.5695 9.46018C18.2795 9.17018 17.7995 9.17018 17.5095 9.46018C17.2195 9.75018 17.2195 10.2302 17.5095 10.5202L18.9595 11.9702L17.4695 13.4602C17.1795 13.7502 17.1795 14.2302 17.4695 14.5202C17.6195 14.6702 17.8095 14.7402 17.9995 14.7402C18.1895 14.7402 18.3795 14.6702 18.5295 14.5202L20.0195 13.0302L21.4695 14.4802C21.6195 14.6302 21.8095 14.7002 21.9995 14.7002C22.1895 14.7002 22.3795 14.6302 22.5295 14.4802C22.8195 14.1902 22.8195 13.7202 22.5295 13.4202Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.75 7.41021V16.5902C15.75 18.3102 15.13 19.6002 14.02 20.2202C13.57 20.4702 13.07 20.5902 12.55 20.5902C11.75 20.5902 10.89 20.3202 10.01 19.7702L7.09 17.9402C6.89 17.8202 6.66 17.7502 6.43 17.7502H5.5V6.25021H6.43C6.66 6.25021 6.89 6.18021 7.09 6.06021L10.01 4.23021C11.47 3.32021 12.9 3.16021 14.02 3.78021C15.13 4.40021 15.75 5.69021 15.75 7.41021Z" fill="currentColor" /><path d="M5.5 6.25V17.75H5C2.58 17.75 1.25 16.42 1.25 14V10C1.25 7.58 2.58 6.25 5 6.25H5.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeCross as IconComponentType).keywords = [
  "volume",
  "cross",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization"
];

export default IconVolumeCross as IconComponentType;