import { FC } from 'react';
import { IconProps } from "@/types";

const IconGallery: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 7.81V13.9L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L2.67 18.95L2.56 19.03C2.19 18.23 2 17.28 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z" fill="currentColor" /><path d="M8.99914 10.3801C10.3136 10.3801 11.3791 9.31456 11.3791 8.00012C11.3791 6.68568 10.3136 5.62012 8.99914 5.62012C7.6847 5.62012 6.61914 6.68568 6.61914 8.00012C6.61914 9.31456 7.6847 10.3801 8.99914 10.3801Z" fill="currentColor" /><path d="M22.0005 13.9001V16.1901C22.0005 19.8301 19.8305 22.0001 16.1905 22.0001H7.81055C5.26055 22.0001 3.42055 20.9301 2.56055 19.0301L2.67055 18.9501L7.59055 15.6501C8.39055 15.1101 9.52055 15.1701 10.2305 15.7901L10.5705 16.0701C11.3505 16.7401 12.6105 16.7401 13.3905 16.0701L17.5505 12.5001C18.3305 11.8301 19.5905 11.8301 20.3705 12.5001L22.0005 13.9001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGallery;