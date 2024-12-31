import { FC } from 'react';
import { IconProps } from "../../types";

const IconFolderConnection: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 16V19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 21H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10 21H6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 8.30005V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.30997 11.23 2.83997L12.28 4.23999C12.55 4.58999 12.7 4.80005 13.4 4.80005H15.5C18.3 4.80005 19 5.50005 19 8.30005Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M8.67938 11.9098L10.3294 12.3198L9.37939 16.1598C9.15939 17.0598 9.59937 17.3599 10.3594 16.8299L15.5394 13.2398C16.1694 12.7998 16.0794 12.2898 15.3294 12.0998L13.6794 11.6898L14.6294 7.84981C14.8494 6.94981 14.4094 6.64983 13.6494 7.17983L8.46939 10.7699C7.83939 11.2099 7.92938 11.7198 8.67938 11.9098Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolderConnection;