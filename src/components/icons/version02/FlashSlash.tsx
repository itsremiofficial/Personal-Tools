import { FC } from 'react';

const IconFlashSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.34" : "1"} d="M9.84961 18.04V20.48C9.84961 22.16 10.7596 22.5 11.8696 21.24L19.4396 12.64C20.3696 11.59 19.9796 10.72 18.5696 10.72H17.6396" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.4899 8.84V3.52C15.4899 1.84 14.5799 1.5 13.4699 2.76L5.89992 11.36C4.96992 12.41 5.35992 13.28 6.76992 13.28H9.85992V14.46" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M22.6699 2L2.66992 22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.4894 3.52V9.18L9.84945 14.82V13.28H6.75945C5.35945 13.28 4.96944 12.42 5.89944 11.37L12.6694 3.67L13.4694 2.76C14.5794 1.5 15.4894 1.84 15.4894 3.52Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.4396 12.63L12.6696 20.33L11.8696 21.24C10.7596 22.5 9.84961 22.16 9.84961 20.48V17.82L16.9496 10.72H18.5796C19.9796 10.72 20.3696 11.58 19.4396 12.63Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z" fill="currentColor" /><path d="M15.4894 3.52V9.18L9.84945 14.82V13.28H6.75945C5.35945 13.28 4.96944 12.42 5.89944 11.37L12.6694 3.67L13.4694 2.76C14.5794 1.5 15.4894 1.84 15.4894 3.52Z" fill="currentColor" /><path d="M19.4396 12.63L12.6696 20.33L11.8696 21.24C10.7596 22.5 9.84961 22.16 9.84961 20.48V17.82L16.9496 10.72H18.5796C19.9796 10.72 20.3696 11.58 19.4396 12.63Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFlashSlash as IconComponent).keywords = [
  "flash",
  "slash",
  "twinkle",
  "twinkling",
  "glint",
  "flare",
  "blink",
  "wink",
  "scud",
  "trice",
  "loud",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about"
];

export default IconFlashSlash as IconComponent;