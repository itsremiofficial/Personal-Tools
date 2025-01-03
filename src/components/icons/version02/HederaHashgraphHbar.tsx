import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHederaHashgraphHbar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M8.91992 16.5V7.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.4199 16.5V7.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.91992 10.13H16.4199" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.91992 13.87H16.4199" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16992 17.4V6.6"  strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16992 9.756H17.1699"  strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 24C19.2973 24 24.6699 18.6274 24.6699 12C24.6699 5.37258 19.2973 0 12.6699 0C6.0425 0 0.669922 5.37258 0.669922 12C0.669922 18.6274 6.0425 24 12.6699 24Z" fill="currentColor" /><path d="M17.17 18.3C16.678 18.3 16.27 17.892 16.27 17.4V6.6C16.27 6.108 16.678 5.7 17.17 5.7C17.662 5.7 18.07 6.108 18.07 6.6V17.4C18.07 17.892 17.662 18.3 17.17 18.3Z" fill="currentColor" /><path d="M17.1701 15.144H8.17005C7.67805 15.144 8.27005 14.736 8.27005 14.244C8.27005 13.752 7.67805 13.344 8.17005 13.344H17.1701C17.6621 13.344 18.0701 13.752 18.0701 14.244C18.0701 14.736 17.6621 15.144 17.1701 15.144Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6699 10.88H9.66992V13.13H15.6699V10.88Z" fill="none" /><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM17.1699 16.5C17.1699 16.91 16.8299 17.25 16.4199 17.25C16.0099 17.25 15.6699 16.91 15.6699 16.5V14.62H9.66992V16.5C9.66992 16.91 9.32992 17.25 8.91992 17.25C8.50992 17.25 8.16992 16.91 8.16992 16.5V7.5C8.16992 7.09 8.50992 6.75 8.91992 6.75C9.32992 6.75 9.66992 7.09 9.66992 7.5V9.38H15.6699V7.5C15.6699 7.09 16.0099 6.75 16.4199 6.75C16.8299 6.75 17.1699 7.09 17.1699 7.5V16.5Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHederaHashgraphHbar as IconComponentType).keywords = [
  "hedera",
  "hashgraph",
  "hbar",
  "genus hedera",
  "kalmia",
  "serpens",
  "monstera",
  "linaria",
  "cineraria",
  "stonecrop",
  "rubus",
  "salix",
  "ethereum",
  "avalanche",
  "bitcoin",
  "eos.io",
  "tezos",
  "augur",
  "counterparty",
  "stacks blockchain",
  "algorand",
  "h.q.",
  "h.c.",
  "p.r.b.",
  "c.b.",
  "l. b.",
  "h.r.h.",
  "hts.",
  "bargraph",
  "nbsp"
];

export default IconHederaHashgraphHbar as IconComponentType;