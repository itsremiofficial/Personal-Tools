import { FC } from 'react';
import { IconProps } from "../../types";

const IconHome: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0693 2.81984L3.13929 8.36983C2.35929 8.98983 1.85929 10.2999 2.02929 11.2799L3.35929 19.2398C3.59929 20.6598 4.95928 21.8098 6.39928 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2799C22.1293 10.2999 21.6293 8.98983 20.8593 8.36983L13.9293 2.82985C12.8593 1.96985 11.1293 1.96984 10.0693 2.81984Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z" fill="currentColor" /><path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" fill="currentColor" /><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.17 15.9802C18.2 13.2002 15.58 11.3302 12.63 11.3302C12.62 11.3302 12.61 11.3302 12.6 11.3302L9.07 11.3402C7.55 11.3602 6.19 10.3302 5.78 8.85023V7.00023C5.78 6.58023 5.44 6.24023 5.01 6.24023C4.58 6.24023 4.25 6.58023 4.25 7.00023V18.2202C4.25 18.6402 4.59 18.9802 5.01 18.9802C5.43 18.9802 5.78 18.6402 5.78 18.2202V11.6002C6.66 12.3802 7.81 12.8602 9.06 12.8602C9.07 12.8602 9.07 12.8602 9.08 12.8602L12.61 12.8502C12.62 12.8502 12.62 12.8502 12.63 12.8502C14.92 12.8502 16.97 14.3002 17.72 16.4702C17.83 16.7902 18.13 16.9802 18.44 16.9802C18.52 16.9802 18.61 16.9702 18.69 16.9402C19.1 16.8202 19.31 16.3802 19.17 15.9802Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconHome;