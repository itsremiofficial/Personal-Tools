import { FC } from 'react';
import { IconProps } from "@/types";

const IconWalletSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22H17C20 22 22 20 22 17V12C22 9.3 20.3 7.3 17.8 7C17.6 7 17.3 7 17 7H7C6.7 7 6.5 6.99998 6.2 7.09998C3.6 7.39998 2 9.3 2 12C2 12.3 2 12.7 2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.7992 7.0002C17.5992 7.0002 17.2992 7.0002 16.9992 7.0002H6.99922C6.69922 7.0002 6.49922 7.00017 6.19922 7.10017C6.29922 6.80017 6.49922 6.60018 6.79922 6.30018L9.99922 3.0002C11.3992 1.6002 13.5992 1.6002 14.9992 3.0002L16.7992 4.80018C17.3992 5.40018 17.6992 6.2002 17.7992 7.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.79961 21.4C7.56961 21.4 8.99961 19.97 8.99961 18.2C8.99961 16.43 7.56961 15 5.79961 15C4.02961 15 2.59961 16.43 2.59961 18.2C2.59961 19.97 4.02961 21.4 5.79961 21.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 22L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52945 6.52001 6.76945 6.28001L10.0194 3.02C11.3894 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.78996C17.3695 5.41996 17.7095 6.21997 17.7495 7.04997Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12V17C22 19.76 19.76 22 17 22H7.63H7C4.24 22 2 19.76 2 17V16.36Z" fill="currentColor" /><path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" fill="currentColor" /><path d="M1.23055 21.6797L1.99054 20.9197C1.59054 20.3197 1.36054 19.5998 1.36054 18.8298C1.36054 16.7198 3.07054 15.0098 5.18054 15.0098C7.29054 15.0098 9.00054 16.7198 9.00054 18.8298C9.00054 20.9398 7.29054 22.6498 5.18054 22.6498C4.41054 22.6498 3.69054 22.4198 3.09054 22.0198L2.33055 22.7798C2.18055 22.9298 1.98054 23.0098 1.78054 23.0098C1.58054 23.0098 1.38055 22.9298 1.23055 22.7798C0.920547 22.4698 0.920547 21.9797 1.23055 21.6797Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWalletSearch;