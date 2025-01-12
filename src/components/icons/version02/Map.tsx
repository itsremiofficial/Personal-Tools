import { FC } from 'react';

const IconMap: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.95996 7.77998V17.51C2.95996 19.41 4.30996 20.19 5.94996 19.25L8.29996 17.91C8.80996 17.62 9.65996 17.59 10.19 17.86L15.44 20.49C15.97 20.75 16.82 20.73 17.33 20.44L21.66 17.96C22.21 17.64 22.67 16.86 22.67 16.22V6.48998C22.67 4.58998 21.32 3.80998 19.68 4.74998L17.33 6.08998C16.82 6.37998 15.97 6.40998 15.44 6.13998L10.19 3.51998C9.65996 3.25998 8.80996 3.27998 8.29996 3.56998L3.96996 6.04998C3.40996 6.36998 2.95996 7.14998 2.95996 7.77998Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.22949 4V17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.4004 6.62012V20.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.22996 3.33984V17.6698C8.88996 17.6798 8.54996 17.7598 8.29996 17.9098L5.94996 19.2498C4.30996 20.1898 2.95996 19.4098 2.95996 17.5098V7.77984C2.95996 7.14984 3.40996 6.36984 3.96996 6.04984L8.29996 3.56984C8.54996 3.42984 8.88996 3.34984 9.22996 3.33984Z" fill="currentColor" /><path d="M16.3995 6.32994V20.6599C16.0495 20.6699 15.7095 20.6099 15.4395 20.4799L10.1895 17.8499C9.91949 17.7199 9.57949 17.6599 9.22949 17.6699V3.33994C9.57949 3.32994 9.91949 3.38994 10.1895 3.51994L15.4395 6.14994C15.7095 6.27994 16.0495 6.33994 16.3995 6.32994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6704 6.49006V16.2201C22.6704 16.8501 22.2204 17.6301 21.6604 17.9501L17.3304 20.4301C17.0804 20.5701 16.7404 20.6501 16.4004 20.6601V6.33006C16.7404 6.32006 17.0804 6.24006 17.3304 6.09006L19.6804 4.75006C21.3204 3.81006 22.6704 4.59006 22.6704 6.49006Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64965)"><path d="M8.29996 3.57018C8.47934 3.47233 8.66996 3.62286 8.66996 3.82719V17.383C8.66996 17.6063 8.51754 17.795 8.32016 17.8993C8.31339 17.9029 8.30666 17.9065 8.29996 17.9102L5.94996 19.2502C4.30996 20.1902 2.95996 19.4102 2.95996 17.5102V7.78018C2.95996 7.15018 3.40996 6.37018 3.96996 6.05018L8.29996 3.57018Z" fill="currentColor" /><path d="M15.3918 6.10241C15.5622 6.18676 15.6699 6.3604 15.6699 6.55047V19.7036C15.6699 20.0721 15.2849 20.314 14.9529 20.1541L10.7029 18.1065C10.5299 18.0231 10.4199 17.8481 10.4199 17.656V4.44571C10.4199 4.07486 10.8095 3.83306 11.1418 3.99765L15.3918 6.10241Z" fill="currentColor" /><path d="M22.6699 6.49006V16.2201C22.6699 16.8501 22.2199 17.6301 21.6599 17.9501L18.1685 19.951C17.8352 20.1421 17.4199 19.9014 17.4199 19.5172V6.33038C17.4199 6.15087 17.5162 5.98513 17.6721 5.89615L19.6799 4.75006C21.3199 3.81006 22.6699 4.59006 22.6699 6.49006Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMap as IconComponent).keywords = [
  "map",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting"
];

export default IconMap as IconComponent;