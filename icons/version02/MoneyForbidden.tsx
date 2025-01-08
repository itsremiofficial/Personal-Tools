import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMoneyForbidden: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 15.2V9C2.66992 5.5 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 5.5 22.6699 9V15C22.6699 18.5 20.6699 20 17.6699 20H9.16992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 14.5C14.0506 14.5 15.1699 13.3807 15.1699 12C15.1699 10.6193 14.0506 9.5 12.6699 9.5C11.2892 9.5 10.1699 10.6193 10.1699 12C10.1699 13.3807 11.2892 14.5 12.6699 14.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.1699 9.5V14.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 18C9.66992 18.75 9.4599 19.46 9.0899 20.06C8.3999 21.22 7.12992 22 5.66992 22C4.20992 22 2.93994 21.22 2.24994 20.06C1.87994 19.46 1.66992 18.75 1.66992 18C1.66992 15.79 3.45992 14 5.66992 14C7.87992 14 9.66992 15.79 9.66992 18Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.41992 15.25L2.91992 20.75" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.37018 20.24C2.38018 20.23 2.38019 20.22 2.38019 20.22L7.88019 14.72C7.89019 14.71 7.90016 14.71 7.91016 14.7C7.27016 14.26 6.49016 14 5.66016 14C3.45016 14 1.66016 15.79 1.66016 18C1.66016 18.75 1.87017 19.46 2.24017 20.06C2.29017 20.12 2.33018 20.18 2.37018 20.24Z" fill="currentColor" /><path d="M8.96991 15.75C8.95991 15.76 8.95995 15.77 8.94995 15.78L3.44995 21.28C3.43995 21.29 3.42992 21.29 3.41992 21.3C4.05992 21.74 4.82992 22 5.66992 22C7.12992 22 8.3999 21.22 9.0899 20.06C9.4599 19.46 9.66992 18.75 9.66992 18C9.66992 17.16 9.40991 16.39 8.96991 15.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 9V15C22.6699 18.5 20.6699 20 17.6699 20H9.11993C9.46993 19.41 9.66992 18.73 9.66992 18C9.66992 15.79 7.87992 14 5.66992 14C4.46992 14 3.39992 14.53 2.66992 15.36V9C2.66992 5.5 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 5.5 22.6699 9Z" fill="currentColor" /><path d="M12.6699 14.5C14.0506 14.5 15.1699 13.3807 15.1699 12C15.1699 10.6193 14.0506 9.5 12.6699 9.5C11.2892 9.5 10.1699 10.6193 10.1699 12C10.1699 13.3807 11.2892 14.5 12.6699 14.5Z" fill="currentColor" /><path d="M19.1699 14.75C18.7599 14.75 18.4199 14.41 18.4199 14V10C18.4199 9.59 18.7599 9.25 19.1699 9.25C19.5799 9.25 19.9199 9.59 19.9199 10V14C19.9199 14.41 19.5799 14.75 19.1699 14.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.37188 20.24C2.38188 20.23 2.38188 20.22 2.38188 20.22L7.88188 14.72C7.89188 14.71 7.90187 14.71 7.91187 14.7C7.28187 14.26 6.51188 14 5.67188 14C3.46187 14 1.67188 15.79 1.67188 18C1.67188 18.75 1.88188 19.46 2.25188 20.06C2.29188 20.12 2.33188 20.18 2.37188 20.24Z" fill="currentColor" /><path d="M8.97188 15.75C8.96187 15.76 8.96187 15.77 8.95187 15.78L3.45187 21.28C3.44187 21.29 3.43187 21.29 3.42188 21.3C4.06187 21.74 4.83188 22 5.67188 22C7.13188 22 8.40188 21.22 9.09188 20.06C9.46187 19.46 9.67188 18.75 9.67188 18C9.67188 17.16 9.41188 16.39 8.97188 15.75Z" fill="currentColor" /><path d="M17.6719 4H7.67188C4.67188 4 2.67188 5.5 2.67188 9V12.56C2.67188 12.93 3.05188 13.16 3.38188 13.01C4.36188 12.56 5.49188 12.39 6.68188 12.6C9.31188 13.07 11.2419 15.51 11.1719 18.18C11.1619 18.6 11.1019 19.01 10.9919 19.41C10.9119 19.72 11.1619 20.01 11.4819 20.01H17.6719C20.6719 20.01 22.6719 18.51 22.6719 15.01V9C22.6719 5.5 20.6719 4 17.6719 4ZM12.6719 14.5C11.2919 14.5 10.1719 13.38 10.1719 12C10.1719 10.62 11.2919 9.5 12.6719 9.5C14.0519 9.5 15.1719 10.62 15.1719 12C15.1719 13.38 14.0519 14.5 12.6719 14.5ZM19.9219 14C19.9219 14.41 19.5819 14.75 19.1719 14.75C18.7619 14.75 18.4219 14.41 18.4219 14V10C18.4219 9.59 18.7619 9.25 19.1719 9.25C19.5819 9.25 19.9219 9.59 19.9219 10V14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneyForbidden as IconComponentType).keywords = [
  "money",
  "forbidden",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
  "prohibited",
  "impermissible",
  "taboo",
  "tabu",
  "out",
  "proscribed",
  "banned",
  "off-limits",
  "not"
];

export default IconMoneyForbidden as IconComponentType;