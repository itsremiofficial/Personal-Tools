import { FC } from 'react';
import { IconProps } from "../../types";

const IconSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M18.9004 5L4.90039 19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16 12.6899V18.0799C16 20.4199 14.44 21.9699 12.11 21.9699H5.89C3.56 21.9699 2 20.4199 2 18.0799V10.3099C2 7.96992 3.56 6.41992 5.89 6.41992H9.72C10.75 6.41992 11.74 6.82992 12.47 7.55992L14.86 9.93992C15.59 10.6699 16 11.6599 16 12.6899Z" fill="currentColor" /><path d="M22 8.24997V13.64C22 15.97 20.44 17.53 18.11 17.53H16V12.69C16 11.66 15.59 10.67 14.86 9.93997L12.47 7.55997C11.74 6.82997 10.75 6.41997 9.72 6.41997H8V5.85997C8 3.52997 9.56 1.96997 11.89 1.96997H15.72C16.75 1.96997 17.74 2.37997 18.47 3.10997L20.86 5.49997C21.59 6.22997 22 7.21997 22 8.24997Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSlash;