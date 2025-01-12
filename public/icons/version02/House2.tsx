import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconHouse2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 22H22.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.62012 22.0003L3.67012 9.97023C3.67012 9.36023 3.96012 8.78029 4.44012 8.40029L11.4401 2.95027C12.1601 2.39027 13.1701 2.39027 13.9001 2.95027L20.9001 8.39028C21.3901 8.77028 21.6701 9.35023 21.6701 9.97023V22.0003" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.1699 11H9.16992C8.33992 11 7.66992 11.67 7.66992 12.5V22H17.6699V12.5C17.6699 11.67 16.9999 11 16.1699 11Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6699 16.25V17.75" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.1699 7.5H14.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4199 22C23.4199 22.41 23.0799 22.75 22.6699 22.75H2.66992C2.25992 22.75 1.91992 22.41 1.91992 22C1.91992 21.58 2.25992 21.25 2.66992 21.25H22.6699C23.0799 21.25 23.4199 21.58 23.4199 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6701 9.98017V21.2502H3.62012L3.67012 9.97016C3.67012 9.36016 3.95012 8.78022 4.44012 8.40022L11.4401 2.96021C12.1601 2.39021 13.1801 2.39021 13.9001 2.96021L20.9001 8.40022C21.3901 8.78022 21.6701 9.36017 21.6701 9.98017Z" fill="currentColor" /><path d="M14.1699 8.25H11.1699C10.7599 8.25 10.4199 7.91 10.4199 7.5C10.4199 7.09 10.7599 6.75 11.1699 6.75H14.1699C14.5799 6.75 14.9199 7.09 14.9199 7.5C14.9199 7.91 14.5799 8.25 14.1699 8.25Z" fill="currentColor" /><path d="M16.1699 11H9.16992C8.33992 11 7.66992 11.67 7.66992 12.5V22H17.6699V12.5C17.6699 11.67 16.9999 11 16.1699 11ZM11.4199 17.75C11.4199 18.16 11.0799 18.5 10.6699 18.5C10.2599 18.5 9.91992 18.16 9.91992 17.75V16.25C9.91992 15.84 10.2599 15.5 10.6699 15.5C11.0799 15.5 11.4199 15.84 11.4199 16.25V17.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 15.5C10.2599 15.5 9.91992 15.84 9.91992 16.25V17.75C9.91992 18.16 10.2599 18.5 10.6699 18.5C11.0799 18.5 11.4199 18.16 11.4199 17.75V16.25C11.4199 15.84 11.0799 15.5 10.6699 15.5Z" fill="currentColor" /><path d="M22.6699 21.2502H21.6699V9.98021C21.6699 9.36021 21.3899 8.78021 20.8999 8.40021L13.8999 2.96021C13.1799 2.39021 12.1599 2.39021 11.4399 2.96021L4.43992 8.40021C3.94992 8.78021 3.66992 9.36021 3.66992 9.97021L3.61992 21.2502H2.66992C2.25992 21.2502 1.91992 21.5802 1.91992 22.0002C1.91992 22.4102 2.25992 22.7502 2.66992 22.7502H22.6699C23.0799 22.7502 23.4199 22.4102 23.4199 22.0002C23.4199 21.5802 23.0799 21.2502 22.6699 21.2502ZM11.1699 6.75021H14.1699C14.5799 6.75021 14.9199 7.09021 14.9199 7.50021C14.9199 7.91021 14.5799 8.25021 14.1699 8.25021H11.1699C10.7599 8.25021 10.4199 7.91021 10.4199 7.50021C10.4199 7.09021 10.7599 6.75021 11.1699 6.75021ZM17.6699 21.2502H7.66992V12.5002C7.66992 11.6702 8.33992 11.0002 9.16992 11.0002H16.1699C16.9999 11.0002 17.6699 11.6702 17.6699 12.5002V21.2502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHouse2;