import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBagTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.61914 16L11.1191 17.5L14.3691 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.80945 2L5.18945 5.63" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.1895 2L18.8095 5.63" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="currentColor" strokeWidth="1.5" /><path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z" fill="currentColor" /><path d="M19.6609 10.7001H4.36094C4.07094 10.7001 3.75094 10.6901 3.46094 10.6101L4.72094 18.3001C5.01094 20.0201 5.76094 22.0001 9.09094 22.0001H14.7009C18.0709 22.0001 18.6709 20.3101 19.0309 18.4201L20.5409 10.6101C20.2609 10.6801 19.9609 10.7001 19.6609 10.7001ZM14.8809 15.0501L11.6309 18.0501C11.4909 18.1801 11.3009 18.2501 11.1209 18.2501C10.9309 18.2501 10.7409 18.1801 10.5909 18.0301L9.09094 16.5301C8.80094 16.2401 8.80094 15.7601 9.09094 15.4701C9.38094 15.1801 9.86094 15.1801 10.1509 15.4701L11.1409 16.4601L13.8609 13.9501C14.1609 13.6701 14.6409 13.6901 14.9209 13.9901C15.2109 14.3001 15.1909 14.7701 14.8809 15.0501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBagTick as IconComponentType).keywords = [
  "bag",
  "tick",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconBagTick as IconComponentType;