import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCode: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.56006 9C8.54006 9.49 9.38006 10.23 9.99006 11.15C10.3401 11.67 10.3401 12.34 9.99006 12.86C9.38006 13.77 8.54006 14.51 7.56006 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.6699 15H17.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M7.55983 15.75C7.27983 15.75 7.01983 15.6 6.88983 15.34C6.69983 14.97 6.84983 14.52 7.22983 14.33C8.09983 13.9 8.83983 13.24 9.36983 12.44C9.54983 12.17 9.54983 11.83 9.36983 11.56C8.82983 10.76 8.08983 10.1 7.22983 9.67002C6.84983 9.49002 6.69983 9.04002 6.88983 8.66002C7.06983 8.29002 7.51983 8.14002 7.88983 8.33002C8.98983 8.88002 9.92983 9.71002 10.6098 10.73C11.1198 11.5 11.1198 12.5 10.6098 13.27C9.92983 14.29 8.98983 15.12 7.88983 15.67C7.78983 15.72 7.66983 15.75 7.55983 15.75Z" fill="currentColor" /><path d="M17.6699 15.75H13.6699C13.2599 15.75 12.9199 15.41 12.9199 15C12.9199 14.59 13.2599 14.25 13.6699 14.25H17.6699C18.0799 14.25 18.4199 14.59 18.4199 15C18.4199 15.41 18.0799 15.75 17.6699 15.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM10.6099 13.27C9.92992 14.29 8.98992 15.12 7.88992 15.67C7.78992 15.72 7.66992 15.75 7.55992 15.75C7.27992 15.75 7.01992 15.6 6.88992 15.34C6.69992 14.97 6.84992 14.52 7.22992 14.33C8.09992 13.9 8.83992 13.24 9.36992 12.44C9.54992 12.17 9.54992 11.83 9.36992 11.56C8.82992 10.76 8.08992 10.1 7.22992 9.67C6.84992 9.49 6.69992 9.04 6.88992 8.66C7.06992 8.29 7.51992 8.14 7.88992 8.33C8.98992 8.88 9.92992 9.71 10.6099 10.73C11.1299 11.5 11.1299 12.5 10.6099 13.27ZM17.6699 15.75H13.6699C13.2599 15.75 12.9199 15.41 12.9199 15C12.9199 14.59 13.2599 14.25 13.6699 14.25H17.6699C18.0799 14.25 18.4199 14.59 18.4199 15C18.4199 15.41 18.0799 15.75 17.6699 15.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCode as IconComponentType).keywords = [
  "code",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code"
];

export default IconCode as IconComponentType;