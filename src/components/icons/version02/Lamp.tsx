import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconLamp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.45955 14.69H18.8795C20.5395 14.69 21.5395 13.38 21.1095 11.78L18.9095 3.71C18.6495 2.77 17.6395 2 16.6795 2H8.65955C7.69955 2 6.68955 2.77 6.43955 3.7L4.23955 11.77C3.79955 13.38 4.79955 14.69 6.45955 14.69Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6699 15V22" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M8.66992 22H16.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.8795 14.69H6.45955C4.79955 14.69 3.79955 13.38 4.23955 11.78L6.43955 3.7C6.68955 2.77 7.69955 2 8.65955 2H16.6795C17.6395 2 18.6495 2.77 18.8995 3.7L21.0995 11.78C21.5395 13.38 20.5395 14.69 18.8795 14.69Z" fill="currentColor" /><path d="M17.4199 21.2499C17.4199 21.6599 17.0799 21.9999 16.6699 21.9999H8.66992C8.25992 21.9999 7.91992 21.6599 7.91992 21.2499C7.91992 20.8399 8.25992 20.4999 8.66992 20.4999H11.9199V14.6899H13.4199V20.4999H16.6699C17.0799 20.4999 17.4199 20.8399 17.4199 21.2499Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.0995 11.78L18.8995 3.7C18.6495 2.77 17.6395 2 16.6795 2H8.65955C7.69955 2 6.68955 2.77 6.43955 3.7L4.23955 11.78C3.79955 13.38 4.79955 14.69 6.45955 14.69H11.9195V20.5H8.66955C8.25955 20.5 7.91955 20.84 7.91955 21.25C7.91955 21.66 8.25955 22 8.66955 22H16.6695C17.0795 22 17.4195 21.66 17.4195 21.25C17.4195 20.84 17.0795 20.5 16.6695 20.5H13.4195V14.69H18.8795C20.5395 14.69 21.5395 13.38 21.0995 11.78Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLamp as IconComponentType).keywords = [
  "lamp",
  "bulb",
  "flashlight",
  "lamppost",
  "lantern",
  "lighting",
  "dimmer",
  "searchlight",
  "wick",
  "lighter"
];

export default IconLamp as IconComponentType;