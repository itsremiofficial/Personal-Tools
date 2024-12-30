import { FC } from 'react';
import { IconProps } from "../../types";

const IconMan: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.5 2.5L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2.5H21.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.2902 4.13998L17.2202 7.92998C17.2102 8.44998 17.5403 9.13998 17.9603 9.44998L20.4403 11.33C22.0303 12.53 21.7703 14 19.8703 14.6L16.6403 15.61C16.1003 15.78 15.5303 16.37 15.3903 16.92L14.6203 19.86C14.0103 22.18 12.4902 22.41 11.2302 20.37L9.47024 17.52C9.15024 17 8.39024 16.61 7.79024 16.64L4.45028 16.81C2.06028 16.93 1.38027 15.55 2.94027 13.73L4.92025 11.43C5.29025 11 5.46024 10.2 5.29024 9.65999L4.28029 6.42998C3.69029 4.52998 4.75028 3.47999 6.64028 4.09999L9.59029 5.06999C10.0903 5.22999 10.8403 5.11998 11.2603 4.80998L14.3403 2.58998C16.0003 1.38998 17.3302 2.08998 17.2902 4.13998Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.4403 20.4699L18.4103 17.4399C18.1203 17.1499 17.6403 17.1499 17.3503 17.4399C17.0603 17.7299 17.0603 18.2099 17.3503 18.4999L20.3803 21.5299C20.5303 21.6799 20.7203 21.7499 20.9103 21.7499C21.1003 21.7499 21.2903 21.6799 21.4403 21.5299C21.7303 21.2399 21.7303 20.7599 21.4403 20.4699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMan;