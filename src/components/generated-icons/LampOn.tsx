import { FC } from 'react';
import { IconProps } from "@/types";

const IconLampOn: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.30035 18.0402V16.8802C6.00035 15.4902 4.11035 12.7802 4.11035 9.90018C4.11035 4.95018 8.66035 1.07018 13.8004 2.19018C16.0604 2.69018 18.0404 4.19018 19.0704 6.26018C21.1604 10.4602 18.9604 14.9202 15.7304 16.8702V18.0302C15.7304 18.3202 15.8404 18.9902 14.7704 18.9902H9.26035C8.16035 19.0002 8.30035 18.5702 8.30035 18.0402Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 22.0002C10.79 21.3502 13.21 21.3502 15.5 22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2107 6.36001C18.1707 4.26001 16.1607 2.71001 13.8307 2.20001C11.3907 1.66001 8.8907 2.24001 6.9807 3.78001C5.0607 5.31001 3.9707 7.60001 3.9707 10.05C3.9707 12.64 5.5207 15.35 7.8607 16.92V17.75C7.8507 18.03 7.8407 18.46 8.1807 18.81C8.5307 19.17 9.0507 19.21 9.4607 19.21H14.5907C15.1307 19.21 15.5407 19.06 15.8207 18.78C16.2007 18.39 16.1907 17.89 16.1807 17.62V16.92C19.2807 14.83 21.2307 10.42 19.2107 6.36001Z" fill="currentColor" /><path d="M15.2592 21.9999C15.1992 21.9999 15.1292 21.9899 15.0692 21.9699C13.0592 21.3999 10.9492 21.3999 8.93918 21.9699C8.56918 22.0699 8.17918 21.8599 8.07918 21.4899C7.96918 21.1199 8.18918 20.7299 8.55918 20.6299C10.8192 19.9899 13.1992 19.9899 15.4592 20.6299C15.8292 20.7399 16.0492 21.1199 15.9392 21.4899C15.8392 21.7999 15.5592 21.9999 15.2592 21.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLampOn;