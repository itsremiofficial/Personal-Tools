import { FC } from 'react';

const IconCardEdit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66602 8.5H12.166" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.66602 16.5H8.66602" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.166 16.5H15.166" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.666 12.03V16.11C22.666 19.62 21.776 20.5 18.226 20.5H7.10602C3.55602 20.5 2.66602 19.62 2.66602 16.11V7.89C2.66602 4.38 3.55602 3.5 7.10602 3.5H15.166" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M19.7463 4.13031L16.0363 7.84031C15.8963 7.98031 15.7563 8.26031 15.7263 8.46031L15.5263 9.88031C15.4563 10.3903 15.8163 10.7503 16.3263 10.6803L17.7463 10.4803C17.9463 10.4503 18.2263 10.3103 18.3663 10.1703L22.0763 6.46031C22.7163 5.82031 23.0163 5.08031 22.0763 4.14031C21.1263 3.19031 20.3863 3.49031 19.7463 4.13031Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.2168 4.66016C19.5368 5.79016 20.4168 6.67016 21.5368 6.98016" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.77002V9.00002H2.66992V7.54002C2.66992 5.25002 4.52992 3.40002 6.81992 3.40002H16.6699V5.97002C16.6699 7.24002 17.4299 8.00002 18.6999 8.00002H21.6399C22.0399 8.00002 22.3799 7.93002 22.6699 7.77002Z" fill="currentColor" /><path d="M2.66992 9V16.46C2.66992 18.75 4.52992 20.6 6.81992 20.6H18.5199C20.8099 20.6 22.6699 18.75 22.6699 16.46V9H2.66992ZM8.66992 17.25H6.66992C6.25992 17.25 5.91992 16.91 5.91992 16.5C5.91992 16.09 6.25992 15.75 6.66992 15.75H8.66992C9.07992 15.75 9.41992 16.09 9.41992 16.5C9.41992 16.91 9.07992 17.25 8.66992 17.25ZM15.1699 17.25H11.1699C10.7599 17.25 10.4199 16.91 10.4199 16.5C10.4199 16.09 10.7599 15.75 11.1699 15.75H15.1699C15.5799 15.75 15.9199 16.09 15.9199 16.5C15.9199 16.91 15.5799 17.25 15.1699 17.25Z" fill="currentColor" /><path d="M21.6399 1H18.6999C17.4299 1 16.6699 1.76 16.6699 3.03V5.97C16.6699 7.24 17.4299 8 18.6999 8H21.6399C22.9099 8 23.6699 7.24 23.6699 5.97V3.03C23.6699 1.76 22.9099 1 21.6399 1ZM19.6799 6.57C19.6499 6.6 19.5799 6.64 19.5299 6.64L18.4899 6.79C18.4599 6.8 18.4199 6.8 18.3899 6.8C18.2399 6.8 18.1099 6.75 18.0199 6.65C17.8999 6.53 17.8499 6.36 17.8799 6.18L18.0299 5.14C18.0399 5.09 18.0699 5.02 18.0999 4.99L19.7999 3.29C19.8299 3.36 19.8599 3.44 19.8899 3.52C19.9299 3.6 19.9699 3.67 20.0099 3.74C20.0399 3.8 20.0799 3.86 20.1199 3.9C20.1599 3.96 20.1999 4.02 20.2299 4.05C20.2499 4.08 20.2599 4.09 20.2699 4.1C20.3599 4.21 20.4599 4.31 20.5499 4.38C20.5699 4.4 20.5899 4.42 20.5999 4.42C20.6499 4.46 20.7099 4.51 20.7499 4.54C20.8099 4.58 20.8599 4.62 20.9199 4.65C20.9899 4.69 21.0699 4.73 21.1499 4.77C21.2299 4.81 21.3099 4.84 21.3799 4.86L19.6799 6.57ZM22.0699 4.18L21.7499 4.5C21.7299 4.53 21.6999 4.54 21.6699 4.54C21.6599 4.54 21.6499 4.54 21.6399 4.54C20.9199 4.33 20.3499 3.76 20.1399 3.04C20.1299 3 20.1399 2.96 20.1699 2.93L20.4999 2.6C21.0399 2.06 21.5499 2.07 22.0799 2.6C22.3499 2.87 22.4799 3.13 22.4799 3.39C22.4699 3.65 22.3399 3.91 22.0699 4.18Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1719 4.61002V7.54002C14.1719 8.21002 13.6319 8.75002 12.9619 8.75002H3.88188C3.20188 8.75002 2.67188 8.19002 2.67188 7.52002C2.68187 6.39002 3.13188 5.36002 3.88188 4.61002C4.63188 3.86002 5.67188 3.40002 6.81187 3.40002H12.9619C13.6319 3.40002 14.1719 3.94002 14.1719 4.61002Z" fill="currentColor" /><path d="M2.67188 11.46V16.46C2.67188 18.75 4.52187 20.6 6.81187 20.6H18.5219C20.8119 20.6 22.6719 18.74 22.6719 16.45V11.46C22.6719 10.79 22.1319 10.25 21.4619 10.25H3.88188C3.21188 10.25 2.67188 10.79 2.67188 11.46ZM8.67188 17.25H6.67188C6.26187 17.25 5.92188 16.91 5.92188 16.5C5.92188 16.09 6.26187 15.75 6.67188 15.75H8.67188C9.08187 15.75 9.42188 16.09 9.42188 16.5C9.42188 16.91 9.08187 17.25 8.67188 17.25ZM15.1719 17.25H11.1719C10.7619 17.25 10.4219 16.91 10.4219 16.5C10.4219 16.09 10.7619 15.75 11.1719 15.75H15.1719C15.5819 15.75 15.9219 16.09 15.9219 16.5C15.9219 16.91 15.5819 17.25 15.1719 17.25Z" fill="currentColor" /><path d="M20.6419 1.75H17.7019C16.4319 1.75 15.6719 2.51 15.6719 3.78V6.72C15.6719 7.99 16.4319 8.75 17.7019 8.75H20.6419C21.9119 8.75 22.6719 7.99 22.6719 6.72V3.78C22.6719 2.51 21.9119 1.75 20.6419 1.75ZM18.6819 7.32C18.6519 7.35 18.5819 7.39 18.5319 7.39L17.4919 7.54C17.4619 7.55 17.4219 7.55 17.3919 7.55C17.2419 7.55 17.1119 7.5 17.0219 7.4C16.9019 7.28 16.8519 7.11 16.8819 6.93L17.0319 5.89C17.0419 5.84 17.0719 5.77 17.1019 5.74L18.8019 4.04C18.8319 4.11 18.8619 4.19 18.8919 4.27C18.9319 4.35 18.9719 4.42 19.0119 4.49C19.0419 4.55 19.0819 4.61 19.1219 4.65C19.1619 4.71 19.2019 4.77 19.2319 4.8C19.2519 4.83 19.2619 4.84 19.2719 4.85C19.3619 4.96 19.4619 5.06 19.5519 5.13C19.5719 5.15 19.5919 5.17 19.6019 5.17C19.6519 5.21 19.7119 5.26 19.7519 5.29C19.8119 5.33 19.8619 5.37 19.9219 5.4C19.9919 5.44 20.0719 5.48 20.1519 5.52C20.2319 5.56 20.3119 5.59 20.3819 5.61L18.6819 7.32ZM21.0719 4.93L20.7419 5.26C20.7319 5.28 20.7019 5.29 20.6719 5.29C20.6619 5.29 20.6519 5.29 20.6419 5.29C19.9219 5.08 19.3519 4.51 19.1419 3.79C19.1319 3.75 19.1419 3.71 19.1719 3.68L19.5019 3.35C20.0419 2.81 20.5519 2.82 21.0819 3.35C21.3519 3.62 21.4819 3.88 21.4819 4.14C21.4719 4.4 21.3419 4.66 21.0719 4.93Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardEdit as IconComponent).keywords = [
  "card",
  "edit",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "redact",
  "edit out",
  "cut",
  "editor",
  "edition",
  "publication",
  "publish",
  "publishing",
  "authoring"
];

export default IconCardEdit as IconComponent;