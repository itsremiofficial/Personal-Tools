import { FC } from 'react';
import { IconProps } from "../../types";

const IconDirectUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16931 4.71L3.06931 16.3C1.61931 19.05 4.54931 22.04 7.32931 20.65L10.5693 19.03C11.4693 18.58 12.5293 18.58 13.4293 19.03L16.6693 20.65C19.4493 22.04 22.3693 19.05 20.9293 16.3L14.8293 4.71C13.6293 2.43 10.3693 2.43 9.16931 4.71Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.2897 17.0198L19.5497 13.5398C19.0697 12.5698 19.0697 11.4398 19.5497 10.4698L21.2897 6.98983C22.7797 3.99983 19.5697 0.859829 16.6197 2.41983L15.0797 3.23983C14.8697 3.34983 14.6997 3.52983 14.5997 3.74983L8.89969 16.3898C8.66969 16.9098 8.87969 17.5198 9.37969 17.7798L16.6197 21.5898C19.5697 23.1498 22.7797 19.9998 21.2897 17.0198Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M7.68953 15.6L11.4195 7.31996C11.8395 6.38996 10.8395 5.44996 9.93953 5.92996L4.16953 8.95996C1.71953 10.25 1.71953 13.75 4.16953 15.04L6.20953 16.11C6.75953 16.4 7.42953 16.17 7.68953 15.6Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDirectUp;