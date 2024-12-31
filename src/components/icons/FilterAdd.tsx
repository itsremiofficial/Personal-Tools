import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconFilterAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6309 14.75C21.6309 15.64 21.3809 16.48 20.9409 17.2C20.1209 18.58 18.6109 19.5 16.8809 19.5C15.1509 19.5 13.6409 18.57 12.8209 17.2C12.3809 16.49 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C19.5009 10 21.6309 12.13 21.6309 14.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.6594 14.73H15.1094" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.8789 13V16.55" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.6905 4.02002V6.23999C20.6905 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2405 10 16.8805 10C14.2605 10 12.1305 12.13 12.1305 14.75C12.1305 15.64 12.3805 16.48 12.8205 17.2C13.1905 17.82 13.7005 18.35 14.3205 18.73V19.07C14.3205 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87054 21.6 8.87054 19.98V14.63C8.87054 13.92 8.46055 13.01 8.06055 12.51L4.22055 8.46997C3.72055 7.95997 3.31055 7.05001 3.31055 6.45001V4.12C3.31055 2.91 4.22055 2 5.33055 2H18.6705C19.7805 2 20.6905 2.91002 20.6905 4.02002Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.40992 2H18.5799C19.6799 2 20.5799 2.90999 20.5799 4.01999V6.23999C20.5799 7.04999 20.0799 8.06 19.5799 8.56L15.2899 12.4C14.6899 12.91 14.2899 13.92 14.2899 14.72V19.06C14.2899 19.67 13.8899 20.47 13.3899 20.78L11.9999 21.7C10.6999 22.51 8.90992 21.6 8.90992 19.98V14.63C8.90992 13.92 8.50992 13.01 8.10992 12.51L4.31992 8.47C3.81992 7.96 3.41992 7.06001 3.41992 6.45001V4.13C3.41992 2.91 4.31992 2 5.40992 2Z" fill="currentColor" /><path d="M16.8809 10C14.2609 10 12.1309 12.13 12.1309 14.75C12.1309 15.64 12.3809 16.48 12.8209 17.2C13.6409 18.58 15.1509 19.5 16.8809 19.5C18.6109 19.5 20.1209 18.57 20.9409 17.2C21.3809 16.49 21.6309 15.64 21.6309 14.75C21.6309 12.13 19.5109 10 16.8809 10ZM18.6609 15.48H17.6309V16.55C17.6309 16.96 17.2909 17.3 16.8809 17.3C16.4709 17.3 16.1309 16.96 16.1309 16.55V15.48H15.1109C14.7009 15.48 14.3609 15.14 14.3609 14.73C14.3609 14.32 14.7009 13.98 15.1109 13.98H16.1309V13C16.1309 12.59 16.4709 12.25 16.8809 12.25C17.2909 12.25 17.6309 12.59 17.6309 13V13.98H18.6609C19.0709 13.98 19.4109 14.32 19.4109 14.73C19.4109 15.14 19.0709 15.48 18.6609 15.48Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilterAdd as IconComponentType).keywords = [
  "filter",
  "add",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconFilterAdd as IconComponentType;