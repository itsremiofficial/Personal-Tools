import { FC } from 'react';
import { IconProps } from "../../types";

const IconRam2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.99047 21.97L7.98047 19C7.98047 17.89 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.94043 4.95006L8.99043 2.06006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9404 4.95006L11.9904 2.06006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.9404 4.92004L14.9904 2.04004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 10V17C22 20 20 22 17 22H7C4 22 2 20 2 17V10C2 7.26 3.67 5.34999 6.25 5.04999C6.49 5.00999 6.74 5 7 5H17C20 5 22 7 22 10Z" fill="currentColor" /><path d="M7.75 2V5H7C6.74 5 6.49 5.00999 6.25 5.04999V2C6.25 1.59 6.59 1.25 7 1.25C7.41 1.25 7.75 1.59 7.75 2Z" fill="currentColor" /><path d="M7.88086 16C9.26157 16 10.3809 14.8807 10.3809 13.5C10.3809 12.1193 9.26157 11 7.88086 11C6.50015 11 5.38086 12.1193 5.38086 13.5C5.38086 14.8807 6.50015 16 7.88086 16Z" fill="currentColor" /><path d="M17.8809 12.25H13.8809C13.4709 12.25 13.1309 11.91 13.1309 11.5C13.1309 11.09 13.4709 10.75 13.8809 10.75H17.8809C18.2909 10.75 18.6309 11.09 18.6309 11.5C18.6309 11.91 18.2909 12.25 17.8809 12.25Z" fill="currentColor" /><path d="M14.3809 16.25H13.8809C13.4709 16.25 13.1309 15.91 13.1309 15.5C13.1309 15.09 13.4709 14.75 13.8809 14.75H14.3809C14.7909 14.75 15.1309 15.09 15.1309 15.5C15.1309 15.91 14.7909 16.25 14.3809 16.25Z" fill="currentColor" /><path d="M17.8809 16.25H17.3809C16.9709 16.25 16.6309 15.91 16.6309 15.5C16.6309 15.09 16.9709 14.75 17.3809 14.75H17.8809C18.2909 14.75 18.6309 15.09 18.6309 15.5C18.6309 15.91 18.2909 16.25 17.8809 16.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRam2;