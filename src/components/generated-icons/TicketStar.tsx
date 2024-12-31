import { FC } from 'react';
import { IconProps } from "@/types";

const IconTicketStar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9959 4H6.99586C3.16586 4 2.09586 4.92 2.00586 8.5C3.93586 8.5 5.49586 10.07 5.49586 12C5.49586 13.93 3.93586 15.49 2.00586 15.5C2.09586 19.08 3.16586 20 6.99586 20H16.9959C20.9959 20 21.9959 19 21.9959 15V9C21.9959 5 20.9959 4 16.9959 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.99414 4V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.99414 16.5V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.024 9.33016L15.644 10.5802C15.704 10.7002 15.824 10.7902 15.954 10.8102L17.334 11.0102C17.674 11.0602 17.814 11.4802 17.564 11.7202L16.564 12.6902C16.464 12.7802 16.424 12.9202 16.444 13.0602L16.684 14.4302C16.744 14.7702 16.384 15.0302 16.084 14.8702L14.854 14.2202C14.734 14.1602 14.584 14.1602 14.464 14.2202L13.234 14.8702C12.924 15.0302 12.574 14.7702 12.634 14.4302L12.874 13.0602C12.894 12.9202 12.854 12.7902 12.754 12.6902L11.764 11.7202C11.514 11.4802 11.654 11.0602 11.994 11.0102L13.374 10.8102C13.514 10.7902 13.624 10.7102 13.684 10.5802L14.294 9.33016C14.434 9.02016 14.874 9.02016 15.024 9.33016Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.0009 9.20986V14.7899C22.0009 18.8899 20.7509 20.1399 16.6509 20.1399H9.91094V17.1199C9.91094 16.7399 9.59094 16.4199 9.21094 16.4199V7.57986C9.59094 7.57986 9.91094 7.25986 9.91094 6.87986V3.85986H16.6509C20.7509 3.85986 22.0009 5.10986 22.0009 9.20986Z" fill="currentColor" /><path d="M18.4692 11.9001C18.6392 11.7401 18.6992 11.4901 18.6292 11.2701C18.5592 11.0401 18.3692 10.8801 18.1292 10.8501L16.8492 10.6601C16.7992 10.6501 16.7592 10.6201 16.7392 10.5801L16.1692 9.42008C16.0692 9.21008 15.8492 9.08008 15.6192 9.08008C15.3792 9.08008 15.1692 9.21008 15.0592 9.42008L14.4892 10.5801C14.4692 10.6301 14.4192 10.6601 14.3692 10.6601L13.0892 10.8501C12.8592 10.8801 12.6592 11.0501 12.5892 11.2701C12.5192 11.5001 12.5792 11.7401 12.7492 11.9001L13.6792 12.8001C13.7192 12.8301 13.7292 12.8901 13.7192 12.9401L13.4992 14.2101C13.4592 14.4401 13.5492 14.6801 13.7492 14.8101C13.8592 14.8901 13.9792 14.9301 14.1092 14.9301C14.2092 14.9301 14.3092 14.9101 14.3992 14.8601L15.5492 14.2601C15.5892 14.2401 15.6492 14.2401 15.6892 14.2601L16.8392 14.8601C17.0492 14.9701 17.2992 14.9501 17.4892 14.8101C17.6792 14.6701 17.7792 14.4401 17.7392 14.2001L17.5192 12.9301C17.5092 12.8801 17.5292 12.8301 17.5592 12.7901L18.4692 11.9001Z" fill="currentColor" /><path d="M9.21061 7.57986V16.4199C8.83061 16.4199 8.51061 16.7399 8.51061 17.1199V20.1399H7.35061C3.40061 20.1399 2.10061 18.9599 2.01061 15.2799C2.00061 15.0899 2.08061 14.9099 2.21061 14.7799C2.34061 14.6399 2.53061 14.5699 2.71061 14.5699C4.11061 14.5699 5.26061 13.4199 5.26061 12.0099C5.26061 10.5999 4.11061 9.43986 2.71061 9.43986C2.51061 9.43986 2.34061 9.36986 2.21061 9.22986C2.08061 9.09986 2.00061 8.90986 2.01061 8.72986C2.10061 5.03986 3.40061 3.85986 7.35061 3.85986H8.51061V6.87986C8.51061 7.26986 8.83061 7.57986 9.21061 7.57986Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTicketStar;