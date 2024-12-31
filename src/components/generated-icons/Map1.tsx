import { FC } from 'react';
import { IconProps } from "@/types";

const IconMap1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.28906 7.77998V17.51C2.28906 19.41 3.63906 20.19 5.27906 19.25L7.62906 17.91C8.13906 17.62 8.98906 17.59 9.51906 17.86L14.7691 20.49C15.2991 20.75 16.1491 20.73 16.6591 20.44L20.9891 17.96C21.5391 17.64 21.9991 16.86 21.9991 16.22V6.48998C21.9991 4.58998 20.6491 3.80998 19.0091 4.74998L16.6591 6.08998C16.1491 6.37998 15.2991 6.40998 14.7691 6.13998L9.51906 3.51998C8.98906 3.25998 8.13906 3.27998 7.62906 3.56998L3.29906 6.04998C2.73906 6.36998 2.28906 7.14998 2.28906 7.77998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.56055 4V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.7305 6.62012V20.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.55906 3.33984V17.6698C8.21906 17.6798 7.87906 17.7598 7.62906 17.9098L5.27906 19.2498C3.63906 20.1898 2.28906 19.4098 2.28906 17.5098V7.77984C2.28906 7.14984 2.73906 6.36984 3.29906 6.04984L7.62906 3.56984C7.87906 3.42984 8.21906 3.34984 8.55906 3.33984Z" fill="currentColor" /><path d="M15.7305 6.32994V20.6599C15.3805 20.6699 15.0405 20.6099 14.7705 20.4799L9.52055 17.8499C9.25055 17.7199 8.91055 17.6599 8.56055 17.6699V3.33994C8.91055 3.32994 9.25055 3.38994 9.52055 3.51994L14.7705 6.14994C15.0405 6.27994 15.3805 6.33994 15.7305 6.32994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.0005 6.49006V16.2201C22.0005 16.8501 21.5505 17.6301 20.9905 17.9501L16.6605 20.4301C16.4105 20.5701 16.0705 20.6501 15.7305 20.6601V6.33006C16.0705 6.32006 16.4105 6.24006 16.6605 6.09006L19.0105 4.75006C20.6505 3.81006 22.0005 4.59006 22.0005 6.49006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMap1;