import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLocationCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="currentColor" strokeWidth="1.5" /><g opacity={duotone ? "0.4" : "1"}><path d="M13.9991 12.96L10.0391 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.96 9.04004L10 13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.5295 12.4202L13.0795 10.9702L14.4795 9.57018C14.7695 9.28018 14.7695 8.80018 14.4795 8.51018C14.1895 8.22018 13.7095 8.22018 13.4195 8.51018L12.0195 9.91018L10.5695 8.46018C10.2795 8.17018 9.79945 8.17018 9.50945 8.46018C9.21945 8.75018 9.21945 9.23018 9.50945 9.52018L10.9595 10.9702L9.46945 12.4602C9.17945 12.7502 9.17945 13.2302 9.46945 13.5202C9.61945 13.6702 9.80945 13.7402 9.99945 13.7402C10.1895 13.7402 10.3795 13.6702 10.5295 13.5202L12.0195 12.0302L13.4695 13.4802C13.6195 13.6302 13.8095 13.7002 13.9995 13.7002C14.1895 13.7002 14.3795 13.6302 14.5295 13.4802C14.8195 13.1902 14.8195 12.7202 14.5295 12.4202Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.6207 8.7C19.5807 4.07 15.5407 2 12.0007 2C12.0007 2 12.0007 2 11.9907 2C8.46073 2 4.43073 4.07 3.38073 8.69C2.20073 13.85 5.36073 18.22 8.22073 20.98C9.28073 22 10.6407 22.51 12.0007 22.51C13.3607 22.51 14.7207 22 15.7707 20.98C18.6307 18.22 21.7907 13.86 20.6207 8.7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLocationCross as IconComponentType).keywords = [
  "location",
  "cross",
  "position",
  "placement",
  "positioning",
  "localization",
  "localisation",
  "emplacement",
  "fix",
  "locating",
  "situating",
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

export default IconLocationCross as IconComponentType;