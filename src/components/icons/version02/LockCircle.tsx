import { FC } from 'react';

const IconLockCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.66992 11V10C9.66992 8.34 10.1699 7 12.6699 7C15.1699 7 15.6699 8.34 15.6699 10V11" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6698 14.5999C13.0012 14.5999 13.2698 14.3313 13.2698 13.9999C13.2698 13.6685 13.0012 13.3999 12.6698 13.3999C12.3384 13.3999 12.0698 13.6685 12.0698 13.9999C12.0698 14.3313 12.3384 14.5999 12.6698 14.5999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.1699 17H10.1699C8.16992 17 7.66992 16.5 7.66992 14.5V13.5C7.66992 11.5 8.16992 11 10.1699 11H15.1699C17.1699 11 17.6699 11.5 17.6699 13.5V14.5C17.6699 16.5 17.1699 17 15.1699 17Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M16.42 10.73V10C16.42 9.07 16.42 6.25 12.67 6.25C8.92004 6.25 8.92004 9.07 8.92004 10V10.73C7.70004 11 7.29004 11.79 7.29004 13.5V14.5C7.29004 16.7 7.97004 17.38 10.17 17.38H15.17C17.37 17.38 18.05 16.7 18.05 14.5V13.5C18.05 11.79 17.64 11 16.42 10.73ZM12.67 15.1C12.06 15.1 11.5701 14.61 11.5701 14C11.5701 13.39 12.06 12.9 12.67 12.9C13.28 12.9 13.77 13.39 13.77 14C13.77 14.61 13.28 15.1 12.67 15.1ZM14.92 10.62H10.42V10C10.42 8.54 10.78 7.75 12.67 7.75C14.56 7.75 14.92 8.54 14.92 10V10.62Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 7.75C10.7799 7.75 10.4199 8.54 10.4199 10V10.62H14.9199V10C14.9199 8.54 14.5599 7.75 12.6699 7.75Z" fill="currentColor" /><path d="M12.6698 15.0999C13.2773 15.0999 13.7698 14.6074 13.7698 13.9999C13.7698 13.3924 13.2773 12.8999 12.6698 12.8999C12.0623 12.8999 11.5698 13.3924 11.5698 13.9999C11.5698 14.6074 12.0623 15.0999 12.6698 15.0999Z" fill="currentColor" /><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM18.0499 14.5C18.0499 16.7 17.3699 17.38 15.1699 17.38H10.1699C7.96992 17.38 7.28992 16.7 7.28992 14.5V13.5C7.28992 11.79 7.69992 11 8.91992 10.73V10C8.91992 9.07 8.91992 6.25 12.6699 6.25C16.4199 6.25 16.4199 9.07 16.4199 10V10.73C17.6399 11 18.0499 11.79 18.0499 13.5V14.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLockCircle as IconComponent).keywords = [
  "lock",
  "circle",
  "interlock",
  "lock in",
  "mesh",
  "interlace",
  "whorl",
  "lock away",
  "curl",
  "ringlet",
  "put away",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconLockCircle as IconComponent;