import { FC } from 'react';
import { IconProps } from "../../types";

const IconCloud: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.26906 13.0098C6.73906 12.7398 6.14906 12.5998 5.54906 12.5998C0.869062 12.9298 0.869062 19.7398 5.54906 20.0698H16.6391C17.9891 20.0798 19.2891 19.5798 20.2791 18.6698C23.5691 15.7998 21.8091 10.0298 17.4791 9.47976C15.9191 0.109757 2.38906 3.66976 5.59906 12.5998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8496 9.91977C16.3696 9.65977 16.9396 9.51977 17.5196 9.50977" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.5 12C5.5 8.41 8.41 5.5 12 5.5C15.59 5.5 18.5 8.41 18.5 12C18.5 14.08 17.52 15.94 16 17.13H15.99C14.89 17.99 13.51 18.5 12 18.5C10.51 18.5 9.14 18 8.04 17.15H8.03C6.49 15.96 5.5 14.1 5.5 12Z" fill="currentColor" /><path d="M8.0293 17.1499H8.0393C9.1393 17.9999 10.5093 18.4999 11.9993 18.4999C13.5093 18.4999 14.8893 17.9899 15.9893 17.1299H15.9993L15.4893 19.5999C14.9993 21.4999 13.8993 21.9999 12.5493 21.9999H11.4593C10.1093 21.9999 8.9993 21.4999 8.5193 19.5899L8.0293 17.1499Z" fill="currentColor" /><path d="M8.0293 6.85H8.0393C9.1393 6 10.5093 5.5 11.9993 5.5C13.5093 5.5 14.8893 6.01 15.9893 6.87H15.9993L15.4893 4.4C14.9993 2.5 13.8993 2 12.5493 2H11.4593C10.1093 2 8.9993 2.5 8.5193 4.41L8.0293 6.85Z" fill="currentColor" /><path d="M13.4 14.5999C13.21 14.5999 13.02 14.5299 12.87 14.3799L11.47 12.9799C11.33 12.8399 11.25 12.6499 11.25 12.4499V9.65991C11.25 9.24991 11.59 8.90991 12 8.90991C12.41 8.90991 12.75 9.24991 12.75 9.65991V12.1399L13.93 13.3199C14.22 13.6099 14.22 14.0899 13.93 14.3799C13.78 14.5299 13.59 14.5999 13.4 14.5999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCloud;