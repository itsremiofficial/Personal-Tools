import { FC } from 'react';
import { IconProps } from "../../types";

const IconMagicpen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.49945 20.4999C4.32945 21.3299 5.66945 21.3299 6.49945 20.4999L19.4995 7.49994C20.3295 6.66994 20.3295 5.32994 19.4995 4.49994C18.6695 3.66994 17.3295 3.66994 16.4995 4.49994L3.49945 17.4999C2.66945 18.3299 2.66945 19.6699 3.49945 20.4999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.0098 8.99023L15.0098 5.99023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 2.44L10 2L9.56 3.5L10 5L8.5 4.56L7 5L7.44 3.5L7 2L8.5 2.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.5 8.44L6 8L5.56 9.5L6 11L4.5 10.56L3 11L3.44 9.5L3 8L4.5 8.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.5 13.44L21 13L20.56 14.5L21 16L19.5 15.56L18 16L18.44 14.5L18 13L19.5 13.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.2402 2C13.7102 2 14.1002 2.38 14.1002 2.86V21.15C14.1002 21.62 13.7202 22.01 13.2402 22.01C7.35023 22.01 3.24023 17.9 3.24023 12.01C3.24023 6.12 7.36023 2 13.2402 2Z" fill="currentColor" /><path d="M20.5409 11.5399L17.7009 8.68991C17.4109 8.39991 16.9309 8.39991 16.6409 8.68991C16.3509 8.97991 16.3509 9.45991 16.6409 9.74991L18.2009 11.3099H8.63086C8.22086 11.3099 7.88086 11.6499 7.88086 12.0599C7.88086 12.4699 8.22086 12.8099 8.63086 12.8099H18.2009L16.6409 14.3699C16.3509 14.6599 16.3509 15.1399 16.6409 15.4299C16.7909 15.5799 16.9809 15.6499 17.1709 15.6499C17.3609 15.6499 17.5509 15.5799 17.7009 15.4299L20.5409 12.5799C20.8309 12.2999 20.8309 11.8299 20.5409 11.5399Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMagicpen;