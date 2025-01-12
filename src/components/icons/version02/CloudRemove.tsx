import { FC } from 'react';

const IconCloudRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6398 17.61L11.5298 15.5" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.62 15.52L11.5 17.64" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.20971 11.1199C1.52971 11.4499 1.52971 18.2599 6.20971 18.5899H8.12971" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.25995 11.1199C3.04995 2.1899 16.5899 -1.3801 18.1399 7.9999C22.4699 8.5499 24.2199 14.3199 20.9399 17.1899C19.9399 18.0999 18.6499 18.5999 17.2999 18.5899H17.21" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M17.6699 16.53C17.6699 17.27 17.5099 17.97 17.2099 18.59C17.1299 18.77 17.0399 18.94 16.9399 19.1C16.0799 20.55 14.4899 21.53 12.6699 21.53C10.8499 21.53 9.25992 20.55 8.39992 19.1C8.29992 18.94 8.20992 18.77 8.12992 18.59C7.82992 17.97 7.66992 17.27 7.66992 16.53C7.66992 13.77 9.90992 11.53 12.6699 11.53C15.4299 11.53 17.6699 13.77 17.6699 16.53Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.9397 17.1899C19.9397 18.0999 18.6497 18.5999 17.2997 18.5899H17.2097C17.5097 17.9699 17.6697 17.2699 17.6697 16.5299C17.6697 13.7699 15.4297 11.5299 12.6697 11.5299C9.90971 11.5299 7.66971 13.7699 7.66971 16.5299C7.66971 17.2699 7.82971 17.9699 8.12971 18.5899H6.20971C1.52971 18.2599 1.52971 11.4499 6.20971 11.1199H6.25971C3.04971 2.1899 16.5897 -1.3801 18.1397 7.9999C22.4697 8.5499 24.2197 14.3199 20.9397 17.1899Z" fill="currentColor" /><path d="M12.6699 11.53C9.90992 11.53 7.66992 13.77 7.66992 16.53C7.66992 17.27 7.82992 17.97 8.12992 18.59C8.20992 18.77 8.29992 18.94 8.39992 19.1C9.25992 20.55 10.8499 21.53 12.6699 21.53C14.4899 21.53 16.0799 20.55 16.9399 19.1C17.0399 18.94 17.1299 18.77 17.2099 18.59C17.5099 17.97 17.6699 17.27 17.6699 16.53C17.6699 13.77 15.4299 11.53 12.6699 11.53ZM14.1699 18.14C14.0199 18.29 13.8299 18.36 13.6399 18.36C13.4499 18.36 13.2599 18.29 13.1099 18.14L12.5799 17.61L12.0299 18.16C11.8799 18.31 11.6899 18.38 11.4999 18.38C11.3099 18.38 11.1199 18.31 10.9699 18.16C10.6799 17.87 10.6799 17.39 10.9699 17.1L11.5199 16.55L10.9899 16.02C10.6999 15.73 10.6999 15.25 10.9899 14.96C11.2799 14.67 11.7599 14.67 12.0499 14.96L12.5799 15.49L13.0799 14.99C13.3699 14.7 13.8499 14.7 14.1399 14.99C14.4299 15.28 14.4299 15.76 14.1399 16.05L13.6399 16.55L14.1699 17.08C14.4599 17.38 14.4599 17.85 14.1699 18.14Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 11.53C9.90992 11.53 7.66992 13.77 7.66992 16.53C7.66992 17.27 7.82992 17.97 8.12992 18.59C8.20992 18.77 8.29992 18.94 8.39992 19.1C9.25992 20.55 10.8499 21.53 12.6699 21.53C14.4899 21.53 16.0799 20.55 16.9399 19.1C17.0399 18.94 17.1299 18.77 17.2099 18.59C17.5099 17.97 17.6699 17.27 17.6699 16.53C17.6699 13.77 15.4299 11.53 12.6699 11.53ZM14.1699 18.14C14.0199 18.29 13.8299 18.36 13.6399 18.36C13.4499 18.36 13.2599 18.29 13.1099 18.14L12.5799 17.61L12.0299 18.16C11.8799 18.31 11.6899 18.38 11.4999 18.38C11.3099 18.38 11.1199 18.31 10.9699 18.16C10.6799 17.87 10.6799 17.39 10.9699 17.1L11.5199 16.55L10.9899 16.02C10.6999 15.73 10.6999 15.25 10.9899 14.96C11.2799 14.67 11.7599 14.67 12.0499 14.96L12.5799 15.49L13.0799 14.99C13.3699 14.7 13.8499 14.7 14.1399 14.99C14.4299 15.28 14.4299 15.76 14.1399 16.05L13.6399 16.55L14.1699 17.08C14.4599 17.38 14.4599 17.85 14.1699 18.14Z" fill="currentColor" /><path d="M20.8697 17.29C20.5097 17.61 20.1197 17.88 19.6997 18.1C19.3397 18.28 18.9797 17.93 19.0397 17.53C19.0798 17.24 19.0997 16.94 19.0997 16.63C19.0997 13.05 16.1797 10.13 12.5997 10.13C9.01975 10.13 6.09975 13.05 6.09975 16.63C6.09975 17.09 6.14975 17.53 6.23975 17.96C6.30975 18.31 6.03975 18.66 5.68975 18.57C1.73975 17.61 1.71975 11.53 6.13975 11.21H6.18975C2.97975 2.28996 16.5197 -1.28004 18.0697 8.09996C22.3997 8.64996 24.1497 14.42 20.8697 17.29Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudRemove as IconComponent).keywords = [
  "cloud",
  "remove",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer"
];

export default IconCloudRemove as IconComponent;