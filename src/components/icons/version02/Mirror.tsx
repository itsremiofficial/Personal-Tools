import { FC } from 'react';

const IconMirror: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 18C17.0882 18 20.6699 14.4183 20.6699 10C20.6699 5.58172 17.0882 2 12.6699 2C8.25164 2 4.66992 5.58172 4.66992 10C4.66992 14.4183 8.25164 18 12.6699 18Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M6.66992 22H18.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 18C17.0882 18 20.6699 14.4183 20.6699 10C20.6699 5.58172 17.0882 2 12.6699 2C8.25164 2 4.66992 5.58172 4.66992 10C4.66992 14.4183 8.25164 18 12.6699 18Z" fill="currentColor" /><path d="M18.6699 22.75H6.66992C6.25992 22.75 5.91992 22.41 5.91992 22C5.91992 21.59 6.25992 21.25 6.66992 21.25H18.6699C19.0799 21.25 19.4199 21.59 19.4199 22C19.4199 22.41 19.0799 22.75 18.6699 22.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 18C17.0882 18 20.6699 14.4183 20.6699 10C20.6699 5.58172 17.0882 2 12.6699 2C8.25164 2 4.66992 5.58172 4.66992 10C4.66992 14.4183 8.25164 18 12.6699 18Z" fill="currentColor" /><path d="M18.6699 22.75H6.66992C6.25992 22.75 5.91992 22.41 5.91992 22C5.91992 21.59 6.25992 21.25 6.66992 21.25H18.6699C19.0799 21.25 19.4199 21.59 19.4199 22C19.4199 22.41 19.0799 22.75 18.6699 22.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMirror as IconComponent).keywords = [
  "mirror",
  "reflected",
  "reflector",
  "lens",
  "reflection",
  "reflect",
  "light",
  "symmetric",
  "image",
  "double"
];

export default IconMirror as IconComponent;