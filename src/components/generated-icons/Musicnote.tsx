import { FC } from 'react';
import { IconProps } from "@/types";

const IconMusicnote: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9707 22C10.1798 22 11.9707 20.2091 11.9707 18C11.9707 15.7909 10.1798 14 7.9707 14C5.76156 14 3.9707 15.7909 3.9707 18C3.9707 20.2091 5.76156 22 7.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9707 18V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.6105 2.11L19.0305 3.58C20.1005 3.94 20.9805 5.15 20.9805 6.28V7.45C20.9805 8.98 19.8005 9.83 18.3505 9.35L13.9305 7.88C12.8605 7.52 11.9805 6.31 11.9805 5.18V4C11.9705 2.48 13.1605 1.62 14.6105 2.11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.2605 2.8702L14.8405 1.4002C13.9205 1.0902 12.9905 1.2002 12.3105 1.7002C11.6205 2.2002 11.2305 3.0402 11.2305 4.0102V7.7802L18.1105 10.0702C18.4505 10.1902 18.8005 10.2402 19.1305 10.2402C19.6905 10.2402 20.2105 10.0802 20.6405 9.7702C21.3305 9.2702 21.7205 8.4302 21.7205 7.4602V6.2802C21.7205 4.8502 20.6205 3.3202 19.2605 2.8702Z" fill="currentColor" /><path d="M12.7207 8.27002V18C12.7207 20.62 10.5907 22.75 7.9707 22.75C5.3507 22.75 3.2207 20.62 3.2207 18C3.2207 15.38 5.3507 13.25 7.9707 13.25C9.2307 13.25 10.3707 13.75 11.2207 14.55V7.77002L12.7207 8.27002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMusicnote;