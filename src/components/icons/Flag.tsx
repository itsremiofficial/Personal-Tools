import { FC } from 'react';
import { IconProps } from "../../types";

const IconFlag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.15039 2V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M5.15039 4H16.3504C19.0504 4 19.6504 5.5 17.7504 7.4L16.5504 8.6C15.7504 9.4 15.7504 10.7 16.5504 11.4L17.7504 12.6C19.6504 14.5 18.9504 16 16.3504 16H5.15039" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.7491 15.41L18.8992 14.56C19.3392 13.89 19.5991 13.1 19.5991 12.24C19.5991 9.89999 17.6991 8 15.3591 8C13.0191 8 11.1191 9.89999 11.1191 12.24C11.1191 14.58 13.0191 16.48 15.3591 16.48C16.2191 16.48 17.0191 16.22 17.6791 15.78L18.5292 16.63C18.6992 16.8 18.9192 16.88 19.1392 16.88C19.3592 16.88 19.5791 16.8 19.7491 16.63C20.0791 16.29 20.0791 15.74 19.7491 15.41Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.41016 2H18.5802C19.6802 2 20.5802 2.90999 20.5802 4.01999V6.23999C20.5802 7.04999 20.0802 8.06 19.5802 8.56L15.2902 12.4C14.6902 12.91 14.2902 13.92 14.2902 14.72V19.06C14.2902 19.67 13.8902 20.47 13.3902 20.78L11.9902 21.69C10.6902 22.5 8.90021 21.59 8.90021 19.97V14.62C8.90021 13.91 8.50016 13 8.10016 12.5L4.31018 8.45999C3.81018 7.94999 3.41016 7.05 3.41016 6.44V4.12C3.42016 2.91 4.32016 2 5.41016 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlag;