import { FC } from 'react';
import { IconProps } from "../../types";

const IconVolumeUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.96021V14.0402C2 16.0802 3.02 17.1002 5.06 17.1002H6.52C6.9 17.1002 7.28 17.2102 7.6 17.4102L10.58 19.2702C13.16 20.8802 15.26 19.7102 15.26 16.6702V7.32021C15.26 4.28021 13.15 3.11021 10.58 4.72021L7.6 6.59021C7.27 6.79021 6.9 6.90021 6.52 6.90021H5.06C3.02 6.90021 2 7.92021 2 9.96021Z" stroke="currentColor" strokeWidth="1.5" /><g opacity={duotone ? "0.4" : "1"}><path d="M18 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.0003 16.7498C17.8403 16.7498 17.6903 16.6998 17.5503 16.5998C17.2203 16.3498 17.1503 15.8798 17.4003 15.5498C18.6603 13.8698 18.9303 11.6398 18.1203 9.70983C17.9603 9.32983 18.1403 8.88983 18.5203 8.72983C18.9003 8.56983 19.3403 8.74983 19.5003 9.12983C20.5203 11.5498 20.1703 14.3598 18.6003 16.4598C18.4503 16.6498 18.2303 16.7498 18.0003 16.7498Z" fill="currentColor" /><path d="M19.8304 19.2502C19.6704 19.2502 19.5204 19.2002 19.3804 19.1002C19.0504 18.8502 18.9804 18.3802 19.2304 18.0502C21.3704 15.2002 21.8404 11.3802 20.4604 8.0902C20.3004 7.7102 20.4804 7.2702 20.8604 7.1102C21.2404 6.9502 21.6804 7.1302 21.8404 7.5102C23.4304 11.2902 22.8904 15.6702 20.4304 18.9502C20.2904 19.1502 20.0604 19.2502 19.8304 19.2502Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.0405 12.96C14.6705 12.33 15.7505 12.78 15.7505 13.67V16.6C15.7505 18.32 15.1305 19.61 14.0205 20.23C13.5705 20.48 13.0705 20.6 12.5505 20.6C11.7505 20.6 10.8905 20.33 10.0105 19.78L9.37047 19.38C8.83047 19.04 8.74047 18.28 9.19047 17.83L14.0405 12.96Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.02 3.78021C12.9 3.16021 11.47 3.32021 10.01 4.23021L7.09 6.06021C6.89 6.18021 6.66 6.25021 6.43 6.25021H5.5H5C2.58 6.25021 1.25 7.58021 1.25 10.0002V14.0002C1.25 16.4202 2.58 17.7502 5 17.7502H5.5H6.25L15.75 8.25021V7.41021C15.75 5.69021 15.13 4.40021 14.02 3.78021Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVolumeUp;