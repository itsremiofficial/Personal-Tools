import { FC } from 'react';

const IconComputing: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6396 15V9C22.6396 4 20.6396 2 15.6396 2H9.63965C4.63965 2 2.63965 4 2.63965 9V15C2.63965 20 4.63965 22 9.63965 22H15.6396C20.6396 22 22.6396 20 22.6396 15Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.3895 3.25L3.93945 19.7" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.7305 18V13" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.1699 15.5H14.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M11.1699 7.5H6.16992" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.81V16.19C22.6699 19.83 20.4999 22 16.8599 22H8.47992C6.98992 22 5.74992 21.64 4.79992 20.95C4.37992 20.66 4.00992 20.29 3.71992 19.87C3.02992 18.92 2.66992 17.68 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C18.3499 2 19.5899 2.36 20.5399 3.05C20.9599 3.34 21.3299 3.71 21.6199 4.13C22.3099 5.08 22.6699 6.32 22.6699 7.81Z" fill="currentColor" /><path d="M21.6197 4.13L4.79973 20.95C4.37973 20.66 4.00973 20.29 3.71973 19.87L20.5397 3.05C20.9597 3.34 21.3297 3.71 21.6197 4.13Z" fill="currentColor" /><path d="M19.1699 14.75H17.4799V13C17.4799 12.59 17.1399 12.25 16.7299 12.25C16.3199 12.25 15.9799 12.59 15.9799 13V14.75H14.1699C13.7599 14.75 13.4199 15.09 13.4199 15.5C13.4199 15.91 13.7599 16.25 14.1699 16.25H15.9799V18C15.9799 18.41 16.3199 18.75 16.7299 18.75C17.1399 18.75 17.4799 18.41 17.4799 18V16.25H19.1699C19.5799 16.25 19.9199 15.91 19.9199 15.5C19.9199 15.09 19.5799 14.75 19.1699 14.75Z" fill="currentColor" /><path d="M11.1699 8.25H6.16992C5.75992 8.25 5.41992 7.91 5.41992 7.5C5.41992 7.09 5.75992 6.75 6.16992 6.75H11.1699C11.5799 6.75 11.9199 7.09 11.9199 7.5C11.9199 7.91 11.5799 8.25 11.1699 8.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6198 4.13L4.7998 20.95C5.7498 21.64 6.9898 22 8.4798 22H16.8598C20.4998 22 22.6698 19.83 22.6698 16.19V7.81C22.6698 6.32 22.3098 5.08 21.6198 4.13ZM19.1698 16.25H17.4798V18C17.4798 18.41 17.1398 18.75 16.7298 18.75C16.3198 18.75 15.9798 18.41 15.9798 18V16.25H14.1698C13.7598 16.25 13.4198 15.91 13.4198 15.5C13.4198 15.09 13.7598 14.75 14.1698 14.75H15.9798V13C15.9798 12.59 16.3198 12.25 16.7298 12.25C17.1398 12.25 17.4798 12.59 17.4798 13V14.75H19.1698C19.5798 14.75 19.9198 15.09 19.9198 15.5C19.9198 15.91 19.5798 16.25 19.1698 16.25Z" fill="currentColor" /><path d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 17.68 3.02992 18.92 3.71992 19.87L20.5399 3.05C19.5899 2.36 18.3499 2 16.8599 2ZM11.1699 8.25H6.16992C5.75992 8.25 5.41992 7.91 5.41992 7.5C5.41992 7.09 5.75992 6.75 6.16992 6.75H11.1699C11.5799 6.75 11.9199 7.09 11.9199 7.5C11.9199 7.91 11.5799 8.25 11.1699 8.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconComputing as IconComponent).keywords = [
  "computing",
  "cypher",
  "cipher",
  "calculate",
  "figure",
  "reckon",
  "computational",
  "computation",
  "calculator",
  "informatics"
];

export default IconComputing as IconComponent;