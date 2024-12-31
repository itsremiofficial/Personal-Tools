import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconUndo: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.13086 18.3101H15.1309C17.8909 18.3101 20.1309 16.0701 20.1309 13.3101C20.1309 10.5501 17.8909 8.31006 15.1309 8.31006H4.13086" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.42914 10.8099L3.86914 8.24994L6.42914 5.68994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill="currentColor" /><path d="M13.9195 8.98006H8.76945L9.09945 8.65006C9.38945 8.36006 9.38945 7.88006 9.09945 7.59006C8.80945 7.30006 8.32945 7.30006 8.03945 7.59006L6.46945 9.16006C6.17945 9.45006 6.17945 9.93006 6.46945 10.2201L8.03945 11.7901C8.18945 11.9401 8.37945 12.0101 8.56945 12.0101C8.75945 12.0101 8.94945 11.9401 9.09945 11.7901C9.38945 11.5001 9.38945 11.0201 9.09945 10.7301L8.83945 10.4701H13.9195C15.1995 10.4701 16.2495 11.5101 16.2495 12.8001C16.2495 14.0901 15.2095 15.1301 13.9195 15.1301H8.99945C8.58945 15.1301 8.24945 15.4701 8.24945 15.8801C8.24945 16.2901 8.58945 16.6301 8.99945 16.6301H13.9195C16.0295 16.6301 17.7495 14.9101 17.7495 12.8001C17.7495 10.6901 16.0295 8.98006 13.9195 8.98006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUndo as IconComponentType).keywords = [
  "undo",
  "unmake",
  "dispose",
  "rescind",
  "disconnect",
  "vacate",
  "revoke",
  "rid",
  "annul",
  "repeal"
];

export default IconUndo as IconComponentType;