import { FC } from 'react';
import { IconProps } from "../../types";

const IconShieldTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V7.12006C20.6102 5.89006 19.6702 4.53006 18.5202 4.10006L13.5302 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.05078 11.8702L10.6608 13.4802L14.9608 9.18018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.9608 2.10989L5.46078 4.16989C4.41078 4.56989 3.55078 5.80989 3.55078 6.93989V15.0399C3.55078 15.8499 4.08078 16.9199 4.73078 17.3999L10.2308 21.5099C11.2008 22.2399 12.7908 22.2399 13.7608 21.5099L19.2608 17.3999C19.9108 16.9099 20.4408 15.8499 20.4408 15.0399V6.93989C20.4408 5.81989 19.5808 4.56988 18.5308 4.17988L13.0308 2.11989C12.4708 1.89989 11.5308 1.89989 10.9608 2.10989Z" fill="currentColor" /><path d="M14.5 10.5C14.5 9.12 13.38 8 12 8C10.62 8 9.5 9.12 9.5 10.5C9.5 11.62 10.24 12.55 11.25 12.87V15.5C11.25 15.91 11.59 16.25 12 16.25C12.41 16.25 12.75 15.91 12.75 15.5V12.87C13.76 12.55 14.5 11.62 14.5 10.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShieldTick;