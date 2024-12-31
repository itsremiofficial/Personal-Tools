import { FC } from 'react';
import { IconProps } from "@/types";

const IconUserEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.211 15.74L15.671 19.2801C15.531 19.4201 15.401 19.68 15.371 19.87L15.181 21.22C15.111 21.71 15.451 22.05 15.941 21.98L17.291 21.79C17.481 21.76 17.751 21.63 17.881 21.49L21.421 17.95C22.031 17.34 22.321 16.63 21.421 15.73C20.531 14.84 19.821 15.13 19.211 15.74Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15C13.0402 15 14.0402 15.15 14.9702 15.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.0002 14.5C6.99018 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="currentColor" /><path d="M21.4291 14.7401C20.5291 13.8401 19.8191 14.1301 19.2091 14.7401L15.669 18.2801C15.529 18.4201 15.3991 18.6801 15.3691 18.8701L15.1791 20.2201C15.1091 20.7101 15.4491 21.0501 15.9391 20.9801L17.289 20.7901C17.479 20.7601 17.7491 20.6301 17.8791 20.4901L21.419 16.9501C22.039 16.3501 22.3291 15.6401 21.4291 14.7401Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconUserEdit;