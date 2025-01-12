import { FC } from 'react';

const IconElementPlus: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6699 8.27V4.23C22.6699 2.64 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.64 14.1699 4.23V8.27C14.1699 9.86 14.8099 10.5 16.3999 10.5H20.4399C22.0299 10.5 22.6699 9.86 22.6699 8.27Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M15.1699 17.5H21.1699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M18.1699 20.5V14.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1699 16.75H18.9199V14.5C18.9199 14.09 18.5799 13.75 18.1699 13.75C17.7599 13.75 17.4199 14.09 17.4199 14.5V16.75H15.1699C14.7599 16.75 14.4199 17.09 14.4199 17.5C14.4199 17.91 14.7599 18.25 15.1699 18.25H17.4199V20.5C17.4199 20.91 17.7599 21.25 18.1699 21.25C18.5799 21.25 18.9199 20.91 18.9199 20.5V18.25H21.1699C21.5799 18.25 21.9199 17.91 21.9199 17.5C21.9199 17.09 21.5799 16.75 21.1699 16.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.6699 8.52V3.98C22.6699 2.57 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.57 14.1699 3.98V8.51C14.1699 9.93 14.8099 10.49 16.3999 10.49H20.4399C22.0299 10.5 22.6699 9.93 22.6699 8.52Z" fill="currentColor" /><path d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1699 16.75H18.9199V14.5C18.9199 14.09 18.5799 13.75 18.1699 13.75C17.7599 13.75 17.4199 14.09 17.4199 14.5V16.75H15.1699C14.7599 16.75 14.4199 17.09 14.4199 17.5C14.4199 17.91 14.7599 18.25 15.1699 18.25H17.4199V20.5C17.4199 20.91 17.7599 21.25 18.1699 21.25C18.5799 21.25 18.9199 20.91 18.9199 20.5V18.25H21.1699C21.5799 18.25 21.9199 17.91 21.9199 17.5C21.9199 17.09 21.5799 16.75 21.1699 16.75Z" fill="currentColor" /><path d="M22.6699 8.52V3.98C22.6699 2.57 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.57 14.1699 3.98V8.51C14.1699 9.93 14.8099 10.49 16.3999 10.49H20.4399C22.0299 10.5 22.6699 9.93 22.6699 8.52Z" fill="currentColor" /><path d="M11.1699 8.52V3.98C11.1699 2.57 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.57 2.66992 3.98V8.51C2.66992 9.93 3.30992 10.49 4.89992 10.49H8.93992C10.5299 10.5 11.1699 9.93 11.1699 8.52Z" fill="currentColor" /><path d="M11.1699 19.77V15.73C11.1699 14.14 10.5299 13.5 8.93992 13.5H4.89992C3.30992 13.5 2.66992 14.14 2.66992 15.73V19.77C2.66992 21.36 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.36 11.1699 19.77Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconElementPlus as IconComponent).keywords = [
  "element",
  "plus",
  "chemical element",
  "ingredient",
  "component",
  "constituent",
  "factor",
  "elemental",
  "stone",
  "facet",
  "nutrient",
  "addition",
  "summation",
  "advantageous",
  "positive",
  "asset",
  "nonnegative",
  "additional",
  "add",
  "along"
];

export default IconElementPlus as IconComponent;