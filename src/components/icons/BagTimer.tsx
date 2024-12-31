import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBagTimer: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.25 13.75V14.68C12.25 15.03 12.07 15.36 11.76 15.54L11 16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1894 8.8599C15.7994 8.8599 15.4894 8.5499 15.4894 8.1599V6.8799C15.4894 5.8999 15.0694 4.9599 14.3494 4.2999C13.6094 3.6299 12.6594 3.3199 11.6594 3.4099C9.97937 3.5699 8.50938 5.2799 8.50938 7.0599V7.9599C8.50938 8.3499 8.19937 8.6599 7.80937 8.6599C7.41937 8.6599 7.10938 8.3499 7.10938 7.9599V7.0599C7.10938 4.5599 9.12938 2.2499 11.5194 2.0199C12.9094 1.8899 14.2494 2.3299 15.2794 3.2699C16.2994 4.1899 16.8794 5.5099 16.8794 6.8799V8.1599C16.8794 8.5499 16.5694 8.8599 16.1894 8.8599Z" fill="currentColor" /><path d="M19.9597 8.96008C19.1197 8.03008 17.7397 7.58008 15.7197 7.58008H8.27975C6.25975 7.58008 4.87975 8.03008 4.03975 8.96008C3.06975 10.0401 3.09975 11.4801 3.20975 12.4801L3.90975 18.0501C4.11975 20.0001 4.90975 22.0001 9.20975 22.0001H14.7897C19.0897 22.0001 19.8797 20.0001 20.0897 18.0601L20.7897 12.4701C20.8997 11.4801 20.9297 10.0401 19.9597 8.96008ZM11.9997 18.5801C9.90975 18.5801 8.20975 16.8801 8.20975 14.7901C8.20975 12.7001 9.90975 11.0001 11.9997 11.0001C14.0897 11.0001 15.7897 12.7001 15.7897 14.7901C15.7897 16.8801 14.0897 18.5801 11.9997 18.5801Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.7909 14.79C15.7909 16.88 14.0909 18.58 12.0009 18.58C9.91094 18.58 8.21094 16.88 8.21094 14.79C8.21094 12.7 9.91094 11 12.0009 11C14.0909 11 15.7909 12.7 15.7909 14.79Z" fill="currentColor" /><path d="M10.9999 16.5801C10.7499 16.5801 10.4999 16.4501 10.3599 16.2201C10.1499 15.8701 10.2599 15.4001 10.6199 15.1901L11.5099 14.6601V13.5801C11.5099 13.1701 11.8499 12.8301 12.2599 12.8301C12.6699 12.8301 12.9999 13.1601 12.9999 13.5801V15.0801C12.9999 15.3401 12.8599 15.5901 12.6399 15.7201L11.3899 16.4701C11.2699 16.5401 11.1299 16.5801 10.9999 16.5801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBagTimer as IconComponentType).keywords = [
  "bag",
  "timer",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "clocking",
  "timekeeping",
  "timekeeper",
  "clock",
  "stopwatch",
  "scheduler",
  "timing",
  "developer",
  "bomb"
];

export default IconBagTimer as IconComponentType;