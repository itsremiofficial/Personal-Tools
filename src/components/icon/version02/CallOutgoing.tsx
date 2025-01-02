import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCallOutgoing: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6399 18.33C22.6399 18.69 22.5599 19.06 22.3899 19.42C22.2199 19.78 21.9999 20.12 21.7099 20.44C21.2199 20.98 20.6799 21.37 20.0699 21.62C19.4699 21.87 18.8199 22 18.1199 22C17.0999 22 16.0099 21.76 14.8599 21.27C13.7099 20.78 12.5599 20.12 11.4199 19.29C10.2699 18.45 9.17992 17.52 8.13992 16.49C7.10992 15.45 6.17992 14.36 5.34992 13.22C4.52992 12.08 3.86992 10.94 3.38992 9.81C2.90992 8.67 2.66992 7.58 2.66992 6.54C2.66992 5.86 2.78992 5.21 3.02992 4.61C3.26992 4 3.64992 3.44 4.17992 2.94C4.81992 2.31 5.51992 2 6.25992 2C6.53992 2 6.81992 2.06 7.06992 2.18C7.32992 2.3 7.55992 2.48 7.73992 2.74L10.0599 6.01C10.2399 6.26 10.3699 6.49 10.4599 6.71C10.5499 6.92 10.5999 7.13 10.5999 7.32C10.5999 7.56 10.5299 7.8 10.3899 8.03C10.2599 8.26 10.0699 8.5 9.82992 8.74L9.06992 9.53C8.95992 9.64 8.90992 9.77 8.90992 9.93C8.90992 10.01 8.91992 10.08 8.93992 10.16C8.96992 10.24 8.99992 10.3 9.01992 10.36C9.19992 10.69 9.50992 11.12 9.94992 11.64C10.3999 12.16 10.8799 12.69 11.3999 13.22C11.9399 13.75 12.4599 14.24 12.9899 14.69C13.5099 15.13 13.9399 15.43 14.2799 15.61C14.3299 15.63 14.3899 15.66 14.4599 15.69C14.5399 15.72 14.6199 15.73 14.7099 15.73C14.8799 15.73 15.0099 15.67 15.1199 15.56L15.8799 14.81C16.1299 14.56 16.3699 14.37 16.5999 14.25C16.8299 14.11 17.0599 14.04 17.3099 14.04C17.4999 14.04 17.6999 14.08 17.9199 14.17C18.1399 14.26 18.3699 14.39 18.6199 14.56L21.9299 16.91C22.1899 17.09 22.3699 17.3 22.4799 17.55C22.5799 17.8 22.6399 18.05 22.6399 18.33Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M20.6701 4H15.8701M20.6701 4V8.8V4Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6701 9.55C20.2601 9.55 19.9201 9.21 19.9201 8.8V4.75H15.8701C15.4601 4.75 15.1201 4.41 15.1201 4C15.1201 3.59 15.4601 3.25 15.8701 3.25H20.6701C21.0801 3.25 21.4201 3.59 21.4201 4V8.8C21.4201 9.21 21.0801 9.55 20.6701 9.55Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.4599 14.21L9.18992 17.48C8.82992 17.16 8.47992 16.83 8.13992 16.49C7.10992 15.45 6.17992 14.36 5.34992 13.22C4.52992 12.08 3.86992 10.94 3.38992 9.81C2.90992 8.67 2.66992 7.58 2.66992 6.54C2.66992 5.86 2.78992 5.21 3.02992 4.61C3.26992 4 3.64992 3.44 4.17992 2.94C4.81992 2.31 5.51992 2 6.25992 2C6.53992 2 6.81992 2.06 7.06992 2.18C7.32992 2.3 7.55992 2.48 7.73992 2.74L10.0599 6.01C10.2399 6.26 10.3699 6.49 10.4599 6.71C10.5499 6.92 10.5999 7.13 10.5999 7.32C10.5999 7.56 10.5299 7.8 10.3899 8.03C10.2599 8.26 10.0699 8.5 9.82992 8.74L9.06992 9.53C8.95992 9.64 8.90992 9.77 8.90992 9.93C8.90992 10.01 8.91992 10.08 8.93992 10.16C8.96992 10.24 8.99992 10.3 9.01992 10.36C9.19992 10.69 9.50992 11.12 9.94992 11.64C10.3999 12.16 10.8799 12.69 11.3999 13.22C11.7599 13.57 12.1099 13.91 12.4599 14.21Z" fill="currentColor" /><path d="M22.6395 18.33C22.6395 18.61 22.5895 18.9 22.4895 19.18C22.4595 19.26 22.4295 19.34 22.3895 19.42C22.2195 19.78 21.9995 20.12 21.7095 20.44C21.2195 20.98 20.6795 21.37 20.0695 21.62C20.0595 21.62 20.0495 21.63 20.0395 21.63C19.4495 21.87 18.8095 22 18.1195 22C17.0995 22 16.0095 21.76 14.8595 21.27C13.7095 20.78 12.5595 20.12 11.4195 19.29C11.0295 19 10.6395 18.71 10.2695 18.4L13.5395 15.13C13.8195 15.34 14.0695 15.5 14.2795 15.61C14.3295 15.63 14.3895 15.66 14.4595 15.69C14.5395 15.72 14.6195 15.73 14.7095 15.73C14.8795 15.73 15.0095 15.67 15.1195 15.56L15.8795 14.81C16.1295 14.56 16.3695 14.37 16.5995 14.25C16.8295 14.11 17.0595 14.04 17.3095 14.04C17.4995 14.04 17.6995 14.08 17.9195 14.17C18.1395 14.26 18.3695 14.39 18.6195 14.56L21.9295 16.91C22.1895 17.09 22.3695 17.3 22.4795 17.55C22.5795 17.8 22.6395 18.05 22.6395 18.33Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6701 9.55C20.2601 9.55 19.9201 9.21 19.9201 8.8V4.75H15.8701C15.4601 4.75 15.1201 4.41 15.1201 4C15.1201 3.59 15.4601 3.25 15.8701 3.25H20.6701C21.0801 3.25 21.4201 3.59 21.4201 4V8.8C21.4201 9.21 21.0801 9.55 20.6701 9.55Z" fill="currentColor" /><path d="M11.7199 14.95L9.86992 16.8C9.47992 17.19 8.85992 17.19 8.45992 16.81C8.34992 16.7 8.23992 16.6 8.12992 16.49C7.09992 15.45 6.16992 14.36 5.33992 13.22C4.51992 12.08 3.85992 10.94 3.37992 9.81C2.90992 8.67 2.66992 7.58 2.66992 6.54C2.66992 5.86 2.78992 5.21 3.02992 4.61C3.26992 4 3.64992 3.44 4.17992 2.94C4.81992 2.31 5.51992 2 6.25992 2C6.53992 2 6.81992 2.06 7.06992 2.18C7.32992 2.3 7.55992 2.48 7.73992 2.74L10.0599 6.01C10.2399 6.26 10.3699 6.49 10.4599 6.71C10.5499 6.92 10.5999 7.13 10.5999 7.32C10.5999 7.56 10.5299 7.8 10.3899 8.03C10.2599 8.26 10.0699 8.5 9.82992 8.74L9.06992 9.53C8.95992 9.64 8.90992 9.77 8.90992 9.93C8.90992 10.01 8.91992 10.08 8.93992 10.16C8.96992 10.24 8.99992 10.3 9.01992 10.36C9.19992 10.69 9.50992 11.12 9.94992 11.64C10.3999 12.16 10.8799 12.69 11.3999 13.22C11.4999 13.32 11.6099 13.42 11.7099 13.52C12.1099 13.91 12.1199 14.55 11.7199 14.95Z" fill="currentColor" /><path d="M22.6395 18.33C22.6395 18.61 22.5895 18.9 22.4895 19.18C22.4595 19.26 22.4295 19.34 22.3895 19.42C22.2195 19.78 21.9995 20.12 21.7095 20.44C21.2195 20.98 20.6795 21.37 20.0695 21.62C20.0595 21.62 20.0495 21.63 20.0395 21.63C19.4495 21.87 18.8095 22 18.1195 22C17.0995 22 16.0095 21.76 14.8595 21.27C13.7095 20.78 12.5595 20.12 11.4195 19.29C11.0295 19 10.6395 18.71 10.2695 18.4L13.5395 15.13C13.8195 15.34 14.0695 15.5 14.2795 15.61C14.3295 15.63 14.3895 15.66 14.4595 15.69C14.5395 15.72 14.6195 15.73 14.7095 15.73C14.8795 15.73 15.0095 15.67 15.1195 15.56L15.8795 14.81C16.1295 14.56 16.3695 14.37 16.5995 14.25C16.8295 14.11 17.0595 14.04 17.3095 14.04C17.4995 14.04 17.6995 14.08 17.9195 14.17C18.1395 14.26 18.3695 14.39 18.6195 14.56L21.9295 16.91C22.1895 17.09 22.3695 17.3 22.4795 17.55C22.5795 17.8 22.6395 18.05 22.6395 18.33Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCallOutgoing as IconComponentType).keywords = [
  "call",
  "outgoing",
  "phone call",
  "telephone call",
  "call in",
  "telephone",
  "phone",
  "call up",
  "send for",
  "call option",
  "margin call",
  "extrovertish",
  "extroverted",
  "extroversive",
  "sociable",
  "outward",
  "past",
  "preceding",
  "out",
  "forthcoming"
];

export default IconCallOutgoing as IconComponentType;