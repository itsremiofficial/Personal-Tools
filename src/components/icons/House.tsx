import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHouse: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.9502 22.0003L3.00019 9.97023C3.00019 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" /><path d="M19.0003 7L18.9703 4H14.5703" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.9992 9.98017V22.0002H2.94922L2.99922 9.97016C2.99922 9.36016 3.27922 8.78022 3.76922 8.40022L10.7692 2.96021C11.4892 2.39021 12.5092 2.39021 13.2292 2.96021L14.5692 4.00019L18.9992 7.4402L20.2292 8.40022C20.7192 8.78022 20.9992 9.36017 20.9992 9.98017Z" fill="currentColor" /><path d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z" fill="currentColor" /><path d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z" fill="currentColor" /><path d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z" fill="currentColor" /><path d="M19.0003 7.44L14.5703 4H17.9803C18.5303 4 18.9803 4.43999 18.9803 4.98999L19.0003 7.44Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHouse as IconComponentType).keywords = [
  "house",
  "mansion",
  "home",
  "household",
  "put up",
  "firm",
  "family",
  "sign",
  "menage",
  "theatre"
];

export default IconHouse as IconComponentType;