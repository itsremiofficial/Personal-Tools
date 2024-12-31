import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRefreshLeftSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M10.33 7.51025C10.83 7.36025 11.38 7.26025 12 7.26025C14.76 7.26025 17 9.50025 17 12.2603C17 15.0203 14.76 17.2603 12 17.2603C9.24 17.2603 7 15.0203 7 12.2603C7 11.2303 7.31 10.2803 7.84 9.48026" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.62109 7.65024L11.2811 5.74023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.62109 7.65039L11.5611 9.07039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82001C4.17001 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M12.0002 6.50995C11.8602 6.50995 11.7102 6.52994 11.5702 6.53994L11.8502 6.21994C12.1202 5.90994 12.0902 5.42994 11.7802 5.15994C11.4702 4.88994 10.9902 4.91994 10.7202 5.22994L9.05023 7.13994C9.04023 7.14994 9.04023 7.15995 9.03023 7.16995C9.02023 7.17994 9.01022 7.17994 9.01022 7.18994C8.99022 7.21994 8.98024 7.25995 8.96024 7.29995C8.94024 7.34995 8.91022 7.38995 8.90022 7.43994C8.89022 7.48994 8.89023 7.52994 8.88023 7.57994C8.88023 7.62994 8.87022 7.66994 8.87022 7.71994C8.87022 7.76994 8.89023 7.80995 8.91023 7.85995C8.92023 7.90995 8.94024 7.94994 8.96024 7.98994C8.98024 8.02994 9.02023 8.06994 9.05023 8.10994C9.08023 8.13994 9.09022 8.17994 9.12022 8.19994C9.13022 8.20994 9.14022 8.20995 9.15022 8.21995C9.16022 8.22995 9.16023 8.23994 9.17023 8.23994L11.1102 9.65995C11.2402 9.75994 11.4002 9.79995 11.5502 9.79995C11.7802 9.79995 12.0102 9.68994 12.1602 9.48994C12.4002 9.15995 12.3302 8.68994 12.0002 8.43994L11.4402 8.02994C11.6202 8.00994 11.8102 7.98994 12.0002 7.98994C14.3402 7.98994 16.2502 9.89995 16.2502 12.2399C16.2502 14.5799 14.3402 16.4899 12.0002 16.4899C9.66023 16.4899 7.75023 14.5799 7.75023 12.2399C7.75023 11.3899 8.00024 10.5799 8.46024 9.87995C8.69024 9.53995 8.60023 9.06994 8.25023 8.83995C7.91023 8.60995 7.44024 8.69995 7.21024 9.04995C6.58024 9.99995 6.24023 11.0999 6.24023 12.2399C6.24023 15.4099 8.82023 17.9899 11.9902 17.9899C15.1602 17.9899 17.7402 15.4099 17.7402 12.2399C17.7402 9.06994 15.1702 6.50995 12.0002 6.50995Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefreshLeftSquare as IconComponentType).keywords = [
  "refresh",
  "left",
  "square",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconRefreshLeftSquare as IconComponentType;