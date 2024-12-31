import { FC } from 'react';
import { IconProps } from "../../types";

const IconArrowDown2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 8.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12.5L12 15.5L15 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M15.5295 11.97C15.2395 11.68 14.7595 11.68 14.4695 11.97L12.7495 13.69V8.5C12.7495 8.09 12.4095 7.75 11.9995 7.75C11.5895 7.75 11.2495 8.09 11.2495 8.5V13.69L9.52945 11.97C9.23945 11.68 8.75945 11.68 8.46945 11.97C8.17945 12.26 8.17945 12.74 8.46945 13.03L11.4695 16.03C11.6195 16.18 11.8095 16.25 11.9995 16.25C12.1895 16.25 12.3795 16.18 12.5295 16.03L15.5295 13.03C15.8195 12.74 15.8195 12.26 15.5295 11.97Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowDown2;