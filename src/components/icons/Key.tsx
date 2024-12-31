import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconKey: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7906 14.9298C17.7306 16.9798 14.7806 17.6098 12.1906 16.7998L7.48063 21.4998C7.14063 21.8498 6.47063 22.0598 5.99063 21.9898L3.81063 21.6898C3.09063 21.5898 2.42063 20.9098 2.31063 20.1898L2.01063 18.0098C1.94063 17.5298 2.17063 16.8598 2.50063 16.5198L7.20063 11.8198C6.40063 9.21982 7.02063 6.26982 9.08063 4.21982C12.0306 1.26982 16.8206 1.26982 19.7806 4.21982C22.7406 7.16982 22.7406 11.9798 19.7906 14.9298Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.89062 17.4902L9.19062 19.7902" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.7906 4.22007C16.8306 1.27007 12.0306 1.27007 9.09063 4.22007C7.02063 6.27007 6.40063 9.22007 7.20063 11.8201L2.50063 16.5201C2.17063 16.8601 1.94063 17.5301 2.01063 18.0101L2.31063 20.1901C2.42063 20.9101 3.09063 21.5901 3.81063 21.6901L5.99063 21.9901C6.47063 22.0601 7.14063 21.8401 7.48063 21.4901L8.30063 20.6701C8.50063 20.4801 8.50063 20.1601 8.30063 19.9601L6.36063 18.0201C6.07063 17.7301 6.07063 17.2501 6.36063 16.9601C6.65063 16.6701 7.13063 16.6701 7.42063 16.9601L9.37063 18.9101C9.56063 19.1001 9.88063 19.1001 10.0706 18.9101L12.1906 16.8001C14.7806 17.6101 17.7306 16.9801 19.7906 14.9301C22.7406 11.9801 22.7406 7.17007 19.7906 4.22007ZM14.5006 12.0001C13.1206 12.0001 12.0006 10.8801 12.0006 9.50007C12.0006 8.12007 13.1206 7.00007 14.5006 7.00007C15.8806 7.00007 17.0006 8.12007 17.0006 9.50007C17.0006 10.8801 15.8806 12.0001 14.5006 12.0001Z" fill="currentColor" /><path d="M14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 15.8807 7 14.5 7C13.1193 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKey as IconComponentType).keywords = [
  "key",
  "winder",
  "kilo",
  "kilogram",
  "central",
  "kg",
  "discover",
  "operative",
  "describe",
  "identify"
];

export default IconKey as IconComponentType;