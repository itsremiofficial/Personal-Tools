import { FC } from 'react';

const IconMore2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6698 9.32C13.8598 9.32 14.8298 8.35 14.8298 7.16C14.8298 5.97 13.8598 5 12.6698 5C11.4798 5 10.5098 5.97 10.5098 7.16C10.5098 8.35 11.4798 9.32 12.6698 9.32Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.4598 19.0002C8.6498 19.0002 9.6198 18.0302 9.6198 16.8402C9.6198 15.6502 8.6498 14.6802 7.4598 14.6802C6.2698 14.6802 5.2998 15.6502 5.2998 16.8402C5.2998 18.0302 6.2598 19.0002 7.4598 19.0002Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.8797 19.0002C19.0697 19.0002 20.0397 18.0302 20.0397 16.8402C20.0397 15.6502 19.0697 14.6802 17.8797 14.6802C16.6897 14.6802 15.7197 15.6502 15.7197 16.8402C15.7197 18.0302 16.6897 19.0002 17.8797 19.0002Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M12.6699 10.3099C13.3934 10.3099 13.9799 9.72343 13.9799 8.99994C13.9799 8.27645 13.3934 7.68994 12.6699 7.68994C11.9464 7.68994 11.3599 8.27645 11.3599 8.99994C11.3599 9.72343 11.9464 10.3099 12.6699 10.3099Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M8.97992 13.6899C8.25992 13.6899 7.66992 14.2799 7.66992 14.9999C7.66992 15.7199 8.25992 16.3099 8.97992 16.3099C9.69992 16.3099 10.2899 15.7199 10.2899 14.9999C10.2899 14.2799 9.69992 13.6899 8.97992 13.6899Z" fill="currentColor" /><path opacity={duotone ? "0.97" : "1"} d="M16.3598 13.6899C15.6398 13.6899 15.0498 14.2799 15.0498 14.9999C15.0498 15.7199 15.6398 16.3099 16.3598 16.3099C17.0798 16.3099 17.6698 15.7199 17.6698 14.9999C17.6698 14.2799 17.0798 13.6899 16.3598 13.6899Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.97" : "1"} d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM8.97992 16.31C8.25992 16.31 7.66992 15.72 7.66992 15C7.66992 14.28 8.25992 13.69 8.97992 13.69C9.69992 13.69 10.2899 14.28 10.2899 15C10.2899 15.72 9.69992 16.31 8.97992 16.31ZM12.6699 10.31C11.9499 10.31 11.3599 9.72 11.3599 9C11.3599 8.28 11.9499 7.69 12.6699 7.69C13.3899 7.69 13.9799 8.28 13.9799 9C13.9799 9.72 13.3899 10.31 12.6699 10.31ZM16.3599 16.31C15.6399 16.31 15.0499 15.72 15.0499 15C15.0499 14.28 15.6399 13.69 16.3599 13.69C17.0799 13.69 17.6699 14.28 17.6699 15C17.6699 15.72 17.0799 16.31 16.3599 16.31Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMore2 as IconComponent).keywords = [
  "more",
  "2",
  "additional",
  "further",
  "added",
  "more than",
  "to a greater extent",
  "maximum",
  "farther",
  "anymore",
  "better",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconMore2 as IconComponent;