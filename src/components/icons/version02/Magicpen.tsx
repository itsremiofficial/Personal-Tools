import { FC } from 'react';

const IconMagicpen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.17035 20.4999C5.00035 21.3299 6.34035 21.3299 7.17035 20.4999L20.1704 7.49994C21.0004 6.66994 21.0004 5.32994 20.1704 4.49994C19.3404 3.66994 18.0004 3.66994 17.1704 4.49994L4.17035 17.4999C3.34035 18.3299 3.34035 19.6699 4.17035 20.4999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M18.6797 8.98999L15.6797 5.98999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.16992 2.44L10.6699 2L10.2299 3.5L10.6699 5L9.16992 4.56L7.66992 5L8.10992 3.5L7.66992 2L9.16992 2.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M5.16992 8.44L6.66992 8L6.22992 9.5L6.66992 11L5.16992 10.56L3.66992 11L4.10992 9.5L3.66992 8L5.16992 8.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.1699 13.44L21.6699 13L21.2299 14.5L21.6699 16L20.1699 15.56L18.6699 16L19.1099 14.5L18.6699 13L20.1699 13.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1697 7.49988L18.6797 8.98988L15.6797 5.98988L17.1697 4.49988C17.5897 4.07988 18.1297 3.87988 18.6697 3.87988C19.2097 3.87988 19.7497 4.07988 20.1697 4.49988C20.9997 5.32988 20.9997 6.66988 20.1697 7.49988Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6804 8.98999L7.17035 20.5C6.34035 21.33 5.00035 21.33 4.17035 20.5C3.34035 19.67 3.34035 18.33 4.17035 17.5L15.6804 5.98999L18.6804 8.98999Z" fill="currentColor" /><path d="M10.6195 3.50002L11.0295 2.11002C11.0695 1.98002 11.0295 1.84002 10.9395 1.74002C10.8495 1.64002 10.6895 1.60002 10.5595 1.64002L9.16945 2.05002L7.77945 1.64002C7.64945 1.60002 7.50945 1.64002 7.40945 1.73002C7.30945 1.83002 7.27945 1.97002 7.31945 2.10002L7.71945 3.50002L7.30945 4.89002C7.26945 5.02002 7.30945 5.16002 7.39945 5.26002C7.49945 5.36002 7.63945 5.39002 7.76945 5.35002L9.16945 4.95002L10.5595 5.36002C10.5995 5.37002 10.6295 5.38002 10.6695 5.38002C10.7695 5.38002 10.8595 5.34002 10.9395 5.27002C11.0395 5.17002 11.0695 5.03002 11.0295 4.90002L10.6195 3.50002Z" fill="currentColor" /><path d="M6.61945 9.50002L7.02945 8.11002C7.06945 7.98002 7.02945 7.84002 6.93945 7.74002C6.83945 7.64002 6.69945 7.61002 6.56945 7.65002L5.16945 8.05002L3.77945 7.64002C3.64945 7.60002 3.50945 7.64002 3.40945 7.73002C3.30945 7.83002 3.27945 7.97002 3.31945 8.10002L3.71945 9.50002L3.30945 10.89C3.26945 11.02 3.30945 11.16 3.39945 11.26C3.49945 11.36 3.63945 11.39 3.76945 11.35L5.15945 10.94L6.54945 11.35C6.57945 11.36 6.61945 11.36 6.65945 11.36C6.75945 11.36 6.84945 11.32 6.92945 11.25C7.02945 11.15 7.05945 11.01 7.01945 10.88L6.61945 9.50002Z" fill="currentColor" /><path d="M21.6196 14.5L22.0296 13.11C22.0696 12.98 22.0296 12.84 21.9396 12.74C21.8396 12.64 21.6996 12.61 21.5696 12.65L20.1796 13.06L18.7896 12.65C18.6596 12.61 18.5196 12.65 18.4196 12.74C18.3196 12.84 18.2896 12.98 18.3296 13.11L18.7396 14.5L18.3296 15.89C18.2896 16.02 18.3296 16.16 18.4196 16.26C18.5196 16.36 18.6596 16.39 18.7896 16.35L20.1796 15.94L21.5696 16.35C21.5996 16.36 21.6396 16.36 21.6796 16.36C21.7796 16.36 21.8696 16.32 21.9496 16.25C22.0496 16.15 22.0796 16.01 22.0396 15.88L21.6196 14.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1697 7.49988L18.6797 8.98988L15.6797 5.98988L17.1697 4.49988C17.5897 4.07988 18.1297 3.87988 18.6697 3.87988C19.2097 3.87988 19.7497 4.07988 20.1697 4.49988C20.9997 5.32988 20.9997 6.66988 20.1697 7.49988Z" fill="currentColor" /><path d="M17.9804 9.69995L7.17035 20.5C6.34035 21.33 5.00035 21.33 4.17035 20.5C3.34035 19.67 3.34035 18.33 4.17035 17.5L14.9804 6.69995L17.9804 9.69995Z" fill="currentColor" /><path d="M10.6195 3.50002L11.0295 2.11002C11.0695 1.98002 11.0295 1.84002 10.9395 1.74002C10.8495 1.64002 10.6895 1.60002 10.5595 1.64002L9.16945 2.05002L7.77945 1.64002C7.64945 1.60002 7.50945 1.64002 7.40945 1.73002C7.30945 1.83002 7.27945 1.97002 7.31945 2.10002L7.71945 3.50002L7.30945 4.89002C7.26945 5.02002 7.30945 5.16002 7.39945 5.26002C7.49945 5.36002 7.63945 5.39002 7.76945 5.35002L9.16945 4.95002L10.5595 5.36002C10.5995 5.37002 10.6295 5.38002 10.6695 5.38002C10.7695 5.38002 10.8595 5.34002 10.9395 5.27002C11.0395 5.17002 11.0695 5.03002 11.0295 4.90002L10.6195 3.50002Z" fill="currentColor" /><path d="M6.61945 9.50002L7.02945 8.11002C7.06945 7.98002 7.02945 7.84002 6.93945 7.74002C6.83945 7.64002 6.69945 7.61002 6.56945 7.65002L5.16945 8.05002L3.77945 7.64002C3.64945 7.60002 3.50945 7.64002 3.40945 7.73002C3.30945 7.83002 3.27945 7.97002 3.31945 8.10002L3.71945 9.50002L3.30945 10.89C3.26945 11.02 3.30945 11.16 3.39945 11.26C3.49945 11.36 3.63945 11.39 3.76945 11.35L5.15945 10.94L6.54945 11.35C6.57945 11.36 6.61945 11.36 6.65945 11.36C6.75945 11.36 6.84945 11.32 6.92945 11.25C7.02945 11.15 7.05945 11.01 7.01945 10.88L6.61945 9.50002Z" fill="currentColor" /><path d="M21.6196 14.5L22.0296 13.11C22.0696 12.98 22.0296 12.84 21.9396 12.74C21.8396 12.64 21.6996 12.61 21.5696 12.65L20.1796 13.06L18.7896 12.65C18.6596 12.61 18.5196 12.65 18.4196 12.74C18.3196 12.84 18.2896 12.98 18.3296 13.11L18.7396 14.5L18.3296 15.89C18.2896 16.02 18.3296 16.16 18.4196 16.26C18.5196 16.36 18.6596 16.39 18.7896 16.35L20.1796 15.94L21.5696 16.35C21.5996 16.36 21.6396 16.36 21.6796 16.36C21.7796 16.36 21.8696 16.32 21.9496 16.25C22.0496 16.15 22.0796 16.01 22.0396 15.88L21.6196 14.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagicpen as IconComponent).keywords = [
  "magicpen"
];

export default IconMagicpen as IconComponent;