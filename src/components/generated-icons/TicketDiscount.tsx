import { FC } from 'react';
import { IconProps } from "@/types";

const IconTicketDiscount: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 14.75L15 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.9945 14.75H15.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.99451 9.25H9.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.3 10.8399C21.69 10.8399 22 10.5299 22 10.1399V9.20986C22 5.10986 20.75 3.85986 16.65 3.85986H7.35C3.25 3.85986 2 5.10986 2 9.20986V9.67986C2 10.0699 2.31 10.3799 2.7 10.3799C3.6 10.3799 4.33 11.1099 4.33 12.0099C4.33 12.9099 3.6 13.6299 2.7 13.6299C2.31 13.6299 2 13.9399 2 14.3299V14.7999C2 18.8999 3.25 20.1499 7.35 20.1499H16.65C20.75 20.1499 22 18.8999 22 14.7999C22 14.4099 21.69 14.0999 21.3 14.0999C20.4 14.0999 19.67 13.3699 19.67 12.4699C19.67 11.5699 20.4 10.8399 21.3 10.8399Z" fill="currentColor" /><path d="M15.0002 15.8799C14.4402 15.8799 13.9902 15.4299 13.9902 14.8799C13.9902 14.3299 14.4402 13.8799 14.9902 13.8799C15.5402 13.8799 15.9902 14.3299 15.9902 14.8799C15.9902 15.4299 15.5602 15.8799 15.0002 15.8799Z" fill="currentColor" /><path d="M9.00023 10.8799C8.44023 10.8799 7.99023 10.4299 7.99023 9.87988C7.99023 9.32988 8.44023 8.87988 8.99023 8.87988C9.54023 8.87988 9.99023 9.32988 9.99023 9.87988C9.99023 10.4299 9.56023 10.8799 9.00023 10.8799Z" fill="currentColor" /><path d="M8.63031 16.4301C8.44031 16.4301 8.25031 16.3601 8.10031 16.2101C7.81031 15.9201 7.81031 15.4401 8.10031 15.1501L14.8303 8.42014C15.1203 8.13014 15.6003 8.13014 15.8903 8.42014C16.1803 8.71014 16.1803 9.19014 15.8903 9.48014L9.16031 16.2101C9.02031 16.3601 8.82031 16.4301 8.63031 16.4301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTicketDiscount;