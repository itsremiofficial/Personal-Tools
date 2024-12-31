import { FC } from 'react';
import { IconProps } from "@/types";

const IconProfileDelete: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M18.4098 18.0898L15.5898 20.9098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.4098 20.9098L15.5898 18.0898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2C14.4505 2 16.4405 3.99 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.0008 21.8102C10.1808 21.8102 8.37078 21.3502 6.99078 20.4302C4.57078 18.8102 4.57078 16.1702 6.99078 14.5602C9.74078 12.7202 14.2508 12.7202 17.0008 14.5602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.0809 14.1499C14.2909 12.2899 9.74094 12.2899 6.93094 14.1499C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1299 18.3409 14.9899 17.0809 14.1499Z" fill="currentColor" /><path d="M13.0593 17.3799L13.9393 16.4999C14.2293 16.2099 14.2293 15.7299 13.9393 15.4399C13.6493 15.1499 13.1693 15.1499 12.8793 15.4399L11.9993 16.3199L11.1193 15.4399C10.8293 15.1499 10.3493 15.1499 10.0593 15.4399C9.7693 15.7299 9.7693 16.2099 10.0593 16.4999L10.9393 17.3799L10.0593 18.2599C9.7693 18.5499 9.7693 19.0299 10.0593 19.3199C10.2093 19.4699 10.3993 19.5399 10.5893 19.5399C10.7793 19.5399 10.9693 19.4699 11.1193 19.3199L11.9993 18.4399L12.8793 19.3199C13.0293 19.4699 13.2193 19.5399 13.4093 19.5399C13.5993 19.5399 13.7893 19.4699 13.9393 19.3199C14.2293 19.0299 14.2293 18.5499 13.9393 18.2599L13.0593 17.3799Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconProfileDelete;