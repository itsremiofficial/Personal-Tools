import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconBagCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.74157 20.555C4.94119 22.0005 7.17389 22.0005 11.6393 22.0005H12.3605C16.8259 22.0005 19.0586 22.0005 20.2582 20.555M3.74157 20.555C2.54194 19.1096 2.9534 16.9151 3.77633 12.5262C4.36155 9.405 4.65416 7.84441 5.76506 6.92245M3.74157 20.555C3.74156 20.555 3.74157 20.555 3.74157 20.555ZM20.2582 20.555C21.4578 19.1096 21.0464 16.9151 20.2235 12.5262C19.6382 9.405 19.3456 7.84441 18.2347 6.92245M20.2582 20.555C20.2582 20.555 20.2582 20.555 20.2582 20.555ZM18.2347 6.92245C17.1238 6.00049 15.5361 6.00049 12.3605 6.00049H11.6393C8.46374 6.00049 6.87596 6.00049 5.76506 6.92245M18.2347 6.92245C18.2347 6.92245 18.2347 6.92245 18.2347 6.92245ZM5.76506 6.92245C5.76506 6.92245 5.76506 6.92245 5.76506 6.92245Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M10 14.3005C10.5207 14.7691 10.8126 15.0319 11.3333 15.5005L14 12.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M9 6.00049V5.00049C9 3.34363 10.3431 2.00049 12 2.00049C13.6569 2.00049 15 3.34363 15 5.00049V6.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4.0828 10.8948C4.52171 8.55388 4.74117 7.38343 5.57434 6.69196C6.40752 6.00049 7.59835 6.00049 9.98003 6.00049H14.0209C16.4026 6.00049 17.5934 6.00049 18.4266 6.69196C19.2598 7.38343 19.4792 8.55387 19.9181 10.8948L20.6681 14.8948C21.2853 18.1865 21.5939 19.8323 20.6942 20.9164C19.7945 22.0005 18.12 22.0005 14.7709 22.0005H9.23003C5.88097 22.0005 4.20644 22.0005 3.30672 20.9164C2.40701 19.8323 2.7156 18.1865 3.3328 14.8948L4.0828 10.8948Z" fill="currentColor" /><path d="M9.75 5.00049C9.75 3.75785 10.7574 2.75049 12 2.75049C13.2426 2.75049 14.25 3.75785 14.25 5.00049V6.00049C14.25 6.00048 14.25 6.0005 14.25 6.00049C14.816 6.00067 15.3119 6.00223 15.7499 6.01537C15.75 6.01042 15.75 6.00546 15.75 6.00049V5.00049C15.75 2.92942 14.0711 1.25049 12 1.25049C9.92893 1.25049 8.25 2.92942 8.25 5.00049V6.00049C8.25 6.00547 8.25005 6.01044 8.25015 6.0154C8.68814 6.00224 9.18397 6.00069 9.75 6.00051C9.75 6.0005 9.75 6.00052 9.75 6.00051V5.00049Z" fill="currentColor" /><path d="M15.5857 11.969C15.8444 11.6456 15.792 11.1736 15.4685 10.9149C15.1451 10.6561 14.6731 10.7085 14.4143 11.032L10.9375 15.3773L9.53033 13.9702C9.23744 13.6773 8.76256 13.6773 8.46967 13.9702C8.17678 14.2631 8.17678 14.738 8.46967 15.0308L10.4697 17.0308C10.6205 17.1817 10.8285 17.2612 11.0415 17.2494C11.2545 17.2376 11.4524 17.1356 11.5857 16.969L15.5857 11.969Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.25014 6.01538C8.25005 6.01043 8.25 6.00546 8.25 6.00049V5.00049C8.25 2.92942 9.92893 1.25049 12 1.25049C14.0711 1.25049 15.75 2.92942 15.75 5.00049V6.00049C15.75 6.00547 15.75 6.01043 15.7499 6.01538C17.0371 6.05402 17.8248 6.19289 18.4261 6.69196C19.2593 7.38343 19.4787 8.55387 19.9177 10.8948L20.6677 14.8948C21.2849 18.1865 21.5934 19.8323 20.6937 20.9164C19.794 22.0005 18.1195 22.0005 14.7704 22.0005H9.22954C5.88048 22.0005 4.20595 22.0005 3.30624 20.9164C2.40652 19.8323 2.71512 18.1865 3.33231 14.8948L4.08231 10.8948C4.52122 8.55388 4.74068 7.38343 5.57386 6.69196C6.17521 6.19288 6.96288 6.05402 8.25014 6.01538ZM9.75 5.00049C9.75 3.75785 10.7574 2.75049 12 2.75049C13.2426 2.75049 14.25 3.75785 14.25 5.00049V6.00049C14.25 6.00048 14.25 6.0005 14.25 6.00049C14.1747 6.00046 14.0982 6.00049 14.0204 6.00049H9.97954C9.90177 6.00049 9.82526 6.00049 9.75 6.00051C9.75 6.0005 9.75 6.00052 9.75 6.00051V5.00049ZM15.4685 10.9149C15.792 11.1736 15.8444 11.6456 15.5856 11.969L11.5856 16.969C11.4524 17.1356 11.2545 17.2376 11.0415 17.2494C10.8285 17.2612 10.6205 17.1817 10.4697 17.0308L8.46965 15.0308C8.17676 14.738 8.17676 14.2631 8.46965 13.9702C8.76255 13.6773 9.23742 13.6773 9.53031 13.9702L10.9375 15.3773L14.4143 11.032C14.6731 10.7085 15.1451 10.6561 15.4685 10.9149Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBagCheck;