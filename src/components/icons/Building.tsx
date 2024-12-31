import { FC } from 'react';
import { IconProps } from "../../types";

const IconBuilding: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4997 22.0003H4.07973C2.91973 22.0003 1.96973 21.0703 1.96973 19.9303V5.09035C1.96973 2.47035 3.91973 1.28035 6.30973 2.45035L10.7497 4.63035C11.7097 5.10035 12.4997 6.35035 12.4997 7.41035V22.0003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.97 15.0604V18.8404C21.97 21.0004 20.97 22.0004 18.81 22.0004H12.5V10.4204L12.97 10.5204L17.47 11.5304L19.5 11.9804C20.82 12.2704 21.9 12.9504 21.96 14.8704C21.97 14.9304 21.97 14.9904 21.97 15.0604Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.5 9.00049H8.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.5 13.0005H8.97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.4697 11.5305V14.7505C17.4697 15.9905 16.4597 17.0005 15.2197 17.0005C13.9797 17.0005 12.9697 15.9905 12.9697 14.7505V10.5205L17.4697 11.5305Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.9597 14.8703C21.8997 16.0503 20.9197 17.0003 19.7197 17.0003C18.4797 17.0003 17.4697 15.9903 17.4697 14.7503V11.5303L19.4997 11.9803C20.8197 12.2703 21.8997 12.9503 21.9597 14.8703Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.5909 1.75C12.6209 1.75 10.2109 4.16 10.2109 7.13C10.2109 10.1 12.6209 12.51 15.5909 12.51C18.5609 12.51 20.9709 10.1 20.9709 7.13C20.9709 4.16 18.5609 1.75 15.5909 1.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.35928 13.03C4.52928 13.03 3.0293 14.52 3.0293 16.36C3.0293 18.2 4.51928 19.69 6.35928 19.69C8.18928 19.69 9.6893 18.2 9.6893 16.36C9.6893 14.52 8.18928 13.03 6.35928 13.03Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.6205 16.6201C15.0705 16.6201 13.8105 17.8801 13.8105 19.4301C13.8105 20.9801 15.0705 22.2401 16.6205 22.2401C18.1705 22.2401 19.4305 20.9801 19.4305 19.4301C19.4305 17.8801 18.1705 16.6201 16.6205 16.6201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBuilding;