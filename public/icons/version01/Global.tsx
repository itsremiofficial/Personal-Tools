import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconGlobal: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12.0002H22M16 12.0002C16 13.3135 15.8965 14.6138 15.6955 15.8271C15.4945 17.0403 15.1999 18.1427 14.8284 19.0713C14.457 19.9999 14.016 20.7365 13.5307 21.239C13.0454 21.7416 12.5253 22.0002 12 22.0002C11.4747 22.0002 10.9546 21.7416 10.4693 21.239C9.98396 20.7365 9.54301 19.9999 9.17157 19.0713C8.80014 18.1427 8.5055 17.0403 8.30448 15.8271C8.10346 14.6138 8 13.3135 8 12.0002C8 10.687 8.10346 9.38666 8.30448 8.17341C8.5055 6.96015 8.80014 5.85776 9.17157 4.92918C9.54301 4.00059 9.98396 3.264 10.4693 2.76145C10.9546 2.2589 11.4747 2.00024 12 2.00024C12.5253 2.00024 13.0454 2.2589 13.5307 2.76145C14.016 3.264 14.457 4.00059 14.8284 4.92918C15.1999 5.85776 15.4945 6.96016 15.6955 8.17341C15.8965 9.38667 16 10.687 16 12.0002Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M22 12.0002C22 13.3135 21.7413 14.6138 21.2388 15.8271C20.7362 17.0403 19.9997 18.1427 19.0711 19.0713C18.1425 19.9999 17.0401 20.7365 15.8268 21.239C14.6136 21.7416 13.3132 22.0002 12 22.0002C10.6868 22.0002 9.38642 21.7416 8.17317 21.239C6.95991 20.7365 5.85752 19.9999 4.92893 19.0713C4.00035 18.1427 3.26375 17.0403 2.7612 15.8271C2.25866 14.6138 2 13.3135 2 12.0002C2 10.687 2.25866 9.38666 2.76121 8.17341C3.26375 6.96015 4.00035 5.85776 4.92893 4.92918C5.85752 4.00059 6.95991 3.264 8.17317 2.76145C9.38642 2.2589 10.6868 2.00024 12 2.00024C13.3132 2.00024 14.6136 2.2589 15.8268 2.76145C17.0401 3.264 18.1425 4.00059 19.0711 4.92918C19.9997 5.85776 20.7362 6.96016 21.2388 8.17341C21.7413 9.38667 22 10.687 22 12.0002L22 12.0002Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.02783 11.2502C2.41136 6.07769 6.72957 2.00024 12.0001 2.00024C11.1693 2.00024 10.4295 2.36445 9.82093 2.92137C9.21541 3.4755 8.70371 4.24902 8.28983 5.1634C7.87352 6.08317 7.55013 7.15893 7.33126 8.32636C7.1558 9.26219 7.04903 10.2488 7.01344 11.2502H2.02783ZM2.02783 12.7502H7.01344C7.04903 13.7517 7.1558 14.7383 7.33126 15.6741C7.55013 16.8416 7.87351 17.9173 8.28983 18.8371C8.70371 19.7515 9.21541 20.525 9.82093 21.0791C10.4295 21.636 11.1693 22.0002 12.0001 22.0002C6.72957 22.0002 2.41136 17.9228 2.02783 12.7502Z" fill="currentColor" /><path d="M12.0001 2.00024C12.831 2.00024 13.5708 2.36445 14.1793 2.92137C14.7849 3.4755 15.2966 4.24902 15.7104 5.1634C16.1267 6.08317 16.4501 7.15893 16.669 8.32636C16.8445 9.26219 16.9512 10.2488 16.9868 11.2502H21.9724C21.5889 6.07769 17.2707 2.00024 12.0001 2.00024Z" fill="currentColor" /><path d="M16.669 15.6741C16.4501 16.8416 16.1267 17.9173 15.7104 18.8371C15.2966 19.7515 14.7849 20.525 14.1793 21.0791C13.5708 21.636 12.831 22.0002 12.0001 22.0002C17.2707 22.0002 21.5889 17.9228 21.9724 12.7502H16.9868C16.9512 13.7517 16.8445 14.7383 16.669 15.6741Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M12.0002 3.39575C11.7252 3.39575 11.3699 3.51277 10.9568 3.89082C10.5406 4.27166 10.124 4.86855 9.7559 5.68177C9.39025 6.48961 9.09334 7.46481 8.88902 8.5546C8.72811 9.41282 8.62829 10.3226 8.59326 11.2504H15.4071C15.3721 10.3226 15.2723 9.41282 15.1113 8.5546C14.907 7.46481 14.6101 6.48961 14.2445 5.68178C13.8764 4.86855 13.4597 4.27166 13.0436 3.89082C12.6305 3.51277 12.2752 3.39575 12.0002 3.39575Z" fill="currentColor" /><path d="M8.88902 15.4462C9.09334 16.536 9.39025 17.5112 9.7559 18.319C10.124 19.1323 10.5406 19.7291 10.9568 20.11C11.3699 20.488 11.7252 20.6051 12.0002 20.6051C12.2752 20.6051 12.6305 20.488 13.0436 20.11C13.4597 19.7291 13.8764 19.1323 14.2445 18.319C14.6101 17.5112 14.907 16.536 15.1113 15.4462C15.2723 14.588 15.3721 13.6782 15.4071 12.7504H8.59326C8.62829 13.6782 8.72811 14.588 8.88902 15.4462Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.02783 11.2502C2.41136 6.07769 6.72957 2.00024 12.0001 2.00024C11.1693 2.00024 10.4295 2.36445 9.82093 2.92137C9.21541 3.4755 8.70371 4.24902 8.28983 5.1634C7.87352 6.08317 7.55013 7.15893 7.33126 8.32636C7.1558 9.26219 7.04903 10.2488 7.01344 11.2502H2.02783ZM2.02783 12.7502H7.01344C7.04903 13.7517 7.1558 14.7383 7.33126 15.6741C7.55013 16.8416 7.87351 17.9173 8.28983 18.8371C8.70371 19.7515 9.21541 20.525 9.82093 21.0791C10.4295 21.636 11.1693 22.0002 12.0001 22.0002C6.72957 22.0002 2.41136 17.9228 2.02783 12.7502Z" fill="currentColor" /><path d="M12.0001 3.39559C11.7251 3.39559 11.3699 3.51261 10.9567 3.89066C10.5406 4.27151 10.1239 4.86839 9.75585 5.68162C9.3902 6.48945 9.09329 7.46465 8.88897 8.55444C8.72806 9.41266 8.62824 10.3224 8.59321 11.2502H15.4071C15.372 10.3224 15.2722 9.41266 15.1113 8.55444C14.907 7.46465 14.6101 6.48945 14.2444 5.68162C13.8763 4.86839 13.4597 4.27151 13.0435 3.89066C12.6304 3.51261 12.2751 3.39559 12.0001 3.39559Z" fill="currentColor" /><path d="M8.88897 15.446C9.09329 16.5358 9.3902 17.511 9.75585 18.3189C10.1239 19.1321 10.5406 19.729 10.9567 20.1098C11.3698 20.4879 11.7251 20.6049 12.0001 20.6049C12.2751 20.6049 12.6304 20.4879 13.0435 20.1098C13.4597 19.729 13.8763 19.1321 14.2444 18.3189C14.6101 17.511 14.907 16.5358 15.1113 15.4461C15.2722 14.5878 15.372 13.6781 15.4071 12.7502H8.59321C8.62824 13.6781 8.72806 14.5878 8.88897 15.446Z" fill="currentColor" /><path d="M12.0001 2.00024C12.831 2.00024 13.5708 2.36445 14.1793 2.92137C14.7849 3.4755 15.2966 4.24902 15.7104 5.1634C16.1267 6.08317 16.4501 7.15893 16.669 8.32636C16.8445 9.26219 16.9512 10.2488 16.9868 11.2502H21.9724C21.5889 6.07769 17.2707 2.00024 12.0001 2.00024Z" fill="currentColor" /><path d="M16.669 15.6741C16.4501 16.8416 16.1267 17.9173 15.7104 18.8371C15.2966 19.7515 14.7849 20.525 14.1793 21.0791C13.5708 21.636 12.831 22.0002 12.0001 22.0002C17.2707 22.0002 21.5889 17.9228 21.9724 12.7502H16.9868C16.9512 13.7517 16.8445 14.7383 16.669 15.6741Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGlobal;