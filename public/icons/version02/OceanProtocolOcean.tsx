import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconOceanProtocolOcean: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 3.20001V3.21001" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 7.70001V7.71001" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 11.7V11.71" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 15.7V15.71" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 19.2V19.21" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22.2V22.21" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.16992 7.70001V7.71001" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.1699 7.70001V7.71001" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.1699 11.7V11.71" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 11.7V11.71" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.1699 14.7V14.71" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.1699 17.7V17.71" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 14.7V14.71" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 17.7V17.71" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.46973 9.70001V9.71001" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.41992 5.5V5.51" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8701 9.70001V9.71001" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.9199 5.5V5.51" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.46973 13.7V13.71" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.46973 16.7V16.71" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.46973 19.7V19.71" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.8701 13.7V13.71" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.8701 16.7V16.71" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.8701 19.7V19.71" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M12.6699 4.74997C12.5699 4.74997 12.4699 4.73997 12.3799 4.71997C12.2799 4.69997 12.1899 4.66997 12.0999 4.63997C12.0099 4.59997 11.9199 4.54997 11.8399 4.49997C11.7599 4.43997 11.6799 4.37997 11.6099 4.30997C11.3299 4.02997 11.1699 3.64997 11.1699 3.24997C11.1699 2.84997 11.3299 2.46997 11.6099 2.18997C11.6799 2.11997 11.7599 2.05997 11.8399 1.99997C11.9199 1.94997 12.0099 1.89997 12.0999 1.86997C12.1899 1.82997 12.2799 1.79997 12.3799 1.77997C12.8599 1.67997 13.3799 1.83997 13.7299 2.18997C14.0099 2.46997 14.1699 2.84997 14.1699 3.24997C14.1699 3.64997 14.0099 4.02997 13.7299 4.30997C13.4499 4.58997 13.0599 4.74997 12.6699 4.74997Z" fill="currentColor" /><path d="M12.6699 9.25C12.5699 9.25 12.4699 9.24 12.3799 9.22C12.2799 9.2 12.1899 9.17 12.0999 9.14C12.0099 9.1 11.9199 9.05 11.8399 9C11.7599 8.94 11.6799 8.88 11.6099 8.81C11.3299 8.53 11.1699 8.15 11.1699 7.75C11.1699 7.35 11.3299 6.97 11.6099 6.69C11.6799 6.62 11.7599 6.56 11.8399 6.5C11.9199 6.45 12.0099 6.4 12.0999 6.37C12.1899 6.33 12.2799 6.3 12.3799 6.28C12.5699 6.24 12.7699 6.24 12.9599 6.28C13.0599 6.3 13.1499 6.33 13.2399 6.37C13.3299 6.4 13.4199 6.45 13.4999 6.5C13.5799 6.56 13.6599 6.62 13.7299 6.69C14.0099 6.97 14.1699 7.35 14.1699 7.75C14.1699 8.15 14.0099 8.53 13.7299 8.81C13.6599 8.88 13.5799 8.94 13.4999 9C13.4199 9.05 13.3299 9.1 13.2399 9.14C13.1499 9.17 13.0599 9.2 12.9599 9.22C12.8699 9.24 12.7699 9.25 12.6699 9.25Z" fill="currentColor" /><path d="M12.6699 13.25C12.5699 13.25 12.4699 13.24 12.3799 13.22C12.2799 13.2 12.1899 13.17 12.0999 13.14C12.0099 13.1 11.9199 13.05 11.8399 13C11.7599 12.94 11.6799 12.88 11.6099 12.81C11.5399 12.74 11.4799 12.67 11.4199 12.58C11.3699 12.5 11.3199 12.41 11.2799 12.32C11.2499 12.23 11.22 12.14 11.2 12.04C11.18 11.95 11.1699 11.85 11.1699 11.75C11.1699 11.35 11.3299 10.97 11.6099 10.69C11.6799 10.62 11.7599 10.56 11.8399 10.5C11.9199 10.45 12.0099 10.4 12.0999 10.36C12.1899 10.33 12.2799 10.3 12.3799 10.28C12.8599 10.18 13.3799 10.34 13.7299 10.69C14.0099 10.97 14.1699 11.35 14.1699 11.75C14.1699 11.85 14.1599 11.95 14.1399 12.04C14.1199 12.14 14.0899 12.23 14.0499 12.32C14.0199 12.41 13.9699 12.5 13.9199 12.58C13.8599 12.67 13.7999 12.74 13.7299 12.81C13.6599 12.88 13.5799 12.94 13.4999 13C13.4199 13.05 13.3299 13.1 13.2399 13.14C13.1499 13.17 13.0599 13.2 12.9599 13.22C12.8699 13.24 12.7699 13.25 12.6699 13.25Z" fill="currentColor" /><g opacity={duotone ? "0.6" : "1"}><path opacity={duotone ? "0.6" : "1"} d="M12.6699 16.75C12.4099 16.75 12.1499 16.64 11.9599 16.46C11.7799 16.27 11.6699 16.01 11.6699 15.75C11.6699 15.49 11.7799 15.23 11.9599 15.04C12.1899 14.81 12.5399 14.71 12.8599 14.77C12.9299 14.78 12.9899 14.8 13.0499 14.83C13.1099 14.85 13.1699 14.88 13.2199 14.92C13.2799 14.96 13.3299 15 13.3799 15.04C13.5599 15.23 13.6699 15.49 13.6699 15.75C13.6699 16.01 13.5599 16.27 13.3799 16.46C13.3299 16.5 13.2799 16.54 13.2199 16.58C13.1699 16.62 13.1099 16.65 13.0499 16.67C12.9899 16.7 12.9299 16.72 12.8599 16.73C12.7999 16.74 12.7299 16.75 12.6699 16.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M12.6699 20C12.5699 20 12.4699 19.98 12.3799 19.94C12.2899 19.9 12.2099 19.85 12.1399 19.78C12.0699 19.71 12.0099 19.63 11.9799 19.54C11.9399 19.45 11.9199 19.35 11.9199 19.25C11.9199 19.05 11.9999 18.86 12.1399 18.72C12.2099 18.65 12.2899 18.6 12.3799 18.56C12.5699 18.48 12.7699 18.48 12.9599 18.56C13.0499 18.6 13.13 18.65 13.2 18.72C13.27 18.79 13.3199 18.87 13.3599 18.96C13.3999 19.05 13.4199 19.15 13.4199 19.25C13.4199 19.35 13.3999 19.45 13.3599 19.54C13.3199 19.63 13.27 19.71 13.2 19.78C13.13 19.85 13.0499 19.9 12.9599 19.94C12.8599 19.98 12.7699 20 12.6699 20Z" fill="currentColor" /></g><g opacity={duotone ? "0.2" : "1"}><path opacity={duotone ? "0.2" : "1"} d="M12.6699 22.07C12.5399 22.07 12.4099 22.02 12.3199 21.92C12.2199 21.83 12.1699 21.7 12.1699 21.57C12.1699 21.44 12.2199 21.31 12.3199 21.22C12.4999 21.03 12.8399 21.03 13.0199 21.22C13.1199 21.31 13.1699 21.44 13.1699 21.57C13.1699 21.7 13.1199 21.83 13.0199 21.92C12.9299 22.02 12.7999 22.07 12.6699 22.07Z" fill="currentColor" /></g><path d="M4.16992 9.25002C3.76992 9.25002 3.38992 9.09002 3.10992 8.81002C2.82992 8.53002 2.66992 8.15002 2.66992 7.75002C2.66992 7.36002 2.82992 6.97002 3.10992 6.69002C3.65992 6.13002 4.66992 6.13002 5.22992 6.69002C5.50992 6.97002 5.66992 7.36002 5.66992 7.75002C5.66992 8.15002 5.50992 8.53002 5.22992 8.81002C5.15992 8.88002 5.07994 8.94002 4.99994 9.00002C4.91994 9.05002 4.82993 9.10002 4.73993 9.13002C4.64993 9.17002 4.5599 9.20002 4.4599 9.22002C4.3699 9.24002 4.26992 9.25002 4.16992 9.25002Z" fill="currentColor" /><path d="M21.1699 9.25C20.7799 9.25 20.3899 9.09 20.1099 8.81C19.8299 8.53 19.6699 8.14 19.6699 7.75C19.6699 7.65 19.68 7.55 19.7 7.46C19.72 7.36 19.7499 7.27 19.7799 7.18C19.8199 7.09 19.8699 7 19.9199 6.92C19.9799 6.84 20.0399 6.76 20.1099 6.69C20.1799 6.62 20.2599 6.56 20.3399 6.5C20.4199 6.45 20.5099 6.4 20.5999 6.37C20.6899 6.33 20.7799 6.3 20.8799 6.28C21.0699 6.24 21.2699 6.24 21.4599 6.28C21.5599 6.3 21.6499 6.33 21.7399 6.37C21.8299 6.4 21.9199 6.45 21.9999 6.5C22.0799 6.56 22.1599 6.62 22.2299 6.69C22.2999 6.76 22.3599 6.84 22.4199 6.92C22.4699 7 22.5199 7.09 22.5499 7.18C22.5899 7.27 22.6199 7.36 22.6399 7.46C22.6599 7.55 22.6699 7.65 22.6699 7.75C22.6699 8.15 22.5099 8.53 22.2299 8.81C22.1599 8.88 22.0799 8.94 21.9999 9C21.9199 9.05 21.8299 9.1 21.7399 9.14C21.6499 9.17 21.5599 9.2 21.4599 9.22C21.3599 9.24 21.2699 9.25 21.1699 9.25Z" fill="currentColor" /><g opacity={duotone ? "0.6" : "1"}><path opacity={duotone ? "0.6" : "1"} d="M21.1699 12.75C21.1099 12.75 21.0399 12.74 20.9799 12.73C20.9099 12.72 20.8499 12.7 20.7899 12.67C20.7299 12.65 20.6699 12.62 20.6099 12.58C20.5599 12.55 20.5099 12.5 20.4599 12.46C20.4199 12.41 20.3699 12.36 20.3399 12.31C20.2999 12.25 20.2699 12.19 20.2499 12.13C20.2199 12.07 20.1999 12.01 20.1899 11.95C20.1799 11.88 20.1699 11.82 20.1699 11.75C20.1699 11.49 20.2799 11.23 20.4599 11.04C20.5099 11 20.5599 10.96 20.6099 10.92C20.6699 10.88 20.7299 10.85 20.7899 10.83C20.8499 10.8 20.9099 10.78 20.9799 10.77C21.0999 10.74 21.2299 10.74 21.3599 10.77C21.4299 10.78 21.4899 10.8 21.5499 10.83C21.6099 10.85 21.6699 10.88 21.7199 10.92C21.7799 10.96 21.8299 11 21.8799 11.04C22.0599 11.23 22.1699 11.49 22.1699 11.75C22.1699 11.82 22.1599 11.88 22.1499 11.95C22.1399 12.01 22.1199 12.07 22.0899 12.13C22.0699 12.19 22.0399 12.25 21.9999 12.31C21.9599 12.36 21.9199 12.41 21.8799 12.46C21.8299 12.5 21.7799 12.55 21.7199 12.58C21.6699 12.62 21.6099 12.65 21.5499 12.67C21.4899 12.7 21.4299 12.72 21.3599 12.73C21.2999 12.74 21.2299 12.75 21.1699 12.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.6" : "1"}><path opacity={duotone ? "0.6" : "1"} d="M4.16992 12.75C3.90992 12.75 3.6499 12.64 3.4599 12.46C3.2799 12.27 3.16992 12.01 3.16992 11.75C3.16992 11.49 3.2799 11.23 3.4599 11.04C3.7399 10.76 4.17993 10.67 4.54993 10.83C4.67993 10.88 4.77994 10.95 4.87994 11.04C5.05994 11.23 5.16992 11.49 5.16992 11.75C5.16992 12.01 5.05994 12.27 4.87994 12.46C4.68994 12.64 4.42992 12.75 4.16992 12.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M21.1699 15.5C20.9699 15.5 20.7799 15.42 20.6399 15.28C20.4999 15.14 20.4199 14.95 20.4199 14.75C20.4199 14.65 20.4399 14.56 20.4799 14.46C20.5199 14.37 20.5699 14.29 20.6399 14.22C20.8499 14.01 21.1799 13.94 21.4599 14.06C21.5499 14.1 21.63 14.15 21.7 14.22C21.77 14.29 21.8199 14.37 21.8599 14.46C21.8999 14.56 21.9199 14.65 21.9199 14.75C21.9199 14.95 21.84 15.14 21.7 15.28C21.63 15.35 21.5499 15.4 21.4599 15.44C21.3599 15.48 21.2699 15.5 21.1699 15.5Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M4.16992 15.5C3.96992 15.5 3.77989 15.42 3.63989 15.28C3.56989 15.21 3.50992 15.13 3.47992 15.04C3.43992 14.95 3.41992 14.85 3.41992 14.75C3.41992 14.65 3.43992 14.56 3.47992 14.46C3.50992 14.37 3.56989 14.29 3.63989 14.22C3.90989 13.94 4.41995 13.94 4.69995 14.22C4.76995 14.29 4.81992 14.37 4.85992 14.46C4.89992 14.56 4.91992 14.65 4.91992 14.75C4.91992 14.85 4.89992 14.95 4.85992 15.04C4.81992 15.13 4.76995 15.21 4.69995 15.28C4.55995 15.42 4.36992 15.5 4.16992 15.5Z" fill="currentColor" /></g><g opacity={duotone ? "0.2" : "1"}><path opacity={duotone ? "0.2" : "1"} d="M21.1699 18C21.0999 18 21.0399 17.99 20.9799 17.96C20.9199 17.94 20.8599 17.9 20.8199 17.85C20.7199 17.76 20.6699 17.63 20.6699 17.5C20.6699 17.37 20.7199 17.24 20.8199 17.15C20.9999 16.96 21.3399 16.96 21.5199 17.15C21.6199 17.24 21.6699 17.37 21.6699 17.5C21.6699 17.63 21.6199 17.76 21.5199 17.85C21.4299 17.95 21.2999 18 21.1699 18Z" fill="currentColor" /></g><g opacity={duotone ? "0.2" : "1"}><path opacity={duotone ? "0.2" : "1"} d="M4.16992 18C4.03992 18 3.90995 17.95 3.81995 17.85C3.71995 17.76 3.66992 17.63 3.66992 17.5C3.66992 17.37 3.71995 17.24 3.81995 17.15C3.99995 16.96 4.3399 16.96 4.5199 17.15C4.6199 17.24 4.66992 17.37 4.66992 17.5C4.66992 17.63 4.6199 17.76 4.5199 17.85C4.4299 17.95 4.29992 18 4.16992 18Z" fill="currentColor" /></g><path d="M8.41992 7.00002C8.31992 7.00002 8.21994 6.99002 8.12994 6.97002C8.02994 6.95002 7.93991 6.92002 7.84991 6.88002C7.74991 6.85002 7.6699 6.80002 7.5899 6.75002C7.4999 6.69002 7.42992 6.63002 7.35992 6.56002C7.07992 6.28002 6.91992 5.89002 6.91992 5.50002C6.91992 5.11002 7.07992 4.72002 7.35992 4.44002C7.91992 3.88002 8.91992 3.88002 9.47992 4.44002C9.75992 4.72002 9.91992 5.10002 9.91992 5.50002C9.91992 5.90002 9.75992 6.28002 9.47992 6.56002C9.40992 6.63002 9.32994 6.69002 9.24994 6.75002C9.16994 6.80002 9.07993 6.85002 8.98993 6.88002C8.89993 6.92002 8.8099 6.95002 8.7099 6.97002C8.6199 6.99002 8.51992 7.00002 8.41992 7.00002Z" fill="currentColor" /><path d="M16.9199 7C16.8199 7 16.7199 6.99 16.6299 6.97C16.5299 6.95 16.4399 6.92 16.3499 6.88C16.2599 6.85 16.1699 6.8 16.0899 6.75C16.0099 6.69 15.9299 6.63 15.8599 6.56C15.7899 6.49 15.7299 6.41 15.6699 6.33C15.6199 6.25 15.5699 6.16 15.5299 6.07C15.4999 5.98 15.47 5.89 15.45 5.79C15.43 5.7 15.4199 5.6 15.4199 5.5C15.4199 5.11 15.5799 4.72 15.8599 4.44C15.9299 4.37 16.0099 4.31 16.0899 4.25C16.1699 4.2 16.2599 4.15 16.3499 4.12C16.4399 4.08 16.5299 4.05 16.6299 4.03C16.8199 3.99 17.0199 3.99 17.2099 4.03C17.3099 4.05 17.3999 4.08 17.4899 4.12C17.5799 4.15 17.6699 4.2 17.7499 4.25C17.8299 4.31 17.9099 4.37 17.9799 4.44C18.2599 4.72 18.4199 5.11 18.4199 5.5C18.4199 5.6 18.4099 5.7 18.3899 5.79C18.3699 5.89 18.3399 5.98 18.3099 6.07C18.2699 6.16 18.2199 6.25 18.1699 6.33C18.1099 6.41 18.0499 6.49 17.9799 6.56C17.9099 6.63 17.8299 6.69 17.7499 6.75C17.6699 6.8 17.5799 6.85 17.4899 6.88C17.3999 6.92 17.3099 6.95 17.2099 6.97C17.1199 6.99 17.0199 7 16.9199 7Z" fill="currentColor" /><path d="M8.41992 11.25C8.31992 11.25 8.21994 11.24 8.12994 11.22C8.02994 11.2 7.93991 11.17 7.84991 11.14C7.75991 11.1 7.6699 11.05 7.5899 11C7.4999 10.94 7.42992 10.88 7.35992 10.81C7.07992 10.53 6.91992 10.14 6.91992 9.75002C6.91992 9.35002 7.07992 8.97002 7.35992 8.69002C7.91992 8.13002 8.91992 8.13002 9.47992 8.69002C9.75992 8.97002 9.91992 9.35002 9.91992 9.75002C9.91992 10.15 9.75992 10.53 9.47992 10.81C9.19992 11.09 8.80992 11.25 8.41992 11.25Z" fill="currentColor" /><path d="M16.9199 11.25C16.8199 11.25 16.7199 11.24 16.6299 11.22C16.5299 11.2 16.4399 11.17 16.3499 11.13C16.2599 11.1 16.1699 11.05 16.0899 11C16.0099 10.94 15.9299 10.88 15.8599 10.81C15.7899 10.74 15.7299 10.66 15.6699 10.58C15.6199 10.5 15.5699 10.41 15.5299 10.32C15.4999 10.23 15.47 10.14 15.45 10.04C15.43 9.95 15.4199 9.85 15.4199 9.75C15.4199 9.36 15.5799 8.97 15.8599 8.69C15.9299 8.62 16.0099 8.56 16.0899 8.5C16.1699 8.45 16.2599 8.4 16.3499 8.37C16.4399 8.33 16.5299 8.3 16.6299 8.28C16.8199 8.24 17.0199 8.24 17.2099 8.28C17.3099 8.3 17.3999 8.33 17.4899 8.37C17.5799 8.4 17.6699 8.45 17.7499 8.5C17.8299 8.56 17.9099 8.62 17.9799 8.69C18.2599 8.97 18.4199 9.36 18.4199 9.75C18.4199 9.85 18.4099 9.95 18.3899 10.04C18.3699 10.14 18.3399 10.23 18.3099 10.32C18.2699 10.41 18.2199 10.5 18.1699 10.58C18.1099 10.66 18.0499 10.74 17.9799 10.81C17.9099 10.88 17.8299 10.94 17.7499 11C17.6699 11.05 17.5799 11.1 17.4899 11.13C17.3999 11.17 17.3099 11.2 17.2099 11.22C17.1199 11.24 17.0199 11.25 16.9199 11.25Z" fill="currentColor" /><g opacity={duotone ? "0.6" : "1"}><path opacity={duotone ? "0.6" : "1"} d="M8.41992 14.75C8.28992 14.75 8.15992 14.72 8.03992 14.67C7.90992 14.62 7.7999 14.55 7.7099 14.46C7.6199 14.36 7.54994 14.25 7.49994 14.13C7.44994 14.01 7.41992 13.88 7.41992 13.75C7.41992 13.49 7.5299 13.23 7.7099 13.04C8.0799 12.67 8.75994 12.67 9.12994 13.04C9.30994 13.23 9.41992 13.49 9.41992 13.75C9.41992 13.88 9.3899 14.01 9.3399 14.13C9.2899 14.25 9.21994 14.36 9.12994 14.46C8.93994 14.64 8.67992 14.75 8.41992 14.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.6" : "1"}><path opacity={duotone ? "0.6" : "1"} d="M16.9199 14.75C16.6599 14.75 16.3999 14.64 16.2099 14.46C16.0299 14.27 15.9199 14.01 15.9199 13.75C15.9199 13.49 16.0299 13.23 16.2099 13.04C16.5799 12.67 17.2499 12.67 17.6299 13.04C17.8099 13.23 17.9199 13.49 17.9199 13.75C17.9199 13.82 17.9099 13.88 17.8999 13.95C17.8899 14.01 17.8699 14.07 17.8399 14.13C17.8199 14.19 17.7899 14.25 17.7499 14.3C17.7099 14.36 17.6699 14.41 17.6299 14.46C17.4399 14.64 17.1799 14.75 16.9199 14.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M8.41992 17.75C8.21992 17.75 8.02989 17.67 7.88989 17.53C7.81989 17.46 7.76992 17.38 7.72992 17.29C7.68992 17.2 7.66992 17.1 7.66992 17C7.66992 16.9 7.68992 16.81 7.72992 16.71C7.76992 16.62 7.81989 16.54 7.88989 16.47C7.95989 16.4 8.03994 16.35 8.12994 16.31C8.30994 16.23 8.5199 16.23 8.7099 16.31C8.7999 16.35 8.87995 16.4 8.94995 16.47C9.08995 16.61 9.16992 16.8 9.16992 17C9.16992 17.1 9.14992 17.2 9.10992 17.29C9.06992 17.38 9.01995 17.46 8.94995 17.53C8.80995 17.67 8.61992 17.75 8.41992 17.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.4" : "1"}><path opacity={duotone ? "0.4" : "1"} d="M16.9199 17.75C16.8199 17.75 16.7199 17.73 16.6299 17.69C16.5399 17.65 16.4599 17.6 16.3899 17.53C16.3199 17.46 16.2599 17.38 16.2299 17.29C16.1899 17.2 16.1699 17.1 16.1699 17C16.1699 16.9 16.1899 16.8 16.2299 16.71C16.2699 16.62 16.3199 16.54 16.3899 16.47C16.4599 16.4 16.5399 16.35 16.6299 16.31C16.8099 16.23 17.0199 16.23 17.2099 16.31C17.2999 16.35 17.38 16.4 17.45 16.47C17.52 16.54 17.5699 16.62 17.6099 16.71C17.6499 16.8 17.6699 16.9 17.6699 17C17.6699 17.1 17.6499 17.2 17.6099 17.29C17.5699 17.38 17.52 17.46 17.45 17.53C17.31 17.67 17.1199 17.75 16.9199 17.75Z" fill="currentColor" /></g><g opacity={duotone ? "0.2" : "1"}><path opacity={duotone ? "0.2" : "1"} d="M8.41992 20C8.28992 20 8.15995 19.95 8.06995 19.85C7.96995 19.76 7.91992 19.63 7.91992 19.5C7.91992 19.37 7.96995 19.24 8.06995 19.15C8.24995 18.96 8.5899 18.96 8.7699 19.15C8.8699 19.24 8.91992 19.37 8.91992 19.5C8.91992 19.63 8.8699 19.76 8.7699 19.85C8.6799 19.95 8.54992 20 8.41992 20Z" fill="currentColor" /></g><g opacity={duotone ? "0.2" : "1"}><path opacity={duotone ? "0.2" : "1"} d="M16.9199 20C16.8499 20 16.7899 19.99 16.7299 19.96C16.6699 19.94 16.6099 19.9 16.5699 19.85C16.5199 19.81 16.4799 19.75 16.4599 19.69C16.4299 19.63 16.4199 19.57 16.4199 19.5C16.4199 19.37 16.4699 19.24 16.5699 19.15C16.7499 18.96 17.0899 18.96 17.2699 19.15C17.3699 19.24 17.4199 19.37 17.4199 19.5C17.4199 19.57 17.4099 19.63 17.3799 19.69C17.3599 19.75 17.3199 19.81 17.2699 19.85C17.1799 19.95 17.0499 20 16.9199 20Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 4.75001C12.5699 4.75001 12.4699 4.74001 12.3799 4.72001C12.2799 4.70001 12.1899 4.67001 12.0999 4.64001C12.0099 4.60001 11.9199 4.55001 11.8399 4.50001C11.7599 4.44001 11.6799 4.38 11.6099 4.31C11.3299 4.03 11.1699 3.65001 11.1699 3.25001C11.1699 2.85001 11.3299 2.47001 11.6099 2.19001C11.6799 2.12001 11.7599 2.06001 11.8399 2.00001C11.9199 1.95001 12.0099 1.9 12.0999 1.87C12.1899 1.83 12.2799 1.8 12.3799 1.78C12.8599 1.68 13.3799 1.84001 13.7299 2.19001C14.0099 2.47001 14.1699 2.85001 14.1699 3.25001C14.1699 3.65001 14.0099 4.03 13.7299 4.31C13.4499 4.59 13.0599 4.75001 12.6699 4.75001Z" fill="none" /><path d="M12.6699 9.25C12.5699 9.25 12.4699 9.24 12.3799 9.22C12.2799 9.2 12.1899 9.17 12.0999 9.14C12.0099 9.1 11.9199 9.05 11.8399 9C11.7599 8.94 11.6799 8.88 11.6099 8.81C11.3299 8.53 11.1699 8.15 11.1699 7.75C11.1699 7.35 11.3299 6.97 11.6099 6.69C11.6799 6.62 11.7599 6.56 11.8399 6.5C11.9199 6.45 12.0099 6.4 12.0999 6.37C12.1899 6.33 12.2799 6.3 12.3799 6.28C12.5699 6.24 12.7699 6.24 12.9599 6.28C13.0599 6.3 13.1499 6.33 13.2399 6.37C13.3299 6.4 13.4199 6.45 13.4999 6.5C13.5799 6.56 13.6599 6.62 13.7299 6.69C14.0099 6.97 14.1699 7.35 14.1699 7.75C14.1699 8.15 14.0099 8.53 13.7299 8.81C13.6599 8.88 13.5799 8.94 13.4999 9C13.4199 9.05 13.3299 9.1 13.2399 9.14C13.1499 9.17 13.0599 9.2 12.9599 9.22C12.8699 9.24 12.7699 9.25 12.6699 9.25Z" fill="none" /><path d="M12.6699 13.25C12.5699 13.25 12.4699 13.24 12.3799 13.22C12.2799 13.2 12.1899 13.17 12.0999 13.14C12.0099 13.1 11.9199 13.05 11.8399 13C11.7599 12.94 11.6799 12.88 11.6099 12.81C11.5399 12.74 11.4799 12.67 11.4199 12.58C11.3699 12.5 11.3199 12.41 11.2799 12.32C11.2499 12.23 11.22 12.14 11.2 12.04C11.18 11.95 11.1699 11.85 11.1699 11.75C11.1699 11.35 11.3299 10.97 11.6099 10.69C11.6799 10.62 11.7599 10.56 11.8399 10.5C11.9199 10.45 12.0099 10.4 12.0999 10.36C12.1899 10.33 12.2799 10.3 12.3799 10.28C12.8599 10.18 13.3799 10.34 13.7299 10.69C14.0099 10.97 14.1699 11.35 14.1699 11.75C14.1699 11.85 14.1599 11.95 14.1399 12.04C14.1199 12.14 14.0899 12.23 14.0499 12.32C14.0199 12.41 13.9699 12.5 13.9199 12.58C13.8599 12.67 13.7999 12.74 13.7299 12.81C13.6599 12.88 13.5799 12.94 13.4999 13C13.4199 13.05 13.3299 13.1 13.2399 13.14C13.1499 13.17 13.0599 13.2 12.9599 13.22C12.8699 13.24 12.7699 13.25 12.6699 13.25Z" fill="none" /><path d="M12.6699 16.75C12.4099 16.75 12.1499 16.64 11.9599 16.46C11.7799 16.27 11.6699 16.01 11.6699 15.75C11.6699 15.49 11.7799 15.23 11.9599 15.04C12.1899 14.81 12.5399 14.71 12.8599 14.77C12.9299 14.78 12.9899 14.8 13.0499 14.83C13.1099 14.85 13.1699 14.88 13.2199 14.92C13.2799 14.96 13.3299 15 13.3799 15.04C13.5599 15.23 13.6699 15.49 13.6699 15.75C13.6699 16.01 13.5599 16.27 13.3799 16.46C13.3299 16.5 13.2799 16.54 13.2199 16.58C13.1699 16.62 13.1099 16.65 13.0499 16.67C12.9899 16.7 12.9299 16.72 12.8599 16.73C12.7999 16.74 12.7299 16.75 12.6699 16.75Z" fill="none" /><path d="M12.6699 20C12.5699 20 12.4699 19.98 12.3799 19.94C12.2899 19.9 12.2099 19.85 12.1399 19.78C12.0699 19.71 12.0099 19.63 11.9799 19.54C11.9399 19.45 11.9199 19.35 11.9199 19.25C11.9199 19.05 11.9999 18.86 12.1399 18.72C12.2099 18.65 12.2899 18.6 12.3799 18.56C12.5699 18.48 12.7699 18.48 12.9599 18.56C13.0499 18.6 13.13 18.65 13.2 18.72C13.27 18.79 13.3199 18.87 13.3599 18.96C13.3999 19.05 13.4199 19.15 13.4199 19.25C13.4199 19.35 13.3999 19.45 13.3599 19.54C13.3199 19.63 13.27 19.71 13.2 19.78C13.13 19.85 13.0499 19.9 12.9599 19.94C12.8599 19.98 12.7699 20 12.6699 20Z" fill="none" /><path d="M12.6699 22.07C12.5399 22.07 12.4099 22.02 12.3199 21.92C12.2199 21.83 12.1699 21.7 12.1699 21.57C12.1699 21.44 12.2199 21.31 12.3199 21.22C12.4999 21.03 12.8399 21.03 13.0199 21.22C13.1199 21.31 13.1699 21.44 13.1699 21.57C13.1699 21.7 13.1199 21.83 13.0199 21.92C12.9299 22.02 12.7999 22.07 12.6699 22.07Z" fill="none" /><path d="M4.16992 9.25C3.76992 9.25 3.38992 9.09 3.10992 8.81C2.82992 8.53 2.66992 8.15 2.66992 7.75C2.66992 7.36 2.82992 6.97 3.10992 6.69C3.65992 6.13 4.66992 6.13 5.22992 6.69C5.50992 6.97 5.66992 7.36 5.66992 7.75C5.66992 8.15 5.50992 8.53 5.22992 8.81C5.15992 8.88 5.07994 8.94 4.99994 9C4.91994 9.05 4.82993 9.10001 4.73993 9.13001C4.64993 9.17001 4.5599 9.2 4.4599 9.22C4.3699 9.24 4.26992 9.25 4.16992 9.25Z" fill="none" /><path d="M21.1699 9.25C20.7799 9.25 20.3899 9.09 20.1099 8.81C19.8299 8.53 19.6699 8.14 19.6699 7.75C19.6699 7.65 19.68 7.55001 19.7 7.46001C19.72 7.36001 19.7499 7.26999 19.7799 7.17999C19.8199 7.08999 19.8699 7 19.9199 6.92C19.9799 6.84 20.0399 6.76 20.1099 6.69C20.1799 6.62 20.2599 6.56 20.3399 6.5C20.4199 6.45 20.5099 6.4 20.5999 6.37C20.6899 6.33 20.7799 6.3 20.8799 6.28C21.0699 6.24 21.2699 6.24 21.4599 6.28C21.5599 6.3 21.6499 6.33 21.7399 6.37C21.8299 6.4 21.9199 6.45 21.9999 6.5C22.0799 6.56 22.1599 6.62 22.2299 6.69C22.2999 6.76 22.3599 6.84 22.4199 6.92C22.4699 7 22.5199 7.08999 22.5499 7.17999C22.5899 7.26999 22.6199 7.36001 22.6399 7.46001C22.6599 7.55001 22.6699 7.65 22.6699 7.75C22.6699 8.15 22.5099 8.53 22.2299 8.81C22.1599 8.88 22.0799 8.94 21.9999 9C21.9199 9.05 21.8299 9.1 21.7399 9.14C21.6499 9.17 21.5599 9.2 21.4599 9.22C21.3599 9.24 21.2699 9.25 21.1699 9.25Z" fill="none" /><path d="M21.1699 12.75C21.1099 12.75 21.0399 12.74 20.9799 12.73C20.9099 12.72 20.8499 12.7 20.7899 12.67C20.7299 12.65 20.6699 12.62 20.6099 12.58C20.5599 12.55 20.5099 12.5 20.4599 12.46C20.4199 12.41 20.3699 12.36 20.3399 12.31C20.2999 12.25 20.2699 12.19 20.2499 12.13C20.2199 12.07 20.1999 12.01 20.1899 11.95C20.1799 11.88 20.1699 11.82 20.1699 11.75C20.1699 11.49 20.2799 11.23 20.4599 11.04C20.5099 11 20.5599 10.96 20.6099 10.92C20.6699 10.88 20.7299 10.85 20.7899 10.83C20.8499 10.8 20.9099 10.78 20.9799 10.77C21.0999 10.74 21.2299 10.74 21.3599 10.77C21.4299 10.78 21.4899 10.8 21.5499 10.83C21.6099 10.85 21.6699 10.88 21.7199 10.92C21.7799 10.96 21.8299 11 21.8799 11.04C22.0599 11.23 22.1699 11.49 22.1699 11.75C22.1699 11.82 22.1599 11.88 22.1499 11.95C22.1399 12.01 22.1199 12.07 22.0899 12.13C22.0699 12.19 22.0399 12.25 21.9999 12.31C21.9599 12.36 21.9199 12.41 21.8799 12.46C21.8299 12.5 21.7799 12.55 21.7199 12.58C21.6699 12.62 21.6099 12.65 21.5499 12.67C21.4899 12.7 21.4299 12.72 21.3599 12.73C21.2999 12.74 21.2299 12.75 21.1699 12.75Z" fill="none" /><path d="M4.16992 12.75C3.90992 12.75 3.6499 12.64 3.4599 12.46C3.2799 12.27 3.16992 12.01 3.16992 11.75C3.16992 11.49 3.2799 11.23 3.4599 11.04C3.7399 10.76 4.17993 10.67 4.54993 10.83C4.67993 10.88 4.77994 10.95 4.87994 11.04C5.05994 11.23 5.16992 11.49 5.16992 11.75C5.16992 12.01 5.05994 12.27 4.87994 12.46C4.68994 12.64 4.42992 12.75 4.16992 12.75Z" fill="none" /><path d="M21.1699 15.5C20.9699 15.5 20.7799 15.42 20.6399 15.28C20.4999 15.14 20.4199 14.95 20.4199 14.75C20.4199 14.65 20.4399 14.56 20.4799 14.46C20.5199 14.37 20.5699 14.29 20.6399 14.22C20.8499 14.01 21.1799 13.94 21.4599 14.06C21.5499 14.1 21.63 14.15 21.7 14.22C21.77 14.29 21.8199 14.37 21.8599 14.46C21.8999 14.56 21.9199 14.65 21.9199 14.75C21.9199 14.95 21.84 15.14 21.7 15.28C21.63 15.35 21.5499 15.4 21.4599 15.44C21.3599 15.48 21.2699 15.5 21.1699 15.5Z" fill="none" /><path d="M4.16992 15.5C3.96992 15.5 3.77989 15.42 3.63989 15.28C3.56989 15.21 3.50992 15.13 3.47992 15.04C3.43992 14.95 3.41992 14.85 3.41992 14.75C3.41992 14.65 3.43992 14.56 3.47992 14.46C3.50992 14.37 3.56989 14.29 3.63989 14.22C3.90989 13.94 4.41995 13.94 4.69995 14.22C4.76995 14.29 4.81992 14.37 4.85992 14.46C4.89992 14.56 4.91992 14.65 4.91992 14.75C4.91992 14.85 4.89992 14.95 4.85992 15.04C4.81992 15.13 4.76995 15.21 4.69995 15.28C4.55995 15.42 4.36992 15.5 4.16992 15.5Z" fill="none" /><path d="M21.1699 18C21.0999 18 21.0399 17.99 20.9799 17.96C20.9199 17.94 20.8599 17.9 20.8199 17.85C20.7199 17.76 20.6699 17.63 20.6699 17.5C20.6699 17.37 20.7199 17.24 20.8199 17.15C20.9999 16.96 21.3399 16.96 21.5199 17.15C21.6199 17.24 21.6699 17.37 21.6699 17.5C21.6699 17.63 21.6199 17.76 21.5199 17.85C21.4299 17.95 21.2999 18 21.1699 18Z" fill="none" /><path d="M4.16992 18C4.03992 18 3.90995 17.95 3.81995 17.85C3.71995 17.76 3.66992 17.63 3.66992 17.5C3.66992 17.37 3.71995 17.24 3.81995 17.15C3.99995 16.96 4.3399 16.96 4.5199 17.15C4.6199 17.24 4.66992 17.37 4.66992 17.5C4.66992 17.63 4.6199 17.76 4.5199 17.85C4.4299 17.95 4.29992 18 4.16992 18Z" fill="none" /><path d="M8.41992 7C8.31992 7 8.21994 6.99 8.12994 6.97C8.02994 6.95 7.93991 6.92001 7.84991 6.88001C7.74991 6.85001 7.6699 6.8 7.5899 6.75C7.4999 6.69 7.42992 6.63 7.35992 6.56C7.07992 6.28 6.91992 5.89 6.91992 5.5C6.91992 5.11 7.07992 4.72 7.35992 4.44C7.91992 3.88 8.91992 3.88 9.47992 4.44C9.75992 4.72 9.91992 5.1 9.91992 5.5C9.91992 5.9 9.75992 6.28 9.47992 6.56C9.40992 6.63 9.32994 6.69 9.24994 6.75C9.16994 6.8 9.07993 6.85001 8.98993 6.88001C8.89993 6.92001 8.8099 6.95 8.7099 6.97C8.6199 6.99 8.51992 7 8.41992 7Z" fill="none" /><path d="M16.9199 7C16.8199 7 16.7199 6.99 16.6299 6.97C16.5299 6.95 16.4399 6.92001 16.3499 6.88001C16.2599 6.85001 16.1699 6.8 16.0899 6.75C16.0099 6.69 15.9299 6.63 15.8599 6.56C15.7899 6.49 15.7299 6.41 15.6699 6.33C15.6199 6.25 15.5699 6.16001 15.5299 6.07001C15.4999 5.98001 15.47 5.88999 15.45 5.78999C15.43 5.69999 15.4199 5.6 15.4199 5.5C15.4199 5.11 15.5799 4.72 15.8599 4.44C15.9299 4.37 16.0099 4.31 16.0899 4.25C16.1699 4.2 16.2599 4.15 16.3499 4.12C16.4399 4.08 16.5299 4.05 16.6299 4.03C16.8199 3.99 17.0199 3.99 17.2099 4.03C17.3099 4.05 17.3999 4.08 17.4899 4.12C17.5799 4.15 17.6699 4.2 17.7499 4.25C17.8299 4.31 17.9099 4.37 17.9799 4.44C18.2599 4.72 18.4199 5.11 18.4199 5.5C18.4199 5.6 18.4099 5.69999 18.3899 5.78999C18.3699 5.88999 18.3399 5.98001 18.3099 6.07001C18.2699 6.16001 18.2199 6.25 18.1699 6.33C18.1099 6.41 18.0499 6.49 17.9799 6.56C17.9099 6.63 17.8299 6.69 17.7499 6.75C17.6699 6.8 17.5799 6.85001 17.4899 6.88001C17.3999 6.92001 17.3099 6.95 17.2099 6.97C17.1199 6.99 17.0199 7 16.9199 7Z" fill="none" /><path d="M8.41992 11.25C8.31992 11.25 8.21994 11.24 8.12994 11.22C8.02994 11.2 7.93991 11.17 7.84991 11.14C7.75991 11.1 7.6699 11.05 7.5899 11C7.4999 10.94 7.42992 10.88 7.35992 10.81C7.07992 10.53 6.91992 10.14 6.91992 9.75C6.91992 9.35 7.07992 8.97 7.35992 8.69C7.91992 8.13 8.91992 8.13 9.47992 8.69C9.75992 8.97 9.91992 9.35 9.91992 9.75C9.91992 10.15 9.75992 10.53 9.47992 10.81C9.19992 11.09 8.80992 11.25 8.41992 11.25Z" fill="none" /><path d="M16.9199 11.25C16.8199 11.25 16.7199 11.24 16.6299 11.22C16.5299 11.2 16.4399 11.17 16.3499 11.13C16.2599 11.1 16.1699 11.05 16.0899 11C16.0099 10.94 15.9299 10.88 15.8599 10.81C15.7899 10.74 15.7299 10.66 15.6699 10.58C15.6199 10.5 15.5699 10.41 15.5299 10.32C15.4999 10.23 15.47 10.14 15.45 10.04C15.43 9.94999 15.4199 9.85 15.4199 9.75C15.4199 9.36 15.5799 8.97 15.8599 8.69C15.9299 8.62 16.0099 8.56 16.0899 8.5C16.1699 8.45 16.2599 8.4 16.3499 8.37C16.4399 8.33 16.5299 8.3 16.6299 8.28C16.8199 8.24 17.0199 8.24 17.2099 8.28C17.3099 8.3 17.3999 8.33 17.4899 8.37C17.5799 8.4 17.6699 8.45 17.7499 8.5C17.8299 8.56 17.9099 8.62 17.9799 8.69C18.2599 8.97 18.4199 9.36 18.4199 9.75C18.4199 9.85 18.4099 9.94999 18.3899 10.04C18.3699 10.14 18.3399 10.23 18.3099 10.32C18.2699 10.41 18.2199 10.5 18.1699 10.58C18.1099 10.66 18.0499 10.74 17.9799 10.81C17.9099 10.88 17.8299 10.94 17.7499 11C17.6699 11.05 17.5799 11.1 17.4899 11.13C17.3999 11.17 17.3099 11.2 17.2099 11.22C17.1199 11.24 17.0199 11.25 16.9199 11.25Z" fill="none" /><path d="M8.41992 14.75C8.28992 14.75 8.15992 14.72 8.03992 14.67C7.90992 14.62 7.7999 14.55 7.7099 14.46C7.6199 14.36 7.54994 14.25 7.49994 14.13C7.44994 14.01 7.41992 13.88 7.41992 13.75C7.41992 13.49 7.5299 13.23 7.7099 13.04C8.0799 12.67 8.75994 12.67 9.12994 13.04C9.30994 13.23 9.41992 13.49 9.41992 13.75C9.41992 13.88 9.3899 14.01 9.3399 14.13C9.2899 14.25 9.21994 14.36 9.12994 14.46C8.93994 14.64 8.67992 14.75 8.41992 14.75Z" fill="none" /><path d="M16.9199 14.75C16.6599 14.75 16.3999 14.64 16.2099 14.46C16.0299 14.27 15.9199 14.01 15.9199 13.75C15.9199 13.49 16.0299 13.23 16.2099 13.04C16.5799 12.67 17.2499 12.67 17.6299 13.04C17.8099 13.23 17.9199 13.49 17.9199 13.75C17.9199 13.82 17.9099 13.88 17.8999 13.95C17.8899 14.01 17.8699 14.07 17.8399 14.13C17.8199 14.19 17.7899 14.25 17.7499 14.3C17.7099 14.36 17.6699 14.41 17.6299 14.46C17.4399 14.64 17.1799 14.75 16.9199 14.75Z" fill="none" /><path d="M8.41992 17.75C8.21992 17.75 8.02989 17.67 7.88989 17.53C7.81989 17.46 7.76992 17.38 7.72992 17.29C7.68992 17.2 7.66992 17.1 7.66992 17C7.66992 16.9 7.68992 16.81 7.72992 16.71C7.76992 16.62 7.81989 16.54 7.88989 16.47C7.95989 16.4 8.03994 16.35 8.12994 16.31C8.30994 16.23 8.5199 16.23 8.7099 16.31C8.7999 16.35 8.87995 16.4 8.94995 16.47C9.08995 16.61 9.16992 16.8 9.16992 17C9.16992 17.1 9.14992 17.2 9.10992 17.29C9.06992 17.38 9.01995 17.46 8.94995 17.53C8.80995 17.67 8.61992 17.75 8.41992 17.75Z" fill="none" /><path d="M16.9199 17.75C16.8199 17.75 16.7199 17.73 16.6299 17.69C16.5399 17.65 16.4599 17.6 16.3899 17.53C16.3199 17.46 16.2599 17.38 16.2299 17.29C16.1899 17.2 16.1699 17.1 16.1699 17C16.1699 16.9 16.1899 16.8 16.2299 16.71C16.2699 16.62 16.3199 16.54 16.3899 16.47C16.4599 16.4 16.5399 16.35 16.6299 16.31C16.8099 16.23 17.0199 16.23 17.2099 16.31C17.2999 16.35 17.38 16.4 17.45 16.47C17.52 16.54 17.5699 16.62 17.6099 16.71C17.6499 16.8 17.6699 16.9 17.6699 17C17.6699 17.1 17.6499 17.2 17.6099 17.29C17.5699 17.38 17.52 17.46 17.45 17.53C17.31 17.67 17.1199 17.75 16.9199 17.75Z" fill="none" /><path d="M8.41992 20C8.28992 20 8.15995 19.95 8.06995 19.85C7.96995 19.76 7.91992 19.63 7.91992 19.5C7.91992 19.37 7.96995 19.24 8.06995 19.15C8.24995 18.96 8.5899 18.96 8.7699 19.15C8.8699 19.24 8.91992 19.37 8.91992 19.5C8.91992 19.63 8.8699 19.76 8.7699 19.85C8.6799 19.95 8.54992 20 8.41992 20Z" fill="none" /><path d="M16.9199 20C16.8499 20 16.7899 19.99 16.7299 19.96C16.6699 19.94 16.6099 19.9 16.5699 19.85C16.5199 19.81 16.4799 19.75 16.4599 19.69C16.4299 19.63 16.4199 19.57 16.4199 19.5C16.4199 19.37 16.4699 19.24 16.5699 19.15C16.7499 18.96 17.0899 18.96 17.2699 19.15C17.3699 19.24 17.4199 19.37 17.4199 19.5C17.4199 19.57 17.4099 19.63 17.3799 19.69C17.3599 19.75 17.3199 19.81 17.2699 19.85C17.1799 19.95 17.0499 20 16.9199 20Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconOceanProtocolOcean as IconComponentType).keywords = [
  "ocean",
  "protocol",
  "sea",
  "expanse",
  "oceanic",
  "seabed",
  "seafloor",
  "oceanographic",
  "pelagic",
  "oceanography",
  "marine",
  "communications protocol",
  "agreement",
  "convention",
  "register",
  "procedure",
  "minutes",
  "etiquette",
  "design",
  "memorandum"
];

export default IconOceanProtocolOcean as IconComponentType;