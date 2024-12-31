import { FC } from 'react';
import { IconProps } from "../../types";

const IconShare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M16.9609 6.16992C18.9609 7.55992 20.3409 9.76992 20.6209 12.3199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M3.49023 12.3702C3.75023 9.83021 5.11023 7.62021 7.09023 6.22021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M8.18945 20.9399C9.34945 21.5299 10.6695 21.8599 12.0595 21.8599C13.3995 21.8599 14.6595 21.5599 15.7895 21.0099" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.0593 7.70014C13.5946 7.70014 14.8393 6.45549 14.8393 4.92014C14.8393 3.38479 13.5946 2.14014 12.0593 2.14014C10.5239 2.14014 9.2793 3.38479 9.2793 4.92014C9.2793 6.45549 10.5239 7.70014 12.0593 7.70014Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.83078 19.9199C6.36613 19.9199 7.61078 18.6752 7.61078 17.1399C7.61078 15.6045 6.36613 14.3599 4.83078 14.3599C3.29543 14.3599 2.05078 15.6045 2.05078 17.1399C2.05078 18.6752 3.29543 19.9199 4.83078 19.9199Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.1706 19.9199C20.706 19.9199 21.9506 18.6752 21.9506 17.1399C21.9506 15.6045 20.706 14.3599 19.1706 14.3599C17.6353 14.3599 16.3906 15.6045 16.3906 17.1399C16.3906 18.6752 17.6353 19.9199 19.1706 19.9199Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.4303 15H4.40034C2.58034 15 1.42034 13.05 2.30034 11.45L4.63034 7.20994L6.81034 3.23994C7.72034 1.58994 10.1003 1.58994 11.0103 3.23994L13.2003 7.20994L14.2503 9.11995L15.5303 11.45C16.4103 13.05 15.2503 15 13.4303 15Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShare;