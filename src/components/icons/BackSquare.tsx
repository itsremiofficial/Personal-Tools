import { FC } from 'react';
import { IconProps } from "../../types";

const IconBackSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.00039 15.3802H13.9204C15.6204 15.3802 17.0004 14.0002 17.0004 12.3002C17.0004 10.6002 15.6204 9.22021 13.9204 9.22021H7.15039" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.57 10.7701L7 9.19012L8.57 7.62012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M15.6191 7.09996L13.3292 6.34001C12.7492 6.14001 12.1592 6.21996 11.7092 6.53996C11.2592 6.85996 11.0092 7.39999 11.0092 8.00999V8.61998V12.8C10.6092 12.58 10.1591 12.45 9.66913 12.45C8.12913 12.45 6.86914 13.71 6.86914 15.25C6.86914 16.79 8.12913 18.05 9.66913 18.05C11.2091 18.05 12.4691 16.79 12.4691 15.25V10.7C12.4791 10.71 12.4992 10.71 12.5092 10.72L14.7991 11.48C15.0091 11.55 15.2291 11.59 15.4391 11.59C15.7991 11.59 16.1391 11.49 16.4191 11.28C16.8691 10.96 17.1191 10.42 17.1191 9.80998V9.2C17.1191 8.29 16.4791 7.38996 15.6191 7.09996ZM9.66913 16.59C8.92913 16.59 8.33917 15.99 8.33917 15.26C8.33917 14.52 8.93913 13.92 9.66913 13.92C10.4091 13.92 11.0092 14.52 11.0092 15.26C11.0092 15.99 10.4091 16.59 9.66913 16.59Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBackSquare;