import { FC } from 'react';
import { IconProps } from "@/types";

const IconMoneySend: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 6V2H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 7L22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 7.75C16.81 7.75 16.62 7.68 16.47 7.53C16.18 7.24 16.18 6.76 16.47 6.47L18.52 4.42C16.76 2.92 14.49 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 9.51 21.08 7.24 19.58 5.48L17.53 7.53C17.38 7.68 17.19 7.75 17 7.75Z" fill="currentColor" /><path d="M13.75 11.82L12.75 11.47V9.25H12.83C13.34 9.25 13.75 9.7 13.75 10.25C13.75 10.66 14.09 11 14.5 11C14.91 11 15.25 10.66 15.25 10.25C15.25 8.87 14.17 7.75 12.83 7.75H12.75V7.5C12.75 7.09 12.41 6.75 12 6.75C11.59 6.75 11.25 7.09 11.25 7.5V7.75H10.95C9.74001 7.75 8.75 8.77 8.75 10.03C8.75 11.49 9.6 11.96 10.25 12.19L11.25 12.54V14.76H11.17C10.66 14.76 10.25 14.31 10.25 13.76C10.25 13.35 9.91 13.01 9.5 13.01C9.09 13.01 8.75 13.35 8.75 13.76C8.75 15.14 9.83001 16.26 11.17 16.26H11.25V16.51C11.25 16.92 11.59 17.26 12 17.26C12.41 17.26 12.75 16.92 12.75 16.51V16.26H13.05C14.26 16.26 15.25 15.24 15.25 13.98C15.25 12.51 14.4 12.04 13.75 11.82ZM10.74 10.76C10.4 10.64 10.25 10.57 10.25 10.02C10.25 9.59 10.57 9.24 10.95 9.24H11.25V10.93L10.74 10.76ZM13.05 14.75H12.75V13.06L13.26 13.24C13.6 13.36 13.75 13.43 13.75 13.98C13.75 14.4 13.43 14.75 13.05 14.75Z" fill="currentColor" /><path d="M22.6902 1.71024C22.6102 1.53024 22.4702 1.38024 22.2802 1.30024C22.1902 1.26024 22.0902 1.24023 21.9902 1.24023H17.9902C17.5802 1.24023 17.2402 1.58023 17.2402 1.99023C17.2402 2.40023 17.5802 2.74023 17.9902 2.74023H20.1802L18.5103 4.41024C18.8903 4.74024 19.2403 5.09024 19.5703 5.47024L21.2402 3.80024V6.00024C21.2402 6.41024 21.5802 6.75024 21.9902 6.75024C22.4002 6.75024 22.7402 6.41024 22.7402 6.00024V2.00024C22.7502 1.90024 22.7302 1.81024 22.6902 1.71024Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMoneySend;