import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBagCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M13.3906 17.3604L10.6406 14.6104" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.3594 14.6396L10.6094 17.3896" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M8.80945 2L5.18945 5.63" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.1895 2L18.8095 5.63" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="currentColor" strokeWidth="1.5" /><path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z" fill="currentColor" /><path d="M19.6609 10.7001H4.36094C4.07094 10.7001 3.75094 10.6901 3.46094 10.6101L4.72094 18.3001C5.01094 20.0201 5.76094 22.0001 9.09094 22.0001H14.7009C18.0709 22.0001 18.6709 20.3101 19.0309 18.4201L20.5409 10.6101C20.2609 10.6801 19.9609 10.7001 19.6609 10.7001ZM13.9209 17.8901C13.7709 18.0401 13.5809 18.1101 13.3909 18.1101C13.2009 18.1101 13.0109 18.0401 12.8609 17.8901L12.0109 17.0401L11.1309 17.9201C10.9809 18.0701 10.7909 18.1401 10.6009 18.1401C10.4109 18.1401 10.2209 18.0701 10.0709 17.9201C9.78094 17.6301 9.78094 17.1501 10.0709 16.8601L10.9509 15.9801L10.1009 15.1301C9.81094 14.8401 9.81094 14.3601 10.1009 14.0701C10.3909 13.7801 10.8709 13.7801 11.1609 14.0701L12.0109 14.9201L12.8309 14.1001C13.1209 13.8101 13.6009 13.8101 13.8909 14.1001C14.1809 14.3901 14.1809 14.8701 13.8909 15.1601L13.0709 15.9801L13.9209 16.8301C14.2209 17.1301 14.2209 17.6001 13.9209 17.8901Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBagCross as IconComponentType).keywords = [
  "bag",
  "cross",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization"
];

export default IconBagCross as IconComponentType;