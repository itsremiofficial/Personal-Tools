import { FC } from 'react';
import { IconProps } from "../../types";

const IconShip: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4198 12.3702C21.2898 12.7202 21.8297 13.7502 21.6297 14.6602L21.2197 16.5202C20.5097 19.7202 17.9997 22.0002 14.3797 22.0002H9.61974C5.99974 22.0002 3.48974 19.7202 2.77974 16.5202L2.36974 14.6602C2.16974 13.7502 2.70973 12.7202 3.57973 12.3702L4.99974 11.8002L10.5098 9.59018C11.4698 9.21018 12.5297 9.21018 13.4897 9.59018L18.9997 11.8002L20.4198 12.3702Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.3608 4.64009L5.83078 18.1701L4.73078 17.3501C4.08078 16.8601 3.55078 15.8001 3.55078 14.9801V6.89009C3.55078 5.76009 4.41078 4.52009 5.46078 4.12009L10.9608 2.06009C11.5308 1.85009 12.4708 1.85009 13.0408 2.06009L18.5408 4.12009C18.8308 4.23009 19.1108 4.41009 19.3608 4.64009Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.4491 6.89008V14.9801C20.4491 15.8001 19.9191 16.8601 19.2691 17.3501L13.7691 21.4601C12.7891 22.1801 11.2091 22.1801 10.2291 21.4601L7.53906 19.4601L20.4191 6.58008C20.4391 6.68008 20.4491 6.79008 20.4491 6.89008Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShip;