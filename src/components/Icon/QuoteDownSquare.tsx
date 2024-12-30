import { FC } from 'react';
import { IconProps } from "../../types";

const IconQuoteUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M2 12.3501H7.79999C9.32999 12.3501 10.38 13.5101 10.38 14.9301V18.1501C10.38 19.5701 9.32999 20.7301 7.79999 20.7301H4.58002C3.16002 20.7301 2 19.5701 2 18.1501V12.3501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12.3502C2 6.30022 3.13003 5.30027 6.53003 3.28027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M13.6309 12.3501H19.4308C20.9608 12.3501 22.0109 13.5101 22.0109 14.9301V18.1501C22.0109 19.5701 20.9608 20.7301 19.4308 20.7301H16.2109C14.7909 20.7301 13.6309 19.5701 13.6309 18.1501V12.3501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.6309 12.3502C13.6309 6.30022 14.7608 5.30027 18.1608 3.28027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M8.19 16.78H9.67999C10.77 16.78 11.62 15.93 11.62 14.84V13.35C11.62 12.26 10.77 11.41 9.67999 11.41H7.77C7.85 9.59997 8.27 9.33 9.48 8.62C9.84 8.41 9.95001 7.95003 9.74001 7.59003C9.60001 7.35003 9.35 7.21997 9.09 7.21997C8.96 7.21997 8.83001 7.25001 8.71001 7.32001C6.92001 8.38001 6.25 9.07002 6.25 12.15V14.82C6.25 15.91 7.12 16.78 8.19 16.78Z" fill="currentColor" /><path d="M14.3209 16.78H15.8109C16.9009 16.78 17.7509 15.93 17.7509 14.84V13.35C17.7509 12.26 16.9009 11.41 15.8109 11.41H13.9008C13.9808 9.59997 14.4009 9.33 15.6109 8.62C15.9709 8.41 16.0808 7.95003 15.8708 7.59003C15.7308 7.35003 15.4809 7.21997 15.2209 7.21997C15.0909 7.21997 14.9609 7.25001 14.8409 7.32001C13.0509 8.38001 12.3809 9.07002 12.3809 12.15V14.82C12.3909 15.91 13.2609 16.78 14.3209 16.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconQuoteUp;