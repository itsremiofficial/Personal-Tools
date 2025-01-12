import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconFlashCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.35028 11.9101L11.0003 12.32L10.0503 16.1601C9.83029 17.0601 10.2703 17.36 11.0303 16.83L16.2103 13.2401C16.8403 12.8001 16.7503 12.2901 16.0003 12.1001L14.3503 11.6901L15.3003 7.85006C15.5203 6.95006 15.0803 6.65007 14.3203 7.18007L9.14029 10.7701C8.51029 11.2101 8.60028 11.7201 9.35028 11.9101Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M9.35028 11.9101L11.0003 12.3201L10.0503 16.1601C9.83029 17.0601 10.2703 17.3601 11.0303 16.8301L16.2103 13.2401C16.8403 12.8001 16.7503 12.2901 16.0003 12.1001L14.3503 11.6901L15.3003 7.85006C15.5203 6.95006 15.0803 6.65007 14.3203 7.18007L9.14029 10.7701C8.51029 11.2101 8.60028 11.7201 9.35028 11.9101Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM16.1999 13.23L11.0199 16.82C10.2599 17.35 9.81992 17.04 10.0399 16.15L10.9899 12.31L9.33992 11.9C8.58992 11.72 8.49992 11.2 9.12992 10.76L14.3099 7.17C15.0699 6.64 15.5099 6.95 15.2899 7.84L14.3399 11.68L15.9899 12.09C16.7399 12.28 16.8299 12.79 16.1999 13.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlashCircle;