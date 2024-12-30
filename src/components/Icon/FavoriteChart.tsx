import { FC } from 'react';
import { IconProps } from "../../types";

const IconFavoriteChart: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.33008 14.4898L9.71008 11.3998C10.0501 10.9598 10.6801 10.8798 11.1201 11.2198L12.9501 12.6598C13.3901 12.9998 14.0201 12.9198 14.3601 12.4898L16.6701 9.50977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.4802 15.8199L19.7602 16.3899C19.9002 16.6699 20.2502 16.9299 20.5602 16.9899L20.9402 17.0499C22.0802 17.2399 22.3502 18.0799 21.5302 18.9099L21.1802 19.2599C20.9502 19.4999 20.8202 19.9599 20.8902 20.2799L20.9402 20.4899C21.2502 21.8699 20.5202 22.3999 19.3202 21.6799L19.0602 21.5299C18.7502 21.3499 18.2502 21.3499 17.9402 21.5299L17.6802 21.6799C16.4702 22.4099 15.7402 21.8699 16.0602 20.4899L16.1102 20.2799C16.1802 19.9599 16.0502 19.4999 15.8202 19.2599L15.4702 18.9099C14.6502 18.0799 14.9202 17.2399 16.0602 17.0499L16.4402 16.9899C16.7402 16.9399 17.1002 16.6699 17.2402 16.3899L17.5202 15.8199C18.0602 14.7299 18.9402 14.7299 19.4802 15.8199Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M16.7475 7H11.9175C11.5075 7 11.1675 7.34 11.1675 7.75C11.1675 8.16 11.5075 8.5 11.9175 8.5H14.9375L7.2175 16.22C6.9275 16.51 6.9275 16.99 7.2175 17.28C7.3675 17.43 7.5575 17.5 7.7475 17.5C7.9375 17.5 8.1275 17.43 8.2775 17.28L15.9975 9.56V12.58C15.9975 12.99 16.3375 13.33 16.7475 13.33C17.1575 13.33 17.4975 12.99 17.4975 12.58V7.75C17.4975 7.34 17.1575 7 16.7475 7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFavoriteChart;