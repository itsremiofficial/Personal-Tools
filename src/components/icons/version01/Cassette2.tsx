import { FC } from 'react';

const IconCassette2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="currentColor" strokeWidth={width} /><path d="M8.5 10.75C8.08579 10.75 7.75 11.0858 7.75 11.5C7.75 11.9142 8.08579 12.25 8.5 12.25V10.75ZM16 12.25C16.4142 12.25 16.75 11.9142 16.75 11.5C16.75 11.0858 16.4142 10.75 16 10.75V12.25ZM8.5 15.25C8.08579 15.25 7.75 15.5858 7.75 16C7.75 16.4142 8.08579 16.75 8.5 16.75V15.25ZM16 16.75C16.4142 16.75 16.75 16.4142 16.75 16C16.75 15.5858 16.4142 15.25 16 15.25V16.75ZM17.25 13.75C17.25 14.5784 16.5784 15.25 15.75 15.25V16.75C17.4069 16.75 18.75 15.4069 18.75 13.75H17.25ZM15.75 12.25C16.5784 12.25 17.25 12.9216 17.25 13.75H18.75C18.75 12.0931 17.4069 10.75 15.75 10.75V12.25ZM8.25 15.25C7.42157 15.25 6.75 14.5784 6.75 13.75H5.25C5.25 15.4069 6.59315 16.75 8.25 16.75V15.25ZM8.25 10.75C6.59315 10.75 5.25 12.0931 5.25 13.75H6.75C6.75 12.9216 7.42157 12.25 8.25 12.25V10.75ZM8.5 12.25H16V10.75H8.5V12.25ZM8.5 16.75H16V15.25H8.5V16.75Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M15.75 15.25C14.9216 15.25 14.25 14.5784 14.25 13.75H12.75C12.75 15.4069 14.0931 16.75 15.75 16.75V15.25ZM15.75 10.75C14.0931 10.75 12.75 12.0931 12.75 13.75H14.25C14.25 12.9216 14.9216 12.25 15.75 12.25V10.75ZM9.75 13.75C9.75 14.5784 9.07843 15.25 8.25 15.25V16.75C9.90685 16.75 11.25 15.4069 11.25 13.75H9.75ZM8.25 12.25C9.07843 12.25 9.75 12.9216 9.75 13.75H11.25C11.25 12.0931 9.90685 10.75 8.25 10.75V12.25Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M17.5 4.5L16.9733 5.90449C16.5025 7.15997 16.2671 7.7877 15.7532 8.14385C15.2393 8.5 14.5688 8.5 13.228 8.5H10.772C9.43116 8.5 8.76073 8.5 8.24681 8.14385C7.73289 7.7877 7.49749 7.15997 7.02669 5.90449L6.5 4.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M13.228 8H10.772C9.43116 8 8.76073 8 8.24681 7.64385C7.73289 7.2877 7.49749 6.65997 7.02669 5.40449L6.5 4H17.5L16.9733 5.40449C16.5025 6.65997 16.2671 7.2877 15.7532 7.64385C15.2393 8 14.5688 8 13.228 8Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M13.5 13.75C13.5 14.9926 14.5074 16 15.75 16C16.9926 16 18 14.9926 18 13.75C18 12.5074 16.9926 11.5 15.75 11.5C14.5074 11.5 13.5 12.5074 13.5 13.75Z" fill="currentColor" /><path d="M6 13.75C6 14.9926 7.00736 16 8.25 16C9.49264 16 10.5 14.9926 10.5 13.75C10.5 12.5074 9.49264 11.5 8.25 11.5C7.00736 11.5 6 12.5074 6 13.75Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C20.0914 4.4345 19.0717 4.16114 17.4776 4.05976L16.9733 5.40449C16.5025 6.65997 16.2671 7.2877 15.7532 7.64385C15.2393 8 14.5688 8 13.228 8H10.772C9.43116 8 8.76073 8 8.24681 7.64385C7.73289 7.2877 7.49749 6.65996 7.02669 5.40449L6.52241 4.05976C4.92835 4.16114 3.90865 4.4345 3.17157 5.17157ZM15.75 16.0002C15.7401 16.0002 15.7599 16.0003 15.75 16.0002C16.9926 16.0002 18 14.9928 18 13.7502C18 12.5076 16.9926 11.5002 15.75 11.5002L8.25 11.5C7.00736 11.5 6 12.5076 6 13.7502C6 14.9928 7.00736 16.0002 8.25 16.0002C8.24012 16.0003 8.25991 16.0002 8.25 16.0002H15.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 13.75C6.75 12.9216 7.42157 12.25 8.25 12.25C9.07843 12.25 9.75 12.9216 9.75 13.75C9.75 14.5784 9.07843 15.25 8.25 15.25C7.42157 15.25 6.75 14.5784 6.75 13.75Z" fill="currentColor" /><path d="M10.8487 15.25H13.1513C12.8961 14.8087 12.75 14.2964 12.75 13.75C12.75 13.2036 12.8961 12.6913 13.1513 12.25H10.8487C11.1039 12.6913 11.25 13.2036 11.25 13.75C11.25 14.2964 11.1039 14.8087 10.8487 15.25Z" fill="currentColor" /><path d="M15.75 15.25C16.5784 15.25 17.25 14.5784 17.25 13.75C17.25 12.9216 16.5784 12.25 15.75 12.25C14.9216 12.25 14.25 12.9216 14.25 13.75C14.25 14.5784 14.9216 15.25 15.75 15.25Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.4311 4.15219L17.6612 6.20537C17.4379 6.8009 17.2489 7.30482 17.0479 7.70069C16.8342 8.12169 16.5762 8.48563 16.1802 8.76006C15.7841 9.0345 15.3528 9.14834 14.8835 9.20064C14.4423 9.24981 13.9042 9.24979 13.2682 9.24977H10.7314C10.0954 9.24979 9.55723 9.24981 9.11601 9.20064C8.64677 9.14834 8.21539 9.0345 7.81938 8.76006C7.42338 8.48563 7.16532 8.12169 6.95159 7.70069C6.75062 7.30483 6.56168 6.80094 6.33839 6.20543L5.56845 4.15225C4.50175 4.30058 3.74972 4.59343 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C20.2502 4.59335 19.498 4.3005 18.4311 4.15219ZM5.25 13.75C5.25 12.0931 6.59315 10.75 8.25 10.75C8.30598 10.75 8.3616 10.7515 8.41682 10.7546C8.44413 10.7515 8.47189 10.75 8.5 10.75H16C16.0852 10.75 16.1671 10.7642 16.2434 10.7904C17.6655 11.0257 18.75 12.2612 18.75 13.75C18.75 15.2388 17.6655 16.4743 16.2434 16.7096C16.1671 16.7358 16.0852 16.75 16 16.75H8.5C8.47189 16.75 8.44413 16.7485 8.41682 16.7454C8.3616 16.7485 8.30598 16.75 8.25 16.75C6.59315 16.75 5.25 15.4069 5.25 13.75Z" fill="currentColor" /><path d="M16.8749 4.03006L16.2708 5.64092C16.0295 6.28438 15.8691 6.70913 15.7104 7.02168C15.5603 7.31746 15.4437 7.44546 15.3258 7.52718C15.2078 7.60889 15.0471 7.67312 14.7174 7.70987C14.369 7.74869 13.915 7.74977 13.2278 7.74977H10.7718C10.0846 7.74977 9.63052 7.74869 9.28215 7.70987C8.95249 7.67312 8.79169 7.60889 8.67378 7.52718C8.55586 7.44546 8.43926 7.31746 8.2891 7.02168C8.13043 6.70913 7.97 6.28438 7.7287 5.64092L7.12464 4.03008C7.93904 4 8.88747 4 10 4H14C15.1123 4 16.0606 4 16.8749 4.03006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCassette2 as IconComponent).keywords = [
  "cassette",
  "2",
  "audiotape",
  "videotape",
  "video",
  "wiretap",
  "inbox",
  "ink",
  "audio",
  "rack",
  "tape",
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

export default IconCassette2 as IconComponent;