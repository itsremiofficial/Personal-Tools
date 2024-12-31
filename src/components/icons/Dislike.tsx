import { FC } from 'react';
import { IconProps } from "../../types";

const IconDislike: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.5197 5.6499L13.4197 3.2499C13.0197 2.8499 12.1197 2.6499 11.5197 2.6499H7.71973C6.51973 2.6499 5.21973 3.5499 4.91973 4.7499L2.51973 12.0499C2.01973 13.4499 2.91973 14.6499 4.41973 14.6499H8.41973C9.01973 14.6499 9.51973 15.1499 9.41973 15.8499L8.91973 19.0499C8.71973 19.9499 9.31973 20.9499 10.2197 21.2499C11.0197 21.5499 12.0197 21.1499 12.4197 20.5499L16.5197 14.4499" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path d="M21.6191 5.65V15.45C21.6191 16.85 21.0191 17.35 19.6191 17.35H18.6191C17.2191 17.35 16.6191 16.85 16.6191 15.45V5.65C16.6191 4.25 17.2191 3.75 18.6191 3.75H19.6191C21.0191 3.75 21.6191 4.25 21.6191 5.65Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.0192 21.2902L13.5392 19.5502C12.5692 19.0702 11.4392 19.0702 10.4692 19.5502L6.98918 21.2902C3.99918 22.7802 0.84918 19.5702 2.40918 16.6202L3.22918 15.0802C3.33918 14.8702 3.51918 14.7002 3.73918 14.6002L16.3792 8.90017C16.8992 8.67017 17.5092 8.88017 17.7692 9.38017L21.5792 16.6202C23.1392 19.5702 19.9992 22.7802 17.0192 21.2902Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.6004 7.69002L7.32045 11.42C6.39045 11.84 5.45045 10.84 5.93045 9.94002L8.97045 4.17002C10.2604 1.72002 13.7604 1.72002 15.0504 4.17002L16.1204 6.21002C16.4004 6.76002 16.1604 7.44002 15.6004 7.69002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDislike;