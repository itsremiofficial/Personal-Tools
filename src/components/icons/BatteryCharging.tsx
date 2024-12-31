import { FC } from 'react';
import { IconProps } from "../../types";

const IconBatteryCharging: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M9.99922 8L8.10922 10.5C7.71922 11.17 8.19922 12 8.96922 12H11.2692C12.0392 12 12.5192 12.83 12.1392 13.5L9.99922 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 19C3 19 2 18 2 14V10C2 6 3 5 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 5C17 5 18 6 18 10V14C18 18 17 19 13 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 19V22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19Z" fill="currentColor"  strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.6" : "1"} d="M8 11H4V18H8V11Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12 11H8V18H12V11Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M16 11H12V18H16V11Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20 11H16V18H20V11Z" fill="currentColor" /><path d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z" fill="currentColor" /><path d="M21.37 5.74982L12.37 2.14984C12.17 2.06984 11.83 2.06984 11.63 2.14984L2.63 5.74982C2.28 5.88982 2 6.29981 2 6.67981V9.99982C2 10.5498 2.45 10.9998 3 10.9998H21C21.55 10.9998 22 10.5498 22 9.99982V6.67981C22 6.29981 21.72 5.88982 21.37 5.74982ZM12 8.49982C11.17 8.49982 10.5 7.82982 10.5 6.99982C10.5 6.16982 11.17 5.49982 12 5.49982C12.83 5.49982 13.5 6.16982 13.5 6.99982C13.5 7.82982 12.83 8.49982 12 8.49982Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBatteryCharging;