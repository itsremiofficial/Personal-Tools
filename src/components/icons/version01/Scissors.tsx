import { FC } from 'react';

const IconScissors: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M16.4013 20.5L6 2M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M7.59865 20.5L18 2M2 19C2 20.6569 3.34315 22 5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M6.65389 1.63257C6.45089 1.27151 5.99363 1.14338 5.63257 1.34638C5.27151 1.54938 5.14338 2.00664 5.34638 2.3677L15.7041 20.7901C16.3395 21.9577 17.5773 22.7501 19.0001 22.7501C21.0712 22.7501 22.7501 21.0712 22.7501 19.0001C22.7501 16.9291 21.0712 15.2501 19.0001 15.2501C17.4674 15.2501 16.1495 16.1697 15.5679 17.4871L6.65389 1.63257Z" fill="currentColor" /><path d="M17.3461 1.63257C17.5491 1.27151 18.0064 1.14338 18.3674 1.34638C18.7285 1.54938 18.8566 2.00664 18.6536 2.3677L8.29594 20.7901C7.66052 21.9577 6.42274 22.7501 4.99988 22.7501C2.92881 22.7501 1.24988 21.0712 1.24988 19.0001C1.24988 16.9291 2.92881 15.2501 4.99988 15.2501C6.53258 15.2501 7.85052 16.1697 8.43213 17.4871L17.3461 1.63257Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.65376 1.63257C6.45076 1.27151 5.99349 1.14338 5.63244 1.34638C5.27138 1.54938 5.14324 2.00664 5.34624 2.3677L11.1396 12.6718L8.43226 17.4871C7.85064 16.1697 6.5327 15.2501 5 15.2501C2.92893 15.2501 1.25 16.9291 1.25 19.0001C1.25 21.0712 2.92893 22.7501 5 22.7501C6.42286 22.7501 7.66063 21.9577 8.29606 20.7901L12 14.2022L15.7039 20.79C16.3393 21.9577 17.5771 22.7501 19 22.7501C21.0711 22.7501 22.75 21.0712 22.75 19.0001C22.75 16.9291 21.0711 15.2501 19 15.2501C17.4673 15.2501 16.1494 16.1696 15.5677 17.4871L12.8604 12.6718L18.6538 2.3677C18.8568 2.00664 18.7286 1.54938 18.3676 1.34638C18.0065 1.14338 17.5492 1.27151 17.3462 1.63257L12 11.1415L6.65376 1.63257Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScissors as IconComponent).keywords = [
  "scissors",
  "pair of scissors",
  "snips",
  "shears",
  "manicure",
  "charlotte",
  "chisels",
  "snippers",
  "tweezers",
  "knife"
];

export default IconScissors as IconComponent;