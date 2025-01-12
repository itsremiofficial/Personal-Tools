import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTree: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8403 10.06H8.50023C7.32023 10.06 6.91024 9.27 7.60024 8.31L11.7703 2.47001C12.2603 1.77001 13.0803 1.77001 13.5603 2.47001L17.7302 8.31C18.4302 9.27 18.0203 10.06 16.8403 10.06Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.2602 18H7.09027C5.51027 18 4.97026 16.95 5.90026 15.67L9.89025 10.06H15.4603L19.4503 15.67C20.3803 16.95 19.8402 18 18.2602 18Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22V18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8403 10.06H8.50023C7.32023 10.06 6.91024 9.27001 7.60024 8.31001L11.7703 2.47001C12.2603 1.77001 13.0802 1.77001 13.5702 2.47001L17.7403 8.31001C18.4303 9.27001 18.0203 10.06 16.8403 10.06Z" fill="currentColor" /><path d="M18.2595 18H7.07952C5.49952 18 4.95952 16.95 5.88952 15.67L9.87951 10.06H15.4595L19.4495 15.67C20.3795 16.95 19.8395 18 18.2595 18Z" fill="currentColor" /><path d="M13.4199 18V22C13.4199 22.41 13.0799 22.75 12.6699 22.75C12.2599 22.75 11.9199 22.41 11.9199 22V18H13.4199Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8402 10.06H8.50024C7.32024 10.06 6.91024 9.27001 7.60024 8.31001L11.7702 2.47001C12.2602 1.77001 13.0802 1.77001 13.5702 2.47001L17.7402 8.31001C18.4302 9.27001 18.0202 10.06 16.8402 10.06Z" fill="currentColor" /><path d="M18.2595 18H7.07952C5.49952 18 4.95952 16.95 5.88952 15.67L9.87952 10.06H15.4595L19.4495 15.67C20.3795 16.95 19.8395 18 18.2595 18Z" fill="currentColor" /><path d="M13.4199 18V22C13.4199 22.41 13.0799 22.75 12.6699 22.75C12.2599 22.75 11.9199 22.41 11.9199 22V18H13.4199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTree;