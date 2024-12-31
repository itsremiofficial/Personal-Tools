import { FC } from 'react';
import { IconProps } from "../../types";

const IconTransactionMinus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.73022 19.7C7.55022 18.82 8.80023 18.89 9.52023 19.85L10.5302 21.2C11.3402 22.27 12.6502 22.27 13.4602 21.2L14.4702 19.85C15.1902 18.89 16.4402 18.82 17.2602 19.7C19.0402 21.6 20.4902 20.97 20.4902 18.31V7.04C20.4902 3.01 19.5502 2 15.7702 2H8.21024C4.43024 2 3.49023 3.01 3.49023 7.04V18.3C3.50023 20.97 4.96022 21.59 6.73022 19.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.25 10H14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.35 3.85986H16.65C20.75 3.85986 22 5.10986 22 9.20986V14.7899C22 18.8899 20.75 20.1399 16.65 20.1399H7.35C3.25 20.1399 2 18.8899 2 14.7899V9.20986C2 5.10986 3.25 3.85986 7.35 3.85986Z" fill="currentColor" /><path d="M13.2102 7.58008H15.4402C17.6902 7.58008 18.7402 8.63008 18.7402 10.8801V13.1101C18.7402 15.3601 17.6902 16.4101 15.4402 16.4101H13.2102C10.9602 16.4101 9.91016 15.3601 9.91016 13.1101V10.8801C9.91016 8.63008 10.9602 7.58008 13.2102 7.58008Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTransactionMinus;