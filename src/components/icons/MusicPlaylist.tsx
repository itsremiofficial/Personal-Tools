import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMusicPlaylist: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 22H7C4 22 2 20.5 2 17V12C2 8.5 4 7 7 7H17C20 7 22 8.5 22 12V17C22 20.5 20 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 4.5H18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2H15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.88953 19.1101C9.64616 19.1101 10.2595 18.4967 10.2595 17.7401C10.2595 16.9835 9.64616 16.3701 8.88953 16.3701C8.1329 16.3701 7.51953 16.9835 7.51953 17.7401C7.51953 18.4967 8.1329 19.1101 8.88953 19.1101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.2798 16.83V11.4799C15.2798 10.3399 14.5698 10.18 13.8398 10.38L11.0997 11.13C10.5997 11.27 10.2598 11.6599 10.2598 12.2299V13.18V13.82V17.74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.9091 18.2C14.6657 18.2 15.2791 17.5866 15.2791 16.83C15.2791 16.0733 14.6657 15.46 13.9091 15.46C13.1524 15.46 12.5391 16.0733 12.5391 16.83C12.5391 17.5866 13.1524 18.2 13.9091 18.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.2598 13.83L15.2798 12.46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 5.25H6C5.59 5.25 5.25 4.91 5.25 4.5C5.25 4.09 5.59 3.75 6 3.75H18C18.41 3.75 18.75 4.09 18.75 4.5C18.75 4.91 18.41 5.25 18 5.25Z" fill="currentColor" /><path d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18 7H6C3.8 7 2 8.8 2 11V18C2 20.2 3.8 22 6 22H18C20.2 22 22 20.2 22 18V11C22 8.8 20.2 7 18 7Z" fill="currentColor" /><path d="M15.3695 9.89019C15.0695 9.65019 14.5195 9.4202 13.6395 9.6502L10.9095 10.4002C10.0595 10.6202 9.50952 11.3402 9.50952 12.2302V13.8302V15.7302C9.30952 15.6702 9.10953 15.6302 8.88953 15.6302C7.71953 15.6302 6.76953 16.5802 6.76953 17.7502C6.76953 18.9202 7.71953 19.8702 8.88953 19.8702C10.0595 19.8702 11.0095 18.9202 11.0095 17.7502V17.7402V14.4101L14.5295 13.4502V14.8202C14.3295 14.7602 14.1295 14.7201 13.9095 14.7201C12.7395 14.7201 11.7895 15.6702 11.7895 16.8402C11.7895 18.0102 12.7395 18.9602 13.9095 18.9602C15.0595 18.9602 15.9995 18.0402 16.0195 16.8902C16.0195 16.8702 16.0295 16.8602 16.0295 16.8402V12.4701V11.4902C16.0295 10.5902 15.6695 10.1202 15.3695 9.89019ZM8.88953 18.3602C8.54953 18.3602 8.26953 18.0802 8.26953 17.7402C8.26953 17.4002 8.54953 17.1202 8.88953 17.1202C9.22953 17.1202 9.49952 17.3902 9.50952 17.7302C9.50952 18.0802 9.22953 18.3602 8.88953 18.3602ZM13.9095 17.4502C13.5695 17.4502 13.2895 17.1702 13.2895 16.8302C13.2895 16.4902 13.5695 16.2102 13.9095 16.2102C14.2495 16.2102 14.5295 16.4902 14.5295 16.8302C14.5295 17.1702 14.2495 17.4502 13.9095 17.4502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicPlaylist as IconComponentType).keywords = [
  "music",
  "playlist",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "playback",
  "replay",
  "list",
  "reproductive",
  "reproduction",
  "soundtrack",
  "tunes",
  "songs"
];

export default IconMusicPlaylist as IconComponentType;