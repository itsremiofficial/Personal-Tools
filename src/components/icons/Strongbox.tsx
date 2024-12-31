import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStrongbox: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M14.3511 10.9101C14.2511 11.6201 13.8311 12.2201 13.2511 12.5801V14.5601C13.2511 15.2501 12.6911 15.8101 12.0011 15.8101C11.3111 15.8101 10.7511 15.2501 10.7511 14.5601V12.5801C10.1711 12.2201 9.75109 11.6201 9.65109 10.9101C9.63109 10.8001 9.62109 10.6801 9.62109 10.5601C9.62109 9.04012 11.0611 7.86012 12.6411 8.28012C13.4411 8.49012 14.0911 9.14012 14.3011 9.94012C14.3911 10.2701 14.4011 10.6001 14.3511 10.9101Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M21.9996 10.9102H14.3496" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M9.64999 10.9102H2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor" /><path d="M22 10.1599H14.33C14.32 10.0899 14.32 10.0099 14.3 9.93991C14.09 9.13991 13.44 8.48991 12.64 8.27991C11.2 7.89991 9.89001 8.83991 9.67001 10.1599H2V11.6599H9.91C10.11 12.0399 10.39 12.3599 10.75 12.5799V14.5599C10.75 15.2499 11.31 15.8099 12 15.8099C12.69 15.8099 13.25 15.2499 13.25 14.5599V12.5799C13.61 12.3599 13.89 12.0399 14.09 11.6599H22V10.1599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStrongbox as IconComponentType).keywords = [
  "strongbox",
  "deedbox",
  "safe",
  "cashbox",
  "strongroom",
  "coffer",
  "valise",
  "chiffonier",
  "storeroom",
  "vault"
];

export default IconStrongbox as IconComponentType;