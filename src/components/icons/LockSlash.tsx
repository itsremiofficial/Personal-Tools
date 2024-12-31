import { FC } from 'react';
import { IconProps } from "../../types";

const IconLogin: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M2 12H14.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6504 8.65039L16.0004 12.0004L12.6504 15.3504" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M15.7491 10.73V10C15.7491 9.07 15.7491 6.25 11.9991 6.25C8.24915 6.25 8.24915 9.07 8.24915 10V10.73C7.02915 11 6.61914 11.79 6.61914 13.5V14.5C6.61914 16.7 7.29915 17.38 9.49915 17.38H14.4991C16.6991 17.38 17.3792 16.7 17.3792 14.5V13.5C17.3792 11.79 16.9691 11 15.7491 10.73ZM11.9991 15.1C11.3891 15.1 10.8992 14.61 10.8992 14C10.8992 13.39 11.3891 12.9 11.9991 12.9C12.6091 12.9 13.0991 13.39 13.0991 14C13.0991 14.61 12.6091 15.1 11.9991 15.1ZM14.2491 10.62H9.74915V10C9.74915 8.54 10.1091 7.75 11.9991 7.75C13.8891 7.75 14.2491 8.54 14.2491 10V10.62Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLogin;