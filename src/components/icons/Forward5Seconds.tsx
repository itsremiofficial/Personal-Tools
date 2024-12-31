import { FC } from 'react';
import { IconProps } from "../../types";

const IconForward5Seconds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.98 4.46997L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.0894 7.79974C20.1994 9.27974 20.8894 11.1097 20.8894 13.1097C20.8894 18.0197 16.9094 21.9998 11.9994 21.9998C7.08939 21.9998 3.10938 18.0197 3.10938 13.1097C3.10938 8.19974 7.08939 4.21973 11.9994 4.21973C12.6794 4.21973 13.3394 4.30978 13.9794 4.45978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.9098 10.8301H10.8498L10.0898 13.1201H12.3798C13.2198 13.1201 13.9098 13.8001 13.9098 14.6501C13.9098 15.4901 13.2298 16.1801 12.3798 16.1801H10.0898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.0602 11.8201L20.9002 11.6001C20.6202 11.2601 20.2902 10.9901 19.9102 10.7901C19.4002 10.5001 18.8202 10.3501 18.2202 10.3501H5.7702C5.1702 10.3501 4.6002 10.5001 4.0802 10.7901C3.6902 11.0001 3.3402 11.2901 3.0502 11.6501C2.4802 12.3801 2.2102 13.2801 2.3002 14.1801L2.6702 18.8501C2.8002 20.2601 2.9702 22.0001 6.1402 22.0001H17.8602C21.0302 22.0001 21.1902 20.2601 21.3302 18.8401L21.7002 14.1901C21.7902 13.3501 21.5702 12.5101 21.0602 11.8201ZM14.3902 17.3401H9.6002C9.2102 17.3401 8.9002 17.0201 8.9002 16.6401C8.9002 16.2601 9.2102 15.9401 9.6002 15.9401H14.3902C14.7802 15.9401 15.0902 16.2601 15.0902 16.6401C15.0902 17.0301 14.7802 17.3401 14.3902 17.3401Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M3.38086 11.31C3.60086 11.11 3.82086 10.93 4.08086 10.79C4.59086 10.5 5.17086 10.35 5.77086 10.35H18.2309C18.8309 10.35 19.4009 10.5 19.9209 10.79C20.1809 10.93 20.4109 11.11 20.6209 11.32V10.79V9.82C20.6209 6.25 19.5309 5.16 15.9609 5.16H13.5809C13.1409 5.16 13.1309 5.15 12.8709 4.81L11.6709 3.2C11.1009 2.46 10.6509 2 9.22086 2H8.04086C4.47086 2 3.38086 3.09 3.38086 6.66V10.8V11.31Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconForward5Seconds;