import { FC } from 'react';
import { IconProps } from "../../types";

const IconQuoteUpCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.9989 11.8398H14.3189C13.6089 11.8398 13.1289 11.2998 13.1289 10.6498V9.15973C13.1289 8.50973 13.6089 7.96973 14.3189 7.96973H15.8089C16.4589 7.96973 16.9989 8.50973 16.9989 9.15973V11.8398Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.0002 11.8398C17.0002 14.6298 16.4802 15.0998 14.9102 16.0298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8602 11.8398H8.18022C7.47022 11.8398 6.99023 11.2998 6.99023 10.6498V9.15973C6.99023 8.50973 7.47022 7.96973 8.18022 7.96973H9.67023C10.3202 7.96973 10.8602 8.50973 10.8602 9.15973V11.8398Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8595 11.8398C10.8595 14.6298 10.3395 15.0998 8.76953 16.0298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M8.19 16.78H9.68C10.77 16.78 11.62 15.93 11.62 14.84V13.35C11.62 12.26 10.77 11.41 9.68 11.41H7.77C7.85 9.59997 8.27 9.33 9.48 8.62C9.84 8.41 9.95 7.95003 9.74 7.59003C9.6 7.35003 9.35 7.21997 9.09 7.21997C8.96 7.21997 8.83 7.25001 8.71 7.32001C6.92 8.38001 6.25 9.07002 6.25 12.15V14.82C6.25 15.91 7.12 16.78 8.19 16.78Z" fill="currentColor" /><path d="M14.3209 16.78H15.8109C16.9009 16.78 17.7509 15.93 17.7509 14.84V13.35C17.7509 12.26 16.9009 11.41 15.8109 11.41H13.9009C13.9809 9.59997 14.4009 9.33 15.6109 8.62C15.9709 8.41 16.0809 7.95003 15.8709 7.59003C15.7309 7.35003 15.4809 7.21997 15.2209 7.21997C15.0909 7.21997 14.9609 7.25001 14.8409 7.32001C13.0509 8.38001 12.3809 9.07002 12.3809 12.15V14.82C12.3909 15.91 13.2609 16.78 14.3209 16.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconQuoteUpCircle;