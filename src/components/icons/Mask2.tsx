import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMask2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9693 11.9998C21.9693 14.9398 20.6893 17.5998 18.6493 19.4098C16.8893 21.0098 14.5593 21.9698 11.9993 21.9698C6.4993 21.9698 2.0293 17.4998 2.0293 11.9998C2.0293 6.49979 6.4993 2.02979 11.9993 2.02979C14.5593 2.02979 16.8893 2.98979 18.6493 4.58979C20.6893 6.39979 21.9693 9.05979 21.9693 11.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9693 16.3902C11.9493 18.0402 10.7193 18.4402 9.5693 17.9802C7.1993 17.0302 5.5293 14.7102 5.5293 12.0002C5.5293 9.29024 7.1993 6.97024 9.5693 6.01024C10.7193 5.55024 11.9493 5.96024 11.9693 7.60024V16.3902Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.9693 11.9998C21.9693 14.9398 20.6893 17.5998 18.6493 19.4098C16.8893 21.0098 14.5593 21.9698 11.9993 21.9698C6.4993 21.9698 2.0293 17.4998 2.0293 11.9998C2.0293 6.49979 6.4993 2.02979 11.9993 2.02979C14.5593 2.02979 16.8893 2.98979 18.6493 4.58979C20.6893 6.39979 21.9693 9.05979 21.9693 11.9998Z" fill="currentColor" /><path d="M11.9693 16.3902C11.9493 18.0402 10.7193 18.4402 9.5693 17.9802C7.1993 17.0302 5.5293 14.7102 5.5293 12.0002C5.5293 9.29024 7.1993 6.97024 9.5693 6.01024C10.7193 5.55024 11.9493 5.96024 11.9693 7.60024V16.3902Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMask2 as IconComponentType).keywords = [
  "mask",
  "2",
  "cloak",
  "masquerade",
  "masque",
  "block out",
  "dissemble",
  "vizard",
  "hood",
  "shield",
  "sock",
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

export default IconMask2 as IconComponentType;