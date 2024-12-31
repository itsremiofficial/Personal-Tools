import { FC } from 'react';
import { IconProps } from "@/types";

const IconShip: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4198 12.3702C21.2898 12.7202 21.8297 13.7502 21.6297 14.6602L21.2197 16.5202C20.5097 19.7202 17.9997 22.0002 14.3797 22.0002H9.61974C5.99974 22.0002 3.48974 19.7202 2.77974 16.5202L2.36974 14.6602C2.16974 13.7502 2.70973 12.7202 3.57973 12.3702L4.99974 11.8002L10.5098 9.59018C11.4698 9.21018 12.5297 9.21018 13.4897 9.59018L18.9997 11.8002L20.4198 12.3702Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.6297 14.6601L21.2197 16.5201C20.5097 19.72 17.9997 22.0001 14.3797 22.0001H9.61974C5.99974 22.0001 3.48974 19.72 2.77974 16.5201L2.36974 14.6601C2.16974 13.7501 2.70973 12.7201 3.57973 12.3701L4.99974 11.8L10.5098 9.59006C10.9898 9.40006 11.4997 9.30005 11.9997 9.30005C12.4997 9.30005 13.0097 9.40006 13.4897 9.59006L18.9997 11.8L20.4198 12.3701C21.2898 12.7201 21.8298 13.7501 21.6297 14.6601Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" fill="currentColor" /><path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShip;