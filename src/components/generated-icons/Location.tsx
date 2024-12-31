import { FC } from 'react';
import { IconProps } from "@/types";

const IconLocation: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z" stroke="currentColor" strokeWidth="1.5" /><path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="currentColor" strokeWidth="1.5" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.6191 8.45C19.5691 3.83 15.5391 1.75 11.9991 1.75C11.9991 1.75 11.9991 1.75 11.9891 1.75C8.45912 1.75 4.41912 3.82 3.36912 8.44C2.19912 13.6 5.35912 17.97 8.21912 20.72C9.27912 21.74 10.6391 22.25 11.9991 22.25C13.3591 22.25 14.7191 21.74 15.7691 20.72C18.6291 17.97 21.7891 13.61 20.6191 8.45Z" fill="currentColor" /><path d="M11.9996 13.4602C13.7393 13.4602 15.1496 12.0499 15.1496 10.3102C15.1496 8.57046 13.7393 7.16016 11.9996 7.16016C10.2599 7.16016 8.84961 8.57046 8.84961 10.3102C8.84961 12.0499 10.2599 13.4602 11.9996 13.4602Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLocation;