import { FC } from 'react';
import { IconProps } from "@/types";

const IconReceiveSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9 11.5098L12 14.5098L15 11.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 14.5098V6.50977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M11.4714 15.04C11.5414 15.11 11.6214 15.16 11.7114 15.2C11.8014 15.24 11.9014 15.26 12.0014 15.26C12.1014 15.26 12.1914 15.24 12.2914 15.2C12.3814 15.16 12.4614 15.11 12.5314 15.04L15.5314 12.04C15.8214 11.75 15.8214 11.27 15.5314 10.98C15.2414 10.69 14.7614 10.69 14.4714 10.98L12.7514 12.7V6.51001C12.7514 6.10001 12.4114 5.76001 12.0014 5.76001C11.5914 5.76001 11.2514 6.10001 11.2514 6.51001V12.7L9.5314 10.98C9.2414 10.69 8.76141 10.69 8.47141 10.98C8.18141 11.27 8.18141 11.75 8.47141 12.04L11.4714 15.04Z" fill="currentColor" /><path d="M18.7107 16.28C18.5807 15.89 18.1607 15.68 17.7607 15.81C14.0407 17.05 9.95067 17.05 6.23067 15.81C5.84067 15.68 5.41067 15.89 5.28067 16.28C5.15067 16.67 5.36067 17.1 5.75067 17.23C7.76067 17.9 9.87067 18.24 11.9907 18.24C14.1107 18.24 16.2207 17.9 18.2307 17.23C18.6307 17.09 18.8407 16.67 18.7107 16.28Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceiveSquare;