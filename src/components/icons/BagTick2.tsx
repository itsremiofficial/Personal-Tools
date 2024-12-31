import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBagTick2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.4395 15L11.0895 15.65C11.2795 15.84 11.5895 15.85 11.7795 15.66L13.5595 14.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.1894 8.8599C15.7994 8.8599 15.4894 8.5499 15.4894 8.1599V6.8799C15.4894 5.8999 15.0694 4.9599 14.3494 4.2999C13.6094 3.6299 12.6594 3.3199 11.6594 3.4099C9.97937 3.5699 8.50938 5.2799 8.50938 7.0599V7.9599C8.50938 8.3499 8.19937 8.6599 7.80937 8.6599C7.41937 8.6599 7.10938 8.3499 7.10938 7.9599V7.0599C7.10938 4.5599 9.12938 2.2499 11.5194 2.0199C12.9094 1.8899 14.2494 2.3299 15.2794 3.2699C16.2994 4.1899 16.8794 5.5099 16.8794 6.8799V8.1599C16.8794 8.5499 16.5694 8.8599 16.1894 8.8599Z" fill="currentColor" /><path d="M19.9597 8.96008C19.1197 8.03008 17.7397 7.58008 15.7197 7.58008H8.27975C6.25975 7.58008 4.87975 8.03008 4.03975 8.96008C3.06975 10.0401 3.09975 11.4801 3.20975 12.4801L3.90975 18.0501C4.11975 20.0001 4.90975 22.0001 9.20975 22.0001H14.7897C19.0897 22.0001 19.8797 20.0001 20.0897 18.0601L20.7897 12.4701C20.8997 11.4801 20.9297 10.0401 19.9597 8.96008ZM11.9997 18.5801C9.90975 18.5801 8.20975 16.8801 8.20975 14.7901C8.20975 12.7001 9.90975 11.0001 11.9997 11.0001C14.0897 11.0001 15.7897 12.7001 15.7897 14.7901C15.7897 16.8801 14.0897 18.5801 11.9997 18.5801Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.0009 18.58C14.0941 18.58 15.7909 16.8832 15.7909 14.79C15.7909 12.6968 14.0941 11 12.0009 11C9.90778 11 8.21094 12.6968 8.21094 14.79C8.21094 16.8832 9.90778 18.58 12.0009 18.58Z" fill="currentColor" /><path d="M11.4309 16.64C11.2409 16.64 11.0509 16.57 10.9009 16.42L9.91086 15.43C9.62086 15.14 9.62086 14.66 9.91086 14.37C10.2009 14.08 10.6809 14.08 10.9709 14.37L11.4509 14.85L13.0509 13.37C13.3509 13.09 13.8309 13.11 14.1109 13.41C14.3909 13.71 14.3709 14.19 14.0709 14.47L11.9409 16.44C11.7909 16.57 11.6109 16.64 11.4309 16.64Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBagTick2 as IconComponentType).keywords = [
  "bag",
  "tick",
  "2",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconBagTick2 as IconComponentType;