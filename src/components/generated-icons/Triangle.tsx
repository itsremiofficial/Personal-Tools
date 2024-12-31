import { FC } from 'react';
import { IconProps } from "@/types";

const IconTriangle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9994 21.4098H5.93944C2.46944 21.4098 1.01944 18.9298 2.69944 15.8998L5.81944 10.2798L8.75944 4.99979C10.5394 1.78979 13.4594 1.78979 15.2394 4.99979L18.1794 10.2898L21.2994 15.9098C22.9794 18.9398 21.5194 21.4198 18.0594 21.4198H11.9994V21.4098Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M21.4405 19.9996L12.0005 13.3896L2.56055 19.9996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3V13.39" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.59009V13.6101L2.65 20.1501C1.8 19.1401 1.75 17.6101 2.7 15.9001L5.82 10.2901L8.76 5.00009C9.65 3.40009 10.82 2.59009 12 2.59009Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M21.3504 20.1501C20.7004 20.9401 19.5704 21.4101 18.0604 21.4101H5.94039C4.43039 21.4101 3.30039 20.9401 2.65039 20.1501L12.0004 13.6101L21.3504 20.1501Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.35 20.1501L12 13.6101V2.59009C13.18 2.59009 14.35 3.40009 15.24 5.00009L18.18 10.2901L21.3 15.9001C22.25 17.6101 22.2 19.1401 21.35 20.1501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTriangle;