import { FC } from 'react';
import { IconProps } from "../../types";

const IconLock: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.9965 16H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.99451 16H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.8906 5.11L5.7906 18.21C3.9006 15.64 2.5406 12.36 3.3806 8.69C3.9006 6.38 5.1806 4.71 6.7606 3.61C8.3406 2.52 10.2306 2 12.0006 2C14.4406 2 17.1206 2.98 18.8906 5.11Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.7806 20.98C14.7206 22 13.3606 22.51 12.0006 22.51C10.6406 22.51 9.28063 21.99 8.22063 20.97C7.86063 20.63 7.50063 20.25 7.14062 19.86L20.0406 6.95996C20.2906 7.49996 20.4806 8.06996 20.6206 8.69996C21.7906 13.86 18.6306 18.22 15.7806 20.98Z" fill="currentColor" /><path d="M21.7705 2.23006C21.4705 1.92006 20.9905 1.92006 20.6905 2.23006L15.0205 7.90006L14.3005 8.62006C13.7605 7.88006 12.9105 7.44006 12.0005 7.44006C10.4205 7.44006 9.13055 8.73006 9.13055 10.3101C9.13055 11.2101 9.57055 12.0601 10.3105 12.6101L2.23055 20.6901C1.92055 20.9901 1.92055 21.4701 2.23055 21.7701C2.38055 21.9201 2.57055 22.0001 2.77055 22.0001C2.97055 22.0001 3.16055 21.9201 3.31055 21.7701L21.7705 3.31006C22.0805 3.01006 22.0805 2.53006 21.7705 2.23006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLock;