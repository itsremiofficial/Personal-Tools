import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUserSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.1394 21.6198C17.2594 21.8798 16.2194 21.9998 14.9994 21.9998H8.99937C7.77937 21.9998 6.73937 21.8798 5.85938 21.6198C6.07937 19.0198 8.74937 16.9697 11.9994 16.9697C15.2494 16.9697 17.9194 19.0198 18.1394 21.6198Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 9V15C22 18.78 20.86 20.85 18.14 21.62C17.26 21.88 16.22 22 15 22H9C7.78 22 6.74 21.88 5.86 21.62C3.14 20.85 2 18.78 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19 20.71 20.93 18.44 21.66C17.78 21.89 17.02 22 16.19 22H7.81C6.98 22 6.22 21.89 5.56 21.66C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path d="M18.4406 21.66C17.7806 21.89 17.0206 22 16.1906 22H7.81055C6.98055 22 6.22055 21.89 5.56055 21.66C5.91055 19.02 8.67055 16.97 12.0005 16.97C15.3305 16.97 18.0906 19.02 18.4406 21.66Z" fill="currentColor" /><path d="M15.5799 11.58C15.5799 13.56 13.9799 15.17 11.9999 15.17C10.0199 15.17 8.41992 13.56 8.41992 11.58C8.41992 9.60002 10.0199 8 11.9999 8C13.9799 8 15.5799 9.60002 15.5799 11.58Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserSquare as IconComponentType).keywords = [
  "user",
  "square",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconUserSquare as IconComponentType;