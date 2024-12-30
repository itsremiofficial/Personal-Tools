import { FC } from 'react';
import { IconProps } from "../../types";

const IconBucket: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00914 17.9998L2.99914 13.9898C1.65914 12.6498 1.65914 11.3198 2.99914 9.9798L9.67914 3.2998L17.0291 10.6498C17.3991 11.0198 17.3991 11.6198 17.0291 11.9898L11.0091 18.0098C9.68914 19.3298 8.34914 19.3298 7.00914 17.9998Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.34961 1.9502L9.68961 3.29016" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.07031 11.9197L17.1903 11.2598" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 22H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.8098 3.94009C20.4998 7.21009 17.5098 11.4801 14.6598 14.2701C14.2498 11.6901 12.1898 9.67009 9.58984 9.31009C12.3898 6.45009 16.6898 3.42009 19.9698 2.10009C20.5498 1.88009 21.1298 2.05009 21.4898 2.41009C21.8698 2.79009 22.0498 3.36009 21.8098 3.94009Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.6595 14.2701C14.1595 14.7601 13.6595 15.2101 13.1795 15.5901L11.2095 17.1701C10.9595 17.3501 10.7095 17.5001 10.4295 17.6201C10.4295 17.4301 10.4095 17.2401 10.3895 17.0401C10.2795 16.2101 9.89953 15.4201 9.22953 14.7501C8.53953 14.0701 7.71953 13.6801 6.86953 13.5701C6.66953 13.5501 6.45953 13.5401 6.26953 13.5501C6.37953 13.2401 6.54953 12.9501 6.75953 12.7101L8.31953 10.7401C8.68953 10.2701 9.11953 9.79006 9.58953 9.31006C12.1895 9.67006 14.2495 11.6901 14.6595 14.2701Z" fill="currentColor" /><path d="M10.4298 17.6198C10.4298 18.7198 10.0098 19.7698 9.20976 20.5598C8.59976 21.1798 7.77977 21.5998 6.77977 21.7198L4.32976 21.9898C2.98976 22.1398 1.83976 20.9898 1.98976 19.6398L2.25976 17.1798C2.49976 14.9898 4.32976 13.5898 6.26976 13.5498C6.45976 13.5398 6.66976 13.5498 6.86976 13.5698C7.71976 13.6798 8.53976 14.0698 9.22976 14.7498C9.89976 15.4198 10.2798 16.2098 10.3898 17.0398C10.4098 17.2398 10.4298 17.4298 10.4298 17.6198Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBucket;