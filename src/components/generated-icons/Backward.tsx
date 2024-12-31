import { FC } from 'react';
import { IconProps } from "@/types";

const IconBackward: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.0002 8.33994V15.6599C22.0002 17.1599 20.3703 18.0999 19.0703 17.3499L15.9002 15.5299L12.7303 13.7C12.5303 13.58 12.3702 13.45 12.2402 13.29V10.73C12.3702 10.57 12.5303 10.44 12.7303 10.32L15.9002 8.48993L19.0703 6.66996C20.3703 5.89996 22.0002 6.83994 22.0002 8.33994Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.2391 8.33994V15.6599C12.2391 17.1599 10.6091 18.0999 9.30914 17.3499L6.13915 15.5299L2.96914 13.7C1.66914 12.95 1.66914 11.08 2.96914 10.32L6.13915 8.48993L9.30914 6.66996C10.6091 5.89996 12.2391 6.83994 12.2391 8.33994Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.0002 8.33983V15.6598C22.0002 17.1598 20.3703 18.0998 19.0703 17.3498L15.9002 15.5198L12.7303 13.6898L12.2402 13.4098V10.5898L12.7303 10.3098L15.9002 8.47984L19.0703 6.64983C20.3703 5.89983 22.0002 6.83983 22.0002 8.33983Z" fill="currentColor" /><path d="M12.2394 8.33983V15.6598C12.2394 17.1598 10.6095 18.0998 9.31946 17.3498L6.13947 15.5198L2.96945 13.6898C1.67945 12.9398 1.67945 11.0598 2.96945 10.3098L6.13947 8.47984L9.31946 6.64983C10.6095 5.89983 12.2394 6.83983 12.2394 8.33983Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBackward;