import { FC } from 'react';
import { IconProps } from "@/types";

const IconGps: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" /><path d="M12.0009 15.1199C13.724 15.1199 15.1209 13.723 15.1209 11.9999C15.1209 10.2768 13.724 8.87988 12.0009 8.87988C10.2777 8.87988 8.88086 10.2768 8.88086 11.9999C8.88086 13.723 10.2777 15.1199 12.0009 15.1199Z" fill="currentColor" /><path d="M12.75 2V4.04H12.74C12.5 4.01 12.25 4 12 4C11.75 4 11.5 4.01 11.26 4.04H11.25V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2Z" fill="currentColor" /><path d="M4 12C4 12.25 4.01 12.51 4.04 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4.04C4.01 11.49 4 11.75 4 12Z" fill="currentColor" /><path d="M12.75 19.96V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V19.96H11.26C11.5 19.99 11.75 20 12 20C12.25 20 12.5 19.99 12.74 19.96H12.75Z" fill="currentColor" /><path d="M22.7509 12C22.7509 12.41 22.4109 12.75 22.0009 12.75H19.9609C19.9909 12.51 20.0009 12.25 20.0009 12C20.0009 11.75 19.9909 11.49 19.9609 11.25H22.0009C22.4109 11.25 22.7509 11.59 22.7509 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGps;