import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconAlignHorizontaSpacing: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 2L3 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M21 2L21 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 4C10.1144 4 9.17157 4 8.58579 4.58579C8 5.17157 8 6.11438 8 8L8 16C8 17.8856 8 18.8284 8.58579 19.4142C9.17157 20 10.1144 20 12 20C13.8856 20 14.8284 20 15.4142 19.4142C16 18.8284 16 17.8856 16 16V8C16 6.11438 16 5.17157 15.4142 4.58579C14.8284 4 13.8856 4 12 4Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M20.9998 22.75C20.5855 22.75 20.2498 22.4142 20.2498 22L20.2498 2C20.2498 1.58579 20.5855 1.25 20.9998 1.25C21.414 1.25 21.7498 1.58579 21.7498 2L21.7498 22C21.7498 22.4142 21.414 22.75 20.9998 22.75ZM2.99976 22.75C2.58554 22.75 2.24976 22.4142 2.24976 22L2.24976 2C2.24976 1.58579 2.58554 1.25 2.99976 1.25C3.41397 1.25 3.74976 1.58579 3.74976 2L3.74976 22C3.74976 22.4142 3.41397 22.75 2.99976 22.75Z" fill="currentColor" /><path d="M12.0002 20C13.8859 20 14.8287 20 15.4145 19.4142C16.0002 18.8284 16.0002 17.8856 16.0002 16L16.0002 8C16.0002 6.11438 16.0002 5.17157 15.4145 4.58579C14.8287 4 13.8859 4 12.0002 4C10.1146 4 9.17182 4 8.58603 4.58579C8.00024 5.17157 8.00024 6.11438 8.00024 8L8.00024 16C8.00024 17.8856 8.00024 18.8284 8.58603 19.4142C9.17182 20 10.1146 20 12.0002 20Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 1.25C3.41422 1.25 3.75 1.58579 3.75 2L3.75 22C3.75 22.4142 3.41421 22.75 3 22.75C2.58579 22.75 2.25 22.4142 2.25 22L2.25 2C2.25 1.58579 2.58579 1.25 3 1.25ZM21 1.25C21.4142 1.25 21.75 1.58579 21.75 2L21.75 22C21.75 22.4142 21.4142 22.75 21 22.75C20.5858 22.75 20.25 22.4142 20.25 22L20.25 2C20.25 1.58579 20.5858 1.25 21 1.25Z" fill="currentColor" /><path d="M12 4C10.1144 4 9.17157 4 8.58579 4.58579C8 5.17157 8 6.11438 8 8V16C8 17.8856 8 18.8284 8.58579 19.4142C9.17157 20 10.1144 20 12 20C13.8856 20 14.8284 20 15.4142 19.4142C16 18.8284 16 17.8856 16 16V8C16 6.11438 16 5.17157 15.4142 4.58579C14.8284 4 13.8856 4 12 4Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAlignHorizontaSpacing;