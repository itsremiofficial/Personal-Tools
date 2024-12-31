import { FC } from 'react';
import { IconProps } from "@/types";

const IconProfileRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.5 19H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.1508 10.87C12.0508 10.86 11.9308 10.86 11.8208 10.87C9.44078 10.79 7.55078 8.84 7.55078 6.44C7.55078 3.99 9.53078 2 11.9908 2C14.4408 2 16.4308 3.99 16.4308 6.44C16.4208 8.84 14.5308 10.79 12.1508 10.87Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.9891 21.8102C10.1691 21.8102 8.35906 21.3502 6.97906 20.4302C4.55906 18.8102 4.55906 16.1702 6.97906 14.5602C9.72906 12.7202 14.2391 12.7202 16.9891 14.5602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.0809 14.1599C14.2909 12.2999 9.74094 12.2999 6.93094 14.1599C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1399 18.3409 14.9899 17.0809 14.1599Z" fill="currentColor" /><path d="M13.8302 18.0699H10.1802C9.80023 18.0699 9.49023 17.7599 9.49023 17.3799C9.49023 16.9999 9.80023 16.6899 10.1802 16.6899H13.8302C14.2102 16.6899 14.5202 16.9999 14.5202 17.3799C14.5102 17.7599 14.2102 18.0699 13.8302 18.0699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconProfileRemove;