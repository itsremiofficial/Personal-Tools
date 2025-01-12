import { FC } from 'react';

const IconArrowRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1001 5.93005L21.1701 12.0001L15.1001 18.0701" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 12H20.9999" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M19.1999 11.47L14.9099 7.18002C14.6199 6.89002 14.1399 6.89002 13.8499 7.18002C13.5599 7.47002 13.5599 7.95002 13.8499 8.24002L16.8599 11.25H6.66992C6.25992 11.25 5.91992 11.59 5.91992 12C5.91992 12.41 6.25992 12.75 6.66992 12.75H16.8599L13.8499 15.76C13.5599 16.05 13.5599 16.53 13.8499 16.82C13.9999 16.97 14.1899 17.04 14.3799 17.04C14.5699 17.04 14.7599 16.97 14.9099 16.82L19.1999 12.53C19.3399 12.39 19.4199 12.2 19.4199 12C19.4199 11.8 19.3399 11.61 19.1999 11.47Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM19.1999 12.53L14.9099 16.82C14.7599 16.97 14.5699 17.04 14.3799 17.04C14.1899 17.04 13.9999 16.97 13.8499 16.82C13.5599 16.53 13.5599 16.05 13.8499 15.76L16.8599 12.75H6.66992C6.25992 12.75 5.91992 12.41 5.91992 12C5.91992 11.59 6.25992 11.25 6.66992 11.25H16.8599L13.8499 8.24C13.5599 7.95 13.5599 7.47 13.8499 7.18C14.1399 6.89 14.6199 6.89 14.9099 7.18L19.1999 11.47C19.3399 11.61 19.4199 11.8 19.4199 12C19.4199 12.2 19.3399 12.39 19.1999 12.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowRight as IconComponent).keywords = [
  "arrow",
  "right",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune"
];

export default IconArrowRight as IconComponent;