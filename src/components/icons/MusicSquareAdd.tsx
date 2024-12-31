import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicSquareAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8.65002V14.35C21 14.69 20.99 15.02 20.97 15.33C20.25 14.51 19.18 14 18 14C15.79 14 14 15.79 14 18C14 18.75 14.21 19.46 14.58 20.06C14.78 20.4 15.04 20.71 15.34 20.97C15.03 20.99 14.7 21 14.35 21H8.64999C3.89999 21 2 19.1 2 14.35V8.65002C2 3.90002 3.89999 2 8.64999 2H14.35C19.1 2 21 3.90002 21 8.65002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.71953 14.42C7.52034 14.42 8.16953 13.7708 8.16953 12.97C8.16953 12.1692 7.52034 11.52 6.71953 11.52C5.91872 11.52 5.26953 12.1692 5.26953 12.97C5.26953 13.7708 5.91872 14.42 6.71953 14.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.4797 12V6.34001C13.4797 5.13001 12.7197 4.96997 11.9597 5.17997L9.0697 5.96995C8.5497 6.10995 8.17969 6.52999 8.17969 7.12999V8.14V8.81999V12.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.0301 13.4498C12.8309 13.4498 13.4801 12.8006 13.4801 11.9998C13.4801 11.199 12.8309 10.5498 12.0301 10.5498C11.2293 10.5498 10.5801 11.199 10.5801 11.9998C10.5801 12.8006 11.2293 13.4498 12.0301 13.4498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16992 8.8299L13.4799 7.37988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.4898 17.98H16.5098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 16.52V19.51" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.21 15.0098C18.12 14.9398 17 15.3398 16.17 16.1698C14.61 17.7298 14.61 20.2598 16.17 21.8298C16.7 22.3598 17.35 22.7098 18.04 22.8798C18.42 22.9798 18.82 23.0098 19.22 22.9898C20.17 22.9498 21.1 22.5698 21.83 21.8398C22.86 20.8098 23.21 19.3598 22.88 18.0498C22.72 17.3598 22.36 16.7098 21.83 16.1798C21.11 15.4498 20.17 15.0598 19.21 15.0098ZM21.24 18.9798C21.24 19.1898 21.16 19.3698 21.02 19.5098C20.88 19.6498 20.7 19.7298 20.49 19.7298H19.75V20.5098C19.75 20.7198 19.67 20.8998 19.53 21.0398C19.39 21.1798 19.21 21.2598 19 21.2598C18.59 21.2598 18.25 20.9198 18.25 20.5098V19.7298H17.5C17.09 19.7298 16.75 19.3898 16.75 18.9798C16.75 18.5698 17.09 18.2298 17.5 18.2298H18.25V17.5198C18.25 17.1098 18.59 16.7698 19 16.7698C19.41 16.7698 19.75 17.1098 19.75 17.5198V18.2298H20.49C20.91 18.2298 21.24 18.5698 21.24 18.9798Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.34 21.97C16.04 21.71 15.78 21.4 15.58 21.06C15.21 20.46 15 19.75 15 19C15 16.79 16.79 15 19 15C20.18 15 21.25 15.51 21.97 16.33C21.98 16.34 21.98 16.35 21.99 16.35C21.99 16.29 22 16.24 22 16.19V7.81C22 4.17 19.83 2 16.19 2H7.81C7.53 2 7.26 2.00999 7 2.04999C3.85 2.33999 2 4.45 2 7.81V16.19C2 19.55 3.85 21.66 7 21.95C7.26 21.99 7.53 22 7.81 22H16.19C16.25 22 16.3 21.99 16.36 21.99C16.36 21.98 16.35 21.98 16.34 21.97Z" fill="currentColor" /><path d="M13.7793 5.29976C13.4593 5.04976 12.8793 4.80977 11.9593 5.05977L8.97929 5.87977C8.08929 6.10977 7.50929 6.85976 7.50929 7.79976V9.54976V11.7098C7.27929 11.6298 7.0293 11.5698 6.7693 11.5698C5.5293 11.5698 4.5293 12.5798 4.5293 13.8098C4.5293 15.0398 5.5393 16.0498 6.7693 16.0498C7.9893 16.0498 8.98929 15.0597 9.00929 13.8497C9.00929 13.8397 9.0193 13.8298 9.0193 13.8198V10.1198L12.9893 9.03975V10.7197C12.7593 10.6397 12.5093 10.5798 12.2393 10.5798C10.9993 10.5798 9.9993 11.5898 9.9993 12.8198C9.9993 14.0598 11.0093 15.0598 12.2393 15.0598C13.4593 15.0598 14.4593 14.0697 14.4793 12.8497C14.4793 12.8397 14.4893 12.8298 14.4893 12.8098V8.04976V6.97975C14.4793 6.21975 14.2393 5.64976 13.7793 5.29976ZM6.75929 14.5498C6.34929 14.5498 6.0193 14.2198 6.0193 13.8098C6.0193 13.3998 6.34929 13.0698 6.75929 13.0698C7.16929 13.0698 7.4993 13.3998 7.4993 13.8098C7.4993 14.2198 7.16929 14.5498 6.75929 14.5498ZM12.2293 13.5498C11.8193 13.5498 11.4893 13.2198 11.4893 12.8098C11.4893 12.3998 11.8193 12.0698 12.2293 12.0698C12.6393 12.0698 12.9693 12.3998 12.9693 12.8098C12.9693 13.2198 12.6393 13.5498 12.2293 13.5498Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicSquareAdd as IconComponentType).keywords = [
  "music",
  "square",
  "add",
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
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconMusicSquareAdd as IconComponentType;