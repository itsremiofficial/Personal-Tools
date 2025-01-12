import { FC } from 'react';

const IconMoneyAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 14.5C14.0506 14.5 15.1699 13.3807 15.1699 12C15.1699 10.6193 14.0506 9.5 12.6699 9.5C11.2892 9.5 10.1699 10.6193 10.1699 12C10.1699 13.3807 11.2892 14.5 12.6699 14.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.1699 9.5V14.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 18C9.66992 18.75 9.45994 19.46 9.08994 20.06C8.39994 21.22 7.12992 22 5.66992 22C4.20992 22 2.93991 21.22 2.24991 20.06C1.87991 19.46 1.66992 18.75 1.66992 18C1.66992 15.79 3.45992 14 5.66992 14C7.87992 14 9.66992 15.79 9.66992 18Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.15967 17.98H4.17969" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.66992 16.52V19.51" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66992 15.3V9C2.66992 5.5 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 5.5 22.6699 9V15C22.6699 18.5 20.6699 20 17.6699 20H9.16992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 9V15C22.6699 18.5 20.6699 20 17.6699 20H9.11993C9.46993 19.41 9.66992 18.73 9.66992 18C9.66992 15.79 7.87992 14 5.66992 14C4.46992 14 3.39992 14.53 2.66992 15.36V9C2.66992 5.5 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 5.5 22.6699 9Z" fill="currentColor" /><path d="M12.6699 14.5C14.0506 14.5 15.1699 13.3807 15.1699 12C15.1699 10.6193 14.0506 9.5 12.6699 9.5C11.2892 9.5 10.1699 10.6193 10.1699 12C10.1699 13.3807 11.2892 14.5 12.6699 14.5Z" fill="currentColor" /><path d="M19.1699 14.75C18.7599 14.75 18.4199 14.41 18.4199 14V10C18.4199 9.59 18.7599 9.25 19.1699 9.25C19.5799 9.25 19.9199 9.59 19.9199 10V14C19.9199 14.41 19.5799 14.75 19.1699 14.75Z" fill="currentColor" /><path d="M5.66992 14C3.45992 14 1.66992 15.79 1.66992 18C1.66992 18.75 1.87991 19.46 2.24991 20.06C2.93991 21.22 4.20992 22 5.66992 22C7.12992 22 8.39994 21.22 9.08994 20.06C9.45994 19.46 9.66992 18.75 9.66992 18C9.66992 15.79 7.87992 14 5.66992 14ZM7.15991 18.73H6.41992V19.51C6.41992 19.92 6.07992 20.26 5.66992 20.26C5.25992 20.26 4.91992 19.92 4.91992 19.51V18.73H4.17993C3.76993 18.73 3.42993 18.39 3.42993 17.98C3.42993 17.57 3.76993 17.23 4.17993 17.23H4.91992V16.52C4.91992 16.11 5.25992 15.77 5.66992 15.77C6.07992 15.77 6.41992 16.11 6.41992 16.52V17.23H7.15991C7.56991 17.23 7.90991 17.57 7.90991 17.98C7.90991 18.39 7.57991 18.73 7.15991 18.73Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6719 4H7.67188C4.67188 4 2.67188 5.5 2.67188 9V12.56C2.67188 12.93 3.05188 13.16 3.38188 13.01C4.36188 12.56 5.49188 12.39 6.68188 12.6C9.31188 13.07 11.2419 15.51 11.1719 18.18C11.1619 18.6 11.1019 19.01 10.9919 19.41C10.9119 19.72 11.1619 20.01 11.4819 20.01H17.6719C20.6719 20.01 22.6719 18.51 22.6719 15.01V9C22.6719 5.5 20.6719 4 17.6719 4ZM12.6719 14.5C11.2919 14.5 10.1719 13.38 10.1719 12C10.1719 10.62 11.2919 9.5 12.6719 9.5C14.0519 9.5 15.1719 10.62 15.1719 12C15.1719 13.38 14.0519 14.5 12.6719 14.5ZM19.9219 14C19.9219 14.41 19.5819 14.75 19.1719 14.75C18.7619 14.75 18.4219 14.41 18.4219 14V10C18.4219 9.59 18.7619 9.25 19.1719 9.25C19.5819 9.25 19.9219 9.59 19.9219 10V14Z" fill="currentColor" /><path d="M5.67188 14C3.46187 14 1.67188 15.79 1.67188 18C1.67188 18.75 1.88188 19.46 2.25188 20.06C2.94187 21.22 4.21187 22 5.67188 22C7.13188 22 8.40188 21.22 9.09188 20.06C9.46187 19.46 9.67188 18.75 9.67188 18C9.67188 15.79 7.88188 14 5.67188 14ZM7.16187 18.73H6.42188V19.51C6.42188 19.92 6.08187 20.26 5.67188 20.26C5.26187 20.26 4.92188 19.92 4.92188 19.51V18.73H4.18187C3.77187 18.73 3.43187 18.39 3.43187 17.98C3.43187 17.57 3.77187 17.23 4.18187 17.23H4.92188V16.52C4.92188 16.11 5.26187 15.77 5.67188 15.77C6.08187 15.77 6.42188 16.11 6.42188 16.52V17.23H7.16187C7.57187 17.23 7.91187 17.57 7.91187 17.98C7.91187 18.39 7.58187 18.73 7.16187 18.73Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneyAdd as IconComponent).keywords = [
  "money",
  "add",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconMoneyAdd as IconComponent;