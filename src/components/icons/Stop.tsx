import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconStop: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.9 7.66L20.12 8.13L19.63 8.43L18.7 8.98L4.76 17.34L4.67 17.39L4.14 17.71L3.53 18.08C3.17 17.19 3 16.07 3 14.7V9.3C3 4.8 4.8 3 9.3 3H14.7C18.61 3 20.48 4.36 20.9 7.66Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.0005 9.2002V14.7002C21.0005 19.2002 19.2005 21.0002 14.7005 21.0002H9.30047C6.86047 21.0002 5.21047 20.4702 4.23047 19.2602L4.53047 19.0802L5.14047 18.7102L5.67047 18.3902L5.76047 18.3402L19.7005 9.9802L20.6305 9.4302L21.0005 9.2002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStop as IconComponentType).keywords = [
  "stop",
  "stoppage",
  "cease",
  "kibosh",
  "discontinue",
  "terminate",
  "quit",
  "break off",
  "intercept",
  "hold back"
];

export default IconStop as IconComponentType;