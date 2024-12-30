import { FC } from 'react';
import { IconProps } from "../../types";

const IconPhotoshop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 16V8H9.5C10.6 8 11.5 8.9 11.5 10C11.5 11.1 10.6 12 9.5 12H7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.5 11H15.25C14.56 11 14 11.56 14 12.25C14 12.94 14.56 13.5 15.25 13.5C15.94 13.5 16.5 14.06 16.5 14.75C16.5 15.44 15.94 16 15.25 16H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.0803 15.7201C18.4903 12.1901 15.1003 9.32007 11.5203 9.32007C7.63028 9.32007 4.21028 12.4701 3.88028 16.3501C3.75028 17.8501 4.23028 19.2701 5.22028 20.3401C6.20028 21.4101 7.58028 22.0001 9.08028 22.0001H13.7603C15.4503 22.0001 16.9303 21.3401 17.9403 20.1501C18.9503 18.9601 19.3503 17.3801 19.0803 15.7201Z" fill="currentColor" /><path d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z" fill="currentColor" /><path d="M16.94 9.0299C18.2876 9.0299 19.38 7.93748 19.38 6.5899C19.38 5.24233 18.2876 4.1499 16.94 4.1499C15.5924 4.1499 14.5 5.24233 14.5 6.5899C14.5 7.93748 15.5924 9.0299 16.94 9.0299Z" fill="currentColor" /><path d="M20.5496 12.93C21.6266 12.93 22.4996 12.057 22.4996 10.98C22.4996 9.90307 21.6266 9.03003 20.5496 9.03003C19.4727 9.03003 18.5996 9.90307 18.5996 10.98C18.5996 12.057 19.4727 12.93 20.5496 12.93Z" fill="currentColor" /><path d="M3.94 10.9801C5.28757 10.9801 6.38 9.88767 6.38 8.5401C6.38 7.19252 5.28757 6.1001 3.94 6.1001C2.59243 6.1001 1.5 7.19252 1.5 8.5401C1.5 9.88767 2.59243 10.9801 3.94 10.9801Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPhotoshop;