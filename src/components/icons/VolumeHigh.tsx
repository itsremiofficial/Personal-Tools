import { FC } from 'react';
import { IconProps } from "../../types";

const IconVolumeLow: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.96021V14.0402C2 16.0802 3.02 17.1002 5.06 17.1002H6.52C6.9 17.1002 7.28 17.2102 7.6 17.4102L10.58 19.2702C13.16 20.8802 15.26 19.7102 15.26 16.6702V7.32021C15.26 4.28021 13.15 3.11021 10.58 4.72021L7.6 6.59021C7.27 6.79021 6.9 6.90021 6.52 6.90021H5.06C3.02 6.90021 2 7.92021 2 9.96021Z" stroke="currentColor" strokeWidth="1.5" /><path opacity={duotone ? "0.4" : "1"} d="M18 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.0003 16.7498C17.8403 16.7498 17.6903 16.6998 17.5503 16.5998C17.2203 16.3498 17.1503 15.8798 17.4003 15.5498C18.9703 13.4598 18.9703 10.5398 17.4003 8.44978C17.1503 8.11978 17.2203 7.64978 17.5503 7.39978C17.8803 7.14978 18.3503 7.21978 18.6003 7.54978C20.5603 10.1698 20.5603 13.8298 18.6003 16.4498C18.4503 16.6498 18.2303 16.7498 18.0003 16.7498Z" fill="currentColor" /><path d="M19.8304 19.2498C19.6704 19.2498 19.5204 19.1998 19.3804 19.0998C19.0504 18.8498 18.9804 18.3798 19.2304 18.0498C21.9004 14.4898 21.9004 9.50978 19.2304 5.94978C18.9804 5.61978 19.0504 5.14978 19.3804 4.89978C19.7104 4.64978 20.1804 4.71978 20.4304 5.04978C23.5004 9.13978 23.5004 14.8598 20.4304 18.9498C20.2904 19.1498 20.0604 19.2498 19.8304 19.2498Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.75 7.41021V16.5902C15.75 18.3102 15.13 19.6002 14.02 20.2202C13.57 20.4702 13.07 20.5902 12.55 20.5902C11.75 20.5902 10.89 20.3202 10.01 19.7702L7.09 17.9402C6.89 17.8202 6.66 17.7502 6.43 17.7502H5.5V6.25021H6.43C6.66 6.25021 6.89 6.18021 7.09 6.06021L10.01 4.23021C11.47 3.32021 12.9 3.16021 14.02 3.78021C15.13 4.40021 15.75 5.69021 15.75 7.41021Z" fill="currentColor" /><path d="M5.5 6.25V17.75H5C2.58 17.75 1.25 16.42 1.25 14V10C1.25 7.58 2.58 6.25 5 6.25H5.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVolumeLow;