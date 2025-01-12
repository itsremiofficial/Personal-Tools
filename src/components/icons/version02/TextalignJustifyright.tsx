import { FC } from 'react';

const IconTextalignJustifyright: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6719 4.5H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6719 9.5H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.67188 14.5H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.67188 19.5H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6719 5.25H3.67188C3.26188 5.25 2.92188 4.91 2.92188 4.5C2.92188 4.09 3.26188 3.75 3.67188 3.75H21.6719C22.0819 3.75 22.4219 4.09 22.4219 4.5C22.4219 4.91 22.0819 5.25 21.6719 5.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6721 10.25H12.2021C11.7921 10.25 11.4521 9.91 11.4521 9.5C11.4521 9.09 11.7921 8.75 12.2021 8.75H21.6721C22.0821 8.75 22.4221 9.09 22.4221 9.5C22.4221 9.91 22.0821 10.25 21.6721 10.25Z" fill="currentColor" /><path d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6721 20.25H12.2021C11.7921 20.25 11.4521 19.91 11.4521 19.5C11.4521 19.09 11.7921 18.75 12.2021 18.75H21.6721C22.0821 18.75 22.4221 19.09 22.4221 19.5C22.4221 19.91 22.0821 20.25 21.6721 20.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6719 5.25H12.6719C12.2619 5.25 11.9219 4.91 11.9219 4.5C11.9219 4.09 12.2619 3.75 12.6719 3.75H21.6719C22.0819 3.75 22.4219 4.09 22.4219 4.5C22.4219 4.91 22.0819 5.25 21.6719 5.25Z" fill="currentColor" /><path d="M21.6719 10.25H12.6719C12.2619 10.25 11.9219 9.91 11.9219 9.5C11.9219 9.09 12.2619 8.75 12.6719 8.75H21.6719C22.0819 8.75 22.4219 9.09 22.4219 9.5C22.4219 9.91 22.0819 10.25 21.6719 10.25Z" fill="currentColor" /><path d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z" fill="currentColor" /><path d="M21.6719 20.25H3.67188C3.26188 20.25 2.92188 19.91 2.92188 19.5C2.92188 19.09 3.26188 18.75 3.67188 18.75H21.6719C22.0819 18.75 22.4219 19.09 22.4219 19.5C22.4219 19.91 22.0819 20.25 21.6719 20.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextalignJustifyright as IconComponent).keywords = [
  "textalign",
  "justifyright"
];

export default IconTextalignJustifyright as IconComponent;