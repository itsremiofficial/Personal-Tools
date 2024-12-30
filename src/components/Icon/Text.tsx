import { FC } from 'react';
import { IconProps } from "../../types";

const IconTextalignCenter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3 4.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.25977 9.5H16.7398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3 14.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.25977 19.5H16.7398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.3791 12.8401V17.7701C18.3791 19.0401 17.3891 20.4001 16.1991 20.8001L13.0091 21.8601C12.4491 22.0501 11.5391 22.0501 10.9891 21.8601L7.79914 20.8001C6.59914 20.4001 5.61914 19.0401 5.61914 17.7701L5.62914 12.8401L10.0491 15.7201C11.1291 16.4301 12.9091 16.4301 13.9891 15.7201L18.3791 12.8401Z" fill="currentColor" /><path d="M19.9795 6.46006L13.9895 2.53006C12.9095 1.82006 11.1295 1.82006 10.0495 2.53006L4.02953 6.46006C2.09953 7.71006 2.09953 10.5401 4.02953 11.8001L5.62953 12.8401L10.0495 15.7201C11.1295 16.4301 12.9095 16.4301 13.9895 15.7201L18.3795 12.8401L19.7495 11.9401V15.0001C19.7495 15.4101 20.0895 15.7501 20.4995 15.7501C20.9095 15.7501 21.2495 15.4101 21.2495 15.0001V10.0801C21.6495 8.79006 21.2395 7.29006 19.9795 6.46006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTextalignCenter;