import { FC } from 'react';

const IconRepeat: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M4.25 5.15991H18.09C19.75 5.15991 21.09 6.49991 21.09 8.15991V11.4799" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.41 2L4.25 5.15997L7.41 8.32001" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M21.09 18.84H7.25C5.59 18.84 4.25 17.5 4.25 15.84V12.52" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.9297 21.9999L21.0897 18.84L17.9297 15.6799" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.09 4.40994H6.06003L7.94 2.53C8.23 2.24 8.23 1.75994 7.94 1.46994C7.65 1.17994 7.17 1.17994 6.88 1.46994L3.72 4.62998C3.65 4.69998 3.60003 4.77997 3.56003 4.86997C3.52003 4.95997 3.5 5.05994 3.5 5.15994C3.5 5.25994 3.52003 5.35998 3.56003 5.44998C3.60003 5.53998 3.65 5.61997 3.72 5.68997L6.88 8.84995C7.03 8.99995 7.22 9.06998 7.41 9.06998C7.6 9.06998 7.79 8.99995 7.94 8.84995C8.23 8.55995 8.23 8.07995 7.94 7.78995L6.06003 5.90994H18.09C19.33 5.90994 20.34 6.91994 20.34 8.15994V11.48C20.34 11.89 20.68 12.23 21.09 12.23C21.5 12.23 21.84 11.89 21.84 11.48V8.15994C21.84 6.08994 20.16 4.40994 18.09 4.40994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.84 18.84C21.84 18.74 21.82 18.64 21.78 18.55C21.74 18.46 21.69 18.38 21.62 18.31L18.46 15.15C18.17 14.86 17.69 14.86 17.4 15.15C17.11 15.44 17.11 15.92 17.4 16.21L19.28 18.09H7.25C6.01 18.09 5 17.08 5 15.84V12.52C5 12.11 4.66 11.77 4.25 11.77C3.84 11.77 3.5 12.11 3.5 12.52V15.84C3.5 17.91 5.18 19.59 7.25 19.59H19.28L17.4 21.47C17.11 21.76 17.11 22.24 17.4 22.53C17.55 22.68 17.74 22.75 17.93 22.75C18.12 22.75 18.31 22.68 18.46 22.53L21.62 19.37C21.69 19.3 21.74 19.22 21.78 19.13C21.82 19.04 21.84 18.94 21.84 18.84Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.09 4.40994H6.06L7.94 2.52994C8.23 2.23994 8.23 1.75994 7.94 1.46994C7.65 1.17994 7.17 1.17994 6.88 1.46994L3.72 4.62994C3.65 4.69994 3.6 4.77994 3.56 4.86994C3.52 4.95994 3.5 5.05994 3.5 5.15994C3.5 5.25994 3.52 5.35994 3.56 5.44994C3.6 5.53994 3.65 5.61994 3.72 5.68994L6.88 8.84994C7.03 8.99994 7.22 9.06994 7.41 9.06994C7.6 9.06994 7.79 8.99994 7.94 8.84994C8.23 8.55994 8.23 8.07994 7.94 7.78994L6.06 5.90994H18.09C19.33 5.90994 20.34 6.91994 20.34 8.15994V11.4799C20.34 11.8899 20.68 12.2299 21.09 12.2299C21.5 12.2299 21.84 11.8899 21.84 11.4799V8.15994C21.84 6.08994 20.16 4.40994 18.09 4.40994Z" fill="currentColor" /><path d="M21.84 18.84C21.84 18.74 21.82 18.64 21.78 18.55C21.74 18.46 21.69 18.38 21.62 18.31L18.46 15.15C18.17 14.86 17.69 14.86 17.4 15.15C17.11 15.44 17.11 15.92 17.4 16.21L19.28 18.09H7.25C6.01 18.09 5 17.08 5 15.84V12.52C5 12.11 4.66 11.77 4.25 11.77C3.84 11.77 3.5 12.11 3.5 12.52V15.84C3.5 17.91 5.18 19.59 7.25 19.59H19.28L17.4 21.47C17.11 21.76 17.11 22.24 17.4 22.53C17.55 22.68 17.74 22.75 17.93 22.75C18.12 22.75 18.31 22.68 18.46 22.53L21.62 19.37C21.69 19.3 21.74 19.22 21.78 19.13C21.82 19.04 21.84 18.94 21.84 18.84Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRepeat as IconComponent).keywords = [
  "repeat",
  "restate",
  "reiterate",
  "ingeminate",
  "reprise",
  "repetition",
  "retell",
  "recur",
  "recapitulate",
  "duplicate"
];

export default IconRepeat as IconComponent;