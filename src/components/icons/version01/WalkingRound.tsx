import { FC } from 'react';

const IconWalkingRound: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="12.5" cy="4.50049" r="2.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M7 22.0005L7.50917 21.5932C8.79506 20.5644 9.67705 19.1153 10 17.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M11.1582 13.4182L11.9045 13.4928L11.1582 13.4182ZM11.9713 16.2595L12.5652 15.8014L11.9713 16.2595ZM15.8066 22.4586C16.0596 22.7866 16.5306 22.8473 16.8585 22.5943C17.1865 22.3413 17.2472 21.8703 16.9942 21.5424L15.8066 22.4586ZM10.9698 10.0166L10.9292 9.26768L10.9698 10.0166ZM13.0872 10.132L12.9805 10.8744H12.9805L13.0872 10.132ZM17.1969 13.301L17.0736 12.5612L17.1969 13.301ZM19.1233 13.7403C19.5319 13.6722 19.8079 13.2858 19.7398 12.8772C19.6717 12.4686 19.2853 12.1926 18.8767 12.2607L19.1233 13.7403ZM15.6163 12.3493L16.3278 12.1122V12.1122L15.6163 12.3493ZM6.25 14.5005C6.25 14.9147 6.58579 15.2505 7 15.2505C7.41421 15.2505 7.75 14.9147 7.75 14.5005H6.25ZM10.7537 9.92586L10.412 13.3436L11.9045 13.4928L12.2463 10.0751L10.7537 9.92586ZM11.3775 16.7177L15.8066 22.4586L16.9942 21.5424L12.5652 15.8014L11.3775 16.7177ZM11.5 9.25049C11.3217 9.25049 11.129 9.25685 10.9292 9.26768L11.0104 10.7655C11.1912 10.7557 11.3558 10.7505 11.5 10.7505V9.25049ZM11.5 10.7505C11.9543 10.7505 12.476 10.8019 12.9805 10.8744L13.1938 9.38961C12.6539 9.31206 12.0541 9.25049 11.5 9.25049V10.7505ZM17.3202 14.0408L19.1233 13.7403L18.8767 12.2607L17.0736 12.5612L17.3202 14.0408ZM12.9805 10.8744C13.8619 11.001 14.5975 11.6647 14.9048 12.5865L16.3278 12.1122C15.8674 10.7309 14.7153 9.60815 13.1938 9.38961L12.9805 10.8744ZM10.9292 9.26768C8.1638 9.41755 6.25 11.8598 6.25 14.5005H7.75C7.75 12.5248 9.16607 10.8654 11.0104 10.7655L10.9292 9.26768ZM14.9048 12.5865C15.2424 13.5995 16.2669 14.2163 17.3202 14.0408L17.0736 12.5612C16.7484 12.6154 16.4321 12.425 16.3278 12.1122L14.9048 12.5865ZM10.412 13.3436C10.3396 14.0668 10.2713 14.6266 10.4253 15.1649L11.8674 14.7523C11.8107 14.5542 11.8205 14.3325 11.9045 13.4928L10.412 13.3436ZM12.5652 15.8014C12.0497 15.1332 11.9241 14.9503 11.8674 14.7523L10.4253 15.1649C10.5794 15.7033 10.9335 16.1422 11.3775 16.7177L12.5652 15.8014Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.9292 9.26768C11.129 9.25685 11.3217 9.25049 11.5 9.25049C12.0541 9.25049 12.6539 9.31206 13.1938 9.38961C14.7153 9.60815 15.8674 10.7309 16.3278 12.1122C16.4321 12.425 16.7484 12.6154 17.0736 12.5612L18.8767 12.2607C19.2853 12.1926 19.6717 12.4686 19.7398 12.8772C19.8079 13.2858 19.5319 13.6722 19.1233 13.7403L17.3202 14.0408C16.2669 14.2163 15.2424 13.5995 14.9048 12.5865C14.5975 11.6647 13.8619 11.001 12.9805 10.8744C12.7129 10.8359 12.4404 10.8034 12.1757 10.7813L11.9045 13.4928C11.8205 14.3325 11.8107 14.5542 11.8674 14.7523C11.9241 14.9503 12.0497 15.1332 12.5652 15.8014L16.9942 21.5424C17.2472 21.8703 17.1865 22.3413 16.8585 22.5943C16.5306 22.8473 16.0596 22.7866 15.8066 22.4586L11.3775 16.7177C11.3536 16.6867 11.33 16.6561 11.3066 16.6259C10.896 16.0946 10.5711 15.6743 10.4253 15.1649C10.2796 14.6556 10.3329 14.127 10.4003 13.4589C10.4042 13.4209 10.4081 13.3825 10.412 13.3436L10.666 10.8028C8.99272 11.0765 7.75 12.6496 7.75 14.5005C7.75 14.9147 7.41421 15.2505 7 15.2505C6.58579 15.2505 6.25 14.9147 6.25 14.5005C6.25 11.8598 8.1638 9.41755 10.9292 9.26768Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M15 4.50049C15 5.8812 13.8807 7.00049 12.5 7.00049C11.1193 7.00049 10 5.8812 10 4.50049C10 3.11978 11.1193 2.00049 12.5 2.00049C13.8807 2.00049 15 3.11978 15 4.50049Z" fill="currentColor" /></g><g opacity={duotone ? "0.5" : "1"}><path d="M10.1471 16.7652C10.5533 16.8464 10.8167 17.2416 10.7355 17.6477C10.3779 19.4355 9.4014 21.04 7.97772 22.179L7.46855 22.5863C7.1451 22.845 6.67313 22.7926 6.41438 22.4692C6.15562 22.1457 6.20806 21.6737 6.53151 21.415L7.04067 21.0076C8.18877 20.0892 8.97625 18.7953 9.26459 17.3535C9.34583 16.9474 9.74094 16.684 10.1471 16.7652Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 4.50049C15 5.8812 13.8807 7.00049 12.5 7.00049C11.1193 7.00049 10 5.8812 10 4.50049C10 3.11978 11.1193 2.00049 12.5 2.00049C13.8807 2.00049 15 3.11978 15 4.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.9292 9.26768C11.129 9.25686 11.3217 9.25049 11.5 9.25049C12.0541 9.25049 12.6539 9.31206 13.1938 9.38961C14.7154 9.60815 15.8674 10.731 16.3278 12.1122C16.4321 12.425 16.7484 12.6154 17.0737 12.5612L18.8767 12.2607C19.2853 12.1926 19.6717 12.4686 19.7398 12.8772C19.8079 13.2858 19.5319 13.6722 19.1233 13.7403L17.3203 14.0408C16.2669 14.2163 15.2425 13.5995 14.9048 12.5865C14.5975 11.6647 13.862 11.001 12.9806 10.8744C12.7129 10.8359 12.4404 10.8034 12.1757 10.7813L11.9045 13.4928C11.8206 14.3325 11.8108 14.5542 11.8675 14.7523C11.9241 14.9503 12.0497 15.1332 12.5652 15.8014L16.9942 21.5424C17.2473 21.8703 17.1865 22.3413 16.8585 22.5943C16.5306 22.8473 16.0596 22.7866 15.8066 22.4586L11.3775 16.7177C11.3536 16.6867 11.33 16.6561 11.3066 16.6259C10.896 16.0946 10.5711 15.6743 10.4253 15.1649C10.2796 14.6556 10.3329 14.127 10.4004 13.4589C10.4042 13.4209 10.4081 13.3825 10.412 13.3436L10.6661 10.8028C8.99274 11.0765 7.75003 12.6496 7.75003 14.5005C7.75003 14.9147 7.41424 15.2505 7.00003 15.2505C6.58581 15.2505 6.25003 14.9147 6.25003 14.5005C6.25003 11.8598 8.16383 9.41755 10.9292 9.26768ZM10.1471 16.7651C10.5533 16.8463 10.8167 17.2414 10.7355 17.6476C10.3779 19.4354 9.4014 21.0399 7.97772 22.1788L7.46855 22.5861C7.1451 22.8449 6.67313 22.7925 6.41438 22.469C6.15562 22.1456 6.20806 21.6736 6.53151 21.4148L7.04067 21.0075C8.18877 20.089 8.97625 18.7951 9.26459 17.3534C9.34583 16.9472 9.74094 16.6838 10.1471 16.7651Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWalkingRound as IconComponent).keywords = [
  "walking",
  "round",
  "afoot",
  "moving",
  "close",
  "walk-to",
  "pedestrian",
  "hike",
  "step",
  "stepping",
  "strolling",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose"
];

export default IconWalkingRound as IconComponent;