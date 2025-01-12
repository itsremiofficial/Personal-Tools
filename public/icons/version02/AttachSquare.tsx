import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconAttachSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.8718 11.8L11.4617 13.21C10.6817 13.99 10.6817 15.26 11.4617 16.04C12.2417 16.82 13.5117 16.82 14.2917 16.04L16.5118 13.82C18.0718 12.26 18.0718 9.72999 16.5118 8.15999C14.9518 6.59999 12.4217 6.59999 10.8517 8.15999L8.43176 10.58C7.09176 11.92 7.09176 14.09 8.43176 15.43" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.67188 22H15.6719C20.6719 22 22.6719 20 22.6719 15V9C22.6719 4 20.6719 2 15.6719 2H9.67188C4.67188 2 2.67188 4 2.67188 9V15C2.67188 20 4.67188 22 9.67188 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8616 2H8.49164C4.85164 2 2.68164 4.17 2.68164 7.81V16.18C2.68164 19.82 4.85164 21.99 8.49164 21.99H16.8616C20.5016 21.99 22.6716 19.82 22.6716 16.18V7.81C22.6716 4.17 20.5016 2 16.8616 2Z" fill="currentColor" /><path d="M12.8716 17.3799C12.1716 17.3799 11.4616 17.1099 10.9316 16.5799C10.4116 16.0599 10.1216 15.3699 10.1216 14.6399C10.1216 13.9099 10.4116 13.2099 10.9316 12.6999L12.3416 11.2899C12.6316 10.9999 13.1116 10.9999 13.4016 11.2899C13.6916 11.5799 13.6916 12.0599 13.4016 12.3499L11.9916 13.7599C11.7516 13.9999 11.6216 14.3099 11.6216 14.6399C11.6216 14.9699 11.7516 15.2899 11.9916 15.5199C12.4816 16.0099 13.2717 16.0099 13.7617 15.5199L15.9816 13.2999C17.2516 12.0299 17.2516 9.96994 15.9816 8.69994C14.7116 7.42994 12.6517 7.42994 11.3817 8.69994L8.96161 11.1199C8.45161 11.6299 8.17163 12.2999 8.17163 13.0099C8.17163 13.7199 8.45161 14.3999 8.96161 14.8999C9.25161 15.1899 9.25161 15.6699 8.96161 15.9599C8.67161 16.2499 8.19161 16.2499 7.90161 15.9599C7.11161 15.1699 6.68164 14.1199 6.68164 12.9999C6.68164 11.8799 7.11161 10.8299 7.90161 10.0399L10.3217 7.61992C12.1717 5.76992 15.1916 5.76992 17.0416 7.61992C18.8916 9.46992 18.8916 12.4899 17.0416 14.3399L14.8217 16.5599C14.2817 17.1099 13.5816 17.3799 12.8716 17.3799Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM17.0419 14.35L14.8219 16.57C14.2819 17.11 13.5819 17.37 12.8819 17.37C12.1819 17.37 11.4719 17.1 10.9419 16.57C10.4219 16.05 10.1319 15.36 10.1319 14.63C10.1319 13.9 10.4219 13.2 10.9419 12.69L12.3519 11.28C12.6419 10.99 13.1219 10.99 13.4119 11.28C13.7019 11.57 13.7019 12.05 13.4119 12.34L12.0019 13.75C11.7619 13.99 11.6319 14.3 11.6319 14.63C11.6319 14.96 11.7619 15.28 12.0019 15.51C12.4919 16 13.2819 16 13.7719 15.51L15.9919 13.29C17.2619 12.02 17.2619 9.96 15.9919 8.69C14.7219 7.42 12.6619 7.42 11.3919 8.69L8.97188 11.11C8.46187 11.62 8.18188 12.29 8.18188 13C8.18188 13.71 8.46187 14.39 8.97188 14.89C9.26188 15.18 9.26188 15.66 8.97188 15.95C8.68188 16.24 8.20187 16.24 7.91187 15.95C7.11187 15.18 6.67188 14.13 6.67188 13.01C6.67188 11.89 7.10187 10.84 7.89187 10.05L10.3119 7.63C12.1619 5.78 15.1819 5.78 17.0319 7.63C18.8919 9.48 18.8919 12.5 17.0419 14.35Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAttachSquare;