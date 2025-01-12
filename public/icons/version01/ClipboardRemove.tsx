import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconClipboardRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M16 4.00037C18.175 4.01247 19.3529 4.10892 20.1213 4.87731C21 5.75599 21 7.1702 21 9.99863V15.9986C21 18.8271 21 20.2413 20.1213 21.1199C19.2426 21.9986 17.8284 21.9986 15 21.9986H9C6.17157 21.9986 4.75736 21.9986 3.87868 21.1199C3 20.2413 3 18.8271 3 15.9986V9.99863C3 7.1702 3 5.75599 3.87868 4.87731C4.64706 4.10892 5.82497 4.01247 8 4.00037" stroke="currentColor" strokeWidth={width} /><path d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z" stroke="currentColor" strokeWidth={width} /><path d="M14.5 11.0004L9.50004 16.0004M9.50002 11.0004L14.5 16.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21 15.9986V9.99863C21 7.1702 21 5.75599 20.1213 4.87731C19.3529 4.10892 18.175 4.01247 16 4.00037H8C5.82497 4.01247 4.64706 4.10892 3.87868 4.87731C3 5.75599 3 7.1702 3 9.99863V15.9986C3 18.8271 3 20.2413 3.87868 21.1199C4.75736 21.9986 6.17157 21.9986 9 21.9986H15C17.8284 21.9986 19.2426 21.9986 20.1213 21.1199C21 20.2413 21 18.8271 21 15.9986Z" fill="currentColor" /><path d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.96967 10.47C9.26256 10.1771 9.73744 10.1771 10.0303 10.47L12 12.4397L13.9697 10.4701C14.2626 10.1772 14.7374 10.1772 15.0303 10.4701C15.3232 10.7629 15.3232 11.2378 15.0303 11.5307L13.0607 13.5004L15.0303 15.47C15.3232 15.7629 15.3232 16.2378 15.0303 16.5307C14.7374 16.8236 14.2625 16.8236 13.9696 16.5307L12 14.561L10.0304 16.5307C9.73746 16.8236 9.26258 16.8236 8.96969 16.5307C8.6768 16.2378 8.6768 15.7629 8.96969 15.47L10.9393 13.5004L8.96967 11.5307C8.67678 11.2378 8.67678 10.7629 8.96967 10.47Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 2.00037C8.67157 2.00037 8 2.67194 8 3.50037V4.50037C8 5.32879 8.67157 6.00037 9.5 6.00037H14.5C15.3284 6.00037 16 5.32879 16 4.50037V3.50037C16 2.67194 15.3284 2.00037 14.5 2.00037H9.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.87868 4.87731C4.44798 4.308 5.24209 4.10756 6.5 4.03698V4.50037C6.5 6.15722 7.84315 7.50037 9.5 7.50037H14.5C16.1569 7.50037 17.5 6.15722 17.5 4.50037V4.03698C18.7579 4.10756 19.552 4.308 20.1213 4.87731C21 5.75599 21 7.1702 21 9.99863V15.9986C21 18.8271 21 20.2413 20.1213 21.1199C19.2426 21.9986 17.8284 21.9986 15 21.9986H9C6.17157 21.9986 4.75736 21.9986 3.87868 21.1199C3 20.2413 3 18.8271 3 15.9986V9.99863C3 7.1702 3 5.75599 3.87868 4.87731ZM12 13.4397L10.0303 11.47C9.73744 11.1771 9.26256 11.1771 8.96967 11.47C8.67678 11.7629 8.67678 12.2378 8.96967 12.5307L10.9394 14.5004L8.96969 16.47C8.6768 16.7629 8.6768 17.2378 8.96969 17.5307C9.26258 17.8236 9.73746 17.8236 10.0304 17.5307L12 15.561L13.9696 17.5307C14.2625 17.8236 14.7374 17.8236 15.0303 17.5307C15.3232 17.2378 15.3232 16.7629 15.0303 16.47L13.0607 14.5004L15.0303 12.5307C15.3232 12.2378 15.3232 11.7629 15.0303 11.4701C14.7374 11.1772 14.2626 11.1772 13.9697 11.4701L12 13.4397Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconClipboardRemove;