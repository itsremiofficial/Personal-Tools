import { FC } from 'react';
import { IconProps } from "@/types";

const IconPath2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3195_3382)"><path d="M9.87007 22.0001H14.1601C15.7801 22.0001 16.8501 20.8401 16.5301 19.4301L15.8401 16.3501H8.20007L7.51007 19.4301C7.20007 20.7601 8.34007 22.0001 9.87007 22.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8292 16.3501L18.7692 13.7401C20.4092 12.2801 20.4792 11.2601 19.1792 9.61012L13.9892 3.03012C12.8992 1.65012 11.1192 1.65012 10.0192 3.03012L4.83916 9.61012C3.53916 11.2601 3.53916 12.3301 5.24916 13.7401L8.18916 16.3501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.0098 2.66992V6.96992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.1506 22.0001H9.87057C8.34057 22.0001 7.20057 20.7601 7.49057 19.4301L8.19057 16.3501H15.8306L16.5306 19.4301C16.8506 20.8401 15.7806 22.0001 14.1506 22.0001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.7692 13.7402L15.8292 16.3502H8.18916L5.24916 13.7402C3.53916 12.3402 3.53916 11.2602 4.83916 9.61018L10.0292 3.04018C10.3892 2.59018 10.8092 2.28018 11.2592 2.12018C11.7492 1.95018 12.2692 1.95018 12.7592 2.12018C13.2092 2.28018 13.6292 2.59018 13.9892 3.04018L19.1792 9.61018C20.4792 11.2602 20.4192 12.2802 18.7692 13.7402Z" fill="currentColor" /><path d="M12.7598 2.12018V6.97018C12.7598 7.38018 12.4198 7.72018 12.0098 7.72018C11.5998 7.72018 11.2598 7.38018 11.2598 6.97018V2.12018C11.7498 1.95018 12.2698 1.95018 12.7598 2.12018Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPath2;