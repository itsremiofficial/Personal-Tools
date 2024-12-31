import { FC } from 'react';
import { IconProps } from "@/types";

const IconFlashCircle1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M8.68055 12.7201H10.4205V16.7701C10.4205 17.3701 11.1605 17.6501 11.5605 17.2001L15.8205 12.3601C16.1905 11.9401 15.8905 11.2801 15.3305 11.2801H13.5905V7.23008C13.5905 6.63008 12.8505 6.35008 12.4505 6.80008L8.19055 11.6401C7.82055 12.0601 8.12055 12.7201 8.68055 12.7201Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M8.67938 11.9098L10.3294 12.3198L9.37939 16.1598C9.15939 17.0598 9.59937 17.3599 10.3594 16.8299L15.5394 13.2398C16.1694 12.7998 16.0794 12.2898 15.3294 12.0998L13.6794 11.6898L14.6294 7.84981C14.8494 6.94981 14.4094 6.64983 13.6494 7.17983L8.46939 10.7699C7.83939 11.2099 7.92938 11.7198 8.67938 11.9098Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlashCircle1;