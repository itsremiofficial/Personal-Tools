import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconBrush2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3195_3377)"><path opacity={duotone ? "0.4" : "1"} d="M10.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.8795 3.56022C20.6495 6.63022 17.5595 10.8102 14.9795 12.8802L13.3995 14.1402C13.1995 14.2902 12.9995 14.4102 12.7695 14.5002C12.7695 14.3502 12.7595 14.2002 12.7395 14.0402C12.6495 13.3702 12.3495 12.7402 11.8095 12.2102C11.2595 11.6602 10.5995 11.3502 9.91945 11.2602C9.75945 11.2502 9.59945 11.2402 9.43945 11.2502C9.52945 11.0002 9.65945 10.7702 9.82945 10.5802L11.0895 9.00022C13.1595 6.42022 17.3495 3.31022 20.4095 2.08022C20.8795 1.90022 21.3395 2.04022 21.6295 2.33022C21.9295 2.63022 22.0695 3.09022 21.8795 3.56022Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.7801 14.49C12.7801 15.37 12.4401 16.21 11.8101 16.85C11.3201 17.34 10.6601 17.68 9.87009 17.78L7.90009 17.99C6.83009 18.11 5.91009 17.2 6.03009 16.11L6.24009 14.14C6.43009 12.39 7.89009 11.27 9.45009 11.24C9.61009 11.23 9.77009 11.24 9.93009 11.25C10.6101 11.34 11.2701 11.65 11.8201 12.2C12.3601 12.74 12.6601 13.36 12.7501 14.03C12.7701 14.19 12.7801 14.35 12.7801 14.49Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.8193 11.9799C15.8193 9.88994 14.1293 8.18994 12.0293 8.18994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.1702 5.3L19.6902 14.01C19.6302 14 19.5702 14 19.5002 14H4.50016C4.43016 14 4.37016 14 4.31016 14.01L3.83016 5.3C3.65016 3.53 5.04016 2 6.81016 2H17.1902C18.9602 2 20.3502 3.53 20.1702 5.3Z" fill="currentColor" /><path d="M8.74023 2V7C8.74023 7.41 8.40023 7.75 7.99023 7.75C7.58023 7.75 7.24023 7.41 7.24023 7V2H8.74023Z" fill="currentColor" /><path d="M12.75 2V4C12.75 4.41 12.41 4.75 12 4.75C11.59 4.75 11.25 4.41 11.25 4V2H12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBrush2 as IconComponentType).keywords = [
  "brush",
  "2",
  "sweep",
  "copse",
  "thicket",
  "coppice",
  "brushwood",
  "clash",
  "skirmish",
  "kiss",
  "encounter",
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

export default IconBrush2 as IconComponentType;