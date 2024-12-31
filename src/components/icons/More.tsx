import { FC } from 'react';
import { IconProps } from "../../types";

const IconMore2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9998 9.32C13.1898 9.32 14.1598 8.35 14.1598 7.16C14.1598 5.97 13.1898 5 11.9998 5C10.8098 5 9.83984 5.97 9.83984 7.16C9.83984 8.35 10.8098 9.32 11.9998 9.32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.78988 19.0002C7.97988 19.0002 8.94988 18.0302 8.94988 16.8402C8.94988 15.6502 7.97988 14.6802 6.78988 14.6802C5.59988 14.6802 4.62988 15.6502 4.62988 16.8402C4.62988 18.0302 5.58988 19.0002 6.78988 19.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.2098 19.0002C18.3998 19.0002 19.3698 18.0302 19.3698 16.8402C19.3698 15.6502 18.3998 14.6802 17.2098 14.6802C16.0198 14.6802 15.0498 15.6502 15.0498 16.8402C15.0498 18.0302 16.0198 19.0002 17.2098 19.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.00068 19.0001C9.00068 19.8401 9.13068 20.6601 9.37068 21.4201C5.53068 20.0901 2.63068 16.5601 2.33068 12.4301C2.03068 8.04012 4.56068 3.94012 8.65068 2.22012C9.71068 1.78012 10.2507 2.10012 10.4807 2.33012C10.7007 2.55012 11.0107 3.08012 10.5707 4.09012C10.1207 5.13012 9.90068 6.23012 9.90068 7.37012C9.91068 9.41012 10.7107 11.3001 12.0107 12.7501C10.1807 14.2101 9.00068 16.4701 9.00068 19.0001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMore2;