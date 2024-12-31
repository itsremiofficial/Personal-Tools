import { FC } from 'react';
import { IconProps } from "../../types";

const IconArrangeSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17.1494 13.8203L14.1094 16.8603" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.84961 13.8203H17.1496" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.84961 10.1801L9.88961 7.14014" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1496 10.1802H6.84961" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" /><path d="M17.8499 13.5301C17.7699 13.3501 17.6298 13.2001 17.4398 13.1201C17.3498 13.0801 17.2498 13.0601 17.1498 13.0601H6.83984C6.42984 13.0601 6.08984 13.4001 6.08984 13.8101C6.08984 14.2201 6.42984 14.5601 6.83984 14.5601H15.3398L13.5798 16.3201C13.2898 16.6101 13.2898 17.0901 13.5798 17.3801C13.7298 17.5301 13.9198 17.6001 14.1098 17.6001C14.2998 17.6001 14.4899 17.5301 14.6399 17.3801L17.6798 14.3401C17.7498 14.2701 17.7998 14.1901 17.8398 14.1001C17.9198 13.9201 17.9199 13.7101 17.8499 13.5301Z" fill="currentColor" /><path d="M17.1498 9.43009H8.64984L10.4099 7.67011C10.6999 7.38011 10.6999 6.90008 10.4099 6.61008C10.1199 6.32008 9.63986 6.32008 9.34986 6.61008L6.30985 9.65009C6.23985 9.72009 6.18984 9.80011 6.14984 9.89011C6.06984 10.0701 6.06984 10.2801 6.14984 10.4601C6.22984 10.6401 6.36985 10.7901 6.55985 10.8701C6.64985 10.9101 6.74986 10.9301 6.84986 10.9301H17.1599C17.5699 10.9301 17.9099 10.5901 17.9099 10.1801C17.9099 9.77009 17.5698 9.43009 17.1498 9.43009Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconArrangeSquare;