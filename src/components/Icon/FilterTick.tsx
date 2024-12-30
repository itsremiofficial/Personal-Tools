import { FC } from 'react';
import { IconProps } from "../../types";

const IconFilterTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6309 14.75C21.6309 15.64 21.3909 16.48 20.9509 17.2C20.1309 18.57 18.6209 19.5 16.8809 19.5C15.9409 19.5 15.0609 19.22 14.3209 18.73C13.7009 18.35 13.1909 17.82 12.8209 17.2C12.3809 16.48 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C17.2409 10 17.5908 10.04 17.9208 10.12C20.0508 10.59 21.6309 12.49 21.6309 14.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.0293 14.7501L16.1993 15.9201L18.7292 13.5801" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6906 4.01999V6.23999C20.6906 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2406 10 16.8806 10C14.2606 10 12.1306 12.13 12.1306 14.75C12.1306 15.64 12.3806 16.48 12.8206 17.2C13.1906 17.82 13.7006 18.35 14.3206 18.73V19.07C14.3206 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87054 21.6 8.87054 19.98V14.63C8.87054 13.92 8.46055 13.01 8.06055 12.51L4.22052 8.47C3.72052 7.96 3.31055 7.05001 3.31055 6.45001V4.12C3.31055 2.91 4.22057 2 5.33057 2H18.6705C19.7805 2 20.6906 2.90999 20.6906 4.01999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.5996 4.1001V6.3001C20.5996 7.1001 20.0996 8.1001 19.5996 8.6001L15.2996 12.4001C14.6996 12.9001 14.2996 13.9001 14.2996 14.7001V19.0001C14.2996 19.6001 13.8996 20.4001 13.3996 20.7001L11.9996 21.6001C10.6996 22.4001 8.89961 21.5001 8.89961 19.9001V14.6001C8.89961 13.9001 8.49961 13.0001 8.09961 12.5001L7.09961 11.4501L12.9196 2.1001H18.5996C19.6996 2.1001 20.5996 3.0001 20.5996 4.1001Z" fill="currentColor" /><path d="M11.3004 2.1001L6.12039 10.4101L4.30039 8.5001C3.80039 8.0001 3.40039 7.1001 3.40039 6.5001V4.2001C3.40039 3.0001 4.30039 2.1001 5.40039 2.1001H11.3004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFilterTick;