import { FC } from 'react';
import { IconProps } from "@/types";

const IconReceiveSquare2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10.5898 13.3401H14.8298V9.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.8299 13.3402L9.16992 7.68018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M13.0211 12.5901H10.5911C10.1811 12.5901 9.8411 12.9301 9.8411 13.3401C9.8411 13.7501 10.1811 14.0901 10.5911 14.0901H14.8311C14.9311 14.0901 15.0211 14.0701 15.1211 14.0301C15.3011 13.9501 15.4511 13.8101 15.5311 13.6201C15.5711 13.5301 15.5911 13.4301 15.5911 13.3301V9.10011C15.5911 8.69011 15.2511 8.35011 14.8411 8.35011C14.4311 8.35011 14.0911 8.69011 14.0911 9.10011V11.5301L9.71111 7.15012C9.42111 6.86012 8.94109 6.86012 8.65109 7.15012C8.36109 7.44012 8.36109 7.92011 8.65109 8.21011L13.0211 12.5901Z" fill="currentColor" /><path d="M18.7107 16.2802C18.5807 15.8902 18.1607 15.6802 17.7607 15.8102C14.0407 17.0502 9.95066 17.0502 6.23066 15.8102C5.84066 15.6802 5.41067 15.8902 5.28067 16.2802C5.15067 16.6702 5.36067 17.1002 5.75067 17.2302C7.76067 17.9002 9.87067 18.2402 11.9907 18.2402C14.1107 18.2402 16.2207 17.9002 18.2307 17.2302C18.6307 17.0902 18.8407 16.6702 18.7107 16.2802Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceiveSquare2;