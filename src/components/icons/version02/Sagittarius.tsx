import { FC } from 'react';

const IconSagittarius: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 3H21.6699V12" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 3L3.66992 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.27002 6.6001L18.0701 17.4001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3598 2.71027C22.2798 2.53027 22.1399 2.38023 21.9499 2.30023C21.8599 2.26023 21.7598 2.24023 21.6598 2.24023H12.6598C12.2498 2.24023 11.9098 2.58023 11.9098 2.99023C11.9098 3.40023 12.2498 3.74023 12.6598 3.74023H19.8498L3.12985 20.4603C2.83985 20.7503 2.83985 21.2303 3.12985 21.5203C3.27985 21.6703 3.46982 21.7402 3.65982 21.7402C3.84982 21.7402 4.03985 21.6703 4.18985 21.5203L20.9098 4.80023V12.0002C20.9098 12.4102 21.2498 12.7502 21.6598 12.7502C22.0698 12.7502 22.4098 12.4102 22.4098 12.0002V3.00024C22.4198 2.90024 22.3998 2.81027 22.3598 2.71027Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.07 18.1501C17.88 18.1501 17.6899 18.08 17.5399 17.93L6.73996 7.13004C6.44996 6.84004 6.44996 6.36004 6.73996 6.07004C7.02996 5.78004 7.50996 5.78004 7.79996 6.07004L18.5999 16.87C18.8899 17.16 18.8899 17.64 18.5999 17.93C18.4499 18.08 18.26 18.1501 18.07 18.1501Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.3599 2.71C22.2799 2.53 22.1399 2.38 21.9499 2.3C21.8599 2.27 21.7699 2.25 21.6699 2.25H12.6699C12.2599 2.25 11.9199 2.59 11.9199 3C11.9199 3.41 12.2599 3.75 12.6699 3.75H19.8599L3.13986 20.47C2.84986 20.76 2.84986 21.24 3.13986 21.53C3.28986 21.68 3.47986 21.75 3.66986 21.75C3.85986 21.75 4.04986 21.68 4.19986 21.53L20.9199 4.81V12C20.9199 12.41 21.2599 12.75 21.6699 12.75C22.0799 12.75 22.4199 12.41 22.4199 12V3C22.4199 2.9 22.3999 2.81 22.3599 2.71Z" fill="currentColor" /><path d="M18.07 18.15C17.88 18.15 17.69 18.08 17.54 17.93L6.73996 7.13004C6.44996 6.84004 6.44996 6.36004 6.73996 6.07004C7.02996 5.78004 7.50996 5.78004 7.79996 6.07004L18.6 16.87C18.89 17.16 18.89 17.64 18.6 17.93C18.45 18.08 18.26 18.15 18.07 18.15Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSagittarius as IconComponent).keywords = [
  "sagittarius",
  "genus sagittarius",
  "sagittarius the archer",
  "archer",
  "scorpio",
  "aquarius",
  "virgo",
  "virgos",
  "capricorn",
  "chiron"
];

export default IconSagittarius as IconComponent;