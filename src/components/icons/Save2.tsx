import { FC } from 'react';
import { IconProps } from "../../types";

const IconSaveAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7 12H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.6897 2.71002C21.6097 2.53002 21.4697 2.37999 21.2797 2.29999C21.1897 2.25999 21.0897 2.23999 20.9897 2.23999H11.9897C11.5797 2.23999 11.2397 2.57999 11.2397 2.98999C11.2397 3.39999 11.5797 3.73999 11.9897 3.73999H19.1797L2.45969 20.46C2.16969 20.75 2.16969 21.23 2.45969 21.52C2.60969 21.67 2.79966 21.74 2.98966 21.74C3.17966 21.74 3.36969 21.67 3.51969 21.52L20.2397 4.79999V12C20.2397 12.41 20.5797 12.75 20.9897 12.75C21.3997 12.75 21.7397 12.41 21.7397 12V3C21.7497 2.9 21.7297 2.81002 21.6897 2.71002Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.3991 18.1501C17.2091 18.1501 17.019 18.08 16.8691 17.93L6.06906 7.13004C5.77906 6.84004 5.77906 6.36004 6.06906 6.07004C6.35906 5.78004 6.83906 5.78004 7.12906 6.07004L17.929 16.87C18.219 17.16 18.219 17.64 17.929 17.93C17.779 18.08 17.5891 18.1501 17.3991 18.1501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSaveAdd;