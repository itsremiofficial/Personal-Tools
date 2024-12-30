import { FC } from 'react';
import { IconProps } from "../../types";

const IconChartSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M10.1103 11.1504H7.4603C6.8303 11.1504 6.32031 11.6603 6.32031 12.2903V17.4103H10.1103V11.1504V11.1504Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.7616 6.6001H11.2415C10.6115 6.6001 10.1016 7.11011 10.1016 7.74011V17.4001H13.8916V7.74011C13.8916 7.11011 13.3916 6.6001 12.7616 6.6001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5504 12.8501H13.9004V17.4001H17.6904V13.9901C17.6804 13.3601 17.1704 12.8501 16.5504 12.8501Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="currentColor" /><path d="M5.59998 8.37988H4C3.45 8.37988 3 8.82988 3 9.37988V17.9999C3 18.5499 3.45 18.9999 4 18.9999H5.59998C6.14998 18.9999 6.59998 18.5499 6.59998 17.9999V9.37988C6.59998 8.81988 6.14998 8.37988 5.59998 8.37988Z" fill="currentColor" /><path d="M12.7992 5.18994H11.1992C10.6492 5.18994 10.1992 5.63994 10.1992 6.18994V17.9999C10.1992 18.5499 10.6492 18.9999 11.1992 18.9999H12.7992C13.3492 18.9999 13.7992 18.5499 13.7992 17.9999V6.18994C13.7992 5.63994 13.3492 5.18994 12.7992 5.18994Z" fill="currentColor" /><path d="M20.0004 2H18.4004C17.8504 2 17.4004 2.45 17.4004 3V18C17.4004 18.55 17.8504 19 18.4004 19H20.0004C20.5504 19 21.0004 18.55 21.0004 18V3C21.0004 2.45 20.5504 2 20.0004 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconChartSquare;