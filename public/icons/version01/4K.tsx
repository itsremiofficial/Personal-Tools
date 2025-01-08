import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const Icon4K: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth={width} /><path d="M5.5 8V10C5.5 11.1046 6.39543 12 7.5 12H10.5M10.5 8V12M10.5 12V16M13.5 8V13.2M13.5 13.2V16M13.5 13.2L15.4231 11.2M15.4231 11.2L18.5 8M15.4231 11.2L18.5 16" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" fill="currentColor" /><path d="M19.0198 7.45938C19.3184 7.74647 19.3277 8.22125 19.0406 8.51983L16.3738 11.2934L19.1314 15.5953C19.3549 15.944 19.2535 16.4079 18.9048 16.6314C18.556 16.8549 18.0921 16.7535 17.8686 16.4048L15.3047 12.4051L14.25 13.5021V16C14.25 16.4142 13.9142 16.75 13.5 16.75C13.0858 16.75 12.75 16.4142 12.75 16V8C12.75 7.58579 13.0858 7.25 13.5 7.25C13.9142 7.25 14.25 7.58579 14.25 8V11.3379L17.9594 7.48017C18.2465 7.18159 18.7213 7.17228 19.0198 7.45938Z" fill="currentColor" /><path d="M5.5 7.25C5.91421 7.25 6.25 7.58579 6.25 8V10C6.25 10.6904 6.80964 11.25 7.5 11.25H9.75V8C9.75 7.58579 10.0858 7.25 10.5 7.25C10.9142 7.25 11.25 7.58579 11.25 8V16C11.25 16.4142 10.9142 16.75 10.5 16.75C10.0858 16.75 9.75 16.4142 9.75 16V12.75H7.5C5.98122 12.75 4.75 11.5188 4.75 10V8C4.75 7.58579 5.08579 7.25 5.5 7.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM6.25 8C6.25 7.58579 5.91421 7.25 5.5 7.25C5.08579 7.25 4.75 7.58579 4.75 8V10C4.75 11.5188 5.98122 12.75 7.5 12.75H9.75V16C9.75 16.4142 10.0858 16.75 10.5 16.75C10.9142 16.75 11.25 16.4142 11.25 16V8C11.25 7.58579 10.9142 7.25 10.5 7.25C10.0858 7.25 9.75 7.58579 9.75 8V11.25H7.5C6.80964 11.25 6.25 10.6904 6.25 10V8ZM19.0198 7.45938C19.3184 7.74647 19.3277 8.22125 19.0406 8.51983L16.3738 11.2933L19.1314 15.5953C19.3549 15.944 19.2535 16.4079 18.9048 16.6314C18.556 16.8549 18.0921 16.7535 17.8686 16.4047L15.3047 12.4051L14.25 13.5021V16C14.25 16.4142 13.9142 16.75 13.5 16.75C13.0858 16.75 12.75 16.4142 12.75 16V8C12.75 7.58579 13.0858 7.25 13.5 7.25C13.9142 7.25 14.25 7.58579 14.25 8V11.3379L17.9594 7.48017C18.2465 7.18159 18.7213 7.17228 19.0198 7.45938Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(Icon4K as IconComponentType).keywords = [
  "4",
  "dh",
  "f4f"
];

export default Icon4K as IconComponentType;