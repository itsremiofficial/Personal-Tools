import { FC } from 'react';

const IconReceipt2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39992 19.7C8.21992 18.82 9.46992 18.89 10.1899 19.85L11.1999 21.2C12.0099 22.27 13.3199 22.27 14.1299 21.2L15.1399 19.85C15.8599 18.89 17.1099 18.82 17.9299 19.7C19.7099 21.6 21.1599 20.97 21.1599 18.31V7.04C21.1699 3.01 20.2299 2 16.4499 2H8.88992C5.10992 2 4.16992 3.01 4.16992 7.04V18.3C4.16992 20.97 5.62992 21.59 7.39992 19.7Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.76599 11H8.77497" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.5684 11H17.0684" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.76599 7H8.77497" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.5684 7H17.0684" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.39992 19.7C8.21992 18.82 9.46992 18.89 10.1899 19.85L11.1999 21.2C12.0099 22.27 13.3199 22.27 14.1299 21.2L15.1399 19.85C15.8599 18.89 17.1099 18.82 17.9299 19.7C19.7099 21.6 21.1599 20.97 21.1599 18.31V7.04C21.1699 3.01 20.2299 2 16.4499 2H8.88992C5.10992 2 4.16992 3.01 4.16992 7.04V18.3C4.16992 20.97 5.62992 21.59 7.39992 19.7Z" fill="currentColor" /><path d="M16.9004 11.75H11.4004C10.9904 11.75 10.6504 11.41 10.6504 11C10.6504 10.59 10.9904 10.25 11.4004 10.25H16.9004C17.3104 10.25 17.6504 10.59 17.6504 11C17.6504 11.41 17.3104 11.75 16.9004 11.75Z" fill="currentColor" /><path d="M16.9004 7.75H11.4004C10.9904 7.75 10.6504 7.41 10.6504 7C10.6504 6.59 10.9904 6.25 11.4004 6.25H16.9004C17.3104 6.25 17.6504 6.59 17.6504 7C17.6504 7.41 17.3104 7.75 16.9004 7.75Z" fill="currentColor" /><path d="M8.4502 8C7.9002 8 7.4502 7.55 7.4502 7C7.4502 6.45 7.9002 6 8.4502 6C9.0002 6 9.45019 6.45 9.45019 7C9.45019 7.55 9.0002 8 8.4502 8Z" fill="currentColor" /><path d="M8.4502 12C7.9002 12 7.4502 11.55 7.4502 11C7.4502 10.45 7.9002 10 8.4502 10C9.0002 10 9.45019 10.45 9.45019 11C9.45019 11.55 9.0002 12 8.4502 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4519 2H8.89188C5.11188 2 4.17188 3.01 4.17188 7.04V18.3C4.17188 20.96 5.63188 21.59 7.40188 19.69L7.41187 19.68C8.23187 18.81 9.48188 18.88 10.1919 19.83L11.2019 21.18C12.0119 22.25 13.3219 22.25 14.1319 21.18L15.1419 19.83C15.8619 18.87 17.1119 18.8 17.9319 19.68C19.7119 21.58 21.1619 20.95 21.1619 18.29V7.04C21.1719 3.01 20.2319 2 16.4519 2ZM8.45188 12C7.90188 12 7.45188 11.55 7.45188 11C7.45188 10.45 7.90188 10 8.45188 10C9.00188 10 9.45187 10.45 9.45187 11C9.45187 11.55 9.00188 12 8.45188 12ZM8.45188 8C7.90188 8 7.45188 7.55 7.45188 7C7.45188 6.45 7.90188 6 8.45188 6C9.00188 6 9.45187 6.45 9.45187 7C9.45187 7.55 9.00188 8 8.45188 8ZM16.9019 11.75H11.4019C10.9919 11.75 10.6519 11.41 10.6519 11C10.6519 10.59 10.9919 10.25 11.4019 10.25H16.9019C17.3119 10.25 17.6519 10.59 17.6519 11C17.6519 11.41 17.3119 11.75 16.9019 11.75ZM16.9019 7.75H11.4019C10.9919 7.75 10.6519 7.41 10.6519 7C10.6519 6.59 10.9919 6.25 11.4019 6.25H16.9019C17.3119 6.25 17.6519 6.59 17.6519 7C17.6519 7.41 17.3119 7.75 16.9019 7.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceipt2 as IconComponent).keywords = [
  "receipt",
  "2",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
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

export default IconReceipt2 as IconComponent;