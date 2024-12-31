import { FC } from 'react';
import { IconProps } from "@/types";

const IconLogout1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.4395 14.62L19.9995 12.06L17.4395 9.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.75977 12.0596H19.9298" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.2402 2C13.7102 2 14.1002 2.38 14.1002 2.86V21.15C14.1002 21.62 13.7202 22.01 13.2402 22.01C7.35023 22.01 3.24023 17.9 3.24023 12.01C3.24023 6.12 7.36023 2 13.2402 2Z" fill="currentColor" /><path d="M20.5409 11.5399L17.7009 8.68991C17.4109 8.39991 16.9309 8.39991 16.6409 8.68991C16.3509 8.97991 16.3509 9.45991 16.6409 9.74991L18.2009 11.3099H8.63086C8.22086 11.3099 7.88086 11.6499 7.88086 12.0599C7.88086 12.4699 8.22086 12.8099 8.63086 12.8099H18.2009L16.6409 14.3699C16.3509 14.6599 16.3509 15.1399 16.6409 15.4299C16.7909 15.5799 16.9809 15.6499 17.1709 15.6499C17.3609 15.6499 17.5509 15.5799 17.7009 15.4299L20.5409 12.5799C20.8309 12.2999 20.8309 11.8299 20.5409 11.5399Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLogout1;