import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWheelAngle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 22.0005C18.9853 22.0005 21 17.5233 21 12.0005C21 6.47764 18.9853 2.00049 16.5 2.00049" stroke="currentColor" strokeWidth={width} /><path d="M12 12.0005C12 17.5233 9.98528 22.0005 7.5 22.0005C5.01472 22.0005 3 17.5233 3 12.0005C3 6.47764 5.01472 2.00049 7.5 2.00049C9.98528 2.00049 12 6.47764 12 12.0005Z" stroke="currentColor" strokeWidth={width} /><path d="M7.5 2.00049L16.5 2.00049" stroke="currentColor" strokeWidth={width} /><path d="M7.5 22.0005L16.5 22.0005" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M9 12.0005C9 15.3142 8.32843 18.0005 7.5 18.0005C6.67157 18.0005 6 15.3142 6 12.0005C6 8.68678 6.67157 6.00049 7.5 6.00049C8.32843 6.00049 9 8.68678 9 12.0005ZM9 12.0005H8" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.43323 4.77324C3.5567 6.59578 3 9.15053 3 12.0005C3 14.8505 3.5567 17.4052 4.43323 19.2277C5.33351 21.0997 6.46125 22.0005 7.5 22.0005C8.53875 22.0005 9.66648 21.0997 10.5668 19.2277C11.4433 17.4052 12 14.8505 12 12.0005C12 9.15053 11.4433 6.59578 10.5668 4.77324C9.66648 2.9013 8.53875 2.00049 7.5 2.00049C6.46125 2.00049 5.33351 2.9013 4.43323 4.77324ZM5.8125 12.0005C5.8125 15.4886 6.56802 18.3163 7.5 18.3163C8.36054 18.3163 9.07064 15.9055 9.17444 12.79H8.0625C7.59651 12.79 7.21875 12.4365 7.21875 12.0005C7.21875 11.5645 7.59651 11.211 8.0625 11.211H9.17444C9.07064 8.09551 8.36054 5.6847 7.5 5.6847C6.56802 5.6847 5.8125 8.51237 5.8125 12.0005Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M10.5668 19.2277C9.66649 21.0997 8.53875 22.0005 7.5 22.0005H16.3715C18.9278 22.0005 21.0001 17.5233 21.0001 12.0005C21.0001 6.47764 18.9278 2.00049 16.3715 2.00049H7.5C8.53875 2.00049 9.66649 2.9013 10.5668 4.77324C11.4433 6.59578 12 9.15053 12 12.0005C12 14.8505 11.4433 17.4052 10.5668 19.2277Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.0005C21 17.5233 18.9277 22.0005 16.3714 22.0005H8.65714C9.5236 21.439 10.3126 20.4511 10.8562 19.2767C11.73 17.3889 12.2571 14.8159 12.2571 12.0005C12.2571 9.18511 11.73 6.61211 10.8562 4.72424C10.3126 3.54988 9.5236 2.56196 8.65714 2.00049H16.3714C18.9277 2.00049 21 6.47764 21 12.0005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4.31038 5.1346C3.50898 6.86601 3 9.29302 3 12.0005C3 14.708 3.50898 17.135 4.31038 18.8664C5.1335 20.6447 6.16457 21.5005 7.11429 21.5005C8.064 21.5005 9.09507 20.6447 9.91819 18.8664C10.7196 17.135 11.2286 14.708 11.2286 12.0005C11.2286 9.29302 10.7196 6.86601 9.91819 5.1346C9.09507 3.35626 8.064 2.50049 7.11429 2.50049C6.16457 2.50049 5.1335 3.35626 4.31038 5.1346ZM5.57143 12.0005C5.57143 15.3142 6.26219 18.0005 7.11429 18.0005C7.90107 18.0005 8.5503 15.7102 8.64521 12.7505H7.62857C7.20252 12.7505 6.85714 12.4147 6.85714 12.0005C6.85714 11.5863 7.20252 11.2505 7.62857 11.2505H8.64521C8.5503 8.29075 7.90107 6.00049 7.11429 6.00049C6.26219 6.00049 5.57143 8.68678 5.57143 12.0005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWheelAngle as IconComponentType).keywords = [
  "wheel",
  "angle",
  "steering wheel",
  "wheel around",
  "pedal",
  "bicycle",
  "cycle",
  "rack",
  "bike",
  "roll",
  "roulette wheel",
  "weight",
  "slant",
  "tilt",
  "lean",
  "tip",
  "fish",
  "side",
  "prism",
  "dimension"
];

export default IconWheelAngle as IconComponentType;