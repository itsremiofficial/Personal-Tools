import { FC } from 'react';
import { IconProps } from "@/types";

const IconArrowRight3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12.0002V9.33017C6 6.02017 8.35 4.66017 11.22 6.32017L13.53 7.66017L15.84 9.00017C18.71 10.6602 18.71 13.3702 15.84 15.0302L13.53 16.3702L11.22 17.7102C8.35 19.3402 6 17.9902 6 14.6702V12.0002Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M13.2297 8.52002L8.17969 12.31V17.92C8.17969 18.88 9.33969 19.36 10.0197 18.68L15.1997 13.5C16.0297 12.67 16.0297 11.32 15.1997 10.49L13.2297 8.52002Z" fill="currentColor" /><path d="M8.17969 6.07993V12.3099L13.2297 8.51993L10.0197 5.30993C9.33969 4.63993 8.17969 5.11993 8.17969 6.07993Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowRight3;