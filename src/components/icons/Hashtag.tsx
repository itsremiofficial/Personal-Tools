import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHashtag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L8 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 3L14 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.5 9H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.5 15H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M18.8192 10.5799C19.2192 10.5799 19.5492 10.25 19.5492 9.84995C19.5492 9.44995 19.2192 9.11995 18.8192 9.11995H15.2092L15.5992 5.61995C15.6392 5.21995 15.3592 4.85995 14.9492 4.80995C14.5492 4.76995 14.1892 5.04995 14.1392 5.45995L13.7292 9.11995H10.8992L11.2892 5.61995C11.3292 5.21995 11.0492 4.85995 10.6392 4.80995C10.2392 4.76995 9.87922 5.04995 9.82922 5.45995L9.42922 9.11995H5.89922C5.49922 9.11995 5.16922 9.44995 5.16922 9.84995C5.16922 10.25 5.49922 10.5799 5.89922 10.5799H9.26922L8.94922 13.43H5.17922C4.77922 13.43 4.44922 13.76 4.44922 14.16C4.44922 14.5599 4.77922 14.89 5.17922 14.89H8.78922L8.39922 18.3899C8.35922 18.7899 8.63922 19.15 9.04922 19.2C9.07922 19.2 9.09922 19.2 9.12922 19.2C9.49922 19.2 9.80922 18.9199 9.85922 18.5499L10.2692 14.89H13.1092L12.7192 18.3899C12.6792 18.7899 12.9592 19.15 13.3692 19.2C13.3992 19.2 13.4192 19.2 13.4492 19.2C13.8192 19.2 14.1292 18.9199 14.1792 18.5499L14.5892 14.89H18.1192C18.5192 14.89 18.8492 14.5599 18.8492 14.16C18.8492 13.76 18.5192 13.43 18.1192 13.43H14.7492L15.0692 10.5799H18.8192ZM13.2592 13.42H10.4192L10.7392 10.5699H13.5792L13.2592 13.42Z" fill="currentColor" /></svg> 
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