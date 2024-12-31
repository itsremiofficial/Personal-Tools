import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGallerySlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.37 20.1C2.43 18.97 2 17.31 2 15V9C2 4 4 2 9 2H15C17.19 2 18.8 2.38 19.92 3.23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.9709 7.99023C21.9909 8.31023 22.0009 8.65023 22.0009 9.00023V15.0002C22.0009 20.0002 20.0009 22.0002 15.0009 22.0002H9.00094C8.26094 22.0002 7.58094 21.9602 6.96094 21.8602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.4297 16.4502C11.7297 16.7502 12.2197 16.7502 12.5197 16.4502L17.5497 11.4102C18.3297 10.6302 19.5897 10.6302 20.3697 11.4102L21.9997 13.0502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.46 3.54L3.54 20.46C2.54 19.46 2 18.01 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C18.01 2 19.46 2.54 20.46 3.54Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.9993 7.81014V13.9001L20.3693 12.5001C19.5893 11.8301 18.3293 11.8301 17.5493 12.5001L13.3893 16.0701C12.6793 16.6801 11.5593 16.7401 10.7793 16.2201L21.6093 5.39014C21.7493 5.77014 21.8493 6.17014 21.9093 6.60014C21.9693 6.98014 21.9993 7.39014 21.9993 7.81014Z" fill="currentColor" /><path d="M22.0006 13.9001V16.1901C22.0006 19.8301 19.8306 22.0001 16.1906 22.0001H7.81063C7.39062 22.0001 6.98063 21.9701 6.60063 21.9101C6.17063 21.8501 5.77062 21.7501 5.39062 21.6101L10.7806 16.2201C11.5606 16.7401 12.6806 16.6801 13.3906 16.0701L17.5506 12.5001C18.3306 11.8301 19.5906 11.8301 20.3706 12.5001L22.0006 13.9001Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /><path d="M7.99914 10.3801C9.31358 10.3801 10.3791 9.31456 10.3791 8.00012C10.3791 6.68568 9.31358 5.62012 7.99914 5.62012C6.6847 5.62012 5.61914 6.68568 5.61914 8.00012C5.61914 9.31456 6.6847 10.3801 7.99914 10.3801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGallerySlash as IconComponentType).keywords = [
  "gallery",
  "slash",
  "art gallery",
  "heading",
  "verandah",
  "veranda",
  "drift",
  "picture gallery",
  "museum",
  "beaux-arts",
  "art",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconGallerySlash as IconComponentType;