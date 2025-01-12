import { FC } from 'react';

const IconAirpod: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.29004 15.75V8.25C3.29004 7.48 3.32004 6.79 3.40004 6.18C3.77004 2.89 5.32004 2 9.55004 2H15.8C20.02 2 21.58 2.89 21.94 6.18C22.03 6.79 22.05 7.48 22.05 8.25V15.75C22.05 16.52 22.02 17.21 21.94 17.83C21.57 21.11 20.02 22 15.79 22H9.55004C5.33004 22 3.77004 21.11 3.41004 17.83C3.32004 17.21 3.29004 16.52 3.29004 15.75Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.8998 8.91992H17.7998" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.53945 8.91992H3.43945" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.8 8.92012C17.8 10.0501 16.88 10.9701 15.75 10.9701H9.59004C9.03004 10.9701 8.51004 10.7401 8.14004 10.3601C7.77004 10.0001 7.54004 9.49012 7.54004 8.92012C7.54004 7.79012 8.46004 6.87012 9.59004 6.87012H15.74C16.3 6.87012 16.82 7.10012 17.19 7.48012C17.57 7.85012 17.8 8.36012 17.8 8.92012Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.1699 6.5V17.5C22.1699 19.99 20.1599 22 17.6699 22H7.66992C5.17992 22 3.16992 19.99 3.16992 17.5V6.5C3.16992 4.01 5.17992 2 7.66992 2H17.6699C20.1599 2 22.1699 4.01 22.1699 6.5Z" fill="currentColor" /><path d="M22.1699 8.17V9.67H18.0399C17.7299 10.64 16.8199 11.34 15.7499 11.34H9.58992C8.94992 11.34 8.31992 11.08 7.86992 10.62C7.59992 10.36 7.40992 10.03 7.28992 9.67H3.16992V8.17H7.29992C7.60992 7.2 8.51992 6.5 9.58992 6.5H15.7399C16.3899 6.5 17.0099 6.76 17.4599 7.22C17.7299 7.49 17.9299 7.81 18.0399 8.17H22.1699Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7499 11.3399H9.58992C8.94992 11.3399 8.31992 11.0799 7.86992 10.6199C7.72992 10.4799 7.60992 10.3299 7.50992 10.1599C7.32992 9.85992 7.00992 9.66992 6.65992 9.66992H4.16992C3.61992 9.66992 3.16992 10.1199 3.16992 10.6699V17.4999C3.16992 19.9899 5.17992 21.9999 7.66992 21.9999H17.6699C20.1599 21.9999 22.1699 19.9899 22.1699 17.4999V10.6699C22.1699 10.1199 21.7199 9.66992 21.1699 9.66992H18.6699C18.3099 9.66992 17.9899 9.86992 17.8099 10.1799C17.3899 10.8699 16.6199 11.3399 15.7499 11.3399Z" fill="currentColor" /><path d="M17.6699 2H7.66992C5.17992 2 3.16992 4.01 3.16992 6.5V7.17C3.16992 7.72 3.61992 8.17 4.16992 8.17H6.66992C7.02992 8.17 7.34992 7.97 7.52992 7.66C7.94992 6.97 8.71992 6.5 9.58992 6.5H15.5799C16.1899 6.5 17.0699 6.82 17.4899 7.25C17.6199 7.38 17.7199 7.52 17.8199 7.67C17.9999 7.97 18.3199 8.17 18.6799 8.17H21.1799C21.7299 8.17 22.1799 7.72 22.1799 7.17V6.5C22.1699 4.01 20.1599 2 17.6699 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirpod as IconComponent).keywords = [
  "airpod"
];

export default IconAirpod as IconComponent;