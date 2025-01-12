import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconCalendarSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 14.0005V12.0005C22 8.22925 22 6.34363 20.8284 5.17206C19.6569 4.00049 17.7712 4.00049 14 4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005V14.0005C2 17.7717 2 19.6573 3.17157 20.8289C4.34315 22.0005 6.22876 22.0005 10 22.0005H14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M7 4.00049V2.50049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M17 4.00049V2.50049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 9.00049H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="18" cy="18.0005" r="3" stroke="currentColor" strokeWidth={width} /><path d="M20.5 20.5005L22 22.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.96006 2.00049C7.37758 2.00049 7.71605 2.31045 7.71605 2.6928V4.08932C8.38663 4.07741 9.13829 4.07741 9.98402 4.07741H14.016C14.8617 4.07741 15.6134 4.07741 16.284 4.08932V2.6928C16.284 2.31045 16.6224 2.00049 17.0399 2.00049C17.4575 2.00049 17.7959 2.31045 17.7959 2.6928V4.15057C19.2468 4.25696 20.1992 4.51806 20.899 5.15886C21.5987 5.79966 21.8838 6.67188 22 8.00049V9.00049H2V8.00049C2.11618 6.67188 2.4013 5.79966 3.10104 5.15886C3.80079 4.51806 4.75323 4.25696 6.20406 4.15057V2.6928C6.20406 2.31045 6.54253 2.00049 6.96006 2.00049Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M22 14.0005V12.0005C22 11.1615 21.9873 9.66575 21.9744 9.00049H2.00586C1.99296 9.66575 2.00564 11.1615 2.00564 12.0005V14.0005C2.00564 17.7717 2.00564 19.6573 3.17688 20.8289C4.34813 22.0005 6.23321 22.0005 10.0034 22.0005H14.0023C17.7724 22.0005 19.6575 22.0005 20.8288 20.8289C22 19.6573 22 17.7717 22 14.0005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.75 16.5005C17.5074 16.5005 16.5 17.5078 16.5 18.7505C16.5 19.9931 17.5074 21.0005 18.75 21.0005C19.9926 21.0005 21 19.9931 21 18.7505C21 17.5078 19.9926 16.5005 18.75 16.5005ZM15 18.7505C15 16.6794 16.6789 15.0005 18.75 15.0005C20.8211 15.0005 22.5 16.6794 22.5 18.7505C22.5 19.5148 22.2713 20.2257 21.8787 20.8185L23.2803 22.2202C23.5732 22.5131 23.5732 22.9879 23.2803 23.2808C22.9874 23.5737 22.5126 23.5737 22.2197 23.2808L20.818 21.8792C20.2252 22.2718 19.5143 22.5005 18.75 22.5005C16.6789 22.5005 15 20.8216 15 18.7505Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 15.7505C16.7574 15.7505 15.75 16.7578 15.75 18.0005C15.75 19.2431 16.7574 20.2505 18 20.2505C19.2426 20.2505 20.25 19.2431 20.25 18.0005C20.25 16.7578 19.2426 15.7505 18 15.7505ZM14.25 18.0005C14.25 15.9294 15.9289 14.2505 18 14.2505C20.0711 14.2505 21.75 15.9294 21.75 18.0005C21.75 18.7648 21.5213 19.4757 21.1287 20.0685L22.5303 21.4702C22.8232 21.7631 22.8232 22.2379 22.5303 22.5308C22.2374 22.8237 21.7626 22.8237 21.4697 22.5308L20.068 21.1292C19.4752 21.5218 18.7643 21.7505 18 21.7505C15.9289 21.7505 14.25 20.0716 14.25 18.0005Z" fill="currentColor" /><path d="M7.75 2.50049C7.75 2.08627 7.41421 1.75049 7 1.75049C6.58579 1.75049 6.25 2.08627 6.25 2.50049V4.07975C4.81067 4.195 3.86577 4.47786 3.17157 5.17206C2.47737 5.86626 2.19451 6.81116 2.07926 8.25049H21.9207C21.8055 6.81116 21.5226 5.86626 20.8284 5.17206C20.1342 4.47786 19.1893 4.195 17.75 4.07975V2.50049C17.75 2.08627 17.4142 1.75049 17 1.75049C16.5858 1.75049 16.25 2.08627 16.25 2.50049V4.01339C15.5847 4.00049 14.839 4.00049 14 4.00049H10C9.16097 4.00049 8.41527 4.00049 7.75 4.01339V2.50049Z" fill="currentColor" /><path d="M22 12.0005V14.0005C22 14.2058 22 14.4054 21.9998 14.5997C21.0368 13.4682 19.6022 12.7505 18 12.7505C15.1005 12.7505 12.75 15.101 12.75 18.0005C12.75 19.6027 13.4677 21.0373 14.5992 22.0003C14.405 22.0005 14.2053 22.0005 14 22.0005H10C6.22876 22.0005 4.34315 22.0005 3.17157 20.8289C2 19.6573 2 17.7717 2 14.0005V12.0005C2 11.1615 2 10.4158 2.0129 9.75049H21.9871C22 10.4158 22 11.1615 22 12.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCalendarSearch;