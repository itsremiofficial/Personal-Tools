import { FC } from 'react';
import { IconProps } from "@/types";

const IconArrowUp3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9997 17.9998H9.32968C6.01968 17.9998 4.65968 15.6498 6.31968 12.7798L7.65968 10.4698L8.99968 8.15982C10.6597 5.28982 13.3697 5.28982 15.0297 8.15982L16.3697 10.4698L17.7097 12.7798C19.3697 15.6498 18.0097 17.9998 14.6997 17.9998H11.9997Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.32919 18H14.6692C17.9892 18 19.3392 15.65 17.6892 12.78L16.9492 11.5C16.7692 11.19 16.4392 11 16.0792 11H7.91919C7.55919 11 7.22919 11.19 7.04919 11.5L6.30919 12.78C4.65919 15.65 6.00919 18 9.32919 18Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M8.78957 10.0001H15.2196C15.6096 10.0001 15.8496 9.58006 15.6496 9.25006L15.0096 8.15006C13.3596 5.28006 10.6396 5.28006 8.98957 8.15006L8.34957 9.25006C8.15957 9.58006 8.39957 10.0001 8.78957 10.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowUp3;