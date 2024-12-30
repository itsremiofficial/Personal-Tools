import { FC } from 'react';
import { IconProps } from "../../types";

const IconBagCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M13.3906 17.3604L10.6406 14.6104" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.3594 14.6396L10.6094 17.3896" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M8.80945 2L5.18945 5.63" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.1895 2L18.8095 5.63" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="currentColor" strokeWidth="1.5" /><path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.25 5.14999V7.85001C21.25 9.69001 20.69 10.25 18.85 10.25H16.15C14.31 10.25 13.75 9.69001 13.75 7.85001V5.14999C13.75 3.30999 14.31 2.75 16.15 2.75H18.85C20.69 2.75 21.25 3.30999 21.25 5.14999Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M10.25 16.15V18.85C10.25 20.69 9.69 21.25 7.85 21.25H5.15C3.31 21.25 2.75 20.69 2.75 18.85V16.15C2.75 14.31 3.31 13.75 5.15 13.75H7.85C9.69 13.75 10.25 14.31 10.25 16.15Z" fill="currentColor" /><path d="M16.6291 11.7501V13.6201C16.6291 15.9001 15.8991 16.6301 13.6191 16.6301H11.7491V16.1501C11.7491 13.4901 10.5091 12.2501 7.84914 12.2501H7.36914V10.3801C7.36914 8.10013 8.09914 7.37012 10.3791 7.37012H12.2491V7.85013C12.2491 10.5101 13.4891 11.7501 16.1491 11.7501H16.6291Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBagCross;