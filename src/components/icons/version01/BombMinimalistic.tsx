import { FC } from 'react';

const IconBombMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="14.5005" r="7.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M17 7.00049L15 9.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M19.5 7.50049L20.5 8.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M16 3.50049L16.5 4.50049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M19 5.00049L20 4.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.6" : "1"} d="M17 14.5005C17 18.6426 13.6421 22.0005 9.5 22.0005C5.35786 22.0005 2 18.6426 2 14.5005C2 10.3584 5.35786 7.00049 9.5 7.00049C13.6421 7.00049 17 10.3584 17 14.5005Z" fill="currentColor" /><path d="M16.6708 3.165C16.4856 2.79451 16.0351 2.64435 15.6646 2.82959C15.2941 3.01483 15.144 3.46533 15.3292 3.83582L15.8292 4.83582C16.0144 5.2063 16.4649 5.35647 16.8354 5.17123C17.2059 4.98599 17.3561 4.53548 17.1708 4.165L16.6708 3.165Z" fill="currentColor" /><path d="M19.8354 6.82959C19.4649 6.64435 19.0144 6.79451 18.8292 7.165C18.644 7.53548 18.7941 7.98599 19.1646 8.17123L20.1646 8.67123C20.5351 8.85647 20.9856 8.7063 21.1708 8.33582C21.3561 7.96533 21.2059 7.51483 20.8354 7.32959L19.8354 6.82959Z" fill="currentColor" /><path d="M20.5303 4.53074C20.8232 4.23785 20.8232 3.76297 20.5303 3.47008C20.2375 3.17719 19.7626 3.17719 19.4697 3.47008L18.4697 4.47008C18.1768 4.76297 18.1768 5.23785 18.4697 5.53074C18.7626 5.82363 19.2375 5.82363 19.5303 5.53074L20.5303 4.53074Z" fill="currentColor" /><path d="M15.3071 9.75384L17.5302 7.53074C17.8231 7.23785 17.8231 6.76297 17.5302 6.47008C17.2373 6.17719 16.7625 6.17719 16.4696 6.47008L14.2465 8.69319C14.6343 9.01056 14.9898 9.36601 15.3071 9.75384Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6646 2.82959C16.0351 2.64435 16.4856 2.79451 16.6708 3.165L17.1708 4.165C17.3561 4.53548 17.2059 4.98599 16.8354 5.17123C16.4649 5.35647 16.0144 5.2063 15.8292 4.83582L15.3292 3.83582C15.1439 3.46533 15.2941 3.01483 15.6646 2.82959Z" fill="currentColor" /><path d="M18.8292 7.165C19.0144 6.79451 19.4649 6.64435 19.8354 6.82959L20.8354 7.32959C21.2059 7.51483 21.3561 7.96533 21.1708 8.33582C20.9856 8.7063 20.5351 8.85647 20.1646 8.67123L19.1646 8.17123C18.7941 7.98599 18.6439 7.53548 18.8292 7.165Z" fill="currentColor" /><path d="M20.5303 4.53074C20.8232 4.23785 20.8232 3.76297 20.5303 3.47008C20.2374 3.17719 19.7626 3.17719 19.4697 3.47008L18.4697 4.47008C18.1768 4.76297 18.1768 5.23785 18.4697 5.53074C18.7626 5.82363 19.2374 5.82363 19.5303 5.53074L20.5303 4.53074Z" fill="currentColor" /><path d="M17 14.5004C17 18.6425 13.6421 22.0004 9.5 22.0004C5.35786 22.0004 2 18.6425 2 14.5004C2 10.3583 5.35786 7.00041 9.5 7.00041C13.6421 7.00041 17 10.3583 17 14.5004Z" fill="currentColor" /><path d="M17.5302 7.53074L16.3722 8.68878C16.0486 8.30655 15.6938 7.95168 15.3115 7.62812L16.4696 6.47008C16.7625 6.17719 17.2373 6.17719 17.5302 6.47008C17.8231 6.76297 17.8231 7.23785 17.5302 7.53074Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBombMinimalistic as IconComponent).keywords = [
  "bomb",
  "minimalistic",
  "bombard",
  "bomb calorimeter",
  "flunk",
  "dud",
  "fail",
  "turkey",
  "flush it",
  "warhead",
  "nuke",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic"
];

export default IconBombMinimalistic as IconComponent;