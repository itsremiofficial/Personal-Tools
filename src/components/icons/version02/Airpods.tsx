import { FC } from 'react';

const IconAirpods: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.38992 9.56H6.44992C4.36992 9.56 2.66992 7.86003 2.66992 5.78003C2.66992 3.70003 4.36992 2 6.44992 2H8.33994C9.89994 2 11.1699 3.28002 11.1699 4.83002V7.39001V17.1C11.1699 18.14 10.3199 18.99 9.27991 18.99C8.23991 18.99 7.38992 18.14 7.38992 17.1V9.56Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.44977 6.72003C5.92977 6.72003 5.50977 6.30009 5.50977 5.78009C5.50977 5.26009 5.92977 4.84009 6.44977 4.84009" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.9499 9.56H18.8899C20.9699 9.56 22.6699 7.86003 22.6699 5.78003C22.6699 3.70003 20.9699 2 18.8899 2H16.9999C15.4399 2 14.1699 3.28002 14.1699 4.83002V7.39001V17.1C14.1699 18.14 15.0199 18.99 16.0599 18.99C17.0999 18.99 17.9499 18.14 17.9499 17.1V9.56Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.8901 6.72003C19.4101 6.72003 19.8301 6.30009 19.8301 5.78009C19.8301 5.26009 19.4101 4.84009 18.8901 4.84009" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.16992 22V19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.1699 22V19" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.1699 4.83002V17.11C11.1699 17.93 10.6499 18.62 9.91992 18.88C9.71992 18.96 9.49991 19 9.27991 19C8.96991 19 8.66992 18.92 8.41992 18.78C7.80992 18.47 7.38992 17.84 7.38992 17.11V9.56H6.44992C4.36992 9.56 2.66992 7.86003 2.66992 5.78003C2.66992 4.74003 3.08991 3.79999 3.77991 3.10999C4.46991 2.41999 5.40992 2 6.44992 2H8.33994C9.88994 2 11.1699 3.28002 11.1699 4.83002Z" fill="currentColor" /><path d="M6.44977 7.47003C5.51977 7.47003 4.75977 6.71008 4.75977 5.77008C4.75977 4.83008 5.51977 4.08008 6.44977 4.08008C6.85977 4.08008 7.19977 4.42008 7.19977 4.83008C7.19977 5.24008 6.85977 5.58008 6.44977 5.58008C6.33977 5.58008 6.25977 5.67008 6.25977 5.77008C6.25977 5.87008 6.34977 5.97003 6.44977 5.97003C6.85977 5.97003 7.19977 6.31003 7.19977 6.72003C7.19977 7.13003 6.85977 7.47003 6.44977 7.47003Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 5.78003C22.6699 7.86003 20.9699 9.56 18.8899 9.56H17.9499V17.11C17.9499 17.84 17.5299 18.47 16.9199 18.78C16.6699 18.92 16.3699 19 16.0599 19C15.8399 19 15.6199 18.96 15.4199 18.88C14.6899 18.62 14.1699 17.93 14.1699 17.11V4.83002C14.1699 3.28002 15.4399 2 16.9999 2H18.8899C19.9299 2 20.8699 2.41999 21.5599 3.10999C22.2499 3.79999 22.6699 4.74003 22.6699 5.78003Z" fill="currentColor" /><path d="M18.8901 7.47003C18.4801 7.47003 18.1401 7.13003 18.1401 6.72003C18.1401 6.31003 18.4801 5.97003 18.8901 5.97003C19.0001 5.97003 19.0801 5.88008 19.0801 5.77008C19.0801 5.66008 18.9901 5.58008 18.8901 5.58008C18.4801 5.58008 18.1401 5.24008 18.1401 4.83008C18.1401 4.42008 18.4801 4.08008 18.8901 4.08008C19.8201 4.08008 20.5801 4.84008 20.5801 5.77008C20.5801 6.70008 19.8301 7.47003 18.8901 7.47003Z" fill="currentColor" /><path d="M9.91992 18.88V22C9.91992 22.41 9.57992 22.75 9.16992 22.75C8.75992 22.75 8.41992 22.41 8.41992 22V18.78C8.66992 18.92 8.96991 19 9.27991 19C9.49991 19 9.71992 18.96 9.91992 18.88Z" fill="currentColor" /><path d="M16.9199 18.78V22C16.9199 22.41 16.5799 22.75 16.1699 22.75C15.7599 22.75 15.4199 22.41 15.4199 22V18.88C15.6199 18.96 15.8399 19 16.0599 19C16.3699 19 16.6699 18.92 16.9199 18.78Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33992 2H6.44992C5.40992 2 4.46992 2.42 3.77992 3.11C3.08992 3.8 2.66992 4.74 2.66992 5.78C2.66992 7.86 4.36992 9.56 6.44992 9.56H7.38992V17.11C7.38992 17.84 7.80992 18.47 8.41992 18.78C8.66992 18.92 8.96992 19 9.27992 19C9.49992 19 9.71992 18.96 9.91992 18.88C10.6499 18.62 11.1699 17.93 11.1699 17.11V4.83C11.1699 3.28 9.88992 2 8.33992 2ZM6.44992 5.97C6.85992 5.97 7.19992 6.31 7.19992 6.72C7.19992 7.13 6.85992 7.47 6.44992 7.47C5.51992 7.47 4.75992 6.71 4.75992 5.77C4.75992 4.83 5.51992 4.08 6.44992 4.08C6.85992 4.08 7.19992 4.42 7.19992 4.83C7.19992 5.24 6.85992 5.58 6.44992 5.58C6.33992 5.58 6.25992 5.67 6.25992 5.77C6.25992 5.87 6.33992 5.97 6.44992 5.97Z" fill="currentColor" /><path d="M21.5599 3.11C20.8699 2.42 19.9299 2 18.8899 2H16.9999C15.4399 2 14.1699 3.28 14.1699 4.83V17.11C14.1699 17.93 14.6899 18.62 15.4199 18.88C15.6199 18.96 15.8399 19 16.0599 19C16.3699 19 16.6699 18.92 16.9199 18.78C17.5299 18.47 17.9499 17.84 17.9499 17.11V9.56H18.8899C20.9699 9.56 22.6699 7.86 22.6699 5.78C22.6699 4.74 22.2499 3.8 21.5599 3.11ZM18.8899 7.47C18.4799 7.47 18.1399 7.13 18.1399 6.72C18.1399 6.31 18.4799 5.97 18.8899 5.97C18.9999 5.97 19.0799 5.88 19.0799 5.77C19.0799 5.66 18.9899 5.58 18.8899 5.58C18.4799 5.58 18.1399 5.24 18.1399 4.83C18.1399 4.42 18.4799 4.08 18.8899 4.08C19.8199 4.08 20.5799 4.84 20.5799 5.77C20.5799 6.7 19.8299 7.47 18.8899 7.47Z" fill="currentColor" /><path d="M9.91992 18.88V22C9.91992 22.41 9.57992 22.75 9.16992 22.75C8.75992 22.75 8.41992 22.41 8.41992 22V18.78C8.66992 18.92 8.96992 19 9.27992 19C9.49992 19 9.71992 18.96 9.91992 18.88Z" fill="currentColor" /><path d="M16.9199 18.78V22C16.9199 22.41 16.5799 22.75 16.1699 22.75C15.7599 22.75 15.4199 22.41 15.4199 22V18.88C15.6199 18.96 15.8399 19 16.0599 19C16.3699 19 16.6699 18.92 16.9199 18.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirpods as IconComponent).keywords = [
  "airpods",
  "pixel buds",
  "samsung galaxy buds series",
  "beats pill",
  "apple watch",
  "iphone 7",
  "bose portable audio products",
  "iphone 8",
  "iphone",
  "soundsticks"
];

export default IconAirpods as IconComponent;