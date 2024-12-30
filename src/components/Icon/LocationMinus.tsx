import { FC } from 'react';
import { IconProps } from "../../types";

const IconLocationSlash: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4209 12.9999C9.50086 12.4599 8.88086 11.4599 8.88086 10.3099C8.88086 8.58994 10.2709 7.18994 12.0009 7.18994C13.1509 7.18994 14.1509 7.80994 14.6909 8.73994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.9891 17.8101C4.1491 15.3001 2.8091 12.0901 3.6291 8.49011C5.2791 1.23011 14.5691 0.0601072 18.6791 4.98011" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.3806 8.5C21.5306 13.58 18.3706 17.88 15.6006 20.54C13.5906 22.48 10.4106 22.48 8.39062 20.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 2L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.5295 12.4202L13.0795 10.9702L14.4795 9.57018C14.7695 9.28018 14.7695 8.80018 14.4795 8.51018C14.1895 8.22018 13.7095 8.22018 13.4195 8.51018L12.0195 9.91018L10.5695 8.46018C10.2795 8.17018 9.79945 8.17018 9.50945 8.46018C9.21945 8.75018 9.21945 9.23018 9.50945 9.52018L10.9595 10.9702L9.46945 12.4602C9.17945 12.7502 9.17945 13.2302 9.46945 13.5202C9.61945 13.6702 9.80945 13.7402 9.99945 13.7402C10.1895 13.7402 10.3795 13.6702 10.5295 13.5202L12.0195 12.0302L13.4695 13.4802C13.6195 13.6302 13.8095 13.7002 13.9995 13.7002C14.1895 13.7002 14.3795 13.6302 14.5295 13.4802C14.8195 13.1902 14.8195 12.7202 14.5295 12.4202Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.6207 8.7C19.5807 4.07 15.5407 2 12.0007 2C12.0007 2 12.0007 2 11.9907 2C8.46073 2 4.43073 4.07 3.38073 8.69C2.20073 13.85 5.36073 18.22 8.22073 20.98C9.28073 22 10.6407 22.51 12.0007 22.51C13.3607 22.51 14.7207 22 15.7707 20.98C18.6307 18.22 21.7907 13.86 20.6207 8.7Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLocationSlash;