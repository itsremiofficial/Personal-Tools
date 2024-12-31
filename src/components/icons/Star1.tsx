import { FC } from 'react';
import { IconProps } from "../../types";

const IconStarSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.28089 18.6501L5.85089 16.1801C5.98089 15.6001 5.75089 14.7901 5.33089 14.3701L2.85089 11.8901C1.39089 10.4301 1.86089 8.95014 3.90089 8.61014L7.09089 8.08014C7.62089 7.99014 8.26089 7.52014 8.50089 7.03014L10.2609 3.51014C11.2109 1.60014 12.7709 1.60014 13.7309 3.51014L15.4909 7.03014C15.6009 7.26014 15.8109 7.48014 16.0409 7.67014" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.0995 8.60986C22.1395 8.94986 22.6195 10.4299 21.1495 11.8899L18.6695 14.3699C18.2495 14.7899 18.0195 15.5999 18.1495 16.1799L18.8595 19.2499C19.4195 21.6799 18.1295 22.6199 15.9795 21.3499L12.9895 19.5799C12.4495 19.2599 11.5595 19.2599 11.0095 19.5799L8.01953 21.3499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.3909 5.21L16.8009 8.03C16.9909 8.42 17.5009 8.79 17.9309 8.87L20.4809 9.29C22.1109 9.56 22.4909 10.74 21.3209 11.92L19.3309 13.91C19.0009 14.24 18.8109 14.89 18.9209 15.36L19.4909 17.82C19.9409 19.76 18.9009 20.52 17.1909 19.5L14.8009 18.08C14.3709 17.82 13.6509 17.82 13.2209 18.08L10.8309 19.5C9.12091 20.51 8.08093 19.76 8.53093 17.82L9.10093 15.36C9.21093 14.9 9.02093 14.25 8.69093 13.91L6.70094 11.92C5.53094 10.75 5.91094 9.57 7.54094 9.29L10.0909 8.87C10.5209 8.8 11.0309 8.42 11.2209 8.03L12.6309 5.21C13.3809 3.68 14.6209 3.68 15.3909 5.21Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStarSlash;