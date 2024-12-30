import { FC } from 'react';
import { IconProps } from "../../types";

const IconStar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3909 5.21L16.8009 8.02999C16.9909 8.41999 17.5009 8.78999 17.9309 8.86999L20.4809 9.28999C22.1109 9.55999 22.4909 10.74 21.3209 11.92L19.3309 13.91C19.0009 14.24 18.8109 14.89 18.9209 15.36L19.4909 17.82C19.9409 19.76 18.9009 20.52 17.1909 19.5L14.8009 18.08C14.3709 17.82 13.6509 17.82 13.2209 18.08L10.8309 19.5C9.12091 20.51 8.08093 19.76 8.53093 17.82L9.10093 15.36C9.21093 14.9 9.02093 14.25 8.69093 13.91L6.70094 11.92C5.53094 10.75 5.91094 9.56999 7.54094 9.28999L10.0909 8.86999C10.5209 8.79999 11.0309 8.41999 11.2209 8.02999L12.6309 5.21C13.3809 3.68 14.6209 3.68 15.3909 5.21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 19H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.0992 20.2999C18.8992 20.2999 18.6992 20.2 18.5992 20.1C18.2992 19.8 18.2992 19.2999 18.5992 19C20.2992 17.3 21.1992 15 21.1992 12.5C21.1992 7.39995 17.0992 3.29995 11.9992 3.29995C6.89922 3.29995 2.79922 7.39995 2.79922 12.5C2.79922 14.9 3.69922 17.2 5.39922 19C5.69922 19.2999 5.69922 19.8 5.39922 20.1C5.09922 20.4 4.59922 20.4 4.29922 20.1C2.29922 18.1 1.19922 15.4 1.19922 12.6C1.19922 6.59995 6.09922 1.69995 11.9992 1.69995C17.8992 1.69995 22.7992 6.49995 22.7992 12.5C22.7992 15.3 21.6992 18 19.6992 20C19.4992 20.2 19.2992 20.2999 19.0992 20.2999Z" fill="currentColor" /><path d="M11.9996 22C14.1535 22 15.8996 20.2539 15.8996 18.1C15.8996 15.946 14.1535 14.2 11.9996 14.2C9.8457 14.2 8.09961 15.946 8.09961 18.1C8.09961 20.2539 9.8457 22 11.9996 22Z" fill="currentColor" /><path d="M16 8.5C14.9 8.5 14 9.4 14 10.5V11.3C14 12 14.6 12.5 15.2 12.5H16C17.1 12.5 18 11.6 18 10.5C18 9.4 17.1 8.5 16 8.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStar;