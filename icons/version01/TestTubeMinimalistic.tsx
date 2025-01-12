import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTestTubeMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 9.84891L14.1815 3.00024M14.8635 3.68529L20.2387 9.08422L13 16.3549L9.48838 19.8821C8.00407 21.373 5.59754 21.373 4.11323 19.8821C2.62892 18.3912 2.62892 15.974 4.11323 14.4832L14.8635 3.68529Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M6.80078 11.7837L8.075 11.9259C9.0977 12.04 9.90504 12.8509 10.0187 13.8782C10.1062 14.6692 10.6104 15.3518 11.3386 15.6653L13 16.3549" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.18744 15.0487C1.60418 16.6389 1.60418 19.2173 3.18744 20.8075C4.7707 22.3978 7.33768 22.3978 8.92094 20.8075L12.6667 17.0452L10.8946 16.3096C10.1177 15.9752 9.57994 15.2471 9.4866 14.4033C9.36539 13.3076 8.50424 12.4427 7.41335 12.3209H5.90317L3.18744 15.0487Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.3623 2.23331C13.6754 1.92158 14.1819 1.9227 14.4936 2.23581L21.7667 9.54106C22.0784 9.85416 22.0773 10.3607 21.7642 10.6724C21.4511 10.9842 20.9446 10.983 20.6328 10.6699L13.3598 3.36468C13.048 3.05157 13.0492 2.54504 13.3623 2.23331Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M14.0901 4.09778L3.18744 15.0486C1.60419 16.6389 1.60419 19.2172 3.18744 20.8075C4.7707 22.3978 7.33768 22.3978 8.92094 20.8075L19.8236 9.85664L14.0901 4.09778Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8692 2.22403C14.5731 1.92658 14.0919 1.92552 13.7944 2.22166C13.497 2.5178 13.4959 2.999 13.7921 3.29646L14.4855 3.99295L7.53667 10.9726L8.22692 11.0496C9.61873 11.2049 10.7136 12.3076 10.8676 13.6996C10.9262 14.2292 11.2627 14.6844 11.7462 14.8943L13.7129 15.7107L19.9323 9.46386L20.7014 10.2364C20.9976 10.5339 21.4788 10.535 21.7762 10.2388C22.0737 9.94267 22.0747 9.46146 21.7786 9.16401L14.8692 2.22403Z" fill="currentColor" /><path d="M4.12806 14.3963L6.16625 12.349L8.05833 12.5602C8.73918 12.6362 9.2805 13.1769 9.35681 13.8668C9.4754 14.9388 10.159 15.866 11.1492 16.2923L12.5536 16.8752L9.57484 19.8672C8.07075 21.3779 5.63215 21.3779 4.12806 19.8672C2.62398 18.3564 2.62398 15.907 4.12806 14.3963Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTestTubeMinimalistic;