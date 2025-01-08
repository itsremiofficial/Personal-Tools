import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconOk: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 11.5C13.7745 11.5 14.6699 10.6046 14.6699 9.5C14.6699 8.39543 13.7745 7.5 12.6699 7.5C11.5654 7.5 10.6699 8.39543 10.6699 9.5C10.6699 10.6046 11.5654 11.5 12.6699 11.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path d="M10.6699 13.5C11.9199 14.13 13.3999 14.13 14.6599 13.51L14.6699 13.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.6699 16.5L12.6699 13.97L14.6699 16.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.67 11.88C13.9845 11.88 15.05 10.8144 15.05 9.5C15.05 8.18556 13.9845 7.12 12.67 7.12C11.3556 7.12 10.29 8.18556 10.29 9.5C10.29 10.8144 11.3556 11.88 12.67 11.88Z" fill="currentColor" /><path d="M15.2597 16.03L14.0597 14.52C14.3897 14.43 14.7197 14.31 15.0297 14.16C15.3897 13.96 15.5197 13.52 15.3297 13.16C15.1397 12.8 14.6897 12.66 14.3297 12.84C13.2897 13.36 12.0497 13.36 11.0097 12.84C10.6397 12.65 10.1897 12.8 9.99972 13.17C9.80972 13.54 9.95968 13.99 10.3297 14.18C10.6297 14.33 10.9497 14.45 11.2697 14.53L10.0797 16.04C9.81968 16.37 9.87974 16.84 10.1997 17.09C10.5297 17.35 10.9997 17.29 11.2497 16.97L12.6597 15.19L14.0697 16.97C14.2197 17.16 14.4397 17.25 14.6597 17.25C14.8197 17.25 14.9897 17.2 15.1197 17.09C15.4597 16.83 15.5097 16.36 15.2597 16.03Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM12.6699 7.12C13.9799 7.12 15.0499 8.19 15.0499 9.5C15.0499 10.81 13.9799 11.88 12.6699 11.88C11.3599 11.88 10.2899 10.81 10.2899 9.5C10.2899 8.19 11.3599 7.12 12.6699 7.12ZM15.1399 17.09C14.9999 17.2 14.8399 17.25 14.6799 17.25C14.4599 17.25 14.2399 17.15 14.0899 16.97L12.6799 15.19L11.2699 16.97C11.0199 17.29 10.5399 17.35 10.2199 17.09C9.89991 16.83 9.83991 16.36 10.0999 16.04L11.2899 14.53C10.9699 14.44 10.6499 14.33 10.3499 14.18C9.97991 13.99 9.8299 13.54 10.0199 13.17C10.1999 12.8 10.6499 12.65 11.0299 12.84C12.0699 13.36 13.3099 13.36 14.3499 12.84C14.7099 12.66 15.1699 12.8 15.3499 13.16C15.5399 13.52 15.4099 13.97 15.0499 14.16C14.7399 14.32 14.4099 14.43 14.0799 14.52L15.2799 16.03C15.5099 16.36 15.4599 16.83 15.1399 17.09Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconOk as IconComponentType).keywords = [
  "ok",
  "approve",
  "sanction",
  "satisfactory",
  "alright",
  "all right",
  "fine",
  "very well",
  "okey",
  "okay"
];

export default IconOk as IconComponentType;