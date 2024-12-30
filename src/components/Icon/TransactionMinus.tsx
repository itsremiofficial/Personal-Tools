import { FC } from 'react';
import { IconProps } from "../../types";

const IconTranslate: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0593 18.6699L16.9193 14.3999L14.7793 18.6699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.1699 17.9102H18.6899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.9198 21.9998C14.1198 21.9998 11.8398 19.7298 11.8398 16.9198C11.8398 14.1198 14.1098 11.8398 16.9198 11.8398C19.7198 11.8398 21.9998 14.1098 21.9998 16.9198C21.9998 19.7298 19.7298 21.9998 16.9198 21.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.00922 5.8501H4.94922" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.96875 5.16992V5.84991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.98946 5.83984C7.98946 7.58984 6.61945 9.00983 4.93945 9.00983" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.01015 9.01001C8.28015 9.01001 7.62016 8.62 7.16016 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M10.14 3.85986H13.86C18.35 3.85986 22 7.50986 22 11.9999C22 16.4899 18.35 20.1399 13.86 20.1399H10.14C5.65 20.1399 2 16.4899 2 11.9999C2 7.50986 5.65 3.85986 10.14 3.85986Z" fill="currentColor" /><path d="M13.8595 16.4201C16.3006 16.4201 18.2795 14.4412 18.2795 12.0001C18.2795 9.55898 16.3006 7.58008 13.8595 7.58008C11.4184 7.58008 9.43945 9.55898 9.43945 12.0001C9.43945 14.4412 11.4184 16.4201 13.8595 16.4201Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTranslate;