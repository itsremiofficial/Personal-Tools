import { FC } from 'react';
import { IconProps } from "../../types";

const IconSearchFavorite1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M14.4999 6.13008C14.1499 5.03008 14.5599 3.66008 15.7199 3.29008C16.3299 3.09008 17.0799 3.26008 17.5099 3.85008C17.9099 3.24008 18.6899 3.10008 19.2899 3.29008C20.4499 3.66008 20.8599 5.03008 20.5099 6.13008C19.9599 7.88008 18.0399 8.79008 17.5099 8.79008C16.9699 8.79008 15.0699 7.90008 14.4999 6.13008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M9.59922 15.7799C9.40922 15.7799 9.21922 15.7099 9.06922 15.5599L6.57922 13.0699C5.98922 12.4799 5.98922 11.5299 6.57922 10.9399L9.06922 8.44992C9.35922 8.15992 9.83922 8.15992 10.1292 8.44992C10.4192 8.73992 10.4192 9.21992 10.1292 9.50992L7.63922 11.9999L10.1292 14.4999C10.4192 14.7899 10.4192 15.2699 10.1292 15.5599C9.97922 15.6999 9.78922 15.7799 9.59922 15.7799Z" fill="currentColor" /><path d="M14.3998 15.7802C14.2098 15.7802 14.0198 15.7102 13.8698 15.5602C13.5798 15.2702 13.5798 14.7902 13.8698 14.5002L16.3598 12.0002L13.8698 9.50016C13.5798 9.21016 13.5798 8.73016 13.8698 8.44016C14.1598 8.15016 14.6398 8.15016 14.9298 8.44016L17.4198 10.9302C18.0098 11.5202 18.0098 12.4702 17.4198 13.0602L14.9298 15.5502C14.7898 15.7002 14.5898 15.7802 14.3998 15.7802Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSearchFavorite1;