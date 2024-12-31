import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBluetooth: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.63965 18.64L17.9896 7.31998C18.4996 6.84998 18.4896 6.09997 17.9496 5.64997L14.0996 2.43998C13.0996 1.60998 12.2796 1.98998 12.2796 3.28998V20.71C12.2796 22.01 13.0996 22.39 14.0996 21.56L17.9496 18.35C18.4896 17.9 18.4996 17.15 17.9896 16.68L5.63965 5.35996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M12.7109 19.0299C12.4809 19.0299 12.3009 18.9699 12.2009 18.9199C11.9709 18.8099 11.4309 18.4499 11.4309 17.4699V14.0499L8.51094 16.7299C8.21094 17.0099 7.73094 16.9899 7.45094 16.6799C7.17094 16.3699 7.19093 15.8999 7.50093 15.6199L11.4309 12.0199V11.9399L7.50093 8.3799C7.19093 8.0999 7.17094 7.6299 7.45094 7.3199C7.73094 7.0199 8.21094 6.9899 8.51094 7.2699L11.4309 9.94989V6.52989C11.4309 5.54989 11.9709 5.18989 12.2009 5.07989C12.4309 4.96989 13.0509 4.78989 13.8009 5.41989L16.2209 7.43989C16.5509 7.70989 16.7409 8.1099 16.7509 8.5199C16.7609 8.9299 16.5909 9.32989 16.2709 9.61989L13.6609 12.0099L16.2709 14.3999C16.5809 14.6899 16.7609 15.0899 16.7509 15.4999C16.7409 15.9099 16.5509 16.2999 16.2209 16.5799L13.8009 18.5999C13.3809 18.9399 13.0009 19.0299 12.7109 19.0299ZM12.9309 13.2999V17.3599L15.2609 15.4099L12.9309 13.2999ZM12.9309 6.63989V10.6399L15.2609 8.49989L12.9309 6.63989Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBluetooth as IconComponentType).keywords = [
  "bluetooth",
  "teeth",
  "tooth",
  "handsfree",
  "wireless",
  "ipod",
  "wifi",
  "stereo",
  "speakerphone",
  "headset"
];

export default IconBluetooth as IconComponentType;