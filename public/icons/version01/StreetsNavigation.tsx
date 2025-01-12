import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconStreetsNavigation: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.9211C19.1395 16.8217 19.9218 16.5976 20.5376 16.0923C20.7401 15.9261 20.9258 15.7404 21.092 15.5378C22 14.4315 22 12.7877 22 9.50024C22 6.21276 22 4.56902 21.092 3.46267C20.9258 3.26013 20.7401 3.07442 20.5376 2.9082C19.4312 2.00024 17.7875 2.00024 14.5 2.00024H9.5C6.21252 2.00024 4.56878 2.00024 3.46243 2.9082C3.25989 3.07442 3.07418 3.26013 2.90796 3.46267C2 4.56902 2 6.21276 2 9.50024C2 12.7877 2 14.4315 2.90796 15.5378C3.07418 15.7404 3.25989 15.9261 3.46243 16.0923C4.07821 16.5976 4.86048 16.8217 6 16.9211" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M20.5 15.5002L14 10.5002M3.5 3.00024L14 10.5002M20.5 3.50024L14 10.5002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15.2673 19.2009L13.932 16.5297C13.089 14.8434 12.6675 14.0002 12 14.0002C11.3325 14.0002 10.911 14.8434 10.068 16.5297L8.73273 19.2009C8.22086 20.2248 7.96493 20.7368 8.00387 21.0591C8.06013 21.5247 8.41041 21.9009 8.87082 21.99C9.18949 22.0517 9.71822 21.8326 10.7757 21.3945C11.1669 21.2324 11.3625 21.1514 11.5629 21.11C11.8513 21.0504 12.1487 21.0504 12.4371 21.11C12.6375 21.1514 12.8331 21.2324 13.2243 21.3945C14.2818 21.8326 14.8105 22.0517 15.1292 21.99C15.5896 21.9009 15.9399 21.5247 15.9961 21.0591C16.0351 20.7368 15.7791 20.2248 15.2673 19.2009Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3226 3.78638L15.1069 10.4164L21.2865 15.2717C22 14.1682 22 12.5342 22 9.50047C22 6.5187 22 4.88917 21.3226 3.78638Z" fill="currentColor" /><path d="M15.2673 19.2009L13.932 16.5297C13.089 14.8434 12.6675 14.0002 12 14.0002C11.3325 14.0002 10.911 14.8434 10.068 16.5297L8.73273 19.2009C8.22086 20.2248 7.96493 20.7368 8.00387 21.0591C8.06013 21.5247 8.41041 21.9009 8.87082 21.99C9.18949 22.0517 9.71822 21.8326 10.7757 21.3945C11.1669 21.2324 11.3625 21.1514 11.5629 21.11C11.8513 21.0504 12.1487 21.0504 12.4371 21.11C12.6375 21.1514 12.8331 21.2324 13.2243 21.3945C14.2818 21.8326 14.8105 22.0517 15.1292 21.99C15.5896 21.9009 15.9399 21.5247 15.9961 21.0591C16.0351 20.7368 15.7791 20.2248 15.2673 19.2009Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M2 9.50023C2 9.51348 2 9.5267 2 9.53989C2.00001 12.8008 2.00368 14.4359 2.90796 15.5378C3.07418 15.7403 3.25989 15.9261 3.46243 16.0923C3.64344 16.2408 3.83883 16.3651 4.05346 16.469C5.15025 17 6.74919 17 9.49726 17H9.49975H14.4998L15.8427 16.9974C16.6828 16.9916 17.3922 16.9741 18 16.9211C18.9436 16.8388 19.6422 16.671 20.2042 16.3288L13.5476 11.0986L2.96107 3.39929C2.94315 3.42023 2.92545 3.44135 2.90796 3.46266C2 4.56901 2 6.21275 2 9.50023Z" fill="currentColor" /><path d="M14.5 2.00024H9.49997C6.8838 2.00024 5.3086 2.00024 4.2168 2.45783L13.9056 9.50427L20.2716 2.71397C19.168 2.00024 17.534 2.00024 14.5 2.00024Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2.00024H9.5C6.88382 2.00024 5.30862 2.00024 4.21682 2.45783L13.9057 9.50427L20.2716 2.71397C19.168 2.00024 17.534 2.00024 14.5 2.00024Z" fill="currentColor" /><path d="M21.3225 3.78615L15.1069 10.4161L21.2865 15.2715C22 14.1679 22 12.534 22 9.50024C22 6.51847 22 4.88895 21.3225 3.78615Z" fill="currentColor" /><path d="M2 9.50024C2 12.7877 2 14.4315 2.90796 15.5378C3.07418 15.7404 3.25989 15.9261 3.46243 16.0923C4.07821 16.5977 4.86048 16.8217 6 16.9211C6.60779 16.9741 7.31724 16.9916 8.15726 16.9974L8.72635 15.859L8.7724 15.7668C9.15377 15.0036 9.51175 14.2872 9.86973 13.7742C10.2357 13.2497 10.8992 12.5002 12 12.5002C13.1008 12.5002 13.7643 13.2497 14.1303 13.7742C14.4883 14.2872 14.8462 15.0036 15.2276 15.7669L15.2737 15.859L15.8427 16.9974C16.6828 16.9916 17.3922 16.9741 18 16.9211C18.9436 16.8388 19.6422 16.671 20.2042 16.3288L13.5476 11.0986L2.96107 3.3993C2.94315 3.42024 2.92545 3.44136 2.90796 3.46267C2 4.56902 2 6.21276 2 9.50024Z" fill="currentColor" /><path d="M15.2673 19.2009L13.932 16.5297C13.089 14.8434 12.6675 14.0002 12 14.0002C11.3325 14.0002 10.911 14.8434 10.068 16.5297L8.73273 19.2009C8.22086 20.2248 7.96493 20.7368 8.00387 21.0591C8.06013 21.5247 8.41041 21.9009 8.87082 21.99C9.18949 22.0517 9.71822 21.8326 10.7757 21.3945C11.1669 21.2324 11.3625 21.1514 11.5629 21.11C11.8513 21.0504 12.1487 21.0504 12.4371 21.11C12.6375 21.1514 12.8331 21.2324 13.2243 21.3945C14.2818 21.8326 14.8105 22.0517 15.1292 21.99C15.5896 21.9009 15.9399 21.5247 15.9961 21.0591C16.0351 20.7368 15.7791 20.2248 15.2673 19.2009Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStreetsNavigation;