import { FC } from 'react';
import { IconProps } from "@/types";

const IconGameboy: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25C18 10.21 17.21 11 16.25 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.3 15.2803L8 17.5803" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.03027 15.3101L10.3303 17.61" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.4902 15.3301H16.5103" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.4902 17.5V17.48" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 22H7C4.8 22 3 20.2 3 18V6C3 3.8 4.8 2 7 2H17C19.2 2 21 3.8 21 6V18C21 20.2 19.2 22 17 22Z" fill="currentColor" /><path d="M16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25C18 10.21 17.21 11 16.25 11Z" fill="currentColor" /><path d="M10.8594 17.08L10.2094 16.43L10.8294 15.81C11.1194 15.52 11.1194 15.04 10.8294 14.75C10.5394 14.46 10.0594 14.46 9.76944 14.75L9.14945 15.37L8.55945 14.78C8.26945 14.49 7.78945 14.49 7.49945 14.78C7.20945 15.07 7.20945 15.55 7.49945 15.84L8.08945 16.43L7.46945 17.05C7.17945 17.34 7.17945 17.82 7.46945 18.11C7.61945 18.26 7.80945 18.33 7.99945 18.33C8.18945 18.33 8.37945 18.26 8.52945 18.11L9.14945 17.49L9.79944 18.14C9.94944 18.29 10.1394 18.36 10.3294 18.36C10.5194 18.36 10.7094 18.29 10.8594 18.14C11.1494 17.85 11.1494 17.37 10.8594 17.08Z" fill="currentColor" /><path d="M16.51 16.3301C15.96 16.3301 15.5 15.8801 15.5 15.3301C15.5 14.7801 15.94 14.3301 16.49 14.3301H16.51C17.06 14.3301 17.51 14.7801 17.51 15.3301C17.51 15.8801 17.06 16.3301 16.51 16.3301Z" fill="currentColor" /><path d="M14.4902 18.49C13.9402 18.49 13.4902 18.05 13.4902 17.5V17.48C13.4902 16.93 13.9402 16.48 14.4902 16.48C15.0402 16.48 15.4902 16.93 15.4902 17.48C15.4902 18.03 15.0402 18.49 14.4902 18.49Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGameboy;