import { FC } from 'react';
import { IconProps } from "@/types";

const IconUserOctagon: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9999 10.9998C13.2867 10.9998 14.3299 9.95662 14.3299 8.6698C14.3299 7.38298 13.2867 6.33984 11.9999 6.33984C10.7131 6.33984 9.66992 7.38298 9.66992 8.6698C9.66992 9.95662 10.7131 10.9998 11.9999 10.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 16.6599C16 14.8599 14.21 13.3999 12 13.3999C9.79 13.3999 8 14.8599 8 16.6599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" fill="currentColor" /><path d="M11.9999 12.0001C13.2867 12.0001 14.3299 10.9569 14.3299 9.67004C14.3299 8.38322 13.2867 7.34009 11.9999 7.34009C10.7131 7.34009 9.66992 8.38322 9.66992 9.67004C9.66992 10.9569 10.7131 12.0001 11.9999 12.0001Z" fill="currentColor" /><path d="M14.6792 16.6601C15.4892 16.6601 15.9592 15.7601 15.5092 15.0901C14.8292 14.0801 13.5092 13.4001 11.9992 13.4001C10.4892 13.4001 9.16919 14.0801 8.48919 15.0901C8.03919 15.7601 8.50919 16.6601 9.31919 16.6601H14.6792Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconUserOctagon;