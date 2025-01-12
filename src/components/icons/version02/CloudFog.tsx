import { FC } from 'react';

const IconCloudFog: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.95957 11.62C1.75957 2.69002 15.2896 -0.869977 16.8396 8.50002C18.7696 8.74002 20.1796 10.02 20.8696 11.62" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.21 8.93002C15.73 8.67002 16.3 8.53002 16.88 8.52002" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.66992 15.03H20.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.66992 18.03H18.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9.66992 21.03H15.6699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4699 12H4.86997C4.64997 12 4.44998 11.85 4.37998 11.64C1.62998 2.55003 15.51 -0.939963 17.11 8.82004C18.77 9.03004 20.0799 9.97003 20.8899 11.23C21.1099 11.56 20.8599 12 20.4699 12Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.6699 15.78H4.66992C4.25992 15.78 3.91992 15.44 3.91992 15.03C3.91992 14.62 4.25992 14.28 4.66992 14.28H20.6699C21.0799 14.28 21.4199 14.62 21.4199 15.03C21.4199 15.44 21.0799 15.78 20.6699 15.78Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.6699 18.78H6.66992C6.25992 18.78 5.91992 18.44 5.91992 18.03C5.91992 17.62 6.25992 17.28 6.66992 17.28H18.6699C19.0799 17.28 19.4199 17.62 19.4199 18.03C19.4199 18.44 19.0799 18.78 18.6699 18.78Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.6699 21.78H9.66992C9.25992 21.78 8.91992 21.44 8.91992 21.03C8.91992 20.62 9.25992 20.28 9.66992 20.28H15.6699C16.0799 20.28 16.4199 20.62 16.4199 21.03C16.4199 21.44 16.0799 21.78 15.6699 21.78Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.47 12H4.86997C4.64997 12 4.44997 11.85 4.37997 11.64C1.62997 2.55003 15.51 -0.939966 17.12 8.82003C18.78 9.03003 20.09 9.97003 20.9 11.23C21.11 11.56 20.86 12 20.47 12Z" fill="currentColor" /><path d="M20.6699 15.78H4.66992C4.25992 15.78 3.91992 15.44 3.91992 15.03C3.91992 14.62 4.25992 14.28 4.66992 14.28H20.6699C21.0799 14.28 21.4199 14.62 21.4199 15.03C21.4199 15.44 21.0799 15.78 20.6699 15.78Z" fill="currentColor" /><path d="M18.6699 18.78H6.66992C6.25992 18.78 5.91992 18.44 5.91992 18.03C5.91992 17.62 6.25992 17.28 6.66992 17.28H18.6699C19.0799 17.28 19.4199 17.62 19.4199 18.03C19.4199 18.44 19.0799 18.78 18.6699 18.78Z" fill="currentColor" /><path d="M15.6699 21.78H9.66992C9.25992 21.78 8.91992 21.44 8.91992 21.03C8.91992 20.62 9.25992 20.28 9.66992 20.28H15.6699C16.0799 20.28 16.4199 20.62 16.4199 21.03C16.4199 21.44 16.0799 21.78 15.6699 21.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudFog as IconComponent).keywords = [
  "cloud",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "haze",
  "fogginess",
  "murkiness",
  "murk"
];

export default IconCloudFog as IconComponent;