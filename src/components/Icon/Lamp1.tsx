import { FC } from 'react';
import { IconProps } from "../../types";

const IconLampCharge: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.0001 7.89014L10.9301 9.75014C10.6901 10.1601 10.8901 10.5001 11.3601 10.5001H12.6301C13.1101 10.5001 13.3001 10.8401 13.0601 11.2501L12.0001 13.1101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.30035 18.0402V16.8802C6.00035 15.4902 4.11035 12.7802 4.11035 9.90018C4.11035 4.95018 8.66035 1.07018 13.8004 2.19018C16.0604 2.69018 18.0404 4.19018 19.0704 6.26018C21.1604 10.4602 18.9604 14.9202 15.7304 16.8702V18.0302C15.7304 18.3202 15.8404 18.9902 14.7704 18.9902H9.26035C8.16035 19.0002 8.30035 18.5702 8.30035 18.0402Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 22.0002C10.79 21.3502 13.21 21.3502 15.5 22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.2106 14.69H5.7906C4.1306 14.69 3.1306 13.38 3.5706 11.78L5.7706 3.7C6.0206 2.77 7.0306 2 7.9906 2H16.0106C16.9706 2 17.9806 2.77 18.2306 3.7L20.4306 11.78C20.8706 13.38 19.8706 14.69 18.2106 14.69Z" fill="currentColor" /><path d="M16.75 21.2499C16.75 21.6599 16.41 21.9999 16 21.9999H8C7.59 21.9999 7.25 21.6599 7.25 21.2499C7.25 20.8399 7.59 20.4999 8 20.4999H11.25V14.6899H12.75V20.4999H16C16.41 20.4999 16.75 20.8399 16.75 21.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLampCharge;