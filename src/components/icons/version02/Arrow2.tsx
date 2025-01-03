import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconArrow2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M17.9502 10.45L21.6702 6.72998L17.9502 3.01001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.66992 6.72998H21.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M7.38989 13.55L3.66992 17.2701L7.38989 20.9901" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M21.6699 17.27H3.66992" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.4199 6.72995C22.4199 6.52995 22.34 6.33998 22.2 6.19998L18.4799 2.47995C18.1899 2.18995 17.7099 2.18995 17.4199 2.47995C17.1299 2.76995 17.1299 3.24995 17.4199 3.53995L19.8699 5.98996H3.66992C3.25992 5.98996 2.91992 6.32996 2.91992 6.73996C2.91992 7.14996 3.25992 7.48996 3.66992 7.48996H19.8599L17.4199 9.92996C17.1299 10.22 17.1299 10.7 17.4199 10.99C17.5699 11.14 17.76 11.21 17.95 11.21C18.14 11.21 18.3299 11.14 18.4799 10.99L22.1899 7.28C22.2599 7.21 22.3199 7.11999 22.3599 7.01999C22.3599 7.00999 22.3599 6.99996 22.3699 6.98996C22.3999 6.89996 22.4199 6.81995 22.4199 6.72995Z" fill="currentColor" /><path d="M21.6699 16.52H5.47992L7.91992 14.08C8.20992 13.79 8.20992 13.31 7.91992 13.02C7.62992 12.73 7.14992 12.73 6.85992 13.02L3.1499 16.73C3.0799 16.8 3.01992 16.89 2.97992 16.99C2.97992 17 2.97991 17.01 2.96991 17.02C2.93991 17.1 2.91992 17.19 2.91992 17.28C2.91992 17.48 2.99989 17.67 3.13989 17.81L6.85992 21.53C7.00992 21.68 7.19989 21.75 7.38989 21.75C7.57989 21.75 7.76992 21.68 7.91992 21.53C8.20992 21.24 8.20992 20.7599 7.91992 20.4699L5.46991 18.02H21.6699C22.0799 18.02 22.4199 17.68 22.4199 17.27C22.4199 16.86 22.0799 16.52 21.6699 16.52Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4199 6.72995C22.4199 6.52995 22.3399 6.33995 22.1999 6.19995L18.4799 2.47995C18.1899 2.18995 17.7099 2.18995 17.4199 2.47995C17.1299 2.76995 17.1299 3.24995 17.4199 3.53995L19.8699 5.98995H3.66992C3.25992 5.98995 2.91992 6.32995 2.91992 6.73995C2.91992 7.14995 3.25992 7.47995 3.66992 7.47995H19.8599L17.4199 9.91995C17.1299 10.21 17.1299 10.69 17.4199 10.98C17.5699 11.13 17.7599 11.2 17.9499 11.2C18.1399 11.2 18.3299 11.13 18.4799 10.98L22.1899 7.26995C22.2599 7.19995 22.3199 7.10995 22.3599 7.00995C22.3599 6.99995 22.3599 6.98995 22.3699 6.97995C22.3999 6.89995 22.4199 6.81995 22.4199 6.72995Z" fill="currentColor" /><path d="M21.6699 16.52H5.47992L7.91992 14.08C8.20992 13.79 8.20992 13.31 7.91992 13.02C7.62992 12.73 7.14992 12.73 6.85992 13.02L3.14992 16.73C3.07992 16.8 3.01992 16.89 2.97992 16.99C2.97992 17 2.97992 17.01 2.96992 17.02C2.93992 17.1 2.91992 17.19 2.91992 17.28C2.91992 17.48 2.99992 17.67 3.13992 17.81L6.85992 21.53C7.00992 21.68 7.19992 21.75 7.38992 21.75C7.57992 21.75 7.76992 21.68 7.91992 21.53C8.20992 21.24 8.20992 20.76 7.91992 20.47L5.46992 18.02H21.6699C22.0799 18.02 22.4199 17.68 22.4199 17.27C22.4199 16.86 22.0799 16.52 21.6699 16.52Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrow2 as IconComponentType).keywords = [
  "arrow",
  "2",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
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

export default IconArrow2 as IconComponentType;