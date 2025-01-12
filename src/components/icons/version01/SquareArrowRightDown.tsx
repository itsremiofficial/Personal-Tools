import { FC } from 'react';

const IconSquareArrowRightDown: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9L15 15M15 15L15 10.5M15 15L10.5 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28596 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28596 22 12C22 16.714 22 19.0711 20.5355 20.5355Z" fill="currentColor" /><path d="M15.5785 14.8282C15.5785 15.2425 15.2427 15.5782 14.8285 15.5782L10.5858 15.5782C10.1716 15.5782 9.83585 15.2425 9.83585 14.8282C9.83585 14.414 10.1716 14.0782 10.5858 14.0782H13.0178L8.6413 9.70172C8.34841 9.40882 8.34841 8.93395 8.6413 8.64106C8.93419 8.34816 9.40907 8.34816 9.70196 8.64106L14.0785 13.0176L14.0785 10.5856C14.0785 10.1714 14.4143 9.8356 14.8285 9.8356C15.2427 9.8356 15.5785 10.1714 15.5785 10.5856L15.5785 14.8282Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447ZM14.8284 15.5784C15.2426 15.5784 15.5784 15.2426 15.5784 14.8284L15.5784 10.5858C15.5784 10.1716 15.2426 9.83578 14.8284 9.83578C14.4142 9.83578 14.0784 10.1716 14.0784 10.5858L14.0784 13.0178L9.7019 8.64124C9.40901 8.34835 8.93413 8.34835 8.64124 8.64124C8.34835 8.93414 8.34835 9.40901 8.64124 9.7019L13.0178 14.0784H10.5858C10.1716 14.0784 9.83579 14.4142 9.83579 14.8284C9.83579 15.2426 10.1716 15.5784 10.5858 15.5784L14.8284 15.5784Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareArrowRightDown as IconComponent).keywords = [
  "square",
  "arrow",
  "right",
  "down",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending"
];

export default IconSquareArrowRightDown as IconComponent;