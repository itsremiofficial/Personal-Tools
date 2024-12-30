import { FC } from 'react';
import { IconProps } from "../../types";

const IconConvert: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0046 21.9843C17.516 21.9843 21.9838 17.5165 21.9838 12.0051C21.9838 6.49372 17.516 2.02588 12.0046 2.02588C6.49324 2.02588 2.02539 6.49372 2.02539 12.0051C2.02539 17.5165 6.49324 21.9843 12.0046 21.9843Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.13672 4.02148L14.2997 12.2044L14.3197 7.6639" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.8626 19.9786L9.69965 11.8057L9.67969 16.3362" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 8H8V16H16V8Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19C2 20.65 3.35 22 5 22Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconConvert;