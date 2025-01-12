import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconCalendarTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66992 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 9.09009H21.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 19C22.6699 19.75 22.4599 20.46 22.0899 21.06C21.3999 22.22 20.1299 23 18.6699 23C17.6599 23 16.7399 22.63 16.0399 22C15.7299 21.74 15.4599 21.42 15.2499 21.06C14.8799 20.46 14.6699 19.75 14.6699 19C14.6699 16.79 16.4599 15 18.6699 15C19.8699 15 20.9399 15.53 21.6699 16.36C22.2899 17.07 22.6699 17.99 22.6699 19Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1099 19L18.0999 19.99L20.2299 18.02" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 8.5V16.36C20.9399 15.53 19.8699 15 18.6699 15C16.4599 15 14.6699 16.79 14.6699 19C14.6699 19.75 14.8799 20.46 15.2499 21.06C15.4599 21.42 15.7299 21.74 16.0399 22H8.66992C5.16992 22 3.66992 20 3.66992 17V8.5C3.66992 5.5 5.16992 3.5 8.66992 3.5H16.6699C20.1699 3.5 21.6699 5.5 21.6699 8.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6654 13.7H12.6744" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.96423 13.7H8.97322" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.96436 16.7H8.97334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4201 3.56V2C17.4201 1.59 17.0801 1.25 16.6701 1.25C16.2601 1.25 15.9201 1.59 15.9201 2V3.5H9.42015V2C9.42015 1.59 9.08015 1.25 8.67015 1.25C8.26015 1.25 7.92015 1.59 7.92015 2V3.56C5.22015 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1301C21.4202 8.34 21.6602 8.09 21.6301 7.81C21.4301 5.42 20.1201 3.81 17.4201 3.56Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6699 10.8401V12.5801C21.6699 13.1901 21.1299 13.6601 20.5299 13.5601C20.2499 13.5201 19.9599 13.4901 19.6699 13.4901C16.6399 13.4901 14.1699 15.9601 14.1699 18.9901C14.1699 19.4501 14.3499 20.0901 14.5399 20.6701C14.7599 21.3201 14.2799 21.9901 13.5899 21.9901H8.66992C5.16992 21.9901 3.66992 19.9901 3.66992 16.9901V10.8301C3.66992 10.2801 4.11992 9.83008 4.66992 9.83008H20.6699C21.2199 9.84008 21.6699 10.2901 21.6699 10.8401Z" fill="currentColor" /><path d="M19.6699 15C17.4599 15 15.6699 16.79 15.6699 19C15.6699 19.75 15.8799 20.46 16.2499 21.06C16.9399 22.22 18.2099 23 19.6699 23C21.1299 23 22.3999 22.22 23.0899 21.06C23.4599 20.46 23.6699 19.75 23.6699 19C23.6699 16.79 21.8799 15 19.6699 15ZM21.7399 18.57L19.6099 20.54C19.4699 20.67 19.2799 20.74 19.0999 20.74C18.9099 20.74 18.7199 20.67 18.5699 20.52L17.5799 19.53C17.2899 19.24 17.2899 18.76 17.5799 18.47C17.8699 18.18 18.3499 18.18 18.6399 18.47L19.1199 18.95L20.7199 17.47C21.0199 17.19 21.4999 17.21 21.7799 17.51C22.0599 17.81 22.0399 18.28 21.7399 18.57Z" fill="currentColor" /><path d="M9.16992 14.9999C8.90992 14.9999 8.64992 14.8899 8.45992 14.7099C8.27992 14.5199 8.16992 14.2599 8.16992 13.9999C8.16992 13.7399 8.27992 13.4799 8.45992 13.2899C8.68992 13.0599 9.03992 12.9499 9.36992 13.0199C9.42992 13.0299 9.48992 13.0499 9.54992 13.0799C9.60992 13.0999 9.66992 13.1299 9.72992 13.1699C9.77992 13.2099 9.82992 13.2499 9.87992 13.2899C10.0599 13.4799 10.1699 13.7399 10.1699 13.9999C10.1699 14.2599 10.0599 14.5199 9.87992 14.7099C9.82992 14.7499 9.77992 14.7899 9.72992 14.8299C9.66992 14.8699 9.60992 14.8999 9.54992 14.9199C9.48992 14.9499 9.42992 14.9699 9.36992 14.9799C9.29992 14.9899 9.22992 14.9999 9.16992 14.9999Z" fill="currentColor" /><path d="M12.6699 14.9999C12.4099 14.9999 12.1499 14.8899 11.9599 14.7099C11.7799 14.5199 11.6699 14.2599 11.6699 13.9999C11.6699 13.7399 11.7799 13.48 11.9599 13.29C12.3399 12.92 13.0099 12.92 13.3799 13.29C13.5599 13.48 13.6699 13.7399 13.6699 13.9999C13.6699 14.2599 13.5599 14.5199 13.3799 14.7099C13.1899 14.8899 12.9299 14.9999 12.6699 14.9999Z" fill="currentColor" /><path d="M9.16992 18.4999C8.90992 18.4999 8.64992 18.3899 8.45992 18.2099C8.27992 18.0199 8.16992 17.7599 8.16992 17.4999C8.16992 17.2399 8.27992 16.9799 8.45992 16.7899C8.55992 16.6999 8.65992 16.6299 8.78992 16.5799C9.15992 16.4199 9.59992 16.5099 9.87992 16.7899C10.0599 16.9799 10.1699 17.2399 10.1699 17.4999C10.1699 17.7599 10.0599 18.0199 9.87992 18.2099C9.68992 18.3899 9.42992 18.4999 9.16992 18.4999Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4202 3.56V2C17.4202 1.59 17.0802 1.25 16.6702 1.25C16.2602 1.25 15.9202 1.59 15.9202 2V3.5H9.42015V2C9.42015 1.59 9.08015 1.25 8.67015 1.25C8.26015 1.25 7.92015 1.59 7.92015 2V3.56C5.22015 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1301C21.4202 8.34 21.6602 8.09 21.6301 7.81C21.4301 5.42 20.1202 3.81 17.4202 3.56Z" fill="currentColor" /><path d="M19.6699 15C17.4599 15 15.6699 16.79 15.6699 19C15.6699 19.75 15.8799 20.46 16.2499 21.06C16.9399 22.22 18.2099 23 19.6699 23C21.1299 23 22.3999 22.22 23.0899 21.06C23.4599 20.46 23.6699 19.75 23.6699 19C23.6699 16.79 21.8799 15 19.6699 15ZM21.7399 18.57L19.6099 20.54C19.4699 20.67 19.2799 20.74 19.0999 20.74C18.9099 20.74 18.7199 20.67 18.5699 20.52L17.5799 19.53C17.2899 19.24 17.2899 18.76 17.5799 18.47C17.8699 18.18 18.3499 18.18 18.6399 18.47L19.1199 18.95L20.7199 17.47C21.0199 17.19 21.4999 17.21 21.7799 17.51C22.0599 17.81 22.0399 18.28 21.7399 18.57Z" fill="currentColor" /><path d="M20.6699 9.84009H4.66992C4.11992 9.84009 3.66992 10.2901 3.66992 10.8401V17.0001C3.66992 20.0001 5.16992 22.0001 8.66992 22.0001H13.5999C14.2899 22.0001 14.7699 21.3301 14.5499 20.6801C14.3499 20.1001 14.1799 19.4601 14.1799 19.0001C14.1799 15.9701 16.6499 13.5001 19.6799 13.5001C19.9699 13.5001 20.2599 13.5201 20.5399 13.5701C21.1399 13.6601 21.6799 13.1901 21.6799 12.5901V10.8501C21.6699 10.2901 21.2199 9.84009 20.6699 9.84009ZM9.87992 18.2101C9.68992 18.3901 9.42992 18.5001 9.16992 18.5001C8.90992 18.5001 8.64992 18.3901 8.45992 18.2101C8.27992 18.0201 8.16992 17.7601 8.16992 17.5001C8.16992 17.2401 8.27992 16.9801 8.45992 16.7901C8.55992 16.7001 8.65992 16.6301 8.78992 16.5801C9.15992 16.4201 9.59992 16.5101 9.87992 16.7901C10.0599 16.9801 10.1699 17.2401 10.1699 17.5001C10.1699 17.7601 10.0599 18.0201 9.87992 18.2101ZM9.87992 14.7101C9.82992 14.7501 9.77992 14.7901 9.72992 14.8301C9.66992 14.8701 9.60992 14.9001 9.54992 14.9201C9.48992 14.9501 9.42992 14.9701 9.36992 14.9801C9.29992 14.9901 9.22992 15.0001 9.16992 15.0001C8.90992 15.0001 8.64992 14.8901 8.45992 14.7101C8.27992 14.5201 8.16992 14.2601 8.16992 14.0001C8.16992 13.7401 8.27992 13.4801 8.45992 13.2901C8.68992 13.0601 9.03992 12.9501 9.36992 13.0201C9.42992 13.0301 9.48992 13.0501 9.54992 13.0801C9.60992 13.1001 9.66992 13.1301 9.72992 13.1701C9.77992 13.2101 9.82992 13.2501 9.87992 13.2901C10.0599 13.4801 10.1699 13.7401 10.1699 14.0001C10.1699 14.2601 10.0599 14.5201 9.87992 14.7101ZM13.3799 14.7101C13.1899 14.8901 12.9299 15.0001 12.6699 15.0001C12.4099 15.0001 12.1499 14.8901 11.9599 14.7101C11.7799 14.5201 11.6699 14.2601 11.6699 14.0001C11.6699 13.7401 11.7799 13.4801 11.9599 13.2901C12.3399 12.9201 13.0099 12.9201 13.3799 13.2901C13.5599 13.4801 13.6699 13.7401 13.6699 14.0001C13.6699 14.2601 13.5599 14.5201 13.3799 14.7101Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCalendarTick;