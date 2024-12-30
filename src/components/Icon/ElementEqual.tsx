import { FC } from 'react';
import { IconProps } from "../../types";

const IconElementEqual: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15 15.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M15 19.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.4998 16H13.4998C15.9998 16 17.4998 14.2 17.4998 12V6.91C17.4998 5.86 16.6398 5 15.5898 5H8.41982C7.36982 5 6.50982 5.86 6.50982 6.91V12C6.49982 14.2 7.99981 16 10.4998 16Z" fill="currentColor" /><path d="M10.25 2V5H8.75V2C8.75 1.59 9.09 1.25 9.5 1.25C9.91 1.25 10.25 1.59 10.25 2Z" fill="currentColor" /><path d="M15.25 2V5H13.75V2C13.75 1.59 14.09 1.25 14.5 1.25C14.91 1.25 15.25 1.59 15.25 2Z" fill="currentColor" /><path d="M12.75 16V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V16H12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconElementEqual;