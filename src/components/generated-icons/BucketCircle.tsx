import { FC } from 'react';
import { IconProps } from "@/types";

const IconBucketCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.40994 15.9496L7.01992 13.5598C6.21992 12.7598 6.21992 11.9597 7.01992 11.1697L11.0099 7.17969L15.3999 11.5697C15.6199 11.7897 15.6199 12.1497 15.3999 12.3697L11.8099 15.9597C11.0099 16.7497 10.2099 16.7496 9.40994 15.9496Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.2109 6.37988L11.011 7.17987" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.46094 12.3299L15.4909 11.9399" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4711 14.1699C16.4711 14.1699 15.3711 15.3699 15.3711 16.0999C15.3711 16.7099 15.8711 17.1998 16.4711 17.1998C17.0811 17.1998 17.5711 16.6999 17.5711 16.0999C17.5811 15.3599 16.4711 14.1699 16.4711 14.1699Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M15.6595 11.93C15.6495 11.79 15.5895 11.64 15.4895 11.54L10.7895 6.84001L10.2395 6.28996C10.0495 6.09996 9.74948 6.09996 9.55948 6.28996C9.36948 6.47996 9.36948 6.77995 9.55948 6.96995L10.1095 7.52L6.5095 11.12C6.0995 11.53 5.87948 11.95 5.86948 12.36C5.85948 12.8 6.0695 13.24 6.5095 13.68L9.07947 16.25C9.93947 17.1 10.7995 17.1 11.6495 16.25L15.4995 12.4C15.6095 12.27 15.6695 12.09 15.6595 11.93Z" fill="currentColor" /><path d="M16.9589 14.1902C16.7989 14.0102 16.4889 14.0102 16.3189 14.1902C16.1189 14.4002 15.1289 15.5202 15.1289 16.3602C15.1289 17.1902 15.7989 17.8602 16.6289 17.8602C17.4589 17.8602 18.1289 17.1902 18.1289 16.3602C18.1389 15.5202 17.1589 14.4102 16.9589 14.1902Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBucketCircle;