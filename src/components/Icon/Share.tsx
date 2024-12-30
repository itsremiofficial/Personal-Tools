import { FC } from 'react';
import { IconProps } from "../../types";

const IconShield: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V7.12006C20.6102 5.89006 19.6702 4.53006 18.5202 4.10006L13.5302 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.75 7H11H7C4.24 7 2 9.24 2 12V17C2 19.76 4.24 22 7 22H12C14.76 22 17 19.76 17 17V13V12.25C17 9.35 14.65 7 11.75 7Z" fill="currentColor" /><path d="M16.4993 2C13.6293 2 11.2793 4.2 11.0293 7H11.7493C14.6493 7 16.9993 9.35 16.9993 12.25V12.97C19.7993 12.72 21.9993 10.36 21.9993 7.5C21.9993 4.46 19.5393 2 16.4993 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShield;