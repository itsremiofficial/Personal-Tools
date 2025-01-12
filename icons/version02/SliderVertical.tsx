import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSliderVertical: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16992 5H17.1699C17.7899 5 18.3399 5.02 18.8299 5.09C21.4599 5.38 22.1699 6.62 22.1699 10V14C22.1699 17.38 21.4599 18.62 18.8299 18.91C18.3399 18.98 17.7899 19 17.1699 19H8.16992C7.54992 19 6.99992 18.98 6.50992 18.91C3.87992 18.62 3.16992 17.38 3.16992 14V10C3.16992 6.62 3.87992 5.38 6.50992 5.09C6.99992 5.02 7.54992 5 8.16992 5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.16992 2H20.1699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.66992 22H20.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.61 3.5H5.72998C5.31998 3.5 4.97998 3.16 4.97998 2.75C4.97998 2.34 5.31998 2 5.72998 2H19.61C20.02 2 20.36 2.34 20.36 2.75C20.36 3.16 20.02 3.5 19.61 3.5Z" fill="currentColor" /><path d="M19.61 22H5.72998C5.31998 22 4.97998 21.66 4.97998 21.25C4.97998 20.84 5.31998 20.5 5.72998 20.5H19.61C20.02 20.5 20.36 20.84 20.36 21.25C20.36 21.66 20.02 22 19.61 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M3.41992 7.6001V16.4001C3.41992 18.0601 4.75992 19.4001 6.41992 19.4001H18.9199C20.5799 19.4001 21.9199 18.0601 21.9199 16.4001V7.6001C21.9199 5.9401 20.5799 4.6001 18.9199 4.6001H6.41992C4.75992 4.6001 3.41992 5.9401 3.41992 7.6001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.61 3.5H5.72998C5.31998 3.5 4.97998 3.16 4.97998 2.75C4.97998 2.34 5.31998 2 5.72998 2H19.61C20.02 2 20.36 2.34 20.36 2.75C20.36 3.16 20.02 3.5 19.61 3.5Z" fill="currentColor" /><path d="M19.61 22H5.72998C5.31998 22 4.97998 21.66 4.97998 21.25C4.97998 20.84 5.31998 20.5 5.72998 20.5H19.61C20.02 20.5 20.36 20.84 20.36 21.25C20.36 21.66 20.02 22 19.61 22Z" fill="currentColor" /><path d="M3.41992 8V16C3.41992 17.66 4.75992 19 6.41992 19H18.9199C20.5799 19 21.9199 17.66 21.9199 16V8C21.9199 6.34 20.5799 5 18.9199 5H6.41992C4.75992 5 3.41992 6.34 3.41992 8Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSliderVertical;