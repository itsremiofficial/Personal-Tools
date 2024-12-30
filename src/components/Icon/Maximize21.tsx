import { FC } from 'react';
import { IconProps } from "../../types";

const IconMaximizeCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6897 2.71027C21.6097 2.53027 21.4697 2.38023 21.2797 2.30023C21.1897 2.26023 21.0897 2.24023 20.9897 2.24023H16.9897C16.5797 2.24023 16.2397 2.58023 16.2397 2.99023C16.2397 3.40023 16.5797 3.74023 16.9897 3.74023H19.1797L14.4597 8.46027C14.1697 8.75027 14.1697 9.23026 14.4597 9.52026C14.6097 9.67026 14.7997 9.74023 14.9897 9.74023C15.1797 9.74023 15.3697 9.67026 15.5197 9.52026L20.2397 4.80023V7.00024C20.2397 7.41024 20.5797 7.75024 20.9897 7.75024C21.3997 7.75024 21.7397 7.41024 21.7397 7.00024V3.00024C21.7497 2.90024 21.7297 2.81027 21.6897 2.71027Z" fill="none" /><path d="M8.46997 14.4704L3.75 19.1904V17.0004C3.75 16.5904 3.41 16.2504 3 16.2504C2.59 16.2504 2.25 16.5904 2.25 17.0004V21.0004C2.25 21.1004 2.27 21.1904 2.31 21.2904C2.39 21.4704 2.52997 21.6204 2.71997 21.7004C2.80997 21.7404 2.91001 21.7604 3.01001 21.7604H7.01001C7.42001 21.7604 7.76001 21.4204 7.76001 21.0104C7.76001 20.6004 7.42001 20.2604 7.01001 20.2604H4.82001L9.53998 15.5404C9.82998 15.2504 9.82998 14.7704 9.53998 14.4804C9.24998 14.1904 8.75997 14.1804 8.46997 14.4704Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M2.20001 14.75C1.85001 14.75 1.53997 14.5 1.46997 14.15C1.32997 13.45 1.25 12.72 1.25 12C1.25 6.07 6.07 1.25 12 1.25C12.73 1.25 13.46 1.31997 14.17 1.46997C14.58 1.54997 14.84 1.94998 14.76 2.34998C14.68 2.75998 14.27 3.01 13.88 2.94C13.27 2.82 12.64 2.75 12.01 2.75C6.91001 2.75 2.76001 6.9 2.76001 12C2.76001 12.62 2.82001 13.25 2.95001 13.85C3.03001 14.26 2.76999 14.65 2.35999 14.73C2.29999 14.75 2.25001 14.75 2.20001 14.75Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M11.9991 22.7498C11.2691 22.7498 10.5391 22.6798 9.82908 22.5298C9.41908 22.4498 9.15905 22.0498 9.23905 21.6498C9.31905 21.2398 9.72906 20.9898 10.1191 21.0598C10.7291 21.1798 11.3591 21.2498 11.9891 21.2498C17.0891 21.2498 21.2391 17.0998 21.2391 11.9998C21.2391 11.3798 21.1791 10.7598 21.0591 10.1498C20.9791 9.73982 21.2391 9.34982 21.6491 9.26982C22.0591 9.18982 22.4491 9.44978 22.5291 9.85978C22.6691 10.5598 22.7391 11.2798 22.7391 11.9998C22.7491 17.9298 17.9291 22.7498 11.9991 22.7498Z" fill="none" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18.6895 5.71C18.6095 5.53 18.4695 5.38 18.2795 5.3C18.1895 5.27 18.0995 5.25 17.9995 5.25H13.9995C13.5895 5.25 13.2495 5.59 13.2495 6C13.2495 6.41 13.5895 6.75 13.9995 6.75H16.1895L12.4695 10.47C12.1795 10.76 12.1795 11.24 12.4695 11.53C12.6195 11.68 12.8095 11.75 12.9995 11.75C13.1895 11.75 13.3795 11.68 13.5295 11.53L17.2495 7.81V10C17.2495 10.41 17.5895 10.75 17.9995 10.75C18.4095 10.75 18.7495 10.41 18.7495 10V6C18.7495 5.9 18.7295 5.81 18.6895 5.71Z" fill="currentColor" /><path d="M11.53 12.4699C11.24 12.1799 10.76 12.1799 10.47 12.4699L6.75 16.1899V13.9999C6.75 13.5899 6.41 13.2499 6 13.2499C5.59 13.2499 5.25 13.5899 5.25 13.9999V17.9999C5.25 18.0999 5.27 18.1899 5.31 18.2899C5.39 18.4699 5.53 18.6199 5.72 18.6999C5.8 18.7299 5.9 18.7499 6 18.7499H10C10.41 18.7499 10.75 18.4099 10.75 17.9999C10.75 17.5899 10.41 17.2499 10 17.2499H7.81L11.53 13.5299C11.82 13.2399 11.82 12.7599 11.53 12.4699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximizeCircle;