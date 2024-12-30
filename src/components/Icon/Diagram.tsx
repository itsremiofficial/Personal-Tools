import { FC } from 'react';
import { IconProps } from "../../types";

const IconDiagram: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z" fill="currentColor" /><path d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z" fill="currentColor" /><path d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z" fill="currentColor" /><path opacity={duotone ? "0.37" : "1"} d="M16 13.25C16.41 13.25 16.75 12.91 16.75 12.5C16.75 12.09 16.41 11.75 16 11.75H13.25V5.75H16C16.41 5.75 16.75 5.41 16.75 5C16.75 4.59 16.41 4.25 16 4.25H9C8.59 4.25 8.25 4.59 8.25 5C8.25 5.41 8.59 5.75 9 5.75H11.75V18C11.75 19.52 12.98 20.75 14.5 20.75H16C16.41 20.75 16.75 20.41 16.75 20C16.75 19.59 16.41 19.25 16 19.25H14.5C13.81 19.25 13.25 18.69 13.25 18V13.25H16Z" fill="currentColor" /><path d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDiagram;