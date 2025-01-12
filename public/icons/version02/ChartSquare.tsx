import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconChartSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M10.7802 11.15H8.13022C7.50022 11.15 6.99023 11.66 6.99023 12.29V17.41H10.7802V11.15V11.15Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.4305 6.59998H11.9105C11.2805 6.59998 10.7705 7.10999 10.7705 7.73999V17.4H14.5605V7.73999C14.5605 7.10999 14.0605 6.59998 13.4305 6.59998Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.2203 12.85H14.5703V17.4H18.3603V13.99C18.3503 13.36 17.8403 12.85 17.2203 12.85Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z" fill="currentColor" /><path d="M10.7802 11.15H8.13022C7.50022 11.15 6.99023 11.66 6.99023 12.29V17.41H10.7802V11.15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M13.4305 6.59998H11.9105C11.2805 6.59998 10.7705 7.10999 10.7705 7.73999V17.4H14.5605V7.73999C14.5605 7.10999 14.0605 6.59998 13.4305 6.59998Z" fill="currentColor" /><path d="M17.2203 12.85H14.5703V17.4H18.3603V13.99C18.3503 13.36 17.8403 12.85 17.2203 12.85Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM9.78187 16.9C9.78187 17.18 9.56187 17.4 9.28187 17.4H6.49188C6.21188 17.4 5.99188 17.18 5.99188 16.9V12.28C5.99188 11.65 6.50187 11.14 7.13188 11.14H9.28187C9.56187 11.14 9.78187 11.36 9.78187 11.64V16.9ZM14.5619 16.9C14.5619 17.18 14.3419 17.4 14.0619 17.4H11.2719C10.9919 17.4 10.7719 17.18 10.7719 16.9V7.74C10.7719 7.11 11.2819 6.6 11.9119 6.6H13.4319C14.0619 6.6 14.5719 7.11 14.5719 7.74V16.9H14.5619ZM19.3519 16.9C19.3519 17.18 19.1319 17.4 18.8519 17.4H16.0619C15.7819 17.4 15.5619 17.18 15.5619 16.9V13.35C15.5619 13.07 15.7819 12.85 16.0619 12.85H18.2119C18.8419 12.85 19.3519 13.36 19.3519 13.99V16.9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconChartSquare;