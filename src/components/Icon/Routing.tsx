import { FC } from 'react';
import { IconProps } from "../../types";

const IconRouting2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M5.4707 9C7.4037 9 8.9707 7.433 8.9707 5.5C8.9707 3.567 7.4037 2 5.4707 2C3.53771 2 1.9707 3.567 1.9707 5.5C1.9707 7.433 3.53771 9 5.4707 9Z" stroke="currentColor" strokeWidth="1.5" /><path opacity={duotone ? "0.4" : "1"} d="M16.9707 15H19.9707C21.0707 15 21.9707 15.9 21.9707 17V20C21.9707 21.1 21.0707 22 19.9707 22H16.9707C15.8707 22 14.9707 21.1 14.9707 20V17C14.9707 15.9 15.8707 15 16.9707 15Z" stroke="currentColor" strokeWidth="1.5" /><path d="M11.9997 5H14.6797C16.5297 5 17.3897 7.29 15.9997 8.51L8.0097 15.5C6.6197 16.71 7.4797 19 9.3197 19H11.9997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.48573 5.5H5.49728" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.4857 18.5H18.4973" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M17.3509 9.04979L15.0109 16.5898C14.4509 18.3798 11.9409 18.4098 11.3509 16.6298L10.651 14.5598C10.461 13.9898 10.0109 13.5298 9.44095 13.3498L7.36095 12.6498C5.59095 12.0598 5.62095 9.52979 7.41095 8.98979L14.951 6.63979C16.431 6.18979 17.8209 7.57979 17.3509 9.04979Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRouting2;