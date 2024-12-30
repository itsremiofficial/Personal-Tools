import { FC } from 'react';
import { IconProps } from "../../types";

const IconAdditem: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3195_3373)"><path opacity={duotone ? "0.4" : "1"} d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.5703 22H14.0003C11.7103 22 10.5703 20.86 10.5703 18.57V11.43C10.5703 9.14 11.7103 8 14.0003 8H18.5703C20.8603 8 22.0003 9.14 22.0003 11.43V18.57C22.0003 20.86 20.8603 22 18.5703 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M14.8691 15H18.1291" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5 16.6301V13.3701" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></g><defs><clipPath ><rect width="24" height="24" fill="none" /></clipPath></defs></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.5703 22H14.0003C11.7103 22 10.5703 20.86 10.5703 18.57V11.43C10.5703 9.14 11.7103 8 14.0003 8H18.5703C20.8603 8 22.0003 9.14 22.0003 11.43V18.57C22.0003 20.86 20.8603 22 18.5703 22Z" fill="currentColor" /><path d="M13.43 5.43V6.77C10.81 6.98 9.32 8.66 9.32 11.43V16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43Z" fill="currentColor" /><path d="M18.1291 14.2501H17.2491V13.3701C17.2491 12.9601 16.9091 12.6201 16.4991 12.6201C16.0891 12.6201 15.7491 12.9601 15.7491 13.3701V14.2501H14.8691C14.4591 14.2501 14.1191 14.5901 14.1191 15.0001C14.1191 15.4101 14.4591 15.7501 14.8691 15.7501H15.7491V16.6301C15.7491 17.0401 16.0891 17.3801 16.4991 17.3801C16.9091 17.3801 17.2491 17.0401 17.2491 16.6301V15.7501H18.1291C18.5391 15.7501 18.8791 15.4101 18.8791 15.0001C18.8791 14.5901 18.5391 14.2501 18.1291 14.2501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconAdditem;