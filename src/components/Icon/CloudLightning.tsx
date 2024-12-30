import { FC } from 'react';
import { IconProps } from "../../types";

const IconCloudLightning: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6097 19.9999C17.9497 20.0099 19.2397 19.5099 20.2297 18.6099C23.4997 15.7499 21.7497 10.0099 17.4397 9.46995C15.8997 0.129949 2.42973 3.66995 5.61973 12.5599" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.27938 12.9698C6.74938 12.6998 6.15938 12.5598 5.56938 12.5698C0.909376 12.8998 0.919376 19.6798 5.56938 20.0098" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8203 9.88998C16.3403 9.62998 16.9003 9.48998 17.4803 9.47998" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.2291 19.1598H10.2291V21.4898C10.2291 21.8298 10.6591 21.9998 10.8791 21.7398L13.3291 18.9498C13.6291 18.6098 13.4991 18.3298 13.0491 18.3298H12.0491V15.9998C12.0491 15.6598 11.6191 15.4898 11.3991 15.7498L8.9491 18.5398C8.6491 18.8798 8.7791 19.1598 9.2291 19.1598Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2007 14.7799C18.3407 15.5699 17.2007 16.0099 16.0307 15.9999H6.3707C2.3007 15.7099 2.2907 9.79993 6.3707 9.50993H6.41071C3.62071 1.74993 15.4107 -1.34009 16.7607 6.79991C20.5307 7.27991 22.0607 12.2899 19.2007 14.7799Z" fill="currentColor" /><path d="M18.75 21C18.75 21.41 18.41 21.75 18 21.75H14C13.95 21.75 13.91 21.75 13.86 21.73C13.57 22.47 12.84 23 12 23C11.16 23 10.43 22.47 10.14 21.73C10.09 21.75 10.05 21.75 10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.05 20.25 10.09 20.25 10.14 20.27C10.34 19.75 10.75 19.34 11.27 19.14C11.25 19.09 11.25 19.05 11.25 19V16H12.75V19C12.75 19.05 12.75 19.09 12.73 19.14C13.25 19.34 13.66 19.75 13.86 20.27C13.91 20.25 13.95 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCloudLightning;