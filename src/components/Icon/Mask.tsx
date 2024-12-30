import { FC } from 'react';
import { IconProps } from "../../types";

const IconMask1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17 12C17 14.76 14.76 17 12 17V7C14.76 7 17 9.24 17 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 22V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 7V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.55906 3.33984V17.6698C8.21906 17.6798 7.87906 17.7598 7.62906 17.9098L5.27906 19.2498C3.63906 20.1898 2.28906 19.4098 2.28906 17.5098V7.77984C2.28906 7.14984 2.73906 6.36984 3.29906 6.04984L7.62906 3.56984C7.87906 3.42984 8.21906 3.34984 8.55906 3.33984Z" fill="currentColor" /><path d="M15.7305 6.32994V20.6599C15.3805 20.6699 15.0405 20.6099 14.7705 20.4799L9.52055 17.8499C9.25055 17.7199 8.91055 17.6599 8.56055 17.6699V3.33994C8.91055 3.32994 9.25055 3.38994 9.52055 3.51994L14.7705 6.14994C15.0405 6.27994 15.3805 6.33994 15.7305 6.32994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.0005 6.49006V16.2201C22.0005 16.8501 21.5505 17.6301 20.9905 17.9501L16.6605 20.4301C16.4105 20.5701 16.0705 20.6501 15.7305 20.6601V6.33006C16.0705 6.32006 16.4105 6.24006 16.6605 6.09006L19.0105 4.75006C20.6505 3.81006 22.0005 4.59006 22.0005 6.49006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMask1;