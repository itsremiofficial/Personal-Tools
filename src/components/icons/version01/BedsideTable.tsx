import { FC } from 'react';

const IconBedsideTable: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M19 22.0001V20.5001M5 22.0001V20.5001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M13 11.0001C13 11.5524 12.5523 12.0001 12 12.0001C11.4477 12.0001 11 11.5524 11 11.0001C11 10.4478 11.4477 10.0001 12 10.0001C12.5523 10.0001 13 10.4478 13 11.0001Z" fill="currentColor" /><path d="M13 5.00012C13 5.55241 12.5523 6.00012 12 6.00012C11.4477 6.00012 11 5.55241 11 5.00012C11 4.44784 11.4477 4.00012 12 4.00012C12.5523 4.00012 13 4.44784 13 5.00012Z" fill="currentColor" /><path d="M13 17.0001C13 17.5524 12.5523 18.0001 12 18.0001C11.4477 18.0001 11 17.5524 11 17.0001C11 16.4478 11.4477 16.0001 12 16.0001C12.5523 16.0001 13 16.4478 13 17.0001Z" fill="currentColor" /><path d="M2 10.0001C2 6.22889 2 4.34327 3.17157 3.17169C4.34315 2.00012 6.22876 2.00012 10 2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.17169C22 4.34327 22 6.22889 22 10.0001V12.0001C22 15.7714 22 17.657 20.8284 18.8285C19.6569 20.0001 17.7712 20.0001 14 20.0001H10C6.22876 20.0001 4.34315 20.0001 3.17157 18.8285C2 17.657 2 15.7714 2 12.0001V10.0001Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.4" : "1"} d="M2 14.0001H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 8.00012H22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M2 10.0001C2 9.55819 2.00189 8.39215 2.00377 8.00012H22C22.0019 8.39215 22 9.55819 22 10.0001V12.0001C22 12.4421 22 13.6081 21.9981 14.0001H2.00189C2 13.6081 2 12.4421 2 12.0001V10.0001Z" fill="currentColor" /><path d="M13 11.0001C13 11.5524 12.5523 12.0001 12 12.0001C11.4477 12.0001 11 11.5524 11 11.0001C11 10.4478 11.4477 10.0001 12 10.0001C12.5523 10.0001 13 10.4478 13 11.0001Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.02588 7.25012C2.09201 5.22894 2.32819 4.01524 3.17174 3.17169C4.34331 2.00012 6.22893 2.00012 10.0002 2.00012H14.0002C17.7714 2.00012 19.657 2.00012 20.8286 3.17169C21.6721 4.01524 21.9083 5.22894 21.9744 7.25012L22 8.00012H2L2.02588 7.25012ZM12 6.00012C12.5523 6.00012 13 5.55241 13 5.00012C13 4.44784 12.5523 4.00012 12 4.00012C11.4477 4.00012 11 4.44784 11 5.00012C11 5.55241 11.4477 6.00012 12 6.00012Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.02588 14.7501C2.09201 16.7713 2.32819 17.985 3.17174 18.8286C3.47615 19.133 3.82878 19.3583 4.25016 19.5251V22.0001C4.25016 22.4143 4.58595 22.7501 5.00016 22.7501C5.41438 22.7501 5.75016 22.4143 5.75016 22.0001V19.8714C6.82005 20.0001 8.1938 20.0001 10.0002 20.0001H14.0002C15.8065 20.0001 17.1803 20.0001 18.2502 19.8714V22.0001C18.2502 22.4143 18.5859 22.7501 19.0002 22.7501C19.4144 22.7501 19.7502 22.4143 19.7502 22.0001V19.5251C20.1715 19.3583 20.5242 19.133 20.8286 18.8286C21.6721 17.985 21.9083 16.7713 21.9744 14.7501V14.0001H2L2.02588 14.7501ZM12.0002 18.0001C12.5524 18.0001 13.0002 17.5524 13.0002 17.0001C13.0002 16.4478 12.5524 16.0001 12.0002 16.0001C11.4479 16.0001 11.0002 16.4478 11.0002 17.0001C11.0002 17.5524 11.4479 18.0001 12.0002 18.0001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.9743 7.25012H2.02572C2.09185 5.22894 2.32803 4.01524 3.17157 3.17169C4.34315 2.00012 6.22876 2.00012 10 2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.17169C21.672 4.01524 21.9082 5.22894 21.9743 7.25012ZM13 5.00012C13 5.55241 12.5523 6.00012 12 6.00012C11.4477 6.00012 11 5.55241 11 5.00012C11 4.44784 11.4477 4.00012 12 4.00012C12.5523 4.00012 13 4.44784 13 5.00012Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 10.0001C2 9.55819 2 9.14215 2.00189 8.75012H21.9981C22 9.14215 22 9.55819 22 10.0001V12.0001C22 12.4421 22 12.8581 21.9981 13.2501H2.00189C2 12.8581 2 12.4421 2 12.0001V10.0001ZM12 12.0001C12.5523 12.0001 13 11.5524 13 11.0001C13 10.4478 12.5523 10.0001 12 10.0001C11.4477 10.0001 11 10.4478 11 11.0001C11 11.5524 11.4477 12.0001 12 12.0001Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M21.9743 14.7501H2.02572C2.09185 16.7713 2.32803 17.985 3.17157 18.8286C3.47599 19.133 3.82861 19.3583 4.25 19.5251V22.0001C4.25 22.4143 4.58579 22.7501 5 22.7501C5.41421 22.7501 5.75 22.4143 5.75 22.0001V19.8714C6.81989 20.0001 8.19364 20.0001 10 20.0001H14C15.8064 20.0001 17.1801 20.0001 18.25 19.8714V22.0001C18.25 22.4143 18.5858 22.7501 19 22.7501C19.4142 22.7501 19.75 22.4143 19.75 22.0001V19.5251C20.1714 19.3583 20.524 19.133 20.8284 18.8286C21.672 17.985 21.9082 16.7713 21.9743 14.7501ZM13 17.0001C13 17.5524 12.5523 18.0001 12 18.0001C11.4477 18.0001 11 17.5524 11 17.0001C11 16.4478 11.4477 16.0001 12 16.0001C12.5523 16.0001 13 16.4478 13 17.0001Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBedsideTable as IconComponent).keywords = [
  "bedside",
  "table",
  "bed",
  "bunk",
  "crib",
  "staff",
  "ward",
  "deathbed",
  "pain",
  "patient",
  "sick",
  "board",
  "shelve",
  "mesa",
  "set back",
  "remit",
  "put over",
  "postpone",
  "put off",
  "defer"
];

export default IconBedsideTable as IconComponent;