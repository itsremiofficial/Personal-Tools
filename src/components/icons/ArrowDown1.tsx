import { FC } from 'react';
import { IconProps } from "../../types";

const IconArrowDown1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0697 14.4302L11.9997 20.5002L5.92969 14.4302" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 3.5V20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M15.5302 14.0099C15.3402 14.0099 15.1502 13.9399 15.0002 13.7899L12.0002 10.7899L9.00016 13.7899C8.71016 14.0799 8.23016 14.0799 7.94016 13.7899C7.65016 13.4999 7.65016 13.0199 7.94016 12.7299L11.4702 9.19992C11.7602 8.90992 12.2402 8.90992 12.5302 9.19992L16.0602 12.7299C16.3502 13.0199 16.3502 13.4999 16.0602 13.7899C15.9102 13.9399 15.7202 14.0099 15.5302 14.0099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrowDown1;