import { FC } from 'react';
import { IconProps } from "../../types";

const IconSmsSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 22L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7 3H17C20 3 22 4.5 22 8V11.14C22 11.87 21.25 12.33 20.58 12.04C19.48 11.56 18.23 11.38 16.92 11.59C14.3 12.02 12.16 14.09 11.63 16.69C11.48 17.45 11.46 18.19 11.56 18.9C11.64 19.49 11.16 20.01 10.57 20.01H7C4 20.01 2 18.51 2 15.01V8.01001C2 4.50001 4 3 7 3Z" fill="currentColor" /><path d="M12.0008 11.87C11.1608 11.87 10.3108 11.61 9.66076 11.08L6.53075 8.57996C6.21075 8.31996 6.15076 7.84997 6.41076 7.52997C6.67076 7.20997 7.14075 7.14997 7.46075 7.40997L10.5908 9.90997C11.3508 10.52 12.6407 10.52 13.4007 9.90997L16.5308 7.40997C16.8508 7.14997 17.3307 7.19997 17.5807 7.52997C17.8407 7.84997 17.7907 8.32996 17.4607 8.57996L14.3307 11.08C13.6907 11.61 12.8408 11.87 12.0008 11.87Z" fill="currentColor" /><path d="M18 13C15.24 13 13 15.23 13 18C13 20.76 15.24 23 18 23C20.77 23 23 20.76 23 18C23 15.23 20.77 13 18 13ZM20.05 17.55L19.68 17.91L17.51 20.09C17.41 20.18 17.22 20.28 17.08 20.3L16.1 20.44C15.75 20.49 15.5 20.24 15.55 19.89L15.69 18.91C15.71 18.77 15.8 18.58 15.9 18.48L18.08 16.31L18.44 15.94C18.68 15.7 18.95 15.54 19.23 15.54C19.47 15.54 19.74 15.65 20.04 15.94C20.7 16.6 20.49 17.11 20.05 17.55Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSmsSearch;