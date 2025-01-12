import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconCalendarAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.66992 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6699 2V5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 9.09009H21.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6699 23C20.8791 23 22.6699 21.2091 22.6699 19C22.6699 16.7909 20.8791 15 18.6699 15C16.4608 15 14.6699 16.7909 14.6699 19C14.6699 21.2091 16.4608 23 18.6699 23Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.1597 19.05H17.1797" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6699 17.5901V20.5801" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 8.5V16.36C20.9399 15.53 19.8699 15 18.6699 15C16.4599 15 14.6699 16.79 14.6699 19C14.6699 19.75 14.8799 20.46 15.2499 21.06C15.4599 21.42 15.7299 21.74 16.0399 22H8.66992C5.16992 22 3.66992 20 3.66992 17V8.5C3.66992 5.5 5.16992 3.5 8.66992 3.5H16.6699C20.1699 3.5 21.6699 5.5 21.6699 8.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6654 13.7H12.6744" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.96423 13.7H8.97322" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.96436 16.7H8.97334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4202 3.56V2C17.4202 1.59 17.0802 1.25 16.6702 1.25C16.2602 1.25 15.9202 1.59 15.9202 2V3.5H9.42016V2C9.42016 1.59 9.08016 1.25 8.67016 1.25C8.26016 1.25 7.92016 1.59 7.92016 2V3.56C5.22016 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1302C21.4202 8.34 21.6602 8.09 21.6302 7.81C21.4302 5.42 20.1202 3.81 17.4202 3.56Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6699 10.8401V12.5801C21.6699 13.1901 21.1299 13.6601 20.5299 13.5601C20.2499 13.5201 19.9599 13.4901 19.6699 13.4901C16.6399 13.4901 14.1699 15.9601 14.1699 18.9901C14.1699 19.4501 14.3499 20.0901 14.5399 20.6701C14.7599 21.3201 14.2799 21.9901 13.5899 21.9901H8.66992C5.16992 21.9901 3.66992 19.9901 3.66992 16.9901V10.8301C3.66992 10.2801 4.11992 9.83008 4.66992 9.83008H20.6699C21.2199 9.84008 21.6699 10.2901 21.6699 10.8401Z" fill="currentColor" /><path d="M9.16992 14.9999C8.90992 14.9999 8.64992 14.8899 8.45992 14.7099C8.27992 14.5199 8.16992 14.2599 8.16992 13.9999C8.16992 13.7399 8.27992 13.4799 8.45992 13.2899C8.68992 13.0599 9.03992 12.9499 9.36992 13.0199C9.42992 13.0299 9.48992 13.0499 9.54992 13.0799C9.60992 13.0999 9.66992 13.1299 9.72992 13.1699C9.77992 13.2099 9.82992 13.2499 9.87992 13.2899C10.0599 13.4799 10.1699 13.7399 10.1699 13.9999C10.1699 14.2599 10.0599 14.5199 9.87992 14.7099C9.82992 14.7499 9.77992 14.7899 9.72992 14.8299C9.66992 14.8699 9.60992 14.8999 9.54992 14.9199C9.48992 14.9499 9.42992 14.9699 9.36992 14.9799C9.29992 14.9899 9.22992 14.9999 9.16992 14.9999Z" fill="currentColor" /><path d="M12.6699 14.9999C12.4099 14.9999 12.1499 14.8899 11.9599 14.7099C11.7799 14.5199 11.6699 14.2599 11.6699 13.9999C11.6699 13.7399 11.7799 13.48 11.9599 13.29C12.3399 12.92 13.0099 12.92 13.3799 13.29C13.5599 13.48 13.6699 13.7399 13.6699 13.9999C13.6699 14.2599 13.5599 14.5199 13.3799 14.7099C13.1899 14.8899 12.9299 14.9999 12.6699 14.9999Z" fill="currentColor" /><path d="M9.16992 18.4999C8.90992 18.4999 8.64992 18.3899 8.45992 18.2099C8.27992 18.0199 8.16992 17.7599 8.16992 17.4999C8.16992 17.2399 8.27992 16.9799 8.45992 16.7899C8.55992 16.6999 8.65992 16.6299 8.78992 16.5799C9.15992 16.4199 9.59992 16.5099 9.87992 16.7899C10.0599 16.9799 10.1699 17.2399 10.1699 17.4999C10.1699 17.7599 10.0599 18.0199 9.87992 18.2099C9.68992 18.3899 9.42992 18.4999 9.16992 18.4999Z" fill="currentColor" /><path d="M22.4999 16.17C20.9399 14.61 18.3999 14.61 16.8399 16.17C15.2799 17.73 15.2799 20.27 16.8399 21.83C18.3999 23.39 20.9399 23.39 22.4999 21.83C24.0599 20.27 24.0599 17.73 22.4999 16.17ZM21.7399 19.56C21.6099 19.7 21.4199 19.78 21.2099 19.78H20.4699V20.56C20.4699 20.77 20.3899 20.95 20.2499 21.09C20.1099 21.23 19.9299 21.31 19.7199 21.31C19.3099 21.31 18.9699 20.97 18.9699 20.56V19.78H18.2199C17.8099 19.78 17.4699 19.45 17.4699 19.03C17.4699 18.62 17.8099 18.28 18.2199 18.28H18.9699V17.57C18.9699 17.16 19.2999 16.82 19.7199 16.82C20.1299 16.82 20.4699 17.16 20.4699 17.57V18.28H21.2099C21.6299 18.28 21.9599 18.62 21.9599 19.03C21.9599 19.24 21.8799 19.43 21.7399 19.56Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4202 3.56V2C17.4202 1.59 17.0802 1.25 16.6702 1.25C16.2602 1.25 15.9202 1.59 15.9202 2V3.5H9.42015V2C9.42015 1.59 9.08015 1.25 8.67015 1.25C8.26015 1.25 7.92015 1.59 7.92015 2V3.56C5.22015 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1301C21.4202 8.34 21.6602 8.09 21.6301 7.81C21.4301 5.42 20.1202 3.81 17.4202 3.56Z" fill="currentColor" /><path d="M20.6699 9.84009H4.66992C4.11992 9.84009 3.66992 10.2901 3.66992 10.8401V17.0001C3.66992 20.0001 5.16992 22.0001 8.66992 22.0001H13.5999C14.2899 22.0001 14.7699 21.3301 14.5499 20.6801C14.3499 20.1001 14.1799 19.4601 14.1799 19.0001C14.1799 15.9701 16.6499 13.5001 19.6799 13.5001C19.9699 13.5001 20.2599 13.5201 20.5399 13.5701C21.1399 13.6601 21.6799 13.1901 21.6799 12.5901V10.8501C21.6699 10.2901 21.2199 9.84009 20.6699 9.84009ZM9.87992 17.7101C9.77992 17.8001 9.66992 17.8701 9.54992 17.9201C9.42992 17.9701 9.29992 18.0001 9.16992 18.0001C9.03992 18.0001 8.90992 17.9701 8.78992 17.9201C8.66992 17.8701 8.55992 17.8001 8.45992 17.7101C8.27992 17.5201 8.16992 17.2601 8.16992 17.0001C8.16992 16.9401 8.17992 16.8701 8.18992 16.8101C8.19992 16.7401 8.21992 16.6801 8.24992 16.6201C8.26992 16.5601 8.29992 16.5001 8.33992 16.4401C8.36992 16.3901 8.41992 16.3401 8.45992 16.2901C8.55992 16.2001 8.66992 16.1301 8.78992 16.0801C9.02992 15.9801 9.30992 15.9801 9.54992 16.0801C9.66992 16.1301 9.77992 16.2001 9.87992 16.2901C9.91992 16.3401 9.96992 16.3901 9.99992 16.4401C10.0399 16.5001 10.0699 16.5601 10.0899 16.6201C10.1199 16.6801 10.1399 16.7401 10.1499 16.8101C10.1599 16.8701 10.1699 16.9401 10.1699 17.0001C10.1699 17.2601 10.0599 17.5201 9.87992 17.7101ZM9.87992 14.2101C9.77992 14.3001 9.66992 14.3701 9.54992 14.4201C9.42992 14.4701 9.29992 14.5001 9.16992 14.5001C9.03992 14.5001 8.90992 14.4701 8.78992 14.4201C8.65992 14.3701 8.55992 14.3001 8.45992 14.2101C8.27992 14.0201 8.16992 13.7601 8.16992 13.5001C8.16992 13.2401 8.27992 12.9801 8.45992 12.7901C8.55992 12.7001 8.66992 12.6301 8.78992 12.5801C9.02992 12.4801 9.30992 12.4801 9.54992 12.5801C9.66992 12.6301 9.77992 12.7001 9.87992 12.7901C9.91992 12.8401 9.96992 12.8901 9.99992 12.9401C10.0399 13.0001 10.0699 13.0601 10.0899 13.1201C10.1199 13.1801 10.1399 13.2401 10.1499 13.3001C10.1599 13.3701 10.1699 13.4401 10.1699 13.5001C10.1699 13.7601 10.0599 14.0201 9.87992 14.2101ZM13.3799 14.2101C13.1899 14.3901 12.9399 14.5001 12.6699 14.5001C12.5399 14.5001 12.4099 14.4701 12.2899 14.4201C12.1599 14.3701 12.0599 14.3001 11.9599 14.2101C11.7799 14.0201 11.6699 13.7601 11.6699 13.5001C11.6699 13.4401 11.6799 13.3701 11.6899 13.3001C11.6999 13.2401 11.7199 13.1801 11.7499 13.1201C11.7699 13.0601 11.7999 13.0001 11.8399 12.9401C11.8799 12.8901 11.9199 12.8401 11.9599 12.7901C12.3299 12.4201 12.9999 12.4201 13.3799 12.7901C13.4199 12.8401 13.4599 12.8901 13.4999 12.9401C13.5399 13.0001 13.5699 13.0601 13.5899 13.1201C13.6199 13.1801 13.6399 13.2401 13.6499 13.3001C13.6599 13.3701 13.6699 13.4401 13.6699 13.5001C13.6699 13.7601 13.5599 14.0201 13.3799 14.2101Z" fill="currentColor" /><path d="M22.4999 16.17C20.9399 14.61 18.3999 14.61 16.8399 16.17C15.2799 17.73 15.2799 20.27 16.8399 21.83C18.3999 23.39 20.9399 23.39 22.4999 21.83C24.0599 20.27 24.0599 17.73 22.4999 16.17ZM21.7399 19.56C21.6099 19.7 21.4199 19.78 21.2099 19.78H20.4699V20.56C20.4699 20.77 20.3899 20.95 20.2499 21.09C20.1099 21.23 19.9299 21.31 19.7199 21.31C19.3099 21.31 18.9699 20.97 18.9699 20.56V19.78H18.2199C17.8099 19.78 17.4699 19.45 17.4699 19.03C17.4699 18.62 17.8099 18.28 18.2199 18.28H18.9699V17.57C18.9699 17.16 19.2999 16.82 19.7199 16.82C20.1299 16.82 20.4699 17.16 20.4699 17.57V18.28H21.2099C21.6299 18.28 21.9599 18.62 21.9599 19.03C21.9599 19.24 21.8799 19.43 21.7399 19.56Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCalendarAdd;