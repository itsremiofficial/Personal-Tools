import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHouse2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.9502 22.0003L3.0002 9.97023C3.0002 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 16.25V17.75" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.5 7.5H13.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.75 22C22.75 22.41 22.41 22.75 22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.58 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.58 22.75 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.9992 9.98017V21.2502H2.94922L2.99922 9.97016C2.99922 9.36016 3.27922 8.78022 3.76922 8.40022L10.7692 2.96021C11.4892 2.39021 12.5092 2.39021 13.2292 2.96021L20.2292 8.40022C20.7192 8.78022 20.9992 9.36017 20.9992 9.98017Z" fill="currentColor" /><path d="M13.5 8.25H10.5C10.09 8.25 9.75 7.91 9.75 7.5C9.75 7.09 10.09 6.75 10.5 6.75H13.5C13.91 6.75 14.25 7.09 14.25 7.5C14.25 7.91 13.91 8.25 13.5 8.25Z" fill="currentColor" /><path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11ZM10.75 17.75C10.75 18.16 10.41 18.5 10 18.5C9.59 18.5 9.25 18.16 9.25 17.75V16.25C9.25 15.84 9.59 15.5 10 15.5C10.41 15.5 10.75 15.84 10.75 16.25V17.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHouse2 as IconComponentType).keywords = [
  "house",
  "2",
  "mansion",
  "home",
  "household",
  "put up",
  "firm",
  "family",
  "sign",
  "menage",
  "theatre",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconHouse2 as IconComponentType;