import { FC } from 'react';

const IconReceiptSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1699 11.3V7.04001C21.1699 3.01001 20.2299 2 16.4499 2H8.88992C5.10992 2 4.16992 3.01001 4.16992 7.04001V18.3C4.16992 20.96 5.62993 21.59 7.39993 19.69L7.40991 19.68C8.22991 18.81 9.47991 18.88 10.1899 19.83L11.1999 21.18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.8699 21.4C20.6372 21.4 22.0699 19.9673 22.0699 18.2C22.0699 16.4327 20.6372 15 18.8699 15C17.1026 15 15.6699 16.4327 15.6699 18.2C15.6699 19.9673 17.1026 21.4 18.8699 21.4Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 22L21.6699 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 7H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 11H15.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.40018 19.7C8.22018 18.82 9.47015 18.89 10.1902 19.85L11.2002 21.2C12.0102 22.27 13.3202 22.27 14.1302 21.2L15.1402 19.85C15.8602 18.89 17.1102 18.82 17.9302 19.7C19.7102 21.6 21.1602 20.97 21.1602 18.31V7.04999C21.1602 3.01999 20.2202 2.01001 16.4402 2.01001H8.88016C5.10016 2.01001 4.16016 3.01999 4.16016 7.04999V18.31C4.17016 20.97 5.63018 21.59 7.40018 19.7Z" fill="currentColor" /><path d="M16.3298 13.47L15.5898 12.73C15.9698 12.15 16.1998 11.45 16.1998 10.7C16.1998 8.66001 14.5398 7 12.4998 7C10.4598 7 8.7998 8.66001 8.7998 10.7C8.7998 12.74 10.4598 14.4 12.4998 14.4C13.2498 14.4 13.9498 14.17 14.5298 13.79L15.2698 14.53C15.4198 14.68 15.6098 14.75 15.7998 14.75C15.9898 14.75 16.1798 14.68 16.3298 14.53C16.6198 14.24 16.6198 13.76 16.3298 13.47Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4519 2H8.89188C5.11188 2 4.17188 3.01 4.17188 7.04V18.3C4.17188 20.96 5.63188 21.59 7.40188 19.69L7.41187 19.68C8.23187 18.81 9.48188 18.88 10.1919 19.83L11.2019 21.18C12.0119 22.25 13.3219 22.25 14.1319 21.18L15.1419 19.83C15.8619 18.87 17.1119 18.8 17.9319 19.68C19.7119 21.58 21.1619 20.95 21.1619 18.29V7.04C21.1719 3.01 20.2319 2 16.4519 2ZM16.3319 14.53C16.1819 14.68 15.9919 14.75 15.8019 14.75C15.6119 14.75 15.4219 14.68 15.2719 14.53L14.5319 13.79C13.9519 14.17 13.2519 14.4 12.5019 14.4C10.4619 14.4 8.80188 12.74 8.80188 10.7C8.80188 8.66 10.4519 7 12.5019 7C14.5519 7 16.2019 8.66 16.2019 10.7C16.2019 11.45 15.9719 12.15 15.5919 12.73L16.3319 13.47C16.6219 13.76 16.6219 14.24 16.3319 14.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiptSearch as IconComponent).keywords = [
  "receipt",
  "search",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking"
];

export default IconReceiptSearch as IconComponent;