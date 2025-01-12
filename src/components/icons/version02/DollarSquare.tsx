import { FC } from 'react';

const IconDollarSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.3418 14.3298C9.3418 15.6198 10.3318 16.6598 11.5618 16.6598H14.0718C15.1418 16.6598 16.0118 15.7498 16.0118 14.6298C16.0118 13.4098 15.4818 12.9798 14.6918 12.6998L10.6618 11.2998C9.8718 11.0198 9.3418 10.5898 9.3418 9.36984C9.3418 8.24984 10.2118 7.33984 11.2818 7.33984H13.7918C15.0218 7.33984 16.0118 8.37984 16.0118 9.66984" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 6V18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M15.6699 22H9.66992C4.66992 22 2.66992 20 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H15.6699C20.6699 2 22.6699 4 22.6699 9V15C22.6699 20 20.6699 22 15.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M14.9301 12L13.4201 11.47V8.08H13.7801C14.5901 8.08 15.2501 8.79 15.2501 9.66C15.2501 10.07 15.5901 10.41 16.0001 10.41C16.4101 10.41 16.7501 10.07 16.7501 9.66C16.7501 7.96 15.4201 6.58 13.7801 6.58H13.4201V6C13.4201 5.59 13.0801 5.25 12.6701 5.25C12.2601 5.25 11.9201 5.59 11.9201 6V6.58H11.2701C9.79008 6.58 8.58008 7.83 8.58008 9.36C8.58008 11.15 9.62008 11.72 10.4101 12L11.9201 12.53V15.91H11.5601C10.7501 15.91 10.0901 15.2 10.0901 14.33C10.0901 13.92 9.75008 13.58 9.34008 13.58C8.93008 13.58 8.59008 13.92 8.59008 14.33C8.59008 16.03 9.92008 17.41 11.5601 17.41H11.9201V18C11.9201 18.41 12.2601 18.75 12.6701 18.75C13.0801 18.75 13.4201 18.41 13.4201 18V17.42H14.0701C15.5501 17.42 16.7601 16.17 16.7601 14.64C16.7501 12.84 15.7101 12.27 14.9301 12ZM10.9101 10.59C10.4001 10.41 10.0901 10.24 10.0901 9.37C10.0901 8.66 10.6201 8.09 11.2801 8.09H11.9301V10.95L10.9101 10.59ZM14.0701 15.92H13.4201V13.06L14.4301 13.41C14.9401 13.59 15.2501 13.76 15.2501 14.63C15.2501 15.34 14.7201 15.92 14.0701 15.92Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9218 8.07996V10.94L10.9118 10.59C10.4018 10.41 10.0918 10.24 10.0918 9.36996C10.0918 8.65996 10.6218 8.07996 11.2718 8.07996H11.9218Z" fill="currentColor" /><path d="M15.2519 14.6301C15.2519 15.3401 14.7219 15.9201 14.0719 15.9201H13.4219V13.0601L14.4319 13.4101C14.9419 13.5901 15.2519 13.7601 15.2519 14.6301Z" fill="currentColor" /><path d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.19C2.67188 19.83 4.84187 22 8.48187 22H16.8619C20.5019 22 22.6719 19.83 22.6719 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM14.9319 12C15.7119 12.27 16.7519 12.84 16.7519 14.63C16.7519 16.17 15.5519 17.42 14.0719 17.42H13.4219V18C13.4219 18.41 13.0819 18.75 12.6719 18.75C12.2619 18.75 11.9219 18.41 11.9219 18V17.42H11.5619C9.92188 17.42 8.59188 16.03 8.59188 14.33C8.59188 13.92 8.92188 13.58 9.34188 13.58C9.75187 13.58 10.0919 13.92 10.0919 14.33C10.0919 15.21 10.7519 15.92 11.5619 15.92H11.9219V12.53L10.4119 12C9.63188 11.73 8.59188 11.16 8.59188 9.37C8.59188 7.83 9.79188 6.58 11.2719 6.58H11.9219V6C11.9219 5.59 12.2619 5.25 12.6719 5.25C13.0819 5.25 13.4219 5.59 13.4219 6V6.58H13.7819C15.4219 6.58 16.7519 7.97 16.7519 9.67C16.7519 10.08 16.4219 10.42 16.0019 10.42C15.5919 10.42 15.2519 10.08 15.2519 9.67C15.2519 8.79 14.5919 8.08 13.7819 8.08H13.4219V11.47L14.9319 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDollarSquare as IconComponent).keywords = [
  "dollar",
  "square",
  "dollar bill",
  "dollar sign",
  "buck",
  "clam",
  "dollar mark",
  "one dollar bill",
  "loonie",
  "dime",
  "penny",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconDollarSquare as IconComponent;