import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconBill: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.00024H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M4 2.00024H20V12.2776C20 13.6177 20 14.2878 19.7319 14.8786C19.4638 15.4694 18.9595 15.9106 17.951 16.7931L15.951 18.5431C14.0685 20.1903 13.1272 21.0139 12 21.0139C10.8728 21.0139 9.93152 20.1903 8.04897 18.5431L6.04897 16.7931C5.04046 15.9106 4.5362 15.4694 4.2681 14.8786C4 14.2878 4 13.6177 4 12.2776V2.00024Z" stroke="currentColor" strokeWidth={width} /><path d="M8.5 13.0002L15.5 13.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M8.5 8.00024L15.5 8.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.25 3.00024C1.25 2.58603 1.58579 2.25024 2 2.25024H22C22.4142 2.25024 22.75 2.58603 22.75 3.00024C22.75 3.41446 22.4142 3.75024 22 3.75024H2C1.58579 3.75024 1.25 3.41446 1.25 3.00024Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M4 3.75024V13.2776C4 14.6177 4 15.2878 4.2681 15.8786C4.5362 16.4694 5.04046 16.9106 6.04896 17.7931L8.04897 19.5431C9.93152 21.1903 10.8728 22.0139 12 22.0139C13.1272 22.0139 14.0685 21.1903 15.951 19.5431L17.951 17.7931C18.9595 16.9106 19.4638 16.4694 19.7319 15.8786C20 15.2878 20 14.6177 20 13.2776V3.75024H4Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.75 14.0002C7.75 13.586 8.08579 13.2502 8.5 13.2502H15.5C15.9142 13.2502 16.25 13.586 16.25 14.0002C16.25 14.4145 15.9142 14.7502 15.5 14.7502H8.5C8.08579 14.7502 7.75 14.4145 7.75 14.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.75 9.00024C7.75 8.58603 8.08579 8.25024 8.5 8.25024L15.5 8.25024C15.9142 8.25024 16.25 8.58603 16.25 9.00024C16.25 9.41446 15.9142 9.75024 15.5 9.75024H8.5C8.08579 9.75024 7.75 9.41446 7.75 9.00024Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 1.25024C1.58579 1.25024 1.25 1.58603 1.25 2.00024C1.25 2.41446 1.58579 2.75024 2 2.75024H4V12.2776C4 13.6177 4 14.2878 4.2681 14.8786C4.5362 15.4694 5.04046 15.9107 6.04897 16.7931L8.04897 18.5431C9.93152 20.1903 10.8728 21.0139 12 21.0139C13.1272 21.0139 14.0685 20.1903 15.951 18.5431L17.951 16.7931C18.9595 15.9106 19.4638 15.4694 19.7319 14.8786C20 14.2878 20 13.6177 20 12.2776V2.75024H22C22.4142 2.75024 22.75 2.41446 22.75 2.00024C22.75 1.58603 22.4142 1.25024 22 1.25024H2ZM8.5 12.2502C8.08579 12.2502 7.75 12.586 7.75 13.0002C7.75 13.4145 8.08579 13.7502 8.5 13.7502H15.5C15.9142 13.7502 16.25 13.4145 16.25 13.0002C16.25 12.586 15.9142 12.2502 15.5 12.2502H8.5ZM7.75 8.00024C7.75 7.58603 8.08579 7.25024 8.5 7.25024H15.5C15.9142 7.25024 16.25 7.58603 16.25 8.00024C16.25 8.41446 15.9142 8.75024 15.5 8.75024H8.5C8.08579 8.75024 7.75 8.41446 7.75 8.00024Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBill;