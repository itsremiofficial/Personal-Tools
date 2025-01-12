import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconClipboardAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M16 4.00037C18.175 4.01247 19.3529 4.10892 20.1213 4.87731C21 5.75599 21 7.1702 21 9.99863V15.9986C21 18.8271 21 20.2413 20.1213 21.1199C19.2426 21.9986 17.8284 21.9986 15 21.9986H9C6.17157 21.9986 4.75736 21.9986 3.87868 21.1199C3 20.2413 3 18.8271 3 15.9986V9.99863C3 7.1702 3 5.75599 3.87868 4.87731C4.64706 4.10892 5.82497 4.01247 8 4.00037" stroke="currentColor" strokeWidth={width} /><path d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z" stroke="currentColor" strokeWidth={width} /><path d="M15 13.0004L12 13.0004M12 13.0004L9 13.0004M12 13.0004L12 10.0004M12 13.0004L12 16.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21 15.9986V9.99863C21 7.1702 21 5.75599 20.1213 4.87731C19.3529 4.10892 18.175 4.01247 16 4.00037H8C5.82497 4.01247 4.64706 4.10892 3.87868 4.87731C3 5.75599 3 7.1702 3 9.99863V15.9986C3 18.8271 3 20.2413 3.87868 21.1199C4.75736 21.9986 6.17157 21.9986 9 21.9986H15C17.8284 21.9986 19.2426 21.9986 20.1213 21.1199C21 20.2413 21 18.8271 21 15.9986Z" fill="currentColor" /><path d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 9.25037C12.4142 9.25037 12.75 9.58615 12.75 10.0004V12.2504L15 12.2504C15.4142 12.2504 15.75 12.5862 15.75 13.0004C15.75 13.4146 15.4142 13.7504 15 13.7504L12.75 13.7504L12.75 16.0004C12.75 16.4146 12.4142 16.7504 12 16.7504C11.5858 16.7504 11.25 16.4146 11.25 16.0004L11.25 13.7504H9C8.58579 13.7504 8.25 13.4146 8.25 13.0004C8.25 12.5862 8.58579 12.2504 9 12.2504L11.25 12.2504L11.25 10.0004C11.25 9.58615 11.5858 9.25037 12 9.25037Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 2.00037C8.67157 2.00037 8 2.67194 8 3.50037V4.50037C8 5.32879 8.67157 6.00037 9.5 6.00037H14.5C15.3284 6.00037 16 5.32879 16 4.50037V3.50037C16 2.67194 15.3284 2.00037 14.5 2.00037H9.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.87868 4.87731C4.44798 4.308 5.24209 4.10756 6.5 4.03698V4.50037C6.5 6.15722 7.84315 7.50037 9.5 7.50037H14.5C16.1569 7.50037 17.5 6.15722 17.5 4.50037V4.03698C18.7579 4.10756 19.552 4.308 20.1213 4.87731C21 5.75599 21 7.1702 21 9.99863V15.9986C21 18.8271 21 20.2413 20.1213 21.1199C19.2426 21.9986 17.8284 21.9986 15 21.9986H9C6.17157 21.9986 4.75736 21.9986 3.87868 21.1199C3 20.2413 3 18.8271 3 15.9986V9.99863C3 7.1702 3 5.75599 3.87868 4.87731ZM12.75 11.0004C12.75 10.5862 12.4142 10.2504 12 10.2504C11.5858 10.2504 11.25 10.5862 11.25 11.0004L11.25 13.2504H9C8.58579 13.2504 8.25 13.5862 8.25 14.0004C8.25 14.4146 8.58579 14.7504 9 14.7504H11.25V17.0004C11.25 17.4146 11.5858 17.7504 12 17.7504C12.4142 17.7504 12.75 17.4146 12.75 17.0004L12.75 14.7504H15C15.4142 14.7504 15.75 14.4146 15.75 14.0004C15.75 13.5862 15.4142 13.2504 15 13.2504H12.75V11.0004Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconClipboardAdd;