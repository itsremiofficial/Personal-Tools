import { FC } from 'react';

const IconIncognito: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 17.5005C21 19.4335 19.433 21.0005 17.5 21.0005C15.567 21.0005 14 19.4335 14 17.5005C14 15.5675 15.567 14.0005 17.5 14.0005C19.433 14.0005 21 15.5675 21 17.5005Z" stroke="currentColor" strokeWidth={width} /><path d="M2 11.0005H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M4 11.0005L4.6138 8.54527C5.15947 6.36259 5.43231 5.27126 6.24609 4.63587C7.05988 4.00049 8.1848 4.00049 10.4347 4.00049H13.5653C15.8152 4.00049 16.9401 4.00049 17.7539 4.63587C18.5677 5.27126 18.8405 6.36259 19.3862 8.54527L20 11.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M10 17.5005C10 19.4335 8.433 21.0005 6.5 21.0005C4.567 21.0005 3 19.4335 3 17.5005C3 15.5675 4.567 14.0005 6.5 14.0005C8.433 14.0005 10 15.5675 10 17.5005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M10 17.5004L10.6584 17.1712C11.5029 16.7489 12.4971 16.7489 13.3416 17.1712L14 17.5004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16.5005C21 18.4335 19.433 20.0005 17.5 20.0005C15.567 20.0005 14 18.4335 14 16.5005C14 14.5675 15.567 13.0005 17.5 13.0005C19.433 13.0005 21 14.5675 21 16.5005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1.25 10.0005C1.25 9.58627 1.58579 9.25049 2 9.25049H22C22.4142 9.25049 22.75 9.58627 22.75 10.0005C22.75 10.4147 22.4142 10.7505 22 10.7505H2C1.58579 10.7505 1.25 10.4147 1.25 10.0005Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M4.1875 9.25049L4.6138 7.54527C5.15947 5.36259 5.43231 4.27126 6.24609 3.63587C7.05988 3.00049 8.1848 3.00049 10.4347 3.00049H13.5653C15.8152 3.00049 16.9401 3.00049 17.7539 3.63587C18.5677 4.27126 18.8405 5.36259 19.3862 7.54527L19.8125 9.25049H4.1875Z" fill="currentColor" /><path d="M10 16.5005C10 18.4335 8.433 20.0005 6.5 20.0005C4.567 20.0005 3 18.4335 3 16.5005C3 14.5675 4.567 13.0005 6.5 13.0005C8.433 13.0005 10 14.5675 10 16.5005Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M9.88411 17.397C9.95972 17.1109 10 16.8104 10 16.5005C10 16.2276 9.96878 15.9621 9.90971 15.7072L10.3233 15.5004C11.379 14.9725 12.6217 14.9725 13.6774 15.5004L14.0904 15.7069C14.0312 15.9619 14 16.2275 14 16.5005C14 16.8102 14.0402 17.1106 14.1158 17.3966L13.0066 16.842C12.3732 16.5253 11.6276 16.5253 10.9941 16.842L9.88411 17.397Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.6138 8.54527L4.1875 10.2505H2C1.58579 10.2505 1.25 10.5863 1.25 11.0005C1.25 11.4147 1.58579 11.7505 2 11.7505H22C22.4142 11.7505 22.75 11.4147 22.75 11.0005C22.75 10.5863 22.4142 10.2505 22 10.2505H19.8125L19.3862 8.54527C18.8405 6.36259 18.5677 5.27126 17.7539 4.63587C16.9401 4.00049 15.8152 4.00049 13.5653 4.00049H10.4347C8.1848 4.00049 7.05988 4.00049 6.24609 4.63587C5.43231 5.27126 5.15947 6.36259 4.6138 8.54527ZM6.5 21.0005C8.12316 21.0005 9.48826 19.8956 9.88417 18.3968L10.9938 17.842C11.6272 17.5253 12.3728 17.5253 13.0062 17.842L14.1158 18.3968C14.5117 19.8956 15.8768 21.0005 17.5 21.0005C19.433 21.0005 21 19.4335 21 17.5005C21 15.5675 19.433 14.0005 17.5 14.0005C15.8399 14.0005 14.4498 15.1563 14.0903 16.707L13.6771 16.5004C12.6213 15.9725 11.3787 15.9725 10.3229 16.5004L9.90967 16.707C9.55023 15.1563 8.16009 14.0005 6.5 14.0005C4.567 14.0005 3 15.5675 3 17.5005C3 19.4335 4.567 21.0005 6.5 21.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconIncognito as IconComponent).keywords = [
  "incognito",
  "concealed",
  "invisible",
  "undercover",
  "underground",
  "incog",
  "masqueraded",
  "inconspicuously",
  "masquerade",
  "hiding"
];

export default IconIncognito as IconComponent;