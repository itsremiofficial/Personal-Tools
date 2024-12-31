import { FC } from 'react';
import { IconProps } from "../../types";

const IconDiscover: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /><path opacity={duotone ? "0.4" : "1"} d="M13.5 8C10.47 8 8 10.48 8 13.5C8 14.87 9.12 16 10.5 16C13.52 16 16 13.52 16 10.5C16 9.13 14.87 8 13.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.70911 17.0202L4.44911 13.5402C4.92911 12.5702 4.92911 11.4402 4.44911 10.4702L2.70911 6.98022C1.21911 4.00022 4.42911 0.850218 7.37911 2.41022L8.91911 3.23022C9.13911 3.34022 9.30911 3.52022 9.39911 3.74022L15.0891 16.3902C15.3191 16.9102 15.1091 17.5202 14.6091 17.7802L7.36911 21.5902C4.42911 23.1502 1.21911 20.0002 2.70911 17.0202Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.3093 15.6L12.5793 7.31996C12.1593 6.38996 13.1593 5.44996 14.0593 5.92996L19.8293 8.96996C22.2793 10.26 22.2793 13.76 19.8293 15.05L17.7893 16.12C17.2393 16.4 16.5693 16.17 16.3093 15.6Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDiscover;