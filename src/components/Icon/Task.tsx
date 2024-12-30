import { FC } from 'react';
import { IconProps } from "../../types";

const IconTaskSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.3691 8.87988H17.6191" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.38086 8.87988L7.13086 9.62988L9.38086 7.37988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.3691 15.8799H17.6191" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.38086 15.8799L7.13086 16.6299L9.38086 14.3799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.0691 8.95005C12.0291 8.95005 11.9691 8.95005 11.9191 8.95005C10.8691 8.91005 10.0391 8.06005 10.0391 7.00005C10.0391 5.92005 10.9091 5.05005 11.9891 5.05005C13.0691 5.05005 13.9391 5.93005 13.9391 7.00005C13.9491 8.06005 13.1191 8.92005 12.0691 8.95005Z" fill="currentColor" /><path d="M9.24945 11.96C7.91945 12.85 7.91945 14.3 9.24945 15.19C10.7595 16.2 13.2395 16.2 14.7495 15.19C16.0795 14.3 16.0795 12.85 14.7495 11.96C13.2395 10.96 10.7695 10.96 9.24945 11.96Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.05C13.08 5.05 13.95 5.93 13.95 7C13.95 8.06 13.11 8.91 12.07 8.95C12.03 8.95 11.97 8.95 11.92 8.95C10.87 8.91 10.04 8.06 10.04 7C10.05 5.93 10.92 5.05 12 5.05ZM14.75 15.19C13.24 16.2 10.76 16.2 9.25 15.19C7.92 14.31 7.92 12.85 9.25 11.96C10.77 10.95 13.25 10.95 14.75 11.96C16.08 12.85 16.08 14.3 14.75 15.19Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTaskSquare;