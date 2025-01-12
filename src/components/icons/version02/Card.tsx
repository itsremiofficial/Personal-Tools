import { FC } from 'react';

const IconCard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M2.66992 8.50488H22.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.66992 16.5049H8.66992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.1699 16.5049H15.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M7.10992 3.505H18.2199C21.7799 3.505 22.6699 4.385 22.6699 7.895V16.105C22.6699 19.615 21.7799 20.495 18.2299 20.495H7.10992C3.55992 20.505 2.66992 19.625 2.66992 16.115V7.895C2.66992 4.385 3.55992 3.505 7.10992 3.505Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 9V16.46C22.6699 18.75 20.8099 20.6 18.5199 20.6H6.81992C4.52992 20.6 2.66992 18.75 2.66992 16.46V9H22.6699Z" fill="currentColor" /><path d="M22.6699 7.54002V9.00002H2.66992V7.54002C2.66992 5.25002 4.52992 3.40002 6.81992 3.40002H18.5199C20.8099 3.40002 22.6699 5.25002 22.6699 7.54002Z" fill="currentColor" /><path d="M8.66992 17.25H6.66992C6.25992 17.25 5.91992 16.91 5.91992 16.5C5.91992 16.09 6.25992 15.75 6.66992 15.75H8.66992C9.07992 15.75 9.41992 16.09 9.41992 16.5C9.41992 16.91 9.07992 17.25 8.66992 17.25Z" fill="currentColor" /><path d="M15.1699 17.25H11.1699C10.7599 17.25 10.4199 16.91 10.4199 16.5C10.4199 16.09 10.7599 15.75 11.1699 15.75H15.1699C15.5799 15.75 15.9199 16.09 15.9199 16.5C15.9199 16.91 15.5799 17.25 15.1699 17.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6719 7.55002C22.6719 8.21002 22.1319 8.75002 21.4719 8.75002H3.87188C3.21188 8.75002 2.67188 8.21002 2.67188 7.55002V7.54002C2.67188 5.25002 4.52187 3.40002 6.81187 3.40002H18.5219C20.8119 3.40002 22.6719 5.26002 22.6719 7.55002Z" fill="currentColor" /><path d="M2.67188 11.45V16.46C2.67188 18.75 4.52187 20.6 6.81187 20.6H18.5219C20.8119 20.6 22.6719 18.74 22.6719 16.45V11.45C22.6719 10.79 22.1319 10.25 21.4719 10.25H3.87188C3.21188 10.25 2.67188 10.79 2.67188 11.45ZM8.67188 17.25H6.67188C6.26187 17.25 5.92188 16.91 5.92188 16.5C5.92188 16.09 6.26187 15.75 6.67188 15.75H8.67188C9.08187 15.75 9.42188 16.09 9.42188 16.5C9.42188 16.91 9.08187 17.25 8.67188 17.25ZM15.1719 17.25H11.1719C10.7619 17.25 10.4219 16.91 10.4219 16.5C10.4219 16.09 10.7619 15.75 11.1719 15.75H15.1719C15.5819 15.75 15.9219 16.09 15.9219 16.5C15.9219 16.91 15.5819 17.25 15.1719 17.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCard as IconComponent).keywords = [
  "card",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease"
];

export default IconCard as IconComponent;