import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTickSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M8.41992 12L11.2499 14.83L16.9199 9.17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path d="M11.2504 15.58C11.0504 15.58 10.8604 15.5 10.7204 15.36L7.89035 12.53C7.60035 12.24 7.60035 11.76 7.89035 11.47C8.18035 11.18 8.66035 11.18 8.95035 11.47L11.2504 13.77L16.3904 8.63C16.6804 8.34 17.1604 8.34 17.4504 8.63C17.7404 8.92 17.7404 9.4 17.4504 9.69L11.7804 15.36C11.6404 15.5 11.4504 15.58 11.2504 15.58Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM17.4499 9.7L11.7799 15.37C11.6399 15.51 11.4499 15.59 11.2499 15.59C11.0499 15.59 10.8599 15.51 10.7199 15.37L7.88992 12.54C7.59992 12.25 7.59992 11.77 7.88992 11.48C8.17992 11.19 8.65992 11.19 8.94992 11.48L11.2499 13.78L16.3899 8.64C16.6799 8.35 17.1599 8.35 17.4499 8.64C17.7399 8.93 17.7399 9.4 17.4499 9.7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTickSquare;