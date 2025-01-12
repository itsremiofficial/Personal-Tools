import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTV: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.0001C22 18.8286 22 20.2428 21.1213 21.1214C20.2426 22.0001 18.8284 22.0001 16 22.0001L8 22.0001C5.17157 22.0001 3.75736 22.0001 2.87868 21.1214C2 20.2428 2 18.8286 2 16.0001L2 12.0001C2 9.1717 2 7.75748 2.87868 6.8788C3.75736 6.00012 5.17157 6.00012 8 6.00012L16 6.00012C18.8284 6.00012 20.2426 6.00012 21.1213 6.8788C22 7.75748 22 9.17169 22 12.0001V16.0001Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M9 2.00012L12 5.50012L15 2.00012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M16 6.00012V22.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M20 16.0001C20 15.4478 19.5523 15.0001 19 15.0001C18.4477 15.0001 18 15.4478 18 16.0001C18 16.5524 18.4477 17.0001 19 17.0001C19.5523 17.0001 20 16.5524 20 16.0001Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M20 12.0001C20 11.4478 19.5523 11.0001 19 11.0001C18.4477 11.0001 18 11.4478 18 12.0001C18 12.5524 18.4477 13.0001 19 13.0001C19.5523 13.0001 20 12.5524 20 12.0001Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 6.00024H13.4163H10.5837H8C5.17157 6.00024 3.75736 6.00024 2.87868 6.87893C2 7.7576 2 9.17182 2 12.0002V16.0002C2 18.8287 2 20.2429 2.87868 21.1216C3.75736 22.0002 5.17157 22.0002 8 22.0002L16 22.0002V6.00024Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M22 11.9999V15.9999C22 18.8284 22 20.2426 21.1213 21.1212C20.296 21.9466 18.9983 21.9967 16.5 21.9997H16V6.00012H16.5C18.9983 6.00317 20.296 6.0533 21.1213 6.8786C22 7.75728 22 9.1715 22 11.9999Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M13.4163 6.00024L15.5695 3.48823C15.839 3.17373 15.8026 2.70026 15.4881 2.43069C15.1736 2.16113 14.7001 2.19755 14.4306 2.51204L12 5.34769L9.56946 2.51204C9.29989 2.19755 8.82641 2.16113 8.51192 2.43069C8.19743 2.70026 8.161 3.17374 8.43057 3.48823L10.5837 6.00024H13.4163Z" fill="currentColor" /><path d="M19 11.0001C19.5523 11.0001 20 11.4478 20 12.0001C20 12.5524 19.5523 13.0001 19 13.0001C18.4477 13.0001 18 12.5524 18 12.0001C18 11.4478 18.4477 11.0001 19 11.0001Z" fill="currentColor" /><path d="M19 15.0001C19.5523 15.0001 20 15.4478 20 16.0001C20 16.5524 19.5523 17.0001 19 17.0001C18.4477 17.0001 18 16.5524 18 16.0001C18 15.4478 18.4477 15.0001 19 15.0001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 16.0002V12.0002C22 9.17181 22 7.75759 21.1213 6.87891C20.296 6.05361 18.9983 6.00348 16.5 6.00043V22C18.9983 21.997 20.296 21.9469 21.1213 21.1216C22 20.2429 22 18.8287 22 16.0002ZM19 11.0001C19.5523 11.0001 20 11.4478 20 12.0001C20 12.5524 19.5523 13.0001 19 13.0001C18.4477 13.0001 18 12.5524 18 12.0001C18 11.4478 18.4477 11.0001 19 11.0001ZM19 15.0001C19.5523 15.0001 20 15.4478 20 16.0001C20 16.5524 19.5523 17.0001 19 17.0001C18.4477 17.0001 18 16.5524 18 16.0001C18 15.4478 18.4477 15.0001 19 15.0001Z" fill="currentColor" /><path d="M15.5694 3.48823L13.4163 6.00024H15V22.0002L8 22.0002C5.17157 22.0002 3.75736 22.0002 2.87868 21.1216C2 20.2429 2 18.8287 2 16.0002V12.0002C2 9.17181 2 7.7576 2.87868 6.87892C3.75736 6.00024 5.17157 6.00024 8 6.00024H10.5837L8.43054 3.48823C8.16098 3.17374 8.1974 2.70026 8.51189 2.43069C8.82639 2.16113 9.29986 2.19755 9.56943 2.51204L12 5.34769L14.4305 2.51204C14.7001 2.19755 15.1736 2.16113 15.4881 2.43069C15.8026 2.70026 15.839 3.17373 15.5694 3.48823Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTV;