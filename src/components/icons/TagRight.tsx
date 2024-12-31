import { FC } from 'react';
import { IconProps } from "../../types";

const IconTagUser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97V15.88C21 17.52 19.66 18.86 18 18.86Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.0691 8.9498C12.0291 8.9498 11.9691 8.9498 11.9191 8.9498C10.8691 8.9098 10.0391 8.0598 10.0391 6.9998C10.0391 5.9198 10.9091 5.0498 11.9891 5.0498C13.0691 5.0498 13.9391 5.9298 13.9391 6.9998C13.9491 8.0598 13.1191 8.9198 12.0691 8.9498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.24945 11.96C7.91945 12.85 7.91945 14.3 9.24945 15.19C10.7595 16.2 13.2395 16.2 14.7495 15.19C16.0795 14.3 16.0795 12.85 14.7495 11.96C13.2395 10.96 10.7695 10.96 9.24945 11.96Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.66 8.86969 20.25 10.2797 20.25Z" fill="currentColor" /><path d="M14.59 12L16.53 10.06C16.82 9.76997 16.82 9.28997 16.53 8.99997C16.24 8.70997 15.76 8.70997 15.47 8.99997L13.53 10.94L11.59 8.99997C11.3 8.70997 10.82 8.70997 10.53 8.99997C10.24 9.28997 10.24 9.76997 10.53 10.06L12.47 12L10.53 13.94C10.24 14.23 10.24 14.71 10.53 15C10.68 15.15 10.87 15.22 11.06 15.22C11.25 15.22 11.44 15.15 11.59 15L13.53 13.06L15.47 15C15.62 15.15 15.81 15.22 16 15.22C16.19 15.22 16.38 15.15 16.53 15C16.82 14.71 16.82 14.23 16.53 13.94L14.59 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTagUser;