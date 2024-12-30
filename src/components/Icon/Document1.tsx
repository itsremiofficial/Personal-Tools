import { FC } from 'react';
import { IconProps } from "../../types";

const IconDocument1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M3.99085 14.6599L2.47086 13.1399C1.85086 12.5199 1.85086 11.4999 2.47086 10.8799L3.99085 9.3599C4.25085 9.0999 4.46085 8.58989 4.46085 8.22989V6.07993C4.46085 5.19993 5.18086 4.47989 6.06086 4.47989H8.21085C8.57085 4.47989 9.08085 4.26992 9.34085 4.00992L10.8608 2.4899C11.4808 1.8699 12.5009 1.8699 13.1209 2.4899L14.6409 4.00992C14.9009 4.26992 15.4108 4.47989 15.7708 4.47989H17.9209C18.8009 4.47989 19.5208 5.19993 19.5208 6.07993V8.22989C19.5208 8.58989 19.7308 9.0999 19.9908 9.3599L21.5109 10.8799C22.1309 11.4999 22.1309 12.5199 21.5109 13.1399L19.9908 14.6599C19.7308 14.9199 19.5208 15.4299 19.5208 15.7899V17.9399C19.5208 18.8199 18.8009 19.5399 17.9209 19.5399H15.7708C15.4108 19.5399 14.9009 19.7499 14.6409 20.0099L13.1209 21.5299C12.5009 22.1499 11.4808 22.1499 10.8608 21.5299L9.34085 20.0099C9.08085 19.7499 8.57085 19.5399 8.21085 19.5399H6.06086C5.18086 19.5399 4.46085 18.8199 4.46085 17.9399V15.7899C4.46085 15.4199 4.25085 14.9099 3.99085 14.6599Z" fill="currentColor" /><path d="M15.0002 16C14.4402 16 13.9902 15.55 13.9902 15C13.9902 14.45 14.4402 14 14.9902 14C15.5402 14 15.9902 14.45 15.9902 15C15.9902 15.55 15.5502 16 15.0002 16Z" fill="currentColor" /><path d="M9.01001 10C8.45001 10 8 9.55 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 9.55 9.56001 10 9.01001 10Z" fill="currentColor" /><path d="M8.99945 15.75C8.80945 15.75 8.61945 15.68 8.46945 15.53C8.17945 15.24 8.17945 14.7599 8.46945 14.4699L14.4695 8.46994C14.7595 8.17994 15.2395 8.17994 15.5295 8.46994C15.8195 8.75994 15.8195 9.24 15.5295 9.53L9.52945 15.53C9.37945 15.68 9.18945 15.75 8.99945 15.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocument1;