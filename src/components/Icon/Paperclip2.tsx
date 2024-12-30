import { FC } from 'react';
import { IconProps } from "../../types";

const IconPasswordCheck: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.0941 12H11.1031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.09412 12H7.1031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M11.43 18.1798C9.13 18.1798 7.25 16.2998 7.25 13.9998V10.5698C7.25 7.94982 9.38 5.81982 12 5.81982C14.62 5.81982 16.75 7.94982 16.75 10.5698V13.7098C16.75 15.2298 15.52 16.4598 14 16.4598C12.48 16.4598 11.25 15.2298 11.25 13.7098V11.7098C11.25 11.2998 11.59 10.9598 12 10.9598C12.41 10.9598 12.75 11.2998 12.75 11.7098V13.7098C12.75 14.3998 13.31 14.9598 14 14.9598C14.69 14.9598 15.25 14.3998 15.25 13.7098V10.5698C15.25 8.77982 13.79 7.31982 12 7.31982C10.21 7.31982 8.75 8.77982 8.75 10.5698V13.9998C8.75 15.4798 9.95 16.6798 11.43 16.6798C11.84 16.6798 12.18 17.0198 12.18 17.4298C12.18 17.8398 11.84 18.1798 11.43 18.1798Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPasswordCheck;