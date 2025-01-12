import { FC } from 'react';

const IconDiscountCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 15L15.6699 9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.1644 14.5H15.1734" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.1644 9.5H10.1734" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M15.6702 16C15.1102 16 14.6602 15.55 14.6602 15C14.6602 14.45 15.1102 14 15.6602 14C16.2102 14 16.6602 14.45 16.6602 15C16.6602 15.55 16.2202 16 15.6702 16Z" fill="currentColor" /><path d="M9.67993 10C9.11993 10 8.66992 9.55 8.66992 9C8.66992 8.45 9.11992 8 9.66992 8C10.2199 8 10.6699 8.45 10.6699 9C10.6699 9.55 10.2299 10 9.67993 10Z" fill="currentColor" /><path d="M9.6694 15.75C9.4794 15.75 9.28938 15.68 9.13938 15.53C8.84938 15.24 8.84938 14.7599 9.13938 14.4699L15.1394 8.46994C15.4294 8.17994 15.9094 8.17994 16.1994 8.46994C16.4894 8.75994 16.4894 9.24 16.1994 9.53L10.1994 15.53C10.0494 15.68 9.8594 15.75 9.6694 15.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6719 2C7.15188 2 2.67188 6.48 2.67188 12C2.67188 17.52 7.15188 22 12.6719 22C18.1919 22 22.6719 17.52 22.6719 12C22.6719 6.48 18.1919 2 12.6719 2ZM9.67188 8C10.2219 8 10.6719 8.45 10.6719 9C10.6719 9.55 10.2319 10 9.67188 10C9.12187 10 8.67188 9.55 8.67188 9C8.67188 8.45 9.12187 8 9.67188 8ZM10.2019 15.53C10.0519 15.68 9.86188 15.75 9.67188 15.75C9.48187 15.75 9.29188 15.68 9.14188 15.53C8.85188 15.24 8.85188 14.76 9.14188 14.47L15.1419 8.47C15.4319 8.18 15.9119 8.18 16.2019 8.47C16.4919 8.76 16.4919 9.24 16.2019 9.53L10.2019 15.53ZM15.6719 16C15.1119 16 14.6619 15.55 14.6619 15C14.6619 14.45 15.1119 14 15.6619 14C16.2119 14 16.6619 14.45 16.6619 15C16.6619 15.55 16.2219 16 15.6719 16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDiscountCircle as IconComponent).keywords = [
  "discount",
  "circle",
  "bank discount",
  "discount rate",
  "rebate",
  "deduction",
  "dismiss",
  "brush aside",
  "brush off",
  "ignore",
  "disregard",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconDiscountCircle as IconComponent;