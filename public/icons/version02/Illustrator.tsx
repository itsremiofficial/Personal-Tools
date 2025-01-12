import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconIllustrator: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6699 22H9.66992C4.66992 22 2.66992 20 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H15.6699C20.6699 2 22.6699 4 22.6699 9V15C22.6699 20 20.6699 22 15.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.16992 16L10.6699 8L14.2699 16" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.96973 13.3H13.3697" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path d="M16.77 16V10.7" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8101 8.03412V8.03412" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M11.5599 7.79997C11.4599 7.50997 11.1899 7.29996 10.8799 7.28996C10.5599 7.26996 10.2799 7.44997 10.1599 7.72997L6.62991 15.66C6.45991 16.04 6.62991 16.48 7.00991 16.65C7.38991 16.82 7.82991 16.65 7.99991 16.27L8.97991 14.07H12.0599L12.7699 16.2C12.8699 16.51 13.1699 16.71 13.4799 16.71C13.5599 16.71 13.6399 16.7 13.7199 16.67C14.1099 16.54 14.3199 16.11 14.1899 15.72L11.5599 7.79997ZM9.64991 12.57L10.7499 10.1L11.5699 12.57H9.64991Z" fill="currentColor" /><path d="M17.02 9.92999C16.61 9.92999 16.27 10.27 16.27 10.68V15.97C16.27 16.38 16.61 16.72 17.02 16.72C17.43 16.72 17.77 16.38 17.77 15.97V10.68C17.77 10.26 17.43 9.92999 17.02 9.92999Z" fill="currentColor" /><path d="M17.94 7.65C17.89 7.53 17.82 7.42 17.72 7.33C17.45 7.05 17 6.96 16.63 7.11C16.51 7.16 16.4 7.23 16.31 7.33C16.22 7.42 16.15 7.53 16.09 7.65C16.04 7.77 16.02 7.9 16.02 8.03C16.02 8.17 16.04 8.29 16.09 8.42C16.14 8.54 16.22 8.65001 16.31 8.74001C16.5 8.93001 16.75 9.03 17.02 9.03C17.15 9.03 17.28 9.01001 17.4 8.96001C17.52 8.91001 17.63 8.83001 17.72 8.74001C17.82 8.65001 17.89 8.54 17.94 8.42C17.99 8.3 18.02 8.17 18.02 8.03C18.02 7.9 17.99 7.77 17.94 7.65Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM13.7299 16.68C13.6499 16.71 13.5699 16.72 13.4899 16.72C13.1799 16.72 12.8799 16.52 12.7799 16.21L12.0699 14.08H8.98992L8.00992 16.28C7.83992 16.66 7.39992 16.83 7.01992 16.66C6.63992 16.49 6.46992 16.05 6.63992 15.67L10.1699 7.73999C10.2999 7.45999 10.5699 7.26999 10.8899 7.29999C11.1999 7.30999 11.4699 7.52 11.5699 7.81L14.2099 15.74C14.3299 16.12 14.1199 16.55 13.7299 16.68ZM17.7699 15.97C17.7699 16.38 17.4299 16.72 17.0199 16.72C16.6099 16.72 16.2699 16.38 16.2699 15.97V10.68C16.2699 10.27 16.6099 9.92999 17.0199 9.92999C17.4299 9.92999 17.7699 10.27 17.7699 10.68V15.97ZM17.9399 8.42001C17.8899 8.54001 17.8199 8.64999 17.7199 8.73999C17.6299 8.82999 17.5199 8.90999 17.3999 8.95999C17.2799 9.00999 17.1499 9.03 17.0199 9.03C16.7499 9.03 16.4999 8.92999 16.3099 8.73999C16.2199 8.64999 16.1399 8.54001 16.0899 8.42001C16.0399 8.29001 16.0199 8.17 16.0199 8.03C16.0199 7.9 16.0399 7.76999 16.0899 7.64999C16.1499 7.52999 16.2199 7.41999 16.3099 7.32999C16.3999 7.22999 16.5099 7.15999 16.6299 7.10999C16.9999 6.95999 17.4499 7.04999 17.7199 7.32999C17.8199 7.41999 17.8899 7.52999 17.9399 7.64999C17.9899 7.76999 18.0199 7.9 18.0199 8.03C18.0199 8.17 17.9899 8.30001 17.9399 8.42001Z" fill="none" /><path d="M9.6499 12.57H11.5699L10.7499 10.11L9.6499 12.57Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconIllustrator;