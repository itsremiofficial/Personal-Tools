import { FC } from 'react';

const IconSpeakerMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 10.0001C4 6.22889 4 4.34327 5.17157 3.17169C6.34315 2.00012 8.22876 2.00012 12 2.00012C15.7712 2.00012 17.6569 2.00012 18.8284 3.17169C20 4.34327 20 6.22889 20 10.0001V14.0001C20 17.7714 20 19.657 18.8284 20.8285C17.6569 22.0001 15.7712 22.0001 12 22.0001C8.22876 22.0001 6.34315 22.0001 5.17157 20.8285C4 19.657 4 17.7714 4 14.0001V10.0001Z" stroke="currentColor" strokeWidth={width} /><path d="M16 14.0001C16 16.2093 14.2091 18.0001 12 18.0001C9.79086 18.0001 8 16.2093 8 14.0001C8 11.791 9.79086 10.0001 12 10.0001C14.2091 10.0001 16 11.791 16 14.0001Z" stroke="currentColor" strokeWidth={width} /><path d="M10 6.00012H14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M4 10.0001C4 6.22889 4 4.34327 5.17157 3.17169C6.34315 2.00012 8.22876 2.00012 12 2.00012C15.7712 2.00012 17.6569 2.00012 18.8284 3.17169C20 4.34327 20 6.22889 20 10.0001V14.0001C20 17.7714 20 19.657 18.8284 20.8285C17.6569 22.0001 15.7712 22.0001 12 22.0001C8.22876 22.0001 6.34315 22.0001 5.17157 20.8285C4 19.657 4 17.7714 4 14.0001V10.0001Z" fill="currentColor" /><path d="M10 5.25012C9.58579 5.25012 9.25 5.58591 9.25 6.00012C9.25 6.41434 9.58579 6.75012 10 6.75012H14C14.4142 6.75012 14.75 6.41434 14.75 6.00012C14.75 5.58591 14.4142 5.25012 14 5.25012H10Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 9.25012C9.37665 9.25012 7.25 11.3768 7.25 14.0001C7.25 16.6235 9.37665 18.7501 12 18.7501C14.6234 18.7501 16.75 16.6235 16.75 14.0001C16.75 11.3768 14.6234 9.25012 12 9.25012Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.7501C10.2051 10.7501 8.75 12.2052 8.75 14.0001C8.75 15.795 10.2051 17.2501 12 17.2501C13.7949 17.2501 15.25 15.795 15.25 14.0001C15.25 12.2052 13.7949 10.7501 12 10.7501Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4 10.0001C4 6.22889 4 4.34327 5.17157 3.17169C6.34315 2.00012 8.22876 2.00012 12 2.00012C15.7712 2.00012 17.6569 2.00012 18.8284 3.17169C20 4.34327 20 6.22889 20 10.0001V14.0001C20 17.7714 20 19.657 18.8284 20.8285C17.6569 22.0001 15.7712 22.0001 12 22.0001C8.22876 22.0001 6.34315 22.0001 5.17157 20.8285C4 19.657 4 17.7714 4 14.0001V10.0001ZM7.25 14.0001C7.25 11.3768 9.37665 9.25012 12 9.25012C14.6234 9.25012 16.75 11.3768 16.75 14.0001C16.75 16.6235 14.6234 18.7501 12 18.7501C9.37665 18.7501 7.25 16.6235 7.25 14.0001ZM10 5.25012C9.58579 5.25012 9.25 5.58591 9.25 6.00012C9.25 6.41434 9.58579 6.75012 10 6.75012H14C14.4142 6.75012 14.75 6.41434 14.75 6.00012C14.75 5.58591 14.4142 5.25012 14 5.25012H10Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSpeakerMinimalistic as IconComponent).keywords = [
  "speaker",
  "minimalistic",
  "talker",
  "loudspeaker",
  "loudspeaker system",
  "speaker system",
  "speaker unit",
  "speaking",
  "orator",
  "speak",
  "speech",
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

export default IconSpeakerMinimalistic as IconComponent;