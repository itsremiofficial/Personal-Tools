import { FC } from 'react';
import { IconProps } from "../../types";

const IconCloudSunny: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.2695 18.6801C19.2795 19.5901 17.9795 20.0901 16.6295 20.0801H5.53945C0.869454 19.7401 0.859454 12.9401 5.53945 12.6001H5.58945C2.88945 5.06014 12.1195 1.34014 15.9995 6.03014V6.04014C16.6995 6.90014 17.2295 8.04014 17.4695 9.49014C18.7995 9.66014 19.8795 10.3101 20.6495 11.2301C22.3995 13.3001 22.5495 16.6801 20.2695 18.6801Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8496 9.91977C16.3696 9.65977 16.9396 9.51977 17.5196 9.50977" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5691 11.0099C19.8091 10.0999 18.8091 9.48994 17.6691 9.23994C17.4191 8.08994 16.9591 7.08994 16.3091 6.26994C16.2891 6.23994 16.2691 6.20994 16.2491 6.18994C14.0591 3.53994 10.4691 3.54994 8.04906 4.91994C5.97906 6.09994 4.21906 8.58994 5.13906 12.1599C3.01906 12.6799 2.03906 14.5299 2.03906 16.1999C2.03906 18.0699 3.25906 20.1799 5.98906 20.3699H16.2891C16.2991 20.3699 16.3191 20.3699 16.3291 20.3699C17.7491 20.3699 19.0991 19.8499 20.1391 18.8899C22.6591 16.6899 22.3291 13.0799 20.5691 11.0099Z" fill="currentColor" /><path d="M21.2698 8.76001C21.2698 9.78001 20.7998 10.7 20.0398 11.3C19.4898 11.75 18.7798 12.02 18.0098 12.02C16.2198 12.02 14.7598 10.56 14.7598 8.77001C14.7598 7.88001 15.1198 7.07001 15.7198 6.48001V6.47001C16.3098 5.88001 17.1198 5.51001 18.0098 5.51001C19.8098 5.51001 21.2698 6.97001 21.2698 8.76001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCloudSunny;