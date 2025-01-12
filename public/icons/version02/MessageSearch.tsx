import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMessageSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8699 21.37C13.2099 22.25 12.1299 22.25 11.4699 21.37L9.96991 19.37C9.79991 19.15 9.43992 18.97 9.16992 18.97H8.66992C4.66992 18.97 2.66992 17.97 2.66992 12.97V7.96997C2.66992 3.96997 4.66992 1.96997 8.66992 1.96997H16.6699C20.6699 1.96997 22.6699 3.96997 22.6699 7.96997V12.97" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.8699 21.4C20.6372 21.4 22.0699 19.9673 22.0699 18.2C22.0699 16.4327 20.6372 15 18.8699 15C17.1026 15 15.6699 16.4327 15.6699 18.2C15.6699 19.9673 17.1026 21.4 18.8699 21.4Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 22L21.6699 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M16.6664 11H16.6754" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6654 11H12.6744" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.66443 11H8.67341" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1999 21.47L22.4599 20.73C22.8399 20.15 23.0699 19.45 23.0699 18.7C23.0699 16.66 21.4099 15 19.3699 15C17.3299 15 15.6699 16.66 15.6699 18.7C15.6699 20.74 17.3299 22.4 19.3699 22.4C20.1199 22.4 20.8199 22.17 21.3999 21.79L22.1399 22.53C22.2899 22.68 22.4799 22.75 22.6699 22.75C22.8599 22.75 23.0499 22.68 23.1999 22.53C23.4899 22.24 23.4899 21.76 23.1999 21.47Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 12.97V6.99001C2.66992 4.24001 4.90992 2.01001 7.66992 2.01001H17.6699C20.4299 2.01001 22.6699 4.24001 22.6699 7.00001V13.98C22.6699 16.73 20.4299 18.96 17.6699 18.96H16.1699C15.8599 18.96 15.5599 19.11 15.3699 19.36L13.8699 21.35C13.2099 22.23 12.1299 22.23 11.4699 21.35L9.96991 19.36C9.79991 19.14 9.44992 18.96 9.16992 18.96H7.66992C4.90992 18.96 2.66992 16.73 2.66992 13.98V12.97Z" fill="currentColor" /><path d="M12.6702 12C12.1102 12 11.6602 11.55 11.6602 11C11.6602 10.45 12.1102 10 12.6602 10C13.2102 10 13.6602 10.45 13.6602 11C13.6602 11.55 13.2302 12 12.6702 12Z" fill="currentColor" /><path d="M16.6702 12C16.1102 12 15.6602 11.55 15.6602 11C15.6602 10.45 16.1102 10 16.6602 10C17.2102 10 17.6602 10.45 17.6602 11C17.6602 11.55 17.2302 12 16.6702 12Z" fill="currentColor" /><path d="M8.67017 12C8.11017 12 7.66016 11.55 7.66016 11C7.66016 10.45 8.11016 10 8.66016 10C9.21016 10 9.66016 10.45 9.66016 11C9.66016 11.55 9.23017 12 8.67017 12Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 2H7.66992C4.90992 2 2.66992 4.23 2.66992 6.98V12.96V13.96C2.66992 16.71 4.90992 18.94 7.66992 18.94H9.16992C9.43992 18.94 9.79992 19.12 9.96992 19.34L11.4699 21.33C12.1299 22.21 13.2099 22.21 13.8699 21.33L15.3699 19.34C15.5599 19.09 15.8599 18.94 16.1699 18.94H17.6699C20.4299 18.94 22.6699 16.71 22.6699 13.96V6.98C22.6699 4.23 20.4299 2 17.6699 2ZM16.3299 14.53C16.1799 14.68 15.9899 14.75 15.7999 14.75C15.6099 14.75 15.4199 14.68 15.2699 14.53L14.5299 13.79C13.9499 14.17 13.2499 14.4 12.4999 14.4C10.4599 14.4 8.79992 12.74 8.79992 10.7C8.79992 8.66 10.4499 7 12.4999 7C14.5499 7 16.1999 8.66 16.1999 10.7C16.1999 11.45 15.9699 12.15 15.5899 12.73L16.3299 13.47C16.6199 13.76 16.6199 14.24 16.3299 14.53Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessageSearch;