import { FC } from 'react';
import { IconProps } from "@/types";

const IconFilterSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M14.3206 19.0698C14.3206 19.6798 13.9205 20.4798 13.4105 20.7898L12.0005 21.6998C10.6905 22.5098 8.87054 21.5998 8.87054 19.9798V14.6298C8.87054 13.9198 8.47055 13.0098 8.06055 12.5098L4.22052 8.46976C3.71052 7.95976 3.31055 7.05977 3.31055 6.44977V4.12976C3.31055 2.91976 4.22057 2.00977 5.33057 2.00977H18.6705C19.7805 2.00977 20.6906 2.91975 20.6906 4.02975V6.24976C20.6906 7.05976 20.1805 8.06976 19.6805 8.56976" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.0692 16.5201C17.8365 16.5201 19.2692 15.0874 19.2692 13.3201C19.2692 11.5528 17.8365 10.1201 16.0692 10.1201C14.3018 10.1201 12.8691 11.5528 12.8691 13.3201C12.8691 15.0874 14.3018 16.5201 16.0692 16.5201Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.8691 17.1201L18.8691 16.1201" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.7491 15.41L18.8992 14.56C19.3392 13.89 19.5991 13.1 19.5991 12.24C19.5991 9.89999 17.6991 8 15.3591 8C13.0191 8 11.1191 9.89999 11.1191 12.24C11.1191 14.58 13.0191 16.48 15.3591 16.48C16.2191 16.48 17.0191 16.22 17.6791 15.78L18.5292 16.63C18.6992 16.8 18.9192 16.88 19.1392 16.88C19.3592 16.88 19.5791 16.8 19.7491 16.63C20.0791 16.29 20.0791 15.74 19.7491 15.41Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.41016 2H18.5802C19.6802 2 20.5802 2.90999 20.5802 4.01999V6.23999C20.5802 7.04999 20.0802 8.06 19.5802 8.56L15.2902 12.4C14.6902 12.91 14.2902 13.92 14.2902 14.72V19.06C14.2902 19.67 13.8902 20.47 13.3902 20.78L11.9902 21.69C10.6902 22.5 8.90021 21.59 8.90021 19.97V14.62C8.90021 13.91 8.50016 13 8.10016 12.5L4.31018 8.45999C3.81018 7.94999 3.41016 7.05 3.41016 6.44V4.12C3.42016 2.91 4.32016 2 5.41016 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFilterSearch;