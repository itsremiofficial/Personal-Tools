import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSecurity: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.9099 11.1198C20.9099 16.0098 17.3599 20.5898 12.5099 21.9298C12.1799 22.0198 11.8198 22.0198 11.4898 21.9298C6.63984 20.5898 3.08984 16.0098 3.08984 11.1198V6.72979C3.08984 5.90979 3.70986 4.97979 4.47986 4.66979L10.0498 2.38982C11.2998 1.87982 12.7098 1.87982 13.9598 2.38982L19.5298 4.66979C20.2898 4.97979 20.9199 5.90979 20.9199 6.72979L20.9099 11.1198Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.0399 2.38982C11.2899 1.87982 12.6999 1.87982 13.9499 2.38982L19.5198 4.66979C20.2798 4.97979 20.9099 5.90979 20.9099 6.72979V11.1198C20.9099 16.0098 17.3599 20.5898 12.5099 21.9298C12.1799 22.0198 11.8198 22.0198 11.4898 21.9298C6.63984 20.5898 3.08984 16.0098 3.08984 11.1198" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.3301 5.67L6.59009 17.41C6.15009 17.85 5.41008 17.79 5.05008 17.27C3.81008 15.46 3.08008 13.32 3.08008 11.12V6.73C3.08008 5.91 3.70008 4.98 4.46008 4.67L10.0301 2.39C11.2901 1.87 12.6901 1.87 13.9501 2.39L17.9901 4.03999C18.6601 4.30999 18.8301 5.17 18.3301 5.67Z" fill="currentColor" /><path d="M19.27 7.04012C19.92 6.49012 20.91 6.96011 20.91 7.81011V11.1201C20.91 16.0101 17.36 20.5901 12.51 21.9301C12.18 22.0201 11.82 22.0201 11.48 21.9301C10.06 21.5301 8.74 20.8601 7.61 19.9801C7.13 19.6101 7.08001 18.9101 7.50001 18.4801C9.68001 16.2501 16.06 9.75012 19.27 7.04012Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSecurity as IconComponentType).keywords = [
  "security",
  "surety",
  "protection",
  "certificate",
  "security system",
  "security measures",
  "confidentiality",
  "safe",
  "secure",
  "peace"
];

export default IconSecurity as IconComponentType;