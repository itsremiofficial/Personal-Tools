import { FC } from 'react';
import { IconProps } from "../../types";

const IconHierarchySquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.4508 14.4V8.5C16.4508 7.95 16.0008 7.5 15.4508 7.5H12.5508" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.05 6L12.25 7.5L14.05 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.55078 10.2002V14.4002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.70001 9.89999C8.77697 9.89999 9.65002 9.02697 9.65002 7.95001C9.65002 6.87306 8.77697 6 7.70001 6C6.62306 6 5.75 6.87306 5.75 7.95001C5.75 9.02697 6.62306 9.89999 7.70001 9.89999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.54999 17.9999C8.5441 17.9999 9.34998 17.194 9.34998 16.1999C9.34998 15.2058 8.5441 14.3999 7.54999 14.3999C6.55588 14.3999 5.75 15.2058 5.75 16.1999C5.75 17.194 6.55588 17.9999 7.54999 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4504 17.9999C17.4445 17.9999 18.2504 17.194 18.2504 16.1999C18.2504 15.2058 17.4445 14.3999 16.4504 14.3999C15.4563 14.3999 14.6504 15.2058 14.6504 16.1999C14.6504 17.194 15.4563 17.9999 16.4504 17.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z" fill="currentColor" /><path d="M21.77 20.68L21.01 19.92C21.41 19.32 21.64 18.6 21.64 17.83C21.64 15.72 19.93 14.01 17.82 14.01C15.71 14.01 14 15.72 14 17.83C14 19.94 15.71 21.65 17.82 21.65C18.59 21.65 19.31 21.42 19.91 21.02L20.67 21.78C20.82 21.93 21.02 22.01 21.22 22.01C21.42 22.01 21.62 21.93 21.77 21.78C22.08 21.47 22.08 20.98 21.77 20.68Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHierarchySquare;