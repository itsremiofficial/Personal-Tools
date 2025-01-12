import { FC } from 'react';

const IconMonitor: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.10992 2H18.2199C21.7799 2 22.6699 2.89 22.6699 6.44V12.77C22.6699 16.33 21.7799 17.21 18.2299 17.21H7.10992C3.55992 17.22 2.66992 16.33 2.66992 12.78V6.44C2.66992 2.89 3.55992 2 7.10992 2Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 17.22V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.66992 13H22.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.16992 22H17.1699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6399 6.41V12.91H2.66992V6.41C2.66992 3.98 4.64992 2 7.07992 2H18.2299C20.6599 2 22.6399 3.98 22.6399 6.41Z" fill="currentColor" /><path d="M2.66992 12.9199V13.1199C2.66992 15.5599 4.64992 17.5299 7.07992 17.5299H10.9199C11.4699 17.5299 11.9199 17.9799 11.9199 18.5299V19.4999C11.9199 20.0499 11.4699 20.4999 10.9199 20.4999H8.49992C8.08992 20.4999 7.74992 20.8399 7.74992 21.2499C7.74992 21.6599 8.07992 21.9999 8.49992 21.9999H16.8499C17.2599 21.9999 17.5999 21.6599 17.5999 21.2499C17.5999 20.8399 17.2599 20.4999 16.8499 20.4999H14.4299C13.8799 20.4999 13.4299 20.0499 13.4299 19.4999V18.5299C13.4299 17.9799 13.8799 17.5299 14.4299 17.5299H18.2399C20.6799 17.5299 22.6499 15.5499 22.6499 13.1199V12.9199H2.66992Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2299 2H7.07992C4.64992 2 2.66992 3.98 2.66992 6.41V12.91V13.11C2.66992 15.55 4.64992 17.52 7.07992 17.52H10.9199C11.4699 17.52 11.9199 17.97 11.9199 18.52V19.49C11.9199 20.04 11.4699 20.49 10.9199 20.49H8.49992C8.08992 20.49 7.74992 20.83 7.74992 21.24C7.74992 21.65 8.07992 22 8.49992 22H16.8499C17.2599 22 17.5999 21.66 17.5999 21.25C17.5999 20.84 17.2599 20.5 16.8499 20.5H14.4299C13.8799 20.5 13.4299 20.05 13.4299 19.5V18.53C13.4299 17.98 13.8799 17.53 14.4299 17.53H18.2399C20.6799 17.53 22.6499 15.55 22.6499 13.12V12.92V6.42C22.6399 3.98 20.6599 2 18.2299 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMonitor as IconComponent).keywords = [
  "monitor",
  "ride herd on",
  "supervise",
  "proctor",
  "reminder",
  "admonisher",
  "varan",
  "monitor lizard",
  "supervised",
  "manage"
];

export default IconMonitor as IconComponent;