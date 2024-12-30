import { FC } from 'react';
import { IconProps } from "../../types";

const IconSound: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.25V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 5.75V18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3.25V20.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.5 5.75V18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 8.25V15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 13C3.24 13 1 15.23 1 18C1 20.77 3.24 23 6 23C8.76 23 11 20.76 11 18C11 15.24 8.77 13 6 13ZM3.95999 15.96H6C6.38 15.96 6.67999 16.27 6.67999 16.64C6.67999 17.01 6.37 17.32 6 17.32H3.95999C3.57999 17.32 3.28 17.01 3.28 16.64C3.28 16.27 3.57999 15.96 3.95999 15.96ZM8.04001 20.04H3.95001C3.57001 20.04 3.26999 19.73 3.26999 19.36C3.26999 18.99 3.58001 18.68 3.95001 18.68H8.04001C8.42001 18.68 8.72 18.99 8.72 19.36C8.72 19.73 8.42001 20.04 8.04001 20.04Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17 3H7C4 3 2 4.5 2 8V11.14C2 11.87 2.75001 12.33 3.42001 12.04C4.52001 11.56 5.76999 11.38 7.07999 11.59C9.69999 12.02 11.84 14.09 12.37 16.69C12.52 17.45 12.54 18.19 12.44 18.9C12.36 19.49 12.84 20.01 13.43 20.01H17C20 20.01 22 18.51 22 15.01V8.00999C22 4.49999 20 3 17 3Z" fill="currentColor" /><path d="M12.0008 11.87C11.1608 11.87 10.3108 11.61 9.66076 11.08L6.53075 8.57997C6.21075 8.31997 6.15076 7.84997 6.41076 7.52997C6.67076 7.20997 7.14075 7.14997 7.46075 7.40997L10.5908 9.90997C11.3508 10.52 12.6407 10.52 13.4007 9.90997L16.5308 7.40997C16.8508 7.14997 17.3307 7.19997 17.5807 7.52997C17.8407 7.84997 17.7907 8.32997 17.4607 8.57997L14.3307 11.08C13.6907 11.61 12.8408 11.87 12.0008 11.87Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSound;