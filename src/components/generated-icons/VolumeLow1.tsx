import { FC } from 'react';
import { IconProps } from "@/types";

const IconVolumeLow1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33008 9.99979V13.9998C3.33008 15.9998 4.33008 16.9998 6.33008 16.9998H7.76008C8.13008 16.9998 8.50008 17.1098 8.82008 17.2998L11.7401 19.1298C14.2601 20.7098 16.3301 19.5598 16.3301 16.5898V7.40979C16.3301 4.42979 14.2601 3.28979 11.7401 4.86979L8.82008 6.69979C8.50008 6.88979 8.13008 6.99979 7.76008 6.99979H6.33008C4.33008 6.99979 3.33008 7.99979 3.33008 9.99979Z" stroke="currentColor" strokeWidth="1.5" /><path opacity={duotone ? "0.4" : "1"} d="M19.3301 8C21.1101 10.37 21.1101 13.63 19.3301 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.3304 16.7498C19.1704 16.7498 19.0204 16.6998 18.8804 16.5998C18.5504 16.3498 18.4804 15.8798 18.7304 15.5498C20.3004 13.4598 20.3004 10.5398 18.7304 8.44978C18.4804 8.11978 18.5504 7.64978 18.8804 7.39978C19.2104 7.14978 19.6804 7.21978 19.9304 7.54978C21.9004 10.1698 21.9004 13.8298 19.9304 16.4498C19.7904 16.6498 19.5604 16.7498 19.3304 16.7498Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.0801 7.41021V16.5902C17.0801 18.3102 16.4601 19.6002 15.3501 20.2202C14.9001 20.4702 14.4001 20.5902 13.8801 20.5902C13.0801 20.5902 12.2201 20.3202 11.3401 19.7702L8.42008 17.9402C8.22008 17.8202 7.99008 17.7502 7.76008 17.7502H6.83008V6.25021H7.76008C7.99008 6.25021 8.22008 6.18021 8.42008 6.06021L11.3401 4.23021C12.8001 3.32021 14.2301 3.16021 15.3501 3.78021C16.4601 4.40021 17.0801 5.69021 17.0801 7.41021Z" fill="currentColor" /><path d="M6.83008 6.25V17.75H6.33008C3.91008 17.75 2.58008 16.42 2.58008 14V10C2.58008 7.58 3.91008 6.25 6.33008 6.25H6.83008Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconVolumeLow1;