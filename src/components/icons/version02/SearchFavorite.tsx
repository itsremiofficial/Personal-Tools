import { FC } from 'react';

const IconSearchFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6699 11.5C21.6699 16.75 17.4199 21 12.1699 21C6.91992 21 2.66992 16.75 2.66992 11.5C2.66992 6.25 6.91992 2 12.1699 2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 22L20.6699 20" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.1698 6.13008C14.8198 5.03008 15.2298 3.66008 16.3898 3.29008C16.9998 3.09008 17.7498 3.26008 18.1798 3.85008C18.5798 3.24008 19.3598 3.10008 19.9598 3.29008C21.1198 3.66008 21.5298 5.03008 21.1798 6.13008C20.6298 7.88008 18.7098 8.79008 18.1798 8.79008C17.6398 8.79008 15.7398 7.90008 15.1698 6.13008Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.1699 21C17.4166 21 21.6699 16.7467 21.6699 11.5C21.6699 6.25329 17.4166 2 12.1699 2C6.92322 2 2.66992 6.25329 2.66992 11.5C2.66992 16.7467 6.92322 21 12.1699 21Z" fill="currentColor" /><path d="M21.9695 22.0001C21.7895 22.0001 21.6095 21.9301 21.4795 21.8001L19.6195 19.9401C19.3495 19.6701 19.3495 19.2301 19.6195 18.9501C19.8895 18.6801 20.3295 18.6801 20.6095 18.9501L22.4695 20.8101C22.7395 21.0801 22.7395 21.5201 22.4695 21.8001C22.3295 21.9301 22.1495 22.0001 21.9695 22.0001Z" fill="currentColor" /><path d="M13.9399 8.88995C13.3099 8.68995 12.6398 8.80995 12.1598 9.17995C11.6698 8.80995 11.0199 8.68995 10.3899 8.88995C9.02985 9.32995 8.59985 10.8799 8.97985 12.0599C9.55985 13.8699 11.4698 14.8099 12.1598 14.8099C12.8298 14.8099 14.7799 13.8499 15.3398 12.0599C15.7298 10.8799 15.2999 9.32995 13.9399 8.88995Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9695 22.0001C21.7895 22.0001 21.6095 21.9301 21.4795 21.8001L19.6195 19.9401C19.3495 19.6701 19.3495 19.2301 19.6195 18.9501C19.8895 18.6801 20.3295 18.6801 20.6095 18.9501L22.4695 20.8101C22.7395 21.0801 22.7395 21.5201 22.4695 21.8001C22.3295 21.9301 22.1495 22.0001 21.9695 22.0001Z" fill="currentColor" /><path d="M12.1699 2C6.92992 2 2.66992 6.26 2.66992 11.5C2.66992 16.74 6.92992 21 12.1699 21C17.4099 21 21.6699 16.74 21.6699 11.5C21.6699 6.26 17.4099 2 12.1699 2ZM15.3499 12.06C14.7899 13.84 12.8399 14.81 12.1699 14.81C11.4799 14.81 9.56992 13.88 8.98992 12.06C8.60992 10.87 9.03992 9.32 10.3999 8.89C11.0199 8.69 11.6799 8.81 12.1699 9.18C12.6499 8.81 13.3199 8.69 13.9499 8.89C15.2999 9.33 15.7299 10.88 15.3499 12.06Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSearchFavorite as IconComponent).keywords = [
  "search",
  "favorite",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
  "favored",
  "favourite",
  "preferred",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner"
];

export default IconSearchFavorite as IconComponent;