import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconFlame: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3588 21.7513C17.3819 21.1218 20 19.2548 20 15.0004C20 10.3785 14.9439 5.41424 11.5727 2.84618C11.0161 2.42214 10.2157 2.72748 9.95605 3.37727C8.31029 7.49518 4 11.8539 4 15.0004C4 18.1072 6.24558 20.3092 8.08142 21.3719" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15.3588 21.7513C14.9274 21.8856 14.6438 21.3826 14.9019 21.0118C15.7823 19.7466 16.8001 17.8167 16.8001 16.0008C16.8001 14.0502 15.156 11.7473 13.8722 10.3269C13.5787 10.0022 13.0667 10.217 13.0507 10.6545C12.9977 12.1037 12.769 14.0426 11.7829 15.5621C11.6242 15.8067 11.2872 15.827 11.1064 15.5983C10.7983 15.2086 10.4901 14.7273 10.182 14.347C10.0161 14.1422 9.71611 14.1393 9.52467 14.3206C8.77832 15.0273 7.7334 16.1294 7.7334 17.5008C7.7334 18.49 8.20479 19.7209 8.69077 20.6744C8.91147 21.1074 8.50204 21.6154 8.08142 21.3719" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 15.0006C20 19.2551 17.3819 21.122 15.3588 21.7516C15.2746 21.7778 15.196 21.7797 15.126 21.7631C14.8373 21.6945 14.6942 21.3105 14.9019 21.012C15.7823 19.7468 16.8 17.8164 16.8 16.0006C16.8 14.05 15.1559 11.7471 13.8721 10.3267C13.5786 10.0019 13.0667 10.2168 13.0507 10.6542C12.9976 12.1034 12.7689 14.0423 11.7828 15.5619C11.6241 15.8065 11.2872 15.8268 11.1063 15.5981C10.7982 15.2084 10.4901 14.727 10.182 14.3468C10.016 14.1419 9.71604 14.1391 9.52461 14.3204C8.77825 15.0271 7.73333 16.1291 7.73333 17.5006C7.73333 18.4304 8.0936 19.4053 8.50007 20.1897C8.70225 20.5799 8.39657 21.0418 8.01803 20.9599C7.97791 20.9512 7.93697 20.9364 7.89573 20.9148C6.11307 19.9792 4 18.0842 4 15.0006C4 11.8541 8.31029 7.49539 9.95605 3.37748C10.2157 2.72769 11.0161 2.42236 11.5727 2.8464C14.9439 5.41446 20 10.3787 20 15.0006Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M7.7334 17.5008C7.7334 18.4307 8.09366 19.4055 8.50013 20.1899C8.70231 20.5801 8.39664 21.0421 8.0181 20.9601C8.5 21.5004 11.6763 21.9179 15.1261 21.7633C14.8374 21.6948 14.6943 21.3107 14.902 21.0122C15.7824 19.747 16.8001 17.8167 16.8001 16.0008C16.8001 14.0502 15.156 11.7473 13.8722 10.3269C13.5787 10.0022 13.0667 10.217 13.0507 10.6545C12.9977 12.1037 12.769 14.0426 11.7829 15.5621C11.6242 15.8067 11.2872 15.827 11.1064 15.5983C10.7983 15.2086 10.4901 14.7273 10.182 14.347C10.0161 14.1422 9.71611 14.1393 9.52467 14.3206C8.77832 15.0273 7.7334 16.1294 7.7334 17.5008Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 15.0006C20 19.2551 17.3819 21.122 15.3588 21.7516C14.9274 21.8858 14.6438 21.3829 14.9019 21.012C15.7823 19.7468 16.8 17.8164 16.8 16.0006C16.8 14.05 15.1559 11.7471 13.8721 10.3267C13.5786 10.0019 13.0667 10.2168 13.0507 10.6542C12.9976 12.1034 12.7689 14.0423 11.7828 15.5619C11.6241 15.8065 11.2872 15.8268 11.1063 15.5981C10.7982 15.2084 10.4901 14.727 10.182 14.3468C10.016 14.1419 9.71604 14.1391 9.52461 14.3204C8.77825 15.0271 7.73333 16.1291 7.73333 17.5006C7.73333 18.4304 8.0936 19.4053 8.50007 20.1897C8.72368 20.6212 8.32607 21.1406 7.89573 20.9148C6.11307 19.9792 4 18.0842 4 15.0006C4 11.8541 8.31029 7.49539 9.95605 3.37748C10.2157 2.72769 11.0161 2.42236 11.5727 2.8464C14.9439 5.41446 20 10.3787 20 15.0006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlame;