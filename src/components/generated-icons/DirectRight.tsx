import { FC } from 'react';
import { IconProps } from "@/types";

const IconDirectRight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2901 9.1698L7.70015 3.0698C4.95015 1.6198 1.96015 4.5498 3.35015 7.3298L4.97015 10.5698C5.42015 11.4698 5.42015 12.5298 4.97015 13.4298L3.35015 16.6698C1.96015 19.4498 4.95015 22.3698 7.70015 20.9298L19.2901 14.8298C21.5701 13.6298 21.5701 10.3698 19.2901 9.1698Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.70911 17.0202L4.44911 13.5402C4.92911 12.5702 4.92911 11.4402 4.44911 10.4702L2.70911 6.98022C1.21911 4.00022 4.42911 0.850218 7.37911 2.41022L8.91911 3.23022C9.13911 3.34022 9.30911 3.52022 9.39911 3.74022L15.0891 16.3902C15.3191 16.9102 15.1091 17.5202 14.6091 17.7802L7.36911 21.5902C4.42911 23.1502 1.21911 20.0002 2.70911 17.0202Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16.3093 15.6L12.5793 7.31996C12.1593 6.38996 13.1593 5.44996 14.0593 5.92996L19.8293 8.96996C22.2793 10.26 22.2793 13.76 19.8293 15.05L17.7893 16.12C17.2393 16.4 16.5693 16.17 16.3093 15.6Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDirectRight;