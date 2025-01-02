import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWhatsapp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.60992 20.63C9.08992 21.5 10.8199 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 13.82 3.15995 15.53 4.00995 17L2.66992 22L7.60992 20.63Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 15.17C17.6699 15.35 17.6299 15.54 17.5399 15.72C17.4499 15.9 17.34 16.07 17.2 16.23C16.95 16.5 16.6799 16.7 16.3799 16.82C16.0799 16.95 15.7499 17.01 15.3999 17.01C14.8899 17.01 14.3399 16.89 13.7699 16.64C13.1899 16.39 12.6199 16.06 12.0499 15.65C11.4699 15.23 10.9299 14.76 10.4099 14.25C9.88991 13.73 9.42995 13.18 9.00995 12.61C8.59995 12.04 8.26991 11.47 8.02991 10.9C7.78991 10.33 7.66992 9.78001 7.66992 9.26001C7.66992 8.92001 7.72991 8.59001 7.84991 8.29001C7.96991 7.98001 8.15993 7.70001 8.42993 7.45001C8.74993 7.13001 9.09991 6.98001 9.46991 6.98001C9.60991 6.98001 9.74994 7.01001 9.87994 7.07001C10.0099 7.13001 10.1299 7.22001 10.2199 7.35001L11.3799 8.98999C11.4699 9.11999 11.5399 9.23 11.5799 9.34C11.6299 9.45 11.6499 9.54999 11.6499 9.64999C11.6499 9.76999 11.6099 9.89001 11.5399 10.01C11.4699 10.13 11.3799 10.25 11.2599 10.37L10.8799 10.77C10.8199 10.83 10.7999 10.89 10.7999 10.97C10.7999 11.01 10.8099 11.05 10.8199 11.09C10.8399 11.13 10.8499 11.16 10.8599 11.19C10.9499 11.36 11.1099 11.57 11.3299 11.83C11.5599 12.09 11.7999 12.36 12.0599 12.62C12.3299 12.89 12.5899 13.13 12.8599 13.36C13.1199 13.58 13.3399 13.73 13.5099 13.82C13.5399 13.83 13.5699 13.85 13.5999 13.86C13.6399 13.88 13.6799 13.88 13.7299 13.88C13.8199 13.88 13.8799 13.85 13.9399 13.79L14.3199 13.41C14.4499 13.28 14.5699 13.19 14.6799 13.13C14.7999 13.06 14.9099 13.02 15.0399 13.02C15.1399 13.02 15.2399 13.04 15.3499 13.09C15.4599 13.14 15.58 13.2 15.7 13.29L17.3599 14.47C17.4899 14.56 17.5799 14.67 17.6399 14.79C17.6399 14.91 17.6699 15.03 17.6699 15.17Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M7.61022 20.63C9.10022 21.5 10.8302 22 12.6702 22C18.3002 22 22.9802 17.03 22.6502 11.41C22.3102 5.60997 17.0402 1.13996 10.9702 2.13996C6.79021 2.82996 3.44021 6.21996 2.79021 10.4C2.41021 12.82 2.91024 15.11 4.00024 17L3.11022 20.31C2.91022 21.06 3.6002 21.74 4.3402 21.53L7.61022 20.63Z" fill="currentColor" /><path d="M17.6699 15.17C17.6699 15.35 17.6299 15.54 17.5399 15.72C17.4499 15.9 17.34 16.07 17.2 16.23C16.95 16.5 16.6799 16.7 16.3799 16.82C16.0799 16.95 15.7499 17.01 15.3999 17.01C14.8899 17.01 14.3399 16.89 13.7699 16.64C13.1899 16.39 12.6199 16.06 12.0499 15.65C11.4699 15.23 10.9299 14.76 10.4099 14.25C9.88991 13.73 9.42995 13.18 9.00995 12.61C8.59995 12.04 8.26991 11.47 8.02991 10.9C7.78991 10.33 7.66992 9.77998 7.66992 9.25998C7.66992 8.91998 7.72991 8.58998 7.84991 8.28998C7.96991 7.97998 8.15993 7.69997 8.42993 7.44997C8.74993 7.12997 9.09991 6.97998 9.46991 6.97998C9.60991 6.97998 9.74994 7.00998 9.87994 7.06998C10.0099 7.12998 10.1299 7.21998 10.2199 7.34998L11.3699 8.99998C11.4599 9.12998 11.5299 9.23998 11.5699 9.34998C11.6199 9.45998 11.6399 9.55998 11.6399 9.65998C11.6399 9.77998 11.5999 9.89997 11.5299 10.02C11.4599 10.14 11.3699 10.26 11.2499 10.38L10.8699 10.78C10.8099 10.84 10.7899 10.9 10.7899 10.98C10.7899 11.02 10.7999 11.06 10.8099 11.1C10.8299 11.14 10.8399 11.17 10.8499 11.2C10.9399 11.37 11.0999 11.58 11.3199 11.84C11.5499 12.1 11.7899 12.37 12.0499 12.63C12.3199 12.9 12.5799 13.14 12.8499 13.37C13.1099 13.59 13.3299 13.74 13.4999 13.83C13.5299 13.84 13.5599 13.86 13.5899 13.87C13.6299 13.89 13.6699 13.89 13.7199 13.89C13.8099 13.89 13.8699 13.86 13.9299 13.8L14.3099 13.42C14.4399 13.29 14.5599 13.2 14.6699 13.14C14.7899 13.07 14.8999 13.03 15.0299 13.03C15.1299 13.03 15.2299 13.05 15.3399 13.1C15.4499 13.15 15.5699 13.21 15.6899 13.3L17.3499 14.48C17.4799 14.57 17.5699 14.68 17.6299 14.8C17.6399 14.91 17.6699 15.03 17.6699 15.17Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6497 11.41C22.3097 5.61001 17.0397 1.14002 10.9697 2.14002C6.78972 2.83002 3.43973 6.22 2.78973 10.4C2.40973 12.82 2.90975 15.11 3.99975 17L3.10973 20.31C2.90973 21.06 3.59971 21.74 4.33971 21.53L7.59972 20.63C9.07972 21.5 10.8097 22 12.6597 22C18.2997 22 22.9797 17.03 22.6497 11.41ZM17.5497 15.72C17.4597 15.9 17.3497 16.07 17.2097 16.23C16.9597 16.5 16.6897 16.7 16.3897 16.82C16.0897 16.95 15.7597 17.01 15.4097 17.01C14.8997 17.01 14.3497 16.89 13.7797 16.64C13.1997 16.39 12.6297 16.06 12.0597 15.65C11.4797 15.23 10.9397 14.76 10.4197 14.25C9.89973 13.73 9.43971 13.18 9.01971 12.61C8.60971 12.04 8.27973 11.47 8.03973 10.9C7.79973 10.33 7.67974 9.78002 7.67974 9.26002C7.67974 8.92002 7.73973 8.59002 7.85973 8.29002C7.97973 7.98002 8.16975 7.70002 8.43975 7.45002C8.75975 7.13002 9.10973 6.98002 9.47973 6.98002C9.61973 6.98002 9.7597 7.01002 9.8897 7.07002C10.0197 7.13002 10.1397 7.22001 10.2297 7.35001L11.3897 8.99C11.4797 9.12 11.5497 9.23 11.5897 9.34C11.6397 9.45 11.6597 9.55 11.6597 9.65C11.6597 9.77 11.6197 9.89002 11.5497 10.01C11.4797 10.13 11.3897 10.25 11.2697 10.37L10.8897 10.77C10.8297 10.83 10.8097 10.89 10.8097 10.97C10.8097 11.01 10.8197 11.05 10.8297 11.09C10.8497 11.13 10.8597 11.16 10.8697 11.19C10.9597 11.36 11.1197 11.57 11.3397 11.83C11.5697 12.09 11.8098 12.36 12.0698 12.62C12.3398 12.89 12.5997 13.13 12.8697 13.36C13.1297 13.58 13.3497 13.73 13.5197 13.82C13.5497 13.83 13.5797 13.85 13.6097 13.86C13.6497 13.88 13.6897 13.88 13.7397 13.88C13.8297 13.88 13.8898 13.85 13.9498 13.79L14.3297 13.41C14.4597 13.28 14.5798 13.19 14.6898 13.13C14.8098 13.06 14.9197 13.02 15.0497 13.02C15.1497 13.02 15.2497 13.04 15.3597 13.09C15.4697 13.14 15.5897 13.2 15.7097 13.29L17.3697 14.47C17.4997 14.56 17.5897 14.67 17.6497 14.79C17.6997 14.92 17.7297 15.04 17.7297 15.18C17.6697 15.35 17.6297 15.54 17.5497 15.72Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWhatsapp as IconComponentType).keywords = [
  "whatsapp",
  "snapchat",
  "facetime",
  "facebook",
  "snapchatter",
  "videochat",
  "webchat",
  "kakaotalk",
  "instagram",
  "chat"
];

export default IconWhatsapp as IconComponentType;