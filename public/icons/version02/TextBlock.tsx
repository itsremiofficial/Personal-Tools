import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTextBlock: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.67188 22H15.6719C20.6719 22 22.6719 20 22.6719 15V9C22.6719 4 20.6719 2 15.6719 2H9.67188C4.67188 2 2.67188 4 2.67188 9V15C2.67188 20 4.67188 22 9.67188 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7.67188 8.89039C10.8219 7.32039 14.5219 7.32039 17.6719 8.89039" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6719 16.2997V7.92969" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2Z" fill="currentColor" /><path d="M18.0121 8.21002C14.6721 6.54002 10.6821 6.54002 7.34213 8.21002C6.96213 8.40002 6.81213 8.85002 7.00213 9.22002C7.13213 9.48002 7.40213 9.63002 7.67213 9.63002C7.78213 9.63002 7.90213 9.60002 8.01213 9.55002C9.24213 8.94002 10.5721 8.60002 11.9221 8.50002V16.29C11.9221 16.7 12.2621 17.04 12.6721 17.04C13.0821 17.04 13.4221 16.7 13.4221 16.29V8.50002C14.7721 8.60002 16.1021 8.94002 17.3321 9.55002C17.7021 9.73002 18.1521 9.59002 18.3421 9.21002C18.5321 8.85002 18.3821 8.40002 18.0121 8.21002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM18.3419 9.22C18.1519 9.59 17.7119 9.74 17.3319 9.56C16.1019 8.94 14.7719 8.6 13.4219 8.5V16.29C13.4219 16.7 13.0819 17.04 12.6719 17.04C12.2619 17.04 11.9219 16.7 11.9219 16.29V8.5C10.5719 8.6 9.24188 8.94 8.01188 9.56C7.90188 9.61 7.78188 9.63 7.67188 9.63C7.40188 9.63 7.13188 9.48 7.00187 9.22C6.81187 8.85 6.96187 8.4 7.33187 8.21C10.6719 6.54 14.6619 6.54 18.0019 8.21C18.3819 8.4 18.5319 8.85 18.3419 9.22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTextBlock;