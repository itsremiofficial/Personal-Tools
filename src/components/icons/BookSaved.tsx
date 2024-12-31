import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBookSaved: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 4.67019V16.7402C22 17.7002 21.22 18.6002 20.26 18.7202L19.93 18.7602C17.75 19.0502 14.39 20.1602 12.47 21.2202C12.21 21.3702 11.78 21.3702 11.51 21.2202L11.47 21.2002C9.54997 20.1502 6.20003 19.0502 4.03003 18.7602L3.73999 18.7202C2.77999 18.6002 2 17.7002 2 16.7402V4.66018C2 3.47018 2.96997 2.57019 4.15997 2.67019C6.25997 2.84019 9.43997 3.90022 11.22 5.01022L11.47 5.16018C11.76 5.34018 12.24 5.34018 12.53 5.16018L12.7 5.05019C13.33 4.66019 14.13 4.27019 15 3.92019C16.31 3.40019 17.77 2.98024 19 2.78024C19.27 2.73024 19.53 2.7002 19.77 2.6802H19.83C21.02 2.5802 22 3.47019 22 4.67019Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 5.49023V20.4902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19 2.78027V8.00024L17 6.67023L15 8.00024V3.92023C16.31 3.40023 17.77 2.98027 19 2.78027Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 5.30019V21.3302C12.17 21.3302 12.35 21.3002 12.49 21.2202L12.53 21.2002C14.45 20.1502 17.8 19.0502 19.97 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402V4.66018C22 3.47018 21.03 2.57019 19.84 2.67019C17.74 2.84019 14.56 3.90022 12.78 5.01022L12.53 5.16018C12.38 5.25018 12.19 5.30019 12 5.30019Z" fill="currentColor" /><path d="M2 4.67002V16.74C2 17.7 2.77999 18.6 3.73999 18.72L4.07001 18.76C6.25001 19.05 9.61003 20.16 11.53 21.22C11.66 21.3 11.82 21.3301 12 21.3301V5.30002C11.81 5.30002 11.62 5.25001 11.47 5.16001L11.3 5.05002C9.51999 3.93002 6.32998 2.86003 4.22998 2.68003H4.16998C2.97998 2.58003 2 3.47002 2 4.67002Z" fill="currentColor" /><path d="M19 2.78027V7.07025C19 7.47025 18.56 7.71023 18.22 7.49023L17 6.68024L15.78 7.49023C15.45 7.71023 15 7.47025 15 7.07025V3.92023C16.31 3.40023 17.77 2.98027 19 2.78027Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBookSaved as IconComponentType).keywords = [
  "book",
  "saved",
  "daybook",
  "record",
  "script",
  "playscript",
  "ledger",
  "account book",
  "volume",
  "reserve",
  "hold",
  "blessed",
  "protected",
  "salvageable",
  "redeemed",
  "reclaimed",
  "preserved",
  "ransomed",
  "rescued",
  "salvation"
];

export default IconBookSaved as IconComponentType;