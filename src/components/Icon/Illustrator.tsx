import { FC } from 'react';
import { IconProps } from "../../types";

const IconImage: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6809 16.9601L18.5509 9.65013C17.4909 7.17013 15.5409 7.07013 14.2309 9.43013L12.3409 12.8401C11.3809 14.5701 9.5909 14.7201 8.3509 13.1701L8.1309 12.8901C6.8409 11.2701 5.0209 11.4701 4.0909 13.3201L2.3709 16.7701C1.1609 19.1701 2.9109 22.0001 5.5909 22.0001H18.3509C20.9509 22.0001 22.7009 19.3501 21.6809 16.9601Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.9707 8C8.62756 8 9.9707 6.65685 9.9707 5C9.9707 3.34315 8.62756 2 6.9707 2C5.31385 2 3.9707 3.34315 3.9707 5C3.9707 6.65685 5.31385 8 6.9707 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.12009 2H19.8901C20.4901 2 20.9501 2.52 20.8801 3.11L19.0801 19.33C19.0401 19.73 18.7501 20.07 18.3601 20.18L12.2801 21.92C12.1001 21.97 11.9101 21.97 11.7301 21.92L5.65012 20.18C5.26012 20.07 4.98009 19.73 4.93009 19.33L3.1301 3.11C3.0601 2.52 3.52009 2 4.12009 2Z" fill="currentColor" /><path d="M11.7498 18C11.6798 18 11.6098 17.99 11.5398 17.97L8.0398 16.97C7.7198 16.88 7.49982 16.58 7.49982 16.25V14.25C7.49982 13.84 7.83982 13.5 8.24982 13.5C8.65982 13.5 8.99982 13.84 8.99982 14.25V15.68L11.7498 16.47L14.5498 15.67L14.9198 12H8.24982C7.86982 12 7.54982 11.71 7.49982 11.33L6.99982 6.83C6.97982 6.62 7.03983 6.41 7.18983 6.25C7.32983 6.09 7.53982 6 7.74982 6H16.2498C16.6598 6 16.9998 6.34 16.9998 6.75C16.9998 7.16 16.6598 7.5 16.2498 7.5H8.58985L8.91981 10.5H15.7498C15.9598 10.5 16.1598 10.59 16.3098 10.75C16.4498 10.91 16.5198 11.12 16.4998 11.33L15.9998 16.33C15.9698 16.64 15.7598 16.89 15.4598 16.98L11.9598 17.98C11.8898 17.99 11.8198 18 11.7498 18Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconImage;