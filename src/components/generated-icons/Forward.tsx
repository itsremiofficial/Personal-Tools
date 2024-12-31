import { FC } from 'react';
import { IconProps } from "@/types";

const IconForward: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 8.33994V15.6599C2 17.1599 3.62999 18.0999 4.92999 17.3499L8.10001 15.5299L11.27 13.7C11.47 13.58 11.63 13.45 11.76 13.29V10.73C11.63 10.57 11.47 10.44 11.27 10.32L8.10001 8.48993L4.92999 6.66996C3.62999 5.89996 2 6.83994 2 8.33994Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7598 8.33994V15.6599C11.7598 17.1599 13.3898 18.0999 14.6898 17.3499L17.8597 15.5299L21.0298 13.7C22.3298 12.95 22.3298 11.08 21.0298 10.32L17.8597 8.48993L14.6898 6.66996C13.3898 5.89996 11.7598 6.83994 11.7598 8.33994Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 8.33983V15.6598C2 17.1598 3.62999 18.0998 4.92999 17.3498L8.10001 15.5198L11.27 13.6898L11.76 13.4098V10.5898L11.27 10.3098L8.10001 8.47984L4.92999 6.64983C3.62999 5.89983 2 6.83983 2 8.33983Z" fill="currentColor" /><path d="M11.7598 8.33983V15.6598C11.7598 17.1598 13.3897 18.0998 14.6797 17.3498L17.8597 15.5198L21.0298 13.6898C22.3198 12.9398 22.3198 11.0598 21.0298 10.3098L17.8597 8.47984L14.6797 6.64983C13.3897 5.89983 11.7598 6.83983 11.7598 8.33983Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconForward;