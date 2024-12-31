import { FC } from 'react';
import { IconProps } from "../../types";

const IconReceiveSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9 11.5098L12 14.5098L15 11.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 14.5098V6.50977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2 7V21C2 21.83 2.94001 22.3 3.60001 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28999 22.29C8.67999 22.68 9.32001 22.68 9.71001 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" fill="currentColor" /><path d="M12 9.75H6C5.59 9.75 5.25 9.41 5.25 9C5.25 8.59 5.59 8.25 6 8.25H12C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75Z" fill="currentColor" /><path d="M11.25 13.75H6.75C6.34 13.75 6 13.41 6 13C6 12.59 6.34 12.25 6.75 12.25H11.25C11.66 12.25 12 12.59 12 13C12 13.41 11.66 13.75 11.25 13.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceiveSquare;