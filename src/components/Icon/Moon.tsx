import { FC } from 'react';
import { IconProps } from "../../types";

const IconMore: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="currentColor" strokeWidth="1.5" /><path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="currentColor" strokeWidth="1.5" /><path opacity={duotone ? "0.4" : "1"} d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="currentColor" strokeWidth="1.5" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.97 7.19V13.37H2V7.19C2 4.88 3.88 3 6.19 3H16.78C19.09 3 20.97 4.88 20.97 7.19Z" fill="currentColor" /><path d="M2 13.3701V13.5601C2 15.8801 3.88 17.7501 6.19 17.7501H9.79C10.34 17.7501 10.79 18.2001 10.79 18.7501V19.5701C10.79 20.1201 10.34 20.5701 9.79 20.5701H7.53C7.14 20.5701 6.82 20.8901 6.82 21.2801C6.82 21.6701 7.14 21.9901 7.53 21.9901H15.46C15.85 21.9901 16.17 21.6701 16.17 21.2801C16.17 20.8901 15.85 20.5701 15.46 20.5701H13.21C12.66 20.5701 12.21 20.1201 12.21 19.5701V18.7501C12.21 18.2001 12.66 17.7501 13.21 17.7501H16.78C19.1 17.7501 20.97 15.8701 20.97 13.5601V13.3701H2Z" fill="currentColor" /><path d="M21.99 2.36011L20.86 3.15011V2.73011C20.86 1.78011 20.09 1.02011 19.15 1.02011H14.87C13.84 1.01011 13 1.85011 13 2.88011V6.16011C13 7.02011 13.43 7.87011 14.71 7.87011H19.14C20.09 7.87011 20.85 7.10011 20.85 6.16011V5.73011L21.98 6.52011C22.55 6.91011 23 6.67011 23 5.99011V2.89011C23 2.21011 22.55 1.98011 21.99 2.36011Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMore;