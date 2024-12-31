import { FC } from 'react';
import { IconProps } from "../../types";

const IconHeartSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.10999 17.4998C3.89999 15.4298 2 12.4798 2 8.67981C2 5.58981 4.49 3.08984 7.56 3.08984C9.38 3.08984 10.99 3.96983 12 5.32983C13.01 3.96983 14.63 3.08984 16.44 3.08984C17.59 3.08984 18.66 3.4398 19.55 4.0498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.7395 7C21.9095 7.53 21.9995 8.1 21.9995 8.69C21.9995 15.69 15.5195 19.82 12.6195 20.82C12.2795 20.94 11.7195 20.94 11.3795 20.82C10.7295 20.6 9.90953 20.22 9.01953 19.69" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.6901C22 9.8801 21.81 10.9801 21.48 12.0001H2.52C2.19 10.9801 2 9.8801 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.9801 12 5.3301C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.4795 12C19.8995 17 15.0295 19.99 12.6195 20.81C12.2795 20.93 11.7195 20.93 11.3795 20.81C8.96953 19.99 4.09953 17 2.51953 12H21.4795Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHeartSlash;