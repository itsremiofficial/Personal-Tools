import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconEnjinCoinEnj: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.4199 8H11.4199C9.76992 8 8.41992 9.35 8.41992 11V12V13C8.41992 14.65 9.76992 16 11.4199 16H16.4199" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4199 12H8.41992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M16.4199 12.75C16.8299 12.75 17.1699 12.41 17.1699 12C17.1699 11.59 16.8299 11.25 16.4199 11.25H9.16992V11C9.16992 9.76 10.1799 8.75 11.4199 8.75H16.4199C16.8299 8.75 17.1699 8.41 17.1699 8C17.1699 7.59 16.8299 7.25 16.4199 7.25H11.4199C9.34992 7.25 7.66992 8.93 7.66992 11V13C7.66992 15.07 9.34992 16.75 11.4199 16.75H16.4199C16.8299 16.75 17.1699 16.41 17.1699 16C17.1699 15.59 16.8299 15.25 16.4199 15.25H11.4199C10.1799 15.25 9.16992 14.24 9.16992 13V12.75H16.4199Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM16.4199 11.25C16.8299 11.25 17.1699 11.59 17.1699 12C17.1699 12.41 16.8299 12.75 16.4199 12.75H9.16992V13C9.16992 14.24 10.1799 15.25 11.4199 15.25H16.4199C16.8299 15.25 17.1699 15.59 17.1699 16C17.1699 16.41 16.8299 16.75 16.4199 16.75H11.4199C9.34992 16.75 7.66992 15.07 7.66992 13V11C7.66992 8.93 9.34992 7.25 11.4199 7.25H16.4199C16.8299 7.25 17.1699 7.59 17.1699 8C17.1699 8.41 16.8299 8.75 16.4199 8.75H11.4199C10.1799 8.75 9.16992 9.76 9.16992 11V11.25H16.4199Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEnjinCoinEnj as IconComponentType).keywords = [
  "enjin",
  "coin",
  "enj",
  "mint",
  "strike",
  "coinage",
  "euro",
  "bullion",
  "voucher",
  "currency",
  "money",
  "suite"
];

export default IconEnjinCoinEnj as IconComponentType;