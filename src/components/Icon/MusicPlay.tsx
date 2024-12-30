import { FC } from 'react';
import { IconProps } from "../../types";

const IconMusicPlaylist: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 22H7C4 22 2 20.5 2 17V12C2 8.5 4 7 7 7H17C20 7 22 8.5 22 12V17C22 20.5 20 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 4.5H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.88953 19.1101C9.64616 19.1101 10.2595 18.4967 10.2595 17.7401C10.2595 16.9835 9.64616 16.3701 8.88953 16.3701C8.1329 16.3701 7.51953 16.9835 7.51953 17.7401C7.51953 18.4967 8.1329 19.1101 8.88953 19.1101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.2798 16.83V11.4799C15.2798 10.3399 14.5698 10.18 13.8398 10.38L11.0997 11.13C10.5997 11.27 10.2598 11.6599 10.2598 12.2299V13.18V13.82V17.74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.9091 18.2C14.6657 18.2 15.2791 17.5866 15.2791 16.83C15.2791 16.0733 14.6657 15.46 13.9091 15.46C13.1524 15.46 12.5391 16.0733 12.5391 16.83C12.5391 17.5866 13.1524 18.2 13.9091 18.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.2598 13.83L15.2798 12.46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2605 2.8702L14.8405 1.4002C13.9205 1.0902 12.9905 1.2002 12.3105 1.7002C11.6205 2.2002 11.2305 3.0402 11.2305 4.0102V7.7802L18.1105 10.0702C18.4505 10.1902 18.8005 10.2402 19.1305 10.2402C19.6905 10.2402 20.2105 10.0802 20.6405 9.7702C21.3305 9.2702 21.7205 8.4302 21.7205 7.4602V6.2802C21.7205 4.8502 20.6205 3.3202 19.2605 2.8702Z" fill="currentColor" /><path d="M12.7207 8.27002V18C12.7207 20.62 10.5907 22.75 7.9707 22.75C5.3507 22.75 3.2207 20.62 3.2207 18C3.2207 15.38 5.3507 13.25 7.9707 13.25C9.2307 13.25 10.3707 13.75 11.2207 14.55V7.77002L12.7207 8.27002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMusicPlaylist;