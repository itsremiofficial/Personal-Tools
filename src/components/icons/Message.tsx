import { FC } from 'react';
import { IconProps } from "../../types";

const IconMessage2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M8.5 10.5H15.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 18.4302H11L15.45 21.3902C16.11 21.8302 17 21.3602 17 20.5602V18.4302C20 18.4302 22 16.4302 22 13.4302V7.43018C22 4.43018 20 2.43018 17 2.43018H7C4 2.43018 2 4.43018 2 7.43018V13.4302C2 16.4302 4 18.4302 7 18.4302Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.9897 6.01996C22.0097 6.25996 21.9897 6.50995 21.9297 6.75995L18.5597 20.2899C18.3197 21.2999 17.4198 21.9999 16.3798 21.9999H3.23974C1.72974 21.9999 0.659755 20.5199 1.09976 19.0699L5.30975 5.53992C5.59975 4.59992 6.46976 3.95996 7.44976 3.95996H19.7498C20.7097 3.95996 21.4898 4.52996 21.8198 5.32996C21.9198 5.53996 21.9697 5.77996 21.9897 6.01996Z" fill="currentColor" /><path d="M22.9908 19.62C23.0908 20.91 22.0709 22 20.7809 22H16.3809C17.4209 22 18.3209 21.3 18.5609 20.29L21.9308 6.76001C21.9908 6.51001 22.0108 6.26002 21.9908 6.02002L22.0009 6L22.9908 19.62Z" fill="currentColor" /><path d="M9.67977 7.12989C9.61977 7.12989 9.55977 7.11987 9.49977 7.10987C9.09977 7.00987 8.84979 6.6099 8.94979 6.1999L9.98976 1.87989C10.0898 1.47989 10.4898 1.2399 10.8998 1.3299C11.2998 1.4299 11.5498 1.82987 11.4498 2.23987L10.4098 6.55988C10.3298 6.89988 10.0198 7.12989 9.67977 7.12989Z" fill="currentColor" /><path d="M16.3795 7.1398C16.3295 7.1398 16.2694 7.13978 16.2194 7.11978C15.8194 7.02978 15.5595 6.62977 15.6395 6.22977L16.5794 1.8898C16.6694 1.4798 17.0694 1.22978 17.4694 1.30978C17.8694 1.39978 18.1294 1.7998 18.0494 2.1998L17.1094 6.53976C17.0394 6.89977 16.7295 7.1398 16.3795 7.1398Z" fill="currentColor" /><path d="M15.6992 12.75H7.69922C7.28922 12.75 6.94922 12.41 6.94922 12C6.94922 11.59 7.28922 11.25 7.69922 11.25H15.6992C16.1092 11.25 16.4492 11.59 16.4492 12C16.4492 12.41 16.1092 12.75 15.6992 12.75Z" fill="currentColor" /><path d="M14.6992 16.75H6.69922C6.28922 16.75 5.94922 16.41 5.94922 16C5.94922 15.59 6.28922 15.25 6.69922 15.25H14.6992C15.1092 15.25 15.4492 15.59 15.4492 16C15.4492 16.41 15.1092 16.75 14.6992 16.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessage2;