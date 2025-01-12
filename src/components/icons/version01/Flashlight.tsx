import { FC } from 'react';

const IconFlashlight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11.6569V19C9 19.9319 9 20.3978 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C15 20.3978 15 19.9319 15 19V11.6569C15 10.8394 15 10.4306 15.1522 10.0631C15.3045 9.69552 15.5935 9.40648 16.1716 8.82843L19.4142 5.58579C19.7032 5.29676 19.8478 5.15224 19.9239 4.96847C20 4.7847 20 4.58032 20 4.17157V4C20 3.05719 20 2.58579 19.7071 2.29289C19.4142 2 18.9428 2 18 2H6C5.05719 2 4.58579 2 4.29289 2.29289C4 2.58579 4 3.05719 4 4V4.17157C4 4.58032 4 4.7847 4.07612 4.96847C4.15224 5.15224 4.29676 5.29676 4.58579 5.58579L7.82843 8.82843C8.40649 9.40649 8.69552 9.69552 8.84776 10.0631C9 10.4306 9 10.8394 9 11.6569Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15 10H9" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 13V15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M4.5 5H19.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M9.00037 11.6569V19C9.00037 19.9319 9.00037 20.3978 9.15261 20.7654C9.3556 21.2554 9.74495 21.6448 10.235 21.8478C10.6025 22 11.0685 22 12.0004 22C12.9323 22 13.3982 22 13.7657 21.8478C14.2558 21.6448 14.6451 21.2554 14.8481 20.7654C15.0004 20.3978 15.0004 19.9319 15.0004 19V11.6569C15.0004 10.8394 15.0004 10.4306 15.1526 10.0631C15.1614 10.0418 15.1707 10.0208 15.1804 10H8.82031C8.83006 10.0208 8.83933 10.0418 8.84813 10.0631C9.00037 10.4306 9.00037 10.8394 9.00037 11.6569Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 12.25C12.4142 12.25 12.75 12.5858 12.75 13V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V13C11.25 12.5858 11.5858 12.25 12 12.25Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M20 4.17157V4C20 3.05719 20 2.58579 19.7071 2.29289C19.4142 2 18.9428 2 18 2H6C5.05719 2 4.58579 2 4.29289 2.29289C4 2.58579 4 3.05719 4 4V4.17157C4 4.58032 4 4.7847 4.07612 4.96847C4.08052 4.9791 4.08516 4.9896 4.09003 5H19.91C19.9148 4.9896 19.9195 4.9791 19.9239 4.96847C20 4.7847 20 4.58032 20 4.17157Z" fill="currentColor" /><path d="M16.1714 8.82843L19.414 5.58579C19.6863 5.31347 19.8304 5.16944 19.9098 5H4.08984C4.16926 5.16944 4.31329 5.31347 4.5856 5.58579L7.82824 8.82843C8.37287 9.37305 8.66093 9.66112 8.81975 10H15.1799C15.3387 9.66112 15.6268 9.37305 16.1714 8.82843Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.25H4.00002L4 4C4 3.05719 4 2.58579 4.29289 2.29289C4.58579 2 5.05719 2 6 2H18C18.9428 2 19.4142 2 19.7071 2.29289C20 2.58579 20 3.05719 20 4L20 4.25Z" fill="currentColor" /><path d="M16.1716 8.82843C16.0094 8.99057 15.87 9.12998 15.75 9.25475V9.25H8.25V9.25475C8.12999 9.12999 7.99061 8.99061 7.8285 8.8285L4.75 5.75H19.25L16.1716 8.82843Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9 11.6569V19C9 19.9319 9 20.3978 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C15 20.3978 15 19.9319 15 19V11.6569C15 11.2795 15 10.9893 15.015 10.75H8.98503C9 10.9893 9 11.2795 9 11.6569ZM12.75 13C12.75 12.5858 12.4142 12.25 12 12.25C11.5858 12.25 11.25 12.5858 11.25 13V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V13Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFlashlight as IconComponent).keywords = [
  "flashlight",
  "torch",
  "lamp",
  "searchlight",
  "lantern",
  "blowtorch",
  "bonfire",
  "luminous",
  "flare",
  "light"
];

export default IconFlashlight as IconComponent;