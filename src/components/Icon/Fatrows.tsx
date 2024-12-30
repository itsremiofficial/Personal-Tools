import { FC } from 'react';
import { IconProps } from "../../types";

const IconFatrows: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H12.9C14.4 10.5 15 9.86 15 8.27V4.23C15 2.64 14.4 2 12.9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 10.7599C22 10.2899 21.62 9.8999 21.14 9.8999H2.86C2.38 9.8999 2 10.2799 2 10.7599C2 16.6499 6.11 20.7599 12 20.7599C17.89 20.7599 22 16.6399 22 10.7599Z" fill="currentColor" /><path d="M12.5304 3.45992L15.3804 6.29992C15.6704 6.58992 15.6704 7.06992 15.3804 7.35992C15.0904 7.64992 14.6104 7.64992 14.3204 7.35992L12.7504 5.79992V15.3699C12.7504 15.7799 12.4104 16.1199 12.0004 16.1199C11.5904 16.1199 11.2504 15.7799 11.2504 15.3699V5.79992L9.69039 7.36992C9.40039 7.65992 8.92039 7.65992 8.63039 7.36992C8.48039 7.21992 8.40039 7.02992 8.40039 6.83992C8.40039 6.64992 8.47039 6.45992 8.62039 6.30992L11.4704 3.46992C11.7604 3.16992 12.2404 3.16992 12.5304 3.45992Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFatrows;