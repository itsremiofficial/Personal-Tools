import { FC } from 'react';
import { IconProps } from "@/types";

const IconTransactionMinus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.73022 19.7C7.55022 18.82 8.80023 18.89 9.52023 19.85L10.5302 21.2C11.3402 22.27 12.6502 22.27 13.4602 21.2L14.4702 19.85C15.1902 18.89 16.4402 18.82 17.2602 19.7C19.0402 21.6 20.4902 20.97 20.4902 18.31V7.04C20.4902 3.01 19.5502 2 15.7702 2H8.21024C4.43024 2 3.49023 3.01 3.49023 7.04V18.3C3.50023 20.97 4.96022 21.59 6.73022 19.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.25 10H14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.73022 19.7C7.55022 18.82 8.80023 18.89 9.52023 19.85L10.5302 21.2C11.3402 22.27 12.6502 22.27 13.4602 21.2L14.4702 19.85C15.1902 18.89 16.4402 18.82 17.2602 19.7C19.0402 21.6 20.4902 20.97 20.4902 18.31V7.04C20.4902 3.01 19.5502 2 15.7702 2H8.21024C4.43024 2 3.49023 3.01 3.49023 7.04V18.3C3.50023 20.97 4.96022 21.59 6.73022 19.7Z" fill="currentColor" /><path d="M14.75 10.75H9.25C8.84 10.75 8.5 10.41 8.5 10C8.5 9.59 8.84 9.25 9.25 9.25H14.75C15.16 9.25 15.5 9.59 15.5 10C15.5 10.41 15.16 10.75 14.75 10.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTransactionMinus;