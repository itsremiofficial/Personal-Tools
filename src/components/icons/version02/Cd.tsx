import { FC } from 'react';

const IconCd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 13.9997C13.7745 13.9997 14.6699 13.1042 14.6699 11.9997C14.6699 10.8951 13.7745 9.99968 12.6699 9.99968C11.5654 9.99968 10.6699 10.8951 10.6699 11.9997C10.6699 13.1042 11.5654 13.9997 12.6699 13.9997Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.6699 14.5C14.0506 14.5 15.1699 13.3807 15.1699 12C15.1699 10.6193 14.0506 9.5 12.6699 9.5C11.2892 9.5 10.1699 10.6193 10.1699 12C10.1699 13.3807 11.2892 14.5 12.6699 14.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM12.6699 14.5C11.2899 14.5 10.1699 13.38 10.1699 12C10.1699 10.62 11.2899 9.5 12.6699 9.5C14.0499 9.5 15.1699 10.62 15.1699 12C15.1699 13.38 14.0499 14.5 12.6699 14.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCd as IconComponent).keywords = [
  "cd",
  "compact disc",
  "compact disk",
  "candela",
  "standard candle",
  "certificate of deposit",
  "candle",
  "cadmium",
  "atomic number 48",
  "cd-rom"
];

export default IconCd as IconComponent;