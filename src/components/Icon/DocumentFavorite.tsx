import { FC } from 'react';
import { IconProps } from "../../types";

const IconDocumentFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.61978 15.7299C6.28978 14.6999 6.67978 13.4299 7.74978 13.0799C8.31978 12.8999 9.01978 13.0499 9.40978 13.5999C9.77978 13.0299 10.5098 12.8999 11.0698 13.0799C12.1498 13.4299 12.5298 14.6999 12.2098 15.7299C11.6998 17.3599 9.90978 18.2099 9.40978 18.2099C8.91978 18.1999 7.14978 17.3699 6.61978 15.7299Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4.00001 2.5 7.57001V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z" fill="currentColor" /><path d="M15.7997 2.21C15.3897 1.8 14.6797 2.07998 14.6797 2.64998V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.82 20.8297 8.82C21.3997 8.82 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.69 15.7997 2.21Z" fill="currentColor" /><path d="M14.7605 19.2598C12.4105 19.4298 12.4105 22.8298 14.7605 22.9998H20.3205C20.9905 22.9998 21.6505 22.7498 22.1405 22.2998C23.7905 20.8598 22.9105 17.9798 20.7405 17.7098C19.9605 13.0198 13.1805 14.7998 14.7805 19.2698" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentFavorite;