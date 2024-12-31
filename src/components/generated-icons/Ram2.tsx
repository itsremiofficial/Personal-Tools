import { FC } from 'react';
import { IconProps } from "@/types";

const IconRam2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 7V17C3.5 20 4.97 22 8.5 22H15.5C18.97 22 20.5 20 20.5 17V15.83C20.5 15.3 20.29 14.79 19.91 14.42L19.08 13.59C18.7 13.21 18.49 12.71 18.49 12.18V10C18.49 9.45 18.94 9 19.49 9C20.04 9 20.49 8.55 20.49 8V7C20.49 4 18.96 2 15.49 2H8.49C4.97 2 3.5 4 3.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.99047 21.97L7.98047 19C7.98047 17.89 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.94043 4.95006L8.99043 2.06006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9404 4.95006L11.9904 2.06006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.9404 4.92004L14.9904 2.04004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.5 10V12.17C18.5 12.7 18.71 13.21 19.09 13.59L19.91 14.41C20.29 14.79 20.5 15.3 20.5 15.83V17C20.5 20 18.97 22 15.5 22H8.5C4.97 22 3.5 20 3.5 17V7C3.5 4.08 4.9 2.1 8.24 2.01C8.32 2 8.41 2 8.5 2H15.5C15.58 2 15.66 2 15.74 2.01C19.04 2.09 20.5 4.07 20.5 7V8C20.5 8.55 20.05 9 19.5 9C18.95 9 18.5 9.45 18.5 10Z" fill="currentColor" /><path d="M9.73967 2L9.68967 4.96C9.67967 5.37 9.34967 5.7 8.93967 5.7H8.92968C8.50968 5.69 8.17967 5.35 8.18967 4.93L8.23967 2.01C8.31967 2 8.40967 2 8.49967 2H9.73967Z" fill="currentColor" /><path d="M12.7397 2L12.6897 4.95C12.6797 5.35 12.3497 5.68 11.9397 5.68H11.9297C11.5097 5.67 11.1797 5.33 11.1897 4.92L11.2397 2H12.7397Z" fill="currentColor" /><path d="M15.7397 2.01L15.6897 4.89C15.6797 5.3 15.3497 5.63 14.9397 5.63H14.9297C14.5097 5.62 14.1797 5.28 14.1897 4.87L14.2397 2H15.4997C15.5797 2 15.6597 2 15.7397 2.01Z" fill="currentColor" /><path d="M16.0205 21.98C15.8505 21.99 15.6805 22 15.5105 22H8.51047C8.33047 22 8.16047 22 8.00047 21.98L7.98047 19C7.98047 17.9 8.87047 17 9.98047 17H13.9905C15.0905 17 15.9805 17.89 15.9905 18.99L16.0205 21.98Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRam2;