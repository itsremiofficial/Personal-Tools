import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTruckTick: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15 2V12C15 13.1 14.1 14 13 14H2V7.62C2.73 8.49 3.85003 9.03 5.09003 9C6.10003 8.98 7.01 8.59 7.69 7.94C8 7.68 8.26002 7.34999 8.46002 6.98999C8.82002 6.37999 9.02 5.65997 9 4.90997C8.97 3.73997 8.45001 2.71 7.64001 2H15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.9992 4.90975C9.0192 5.65975 8.81922 6.37977 8.45922 6.98977C8.25922 7.34977 7.9992 7.67978 7.6892 7.93978C7.0092 8.58978 6.09922 8.97978 5.08922 8.99978C3.84922 9.02978 2.7292 8.48977 1.9992 7.61977C1.8592 7.46977 1.7392 7.29978 1.6292 7.12978C1.2392 6.53978 1.0192 5.8398 0.999195 5.0898C0.969195 3.8298 1.52919 2.67977 2.42919 1.92977C3.10919 1.36977 3.96917 1.01978 4.90917 0.999776C5.95917 0.979776 6.91921 1.35978 7.63921 1.99978C8.44921 2.70978 8.9692 3.73975 8.9992 4.90975Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.43945 5.02979L4.44946 5.98975L6.53943 3.96973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M15 3V12C15 13.1 14.1 14 13 14H2V7.62C2.73 8.49 3.85003 9.03 5.09003 9C6.10003 8.98 7.01 8.59 7.69 7.94C8 7.68 8.26002 7.34999 8.46002 6.98999C8.82002 6.37999 9.02 5.65997 9 4.90997C8.97 3.73997 8.45001 2.71 7.64001 2H14C14.55 2 15 2.45 15 3Z" fill="currentColor" /><path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z" fill="currentColor" /><path d="M7.63921 2.00002C6.91921 1.36002 5.95917 0.98002 4.90917 1.00002C3.96917 1.02002 3.10919 1.37001 2.42919 1.93001C1.52919 2.68001 0.969195 3.83005 0.999195 5.09005C1.0192 5.84005 1.2392 6.54002 1.6292 7.13002C1.7392 7.30002 1.8592 7.47001 1.9992 7.62001C2.7292 8.49001 3.84922 9.03002 5.08922 9.00002C6.09922 8.98002 7.0092 8.59002 7.6892 7.94002C7.9992 7.68002 8.25922 7.35001 8.45922 6.99001C8.81922 6.38001 9.0192 5.65999 8.9992 4.90999C8.96919 3.73999 8.44921 2.71002 7.63921 2.00002ZM7.05919 4.52004L4.96917 6.54C4.81917 6.68 4.63921 6.75002 4.44921 6.75002C4.25921 6.75002 4.07919 6.68 3.92919 6.54L2.91918 5.58004C2.61918 5.29004 2.60922 4.82004 2.89922 4.52004C3.18922 4.22004 3.65922 4.21002 3.95922 4.50002L4.44921 4.96999L6.01921 3.45003C6.31921 3.16003 6.78921 3.16999 7.07921 3.46999C7.36921 3.75999 7.35919 4.23004 7.05919 4.52004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTruckTick as IconComponentType).keywords = [
  "truck",
  "tick",
  "hand truck",
  "motortruck",
  "tractor-trailer",
  "lorry",
  "semi-trailer",
  "flatbed",
  "van",
  "truckload",
  "cartage",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene"
];

export default IconTruckTick as IconComponentType;