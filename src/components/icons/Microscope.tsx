import { FC } from 'react';
import { IconProps } from "../../types";

const IconMilk: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 10.83V15H14.12C13.38 15 12.66 14.83 12 14.5C11.34 14.17 10.62 14 9.89001 14L6 13.98V10.83C6 10.37 6.26003 9.74 6.59003 9.41L8.71002 7.28999C8.89002 7.10999 9 6.85 9 6.59V5H15V6.59C15 6.85 15.11 7.10999 15.29 7.28999L17.41 9.41C17.74 9.74 18 10.37 18 10.83Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 16V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 14.98V13.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 5H9.5C8.67 5 8 4.32 8 3.5C8 2.68 8.67 2 9.5 2H14.5C15.33 2 16 2.68 16 3.5C16 4.32 15.33 5 14.5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.6209 5.72L7.01086 16.33C6.28086 15.34 5.88086 14.13 5.88086 12.82V8.11C5.88086 6.27 6.70086 4.62 8.00086 3.5V7.64C8.00086 8.03 8.32086 8.35 8.70086 8.35C9.09086 8.35 9.41086 8.03 9.41086 7.64V2.57C9.87086 2.34 10.3609 2.18 10.8709 2.09V5.75C10.8709 6.15 11.1909 6.46 11.5809 6.46C11.9709 6.46 12.2909 6.15 12.2909 5.75V2C14.6809 2.11 16.7409 3.61 17.6209 5.72Z" fill="currentColor" /><path d="M18.1202 8.87988V12.8199C18.1202 16.1899 15.3702 18.9399 12.0002 18.9399C11.8202 18.9399 11.6402 18.9299 11.4602 18.9099C11.3802 18.9099 11.3002 18.8999 11.2302 18.8899C11.1002 18.8699 10.9702 18.8499 10.8502 18.8299C10.8002 18.8299 10.7602 18.8099 10.7002 18.7999C10.5602 18.7699 10.4202 18.7299 10.2902 18.6899C10.0702 18.6299 9.86016 18.5499 9.66016 18.4699C9.53016 18.4199 9.41016 18.3699 9.29016 18.2999C9.26016 18.2899 9.24016 18.2699 9.21016 18.2599C9.11016 18.2099 9.01016 18.1599 8.91016 18.0899L18.1202 8.87988Z" fill="currentColor" /><path d="M21.7497 11V13C21.7497 18.38 17.3797 22.75 11.9997 22.75C9.87969 22.75 7.84969 22.07 6.17969 20.82L7.25969 19.74C8.63969 20.72 10.2797 21.25 11.9997 21.25C16.5497 21.25 20.2497 17.55 20.2497 13V11C20.2497 10.59 20.5897 10.25 20.9997 10.25C21.4097 10.25 21.7497 10.59 21.7497 11Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMilk;