import { FC } from 'react';

const IconWeight: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6699 22H14.6699C19.6699 22 21.6699 20 21.6699 15V9C21.6699 4 19.6699 2 14.6699 2H10.6699C5.66992 2 3.66992 4 3.66992 9V15C3.66992 20 5.66992 22 10.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.9199 8.28992C14.9299 5.62992 10.4099 5.62992 7.41992 8.28992L9.59992 11.7899C11.3499 10.2299 13.9899 10.2299 15.7399 11.7899L17.9199 8.28992Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.66992 22H16.6699C19.6699 22 21.6699 20 21.6699 17V7C21.6699 4 19.6699 2 16.6699 2H8.66992C5.66992 2 3.66992 4 3.66992 7V17C3.66992 20 5.66992 22 8.66992 22Z" fill="currentColor" /><path d="M18.1699 7.99997C15.0399 5.20997 10.3099 5.20997 7.1699 7.99997C7.0299 8.12997 6.9999 8.32997 7.0999 8.47997L9.2799 11.98C9.3399 12.07 9.4399 12.14 9.5399 12.15C9.6499 12.17 9.7599 12.13 9.8399 12.06C11.4499 10.63 13.8699 10.63 15.4799 12.06C15.5499 12.12 15.6399 12.15 15.7299 12.15C15.7499 12.15 15.7699 12.15 15.7799 12.15C15.8899 12.13 15.9899 12.07 16.0399 11.98L18.2199 8.47997C18.3399 8.32997 18.3099 8.12997 18.1699 7.99997Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 2H8.66992C5.66992 2 3.66992 4 3.66992 7V17C3.66992 20 5.66992 22 8.66992 22H16.6699C19.6699 22 21.6699 20 21.6699 17V7C21.6699 4 19.6699 2 16.6699 2ZM18.2399 8.48L16.0599 11.98C15.9999 12.07 15.8999 12.14 15.7999 12.15C15.7799 12.15 15.7599 12.15 15.7499 12.15C15.6599 12.15 15.5699 12.12 15.4999 12.06C13.8899 10.63 11.4699 10.63 9.85992 12.06C9.77992 12.13 9.66992 12.17 9.55992 12.15C9.44992 12.13 9.34992 12.07 9.29992 11.98L7.11992 8.48C6.99992 8.33 7.02992 8.13 7.16992 8C10.2999 5.21 15.0299 5.21 18.1699 8C18.3099 8.13 18.3399 8.33 18.2399 8.48Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWeight as IconComponent).keywords = [
  "weight",
  "angle",
  "burthen",
  "slant",
  "weight down",
  "burden",
  "exercising weight",
  "system of weights",
  "weight unit",
  "solid"
];

export default IconWeight as IconComponent;