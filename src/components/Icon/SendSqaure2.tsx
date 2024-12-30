import { FC } from 'react';
import { IconProps } from "../../types";

const IconSendSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9 9.50977L12 6.50977L15 9.50977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 6.50977V14.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.11039 5.96003L16.1304 2.95003C20.1804 1.60003 22.3804 3.81003 21.0404 7.86003L18.0304 16.88C16.0104 22.95 12.6904 22.95 10.6704 16.88L9.78039 14.2L7.10039 13.31C1.04039 11.3 1.04039 7.99003 7.11039 5.96003Z" fill="currentColor" /><path d="M12.1191 11.6301L15.9291 7.81006L12.1191 11.6301Z" fill="currentColor" /><path d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSendSquare;