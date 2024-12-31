import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBluetooth2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.63965 18.64L16.9896 7.31998C17.4996 6.84998 17.4896 6.09997 16.9496 5.64997L13.0996 2.43998C12.0996 1.60998 11.2796 1.98998 11.2796 3.28998V20.71C11.2796 22.01 12.0996 22.39 13.0996 21.56L16.9496 18.35C17.4896 17.9 17.4996 17.15 16.9896 16.68L4.63965 5.35996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M12.0796 18.9999C11.8496 18.9999 11.6696 18.9399 11.5696 18.8899C11.3396 18.7799 10.7996 18.4299 10.7996 17.4499V14.0599L7.8996 16.7099C7.5996 16.9899 7.1196 16.9699 6.8396 16.6599C6.5596 16.3499 6.57962 15.8799 6.88962 15.5999L10.7996 12.0199V11.9399L6.88962 8.39992C6.57962 8.11992 6.5596 7.64992 6.8396 7.33992C7.1196 7.02992 7.5896 7.00992 7.8996 7.28992L10.7996 9.93992V6.54993C10.7996 5.56993 11.3396 5.20992 11.5696 5.10992C11.7996 4.99992 12.4196 4.81992 13.1696 5.44992L15.5796 7.45993C15.9096 7.72993 16.0996 8.11992 16.1096 8.52992C16.1196 8.93992 15.9496 9.33993 15.6396 9.62993L13.0496 11.9999L15.6396 14.3699C15.9496 14.6599 16.1296 15.0599 16.1196 15.4699C16.1096 15.8799 15.9196 16.2699 15.5896 16.5399L13.1796 18.5499C12.7496 18.8999 12.3696 18.9999 12.0796 18.9999ZM12.2996 13.2999V17.3199L14.6096 15.3899L12.2996 13.2999ZM12.2996 6.67991V10.6399L14.6096 8.51993L12.2996 6.67991Z" fill="currentColor" /><path d="M6.62024 13.3801C5.86024 13.3801 5.24023 12.7601 5.24023 12.0001C5.24023 11.2401 5.86024 10.6201 6.62024 10.6201C7.38024 10.6201 8.00024 11.2401 8.00024 12.0001C8.00024 12.7601 7.38024 13.3801 6.62024 13.3801ZM6.62024 11.8801C6.55024 11.8801 6.50024 11.9401 6.50024 12.0001C6.50024 12.1401 6.75024 12.1401 6.75024 12.0001C6.75024 11.9301 6.69024 11.8801 6.62024 11.8801Z" fill="currentColor" /><path d="M17.38 13.3801C16.62 13.3801 16 12.7601 16 12.0001C16 11.2401 16.62 10.6201 17.38 10.6201C18.14 10.6201 18.76 11.2401 18.76 12.0001C18.76 12.7601 18.13 13.3801 17.38 13.3801ZM17.38 11.8801C17.31 11.8801 17.26 11.9401 17.26 12.0001C17.26 12.1401 17.51 12.1401 17.51 12.0001C17.5 11.9301 17.44 11.8801 17.38 11.8801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBluetooth2 as IconComponentType).keywords = [
  "bluetooth",
  "2",
  "teeth",
  "tooth",
  "handsfree",
  "wireless",
  "ipod",
  "wifi",
  "stereo",
  "speakerphone",
  "headset",
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

export default IconBluetooth2 as IconComponentType;