import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTheGraphGrt: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9801 13.94C13.8468 13.94 15.3601 12.4267 15.3601 10.56C15.3601 8.69327 13.8468 7.17999 11.9801 7.17999C10.1134 7.17999 8.6001 8.69327 8.6001 10.56C8.6001 12.4267 10.1134 13.94 11.9801 13.94Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M15.73 14.81L12.73 17.81" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.1699 9.3125V9.3125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M11.9796 13.9401C13.8463 13.9401 15.3596 12.4268 15.3596 10.5601C15.3596 8.69333 13.8463 7.18005 11.9796 7.18005C10.1129 7.18005 8.59961 8.69333 8.59961 10.5601C8.59961 12.4268 10.1129 13.9401 11.9796 13.9401Z" fill="currentColor" /><path d="M17.1797 8.31006C16.6297 8.31006 16.1797 7.86006 16.1797 7.31006C16.1797 6.76006 16.6197 6.31006 17.1797 6.31006H17.1897C17.7397 6.31006 18.1897 6.76006 18.1897 7.31006C18.1797 7.86006 17.7297 8.31006 17.1797 8.31006Z" fill="currentColor" /><path d="M12.7299 18.56C12.5399 18.56 12.3499 18.49 12.1999 18.34C11.9099 18.05 11.9099 17.57 12.1999 17.28L15.1999 14.28C15.4899 13.99 15.9699 13.99 16.2599 14.28C16.5499 14.57 16.5499 15.05 16.2599 15.34L13.2599 18.34C13.1199 18.49 12.9199 18.56 12.7299 18.56Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM8.60992 10.56C8.60992 8.7 10.1199 7.18 11.9899 7.18C13.8599 7.18 15.3699 8.69 15.3699 10.56C15.3699 12.43 13.8599 13.94 11.9899 13.94C10.1199 13.94 8.60992 12.43 8.60992 10.56ZM16.2599 15.34L13.2599 18.34C13.1099 18.49 12.9199 18.56 12.7299 18.56C12.5399 18.56 12.3499 18.49 12.1999 18.34C11.9099 18.05 11.9099 17.57 12.1999 17.28L15.1999 14.28C15.4899 13.99 15.9699 13.99 16.2599 14.28C16.5499 14.57 16.5599 15.05 16.2599 15.34ZM17.1799 8.31C16.6299 8.31 16.1799 7.86 16.1799 7.31C16.1799 6.76 16.6199 6.31 17.1799 6.31H17.1899C17.7399 6.31 18.1899 6.76 18.1899 7.31C18.1899 7.86 17.7299 8.31 17.1799 8.31Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTheGraphGrt as IconComponentType).keywords = [
  "the",
  "graph",
  "grt",
  "gazette",
  "preface",
  "jews",
  "same",
  "americas",
  "sky",
  "netherlands",
  "internet",
  "president",
  "graphical record",
  "diagram",
  "flowchart",
  "figure",
  "graphical",
  "chart",
  "map",
  "design",
  "graphically",
  "rtg",
  "tso",
  "dre",
  "erd",
  "dir",
  "srt",
  "trb",
  "prb",
  "mda"
];

export default IconTheGraphGrt as IconComponentType;