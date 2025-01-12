import { FC } from 'react';

const IconBackpack: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.9118C3 10.8188 3 10.7723 3.00057 10.7309C3.0385 7.98082 4.94139 5.60864 7.61778 4.97504C7.65803 4.96551 7.70344 4.95542 7.79425 4.93524C7.87787 4.91666 7.91968 4.90737 7.96109 4.89836C10.6226 4.31936 13.3774 4.31936 16.0389 4.89836C16.0803 4.90737 16.1221 4.91666 16.2057 4.93524C16.2966 4.95542 16.342 4.96551 16.3822 4.97504C19.0586 5.60864 20.9615 7.98082 20.9994 10.7309C21 10.7723 21 10.8188 21 10.9118V16.3758C21 18.4937 19.529 20.3275 17.4615 20.787C13.8644 21.5863 10.1356 21.5863 6.53853 20.787C4.47101 20.3275 3 18.4937 3 16.3758V10.9118Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M17.5 15.5006V17.0006" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15.9585 4.50061C15.7205 3.08175 14.4865 2.00061 13 2.00061H11C9.51353 2.00061 8.27954 3.08175 8.0415 4.50061" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M3 14.0006C8.72979 16.5472 15.2702 16.5472 21 14.0006" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10 13.0006H14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.2915 4.78595C4.78799 5.52343 3.03694 7.79749 3.00057 10.4167C3 10.4578 3 10.504 3 10.5964V12.9195C3.10197 12.9194 3.2056 12.9401 3.30479 12.9839C8.84065 15.4277 15.1597 15.4277 20.6956 12.9839C20.7947 12.9402 20.8982 12.9195 21 12.9195V10.5964C21 10.504 21 10.4578 20.9994 10.4167C20.9631 7.79751 19.212 5.52346 16.7085 4.78597C16.4308 4.69495 15.5892 4.53224 15.2032 4.46226C13.0832 4.1021 10.9169 4.1021 8.79689 4.46225C8.39226 4.53883 7.52471 4.71079 7.2915 4.78595ZM10 11.9263C9.58579 11.9263 9.25 12.2598 9.25 12.6712C9.25 13.0826 9.58579 13.4161 10 13.4161H14C14.4142 13.4161 14.75 13.0826 14.75 12.6712C14.75 12.2598 14.4142 11.9263 14 11.9263H10Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M8.87313 3.99224C9.17888 3.11698 10.0165 2.49038 10.9995 2.49038H12.9995C13.9826 2.49038 14.8202 3.11698 15.1259 3.99224C15.1714 4.12237 15.1935 4.27254 15.2027 4.46232C15.5887 4.5323 16.4303 4.69502 16.7081 4.78604V4.72502C16.7081 4.3865 16.6965 3.9431 16.5431 3.50385C16.0344 2.04763 14.641 1.00049 12.9995 1.00049H10.9995C9.35804 1.00049 7.96471 2.04763 7.45601 3.50384C7.30256 3.9431 7.29102 4.3865 7.29102 4.72502V4.78602C7.52422 4.71086 8.39178 4.5389 8.7964 4.46231C8.80554 4.27254 8.82767 4.12237 8.87313 3.99224Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M21 14.4772C20.1 14.8591 19.1814 15.1812 18.2502 15.4435V16.6443C18.2502 17.0557 17.9144 17.3893 17.5002 17.3893C17.086 17.3893 16.7502 17.0557 16.7502 16.6443V15.8122C12.1726 16.7757 7.36827 16.3307 3 14.4771V16.0234C3 18.1271 4.47101 19.9485 6.53853 20.4048C10.1356 21.1988 13.8644 21.1988 17.4615 20.4048C19.529 19.9485 21 18.1271 21 16.0234V14.4772Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.2915 4.78602V4.72502C7.2915 4.3865 7.30305 3.9431 7.4565 3.50384C7.9652 2.04763 9.35853 1.00049 11 1.00049H13C14.6415 1.00049 16.0349 2.04763 16.5436 3.50385C16.697 3.9431 16.7085 4.3865 16.7085 4.72502V4.78604C19.212 5.52352 20.9631 7.79758 20.9994 10.4168C21 10.4578 21 10.5041 21 10.5965V12.9196C20.8982 12.9196 20.7947 12.9402 20.6956 12.984C15.1597 15.4278 8.84065 15.4278 3.30479 12.984C3.2056 12.9402 3.10197 12.9195 3 12.9196V10.5965C3 10.5041 3 10.4578 3.00057 10.4168C3.03694 7.79756 4.78799 5.52349 7.2915 4.78602ZM8.87362 3.99224C9.17937 3.11698 10.017 2.49038 11 2.49038H13C13.9831 2.49038 14.8207 3.11698 15.1264 3.99224C15.1719 4.12237 15.194 4.27254 15.2032 4.46232C13.0832 4.10217 10.9169 4.10217 8.79689 4.46231C8.80602 4.27254 8.82816 4.12237 8.87362 3.99224ZM9.25 12.6713C9.25 12.2598 9.58579 11.9263 10 11.9263H14C14.4142 11.9263 14.75 12.2598 14.75 12.6713C14.75 13.0827 14.4142 13.4162 14 13.4162H10C9.58579 13.4162 9.25 13.0827 9.25 12.6713Z" fill="currentColor" /><path d="M21 14.4774C20.1 14.8593 19.1814 15.1814 18.2502 15.4437V16.6445C18.2502 17.0559 17.9144 17.3894 17.5002 17.3894C17.086 17.3894 16.7502 17.0559 16.7502 16.6445V15.8124C12.1726 16.7759 7.36827 16.3309 3 14.4772V16.0236C3 18.1272 4.47101 19.9487 6.53853 20.405C10.1356 21.199 13.8644 21.199 17.4615 20.405C19.529 19.9487 21 18.1272 21 16.0236V14.4774Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBackpack as IconComponent).keywords = [
  "backpack",
  "knapsack",
  "pack",
  "haversack",
  "rucksack",
  "satchel",
  "valise",
  "suitcase",
  "sack",
  "luggage"
];

export default IconBackpack as IconComponent;