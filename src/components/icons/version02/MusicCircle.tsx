import { FC } from 'react';

const IconMusicCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.25 8.66998C3.87 6.90998 4.97001 5.37998 6.39001 4.22998" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66992 12C2.66992 13.17 2.87991 14.29 3.24991 15.33" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M9.75977 21.57C10.6798 21.85 11.6598 22 12.6698 22C18.1898 22 22.6698 17.52 22.6698 12C22.6698 11.4 22.6098 10.81 22.5098 10.24" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.39032 19.75C5.92032 19.37 5.47031 18.95 5.07031 18.49" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M20.9098 6.34003C19.1098 3.72003 16.0898 2 12.6698 2C11.6598 2 10.6798 2.14999 9.75977 2.42999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M9.25992 17.11C10.1381 17.11 10.8499 16.3982 10.8499 15.52C10.8499 14.6419 10.1381 13.93 9.25992 13.93C8.38179 13.93 7.66992 14.6419 7.66992 15.52C7.66992 16.3982 8.38179 17.11 9.25992 17.11Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.6698 14.4601V8.25003C16.6698 6.93003 15.8398 6.74 14.9998 6.97L11.8198 7.84006C11.2398 8.00006 10.8398 8.45003 10.8398 9.12003V10.23V10.97V15.5201" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.0802 16.05C15.9584 16.05 16.6702 15.3382 16.6702 14.46C16.6702 13.5819 15.9584 12.87 15.0802 12.87C14.2021 12.87 13.4902 13.5819 13.4902 14.46C13.4902 15.3382 14.2021 16.05 15.0802 16.05Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8496 10.76L16.6696 9.16998" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.24954 9.41999C3.16954 9.41999 3.07954 9.41001 2.99954 9.38001C2.60954 9.24001 2.40955 8.80999 2.53955 8.41999C3.20955 6.53999 4.36956 4.89002 5.91956 3.64002C6.23956 3.38002 6.70955 3.43 6.96955 3.75C7.22955 4.07 7.17956 4.54 6.85956 4.81C5.52956 5.88 4.52957 7.29999 3.95957 8.91999C3.84957 9.22999 3.55954 9.41999 3.24954 9.41999Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M3.24991 16.08C2.93991 16.08 2.64992 15.89 2.53992 15.58C2.12992 14.41 1.91992 13.21 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25C3.07992 11.25 3.41992 11.59 3.41992 12C3.41992 13.04 3.59993 14.08 3.95993 15.08C4.09993 15.47 3.88991 15.9 3.49991 16.04C3.41991 16.07 3.32991 16.08 3.24991 16.08Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6695 22.75C11.6095 22.75 10.5595 22.59 9.53954 22.28C9.13954 22.16 8.91954 21.74 9.03954 21.34C9.15954 20.94 9.57954 20.72 9.97954 20.84C10.8495 21.11 11.7595 21.24 12.6695 21.24C17.7695 21.24 21.9195 17.09 21.9195 11.99C21.9195 11.47 21.8696 10.93 21.7696 10.36C21.6996 9.94998 21.9695 9.55998 22.3795 9.48998C22.7795 9.41998 23.1795 9.68997 23.2495 10.1C23.3695 10.76 23.4296 11.38 23.4296 12C23.4196 17.93 18.5995 22.75 12.6695 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.39014 20.5C6.22014 20.5 6.06014 20.45 5.92014 20.33C5.35014 19.87 4.89013 19.43 4.50013 18.98C4.23013 18.67 4.27014 18.19 4.58014 17.92C4.90014 17.65 5.37014 17.69 5.64014 18C5.97014 18.38 6.37014 18.76 6.86014 19.16C7.18014 19.42 7.23013 19.89 6.97013 20.21C6.83013 20.4 6.61014 20.5 6.39014 20.5Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.9103 7.09003C20.6703 7.09003 20.4403 6.98001 20.2903 6.76001C18.5603 4.24001 15.7103 2.73999 12.6703 2.73999C11.7603 2.73999 10.8503 2.87001 9.98032 3.14001C9.59032 3.26001 9.17032 3.04001 9.04032 2.64001C8.91032 2.24001 9.14032 1.82001 9.54032 1.70001C10.5603 1.39001 11.6103 1.22998 12.6703 1.22998C16.2103 1.22998 19.5203 2.98002 21.5303 5.90002C21.7603 6.24002 21.6803 6.71 21.3403 6.94C21.2103 7.05 21.0603 7.09003 20.9103 7.09003Z" fill="currentColor" /><path d="M16.6999 6.50003C16.3699 6.25003 15.7699 6.00004 14.8099 6.26004L11.6199 7.12002C10.6999 7.38002 10.0999 8.16002 10.0999 9.12002V10.76V13.3401C9.83991 13.2401 9.55992 13.18 9.25992 13.18C7.96992 13.18 6.91992 14.23 6.91992 15.52C6.91992 16.81 7.96992 17.86 9.25992 17.86C10.5399 17.86 11.5699 16.83 11.5899 15.56C11.5899 15.55 11.5999 15.54 11.5999 15.52V11.33L15.9199 10.1501V12.2801C15.6599 12.1801 15.3799 12.12 15.0799 12.12C13.7899 12.12 12.7399 13.17 12.7399 14.46C12.7399 15.75 13.7899 16.8 15.0799 16.8C16.3699 16.8 17.4199 15.75 17.4199 14.46V9.17001V8.25003C17.4199 7.45003 17.1799 6.86003 16.6999 6.50003ZM9.25992 16.36C8.79992 16.36 8.41992 15.98 8.41992 15.52C8.41992 15.06 8.79992 14.68 9.25992 14.68C9.71992 14.68 10.0999 15.06 10.0999 15.52C10.0999 15.98 9.71992 16.36 9.25992 16.36ZM15.0799 15.3C14.6199 15.3 14.2399 14.92 14.2399 14.46C14.2399 14 14.6199 13.62 15.0799 13.62C15.5399 13.62 15.9199 14 15.9199 14.46C15.9199 14.92 15.5399 15.3 15.0799 15.3Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.24955 9.42C3.16955 9.42 3.07955 9.41 2.99955 9.38C2.60955 9.24 2.40955 8.81 2.53955 8.42C3.20955 6.54 4.36955 4.89 5.91955 3.64C6.23955 3.38 6.70955 3.43 6.96955 3.75C7.22955 4.07 7.17955 4.54 6.85955 4.81C5.53955 5.88 4.52955 7.3 3.95955 8.92C3.84955 9.23 3.55955 9.42 3.24955 9.42Z" fill="currentColor" /><path d="M3.24992 16.08C2.93992 16.08 2.64992 15.89 2.53992 15.58C2.12992 14.42 1.91992 13.21 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25C3.07992 11.25 3.41992 11.59 3.41992 12C3.41992 13.04 3.59992 14.08 3.95992 15.08C4.09992 15.47 3.88992 15.9 3.49992 16.04C3.41992 16.07 3.32992 16.08 3.24992 16.08Z" fill="currentColor" /><path d="M12.6695 22.75C11.6095 22.75 10.5595 22.59 9.53954 22.28C9.13954 22.16 8.91954 21.74 9.03954 21.34C9.15954 20.94 9.57954 20.72 9.97954 20.84C10.8495 21.11 11.7595 21.24 12.6695 21.24C17.7695 21.24 21.9195 17.09 21.9195 11.99C21.9195 11.47 21.8695 10.93 21.7695 10.36C21.6995 9.95 21.9695 9.56 22.3795 9.49C22.7795 9.42 23.1795 9.69 23.2495 10.1C23.3695 10.76 23.4295 11.38 23.4295 12C23.4195 17.93 18.5995 22.75 12.6695 22.75Z" fill="currentColor" /><path d="M6.39013 20.5C6.22013 20.5 6.06013 20.45 5.92013 20.33C5.35013 19.87 4.89013 19.43 4.50013 18.98C4.23013 18.67 4.27013 18.19 4.58013 17.92C4.90013 17.65 5.37013 17.69 5.64013 18C5.97013 18.38 6.37013 18.76 6.86013 19.16C7.18013 19.42 7.23013 19.89 6.97013 20.21C6.83013 20.4 6.61013 20.5 6.39013 20.5Z" fill="currentColor" /><path d="M20.9103 7.09C20.6703 7.09 20.4403 6.98 20.2903 6.76C18.5703 4.25 15.7103 2.75 12.6703 2.75C11.7603 2.75 10.8503 2.88 9.98032 3.15C9.59032 3.27 9.17032 3.05 9.04032 2.65C8.91032 2.25 9.14032 1.83 9.54032 1.71C10.5603 1.41 11.6103 1.25 12.6703 1.25C16.2103 1.25 19.5203 3 21.5303 5.92C21.7603 6.26 21.6803 6.73 21.3403 6.96C21.2103 7.05 21.0603 7.09 20.9103 7.09Z" fill="currentColor" /><path d="M16.6999 6.5C16.3699 6.25 15.7699 6 14.8099 6.26L11.6199 7.12C10.6999 7.38 10.0999 8.16 10.0999 9.12V10.76V13.34C9.83992 13.24 9.55992 13.18 9.25992 13.18C7.96992 13.18 6.91992 14.23 6.91992 15.52C6.91992 16.81 7.96992 17.86 9.25992 17.86C10.5399 17.86 11.5699 16.83 11.5899 15.56C11.5899 15.55 11.5999 15.54 11.5999 15.52V11.33L15.9199 10.15V12.28C15.6599 12.18 15.3799 12.12 15.0799 12.12C13.7899 12.12 12.7399 13.17 12.7399 14.46C12.7399 15.75 13.7899 16.8 15.0799 16.8C16.3699 16.8 17.4199 15.75 17.4199 14.46V9.17V8.25C17.4199 7.45 17.1799 6.86 16.6999 6.5ZM9.25992 16.36C8.79992 16.36 8.41992 15.98 8.41992 15.52C8.41992 15.06 8.79992 14.68 9.25992 14.68C9.71992 14.68 10.0999 15.06 10.0999 15.52C10.0999 15.98 9.71992 16.36 9.25992 16.36ZM15.0799 15.3C14.6199 15.3 14.2399 14.92 14.2399 14.46C14.2399 14 14.6199 13.62 15.0799 13.62C15.5399 13.62 15.9199 14 15.9199 14.46C15.9199 14.92 15.5399 15.3 15.0799 15.3Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicCircle as IconComponent).keywords = [
  "music",
  "circle",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle"
];

export default IconMusicCircle as IconComponent;