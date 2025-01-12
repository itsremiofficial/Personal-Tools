import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconNotebook: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6471 15.5357H4.35294M19.6471 15.5357V8C19.6471 6.11438 19.6471 5.17157 19.0613 4.58579C18.4755 4 17.5327 4 15.6471 4H8.35294C6.46732 4 5.52451 4 4.93873 4.58579C4.35294 5.17157 4.35294 6.11438 4.35294 8V15.5357M19.6471 15.5357L21.3911 17.3358C21.4356 17.3818 21.4579 17.4048 21.4787 17.4276C21.7998 17.7802 21.9843 18.2358 21.999 18.7124C22 18.7433 22 18.7753 22 18.8393C22 18.9885 22 19.0631 21.996 19.1261C21.9325 20.1314 21.1314 20.9325 20.1261 20.996C20.0631 21 19.9885 21 19.8393 21H4.16068C4.01148 21 3.93688 21 3.87388 20.996C2.86865 20.9325 2.06749 20.1314 2.00398 19.1261C2 19.0631 2 18.9885 2 18.8393C2 18.7753 2 18.7433 2.00096 18.7124C2.01569 18.2358 2.20022 17.7802 2.52127 17.4276C2.54208 17.4048 2.56438 17.3818 2.60888 17.3358L4.35294 15.5357" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9.5 18.5H14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12.75 6.75C12.75 7.16421 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4.93872 3.58579C4.35294 4.17157 4.35294 5.11438 4.35294 7V14H19.6471V7C19.6471 5.11438 19.6471 4.17157 19.0613 3.58579C18.4755 3 17.5327 3 15.6471 3H8.35294C6.46732 3 5.52451 3 4.93872 3.58579Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M21.3911 16.3358C21.4356 16.3818 21.4579 16.4048 21.4787 16.4276C21.7998 16.7802 21.9843 17.2358 21.999 17.7124C22 17.7433 22 17.7753 22 17.8393C22 17.9885 22 18.0631 21.996 18.1261C21.9325 19.1314 21.1314 19.9325 20.1261 19.996C20.0631 20 19.9885 20 19.8393 20H4.16068C4.01148 20 3.93688 20 3.87388 19.996C2.86865 19.9325 2.06749 19.1314 2.00398 18.1261C2 18.0631 2 17.9885 2 17.8393C2 17.7753 2 17.7433 2.00096 17.7124C2.01569 17.2358 2.20022 16.7802 2.52127 16.4276C2.54205 16.4048 2.56429 16.3819 2.60869 16.336L3.90311 15H20.0969L21.3911 16.3358ZM8.75 18C8.75 17.5858 9.08579 17.25 9.5 17.25H14.5C14.9142 17.25 15.25 17.5858 15.25 18C15.25 18.4142 14.9142 18.75 14.5 18.75H9.5C9.08579 18.75 8.75 18.4142 8.75 18Z" fill="currentColor" /><path d="M12.75 5.75C12.75 6.16421 12.4142 6.5 12 6.5C11.5858 6.5 11.25 6.16421 11.25 5.75C11.25 5.33579 11.5858 5 12 5C12.4142 5 12.75 5.33579 12.75 5.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.3911 16.3358C21.4356 16.3818 21.4579 16.4048 21.4787 16.4276C21.7998 16.7802 21.9843 17.2358 21.999 17.7124C22 17.7433 22 17.7753 22 17.8393C22 17.9885 22 18.0631 21.996 18.1261C21.9325 19.1314 21.1314 19.9325 20.1261 19.996C20.0631 20 19.9885 20 19.8393 20H4.16068C4.01148 20 3.93688 20 3.87388 19.996C2.86865 19.9325 2.06749 19.1314 2.00398 18.1261C2 18.0631 2 17.9885 2 17.8393C2 17.7753 2 17.7433 2.00096 17.7124C2.01569 17.2358 2.20022 16.7802 2.52127 16.4276C2.54208 16.4048 2.56433 16.3818 2.60883 16.3359L3.90311 15H20.0969L21.3911 16.3358ZM8.75 18C8.75 17.5858 9.08579 17.25 9.5 17.25H14.5C14.9142 17.25 15.25 17.5858 15.25 18C15.25 18.4142 14.9142 18.75 14.5 18.75H9.5C9.08579 18.75 8.75 18.4142 8.75 18Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4.35294 7C4.35294 5.11438 4.35294 4.17157 4.93873 3.58579C5.52451 3 6.46732 3 8.35294 3H15.6471C17.5327 3 18.4755 3 19.0613 3.58579C19.6471 4.17157 19.6471 5.11438 19.6471 7V14H4.35294V7ZM12 6.5C12.4142 6.5 12.75 6.16421 12.75 5.75C12.75 5.33579 12.4142 5 12 5C11.5858 5 11.25 5.33579 11.25 5.75C11.25 6.16421 11.5858 6.5 12 6.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconNotebook;