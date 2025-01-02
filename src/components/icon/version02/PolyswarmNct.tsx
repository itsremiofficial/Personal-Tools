import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPolyswarmNct: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1699 3.25H15.1699C19.0199 3.25 22.1699 6.4 22.1699 10.25C22.1699 14.1 19.0199 17.25 15.1699 17.25H4.16992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.83984 6.75H14.4799C16.5099 6.75 18.1699 8.41 18.1699 10.44C18.1699 12.47 16.5099 14.13 14.4799 14.13H8.66986" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.16992 10.75H6.16992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.16992 20.75H3.16992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path d="M15.1699 18H4.16992C3.75992 18 3.41992 17.66 3.41992 17.25C3.41992 16.84 3.75992 16.5 4.16992 16.5H15.1699C18.6199 16.5 21.4199 13.7 21.4199 10.25C21.4199 6.8 18.6199 4 15.1699 4H10.1699C9.75992 4 9.41992 3.66 9.41992 3.25C9.41992 2.84 9.75992 2.5 10.1699 2.5H15.1699C19.4399 2.5 22.9199 5.98 22.9199 10.25C22.9199 14.52 19.4399 18 15.1699 18Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.4799 14.89H8.66986C8.25986 14.89 7.91986 14.55 7.91986 14.14C7.91986 13.73 8.25986 13.39 8.66986 13.39H14.4799C16.0999 13.39 17.4199 12.07 17.4199 10.45C17.4199 8.83 16.0999 7.51 14.4799 7.51H3.83984C3.42984 7.51 3.08984 7.17 3.08984 6.76C3.08984 6.35 3.41984 6 3.83984 6H14.4799C16.9299 6 18.9199 7.99 18.9199 10.44C18.9199 12.89 16.9299 14.89 14.4799 14.89Z" fill="currentColor" /><path d="M9.16992 11.5H6.16992C5.75992 11.5 5.41992 11.16 5.41992 10.75C5.41992 10.34 5.75992 10 6.16992 10H9.16992C9.57992 10 9.91992 10.34 9.91992 10.75C9.91992 11.16 9.57992 11.5 9.16992 11.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.16992 21.5H3.16992C2.75992 21.5 2.41992 21.16 2.41992 20.75C2.41992 20.34 2.75992 20 3.16992 20H7.16992C7.57992 20 7.91992 20.34 7.91992 20.75C7.91992 21.16 7.57992 21.5 7.16992 21.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1699 18H4.16992C3.75992 18 3.41992 17.66 3.41992 17.25C3.41992 16.84 3.75992 16.5 4.16992 16.5H15.1699C18.6199 16.5 21.4199 13.7 21.4199 10.25C21.4199 6.8 18.6199 4 15.1699 4H10.1699C9.75992 4 9.41992 3.66 9.41992 3.25C9.41992 2.84 9.75992 2.5 10.1699 2.5H15.1699C19.4399 2.5 22.9199 5.98 22.9199 10.25C22.9199 14.52 19.4399 18 15.1699 18Z" fill="none" /><path d="M14.4799 14.89H8.66986C8.25986 14.89 7.91986 14.55 7.91986 14.14C7.91986 13.73 8.25986 13.39 8.66986 13.39H14.4799C16.0999 13.39 17.4199 12.07 17.4199 10.45C17.4199 8.83 16.0999 7.50999 14.4799 7.50999H3.83984C3.42984 7.50999 3.08984 7.16999 3.08984 6.75999C3.08984 6.34999 3.42984 6.00999 3.83984 6.00999H14.4799C16.9299 6.00999 18.9199 8 18.9199 10.45C18.9199 12.9 16.9299 14.89 14.4799 14.89Z" fill="none" /><path d="M9.16992 11.5H6.16992C5.75992 11.5 5.41992 11.16 5.41992 10.75C5.41992 10.34 5.75992 10 6.16992 10H9.16992C9.57992 10 9.91992 10.34 9.91992 10.75C9.91992 11.16 9.57992 11.5 9.16992 11.5Z" fill="none" /><path d="M7.16992 21.5H3.16992C2.75992 21.5 2.41992 21.16 2.41992 20.75C2.41992 20.34 2.75992 20 3.16992 20H7.16992C7.57992 20 7.91992 20.34 7.91992 20.75C7.91992 21.16 7.57992 21.5 7.16992 21.5Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPolyswarmNct as IconComponentType).keywords = [
  "polyswarm",
  "nct",
  "trn",
  "nrt",
  "delhi",
  "government",
  "rush hour",
  "pull over",
  "pull in",
  "carry on",
  "pull out"
];

export default IconPolyswarmNct as IconComponentType;