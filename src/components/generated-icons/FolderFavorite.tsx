import { FC } from 'react';
import { IconProps } from "@/types";

const IconFolderFavorite: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.20046 14.78L11.7805 17.04C11.9005 17.15 12.0905 17.15 12.2105 17.04L14.7905 14.78C15.4605 14.19 15.5505 13.19 14.9905 12.49C14.4305 11.79 13.4105 11.66 12.7005 12.2L12.0005 12.74L11.2905 12.21C10.5705 11.67 9.56046 11.8 9.00046 12.5C8.44046 13.19 8.53046 14.2 9.20046 14.78Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z" fill="currentColor" /><path d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.54 15.9699L12.39 17.8499C12.28 17.9499 12.14 17.9999 12 17.9999C11.86 17.9999 11.72 17.9499 11.61 17.8499L9.46 15.9699C8.78 15.3699 8.69 14.3499 9.25 13.6399C9.83 12.9199 10.85 12.7899 11.59 13.3399L11.99 13.6399L12.39 13.3399C13.13 12.7899 14.15 12.9199 14.73 13.6399C15.31 14.3499 15.22 15.3699 14.54 15.9699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolderFavorite;