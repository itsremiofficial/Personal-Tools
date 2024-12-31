import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSun: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 12C15.5 12.64 15.33 13.23 15.03 13.75C14.42 14.8 13.29 15.5 12 15.5C10.71 15.5 9.58 14.8 8.97 13.75C8.67 13.23 8.5 12.64 8.5 12C8.5 11.36 8.67 10.77 8.97 10.25C9.58 9.2 10.71 8.5 12 8.5C13.29 8.5 14.42 9.2 15.03 10.25C15.33 10.77 15.5 11.36 15.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 8.5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 21V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 3H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 21H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.97094 10.25L4.21094 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.7913 16.5L15.0312 13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.21094 9.23001L5.21094 5.77002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.791 18.23L20.791 14.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.7913 7.5L15.0312 10.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.97094 13.75L4.21094 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.791 9.23001L18.791 5.77002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.21094 18.23L3.21094 14.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10 3.75H11.25V8.5C11.25 8.91 11.59 9.25 12 9.25C12.41 9.25 12.75 8.91 12.75 8.5V3.75H14C14.41 3.75 14.75 3.41 14.75 3C14.75 2.59 14.41 2.25 14 2.25H10C9.59 2.25 9.25 2.59 9.25 3C9.25 3.41 9.59 3.75 10 3.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14 20.25H12.75V15.5C12.75 15.09 12.41 14.75 12 14.75C11.59 14.75 11.25 15.09 11.25 15.5V20.25H10C9.59 20.25 9.25 20.59 9.25 21C9.25 21.41 9.59 21.75 10 21.75H14C14.41 21.75 14.75 21.41 14.75 21C14.75 20.59 14.41 20.25 14 20.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2.8294 9.87994C2.9494 9.94994 3.0794 9.97994 3.1994 9.97994C3.4594 9.97994 3.7094 9.84993 3.8494 9.59993L4.4794 8.51994L8.5994 10.8999C8.7094 10.9699 8.8394 10.9999 8.9694 10.9999C9.2294 10.9999 9.4794 10.8699 9.6194 10.6199C9.8294 10.2599 9.6994 9.79993 9.3494 9.59993L5.2394 7.21994L5.8594 6.13994C6.0694 5.77994 5.9394 5.31993 5.5894 5.11993C5.2294 4.90993 4.7694 5.02994 4.5694 5.38994L2.5694 8.84993C2.3494 9.21993 2.4694 9.66994 2.8294 9.87994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.1704 14.1199C20.8104 13.9099 20.3504 14.0299 20.1504 14.3899L19.5204 15.4699L15.4004 13.0999C15.0404 12.8899 14.5804 13.0199 14.3804 13.3699C14.1704 13.7299 14.3004 14.1899 14.6504 14.3899L18.7604 16.7699L18.1404 17.8499C17.9304 18.2099 18.0604 18.6699 18.4104 18.8699C18.5304 18.9399 18.6604 18.9699 18.7804 18.9699C19.0404 18.9699 19.2904 18.8399 19.4304 18.5899L21.4304 15.1299C21.6504 14.7799 21.5304 14.3299 21.1704 14.1199Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.7704 7.21994L14.6604 9.59994C14.3004 9.80994 14.1804 10.2699 14.3904 10.6199C14.5304 10.8599 14.7804 10.9999 15.0404 10.9999C15.1704 10.9999 15.3004 10.9699 15.4104 10.8999L19.5204 8.51994L20.1504 9.59994C20.2904 9.83994 20.5404 9.97994 20.8004 9.97994C20.9304 9.97994 21.0604 9.94994 21.1704 9.87994C21.5304 9.66994 21.6504 9.20994 21.4404 8.85994L19.4404 5.39994C19.2304 5.03994 18.7704 4.91994 18.4204 5.12994C18.0604 5.33994 17.9404 5.79994 18.1504 6.14995L18.7704 7.21994Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.23036 16.7799L9.34036 14.3999C9.70037 14.1899 9.82036 13.7299 9.61036 13.3799C9.40036 13.0199 8.94036 12.8999 8.59036 13.1099L4.48036 15.4899L3.85036 14.4099C3.64036 14.0499 3.18036 13.9299 2.83036 14.1399C2.47036 14.3499 2.35036 14.8099 2.56036 15.1599L4.56036 18.6199C4.70036 18.8599 4.95036 18.9999 5.21036 18.9999C5.34036 18.9999 5.47036 18.9699 5.58036 18.8999C5.94036 18.6899 6.06036 18.2299 5.85036 17.8799L5.23036 16.7799Z" fill="currentColor" /><path d="M15.5 12C15.5 12.64 15.33 13.23 15.03 13.75C14.42 14.8 13.29 15.5 12 15.5C10.71 15.5 9.58 14.8 8.97 13.75C8.67 13.23 8.5 12.64 8.5 12C8.5 11.36 8.67 10.77 8.97 10.25C9.58 9.2 10.71 8.5 12 8.5C13.29 8.5 14.42 9.2 15.03 10.25C15.33 10.77 15.5 11.36 15.5 12Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSun as IconComponentType).keywords = [
  "sun",
  "sunlight",
  "sunshine",
  "sunbathe",
  "sunday",
  "earth",
  "stars",
  "sky",
  "eclipse",
  "star"
];

export default IconSun as IconComponentType;