import { FC } from 'react';
import { IconProps } from "../../types";

const IconFolderCloud: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44001 10.9 3.20001L12.4 5.20001C12.78 5.70001 13 6 14 6H17C21 6 22 7 22 11V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.7605 18.3199C11.4105 18.4899 11.4105 21.8899 13.7605 22.0599H19.3205C19.9905 22.0599 20.6506 21.8099 21.1406 21.3599C22.7906 19.9199 21.9105 17.0399 19.7405 16.7699C18.9605 12.0799 12.1806 13.8599 13.7806 18.3299" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" fill="currentColor" /><path d="M15.2505 11.2999H13.5505V7.33993C13.5505 6.41993 13.0505 6.22993 12.4405 6.91993L12.0005 7.41993L8.28045 11.6499C7.77045 12.2299 7.98045 12.6999 8.75045 12.6999H10.4505V16.6599C10.4505 17.5799 10.9505 17.7699 11.5605 17.0799L12.0005 16.5799L15.7205 12.3499C16.2305 11.7699 16.0205 11.2999 15.2505 11.2999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFolderCloud;