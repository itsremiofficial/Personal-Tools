import { FC } from 'react';
import { IconProps } from "../../types";

const IconArrangeCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M13.8203 6.8501L16.8603 9.89011" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.8203 17.1501V6.8501" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.1806 17.1499L7.14062 14.1099" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.1797 6.8501V17.1501" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8203 1.91016H7.18031C5.06031 1.91016 3.32031 3.65016 3.32031 5.77016V19.8602C3.32031 21.6602 4.61031 22.4202 6.19031 21.5502L11.0703 18.8402C11.5903 18.5502 12.4303 18.5502 12.9403 18.8402L17.8203 21.5502C19.4003 22.4302 20.6903 21.6702 20.6903 19.8602V5.77016C20.6803 3.65016 18.9503 1.91016 16.8203 1.91016Z" fill="currentColor" /><path d="M11.0893 13.2499C10.8993 13.2499 10.7093 13.1799 10.5593 13.0299L9.0593 11.5299C8.7693 11.2399 8.7693 10.7599 9.0593 10.4699C9.3493 10.1799 9.8293 10.1799 10.1193 10.4699L11.0893 11.4399L14.5593 7.96994C14.8493 7.67994 15.3293 7.67994 15.6193 7.96994C15.9093 8.25994 15.9093 8.73994 15.6193 9.02994L11.6193 13.0299C11.4693 13.1799 11.2793 13.2499 11.0893 13.2499Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrangeCircle;