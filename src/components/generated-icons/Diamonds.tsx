import { FC } from 'react';
import { IconProps } from "@/types";

const IconDiamonds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2904 2.1499H7.70044C6.00044 2.1499 5.25044 2.9999 4.79044 4.0399L2.23044 9.7999C1.77044 10.8399 2.02044 12.3899 2.79044 13.2299L9.65044 20.7699C10.9504 22.1899 13.0704 22.1899 14.3604 20.7699L21.2105 13.2199C21.9805 12.3699 22.2304 10.8299 21.7604 9.7899L19.2004 4.0299C18.7404 2.9999 17.9904 2.1499 16.2904 2.1499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 8H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.2105 13.24L14.3604 20.78C13.0604 22.21 10.9404 22.21 9.64044 20.78L2.79044 13.24C2.02044 12.39 1.77044 10.85 2.23044 9.8L3.03044 8H20.9704L21.7705 9.8C22.2304 10.85 21.9805 12.39 21.2105 13.24Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.9693 7.9999H3.0293L4.78929 4.0399C5.25929 2.9999 5.99929 2.1499 7.6993 2.1499H16.2993C17.9993 2.1499 18.7393 2.9999 19.2093 4.0399L20.9693 7.9999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDiamonds;