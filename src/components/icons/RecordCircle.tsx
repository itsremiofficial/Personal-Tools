import { FC } from 'react';
import { IconProps } from "../../types";

const IconRecoveryConvert: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6 11.5799V14.3099C13.6 16.5899 12.69 17.4999 10.41 17.4999H7.69C5.42 17.4999 4.5 16.5899 4.5 14.3099V11.5799C4.5 9.3099 5.41 8.3999 7.69 8.3999H10.42C12.69 8.3999 13.6 9.3099 13.6 11.5799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.5004 7.68V10.41C17.5004 12.69 16.5904 13.6 14.3104 13.6H13.6004V11.58C13.6004 9.31 12.6904 8.4 10.4104 8.4H8.40039V7.68C8.40039 5.4 9.31039 4.5 11.5904 4.5H14.3204C16.5904 4.5 17.5004 5.41 17.5004 7.68Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M1 8C1 4.13 4.13 1 8 1L6.95 2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.12 8.13L18.7 8.98L4.76 17.34C3.66 15.85 3 14 3 12C3 7.03 7.03 3 12 3C15.58 3 18.68 5.1 20.12 8.13Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.9999 12.0002C20.9999 16.9702 16.9699 21.0002 11.9999 21.0002C9.52992 21.0002 7.29992 20.0102 5.66992 18.3902L5.75992 18.3402L19.6999 9.98018L20.6299 9.43018C20.8699 10.2502 20.9999 11.1102 20.9999 12.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRecoveryConvert;