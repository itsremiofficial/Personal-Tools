import { FC } from 'react';
import { IconProps } from "../../types";

const IconForbidden: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.93945 19.0799L19.0795 4.93994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.9902 10.84C21.9702 10.36 21.8902 9.88999 21.7402 9.43999C21.0502 7.27999 19.0303 5.71999 16.6503 5.71999H13.8602C13.2802 5.71999 13.2402 5.65998 12.9302 5.24998L11.5303 3.38998C10.8803 2.51998 10.3702 1.98999 8.74023 1.98999H6.41022C3.97022 1.98999 1.99023 3.96999 1.99023 6.40999V9.42998V16.64C1.99023 19.59 4.39027 21.99 7.34027 21.99H16.6403C19.5903 21.99 21.9902 19.59 21.9902 16.64V11.06C22.0002 11 22.0002 10.91 21.9902 10.84Z" fill="currentColor" /><path d="M15.5805 19.7C13.4705 19.85 13.4705 22.91 15.5805 23.06H20.5906C21.2006 23.06 21.7805 22.84 22.2305 22.43C23.7105 21.14 22.9205 18.54 20.9705 18.3C20.2705 14.08 14.1605 15.68 15.6105 19.7" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconForbidden;