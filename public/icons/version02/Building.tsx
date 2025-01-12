import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconBuilding: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1696 22.0003H4.74965C3.58965 22.0003 2.63965 21.0703 2.63965 19.9303V5.09035C2.63965 2.47035 4.58965 1.28035 6.97965 2.45035L11.4196 4.63035C12.3796 5.10035 13.1696 6.35035 13.1696 7.41035V22.0003Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6399 15.0604V18.8404C22.6399 21.0004 21.6399 22.0004 19.4799 22.0004H13.1699V10.4204L13.6399 10.5204L18.1399 11.5304L20.1699 11.9804C21.4899 12.2704 22.5699 12.9504 22.6299 14.8704C22.6399 14.9304 22.6399 14.9904 22.6399 15.0604Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.16992 9.00049H9.63992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.16992 13.0005H9.63992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.1396 11.5305V14.7505C18.1396 15.9905 17.1296 17.0005 15.8896 17.0005C14.6496 17.0005 13.6396 15.9905 13.6396 14.7505V10.5205L18.1396 11.5305Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6296 14.8703C22.5696 16.0503 21.5896 17.0003 20.3896 17.0003C19.1496 17.0003 18.1396 15.9903 18.1396 14.7503V11.5303L20.1696 11.9803C21.4896 12.2703 22.5696 12.9503 22.6296 14.8703Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.1696 7.40986V21.9999H4.74965C3.58965 21.9999 2.63965 21.0699 2.63965 19.9299V5.08986C2.63965 2.46986 4.59965 1.27986 6.98965 2.44986L11.4196 4.63986C12.3796 5.10986 13.1696 6.35986 13.1696 7.40986Z" fill="currentColor" /><path d="M9.63992 9.75H6.16992C5.75992 9.75 5.41992 9.41 5.41992 9C5.41992 8.59 5.75992 8.25 6.16992 8.25H9.63992C10.0499 8.25 10.3899 8.59 10.3899 9C10.3899 9.41 10.0599 9.75 9.63992 9.75Z" fill="currentColor" /><path d="M9.63992 13.75H6.16992C5.75992 13.75 5.41992 13.41 5.41992 13C5.41992 12.59 5.75992 12.25 6.16992 12.25H9.63992C10.0499 12.25 10.3899 12.59 10.3899 13C10.3899 13.41 10.0599 13.75 9.63992 13.75Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M22.6699 15.0499V19.4999C22.6699 20.8799 21.5499 21.9999 20.1699 21.9999H13.1699V10.4199L13.6399 10.5199L17.6799 11.4199L18.1599 11.5299L20.1999 11.9899C20.6899 12.0899 21.1399 12.2599 21.5299 12.5099C21.5299 12.5199 21.5399 12.5199 21.5399 12.5199C21.6399 12.5899 21.7399 12.6699 21.8299 12.7599C22.2899 13.2199 22.5899 13.8899 22.6599 14.8699C22.6599 14.9299 22.6699 14.9899 22.6699 15.0499Z" fill="currentColor" /><path d="M13.1699 10.4199V16.4199C13.6299 17.0299 14.3499 17.4199 15.1699 17.4199C16.5599 17.4199 17.6799 16.2999 17.6799 14.9199V11.4299L13.6399 10.5299L13.1699 10.4199Z" fill="currentColor" /><path d="M22.6597 14.8699C22.5897 13.8899 22.2897 13.2199 21.8297 12.7599C21.7397 12.6699 21.6397 12.5899 21.5397 12.5199C21.5397 12.5199 21.5297 12.5199 21.5297 12.5099C21.1397 12.2599 20.6897 12.0899 20.1997 11.9899L18.1597 11.5299L17.6797 11.4199V14.9199C17.6797 16.2899 18.7897 17.4199 20.1797 17.4199C21.5197 17.4199 22.5897 16.3699 22.6697 15.0599V15.0499C22.6697 14.9899 22.6597 14.9299 22.6597 14.8699Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4196 4.63986L6.98965 2.44986C4.59965 1.27986 2.63965 2.46986 2.63965 5.08986V19.9299C2.63965 21.0699 3.58965 21.9999 4.74965 21.9999H12.1696C12.7196 21.9999 13.1696 21.5499 13.1696 20.9999V7.40986C13.1696 6.35986 12.3796 5.10986 11.4196 4.63986ZM9.63965 13.7499H6.16965C5.75965 13.7499 5.41965 13.4099 5.41965 12.9999C5.41965 12.5899 5.75965 12.2499 6.16965 12.2499H9.63965C10.0496 12.2499 10.3896 12.5899 10.3896 12.9999C10.3896 13.4099 10.0596 13.7499 9.63965 13.7499ZM9.63965 9.74986H6.16965C5.75965 9.74986 5.41965 9.40986 5.41965 8.99986C5.41965 8.58986 5.75965 8.24986 6.16965 8.24986H9.63965C10.0496 8.24986 10.3896 8.58986 10.3896 8.99986C10.3896 9.40986 10.0596 9.74986 9.63965 9.74986Z" fill="currentColor" /><path d="M22.6699 18.04V19.5C22.6699 20.88 21.5499 22 20.1699 22H15.6399C15.0999 22 14.6699 21.57 14.6699 21.03V18.87C15.7399 19 16.8699 18.69 17.6799 18.04C18.3599 18.59 19.2299 18.92 20.1799 18.92C21.1099 18.92 21.9799 18.59 22.6699 18.04Z" fill="currentColor" /><path d="M22.6699 15.05V15.06C22.5899 16.37 21.5199 17.42 20.1799 17.42C18.7899 17.42 17.6799 16.29 17.6799 14.92C17.6799 16.45 16.2699 17.68 14.6699 17.37V12C14.6699 11.36 15.2599 10.88 15.8899 11.02L17.6799 11.42L18.1599 11.53L20.1999 11.99C20.6899 12.09 21.1399 12.26 21.5299 12.51C21.5299 12.52 21.5399 12.52 21.5399 12.52C21.6399 12.59 21.7399 12.67 21.8299 12.76C22.2899 13.22 22.5899 13.89 22.6599 14.87C22.6599 14.93 22.6699 14.99 22.6699 15.05Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBuilding;