import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCloudLightning: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2797 19.9999C18.6197 20.0099 19.9097 19.5099 20.8997 18.6099C24.1697 15.7499 22.4197 10.0099 18.1097 9.46995C16.5697 0.129949 3.09965 3.66995 6.28965 12.5599" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.95027 12.9701C7.42027 12.7001 6.83027 12.5601 6.24027 12.5701C1.58027 12.9001 1.59027 19.6801 6.24027 20.0101" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4902 9.88998C17.0102 9.62998 17.5702 9.48998 18.1502 9.47998" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.9 19.1601H10.9V21.4901C10.9 21.8301 11.33 22.0001 11.55 21.7401L14 18.9501C14.3 18.6101 14.17 18.3301 13.72 18.3301H12.72V16.0001C12.72 15.6601 12.29 15.4901 12.07 15.7501L9.62 18.5401C9.32 18.8801 9.45 19.1601 9.9 19.1601Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.4099 11.7401C21.7999 9.74005 20.2799 8.30005 18.3699 7.87005C17.8099 5.37005 16.2699 3.58005 14.0899 2.90005C11.7099 2.17005 8.94992 2.88005 7.21992 4.69005C5.68992 6.28005 5.18992 8.47005 5.77992 10.8001C3.64992 11.3201 2.66992 13.1801 2.66992 14.8601C2.66992 16.7401 3.89992 18.8501 6.63992 19.0401H9.16992V16.4101C9.16992 15.1401 9.92992 14.3801 11.1999 14.3801H14.1399C15.4099 14.3801 16.1699 15.1401 16.1699 16.4101V19.0401H16.9799C16.9899 19.0401 17.0099 19.0401 17.0199 19.0401C18.4399 19.0401 19.7999 18.5101 20.8399 17.5601C22.4699 16.1401 23.0699 13.9101 22.4099 11.7401Z" fill="currentColor" /><path d="M14.1399 14.3899H11.1999C9.92992 14.3899 9.16992 15.1499 9.16992 16.4199V19.3599C9.16992 20.6299 9.92992 21.3899 11.1999 21.3899H14.1399C15.4099 21.3899 16.1699 20.6299 16.1699 19.3599V16.4199C16.1699 15.1499 15.4099 14.3899 14.1399 14.3899ZM14.3399 18.0499L12.6699 19.9499L12.4699 20.1799C12.1999 20.4899 11.9699 20.4099 11.9699 19.9899V18.2099H11.2099C10.8599 18.2099 10.7699 17.9999 10.9999 17.7399L12.6699 15.8399L12.8699 15.6099C13.1399 15.2999 13.3699 15.3799 13.3699 15.7999V17.5799H14.1299C14.4799 17.5699 14.5699 17.7899 14.3399 18.0499Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8399 17.5699C20.3099 18.0599 19.6999 18.4299 19.0399 18.6799C18.3799 18.9299 17.6699 18.4499 17.6699 17.7399V16.4199C17.6699 14.4699 16.0899 12.8899 14.1399 12.8899H11.1999C9.24992 12.8899 7.66992 14.4699 7.66992 16.4199V17.9999C7.66992 18.5499 7.21992 18.9999 6.66992 18.9999H6.21992C3.76992 18.6299 2.66992 16.6399 2.66992 14.8599C2.66992 13.1799 3.64992 11.3199 5.77992 10.7999C5.18992 8.46994 5.68992 6.27994 7.20992 4.68994C8.93992 2.87994 11.6999 2.15994 14.0799 2.89994C16.2699 3.56994 17.8099 5.36994 18.3599 7.86994C20.2699 8.29994 21.7999 9.73994 22.4099 11.7399C23.0699 13.9099 22.4699 16.1399 20.8399 17.5699Z" fill="currentColor" /><path d="M14.1399 14.3899H11.1999C9.92992 14.3899 9.16992 15.1499 9.16992 16.4199V19.3599C9.16992 20.6299 9.92992 21.3899 11.1999 21.3899H14.1399C15.4099 21.3899 16.1699 20.6299 16.1699 19.3599V16.4199C16.1699 15.1499 15.4099 14.3899 14.1399 14.3899ZM14.3399 18.0499L12.6699 19.9499L12.4699 20.1799C12.1999 20.4899 11.9699 20.4099 11.9699 19.9899V18.2099H11.2099C10.8599 18.2099 10.7699 17.9999 10.9999 17.7399L12.6699 15.8399L12.8699 15.6099C13.1399 15.2999 13.3699 15.3799 13.3699 15.7999V17.5799H14.1299C14.4799 17.5699 14.5699 17.7899 14.3399 18.0499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudLightning as IconComponentType).keywords = [
  "cloud",
  "lightning",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "lightyear",
  "flashpoint",
  "thunderstorm",
  "storm",
  "electricity",
  "ray",
  "light",
  "lighting",
  "thunder"
];

export default IconCloudLightning as IconComponentType;