import { FC } from 'react';
import { IconProps } from "../../types";

const IconBook: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 10.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.1186 6.00216C12.6993 5.72427 13.2667 6.01769 13.61 6.30377L15.668 8.02214C15.6685 8.02256 15.669 8.02298 15.6696 8.02341C16.3049 8.5507 16.3362 9.48518 15.7137 10.0455L13.5767 12.0049L15.7137 13.9644C16.3362 14.5247 16.3049 15.4591 15.6696 15.9864C15.6691 15.9869 15.6685 15.9873 15.668 15.9877L13.6105 17.7056L13.6089 17.707C13.2656 17.992 12.7036 18.276 12.1282 18.0067C11.5513 17.7367 11.4099 17.121 11.4099 16.6699V13.9918L9.09672 16.1127C8.79142 16.3927 8.31699 16.3721 8.03705 16.0668C7.75712 15.7615 7.77768 15.2871 8.08298 15.0071L11.3572 12.0049L8.08298 9.00274C7.77768 8.7228 7.75712 8.24837 8.03705 7.94307C8.31699 7.63777 8.79142 7.61721 9.09672 7.89714L11.4099 10.0181V7.33993C11.4099 6.89698 11.5439 6.27721 12.1186 6.00216ZM12.9099 13.4286L14.5698 14.9506L12.9099 16.3366V13.4286ZM12.9099 10.5813V7.6733L14.5698 9.05926L12.9099 10.5813Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBook;