import { FC } from 'react';
import { IconProps } from "@/types";

const IconCloudAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M5.5393 11.1201C0.859297 11.4501 0.859297 18.2601 5.5393 18.5901H7.45934" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.59003 11.1201C2.38003 2.19014 15.92 -1.37985 17.47 8.00015C21.8 8.55015 23.55 14.3201 20.27 17.1901C19.27 18.1001 17.98 18.6001 16.63 18.5901H16.54" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M17 16.5298C17 17.2698 16.84 17.9698 16.54 18.5898C16.46 18.7698 16.37 18.9398 16.27 19.0998C15.41 20.5498 13.82 21.5298 12 21.5298C10.18 21.5298 8.58998 20.5498 7.72998 19.0998C7.62998 18.9398 7.54002 18.7698 7.46002 18.5898C7.16002 17.9698 7 17.2698 7 16.5298C7 13.7698 9.24 11.5298 12 11.5298C14.76 11.5298 17 13.7698 17 16.5298Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.4404 16.5298L11.4304 17.5198L13.5604 15.5498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.2693 17.1899C19.2693 18.0999 17.9793 18.5999 16.6293 18.5899H16.5393C16.8393 17.9699 16.9993 17.2699 16.9993 16.5299C16.9993 13.7699 14.7593 11.5299 11.9993 11.5299C9.23932 11.5299 6.99932 13.7699 6.99932 16.5299C6.99932 17.2699 7.15934 17.9699 7.45934 18.5899H5.5393C0.859297 18.2599 0.859297 11.4499 5.5393 11.1199H5.58935C2.37935 2.1899 15.9193 -1.3801 17.4693 7.9999C21.7993 8.5499 23.5493 14.3199 20.2693 17.1899Z" fill="currentColor" /><path d="M12 11.53C9.24 11.53 7 13.77 7 16.53C7 17.27 7.16002 17.97 7.46002 18.59C7.54002 18.77 7.62998 18.94 7.72998 19.1C8.58998 20.55 10.18 21.53 12 21.53C13.82 21.53 15.41 20.55 16.27 19.1C16.37 18.94 16.46 18.77 16.54 18.59C16.84 17.97 17 17.27 17 16.53C17 13.77 14.76 11.53 12 11.53ZM14.07 16.1L11.94 18.07C11.8 18.2 11.61 18.27 11.43 18.27C11.24 18.27 11.05 18.2 10.9 18.05L9.90997 17.06C9.61997 16.77 9.61997 16.29 9.90997 16C10.2 15.71 10.68 15.71 10.97 16L11.45 16.48L13.05 15C13.36 14.72 13.83 14.74 14.11 15.04C14.39 15.34 14.37 15.81 14.07 16.1Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCloudAdd;