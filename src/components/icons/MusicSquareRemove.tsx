import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicSquareRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8.65002V14.35C21 14.69 20.99 15.02 20.97 15.33C20.25 14.51 19.18 14 18 14C15.79 14 14 15.79 14 18C14 18.75 14.21 19.46 14.58 20.06C14.78 20.4 15.04 20.71 15.34 20.97C15.03 20.99 14.7 21 14.35 21H8.65C3.9 21 2 19.1 2 14.35V8.65002C2 3.90002 3.9 2 8.65 2H14.35C19.1 2 21 3.90002 21 8.65002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.71954 14.42C7.52035 14.42 8.16953 13.7708 8.16953 12.97C8.16953 12.1692 7.52035 11.52 6.71954 11.52C5.91872 11.52 5.26953 12.1692 5.26953 12.97C5.26953 13.7708 5.91872 14.42 6.71954 14.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.4699 12V6.34001C13.4699 5.13001 12.7099 4.96997 11.9499 5.17997L9.05992 5.96995C8.53992 6.10995 8.16992 6.52999 8.16992 7.12999V8.14V8.81999V12.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.0301 13.4498C12.8309 13.4498 13.4801 12.8006 13.4801 11.9998C13.4801 11.199 12.8309 10.5498 12.0301 10.5498C11.2293 10.5498 10.5801 11.199 10.5801 11.9998C10.5801 12.8006 11.2293 13.4498 12.0301 13.4498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16992 8.8299L13.4699 7.37988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.0692 19.0402L16.9492 16.9302" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.0497 16.96L16.9297 19.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.97 16.33C21.25 15.51 20.18 15 19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C15.78 21.4 16.04 21.71 16.34 21.97C17.04 22.61 17.97 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 17.98 22.61 17.04 21.97 16.33ZM20.6 20.58C20.45 20.73 20.26 20.8 20.07 20.8C19.88 20.8 19.69 20.73 19.54 20.58L19.01 20.05L18.46 20.6C18.31 20.75 18.12 20.82 17.93 20.82C17.74 20.82 17.55 20.75 17.4 20.6C17.11 20.31 17.11 19.83 17.4 19.54L17.95 18.99L17.42 18.46C17.13 18.17 17.13 17.69 17.42 17.4C17.71 17.11 18.19 17.11 18.48 17.4L19.01 17.93L19.51 17.43C19.8 17.14 20.28 17.14 20.57 17.43C20.86 17.72 20.86 18.2 20.57 18.49L20.07 18.99L20.6 19.52C20.89 19.81 20.89 20.28 20.6 20.58Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.34 21.97C16.04 21.71 15.78 21.4 15.58 21.06C15.21 20.46 15 19.75 15 19C15 16.79 16.79 15 19 15C20.18 15 21.25 15.51 21.97 16.33C21.98 16.34 21.98 16.35 21.99 16.35C21.99 16.29 22 16.24 22 16.19V7.81C22 4.17 19.83 2 16.19 2H7.81C7.53 2 7.26 2.00999 7 2.04999C3.85 2.33999 2 4.45 2 7.81V16.19C2 19.55 3.85 21.66 7 21.95C7.26 21.99 7.53 22 7.81 22H16.19C16.25 22 16.3 21.99 16.36 21.99C16.36 21.98 16.35 21.98 16.34 21.97Z" fill="currentColor" /><path d="M13.7793 5.29976C13.4593 5.04976 12.8793 4.80977 11.9593 5.05977L8.9793 5.87977C8.0893 6.10977 7.5093 6.85976 7.5093 7.79976V9.54976V11.7098C7.2793 11.6298 7.02929 11.5698 6.76929 11.5698C5.52929 11.5698 4.5293 12.5798 4.5293 13.8098C4.5293 15.0398 5.53929 16.0498 6.76929 16.0498C7.98929 16.0498 8.9893 15.0597 9.0093 13.8497C9.0093 13.8397 9.01929 13.8298 9.01929 13.8198V10.1198L12.9893 9.03975V10.7197C12.7593 10.6397 12.5093 10.5798 12.2393 10.5798C10.9993 10.5798 9.9993 11.5898 9.9993 12.8198C9.9993 14.0598 11.0093 15.0598 12.2393 15.0598C13.4593 15.0598 14.4593 14.0697 14.4793 12.8497C14.4793 12.8397 14.4893 12.8298 14.4893 12.8098V8.04976V6.97975C14.4793 6.21975 14.2393 5.64976 13.7793 5.29976ZM6.7593 14.5498C6.3493 14.5498 6.01929 14.2198 6.01929 13.8098C6.01929 13.3998 6.3493 13.0698 6.7593 13.0698C7.1693 13.0698 7.4993 13.3998 7.4993 13.8098C7.4993 14.2198 7.1693 14.5498 6.7593 14.5498ZM12.2293 13.5498C11.8193 13.5498 11.4893 13.2198 11.4893 12.8098C11.4893 12.3998 11.8193 12.0698 12.2293 12.0698C12.6393 12.0698 12.9693 12.3998 12.9693 12.8098C12.9693 13.2198 12.6393 13.5498 12.2293 13.5498Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicSquareRemove as IconComponentType).keywords = [
  "music",
  "square",
  "remove",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconMusicSquareRemove as IconComponentType;