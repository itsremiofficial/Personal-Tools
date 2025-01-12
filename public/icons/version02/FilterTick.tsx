import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconFilterTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2998 14.75C22.2998 15.64 22.0598 16.48 21.6198 17.2C20.7998 18.57 19.2898 19.5 17.5498 19.5C16.6098 19.5 15.7298 19.22 14.9898 18.73C14.3698 18.35 13.8598 17.82 13.4898 17.2C13.0498 16.48 12.7998 15.64 12.7998 14.75C12.7998 12.13 14.9298 10 17.5498 10C17.9098 10 18.2598 10.04 18.5898 10.12C20.7198 10.59 22.2998 12.49 22.2998 14.75Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.7002 14.75L16.8702 15.92L19.4001 13.58" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.3595 4.01999V6.23999C21.3595 7.04999 20.8495 8.06001 20.3495 8.57001L18.5895 10.12C18.2595 10.04 17.9095 10 17.5495 10C14.9295 10 12.7995 12.13 12.7995 14.75C12.7995 15.64 13.0495 16.48 13.4895 17.2C13.8595 17.82 14.3695 18.35 14.9895 18.73V19.07C14.9895 19.68 14.5895 20.49 14.0795 20.79L12.6695 21.7C11.3595 22.51 9.53949 21.6 9.53949 19.98V14.63C9.53949 13.92 9.12949 13.01 8.72949 12.51L4.88947 8.47C4.38947 7.96 3.97949 7.05001 3.97949 6.45001V4.12C3.97949 2.91 4.88951 2 5.99951 2H19.3395C20.4495 2 21.3595 2.90999 21.3595 4.01999Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5898 10.12C18.2598 10.04 17.9098 10 17.5498 10C14.9298 10 12.7998 12.13 12.7998 14.75C12.7998 15.64 13.0498 16.48 13.4898 17.2C13.8598 17.82 14.3698 18.35 14.9898 18.73C15.7298 19.22 16.6098 19.5 17.5498 19.5C19.2898 19.5 20.7998 18.57 21.6198 17.2C22.0598 16.48 22.2998 15.64 22.2998 14.75C22.2998 12.49 20.7198 10.59 18.5898 10.12ZM19.9198 14.13L17.3798 16.47C17.2398 16.6 17.0498 16.67 16.8698 16.67C16.6798 16.67 16.4898 16.6 16.3398 16.45L15.1698 15.28C14.8798 14.99 14.8798 14.51 15.1698 14.22C15.4598 13.93 15.9398 13.93 16.2298 14.22L16.8898 14.88L18.8998 13.03C19.2098 12.75 19.6798 12.77 19.9598 13.07C20.2398 13.38 20.2198 13.85 19.9198 14.13Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.08008 2H19.2501C20.3501 2 21.2501 2.90999 21.2501 4.01999V6.23999C21.2501 7.04999 20.7501 8.06 20.2501 8.56L15.9601 12.4C15.3601 12.91 14.9601 13.92 14.9601 14.72V19.06C14.9601 19.67 14.5601 20.47 14.0601 20.78L12.6601 21.69C11.3601 22.5 9.57013 21.59 9.57013 19.97V14.62C9.57013 13.91 9.17008 13 8.77008 12.5L4.9801 8.45999C4.4801 7.94999 4.08008 7.05 4.08008 6.44V4.12C4.09008 2.91 4.99008 2 6.08008 2Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5898 10.12C18.2598 10.04 17.9098 10 17.5498 10C14.9298 10 12.7998 12.13 12.7998 14.75C12.7998 15.64 13.0498 16.48 13.4898 17.2C13.8598 17.82 14.3698 18.35 14.9898 18.73C15.7298 19.22 16.6098 19.5 17.5498 19.5C19.2898 19.5 20.7998 18.57 21.6198 17.2C22.0598 16.48 22.2998 15.64 22.2998 14.75C22.2998 12.49 20.7198 10.59 18.5898 10.12ZM19.9198 14.13L17.3798 16.47C17.2398 16.6 17.0498 16.67 16.8698 16.67C16.6798 16.67 16.4898 16.6 16.3398 16.45L15.1698 15.28C14.8798 14.99 14.8798 14.51 15.1698 14.22C15.4598 13.93 15.9398 13.93 16.2298 14.22L16.8898 14.88L18.8998 13.03C19.2098 12.75 19.6798 12.77 19.9598 13.07C20.2398 13.38 20.2198 13.85 19.9198 14.13Z" fill="currentColor" /><path d="M21.2498 4.02V6.24C21.2498 7.05 20.7498 8.06 20.2498 8.57L20.0698 8.73C19.9298 8.86 19.7198 8.89 19.5398 8.83C19.3398 8.76 19.1398 8.71 18.9398 8.66C18.4998 8.55 18.0298 8.5 17.5498 8.5C14.0998 8.5 11.2998 11.3 11.2998 14.75C11.2998 15.89 11.6098 17.01 12.1998 17.97C12.6998 18.81 13.3998 19.51 14.1598 19.98C14.3898 20.13 14.4798 20.45 14.2798 20.63C14.2098 20.69 14.1398 20.74 14.0698 20.79L12.6698 21.7C11.3698 22.51 9.57984 21.6 9.57984 19.98V14.63C9.57984 13.92 9.17984 13.01 8.77984 12.51L4.98984 8.47C4.48984 7.96 4.08984 7.05 4.08984 6.45V4.12C4.08984 2.91 4.98984 2 6.07984 2H19.2598C20.3498 2 21.2498 2.91 21.2498 4.02Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFilterTick;