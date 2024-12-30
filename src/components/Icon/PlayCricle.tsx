import { FC } from 'react';
import { IconProps } from "../../types";

const IconPlayRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.38086 12.0001V10.6101C9.38086 8.89008 10.6009 8.18007 12.0909 9.04007L13.2909 9.73007L14.4908 10.4201C15.9808 11.2801 15.9808 12.6901 14.4908 13.5501L13.2909 14.2401L12.0909 14.9301C10.6009 15.7901 9.38086 15.0901 9.38086 13.3601V12.0001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.63 23 16.43 22.31 15.73 21.27C15.67 21.2 15.62 21.13 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C19.84 15 20.63 15.27 21.28 15.72C22.32 16.44 23 17.64 23 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M20.0692 20.0402L17.9492 17.9302" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.0497 17.96L17.9297 20.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill="currentColor" /><path d="M14.9694 10.2301L12.0694 8.56012C11.3494 8.14012 10.4794 8.14012 9.75938 8.56012C9.03938 8.98012 8.60938 9.72012 8.60938 10.5601V13.9101C8.60938 14.7401 9.03938 15.4901 9.75938 15.9101C10.1194 16.1201 10.5194 16.2201 10.9094 16.2201C11.3094 16.2201 11.6994 16.1201 12.0594 15.9101L14.9594 14.2401C15.6794 13.8201 16.1094 13.0801 16.1094 12.2401C16.1294 11.4001 15.6994 10.6501 14.9694 10.2301Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPlayRemove;