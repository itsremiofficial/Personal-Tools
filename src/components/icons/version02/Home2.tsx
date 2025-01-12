import { FC } from 'react';

const IconHome2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.68992 2.83999L4.29992 7.03999C3.39992 7.73999 2.66992 9.22999 2.66992 10.36V17.77C2.66992 20.09 4.55992 21.99 6.87992 21.99H18.4599C20.7799 21.99 22.6699 20.09 22.6699 17.78V10.5C22.6699 9.28999 21.8599 7.73999 20.8699 7.04999L14.6899 2.71999C13.2899 1.73999 11.0399 1.78999 9.68992 2.83999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M12.6699 17.99V14.99" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.7102 6.82L14.9502 2.79C13.3802 1.69 10.9702 1.75 9.46016 2.92L4.45016 6.83C3.45016 7.61 2.66016 9.21 2.66016 10.47V17.37C2.66016 19.92 4.73016 22 7.28016 22H18.0602C20.6102 22 22.6802 19.93 22.6802 17.38V10.6C22.6802 9.25 21.8102 7.59 20.7102 6.82Z" fill="currentColor" /><path d="M12.6699 18.75C12.2599 18.75 11.9199 18.41 11.9199 18V15C11.9199 14.59 12.2599 14.25 12.6699 14.25C13.0799 14.25 13.4199 14.59 13.4199 15V18C13.4199 18.41 13.0799 18.75 12.6699 18.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7102 6.82L14.9502 2.79C13.3802 1.69 10.9702 1.75 9.46016 2.92L4.45016 6.83C3.45016 7.61 2.66016 9.21 2.66016 10.47V17.37C2.66016 19.92 4.73016 22 7.28016 22H18.0602C20.6102 22 22.6802 19.93 22.6802 17.38V10.6C22.6802 9.25 21.8102 7.59 20.7102 6.82ZM13.4202 18C13.4202 18.41 13.0802 18.75 12.6702 18.75C12.2602 18.75 11.9202 18.41 11.9202 18V15C11.9202 14.59 12.2602 14.25 12.6702 14.25C13.0802 14.25 13.4202 14.59 13.4202 15V18Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHome2 as IconComponent).keywords = [
  "home",
  "2",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconHome2 as IconComponent;