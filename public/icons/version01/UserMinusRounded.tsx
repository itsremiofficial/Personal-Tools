import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconUserMinusRounded: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M15.5841 20.4371C14.5358 20.7949 13.3099 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6083 13.0005 16.8834 13.8157 18.0877 15.0245" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M20.4141 18.5005H18.9999H17.5857" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.5126 21.4879C14.0251 22.0005 14.8501 22.0005 16.5 22.0005C18.1499 22.0005 18.9749 22.0005 19.4874 21.4879C20 20.9754 20 20.1504 20 18.5005C20 16.8506 20 16.0256 19.4874 15.5131C18.9749 15.0005 18.1499 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 20.1504 13 20.9754 13.5126 21.4879ZM15.9167 17.9172H14.9444C14.6223 17.9172 14.3611 18.1783 14.3611 18.5005C14.3611 18.8227 14.6223 19.0838 14.9444 19.0838H15.9167H17.0833H18.0556C18.3777 19.0838 18.6389 18.8227 18.6389 18.5005C18.6389 18.1783 18.3777 17.9172 18.0556 17.9172H17.0833H15.9167Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M18.0947 15.0316C17.6699 15.0005 17.1487 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 19.6668 13 20.4209 13.1811 20.9438C12.7971 20.9811 12.4025 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6134 13.0005 16.8924 13.8189 18.0947 15.0316Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="6.00049" r="4" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.8359 18.5005C16.8359 18.0863 17.1717 17.7505 17.5859 17.7505H20.4144C20.8286 17.7505 21.1644 18.0863 21.1644 18.5005C21.1644 18.9147 20.8286 19.2505 20.4144 19.2505H17.5859C17.1717 19.2505 16.8359 18.9147 16.8359 18.5005Z" fill="currentColor" /><path d="M18.8768 16.2505H17.5859C16.3433 16.2505 15.3359 17.2578 15.3359 18.5005C15.3359 19.1936 15.6494 19.8136 16.1422 20.2263C14.9824 20.7136 13.55 21.0015 12 21.0015C8.13401 21.0015 5 19.2106 5 17.0015C5 14.7923 8.13401 13.0015 12 13.0015C15.4168 13.0015 18.2618 14.4003 18.8768 16.2505Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconUserMinusRounded;