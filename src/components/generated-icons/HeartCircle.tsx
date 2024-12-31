import { FC } from 'react';
import { IconProps } from "@/types";

const IconHeartCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.3296 17.4501C12.1496 17.5101 11.8396 17.5101 11.6596 17.4501C10.0996 16.9201 6.59961 14.6901 6.59961 10.9101C6.59961 9.24013 7.93961 7.89014 9.59961 7.89014C10.5796 7.89014 11.4496 8.36013 11.9996 9.10013C12.5396 8.37013 13.4196 7.89014 14.3996 7.89014C16.0596 7.89014 17.3996 9.24013 17.3996 10.9101C17.3996 14.6901 13.8996 16.9201 12.3296 17.4501Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M12.3296 16.9999C12.1496 17.0599 11.8396 17.0599 11.6596 16.9999C10.0996 16.4699 6.59961 14.2399 6.59961 10.4599C6.59961 8.78993 7.93961 7.43994 9.59961 7.43994C10.5796 7.43994 11.4496 7.90993 11.9996 8.64993C12.5396 7.91993 13.4196 7.43994 14.3996 7.43994C16.0596 7.43994 17.3996 8.78993 17.3996 10.4599C17.3996 14.2399 13.8996 16.4699 12.3296 16.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHeartCircle;