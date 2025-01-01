import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHashtag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.00037L5 21.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M19 3.00037L14 21.0004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 9.00037H4" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M20 16.0004H2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.2007 2.27767C10.5998 2.38854 10.8335 2.80194 10.7226 3.20105L5.72264 21.201C5.61178 21.6001 5.19837 21.8338 4.79927 21.723C4.40016 21.6121 4.1665 21.1987 4.27736 20.7996L9.27736 2.79958C9.38822 2.40048 9.80163 2.16681 10.2007 2.27767Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.2007 2.27767C19.5998 2.38854 19.8335 2.80194 19.7226 3.20105L14.7226 21.201C14.6118 21.6001 14.1984 21.8338 13.7993 21.723C13.4002 21.6121 13.1665 21.1987 13.2774 20.7996L18.2774 2.79958C18.3882 2.40048 18.8016 2.16681 19.2007 2.27767Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M3.25 9.00037C3.25 8.58615 3.58579 8.25037 4 8.25037H22C22.4142 8.25037 22.75 8.58615 22.75 9.00037C22.75 9.41458 22.4142 9.75037 22 9.75037H4C3.58579 9.75037 3.25 9.41458 3.25 9.00037Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M1.25 16.0004C1.25 15.5862 1.58579 15.2504 2 15.2504H20C20.4142 15.2504 20.75 15.5862 20.75 16.0004C20.75 16.4146 20.4142 16.7504 20 16.7504H2C1.58579 16.7504 1.25 16.4146 1.25 16.0004Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.7226 3.20105C10.8335 2.80194 10.5998 2.38854 10.2007 2.27767C9.80163 2.16681 9.38822 2.40048 9.27736 2.79958L7.76327 8.25031H4C3.58579 8.25031 3.25 8.5861 3.25 9.00031C3.25 9.41453 3.58579 9.75031 4 9.75031H7.3466L5.81882 15.2503H2C1.58579 15.2503 1.25 15.5861 1.25 16.0003C1.25 16.4145 1.58579 16.7503 2 16.7503H5.40216L4.27736 20.7996C4.1665 21.1987 4.40016 21.6121 4.79927 21.723C5.19837 21.8338 5.61178 21.6001 5.72264 21.201L6.95895 16.7503H14.4022L13.2774 20.7996C13.1665 21.1987 13.4002 21.6121 13.7993 21.723C14.1984 21.8338 14.6118 21.6001 14.7226 21.201L15.959 16.7503H20C20.4142 16.7503 20.75 16.4145 20.75 16.0003C20.75 15.5861 20.4142 15.2503 20 15.2503H16.3756L17.9034 9.75031H22C22.4142 9.75031 22.75 9.41453 22.75 9.00031C22.75 8.5861 22.4142 8.25031 22 8.25031H18.3201L19.7226 3.20105C19.8335 2.80194 19.5998 2.38854 19.2007 2.27767C18.8016 2.16681 18.3882 2.40048 18.2774 2.79958L16.7633 8.25031H9.32006L10.7226 3.20105ZM14.8188 15.2503L16.3466 9.75031H8.9034L7.37562 15.2503H14.8188Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHashtag as IconComponentType).keywords = [
  "hashtag",
  "slashtag",
  "bashtag",
  "hashtagger",
  "hashflag",
  "tag cloud",
  "tweet",
  "label cloud",
  "entity tag",
  "fragment"
];

export default IconHashtag as IconComponentType;