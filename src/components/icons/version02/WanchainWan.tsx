import { FC } from 'react';

const IconWanchainWan: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.1699 8.85004L12.6699 6.15002L8.16992 8.85004" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16992 9V15.15L12.6699 12.45L17.1699 15.15V9" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M14.9199 16.2L12.6699 17.7L10.4199 16.2" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M17.1697 9.16V12.99C17.1697 13.77 16.3197 14.25 15.6597 13.85L13.1897 12.37C12.8697 12.18 12.4797 12.18 12.1597 12.37L9.6897 13.85C9.0197 14.25 8.17969 13.77 8.17969 12.99V9.16C8.17969 8.82 8.35969 8.5 8.63969 8.32L12.1397 6.1C12.4697 5.89 12.8797 5.89 13.2097 6.1L16.7097 8.32C16.9897 8.5 17.1697 8.82 17.1697 9.16Z" fill="currentColor" /><path d="M12.6699 18.06C12.5199 18.06 12.3799 18.02 12.2499 17.93L9.99987 16.43C9.65987 16.2 9.55986 15.73 9.78986 15.39C10.0199 15.04 10.4899 14.95 10.8299 15.18L12.6599 16.4L14.4899 15.18C14.8299 14.95 15.2999 15.04 15.5299 15.39C15.7599 15.73 15.6699 16.2 15.3199 16.43L13.0699 17.93C12.9599 18.02 12.8199 18.06 12.6699 18.06Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM15.3399 16.43L13.0899 17.93C12.9599 18.01 12.8199 18.06 12.6699 18.06C12.5199 18.06 12.3799 18.02 12.2499 17.93L9.99992 16.43C9.65992 16.2 9.55992 15.73 9.78992 15.39C10.0199 15.04 10.4899 14.95 10.8299 15.18L12.6599 16.4L14.4899 15.18C14.8299 14.95 15.2999 15.04 15.5299 15.39C15.7699 15.74 15.6799 16.2 15.3399 16.43ZM17.1699 12.99C17.1699 13.77 16.3199 14.25 15.6599 13.85L13.1899 12.37C12.8699 12.18 12.4799 12.18 12.1599 12.37L9.68993 13.85C9.01993 14.25 8.17992 13.77 8.17992 12.99V9.16C8.17992 8.82 8.35992 8.50001 8.63992 8.32001L12.1399 6.10001C12.4699 5.89001 12.8799 5.89001 13.2099 6.10001L16.7099 8.32001C16.9999 8.50001 17.1699 8.82 17.1699 9.16V12.99Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWanchainWan as IconComponent).keywords = [
  "wanchain",
  "wan",
  "pallid",
  "weak",
  "pale",
  "unanimated",
  "colourless",
  "colorless",
  "wide area network",
  "sallow",
  "ashy"
];

export default IconWanchainWan as IconComponent;