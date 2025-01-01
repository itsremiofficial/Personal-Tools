import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPostsCarouselVertical: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 11.5C5 9.61438 5 8.67157 5.58579 8.08579C6.17157 7.5 7.11438 7.5 9 7.5H15C16.8856 7.5 17.8284 7.5 18.4142 8.08579C19 8.67157 19 9.61438 19 11.5V12.5C19 14.3856 19 15.3284 18.4142 15.9142C17.8284 16.5 16.8856 16.5 15 16.5H9C7.11438 16.5 6.17157 16.5 5.58579 15.9142C5 15.3284 5 14.3856 5 12.5V11.5Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M19 2V2.5C19 3.88071 17.8807 5 16.5 5H7.5C6.11929 5 5 3.88071 5 2.5V2" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M19 22V21.5C19 20.1193 17.8807 19 16.5 19H7.5C6.11929 19 5 20.1193 5 21.5V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M8 5.5H16C17.6569 5.5 19 4.15685 19 2.5C19 2.22386 18.7761 2 18.5 2H5.5C5.22386 2 5 2.22386 5 2.5C5 4.15685 6.34315 5.5 8 5.5Z" fill="currentColor" /><path d="M16 18.5H8C6.34315 18.5 5 19.8431 5 21.5C5 21.7761 5.22386 22 5.5 22L18.5 22C18.7761 22 19 21.7761 19 21.5C19 19.8431 17.6569 18.5 16 18.5Z" fill="currentColor" /></g><path d="M5 11.5C5 9.61438 5 8.67157 5.58579 8.08579C6.17157 7.5 7.11438 7.5 9 7.5H15C16.8856 7.5 17.8284 7.5 18.4142 8.08579C19 8.67157 19 9.61438 19 11.5V12.5C19 14.3856 19 15.3284 18.4142 15.9142C17.8284 16.5 16.8856 16.5 15 16.5H9C7.11438 16.5 6.17157 16.5 5.58579 15.9142C5 15.3284 5 14.3856 5 12.5V11.5Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5H16C17.6569 5.5 19 4.15685 19 2.5C19 2.22386 18.7761 2 18.5 2H5.5C5.22386 2 5 2.22386 5 2.5C5 4.15685 6.34315 5.5 8 5.5Z" fill="currentColor" /><path d="M5 11.5C5 9.61438 5 8.67157 5.58579 8.08579C6.17157 7.5 7.11438 7.5 9 7.5H15C16.8856 7.5 17.8284 7.5 18.4142 8.08579C19 8.67157 19 9.61438 19 11.5V12.5C19 14.3856 19 15.3284 18.4142 15.9142C17.8284 16.5 16.8856 16.5 15 16.5H9C7.11438 16.5 6.17157 16.5 5.58579 15.9142C5 15.3284 5 14.3856 5 12.5V11.5Z" fill="currentColor" /><path d="M16 18.5H8C6.34315 18.5 5 19.8431 5 21.5C5 21.7761 5.22386 22 5.5 22L18.5 22C18.7761 22 19 21.7761 19 21.5C19 19.8431 17.6569 18.5 16 18.5Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPostsCarouselVertical as IconComponentType).keywords = [
  "posts",
  "carousel",
  "vertical",
  "mail",
  "send",
  "base",
  "position",
  "place",
  "succeeding",
  "situation",
  "spot",
  "station",
  "merry-go-round",
  "whirligig",
  "roundabout",
  "luggage carousel",
  "carrousel",
  "conveyor",
  "walkway",
  "treadmill",
  "armoury",
  "perpendicular",
  "plumb",
  "upright",
  "stand-up",
  "standing",
  "straight",
  "rearing",
  "erect",
  "erectile"
];

export default IconPostsCarouselVertical as IconComponentType;