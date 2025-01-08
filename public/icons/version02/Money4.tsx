import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMoney4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6729 20.5H7.67285C4.67285 20.5 2.67285 19 2.67285 15.5V8.5C2.67285 5 4.67285 3.5 7.67285 3.5H17.6729C20.6729 3.5 22.6729 5 22.6729 8.5V15.5C22.6729 19 20.6729 20.5 17.6729 20.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6729 15C14.3297 15 15.6729 13.6569 15.6729 12C15.6729 10.3431 14.3297 9 12.6729 9C11.016 9 9.67285 10.3431 9.67285 12C9.67285 13.6569 11.016 15 12.6729 15Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.17285 6H7.67285C6.29285 6 5.17285 7.12 5.17285 8.5V10" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.1729 6H17.6729C19.0529 6 20.1729 7.12 20.1729 8.5V10" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.17285 18H7.67285C6.29285 18 5.17285 16.88 5.17285 15.5V14" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.1729 18H17.6729C19.0529 18 20.1729 16.88 20.1729 15.5V14" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.6729 20.5H7.67285C4.67285 20.5 2.67285 19 2.67285 15.5V8.5C2.67285 5 4.67285 3.5 7.67285 3.5H17.6729C20.6729 3.5 22.6729 5 22.6729 8.5V15.5C22.6729 19 20.6729 20.5 17.6729 20.5Z" fill="currentColor" /><path d="M12.6729 15C14.3297 15 15.6729 13.6569 15.6729 12C15.6729 10.3431 14.3297 9 12.6729 9C11.016 9 9.67285 10.3431 9.67285 12C9.67285 13.6569 11.016 15 12.6729 15Z" fill="currentColor" /><path d="M5.17285 10.75C4.76285 10.75 4.42285 10.41 4.42285 10V8.5C4.42285 6.71 5.88285 5.25 7.67285 5.25H9.17285C9.58285 5.25 9.92285 5.59 9.92285 6C9.92285 6.41 9.58285 6.75 9.17285 6.75H7.67285C6.71285 6.75 5.92285 7.54 5.92285 8.5V10C5.92285 10.41 5.58285 10.75 5.17285 10.75Z" fill="currentColor" /><path d="M20.1729 10.75C19.7629 10.75 19.4229 10.41 19.4229 10V8.5C19.4229 7.54 18.6329 6.75 17.6729 6.75H16.1729C15.7629 6.75 15.4229 6.41 15.4229 6C15.4229 5.59 15.7629 5.25 16.1729 5.25H17.6729C19.4629 5.25 20.9229 6.71 20.9229 8.5V10C20.9229 10.41 20.5829 10.75 20.1729 10.75Z" fill="currentColor" /><path d="M9.17285 18.75H7.67285C5.88285 18.75 4.42285 17.29 4.42285 15.5V14C4.42285 13.59 4.76285 13.25 5.17285 13.25C5.58285 13.25 5.92285 13.59 5.92285 14V15.5C5.92285 16.46 6.71285 17.25 7.67285 17.25H9.17285C9.58285 17.25 9.92285 17.59 9.92285 18C9.92285 18.41 9.58285 18.75 9.17285 18.75Z" fill="currentColor" /><path d="M17.6729 18.75H16.1729C15.7629 18.75 15.4229 18.41 15.4229 18C15.4229 17.59 15.7629 17.25 16.1729 17.25H17.6729C18.6329 17.25 19.4229 16.46 19.4229 15.5V14C19.4229 13.59 19.7629 13.25 20.1729 13.25C20.5829 13.25 20.9229 13.59 20.9229 14V15.5C20.9229 17.29 19.4629 18.75 17.6729 18.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6748 3.5H7.6748C4.6748 3.5 2.6748 5 2.6748 8.5V15.5C2.6748 19 4.6748 20.5 7.6748 20.5H17.6748C20.6748 20.5 22.6748 19 22.6748 15.5V8.5C22.6748 5 20.6748 3.5 17.6748 3.5ZM4.4248 8.5C4.4248 6.71 5.8848 5.25 7.6748 5.25H9.1748C9.5848 5.25 9.9248 5.59 9.9248 6C9.9248 6.41 9.5848 6.75 9.1748 6.75H7.6748C6.7148 6.75 5.9248 7.54 5.9248 8.5V10C5.9248 10.41 5.5848 10.75 5.1748 10.75C4.7648 10.75 4.4248 10.41 4.4248 10V8.5ZM9.1748 18.75H7.6748C5.8848 18.75 4.4248 17.29 4.4248 15.5V14C4.4248 13.59 4.7648 13.25 5.1748 13.25C5.5848 13.25 5.9248 13.59 5.9248 14V15.5C5.9248 16.46 6.7148 17.25 7.6748 17.25H9.1748C9.5848 17.25 9.9248 17.59 9.9248 18C9.9248 18.41 9.5848 18.75 9.1748 18.75ZM12.6748 15C11.0148 15 9.6748 13.66 9.6748 12C9.6748 10.34 11.0148 9 12.6748 9C14.3348 9 15.6748 10.34 15.6748 12C15.6748 13.66 14.3348 15 12.6748 15ZM20.9248 15.5C20.9248 17.29 19.4648 18.75 17.6748 18.75H16.1748C15.7648 18.75 15.4248 18.41 15.4248 18C15.4248 17.59 15.7648 17.25 16.1748 17.25H17.6748C18.6348 17.25 19.4248 16.46 19.4248 15.5V14C19.4248 13.59 19.7648 13.25 20.1748 13.25C20.5848 13.25 20.9248 13.59 20.9248 14V15.5ZM20.9248 10C20.9248 10.41 20.5848 10.75 20.1748 10.75C19.7648 10.75 19.4248 10.41 19.4248 10V8.5C19.4248 7.54 18.6348 6.75 17.6748 6.75H16.1748C15.7648 6.75 15.4248 6.41 15.4248 6C15.4248 5.59 15.7648 5.25 16.1748 5.25H17.6748C19.4648 5.25 20.9248 6.71 20.9248 8.5V10Z" fill="currentColor" /></svg> 
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