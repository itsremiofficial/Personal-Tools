import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconReceiptDisscount: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39992 19.7C8.21992 18.82 9.46992 18.89 10.1899 19.85L11.1999 21.2C12.0099 22.27 13.3199 22.27 14.1299 21.2L15.1399 19.85C15.8599 18.89 17.1099 18.82 17.9299 19.7C19.7099 21.6 21.1599 20.97 21.1599 18.31V7.04C21.1699 3.01 20.2299 2 16.4499 2H8.88992C5.10992 2 4.16992 3.01 4.16992 7.04V18.3C4.16992 20.97 5.62992 21.59 7.39992 19.7Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 13L15.6699 7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.6644 13H15.6734" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66443 7.5H9.67341" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.39992 19.7C8.21992 18.82 9.46992 18.89 10.1899 19.85L11.1999 21.2C12.0099 22.27 13.3199 22.27 14.1299 21.2L15.1399 19.85C15.8599 18.89 17.1099 18.82 17.9299 19.7C19.7099 21.6 21.1599 20.97 21.1599 18.31V7.04C21.1699 3.01 20.2299 2 16.4499 2H8.88992C5.10992 2 4.16992 3.01 4.16992 7.04V18.3C4.16992 20.97 5.62992 21.59 7.39992 19.7Z" fill="currentColor" /><path d="M15.6699 14C15.1099 14 14.6699 13.55 14.6699 13C14.6699 12.45 15.1199 12 15.6699 12C16.2199 12 16.6699 12.45 16.6699 13C16.6699 13.55 16.2299 14 15.6699 14Z" fill="currentColor" /><path d="M9.66992 9C9.10992 9 8.66992 8.55 8.66992 8C8.66992 7.45 9.11992 7 9.66992 7C10.2199 7 10.6699 7.45 10.6699 8C10.6699 8.55 10.2299 9 9.66992 9Z" fill="currentColor" /><path d="M9.30023 14.55C9.11023 14.55 8.92023 14.48 8.77023 14.33C8.48023 14.04 8.48023 13.56 8.77023 13.27L15.5002 6.54001C15.7902 6.25001 16.2702 6.25001 16.5602 6.54001C16.8502 6.83001 16.8502 7.31001 16.5602 7.60001L9.83023 14.33C9.69023 14.48 9.49023 14.55 9.30023 14.55Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4519 2H8.89188C5.11188 2 4.17188 3.01 4.17188 7.04V18.3C4.17188 20.96 5.63188 21.59 7.40188 19.69L7.41187 19.68C8.23187 18.81 9.48188 18.88 10.1919 19.83L11.2019 21.18C12.0119 22.25 13.3219 22.25 14.1319 21.18L15.1419 19.83C15.8619 18.87 17.1119 18.8 17.9319 19.68C19.7119 21.58 21.1619 20.95 21.1619 18.29V7.04C21.1719 3.01 20.2319 2 16.4519 2ZM9.67188 7C10.2219 7 10.6719 7.45 10.6719 8C10.6719 8.55 10.2319 9 9.67188 9C9.11188 9 8.67188 8.55 8.67188 8C8.67188 7.45 9.11188 7 9.67188 7ZM15.6719 14C15.1119 14 14.6719 13.55 14.6719 13C14.6719 12.45 15.1219 12 15.6719 12C16.2219 12 16.6719 12.45 16.6719 13C16.6719 13.55 16.2319 14 15.6719 14ZM16.5719 7.59L9.84188 14.32C9.69187 14.47 9.50188 14.54 9.31188 14.54C9.12188 14.54 8.93187 14.47 8.78187 14.32C8.49187 14.03 8.49187 13.55 8.78187 13.26L15.5119 6.53C15.8019 6.24 16.2819 6.24 16.5719 6.53C16.8619 6.82 16.8619 7.3 16.5719 7.59Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiptDisscount as IconComponentType).keywords = [
  "receipt",
  "disscount",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting"
];

export default IconReceiptDisscount as IconComponentType;