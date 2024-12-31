import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPresentionChart: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.90024 17H18.0902C19.9902 17 20.9902 16 20.9902 14.1V2H2.99023V14.1C3.00023 16 4.00024 17 5.90024 17Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 2H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8 22L12 20M12 20V17M12 20L16 22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21 2V14.1C21 16 20 17 18.1 17H5.89999C3.99999 17 3 16 3 14.1V2H21Z" fill="currentColor" /><path d="M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z" fill="currentColor" /><path d="M16.6703 22.34C16.5403 22.6 16.2703 22.75 16.0003 22.75C15.8903 22.75 15.7703 22.72 15.6703 22.67L12.0003 20.84L8.33025 22.67C8.23025 22.72 8.11027 22.75 8.00027 22.75C7.73027 22.75 7.46025 22.6 7.33025 22.34C7.14025 21.96 7.29028 21.51 7.67028 21.33L11.2503 19.54V17H12.7503V19.54L16.3303 21.33C16.7103 21.51 16.8603 21.96 16.6703 22.34Z" fill="currentColor" /><path d="M7.5009 11.7499C7.2909 11.7499 7.07092 11.6599 6.92092 11.4799C6.65092 11.1599 6.70089 10.6899 7.02089 10.4199L10.1709 7.78993C10.4609 7.54993 10.8309 7.44994 11.1809 7.50994C11.5409 7.56994 11.8509 7.78991 12.0409 8.10991L13.0909 9.85991L16.0209 7.41994C16.3409 7.14994 16.8109 7.19992 17.0809 7.51992C17.3509 7.83992 17.3009 8.30991 16.9809 8.57991L13.8309 11.2099C13.5409 11.4499 13.1709 11.5499 12.8209 11.4899C12.4609 11.4299 12.1509 11.2099 11.9609 10.8899L10.9109 9.13994L7.98091 11.5799C7.84091 11.6899 7.6709 11.7499 7.5009 11.7499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPresentionChart as IconComponentType).keywords = [
  "presention",
  "chart",
  "presension",
  "presensation",
  "præterition",
  "præsumption",
  "prævision",
  "præsentation",
  "prejudice",
  "preexistency",
  "predjudice",
  "map",
  "cartography",
  "mapping",
  "cartographic",
  "plan",
  "diagram",
  "graphical",
  "diagrammatic",
  "blueprint"
];

export default IconPresentionChart as IconComponentType;