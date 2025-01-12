import { FC } from 'react';

const IconHappyemoji: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M7.87988 16C8.92988 17.51 10.6899 18.5 12.6699 18.5C14.6499 18.5 16.3999 17.51 17.4599 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z" fill="currentColor" /><path d="M12.6698 19.25C10.5198 19.25 8.4998 18.2 7.2698 16.43C7.0298 16.09 7.1198 15.62 7.4598 15.39C7.7998 15.15 8.2698 15.24 8.4998 15.58C9.4498 16.94 11.0098 17.76 12.6698 17.76C14.3298 17.76 15.8898 16.95 16.8398 15.58C17.0798 15.24 17.5398 15.16 17.8798 15.39C18.2198 15.63 18.2998 16.09 18.0698 16.43C16.8398 18.2 14.8198 19.25 12.6698 19.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6396 2C7.11965 2 2.63965 6.48 2.63965 12C2.63965 17.52 7.11965 22 12.6396 22C18.1596 22 22.6396 17.52 22.6396 12C22.6396 6.48 18.1696 2 12.6396 2ZM18.0696 16.43C16.8396 18.2 14.8196 19.25 12.6696 19.25C10.5196 19.25 8.49965 18.2 7.26965 16.43C7.02965 16.09 7.11965 15.62 7.45965 15.39C7.79965 15.15 8.26965 15.24 8.49965 15.58C9.44965 16.94 11.0096 17.76 12.6696 17.76C14.3296 17.76 15.8896 16.95 16.8396 15.58C17.0796 15.24 17.5396 15.16 17.8796 15.39C18.2296 15.62 18.3096 16.09 18.0696 16.43Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHappyemoji as IconComponent).keywords = [
  "happyemoji"
];

export default IconHappyemoji as IconComponent;