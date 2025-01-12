import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMaximizeCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M16.9199 3C16.9199 2.58579 17.2557 2.25 17.6699 2.25H21.6699C22.0841 2.25 22.4199 2.58579 22.4199 3V7C22.4199 7.41421 22.0841 7.75 21.6699 7.75C21.2557 7.75 20.9199 7.41421 20.9199 7V3.75H17.6699C17.2557 3.75 16.9199 3.41421 16.9199 3Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.2003 2.46967C22.4931 2.76256 22.4931 3.23744 22.2003 3.53033L16.2003 9.53033C15.9074 9.82322 15.4325 9.82322 15.1396 9.53033C14.8467 9.23744 14.8467 8.76256 15.1396 8.46967L21.1396 2.46967C21.4325 2.17678 21.9074 2.17678 22.2003 2.46967Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.66992 16.25C4.08414 16.25 4.41992 16.5858 4.41992 17V20.25H7.66992C8.08414 20.25 8.41992 20.5858 8.41992 21C8.41992 21.4142 8.08414 21.75 7.66992 21.75H3.66992C3.25571 21.75 2.91992 21.4142 2.91992 21V17C2.91992 16.5858 3.25571 16.25 3.66992 16.25Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.2003 14.4697C10.4931 14.7626 10.4931 15.2374 10.2003 15.5303L4.20025 21.5303C3.90736 21.8232 3.43248 21.8232 3.13959 21.5303C2.8467 21.2374 2.8467 20.7626 3.13959 20.4697L9.13959 14.4697C9.43249 14.1768 9.90736 14.1768 10.2003 14.4697Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M1.91992 12C1.91992 6.06579 6.73571 1.25 12.6699 1.25C13.4103 1.25 14.1396 1.32508 14.837 1.46458C15.2432 1.54581 15.5066 1.94093 15.4254 2.3471C15.3441 2.75327 14.949 3.01668 14.5429 2.93545C13.9403 2.81494 13.3096 2.75 12.6699 2.75C7.56414 2.75 3.41992 6.89421 3.41992 12C3.41992 12.6393 3.48479 13.2593 3.60492 13.8507C3.68738 14.2566 3.42515 14.6525 3.01923 14.735C2.6133 14.8174 2.2174 14.5552 2.13494 14.1493C1.99508 13.4607 1.91992 12.7407 1.91992 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.3225 9.26459C22.7286 9.18335 23.1238 9.44677 23.205 9.85294C23.3443 10.5493 23.4196 11.2686 23.4196 12C23.4196 17.9342 18.6038 22.75 12.6696 22.75C11.9292 22.75 11.1999 22.6749 10.5025 22.5354C10.0963 22.4542 9.83289 22.0591 9.91412 21.6529C9.99536 21.2468 10.3905 20.9833 10.7966 21.0646C11.3992 21.1851 12.0299 21.25 12.6696 21.25C17.7754 21.25 21.9196 17.1058 21.9196 12C21.9196 11.3715 21.8549 10.7508 21.7341 10.1471C21.6529 9.74094 21.9163 9.34582 22.3225 9.26459Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3596 2.71002C22.2796 2.53002 22.1396 2.37999 21.9496 2.29999C21.8596 2.25999 21.7596 2.23999 21.6596 2.23999H17.6596C17.2496 2.23999 16.9096 2.57999 16.9096 2.98999C16.9096 3.39999 17.2496 3.73999 17.6596 3.73999H19.8496L15.1296 8.46002C14.8396 8.75002 14.8396 9.23002 15.1296 9.52002C15.2796 9.67002 15.4696 9.73999 15.6596 9.73999C15.8496 9.73999 16.0396 9.67002 16.1896 9.52002L20.9096 4.79999V7C20.9096 7.41 21.2496 7.75 21.6596 7.75C22.0696 7.75 22.4096 7.41 22.4096 7V3C22.4196 2.9 22.3996 2.81002 22.3596 2.71002Z" fill="currentColor" /><path d="M9.13989 14.4699L4.41992 19.19V17C4.41992 16.59 4.07992 16.25 3.66992 16.25C3.25992 16.25 2.91992 16.59 2.91992 17V21C2.91992 21.1 2.93992 21.19 2.97992 21.29C3.05992 21.47 3.19989 21.62 3.38989 21.7C3.47989 21.74 3.57993 21.76 3.67993 21.76H7.67993C8.08993 21.76 8.42993 21.42 8.42993 21.01C8.42993 20.6 8.08993 20.26 7.67993 20.26H5.48993L10.2099 15.54C10.4999 15.25 10.4999 14.77 10.2099 14.48C9.9199 14.19 9.42989 14.1799 9.13989 14.4699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2.86993 14.75C2.51993 14.75 2.20989 14.5 2.13989 14.15C1.99989 13.45 1.91992 12.72 1.91992 12C1.91992 6.07 6.73992 1.25 12.6699 1.25C13.3999 1.25 14.1299 1.31997 14.8399 1.46997C15.2499 1.54997 15.5099 1.94998 15.4299 2.34998C15.3499 2.75998 14.9399 3.01 14.5499 2.94C13.9399 2.82 13.3099 2.75 12.6799 2.75C7.57993 2.75 3.42993 6.9 3.42993 12C3.42993 12.62 3.48993 13.25 3.61993 13.85C3.69993 14.26 3.43991 14.65 3.02991 14.73C2.96991 14.75 2.91993 14.75 2.86993 14.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.67 22.75C11.94 22.75 11.21 22.68 10.5 22.53C10.09 22.45 9.82995 22.05 9.90995 21.65C9.98995 21.24 10.4 20.99 10.79 21.06C11.4 21.18 12.03 21.25 12.66 21.25C17.7599 21.25 21.91 17.1 21.91 12C21.91 11.38 21.85 10.76 21.73 10.15C21.65 9.74 21.91 9.35 22.32 9.27C22.73 9.19 23.12 9.44996 23.2 9.85996C23.34 10.56 23.41 11.28 23.41 12C23.42 17.93 18.6 22.75 12.67 22.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3604 2.71C22.2804 2.53 22.1404 2.38 21.9504 2.3C21.8604 2.27 21.7704 2.25 21.6704 2.25H17.6704C17.2604 2.25 16.9204 2.59 16.9204 3C16.9204 3.41 17.2604 3.75 17.6704 3.75H19.8604L15.1404 8.47C14.8504 8.76 14.8504 9.24 15.1404 9.53C15.2904 9.68 15.4804 9.75 15.6704 9.75C15.8604 9.75 16.0504 9.68 16.2004 9.53L20.9204 4.81V7C20.9204 7.41 21.2604 7.75 21.6704 7.75C22.0804 7.75 22.4204 7.41 22.4204 7V3C22.4204 2.9 22.4004 2.81 22.3604 2.71Z" fill="currentColor" /><path d="M9.13992 14.47L4.41992 19.19V17C4.41992 16.59 4.07992 16.25 3.66992 16.25C3.25992 16.25 2.91992 16.59 2.91992 17V21C2.91992 21.1 2.93992 21.19 2.97992 21.29C3.05992 21.47 3.19992 21.62 3.38992 21.7C3.46992 21.73 3.56992 21.75 3.66992 21.75H7.66992C8.07992 21.75 8.41992 21.41 8.41992 21C8.41992 20.59 8.07992 20.25 7.66992 20.25H5.47992L10.1999 15.53C10.4899 15.24 10.4899 14.76 10.1999 14.47C9.90992 14.18 9.42992 14.18 9.13992 14.47Z" fill="currentColor" /><path d="M2.86992 14.75C2.51992 14.75 2.20992 14.5 2.13992 14.15C1.99992 13.45 1.91992 12.72 1.91992 12C1.91992 6.07 6.73992 1.25 12.6699 1.25C13.3999 1.25 14.1299 1.32 14.8399 1.47C15.2499 1.55 15.5099 1.95 15.4299 2.35C15.3499 2.76 14.9399 3.01 14.5499 2.94C13.9199 2.81 13.2999 2.75 12.6699 2.75C7.56992 2.75 3.41992 6.9 3.41992 12C3.41992 12.62 3.47992 13.25 3.60992 13.85C3.68992 14.26 3.42992 14.65 3.01992 14.73C2.96992 14.75 2.91992 14.75 2.86992 14.75Z" fill="currentColor" /><path d="M12.67 22.75C11.94 22.75 11.21 22.68 10.5 22.53C10.09 22.45 9.82995 22.05 9.90995 21.65C9.98995 21.24 10.4 20.99 10.79 21.06C11.4 21.18 12.03 21.25 12.66 21.25C17.76 21.25 21.91 17.1 21.91 12C21.91 11.38 21.85 10.76 21.73 10.15C21.65 9.74 21.91 9.35 22.32 9.27C22.73 9.19 23.12 9.45 23.2 9.86C23.34 10.56 23.41 11.28 23.41 12C23.42 17.93 18.6 22.75 12.67 22.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMaximizeCircle;