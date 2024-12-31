import { FC } from 'react';
import { IconProps } from "../../types";

const IconDanger: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M12 9V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9994 21.4098H5.93944C2.46944 21.4098 1.01944 18.9298 2.69944 15.8998L5.81944 10.2798L8.75944 4.99979C10.5394 1.78979 13.4594 1.78979 15.2394 4.99979L18.1794 10.2898L21.2994 15.9098C22.9794 18.9398 21.5194 21.4198 18.0594 21.4198H11.9994V21.4098Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M11.9941 17H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.9401 4.83008H6.83008C5.73008 4.83008 4.83008 5.73008 4.83008 6.83008V13.9401C4.83008 16.8301 7.17008 19.1701 10.0601 19.1701H17.1701C18.2701 19.1701 19.1701 18.2701 19.1701 17.1701V10.0601C19.1701 7.17008 16.8301 4.83008 13.9401 4.83008Z" fill="currentColor" /><path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill="currentColor" /><path d="M21.2507 17.7202H18.4707C18.0607 17.7202 17.7207 18.0602 17.7207 18.4702V21.2502C17.7207 21.6602 18.0607 22.0002 18.4707 22.0002C18.8807 22.0002 19.2207 21.6602 19.2207 21.2502V19.2202H21.2507C21.6607 19.2202 22.0007 18.8802 22.0007 18.4702C22.0007 18.0602 21.6607 17.7202 21.2507 17.7202Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDanger;