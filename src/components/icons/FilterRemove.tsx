import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFilterRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6309 14.75C21.6309 15.64 21.3809 16.48 20.9409 17.2C20.1209 18.58 18.6109 19.5 16.8809 19.5C15.1509 19.5 13.6409 18.57 12.8209 17.2C12.3809 16.49 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C19.5009 10 21.6309 12.13 21.6309 14.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.1487 15.99L15.6387 13.48" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.1291 13.5098L15.6191 16.0198" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6905 4.02002V6.23999C20.6905 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2405 10 16.8805 10C14.2605 10 12.1305 12.13 12.1305 14.75C12.1305 15.64 12.3805 16.48 12.8205 17.2C13.1905 17.82 13.7005 18.35 14.3205 18.73V19.07C14.3205 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87055 21.6 8.87055 19.98V14.63C8.87055 13.92 8.46055 13.01 8.06055 12.51L4.22055 8.46997C3.72055 7.95997 3.31055 7.05001 3.31055 6.45001V4.12C3.31055 2.91 4.22055 2 5.33055 2H18.6705C19.7805 2 20.6905 2.91002 20.6905 4.02002Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.40992 2H18.5799C19.6799 2 20.5799 2.90999 20.5799 4.01999V6.23999C20.5799 7.04999 20.0799 8.06 19.5799 8.56L15.2899 12.4C14.6899 12.91 14.2899 13.92 14.2899 14.72V19.06C14.2899 19.67 13.8899 20.47 13.3899 20.78L11.9999 21.7C10.6999 22.51 8.90992 21.6 8.90992 19.98V14.63C8.90992 13.92 8.50992 13.01 8.10992 12.51L4.31992 8.47C3.81992 7.96 3.41992 7.06001 3.41992 6.45001V4.13C3.41992 2.91 4.31992 2 5.40992 2Z" fill="currentColor" /><path d="M16.8809 10C14.2609 10 12.1309 12.13 12.1309 14.75C12.1309 15.64 12.3809 16.48 12.8209 17.2C13.6409 18.58 15.1509 19.5 16.8809 19.5C18.6109 19.5 20.1209 18.57 20.9409 17.2C21.3809 16.49 21.6309 15.64 21.6309 14.75C21.6309 12.13 19.5109 10 16.8809 10ZM18.6809 16.52C18.5309 16.67 18.3409 16.74 18.1509 16.74C17.9609 16.74 17.7709 16.67 17.6209 16.52L16.9009 15.8L16.1509 16.55C16.0009 16.7 15.8109 16.77 15.6209 16.77C15.4309 16.77 15.2409 16.7 15.0909 16.55C14.8009 16.26 14.8009 15.78 15.0909 15.49L15.8409 14.74L15.1209 14.01C14.8309 13.72 14.8309 13.24 15.1209 12.95C15.4109 12.66 15.8909 12.66 16.1809 12.95L16.9009 13.67L17.6009 12.97C17.8909 12.68 18.3709 12.68 18.6609 12.97C18.9509 13.26 18.9509 13.74 18.6609 14.03L17.9609 14.73L18.6809 15.46C18.9809 15.75 18.9809 16.23 18.6809 16.52Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilterRemove as IconComponentType).keywords = [
  "filter",
  "remove",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconFilterRemove as IconComponentType;