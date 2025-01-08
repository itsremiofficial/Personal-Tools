import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconScooter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="13.0005" width="6" height="6" rx="3" stroke="currentColor" strokeWidth={width} /><path d="M11 16.0005V14.5005C11 12.6149 11 11.6721 10.4142 11.0863C9.82843 10.5005 8.88562 10.5005 7 10.5005H6.4C6.02856 10.5005 5.84284 10.5005 5.68616 10.5128C3.72466 10.6672 2.1667 12.2251 2.01233 14.1867C2 14.3433 2 14.529 2 14.9005C2 14.9933 2 15.0398 2.00308 15.0789C2.04168 15.5693 2.43116 15.9588 2.92154 15.9974C2.96071 16.0005 3.00714 16.0005 3.1 16.0005H11ZM11 16.0005H16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M9.5 16.0005C9.5 17.6573 8.15685 19.0005 6.5 19.0005C4.84315 19.0005 3.5 17.6573 3.5 16.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12 5.00049H12.5279C13.7307 5.00049 14.3321 5.00049 14.8154 5.29919C15.2987 5.59789 15.5677 6.1358 16.1056 7.21163L19 13.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M18.1426 11.0005L18.8243 10.4983C19.0871 10.3046 19.2186 10.2078 19.31 10.0816C19.3722 9.99568 19.4203 9.90042 19.4526 9.79939C19.5 9.65095 19.5 9.4877 19.5 9.16121C19.5 8.54376 19.5 8.23504 19.3684 8.00454C19.2797 7.84936 19.1511 7.72077 18.996 7.63214C18.7654 7.50049 18.4567 7.50049 17.8393 7.50049H16.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M6.5 19.0005C8.15685 19.0005 9.5 17.6573 9.5 16.0005H3.5C3.5 17.6573 4.84315 19.0005 6.5 19.0005Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M18.8242 10.4983L17.9999 11.0005L16.3573 7.50049H17.8392C18.4567 7.50049 18.7654 7.50049 18.9959 7.63214C19.1511 7.72077 19.2797 7.84936 19.3683 8.00454C19.5 8.23504 19.5 8.54376 19.5 9.16121C19.5 9.4877 19.5 9.65095 19.4525 9.79939C19.4203 9.90042 19.3721 9.99568 19.3099 10.0816C19.2185 10.2078 19.0871 10.3046 18.8242 10.4983L18.8242 10.4983Z" fill="currentColor" /><path d="M13.8643 5.78385C13.5506 5.75142 13.1447 5.75049 12.5279 5.75049H12C11.5858 5.75049 11.25 5.4147 11.25 5.00049C11.25 4.58628 11.5858 4.25049 12 4.25049H12.5647H12.5648C13.1347 4.25047 13.6187 4.25046 14.0186 4.2918C14.4444 4.33583 14.8379 4.43143 15.2097 4.6612C15.5815 4.89097 15.843 5.2002 16.0728 5.56136C16.2886 5.90058 16.505 6.33343 16.7599 6.84324L19.9085 13.1405C21.1213 13.5254 22 14.6603 22 16.0005C22 17.6573 20.6569 19.0005 19 19.0005C17.6021 19.0005 16.4275 18.0444 16.0945 16.7505L3.06023 16.7505C2.99389 16.7505 2.92594 16.7501 2.86271 16.7451C2.00455 16.6776 1.32295 15.996 1.25541 15.1378C1.24992 15.068 1.24996 14.9925 1.25001 14.9197L1.25001 14.8624C1.24999 14.5274 1.24998 14.3143 1.26466 14.1278C1.44798 11.7985 3.29805 9.94845 5.62733 9.76513C5.65166 9.76322 5.67643 9.76156 5.70187 9.76011C5.84708 9.75185 6.01392 9.75067 6.24176 9.75051L7.05202 9.75049C7.95049 9.75046 8.69972 9.75044 9.29449 9.8304C9.92229 9.91481 10.4891 10.1005 10.9446 10.5559C11.4 11.0114 11.5857 11.5782 11.6701 12.206C11.7501 12.8008 11.75 13.55 11.75 14.4485L11.75 15.2505H16.0945C16.3627 14.2085 17.1767 13.3855 18.2135 13.1046L15.4348 7.54705C15.1589 6.99536 14.9765 6.63269 14.8072 6.36661C14.6473 6.11519 14.5326 6.00611 14.4211 5.93718C14.3096 5.86825 14.1607 5.8145 13.8643 5.78385Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8643 5.78385C13.5506 5.75141 13.1447 5.75049 12.5279 5.75049H12C11.5858 5.75049 11.25 5.4147 11.25 5.00049C11.25 4.58628 11.5858 4.25049 12 4.25049H12.5648H12.5648C13.1348 4.25047 13.6187 4.25045 14.0186 4.2918C14.4444 4.33583 14.8379 4.43143 15.2097 4.6612C15.5815 4.89097 15.843 5.20019 16.0728 5.56136C16.2754 5.87982 16.4785 6.28079 16.7135 6.75049L17.8682 6.75049C18.1521 6.75047 18.4127 6.75045 18.6298 6.76995C18.8645 6.79104 19.1203 6.83946 19.3679 6.98088C19.6395 7.13598 19.8645 7.36101 20.0196 7.63258C20.161 7.88017 20.2095 8.13598 20.2306 8.37066C20.2501 8.58782 20.25 8.84844 20.25 9.13227V9.16121L20.2501 9.22575C20.2507 9.48552 20.2514 9.76364 20.167 10.0276C20.1106 10.2044 20.0263 10.3711 19.9175 10.5214C19.755 10.7459 19.5307 10.9103 19.3212 11.0639L19.2691 11.1021L18.9916 11.3066L19.4787 12.2808C21.3237 12.5158 22.75 14.0916 22.75 16.0005C22.75 18.0716 21.0711 19.7505 19 19.7505C17.1858 19.7505 15.6725 18.4622 15.325 16.7505H10.175C9.82755 18.4622 8.31423 19.7505 6.50002 19.7505C4.68264 19.7505 3.16722 18.4577 2.82323 16.7415C1.98372 16.6565 1.32191 15.9827 1.25541 15.1378C1.24992 15.068 1.24996 14.9925 1.25001 14.9197L1.25002 14.9005L1.25001 14.8624C1.24999 14.5273 1.24998 14.3143 1.26466 14.1278C1.44798 11.7985 3.29805 9.94845 5.62733 9.76513C5.81381 9.75046 6.02685 9.75047 6.36188 9.75049H6.36191L6.40002 9.75049L7.05201 9.75049C7.95049 9.75046 8.69971 9.75043 9.29449 9.8304C9.92229 9.91481 10.4891 10.1005 10.9446 10.5559C11.4 11.0114 11.5857 11.5782 11.6701 12.206C11.7501 12.8008 11.75 13.55 11.75 14.4485V14.4485L11.75 15.2505H15.325C15.5973 13.9094 16.5851 12.8282 17.8727 12.4229L15.4348 7.54705C15.1589 6.99536 14.9766 6.63269 14.8073 6.36661C14.6473 6.11519 14.5326 6.00611 14.4211 5.93718C14.3096 5.86825 14.1608 5.8145 13.8643 5.78385Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScooter as IconComponentType).keywords = [
  "scooter",
  "motor scooter",
  "scoter",
  "motorcycle",
  "sidecar",
  "motorbike",
  "bike",
  "wagon",
  "moped",
  "tricycle"
];

export default IconScooter as IconComponentType;