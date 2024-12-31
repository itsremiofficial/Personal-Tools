import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSmsNotification: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z" fill="currentColor" /><path d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.72 9.30977C21.35 9.10977 22 9.59978 22 10.2698V15.5098C22 19.0098 20 20.5098 17 20.5098H7C4 20.5098 2 19.0098 2 15.5098V8.50977C2 5.00977 4 3.50977 7 3.50977H14.61C15.26 3.50977 15.7 4.10978 15.58 4.73978C15.46 5.32978 15.48 5.95977 15.66 6.60977C16.03 7.94977 17.12 9.01977 18.46 9.36977C19.25 9.56977 20.02 9.52977 20.72 9.30977Z" fill="currentColor" /><path d="M12.0008 12.8698C11.1608 12.8698 10.3108 12.6098 9.66076 12.0798L6.53075 9.57978C6.21075 9.31978 6.15076 8.84978 6.41076 8.52978C6.67076 8.20978 7.14075 8.14978 7.46075 8.40978L10.5908 10.9098C11.3508 11.5198 12.6407 11.5198 13.4007 10.9098L14.5807 9.96978C14.9007 9.70978 15.3808 9.75977 15.6308 10.0898C15.8908 10.4098 15.8408 10.8898 15.5108 11.1398L14.3307 12.0798C13.6907 12.6098 12.8408 12.8698 12.0008 12.8698Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmsNotification as IconComponentType).keywords = [
  "sms",
  "notification",
  "ms",
  "master of science",
  "samarium",
  "atomic number 62",
  "mms",
  "isa",
  "scm",
  "hsd",
  "cms",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement"
];

export default IconSmsNotification as IconComponentType;