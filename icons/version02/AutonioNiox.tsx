import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconAutonioNiox: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M12.6701 5.86L10.1001 10.14H15.2401L12.6701 5.86Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.23993 11.86L6.66992 16.14H11.8099L9.23993 11.86Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.0998 11.86L13.5298 16.14H18.6698L16.0998 11.86Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.46 6.20997L10.33 9.75997C10.23 9.92997 10.3501 10.14 10.5401 10.14H14.8001C14.9901 10.14 15.1101 9.92997 15.0101 9.75997L12.8801 6.20997C12.7901 6.04997 12.55 6.04997 12.46 6.20997Z" fill="currentColor" /><path d="M9.02987 12.21L6.89986 15.76C6.79986 15.93 6.91988 16.14 7.10988 16.14H11.3699C11.5599 16.14 11.6799 15.93 11.5799 15.76L9.44991 12.21C9.35991 12.05 9.11987 12.05 9.02987 12.21Z" fill="currentColor" /><path d="M15.88 12.21L13.75 15.76C13.65 15.93 13.7699 16.14 13.9599 16.14H18.2199C18.4099 16.14 18.53 15.93 18.43 15.76L16.3 12.21C16.22 12.05 15.98 12.05 15.88 12.21Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM11.3699 16.14H7.10992C6.91992 16.14 6.7999 15.93 6.8999 15.76L9.02991 12.21C9.12991 12.05 9.3599 12.05 9.4599 12.21L11.5899 15.76C11.6899 15.93 11.5699 16.14 11.3699 16.14ZM10.5399 10.14C10.3499 10.14 10.2299 9.92999 10.3299 9.75999L12.4599 6.21001C12.5599 6.05001 12.7899 6.05001 12.8899 6.21001L15.0199 9.75999C15.1199 9.92999 14.9999 10.14 14.8099 10.14H10.5399ZM18.2299 16.14H13.9699C13.7799 16.14 13.6599 15.93 13.7599 15.76L15.8899 12.21C15.9899 12.05 16.2199 12.05 16.3199 12.21L18.45 15.76C18.54 15.93 18.4199 16.14 18.2299 16.14Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAutonioNiox as IconComponentType).keywords = [
  "autonio",
  "niox"
];

export default IconAutonioNiox as IconComponentType;