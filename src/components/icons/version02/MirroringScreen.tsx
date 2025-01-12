import { FC } from 'react';

const IconMirroringScreen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 9V8C2.66992 5 4.66992 3 7.66992 3H17.6699C20.6699 3 22.6699 5 22.6699 8V16C22.6699 19 20.6699 21 17.6699 21H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.36035 11.71C8.98035 12.3 12.3704 15.7 12.9704 20.32" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.29004 15.0701C6.68004 15.5001 9.17005 18.0001 9.61005 21.3901" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.65039 18.8599C4.34039 19.0799 5.59039 20.3199 5.81039 22.0199" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.66992 9V8C2.66992 5.24 4.90992 3 7.66992 3H17.6699C20.4299 3 22.6699 5.24 22.6699 8V16C22.6699 18.76 20.4299 21 17.6699 21H16.6699H7.66992C4.90992 21 2.66992 18.76 2.66992 16V9Z" fill="currentColor" /><path d="M16.8101 15.44C16.4401 15.44 16.1201 15.16 16.0701 14.79C15.6401 11.41 13.1801 8.95003 9.80015 8.52003C9.39015 8.47003 9.10014 8.09001 9.15014 7.68001C9.20014 7.27001 9.58015 6.98002 9.99015 7.03002C14.0601 7.55002 17.0301 10.52 17.5601 14.6C17.6101 15.01 17.3201 15.39 16.9101 15.44C16.8801 15.44 16.8501 15.44 16.8101 15.44Z" fill="currentColor" /><path d="M14.1098 16.3C13.7398 16.3 13.4198 16.02 13.3698 15.65C13.0598 13.27 11.3298 11.53 8.93979 11.22C8.52979 11.17 8.23978 10.79 8.28978 10.38C8.33978 9.96998 8.7198 9.67997 9.1298 9.72997C12.2098 10.13 14.4598 12.37 14.8598 15.46C14.9098 15.87 14.6198 16.25 14.2098 16.3C14.1798 16.3 14.1398 16.3 14.1098 16.3Z" fill="currentColor" /><path d="M11.06 16.81C10.69 16.81 10.37 16.53 10.32 16.16C10.19 15.14 9.45001 14.4 8.43001 14.27C8.02001 14.22 7.73002 13.84 7.78002 13.43C7.83002 13.02 8.21002 12.73 8.62002 12.78C10.31 13 11.59 14.28 11.81 15.97C11.86 16.38 11.57 16.76 11.16 16.81C11.13 16.81 11.09 16.81 11.06 16.81Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6699 3H7.66992C4.90992 3 2.66992 5.24 2.66992 8V9V16C2.66992 18.76 4.90992 21 7.66992 21H16.6699H17.6699C20.4299 21 22.6699 18.76 22.6699 16V8C22.6699 5.24 20.4299 3 17.6699 3ZM11.1599 16.81C11.1299 16.81 11.0999 16.82 11.0599 16.82C10.6899 16.82 10.3699 16.54 10.3199 16.17C10.1899 15.15 9.44992 14.41 8.42992 14.28C8.01992 14.23 7.72992 13.85 7.77992 13.44C7.82992 13.03 8.20992 12.74 8.61992 12.79C10.3099 13.01 11.5899 14.29 11.8099 15.98C11.8599 16.38 11.5699 16.76 11.1599 16.81ZM14.2099 16.3C14.1799 16.3 14.1499 16.31 14.1099 16.31C13.7399 16.31 13.4199 16.03 13.3699 15.66C13.0599 13.28 11.3299 11.54 8.93992 11.23C8.52992 11.18 8.23992 10.8 8.28992 10.39C8.33992 9.98 8.71992 9.69 9.12992 9.74C12.2099 10.14 14.4599 12.38 14.8599 15.47C14.9099 15.87 14.6199 16.24 14.2099 16.3ZM16.9099 15.43C16.8799 15.43 16.8499 15.44 16.8099 15.44C16.4399 15.44 16.1199 15.16 16.0699 14.79C15.6399 11.41 13.1799 8.95 9.79992 8.52C9.38992 8.47 9.09992 8.09 9.14992 7.68C9.19992 7.27 9.57992 6.98 9.98992 7.03C14.0599 7.55 17.0299 10.52 17.5599 14.6C17.6099 15.01 17.3199 15.38 16.9099 15.43Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMirroringScreen as IconComponent).keywords = [
  "mirroring",
  "screen",
  "reflected",
  "reflecting",
  "doubling",
  "duplication",
  "replica",
  "duplicative",
  "overlapping",
  "overlap",
  "replication",
  "screen door",
  "cover",
  "screen out",
  "sieve",
  "shield",
  "silver screen",
  "sort",
  "test",
  "block out"
];

export default IconMirroringScreen as IconComponent;