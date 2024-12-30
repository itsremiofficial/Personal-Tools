import { FC } from 'react';
import { IconProps } from "../../types";

const IconLampOn: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.30035 18.0402V16.8802C6.00035 15.4902 4.11035 12.7802 4.11035 9.90018C4.11035 4.95018 8.66035 1.07018 13.8004 2.19018C16.0604 2.69018 18.0404 4.19018 19.0704 6.26018C21.1604 10.4602 18.9604 14.9202 15.7304 16.8702V18.0302C15.7304 18.3202 15.8404 18.9902 14.7704 18.9902H9.26035C8.16035 19.0002 8.30035 18.5702 8.30035 18.0402Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 22.0002C10.79 21.3502 13.21 21.3502 15.5 22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.7807 14.18V17.12C20.7807 18.22 19.8807 19.12 18.7807 19.12H5.2207C4.1207 19.12 3.2207 18.22 3.2207 17.12V14.18C3.2207 9.35998 7.1207 5.45998 11.9407 5.45998H12.0607C16.8807 5.44998 20.7807 9.35998 20.7807 14.18Z" fill="currentColor" /><path d="M12.75 2.53003V5.49003C12.52 5.47003 12.29 5.46003 12.06 5.46003H11.94C11.71 5.46003 11.48 5.47003 11.25 5.49003V2.53003C11.25 2.12003 11.59 1.78003 12 1.78003C12.41 1.78003 12.75 2.12003 12.75 2.53003Z" fill="currentColor" /><path d="M15.3197 19.1101C15.1997 20.8501 13.7597 22.2201 11.9997 22.2201C10.2397 22.2201 8.78969 20.8501 8.67969 19.1101H15.3197Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLampOn;