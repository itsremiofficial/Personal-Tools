import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconArrowSquareDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.14014 10.64L12.6701 14.16L16.2001 10.64" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M12.6701 14.9099C12.4801 14.9099 12.2901 14.8399 12.1401 14.6899L8.61008 11.1599C8.32008 10.8699 8.32008 10.3899 8.61008 10.0999C8.90008 9.80995 9.38008 9.80995 9.67008 10.0999L12.6701 13.0999L15.6701 10.0999C15.9601 9.80995 16.4401 9.80995 16.7301 10.0999C17.0201 10.3899 17.0201 10.8699 16.7301 11.1599L13.2001 14.6899C13.0501 14.8399 12.8601 14.9099 12.6701 14.9099Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM16.7299 11.17L13.1999 14.7C13.0499 14.85 12.8599 14.92 12.6699 14.92C12.4799 14.92 12.2899 14.85 12.1399 14.7L8.60992 11.17C8.31992 10.88 8.31992 10.4 8.60992 10.11C8.89992 9.82 9.37992 9.82 9.66992 10.11L12.6699 13.11L15.6699 10.11C15.9599 9.82 16.4399 9.82 16.7299 10.11C17.0199 10.4 17.0199 10.87 16.7299 11.17Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowSquareDown;