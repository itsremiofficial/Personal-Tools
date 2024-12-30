import { FC } from 'react';
import { IconProps } from "../../types";

const IconBus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.5 13H5.5C4.67 13 4 12.33 4 11.5V9.5C4 8.67 4.67 8 5.5 8H18.5C19.33 8 20 8.67 20 9.5V11.5C20 12.33 19.33 13 18.5 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.5 5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.49451 17.7002H8.50349" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.4945 17.7002H15.5035" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.09961 21.9998V6.02979C2.09961 4.01979 3.09966 3.00977 5.08966 3.00977H11.3196C13.3096 3.00977 14.2996 4.01979 14.2996 6.02979V21.9998" fill="currentColor" /><path d="M10.7508 9H5.80078C5.39078 9 5.05078 8.66 5.05078 8.25C5.05078 7.84 5.39078 7.5 5.80078 7.5H10.7508C11.1608 7.5 11.5008 7.84 11.5008 8.25C11.5008 8.66 11.1608 9 10.7508 9Z" fill="currentColor" /><path d="M10.7508 12.75H5.80078C5.39078 12.75 5.05078 12.41 5.05078 12C5.05078 11.59 5.39078 11.25 5.80078 11.25H10.7508C11.1608 11.25 11.5008 11.59 11.5008 12C11.5008 12.41 11.1608 12.75 10.7508 12.75Z" fill="currentColor" /><path d="M8.25 22.75C7.84 22.75 7.5 22.41 7.5 22V18.25C7.5 17.84 7.84 17.5 8.25 17.5C8.66 17.5 9 17.84 9 18.25V22C9 22.41 8.66 22.75 8.25 22.75Z" fill="currentColor" /><path d="M23 21.2501H20.73V18.2501C21.68 17.9401 22.37 17.0501 22.37 16.0001V14.0001C22.37 12.6901 21.3 11.6201 19.99 11.6201C18.68 11.6201 17.61 12.6901 17.61 14.0001V16.0001C17.61 17.0401 18.29 17.9201 19.22 18.2401V21.2501H1C0.59 21.2501 0.25 21.5901 0.25 22.0001C0.25 22.4101 0.59 22.7501 1 22.7501H19.93C19.95 22.7501 19.96 22.7601 19.98 22.7601C20 22.7601 20.01 22.7501 20.03 22.7501H23C23.41 22.7501 23.75 22.4101 23.75 22.0001C23.75 21.5901 23.41 21.2501 23 21.2501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBus;