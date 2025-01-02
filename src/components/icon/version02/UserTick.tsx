import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUserTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.08008 22C4.08008 18.13 7.93007 15 12.6701 15C13.6301 15 14.5601 15.13 15.4301 15.37" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 18C22.6699 18.75 22.4599 19.46 22.0899 20.06C21.8799 20.42 21.6099 20.74 21.2999 21C20.5999 21.63 19.6799 22 18.6699 22C17.2099 22 15.9399 21.22 15.2499 20.06C14.8799 19.46 14.6699 18.75 14.6699 18C14.6699 16.74 15.2499 15.61 16.1699 14.88C16.8599 14.33 17.7299 14 18.6699 14C20.8799 14 22.6699 15.79 22.6699 18Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1099 18L18.0999 18.99L20.2299 17.02" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6699 13C17.7299 13 16.8599 13.33 16.1699 13.88C15.2499 14.61 14.6699 15.74 14.6699 17C14.6699 17.75 14.8799 18.46 15.2499 19.06C15.9399 20.22 17.2099 21 18.6699 21C19.6799 21 20.5999 20.63 21.2999 20C21.6099 19.74 21.8799 19.42 22.0899 19.06C22.4599 18.46 22.6699 17.75 22.6699 17C22.6699 14.79 20.8799 13 18.6699 13ZM20.7399 16.57L18.6099 18.54C18.4699 18.67 18.2799 18.74 18.0999 18.74C17.9099 18.74 17.7199 18.67 17.5699 18.52L16.5799 17.53C16.2899 17.24 16.2899 16.76 16.5799 16.47C16.8699 16.18 17.3499 16.18 17.6399 16.47L18.1199 16.95L19.7199 15.47C20.0199 15.19 20.4999 15.21 20.7799 15.51C21.0599 15.81 21.0399 16.28 20.7399 16.57Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.7601 21.5C21.7601 21.78 21.5401 22 21.2601 22H4.08008C3.80008 22 3.58008 21.78 3.58008 21.5C3.58008 17.36 7.66007 14 12.6701 14C13.7001 14 14.7001 14.14 15.6201 14.41C15.0301 15.11 14.6701 16.02 14.6701 17C14.6701 17.75 14.8801 18.46 15.2501 19.06C15.4501 19.4 15.7101 19.71 16.0101 19.97C16.7101 20.61 17.6401 21 18.6701 21C19.7901 21 20.8001 20.54 21.5201 19.8C21.6801 20.34 21.7601 20.91 21.7601 21.5Z" fill="currentColor" /><path d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6701 14C7.66008 14 3.58008 17.36 3.58008 21.5C3.58008 21.78 3.80008 22 4.08008 22H21.2601C21.5401 22 21.7601 21.78 21.7601 21.5C21.7601 17.36 17.6801 14 12.6701 14Z" fill="currentColor" /><path d="M12.6699 2C11.4899 2 10.4099 2.41 9.54992 3.1C8.39992 4.01 7.66992 5.42 7.66992 7C7.66992 7.94 7.92992 8.82 8.39992 9.57C9.25992 11.02 10.8399 12 12.6699 12C13.9299 12 15.0799 11.54 15.9599 10.75C16.3499 10.42 16.6899 10.02 16.9499 9.57C17.4099 8.82 17.6699 7.94 17.6699 7C17.6699 4.24 15.4299 2 12.6699 2ZM15.2599 6.46L12.5899 8.92C12.4099 9.09 12.1799 9.17 11.9499 9.17C11.7099 9.17 11.4699 9.08 11.2899 8.9L10.0599 7.66C9.68992 7.29 9.68992 6.7 10.0599 6.33C10.4299 5.96 11.0199 5.96 11.3899 6.33L11.9799 6.92L13.9899 5.07C14.3699 4.72 14.9599 4.74 15.3099 5.12C15.6599 5.51 15.6399 6.11 15.2599 6.46Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserTick as IconComponentType).keywords = [
  "user",
  "tick",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconUserTick as IconComponentType;