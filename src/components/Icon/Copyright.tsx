import { FC } from 'react';
import { IconProps } from "../../types";

const IconCopyright: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.8802 15C14.1702 15.62 13.2502 16 12.2402 16C10.0302 16 8.24023 14.21 8.24023 12C8.24023 9.79 10.0302 8 12.2402 8C13.2502 8 14.1702 8.38 14.8802 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} fillRule="evenodd" clipRule="evenodd" d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12 15.7V16.31H2V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7Z" fill="currentColor" /><path d="M2 16.3101V17.8101V19.8001C2 21.5601 2.44 22.0001 4.22 22.0001H9.78C11.56 22.0001 12 21.5601 12 19.8001V17.8101V16.3101H2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22 4.2V4.81H12V4.2C12 2.44 12.44 2 14.22 2H19.78C21.56 2 22 2.44 22 4.2Z" fill="currentColor" /><path d="M12 4.81006V6.31006V8.30006C12 10.0601 12.44 10.5001 14.22 10.5001H19.78C21.56 10.5001 22 10.0601 22 8.30006V6.31006V4.81006H12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCopyright;