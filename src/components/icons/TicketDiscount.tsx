import { FC } from 'react';
import { IconProps } from "../../types";

const IconTicketExpired: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9023 19.8701H17.3723C21.0723 19.8701 21.9923 18.9501 21.9923 15.2501C20.7123 15.2501 19.6823 14.2101 19.6823 12.9401C19.6823 11.6601 20.7123 10.6201 21.9923 10.6201V9.70008C21.9923 6.00008 21.0723 5.08008 17.3723 5.08008H10.9923V11.8701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.9936 16.87V19.87H8.22356C6.74356 19.87 5.87357 18.86 4.91357 16.54L4.73356 16.09C5.94356 15.61 6.53357 14.21 6.02357 13C5.53357 11.79 4.14357 11.21 2.92357 11.71L2.75357 11.28C1.31356 7.76 1.81357 6.53 5.33357 5.08L7.97357 4L10.9936 11.32V13.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16219 19.8701H7.99219" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.8391 13.1702C21.2291 13.1702 21.5391 12.8502 21.5391 12.4502V11.5702C21.5391 7.6402 20.3391 6.4502 16.4191 6.4502H10.1191V8.8802C10.5091 8.8802 10.8291 9.2002 10.8291 9.5902V12.2702C10.8291 12.6602 10.5091 12.9802 10.1191 12.9802V15.4902C10.5091 15.4902 10.8291 15.8102 10.8291 16.2002V18.8802C10.8291 19.2702 10.5091 19.5902 10.1191 19.5902V22.0002H16.4191C20.3391 22.0002 21.5391 20.8002 21.5391 16.8802C21.5391 16.4902 21.2291 16.1702 20.8391 16.1702C19.9991 16.1702 19.3291 15.5002 19.3291 14.6702C19.3291 13.8402 19.9991 13.1702 20.8391 13.1702Z" fill="currentColor" /><path d="M7.5707 6.46C7.5807 6.46 7.5807 6.46 7.5707 6.46H7.5807H16.4107C16.4807 6.46 16.5507 6.46 16.6107 6.46C16.6007 6.44 16.6007 6.43 16.6007 6.41C16.5707 6.06 16.7107 5.72 16.9707 5.46C17.1007 5.33 17.1807 5.15 17.1807 4.96C17.1807 4.77 17.1007 4.59 16.9707 4.46L16.4207 3.9C15.4407 2.91 14.3607 2 13.1007 2C11.8507 2 10.7607 2.91 9.7807 3.9L7.2207 6.46C7.3307 6.46 7.4507 6.46 7.5707 6.46Z" fill="currentColor" /><path d="M9.41094 9.58996V12.27C9.41094 12.66 9.73094 12.98 10.1209 12.98V15.49C9.73094 15.49 9.41094 15.81 9.41094 16.2V18.88C9.41094 19.27 9.73094 19.59 10.1209 19.59V22H7.58094C3.66094 22 2.46094 20.8 2.46094 16.88V16.45C2.46094 16.05 2.77094 15.74 3.16094 15.74C4.00094 15.74 4.67094 15.06 4.67094 14.23C4.67094 13.4 4.00094 12.72 3.16094 12.72C2.77094 12.72 2.46094 12.41 2.46094 12.01V11.58C2.46094 7.64996 3.66094 6.45996 7.58094 6.45996H10.1109V8.88996C9.73094 8.88996 9.41094 9.20996 9.41094 9.58996Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTicketExpired;