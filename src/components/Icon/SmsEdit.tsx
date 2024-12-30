import { FC } from 'react';
import { IconProps } from "../../types";

const IconSmsNotification: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="currentColor" /><path d="M12.0008 12.87C11.1608 12.87 10.3108 12.61 9.66076 12.08L6.53075 9.57997C6.21075 9.31997 6.15076 8.84997 6.41076 8.52997C6.67076 8.20997 7.14076 8.14997 7.46076 8.40997L10.5908 10.91C11.3508 11.52 12.6407 11.52 13.4007 10.91L16.5308 8.40997C16.8508 8.14997 17.3308 8.19997 17.5808 8.52997C17.8408 8.84997 17.7908 9.32997 17.4608 9.57997L14.3308 12.08C13.6908 12.61 12.8408 12.87 12.0008 12.87Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSmsNotification;