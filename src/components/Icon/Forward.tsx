import { FC } from 'react';
import { IconProps } from "../../types";

const IconForward: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 8.33994V15.6599C2 17.1599 3.62999 18.0999 4.92999 17.3499L8.10001 15.5299L11.27 13.7C11.47 13.58 11.63 13.45 11.76 13.29V10.73C11.63 10.57 11.47 10.44 11.27 10.32L8.10001 8.48993L4.92999 6.66996C3.62999 5.89996 2 6.83994 2 8.33994Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7598 8.33994V15.6599C11.7598 17.1599 13.3898 18.0999 14.6898 17.3499L17.8597 15.5299L21.0298 13.7C22.3298 12.95 22.3298 11.08 21.0298 10.32L17.8597 8.48993L14.6898 6.66996C13.3898 5.89996 11.7598 6.83994 11.7598 8.33994Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z" fill="currentColor" /><path d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.43 16.2999H9.43C9.02 16.2999 8.68 15.9599 8.68 15.5499C8.68 15.1399 9.02 14.7999 9.43 14.7999H14.43C14.84 14.7999 15.18 15.1399 15.18 15.5499C15.18 15.9599 14.84 16.2999 14.43 16.2999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconForward;