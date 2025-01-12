import { FC } from 'react';

const IconFormatSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.6699 6.95V17.05C20.5099 17.02 20.3399 17 20.1699 17C18.7899 17 17.6699 18.12 17.6699 19.5C17.6699 19.67 17.6899 19.84 17.7199 20H7.61992C7.64992 19.84 7.66992 19.67 7.66992 19.5C7.66992 18.12 6.54992 17 5.16992 17C4.99992 17 4.82992 17.02 4.66992 17.05V6.95C4.82992 6.98 4.99992 7 5.16992 7C6.54992 7 7.66992 5.88 7.66992 4.5C7.66992 4.33 7.64992 4.16 7.61992 4H17.7199C17.6899 4.16 17.6699 4.33 17.6699 4.5C17.6699 5.88 18.7899 7 20.1699 7C20.3399 7 20.5099 6.98 20.6699 6.95Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.66992 4.5C7.66992 5.88 6.54992 7 5.16992 7C4.99992 7 4.82992 6.98 4.66992 6.95C3.52992 6.72 2.66992 5.71 2.66992 4.5C2.66992 3.12 3.78992 2 5.16992 2C6.37992 2 7.38992 2.86 7.61992 4C7.64992 4.16 7.66992 4.33 7.66992 4.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 4.5C22.6699 5.71 21.8099 6.72 20.6699 6.95C20.5099 6.98 20.3399 7 20.1699 7C18.7899 7 17.6699 5.88 17.6699 4.5C17.6699 4.33 17.6899 4.16 17.7199 4C17.9499 2.86 18.9599 2 20.1699 2C21.5499 2 22.6699 3.12 22.6699 4.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M7.66992 19.5C7.66992 19.67 7.64992 19.84 7.61992 20C7.38992 21.14 6.37992 22 5.16992 22C3.78992 22 2.66992 20.88 2.66992 19.5C2.66992 18.29 3.52992 17.28 4.66992 17.05C4.82992 17.02 4.99992 17 5.16992 17C6.54992 17 7.66992 18.12 7.66992 19.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 19.5C22.6699 20.88 21.5499 22 20.1699 22C18.9599 22 17.9499 21.14 17.7199 20C17.6899 19.84 17.6699 19.67 17.6699 19.5C17.6699 18.12 18.7899 17 20.1699 17C20.3399 17 20.5099 17.02 20.6699 17.05C21.8099 17.28 22.6699 18.29 22.6699 19.5Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.9799 20.15C16.9399 19.93 16.9199 19.72 16.9199 19.5C16.9199 19.41 16.9199 19.33 16.9299 19.25H8.40992C8.41992 19.33 8.41992 19.41 8.41992 19.5C8.41992 19.72 8.39992 19.93 8.35992 20.14C8.31992 20.35 8.24992 20.56 8.16992 20.75H17.1699C17.0799 20.56 17.0199 20.36 16.9799 20.15ZM4.52992 7.69C4.31992 7.65 4.10992 7.58 3.91992 7.5V16.5C4.10992 16.41 4.30992 16.35 4.51992 16.31C4.73992 16.27 4.94992 16.25 5.16992 16.25C5.25992 16.25 5.33992 16.25 5.41992 16.26V7.74C5.33992 7.75 5.25992 7.75 5.16992 7.75C4.94992 7.75 4.73992 7.73 4.52992 7.69ZM20.8199 7.69C20.5999 7.73 20.3899 7.75 20.1699 7.75C20.0799 7.75 19.9999 7.75 19.9199 7.74V16.26C19.9999 16.25 20.0799 16.25 20.1699 16.25C20.3899 16.25 20.5999 16.27 20.8099 16.31C21.0199 16.35 21.2299 16.42 21.4199 16.5V7.5C21.2299 7.59 21.0299 7.65 20.8199 7.69ZM17.1699 3.25H8.16992C8.25992 3.44 8.31992 3.64 8.35992 3.85C8.39992 4.07 8.41992 4.28 8.41992 4.5C8.41992 4.59 8.41992 4.67 8.40992 4.75H16.9299C16.9199 4.67 16.9199 4.59 16.9199 4.5C16.9199 4.28 16.9399 4.07 16.9799 3.86C17.0199 3.65 17.0899 3.44 17.1699 3.25Z" fill="currentColor" /><path d="M8.41992 4.5C8.41992 4.59 8.41992 4.67 8.40992 4.75C8.38992 5.01 8.33992 5.25 8.25992 5.49C8.23992 5.58 8.19992 5.68 8.15992 5.77C8.13992 5.82 8.10992 5.88 8.07992 5.94C8.04992 6 8.01992 6.06 7.97992 6.12C7.69992 6.62 7.28992 7.03 6.78992 7.31C6.72992 7.35 6.66992 7.38 6.60992 7.41C6.54992 7.44 6.48992 7.47 6.43992 7.49C6.34992 7.53 6.24992 7.57 6.15992 7.59C5.91992 7.67 5.67992 7.72 5.41992 7.74C5.33992 7.75 5.25992 7.75 5.16992 7.75C4.94992 7.75 4.73992 7.73 4.52992 7.69C4.31992 7.65 4.10992 7.58 3.91992 7.5C2.72992 7 1.91992 5.82 1.91992 4.5C1.91992 2.71 3.37992 1.25 5.16992 1.25C6.49992 1.25 7.66992 2.06 8.16992 3.25C8.25992 3.44 8.31992 3.64 8.35992 3.85C8.39992 4.07 8.41992 4.28 8.41992 4.5Z" fill="currentColor" /><path d="M23.4199 4.5C23.4199 5.83 22.6099 7 21.4199 7.5C21.2299 7.59 21.0299 7.65 20.8199 7.69C20.5999 7.73 20.3899 7.75 20.1699 7.75C20.0799 7.75 19.9999 7.75 19.9199 7.74C19.6499 7.72 19.3999 7.67 19.1499 7.58C19.0699 7.56 18.9799 7.53 18.8999 7.49C18.8399 7.47 18.7899 7.44 18.7299 7.41C18.6699 7.38 18.6099 7.35 18.5499 7.31C18.0499 7.03 17.6399 6.62 17.3599 6.12C17.3199 6.06 17.2899 6 17.2599 5.94C17.2299 5.88 17.1999 5.83 17.1799 5.77C17.1399 5.69 17.1099 5.6 17.0899 5.52C16.9999 5.27 16.9499 5.02 16.9299 4.75C16.9199 4.67 16.9199 4.59 16.9199 4.5C16.9199 4.28 16.9399 4.07 16.9799 3.86C17.0199 3.65 17.0899 3.44 17.1699 3.25C17.6699 2.06 18.8499 1.25 20.1699 1.25C21.9599 1.25 23.4199 2.71 23.4199 4.5Z" fill="currentColor" /><path d="M8.41992 19.5C8.41992 19.72 8.39992 19.93 8.35992 20.14C8.31992 20.35 8.24992 20.56 8.16992 20.75C7.66992 21.94 6.48992 22.75 5.16992 22.75C3.37992 22.75 1.91992 21.29 1.91992 19.5C1.91992 18.17 2.72992 17 3.91992 16.5C4.10992 16.41 4.30992 16.35 4.51992 16.31C4.73992 16.27 4.94992 16.25 5.16992 16.25C5.25992 16.25 5.33992 16.25 5.41992 16.26C5.66992 16.28 5.90992 16.33 6.13992 16.4C6.21992 16.42 6.30992 16.45 6.38992 16.49C6.45992 16.52 6.52992 16.55 6.60992 16.59C6.66992 16.62 6.72992 16.65 6.78992 16.69C7.28992 16.97 7.69992 17.38 7.97992 17.88C8.01992 17.94 8.04992 18 8.07992 18.06C8.11992 18.14 8.14992 18.21 8.17992 18.28C8.21992 18.36 8.24992 18.45 8.26992 18.53C8.33992 18.76 8.38992 19 8.40992 19.25C8.41992 19.33 8.41992 19.41 8.41992 19.5Z" fill="currentColor" /><path d="M23.4199 19.5C23.4199 21.29 21.9599 22.75 20.1699 22.75C18.8399 22.75 17.6699 21.94 17.1699 20.75C17.0799 20.56 17.0199 20.36 16.9799 20.15C16.9399 19.93 16.9199 19.72 16.9199 19.5C16.9199 19.41 16.9199 19.33 16.9299 19.25C16.9299 19.22 16.9299 19.19 16.9399 19.16C16.9499 19.05 16.9699 18.95 16.9899 18.84C17.0399 18.57 17.1299 18.31 17.2599 18.06C17.2899 18 17.3199 17.94 17.3599 17.88C17.6399 17.38 18.0499 16.97 18.5499 16.69C18.6099 16.65 18.6699 16.62 18.7299 16.59C18.9799 16.46 19.2399 16.37 19.5099 16.32C19.6199 16.3 19.7199 16.28 19.8299 16.27C19.8599 16.26 19.8899 16.26 19.9199 16.26C19.9999 16.25 20.0799 16.25 20.1699 16.25C20.3899 16.25 20.5999 16.27 20.8099 16.31C21.0199 16.35 21.2299 16.42 21.4199 16.5C22.6099 17 23.4199 18.18 23.4199 19.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.4199 16.5V7.5C22.6099 7 23.4199 5.83 23.4199 4.5C23.4199 2.71 21.9599 1.25 20.1699 1.25C18.8499 1.25 17.6699 2.06 17.1699 3.25H8.16992C7.66992 2.06 6.49992 1.25 5.16992 1.25C3.37992 1.25 1.91992 2.71 1.91992 4.5C1.91992 5.82 2.72992 7 3.91992 7.5V16.5C2.72992 17 1.91992 18.17 1.91992 19.5C1.91992 21.29 3.37992 22.75 5.16992 22.75C6.48992 22.75 7.66992 21.94 8.16992 20.75H17.1699C17.6699 21.94 18.8399 22.75 20.1699 22.75C21.9599 22.75 23.4199 21.29 23.4199 19.5C23.4199 18.18 22.6099 17 21.4199 16.5ZM19.8299 16.27C19.7199 16.28 19.6199 16.3 19.5099 16.32C19.2399 16.37 18.9799 16.46 18.7299 16.59C18.6699 16.62 18.6099 16.65 18.5499 16.69C18.0499 16.97 17.6399 17.38 17.3599 17.88C17.3199 17.94 17.2899 18 17.2599 18.06C17.1299 18.31 17.0399 18.57 16.9899 18.84C16.9699 18.95 16.9499 19.05 16.9399 19.16C16.9299 19.19 16.9299 19.22 16.9299 19.25H8.40992C8.38992 19 8.33992 18.76 8.26992 18.53C8.24992 18.45 8.21992 18.36 8.17992 18.28C8.14992 18.21 8.11992 18.14 8.07992 18.06C8.04992 18 8.01992 17.94 7.97992 17.88C7.69992 17.38 7.28992 16.97 6.78992 16.69C6.72992 16.65 6.66992 16.62 6.60992 16.59C6.52992 16.55 6.45992 16.52 6.38992 16.49C6.30992 16.45 6.21992 16.42 6.13992 16.4C5.90992 16.33 5.66992 16.28 5.41992 16.26V7.74C5.67992 7.72 5.91992 7.67 6.15992 7.59C6.24992 7.57 6.34992 7.53 6.43992 7.49C6.48992 7.47 6.54992 7.44 6.60992 7.41C6.66992 7.38 6.72992 7.35 6.78992 7.31C7.28992 7.03 7.69992 6.62 7.97992 6.12C8.01992 6.06 8.04992 6 8.07992 5.94C8.10992 5.88 8.13992 5.82 8.15992 5.77C8.19992 5.68 8.23992 5.58 8.25992 5.49C8.33992 5.25 8.38992 5.01 8.40992 4.75H16.9299C16.9499 5.02 16.9999 5.27 17.0899 5.52C17.1099 5.6 17.1399 5.69 17.1799 5.77C17.1999 5.83 17.2299 5.88 17.2599 5.94C17.2899 6 17.3199 6.06 17.3599 6.12C17.6399 6.62 18.0499 7.03 18.5499 7.31C18.6099 7.35 18.6699 7.38 18.7299 7.41C18.7899 7.44 18.8399 7.47 18.8999 7.49C18.9799 7.53 19.0699 7.56 19.1499 7.58C19.3999 7.67 19.6499 7.72 19.9199 7.74V16.26C19.8899 16.26 19.8599 16.26 19.8299 16.27Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFormatSquare as IconComponent).keywords = [
  "format",
  "square",
  "initialize",
  "arrange",
  "data format",
  "data formatting",
  "edition",
  "file",
  "print",
  "reporting",
  "notation",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest"
];

export default IconFormatSquare as IconComponent;