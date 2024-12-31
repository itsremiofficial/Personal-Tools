import { FC } from 'react';
import { IconProps } from "@/types";

const IconFolderCloud: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44001 10.9 3.20001L12.4 5.20001C12.78 5.70001 13 6 14 6H17C21 6 22 7 22 11V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.7605 18.3199C11.4105 18.4899 11.4105 21.8899 13.7605 22.0599H19.3205C19.9905 22.0599 20.6506 21.8099 21.1406 21.3599C22.7906 19.9199 21.9105 17.0399 19.7405 16.7699C18.9605 12.0799 12.1806 13.8599 13.7806 18.3299" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.9902 10.84C21.9702 10.36 21.8902 9.88999 21.7402 9.43999C21.0502 7.27999 19.0303 5.71999 16.6503 5.71999H13.8602C13.2802 5.71999 13.2402 5.65998 12.9302 5.24998L11.5303 3.38998C10.8803 2.51998 10.3702 1.98999 8.74023 1.98999H6.41022C3.97022 1.98999 1.99023 3.96999 1.99023 6.40999V9.42998V16.64C1.99023 19.59 4.39027 21.99 7.34027 21.99H16.6403C19.5903 21.99 21.9902 19.59 21.9902 16.64V11.06C22.0002 11 22.0002 10.91 21.9902 10.84Z" fill="currentColor" /><path d="M15.5805 19.7C13.4705 19.85 13.4705 22.91 15.5805 23.06H20.5906C21.2006 23.06 21.7805 22.84 22.2305 22.43C23.7105 21.14 22.9205 18.54 20.9705 18.3C20.2705 14.08 14.1605 15.68 15.6105 19.7" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolderCloud;