import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrangeCircle2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.8198 13.8201L14.7798 16.86" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.52002 13.8201H17.82" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.52002 10.18L10.56 7.14001" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.82 10.1799H7.52002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M18.5198 13.5301C18.4398 13.3501 18.2998 13.2001 18.1098 13.1201C18.0198 13.0801 17.9198 13.0601 17.8198 13.0601H7.50977C7.09977 13.0601 6.75977 13.4001 6.75977 13.8101C6.75977 14.2201 7.09977 14.5601 7.50977 14.5601H16.0098L14.2498 16.3201C13.9598 16.6101 13.9598 17.0901 14.2498 17.3801C14.3998 17.5301 14.5898 17.6001 14.7798 17.6001C14.9698 17.6001 15.1598 17.5301 15.3098 17.3801L18.3498 14.3401C18.4198 14.2701 18.4698 14.1901 18.5098 14.1001C18.5898 13.9201 18.5898 13.7101 18.5198 13.5301Z" fill="currentColor" /><path d="M17.8198 9.42996H9.31977L11.0798 7.66998C11.3698 7.37998 11.3698 6.89996 11.0798 6.60996C10.7898 6.31996 10.3098 6.31996 10.0198 6.60996L6.97977 9.64996C6.90977 9.71996 6.85977 9.79999 6.81977 9.88999C6.73977 10.07 6.73977 10.28 6.81977 10.46C6.89977 10.64 7.03977 10.79 7.22977 10.87C7.31977 10.91 7.41978 10.93 7.51978 10.93H17.8298C18.2398 10.93 18.5798 10.59 18.5798 10.18C18.5798 9.76996 18.2398 9.42996 17.8198 9.42996Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM18.5199 14.1C18.4799 14.19 18.4299 14.27 18.3599 14.34L15.3199 17.38C15.1699 17.53 14.9799 17.6 14.7899 17.6C14.5999 17.6 14.4099 17.53 14.2599 17.38C13.9699 17.09 13.9699 16.61 14.2599 16.32L16.0199 14.56H7.51992C7.10992 14.56 6.76992 14.22 6.76992 13.81C6.76992 13.4 7.10992 13.06 7.51992 13.06H17.8299C17.9299 13.06 18.0199 13.08 18.1199 13.12C18.2999 13.2 18.4499 13.34 18.5299 13.53C18.5899 13.71 18.5899 13.92 18.5199 14.1ZM17.8199 10.93H7.51992C7.41992 10.93 7.31992 10.91 7.22992 10.87C7.04992 10.79 6.89992 10.65 6.81992 10.46C6.73992 10.28 6.73992 10.07 6.81992 9.89C6.85992 9.8 6.90992 9.72 6.97992 9.65L10.0199 6.61C10.3099 6.32 10.7899 6.32 11.0799 6.61C11.3699 6.9 11.3699 7.38 11.0799 7.67L9.32992 9.43H17.8299C18.2399 9.43 18.5799 9.77 18.5799 10.18C18.5799 10.59 18.2399 10.93 17.8199 10.93Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrangeCircle2 as IconComponentType).keywords = [
  "arrange",
  "circle",
  "2",
  "order",
  "put",
  "set up",
  "fix up",
  "stage",
  "bring about",
  "format",
  "do",
  "set",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
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

export default IconArrangeCircle2 as IconComponentType;