import { FC } from 'react';
import { IconProps } from "../../types";

const IconFlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.31993 13.28H12.4099V20.48C12.4099 21.54 13.7299 22.04 14.4299 21.24L21.9999 12.64C22.6599 11.89 22.1299 10.72 21.1299 10.72H18.0399V3.51997C18.0399 2.45997 16.7199 1.95997 16.0199 2.75997L8.44994 11.36C7.79994 12.11 8.32993 13.28 9.31993 13.28Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.5 4H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.5 20H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.5 12H1.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.9208 10.12C17.5908 10.04 17.2409 10 16.8809 10C14.2609 10 12.1309 12.13 12.1309 14.75C12.1309 15.64 12.3809 16.48 12.8209 17.2C13.1909 17.82 13.7009 18.35 14.3209 18.73C15.0609 19.22 15.9409 19.5 16.8809 19.5C18.6209 19.5 20.1309 18.57 20.9509 17.2C21.3909 16.48 21.6309 15.64 21.6309 14.75C21.6309 12.49 20.0508 10.59 17.9208 10.12ZM19.2509 14.13L16.7109 16.47C16.5709 16.6 16.3809 16.67 16.2009 16.67C16.0109 16.67 15.8208 16.6 15.6708 16.45L14.5009 15.28C14.2109 14.99 14.2109 14.51 14.5009 14.22C14.7909 13.93 15.2709 13.93 15.5609 14.22L16.2208 14.88L18.2308 13.03C18.5408 12.75 19.0108 12.77 19.2908 13.07C19.5708 13.38 19.5509 13.85 19.2509 14.13Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.41016 2H18.5802C19.6802 2 20.5802 2.90999 20.5802 4.01999V6.23999C20.5802 7.04999 20.0802 8.06 19.5802 8.56L15.2902 12.4C14.6902 12.91 14.2902 13.92 14.2902 14.72V19.06C14.2902 19.67 13.8902 20.47 13.3902 20.78L11.9902 21.69C10.6902 22.5 8.90021 21.59 8.90021 19.97V14.62C8.90021 13.91 8.50016 13 8.10016 12.5L4.31018 8.45999C3.81018 7.94999 3.41016 7.05 3.41016 6.44V4.12C3.42016 2.91 4.32016 2 5.41016 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFlash;