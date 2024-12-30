import { FC } from 'react';
import { IconProps } from "../../types";

const IconBuilding3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.01 21.9898L3.01001 22.0099L3 7.06986C3 6.39986 3.34001 5.77983 3.89001 5.40983L7.89001 2.73984C8.56001 2.28984 9.43999 2.28984 10.11 2.73984L14.11 5.40983C14.67 5.77983 15 6.39986 15 7.06986L15.01 21.9898Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.9805 22.01V18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 12C18.9 12 18 12.9 18 14V16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16V14C22 12.9 21.1 12 20 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 14H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 22V18.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.3108 11.25C17.3308 11.51 17.2408 11.78 17.0408 11.98L11.0208 18C9.69083 19.33 8.35083 19.33 7.01083 18L3.00083 13.99C2.32083 13.3 1.98083 12.61 2.00083 11.92H2.07083L17.1908 11.26L17.3108 11.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.04 10.6402L9.69 3.29013L8.82 2.42014C8.53 2.13014 8.05 2.13014 7.76 2.42014C7.47 2.71014 7.47 3.19013 7.76 3.48013L8.63 4.35013L3 9.98013C2.36 10.6201 2.02 11.2701 2 11.9201H2.07L17.19 11.2602L17.31 11.2502C17.3 11.0302 17.2 10.8002 17.04 10.6402Z" fill="currentColor" /><path d="M16 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z" fill="currentColor" /><path d="M19.35 14.7798C19.09 14.4998 18.61 14.4998 18.35 14.7798C18.04 15.1198 16.5 16.8598 16.5 18.1698C16.5 19.4698 17.55 20.5198 18.85 20.5198C20.15 20.5198 21.2 19.4698 21.2 18.1698C21.2 16.8598 19.66 15.1198 19.35 14.7798Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBuilding3;