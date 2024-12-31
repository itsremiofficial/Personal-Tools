import { FC } from 'react';
import { IconProps } from "../../types";

const IconWarning2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 7.75V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 16.2002V16.3002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52945 6.52001 6.76945 6.28001L10.0194 3.02C11.3894 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.78996C17.3695 5.41996 17.7095 6.21997 17.7495 7.04997Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12V17C22 19.76 19.76 22 17 22H7.63H7C4.24 22 2 19.76 2 17V16.36Z" fill="currentColor" /><path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" fill="currentColor" /><path d="M1.23055 21.6797L1.99054 20.9197C1.59054 20.3197 1.36054 19.5998 1.36054 18.8298C1.36054 16.7198 3.07054 15.0098 5.18054 15.0098C7.29054 15.0098 9.00054 16.7198 9.00054 18.8298C9.00054 20.9398 7.29054 22.6498 5.18054 22.6498C4.41054 22.6498 3.69054 22.4198 3.09054 22.0198L2.33055 22.7798C2.18055 22.9298 1.98054 23.0098 1.78054 23.0098C1.58054 23.0098 1.38055 22.9298 1.23055 22.7798C0.920547 22.4698 0.920547 21.9797 1.23055 21.6797Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWarning2;