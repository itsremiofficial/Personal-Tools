import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconNotebookMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V9Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M22 21H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15 15H9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1 20.24C1 19.8202 1.3436 19.48 1.76744 19.48H22.2326C22.6564 19.48 23 19.8202 23 20.24C23 20.6597 22.6564 21 22.2326 21H1.76744C1.3436 21 1 20.6597 1 20.24Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M3.69013 3.8904C2.79102 4.78079 2.79102 6.21386 2.79102 9.08V14.1467C2.79102 16.0574 2.79102 17.0128 3.39042 17.6064C3.98983 18.2 4.95457 18.2 6.88404 18.2H17.1166C19.0461 18.2 20.0108 18.2 20.6102 17.6064C21.2096 17.0128 21.2096 16.0574 21.2096 14.1467V9.08C21.2096 6.21386 21.2096 4.78079 20.3105 3.8904C19.4114 3 17.9643 3 15.0701 3H8.93055C6.03635 3 4.58924 3 3.69013 3.8904Z" fill="currentColor" /><path d="M8.93053 14.4004C8.50668 14.4004 8.16309 14.7407 8.16309 15.1604C8.16309 15.5801 8.50668 15.9204 8.93053 15.9204H15.0701C15.4939 15.9204 15.8375 15.5801 15.8375 15.1604C15.8375 14.7407 15.4939 14.4004 15.0701 14.4004H8.93053Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1 20.24C1 19.8203 1.3436 19.48 1.76744 19.48H22.2326C22.6564 19.48 23 19.8203 23 20.24C23 20.6597 22.6564 21 22.2326 21H1.76744C1.3436 21 1 20.6597 1 20.24Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.68981 3.8904C2.7907 4.78079 2.7907 6.21386 2.7907 9.08V14.1467C2.7907 16.0574 2.7907 17.0128 3.39011 17.6064C3.98952 18.2 4.95425 18.2 6.88372 18.2H17.1163C19.0457 18.2 20.0105 18.2 20.6099 17.6064C21.2093 17.0128 21.2093 16.0574 21.2093 14.1467V9.08C21.2093 6.21386 21.2093 4.78079 20.3102 3.8904C19.4111 3 17.964 3 15.0698 3H8.93023C6.03603 3 4.58893 3 3.68981 3.8904ZM8.16279 15.16C8.16279 14.7403 8.50639 14.4 8.93023 14.4H15.0698C15.4936 14.4 15.8372 14.7403 15.8372 15.16C15.8372 15.5797 15.4936 15.92 15.0698 15.92H8.93023C8.50639 15.92 8.16279 15.5797 8.16279 15.16Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconNotebookMinimalistic;