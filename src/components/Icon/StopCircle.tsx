import { FC } from 'react';
import { IconProps } from "../../types";

const IconStory: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.42 7.95012C18.86 10.3901 18.86 14.3501 16.42 16.7901C13.98 19.2301 10.02 19.2301 7.58 16.7901C5.14 14.3501 5.14 10.3901 7.58 7.95012C10.02 5.51012 13.98 5.51012 16.42 7.95012Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.25097 21.6399C6.25097 20.8399 4.50097 19.3899 3.34097 17.3799C2.20097 15.4099 1.82097 13.2199 2.09097 11.1299" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.84961 4.47986C7.54961 3.14986 9.6796 2.35986 11.9996 2.35986C14.2696 2.35986 16.3596 3.12985 18.0396 4.40985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.75 21.6399C17.75 20.8399 19.5 19.3899 20.66 17.3799C21.8 15.4099 22.18 13.2199 21.91 11.1299" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.9 7.66L20.12 8.13L19.63 8.43L18.7 8.98L4.76 17.34L4.67 17.39L4.14 17.71L3.53 18.08C3.17 17.19 3 16.07 3 14.7V9.3C3 4.8 4.8 3 9.3 3H14.7C18.61 3 20.48 4.36 20.9 7.66Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.0005 9.2002V14.7002C21.0005 19.2002 19.2005 21.0002 14.7005 21.0002H9.30047C6.86047 21.0002 5.21047 20.4702 4.23047 19.2602L4.53047 19.0802L5.14047 18.7102L5.67047 18.3902L5.76047 18.3402L19.7005 9.9802L20.6305 9.4302L21.0005 9.2002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStory;