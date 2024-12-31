import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLocationTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="currentColor" strokeWidth="1.5" /><path opacity={duotone ? "0.4" : "1"} d="M9.25 11.5L10.75 13L14.75 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.6207 8.7C19.5807 4.07 15.5407 2 12.0007 2C12.0007 2 12.0007 2 11.9907 2C8.46073 2 4.43073 4.07 3.38073 8.69C2.20073 13.85 5.36073 18.22 8.22073 20.98C9.28073 22 10.6407 22.51 12.0007 22.51C13.3607 22.51 14.7207 22 15.7707 20.98C18.6307 18.22 21.7907 13.86 20.6207 8.7Z" fill="currentColor" /><path d="M10.7495 13.7499C10.5595 13.7499 10.3695 13.6799 10.2195 13.5299L8.71945 12.0299C8.42945 11.7399 8.42945 11.2599 8.71945 10.9699C9.00945 10.6799 9.48945 10.6799 9.77945 10.9699L10.7495 11.9399L14.2195 8.46994C14.5095 8.17994 14.9895 8.17994 15.2795 8.46994C15.5695 8.75994 15.5695 9.23994 15.2795 9.52994L11.2795 13.5299C11.1295 13.6799 10.9395 13.7499 10.7495 13.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLocationTick as IconComponentType).keywords = [
  "location",
  "tick",
  "position",
  "placement",
  "positioning",
  "localization",
  "localisation",
  "emplacement",
  "fix",
  "locating",
  "situating",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconLocationTick as IconComponentType;