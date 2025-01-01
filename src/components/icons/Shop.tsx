import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconShop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0005 12C13.8305 12 15.1805 10.51 15.0005 8.68L14.3405 2H9.67048L9.00048 8.68C8.82048 10.51 10.1705 12 12.0005 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.3108 12C20.3308 12 21.8108 10.36 21.6108 8.35L21.3308 5.6C20.9708 3 19.9708 2 17.3508 2H14.3008L15.0008 9.01C15.1708 10.66 16.6608 12 18.3108 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.64037 12C7.29037 12 8.78037 10.66 8.94037 9.01L9.16037 6.8L9.64037 2H6.59037C3.97037 2 2.97037 3 2.61037 5.6L2.34037 8.35C2.14037 10.36 3.62037 12 5.64037 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M3.00977 11.2197V15.7097C3.00977 20.1997 4.80977 21.9997 9.29977 21.9997H14.6898C19.1798 21.9997 20.9798 20.1997 20.9798 15.7097V11.2197" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.3709 11.3901V17.3801C21.3709 20.1401 19.1309 22.3801 16.3709 22.3801H7.63086C4.87086 22.3801 2.63086 20.1401 2.63086 17.3801V11.4601C3.39086 12.2801 4.47086 12.7501 5.64086 12.7501C6.90086 12.7501 8.11086 12.1201 8.87086 11.1101C9.55086 12.1201 10.7109 12.7501 12.0009 12.7501C13.2809 12.7501 14.4209 12.1501 15.1109 11.1501C15.8809 12.1401 17.0709 12.7501 18.3109 12.7501C19.5209 12.7501 20.6209 12.2601 21.3709 11.3901Z" fill="currentColor" /><path d="M14.9894 1.25H8.98936L8.24936 8.61C8.18936 9.29 8.28936 9.93 8.53936 10.51C9.11936 11.87 10.4794 12.75 11.9994 12.75C13.5394 12.75 14.8694 11.89 15.4694 10.52C15.6494 10.09 15.7594 9.59 15.7694 9.08V8.89L14.9894 1.25Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M22.3598 8.27L22.0698 5.5C21.6498 2.48 20.2798 1.25 17.3498 1.25H13.5098L14.2498 8.75C14.2598 8.85 14.2698 8.96 14.2698 9.15C14.3298 9.67 14.4898 10.15 14.7298 10.58C15.4498 11.9 16.8498 12.75 18.3098 12.75C19.6398 12.75 20.8398 12.16 21.5898 11.12C22.1898 10.32 22.4598 9.31 22.3598 8.27Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M6.58965 1.25C3.64965 1.25 2.28965 2.48 1.85965 5.53L1.58965 8.28C1.48965 9.35 1.77965 10.39 2.40965 11.2C3.16965 12.19 4.33965 12.75 5.63965 12.75C7.09965 12.75 8.49965 11.9 9.20965 10.6C9.46965 10.15 9.63965 9.63 9.68965 9.09L10.4697 1.26H6.58965V1.25Z" fill="currentColor" /><path d="M11.3491 16.66C10.0791 16.79 9.11914 17.87 9.11914 19.15V22.38H14.8691V19.5C14.8791 17.41 13.6491 16.42 11.3491 16.66Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShop as IconComponentType).keywords = [
  "shop",
  "workshop",
  "store",
  "browse",
  "sponsor",
  "give away",
  "patronize",
  "snitch",
  "tell on",
  "betray"
];

export default IconShop as IconComponentType;