import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMonitorSmartphone: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H15.5C17.8346 2 19.0019 2 19.8856 2.47231C20.5833 2.84525 21.1548 3.4167 21.5277 4.11441C22 4.99805 22 6.16537 22 8.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M14 15C14 13.1144 14 12.1716 14.5858 11.5858C15.1716 11 16.1144 11 18 11C19.8856 11 20.8284 11 21.4142 11.5858C22 12.1716 22 13.1144 22 15V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V15Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M19 20H17" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M11 22V22.75C11.4142 22.75 11.75 22.4142 11.75 22H11ZM8 21.25C7.58579 21.25 7.25 21.5858 7.25 22C7.25 22.4142 7.58579 22.75 8 22.75V21.25ZM11.75 17C11.75 16.5858 11.4142 16.25 11 16.25C10.5858 16.25 10.25 16.5858 10.25 17H11.75ZM11 21.25H8V22.75H11V21.25ZM11.75 22V17H10.25V22H11.75Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M11 13H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.9997 15V18C21.9997 19.8856 21.9997 20.8284 21.4139 21.4142C20.8282 22 19.8854 22 17.9997 22C16.1141 22 15.1713 22 14.5855 21.4142C13.9997 20.8284 13.9997 19.8856 13.9997 18V15C13.9997 13.1144 13.9997 12.1716 14.5855 11.5858C15.1713 11 16.1141 11 17.9997 11C19.8854 11 20.8282 11 21.4139 11.5858C21.9997 12.1716 21.9997 13.1144 21.9997 15ZM16.2497 20C16.2497 19.5858 16.5855 19.25 16.9997 19.25H18.9997C19.4139 19.25 19.7497 19.5858 19.7497 20C19.7497 20.4142 19.4139 20.75 18.9997 20.75H16.9997C16.5855 20.75 16.2497 20.4142 16.2497 20Z" fill="currentColor" /><path d="M7.99973 17C5.17131 17 3.75709 17 2.87841 16.1213C2.30911 15.552 2.07058 14.7579 2 13.5V13H12.5162V13.5C12.4996 13.9365 12.4997 14.4116 12.4997 14.9105V18.0895C12.4996 18.9551 12.4995 19.7488 12.5863 20.3944C12.6819 21.1054 12.9068 21.8568 13.5249 22.4749L13.5503 22.5H7.99973C7.58552 22.5 7.24973 22.1642 7.24973 21.75C7.24973 21.3358 7.58552 21 7.99973 21H11.2497V17H7.99973Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V10.1383C21.4917 9.80481 20.9315 9.65881 20.3944 9.5866C19.7488 9.4998 18.9551 9.49989 18.0895 9.49999H17.9105C17.0449 9.49989 16.2512 9.4998 15.6056 9.5866C14.8946 9.68219 14.1432 9.90708 13.5251 10.5251C12.9376 11.1127 12.7054 11.8207 12.6017 12.5V13H2L2.00003 12.5C1.99352 12.0494 2 11.5516 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22877 2 10 2Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V11C2 11.5516 2 12.0494 2.00652 12.5H12.6017C12.7054 11.8207 12.9376 11.1127 13.5251 10.5251C14.1432 9.90708 14.8946 9.68219 15.6056 9.5866C16.2512 9.4998 17.0449 9.49989 17.9105 9.49999H18.0895C18.9551 9.49989 19.7488 9.4998 20.3944 9.5866C20.9315 9.65881 21.4917 9.80481 22 10.1383V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2Z" fill="currentColor" /><path d="M2.87868 16.1213C3.75736 17 5.17157 17 8 17H11.25V21H8C7.58579 21 7.25 21.3358 7.25 21.75C7.25 22.1642 7.58579 22.5 8 22.5H13.5505L13.5251 22.4749C12.9071 21.8568 12.6822 21.1054 12.5866 20.3944C12.4998 19.7488 12.4999 18.9551 12.5 18.0895V14.9105C12.4999 14.4116 12.4999 13.9365 12.5165 13.5H2.03835C2.10893 14.7579 2.30938 15.552 2.87868 16.1213Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 15V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V15C14 13.1144 14 12.1716 14.5858 11.5858C15.1716 11 16.1144 11 18 11C19.8856 11 20.8284 11 21.4142 11.5858C22 12.1716 22 13.1144 22 15ZM16.25 20C16.25 19.5858 16.5858 19.25 17 19.25H19C19.4142 19.25 19.75 19.5858 19.75 20C19.75 20.4142 19.4142 20.75 19 20.75H17C16.5858 20.75 16.25 20.4142 16.25 20Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMonitorSmartphone;