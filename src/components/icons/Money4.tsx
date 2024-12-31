import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMoney4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="currentColor" /><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor" /><path d="M4.5 10.75C4.09 10.75 3.75 10.41 3.75 10V8.5C3.75 6.71 5.21 5.25 7 5.25H8.5C8.91 5.25 9.25 5.59 9.25 6C9.25 6.41 8.91 6.75 8.5 6.75H7C6.04 6.75 5.25 7.54 5.25 8.5V10C5.25 10.41 4.91 10.75 4.5 10.75Z" fill="currentColor" /><path d="M19.5 10.75C19.09 10.75 18.75 10.41 18.75 10V8.5C18.75 7.54 17.96 6.75 17 6.75H15.5C15.09 6.75 14.75 6.41 14.75 6C14.75 5.59 15.09 5.25 15.5 5.25H17C18.79 5.25 20.25 6.71 20.25 8.5V10C20.25 10.41 19.91 10.75 19.5 10.75Z" fill="currentColor" /><path d="M8.5 18.75H7C5.21 18.75 3.75 17.29 3.75 15.5V14C3.75 13.59 4.09 13.25 4.5 13.25C4.91 13.25 5.25 13.59 5.25 14V15.5C5.25 16.46 6.04 17.25 7 17.25H8.5C8.91 17.25 9.25 17.59 9.25 18C9.25 18.41 8.91 18.75 8.5 18.75Z" fill="currentColor" /><path d="M17 18.75H15.5C15.09 18.75 14.75 18.41 14.75 18C14.75 17.59 15.09 17.25 15.5 17.25H17C17.96 17.25 18.75 16.46 18.75 15.5V14C18.75 13.59 19.09 13.25 19.5 13.25C19.91 13.25 20.25 13.59 20.25 14V15.5C20.25 17.29 18.79 18.75 17 18.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoney4 as IconComponentType).keywords = [
  "money",
  "4",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
  "dh",
  "f4f"
];

export default IconMoney4 as IconComponentType;