import { FC } from 'react';
import { IconProps } from "../../types";

const IconMessage: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.9965 11H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.9945 11H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.99451 11H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.5401 8.81014C19.1748 8.81014 20.5001 7.4849 20.5001 5.85014C20.5001 4.21537 19.1748 2.89014 17.5401 2.89014C15.9053 2.89014 14.5801 4.21537 14.5801 5.85014C14.5801 7.4849 15.9053 8.81014 17.5401 8.81014Z" fill="currentColor" /><path d="M6.46 8.81014C8.09476 8.81014 9.42 7.4849 9.42 5.85014C9.42 4.21537 8.09476 2.89014 6.46 2.89014C4.82524 2.89014 3.5 4.21537 3.5 5.85014C3.5 7.4849 4.82524 8.81014 6.46 8.81014Z" fill="currentColor" /><path d="M17.5401 21.1099C19.1748 21.1099 20.5001 19.7847 20.5001 18.1499C20.5001 16.5152 19.1748 15.1899 17.5401 15.1899C15.9053 15.1899 14.5801 16.5152 14.5801 18.1499C14.5801 19.7847 15.9053 21.1099 17.5401 21.1099Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.46 21.1099C8.09476 21.1099 9.42 19.7847 9.42 18.1499C9.42 16.5152 8.09476 15.1899 6.46 15.1899C4.82524 15.1899 3.5 16.5152 3.5 18.1499C3.5 19.7847 4.82524 21.1099 6.46 21.1099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessage;