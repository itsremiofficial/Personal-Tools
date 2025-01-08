import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconQuoteUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M2.67188 12.35H8.47186C10.0019 12.35 11.0519 13.51 11.0519 14.93V18.15C11.0519 19.57 10.0019 20.73 8.47186 20.73H5.25189C3.83189 20.73 2.67188 19.57 2.67188 18.15V12.35" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.67188 12.35C2.67188 6.29998 3.8019 5.30003 7.2019 3.28003" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M14.3018 12.35H20.1017C21.6317 12.35 22.6818 13.51 22.6818 14.93V18.15C22.6818 19.57 21.6317 20.73 20.1017 20.73H16.8818C15.4618 20.73 14.3018 19.57 14.3018 18.15V12.35" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.3018 12.35C14.3018 6.29998 15.4317 5.30003 18.8317 3.28003" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.76215 11.63H4.07214C4.15214 6.95997 5.07214 6.18996 7.94214 4.48996C8.27214 4.28996 8.38213 3.86996 8.18213 3.52996C7.98213 3.19996 7.56211 3.08997 7.22211 3.28997C3.84211 5.28997 2.66211 6.50995 2.66211 12.33V17.72C2.66211 19.43 4.05214 20.81 5.75214 20.81H8.75214C10.5121 20.81 11.8421 19.48 11.8421 17.72V14.72C11.8521 12.96 10.5221 11.63 8.76215 11.63Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.5814 11.63H14.8914C14.9714 6.95997 15.8915 6.18996 18.7615 4.48996C19.0915 4.28996 19.2015 3.86996 19.0015 3.52996C18.8015 3.19996 18.3814 3.08997 18.0414 3.28997C14.6614 5.28997 13.4814 6.50995 13.4814 12.33V17.72C13.4814 19.43 14.8715 20.81 16.5715 20.81H19.5715C21.3315 20.81 22.6614 19.48 22.6614 17.72V14.72C22.6714 12.96 21.3414 11.63 19.5814 11.63Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.76188 11.63H4.07188C4.15188 6.95997 5.07188 6.18997 7.94187 4.48997C8.27187 4.28997 8.38188 3.86997 8.18188 3.52997C7.99188 3.19997 7.56187 3.08997 7.23187 3.28997C3.85187 5.28997 2.67188 6.50997 2.67188 12.32V17.71C2.67188 19.42 4.06188 20.8 5.76188 20.8H8.76188C10.5219 20.8 11.8519 19.47 11.8519 17.71V14.71C11.8519 12.96 10.5219 11.63 8.76188 11.63Z" fill="currentColor" /><path d="M19.5814 11.63H14.8914C14.9714 6.95997 15.8914 6.18997 18.7614 4.48997C19.0914 4.28997 19.2014 3.86997 19.0014 3.52997C18.8014 3.19997 18.3814 3.08997 18.0414 3.28997C14.6614 5.28997 13.4814 6.50997 13.4814 12.33V17.72C13.4814 19.43 14.8714 20.81 16.5714 20.81H19.5714C21.3314 20.81 22.6614 19.48 22.6614 17.72V14.72C22.6714 12.96 21.3414 11.63 19.5814 11.63Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQuoteUp as IconComponentType).keywords = [
  "quote",
  "up",
  "quotation",
  "cite",
  "quotation mark",
  "inverted comma",
  "cited",
  "phrase",
  "naming",
  "recite",
  "read",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake"
];

export default IconQuoteUp as IconComponentType;