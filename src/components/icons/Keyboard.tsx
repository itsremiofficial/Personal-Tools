import { FC } from 'react';
import { IconProps } from "../../types";

const IconKeyboardOpen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.26022 2H16.7302C17.3802 2 17.9602 2.02003 18.4802 2.09003C21.2502 2.40003 22.0002 3.70001 22.0002 7.26001V13.58C22.0002 17.14 21.2502 18.44 18.4802 18.75C17.9602 18.82 17.3902 18.84 16.7302 18.84H7.26022C6.61022 18.84 6.03022 18.82 5.51022 18.75C2.74022 18.44 1.99023 17.14 1.99023 13.58V7.26001C1.99023 3.70001 2.74022 2.40003 5.51022 2.09003C6.03022 2.02003 6.61022 2 7.26022 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.5801 8.31982H17.2601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.74023 14.1099H6.76022H17.2702" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 22H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.1947 8.2998H7.20368" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.4945 8.2998H10.5035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.7906 4.22007C16.8306 1.27007 12.0306 1.27007 9.09063 4.22007C7.02063 6.27007 6.40063 9.22007 7.20063 11.8201L2.50063 16.5201C2.17063 16.8601 1.94063 17.5301 2.01063 18.0101L2.31063 20.1901C2.42063 20.9101 3.09063 21.5901 3.81063 21.6901L5.99063 21.9901C6.47063 22.0601 7.14063 21.8401 7.48063 21.4901L8.30063 20.6701C8.50063 20.4801 8.50063 20.1601 8.30063 19.9601L6.36063 18.0201C6.07063 17.7301 6.07063 17.2501 6.36063 16.9601C6.65063 16.6701 7.13063 16.6701 7.42063 16.9601L9.37063 18.9101C9.56063 19.1001 9.88063 19.1001 10.0706 18.9101L12.1906 16.8001C14.7806 17.6101 17.7306 16.9801 19.7906 14.9301C22.7406 11.9801 22.7406 7.17007 19.7906 4.22007ZM14.5006 12.0001C13.1206 12.0001 12.0006 10.8801 12.0006 9.50007C12.0006 8.12007 13.1206 7.00007 14.5006 7.00007C15.8806 7.00007 17.0006 8.12007 17.0006 9.50007C17.0006 10.8801 15.8806 12.0001 14.5006 12.0001Z" fill="currentColor" /><path d="M14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 15.8807 7 14.5 7C13.1193 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconKeyboardOpen;