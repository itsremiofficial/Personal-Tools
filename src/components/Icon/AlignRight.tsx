import { FC } from 'react';
import { IconProps } from "../../types";

const IconAlignRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.9 19.25H7.1C5.6 19.25 5 18.61 5 17.02V15.98C5 14.39 5.6 13.75 7.1 13.75H18.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.9 5.25H12.1C10.6 5.25 10 5.89 10 7.48V8.52C10 10.11 10.6 10.75 12.1 10.75H18.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 1.99023V21.9902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.61914 15.98V17.02C4.61914 18.61 5.21914 19.25 6.73914 19.25H18.6191V13.75H6.73914C5.21914 13.75 4.61914 14.39 4.61914 15.98Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.61914 7.48V8.52C9.61914 10.11 10.2291 10.75 11.7391 10.75H18.6191V5.25H11.7391C10.2291 5.25 9.61914 5.89 9.61914 7.48Z" fill="currentColor" /><path d="M18.6191 22C18.2091 22 17.8691 21.66 17.8691 21.25V2.75C17.8691 2.34 18.2091 2 18.6191 2C19.0291 2 19.3691 2.34 19.3691 2.75V21.25C19.3791 21.66 19.0391 22 18.6191 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAlignRight;