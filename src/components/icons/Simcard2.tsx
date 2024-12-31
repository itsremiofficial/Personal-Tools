import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSimcard2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12.6899V18.0799C16 20.4199 14.44 21.9699 12.11 21.9699H5.89C3.56 21.9699 2 20.4199 2 18.0799V10.3099C2 7.96992 3.56 6.41992 5.89 6.41992H9.72C10.75 6.41992 11.74 6.82992 12.47 7.55992L14.86 9.93992C15.59 10.6699 16 11.6599 16 12.6899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 8.25021V13.6402C22 15.9702 20.44 17.5302 18.11 17.5302H16V12.6902C16 11.6602 15.59 10.6702 14.86 9.94021L12.47 7.56021C11.74 6.83021 10.75 6.42021 9.72 6.42021H8V5.86021C8 3.53022 9.56 1.97021 11.89 1.97021H15.72C16.75 1.97021 17.74 2.38021 18.47 3.11021L20.86 5.50021C21.59 6.23021 22 7.22021 22 8.25021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16 12.6899V18.0799C16 20.4199 14.44 21.9699 12.11 21.9699H5.89C3.56 21.9699 2 20.4199 2 18.0799V10.3099C2 7.96992 3.56 6.41992 5.89 6.41992H9.72C10.75 6.41992 11.74 6.82992 12.47 7.55992L14.86 9.93992C15.59 10.6699 16 11.6599 16 12.6899Z" fill="currentColor" /><path d="M22 8.24997V13.64C22 15.97 20.44 17.53 18.11 17.53H16V12.69C16 11.66 15.59 10.67 14.86 9.93997L12.47 7.55997C11.74 6.82997 10.75 6.41997 9.72 6.41997H8V5.85997C8 3.52997 9.56 1.96997 11.89 1.96997H15.72C16.75 1.96997 17.74 2.37997 18.47 3.10997L20.86 5.49997C21.59 6.22997 22 7.21997 22 8.24997Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSimcard2 as IconComponentType).keywords = [
  "simcard",
  "2",
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

export default IconSimcard2 as IconComponentType;