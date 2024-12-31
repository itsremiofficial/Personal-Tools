import { FC } from 'react';
import { IconProps } from "../../types";

const IconTicket: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill="currentColor" /><path d="M16.8299 18.96H7.16992C6.75992 18.96 6.41992 18.62 6.41992 18.21C6.41992 17.8 6.75992 17.46 7.16992 17.46H16.8399C17.2499 17.46 17.5899 17.8 17.5899 18.21C17.5899 18.62 17.2499 18.96 16.8299 18.96Z" fill="currentColor" /><path d="M11.9999 16.2C8.91992 16.2 6.41992 13.7 6.41992 10.62V5.79004C6.41992 5.38004 6.75992 5.04004 7.16992 5.04004C7.57992 5.04004 7.91992 5.38004 7.91992 5.79004V10.62C7.91992 12.87 9.74992 14.7 11.9999 14.7C14.2499 14.7 16.0799 12.87 16.0799 10.62V5.79004C16.0799 5.38004 16.4199 5.04004 16.8299 5.04004C17.2399 5.04004 17.5799 5.38004 17.5799 5.79004V10.62C17.5799 13.7 15.0799 16.2 11.9999 16.2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTicket;