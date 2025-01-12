import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconAdditem: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_78604)"><path opacity={duotone ? "0.4" : "1"} d="M8.66992 16H6.09992C3.80992 16 2.66992 14.86 2.66992 12.57V5.43C2.66992 3.14 3.80992 2 6.09992 2H10.6699C12.9599 2 14.0999 3.14 14.0999 5.43" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19.2402 22H14.6702C12.3802 22 11.2402 20.86 11.2402 18.57V11.43C11.2402 9.14 12.3802 8 14.6702 8H19.2402C21.5302 8 22.6702 9.14 22.6702 11.43V18.57C22.6702 20.86 21.5302 22 19.2402 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.5391 15H18.7991" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1699 16.6301V13.3701" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2402 22H14.6702C12.3802 22 11.2402 20.86 11.2402 18.57V11.43C11.2402 9.14 12.3802 8 14.6702 8H19.2402C21.5302 8 22.6702 9.14 22.6702 11.43V18.57C22.6702 20.86 21.5302 22 19.2402 22Z" fill="currentColor" /><path d="M14.0999 5.43V6.77C11.4799 6.98 9.98992 8.66 9.98992 11.43V16H6.09992C3.80992 16 2.66992 14.86 2.66992 12.57V5.43C2.66992 3.14 3.80992 2 6.09992 2H10.6699C12.9599 2 14.0999 3.14 14.0999 5.43Z" fill="currentColor" /><path d="M18.8 14.2501H17.92V13.3701C17.92 12.9601 17.58 12.6201 17.17 12.6201C16.76 12.6201 16.42 12.9601 16.42 13.3701V14.2501H15.54C15.13 14.2501 14.79 14.5901 14.79 15.0001C14.79 15.4101 15.13 15.7501 15.54 15.7501H16.42V16.6301C16.42 17.0401 16.76 17.3801 17.17 17.3801C17.58 17.3801 17.92 17.0401 17.92 16.6301V15.7501H18.8C19.21 15.7501 19.55 15.4101 19.55 15.0001C19.55 14.5901 19.21 14.2501 18.8 14.2501Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0999 5.43V6.77C11.4799 6.98 9.98992 8.66 9.98992 11.43V16H6.09992C3.80992 16 2.66992 14.86 2.66992 12.57V5.43C2.66992 3.14 3.80992 2 6.09992 2H10.6699C12.9599 2 14.0999 3.14 14.0999 5.43Z" fill="currentColor" /><path d="M19.2402 8H14.6702C12.3802 8 11.2402 9.14 11.2402 11.43V18.57C11.2402 20.86 12.3802 22 14.6702 22H19.2402C21.5302 22 22.6702 20.86 22.6702 18.57V11.43C22.6702 9.14 21.5302 8 19.2402 8ZM18.8002 15.75H17.9202V16.63C17.9202 17.04 17.5802 17.38 17.1702 17.38C16.7602 17.38 16.4202 17.04 16.4202 16.63V15.75H15.5402C15.1302 15.75 14.7902 15.41 14.7902 15C14.7902 14.59 15.1302 14.25 15.5402 14.25H16.4202V13.37C16.4202 12.96 16.7602 12.62 17.1702 12.62C17.5802 12.62 17.9202 12.96 17.9202 13.37V14.25H18.8002C19.2102 14.25 19.5502 14.59 19.5502 15C19.5502 15.41 19.2102 15.75 18.8002 15.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAdditem;