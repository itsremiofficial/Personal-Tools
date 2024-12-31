import { FC } from 'react';
import { IconProps } from "../../types";

const IconMouseCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.5 9.5V14.5C19.5 18.63 16.13 22 12 22C7.87 22 4.5 18.63 4.5 14.5V9.5C4.5 7.44 5.34 5.56 6.7 4.2C7.89 3.01 9.48 2.22 11.25 2.04C11.49 2.01 11.75 2 12 2C12.25 2 12.51 2.01 12.75 2.04C16.53 2.42 19.5 5.62 19.5 9.5Z" fill="currentColor" /><path d="M13.8691 7.5V9.5C13.8691 10.53 13.0291 11.38 11.9991 11.38C10.9591 11.38 10.1191 10.53 10.1191 9.5V7.5C10.1191 6.73 10.5891 6.07 11.2491 5.78V2.04C11.4891 2.01 11.7491 2 11.9991 2C12.2491 2 12.5091 2.01 12.7491 2.04V5.78C13.4091 6.07 13.8691 6.73 13.8691 7.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMouseCircle;