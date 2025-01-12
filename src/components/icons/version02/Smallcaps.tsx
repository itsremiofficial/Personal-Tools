import { FC } from 'react';

const IconSmallcaps: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66211 5.92995V4.41995C2.66211 3.39995 3.49211 2.56995 4.51211 2.56995H17.4321C18.4521 2.56995 19.2821 3.39995 19.2821 4.41995V5.92995" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.9717 18.0999V3.31995" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.57227 18.1H13.1523" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M14.3516 10.3398H21.3616C22.0916 10.3398 22.6816 10.9298 22.6816 11.6598V12.4598" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.752 21.4301V10.8701" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M14.6113 21.4297H18.8913" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6719 7.81V16.19C22.6719 19.83 20.5019 22 16.8619 22H8.48187C8.28188 22 8.08187 21.99 7.89187 21.98C6.66187 21.9 5.62188 21.55 4.80188 20.95C4.38188 20.66 4.01187 20.29 3.72187 19.87C3.03187 18.92 2.67188 17.68 2.67188 16.19V7.81C2.67188 4.37 4.61187 2.24 7.89187 2.03C8.08187 2.01 8.28188 2 8.48187 2H16.8619C18.3519 2 19.5919 2.36 20.5419 3.05C20.9619 3.34 21.3319 3.71 21.6219 4.13C22.3119 5.08 22.6719 6.32 22.6719 7.81Z" fill="currentColor" /><path d="M12.0619 14.38H11.6919V7.91002H14.2619C14.3719 7.91002 14.4619 8.00002 14.4619 8.11002V8.89002C14.4619 9.30002 14.8019 9.64002 15.2119 9.64002C15.6219 9.64002 15.9619 9.30002 15.9619 8.89002V8.10002C15.9619 7.16002 15.2019 6.40002 14.2619 6.40002H7.62187C6.68187 6.40002 5.92188 7.16002 5.92188 8.10002V8.88002C5.92188 9.30002 6.26188 9.63002 6.67188 9.63002C7.08187 9.63002 7.42188 9.30002 7.42188 8.88002V8.10002C7.42188 7.99002 7.51187 7.90002 7.62187 7.90002H10.1919V14.38H9.19188C8.78188 14.38 8.44187 14.72 8.44187 15.13C8.44187 15.54 8.78188 15.88 9.19188 15.88H12.0519C12.4619 15.88 12.8019 15.54 12.8019 15.13C12.8019 14.72 12.4719 14.38 12.0619 14.38Z" fill="currentColor" /><path d="M17.9916 10.4H14.3916C13.9816 10.4 13.6416 10.74 13.6416 11.15C13.6416 11.56 13.9816 11.9 14.3916 11.9H14.8716V16.1H14.5216C14.1116 16.1 13.7716 16.44 13.7716 16.85C13.7716 17.26 14.1116 17.6 14.5216 17.6H16.7216C17.1316 17.6 17.4716 17.26 17.4716 16.85C17.4716 16.44 17.1316 16.1 16.7216 16.1H16.3716V11.9H17.9216V12.24C17.9216 12.65 18.2616 12.99 18.6716 12.99C19.0816 12.99 19.4216 12.65 19.4216 12.24V11.83C19.4216 11.04 18.7816 10.4 17.9916 10.4Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6219 4.13C21.3319 3.71 20.9619 3.34 20.5419 3.05C19.5919 2.36 18.3519 2 16.8619 2H8.48187C8.28188 2 8.08187 2.01 7.89187 2.03C4.61187 2.24 2.67188 4.37 2.67188 7.81V16.19C2.67188 17.68 3.03187 18.92 3.72187 19.87C4.01187 20.29 4.38188 20.66 4.80188 20.95C5.62188 21.55 6.66187 21.9 7.89187 21.98C8.08187 21.99 8.28188 22 8.48187 22H16.8619C20.5019 22 22.6719 19.83 22.6719 16.19V7.81C22.6719 6.32 22.3119 5.08 21.6219 4.13ZM12.0619 15.88H9.19188C8.78188 15.88 8.44187 15.54 8.44187 15.13C8.44187 14.72 8.78188 14.38 9.19188 14.38H10.1919V7.91H7.62187C7.51187 7.91 7.42188 8 7.42188 8.11V8.89C7.42188 9.3 7.08187 9.63 6.67188 9.63C6.26187 9.63 5.92188 9.3 5.92188 8.88V8.1C5.92188 7.16 6.68187 6.4 7.62187 6.4H14.2619C15.2019 6.4 15.9619 7.16 15.9619 8.1V8.88C15.9619 9.29 15.6219 9.63 15.2119 9.63C14.8019 9.63 14.4619 9.29 14.4619 8.88V8.1C14.4619 7.99 14.3719 7.9 14.2619 7.9H11.6919V14.38H12.0619C12.4719 14.38 12.8119 14.72 12.8119 15.13C12.8119 15.54 12.4719 15.88 12.0619 15.88ZM19.4219 12.23C19.4219 12.64 19.0819 12.98 18.6719 12.98C18.2619 12.98 17.9219 12.64 17.9219 12.23V11.9H16.3719V16.1H16.7219C17.1319 16.1 17.4719 16.44 17.4719 16.85C17.4719 17.26 17.1319 17.6 16.7219 17.6H14.5219C14.1119 17.6 13.7719 17.26 13.7719 16.85C13.7719 16.44 14.1119 16.1 14.5219 16.1H14.8719V11.9H14.3919C13.9819 11.9 13.6419 11.56 13.6419 11.15C13.6419 10.74 13.9819 10.4 14.3919 10.4H17.9919C18.7819 10.4 19.4219 11.04 19.4219 11.83V12.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmallcaps as IconComponent).keywords = [
  "smallcaps"
];

export default IconSmallcaps as IconComponent;