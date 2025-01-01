import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFolderCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.94987C2 6.06734 2 5.62607 2.06935 5.25851C2.37464 3.64043 3.64031 2.37476 5.25839 2.06947C5.62595 2.00012 6.06722 2.00012 6.94975 2.00012C7.33642 2.00012 7.52976 2.00012 7.71557 2.0175C8.51665 2.09241 9.27652 2.40716 9.89594 2.92064C10.0396 3.03974 10.1763 3.17645 10.4497 3.44987L11 4.00012C11.8158 4.8159 12.2237 5.22379 12.7121 5.49555C12.9804 5.64483 13.2651 5.76273 13.5604 5.8469C14.0979 6.00012 14.6747 6.00012 15.8284 6.00012H16.2021C18.8345 6.00012 20.1506 6.00012 21.0062 6.76959C21.0849 6.84037 21.1598 6.91526 21.2305 6.99395C22 7.84947 22 9.16566 22 11.798V14.0001C22 17.7714 22 19.657 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2 19.657 2 17.7714 2 14.0001V6.94987Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M10 13.5001L11.3333 15.0001L14 12.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 14.0001V11.798C22 9.16566 22 7.84947 21.2305 6.99395C21.1598 6.91526 21.0849 6.84037 21.0062 6.76959C20.1506 6.00012 18.8345 6.00012 16.2021 6.00012H15.8284C14.6747 6.00012 14.0979 6.00012 13.5604 5.8469C13.2651 5.76273 12.9804 5.64483 12.7121 5.49555C12.2237 5.22379 11.8158 4.8159 11 4.00012L10.4497 3.44987C10.1763 3.17645 10.0396 3.03974 9.89594 2.92064C9.27652 2.40716 8.51665 2.09241 7.71557 2.0175C7.52976 2.00012 7.33642 2.00012 6.94975 2.00012C6.06722 2.00012 5.62595 2.00012 5.25839 2.06947C3.64031 2.37476 2.37464 3.64043 2.06935 5.25851C2 5.62607 2 6.06734 2 6.94987V14.0001C2 17.7714 2 19.657 3.17157 20.8285C4.34315 22.0001 6.22876 22.0001 10 22.0001H14C17.7712 22.0001 19.6569 22.0001 20.8284 20.8285C22 19.657 22 17.7714 22 14.0001Z" fill="currentColor" /><path d="M14.4983 11.4396C14.8079 11.7148 14.8358 12.1888 14.5606 12.4984L11.8939 15.4984C11.7516 15.6585 11.5476 15.7501 11.3333 15.7501C11.1191 15.7501 10.9151 15.6585 10.7728 15.4984L9.43945 13.9984C9.16426 13.6888 9.19215 13.2148 9.50174 12.9396C9.81132 12.6644 10.2854 12.6923 10.5606 13.0019L11.3333 13.8712L13.4395 11.5019C13.7146 11.1923 14.1887 11.1644 14.4983 11.4396Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.06935 5.25851C2 5.62607 2 6.06734 2 6.94987V14.0001C2 17.7714 2 19.657 3.17157 20.8285C4.34315 22.0001 6.22876 22.0001 10 22.0001H14C17.7712 22.0001 19.6569 22.0001 20.8284 20.8285C22 19.657 22 17.7714 22 14.0001V11.798C22 9.16566 22 7.84947 21.2305 6.99395C21.1598 6.91526 21.0849 6.84037 21.0062 6.76959C20.1506 6.00012 18.8345 6.00012 16.2021 6.00012H15.8284C14.6747 6.00012 14.0979 6.00012 13.5604 5.8469C13.2651 5.76273 12.9804 5.64483 12.7121 5.49555C12.2237 5.22379 11.8158 4.8159 11 4.00012L10.4497 3.44987C10.1763 3.17645 10.0396 3.03974 9.89594 2.92064C9.27652 2.40716 8.51665 2.09241 7.71557 2.0175C7.52976 2.00012 7.33642 2.00012 6.94975 2.00012C6.06722 2.00012 5.62595 2.00012 5.25839 2.06947C3.64031 2.37476 2.37464 3.64043 2.06935 5.25851ZM14.4983 11.4396C14.8079 11.7148 14.8357 12.1888 14.5606 12.4984L11.8939 15.4984C11.7516 15.6585 11.5476 15.7501 11.3333 15.7501C11.1191 15.7501 10.9151 15.6585 10.7728 15.4984L9.43944 13.9984C9.16426 13.6888 9.19214 13.2148 9.50173 12.9396C9.81131 12.6644 10.2854 12.6923 10.5606 13.0018L11.3333 13.8712L13.4394 11.5018C13.7146 11.1923 14.1887 11.1644 14.4983 11.4396Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderCheck as IconComponentType).keywords = [
  "folder",
  "check",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold"
];

export default IconFolderCheck as IconComponentType;