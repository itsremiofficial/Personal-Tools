import { FC } from 'react';
import { IconProps } from "../../types";

const IconRuler: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3195_3387)"><path d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M18 7V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M6 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.05 7L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M14 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z" fill="currentColor" /><path d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconRuler;