import { FC } from 'react';
import { IconProps } from "../../types";

const IconFrame: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.4707 13.2602L12.0007 9.74023L15.5307 13.2602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 8.33983V15.6598C2 17.1598 3.62999 18.0998 4.92999 17.3498L8.10001 15.5198L11.27 13.6898L11.76 13.4098V10.5898L11.27 10.3098L8.10001 8.47984L4.92999 6.64983C3.62999 5.89983 2 6.83983 2 8.33983Z" fill="currentColor" /><path d="M11.7598 8.33983V15.6598C11.7598 17.1598 13.3897 18.0998 14.6797 17.3498L17.8597 15.5198L21.0298 13.6898C22.3198 12.9398 22.3198 11.0598 21.0298 10.3098L17.8597 8.47984L14.6797 6.64983C13.3897 5.89983 11.7598 6.83983 11.7598 8.33983Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFrame;