import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconExport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 14L12 4M12 4L15 7M12 4L9 7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12L4 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.5303 7.53033C15.2374 7.82322 14.7626 7.82322 14.4697 7.53033L12.75 5.81066L12.75 14C12.75 14.4142 12.4142 14.75 12 14.75C11.5858 14.75 11.25 14.4142 11.25 14L11.25 5.81066L9.53033 7.53033C9.23744 7.82322 8.76256 7.82322 8.46967 7.53033C8.17678 7.23744 8.17678 6.76256 8.46967 6.46967L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L15.5303 6.46967C15.8232 6.76256 15.8232 7.23744 15.5303 7.53033Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.84467 7.90533C9.13756 8.19822 9.61244 8.19822 9.90533 7.90533L11.625 6.18566L11.625 14.375C11.625 14.7892 11.9608 15.125 12.375 15.125C12.7892 15.125 13.125 14.7892 13.125 14.375V6.18566L14.8447 7.90533C15.1376 8.19822 15.6124 8.19822 15.9053 7.90533C16.1982 7.61244 16.1982 7.13756 15.9053 6.84467L12.9053 3.84467C12.6124 3.55178 12.1376 3.55178 11.8447 3.84467L8.84467 6.84467C8.55178 7.13756 8.55178 7.61244 8.84467 7.90533Z" fill="currentColor" /><path d="M12.375 20.375C16.7933 20.375 20.375 16.7933 20.375 12.375L16.625 12.375C15.6822 12.375 15.2108 12.375 14.9179 12.6679C14.625 12.9608 14.625 13.4322 14.625 14.375C14.625 15.6176 13.6176 16.625 12.375 16.625C11.1324 16.625 10.125 15.6176 10.125 14.375C10.125 13.4322 10.125 12.9608 9.83211 12.6679C9.53921 12.375 9.06781 12.375 8.125 12.375H4.375C4.375 16.7933 7.95672 20.375 12.375 20.375Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconExport;