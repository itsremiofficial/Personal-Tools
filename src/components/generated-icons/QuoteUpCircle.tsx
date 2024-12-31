import { FC } from 'react';
import { IconProps } from "@/types";

const IconQuoteUpCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9989 11.8398H14.3189C13.6089 11.8398 13.1289 11.2998 13.1289 10.6498V9.15973C13.1289 8.50973 13.6089 7.96973 14.3189 7.96973H15.8089C16.4589 7.96973 16.9989 8.50973 16.9989 9.15973V11.8398Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.0002 11.8398C17.0002 14.6298 16.4802 15.0998 14.9102 16.0298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8602 11.8398H8.18022C7.47022 11.8398 6.99023 11.2998 6.99023 10.6498V9.15973C6.99023 8.50973 7.47022 7.96973 8.18022 7.96973H9.67023C10.3202 7.96973 10.8602 8.50973 10.8602 9.15973V11.8398Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8595 11.8398C10.8595 14.6298 10.3395 15.0998 8.76953 16.0298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M15.8109 7.21997H14.3209C13.2309 7.21997 12.3809 8.06997 12.3809 9.15997V10.65C12.3809 11.74 13.2309 12.59 14.3209 12.59H16.2309C16.1509 14.4 15.7309 14.67 14.5209 15.38C14.1609 15.59 14.0508 16.05 14.2608 16.41C14.4008 16.65 14.6509 16.78 14.9109 16.78C15.0409 16.78 15.1708 16.75 15.2908 16.68C17.0808 15.62 17.7509 14.93 17.7509 11.85V9.17999C17.7509 8.08999 16.8809 7.21997 15.8109 7.21997Z" fill="currentColor" /><path d="M9.67999 7.21997H8.19C7.1 7.21997 6.25 8.06997 6.25 9.15997V10.65C6.25 11.74 7.1 12.59 8.19 12.59H10.1C10.02 14.4 9.6 14.67 8.39 15.38C8.03 15.59 7.92 16.05 8.13 16.41C8.27 16.65 8.52 16.78 8.78 16.78C8.91 16.78 9.04 16.75 9.16 16.68C10.95 15.62 11.62 14.93 11.62 11.85V9.17999C11.61 8.08999 10.74 7.21997 9.67999 7.21997Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconQuoteUpCircle;