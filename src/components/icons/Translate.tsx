import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTranslate: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0593 18.6699L16.9193 14.3999L14.7793 18.6699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.1699 17.9102H18.6899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.9198 21.9998C14.1198 21.9998 11.8398 19.7298 11.8398 16.9198C11.8398 14.1198 14.1098 11.8398 16.9198 11.8398C19.7198 11.8398 21.9998 14.1098 21.9998 16.9198C21.9998 19.7298 19.7298 21.9998 16.9198 21.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.00922 5.8501H4.94922" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.96875 5.16992V5.84991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.98946 5.83984C7.98946 7.58984 6.61945 9.00983 4.93945 9.00983" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.01015 9.01001C8.28015 9.01001 7.62016 8.62 7.16016 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.9198 22.0001C14.1198 22.0001 11.8398 19.7301 11.8398 16.9201C11.8398 14.1201 14.1098 11.8401 16.9198 11.8401C19.7198 11.8401 21.9998 14.1101 21.9998 16.9201C21.9998 19.7301 19.7298 22.0001 16.9198 22.0001Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.02 2H8.94C11.01 2 12.01 2.99999 11.96 5.01999V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z" fill="currentColor" /><path d="M9.00969 8.25992C8.69969 8.25992 8.40969 8.13991 8.13969 7.93991C8.38969 7.53991 8.5697 7.08991 8.6597 6.59991H8.99969C9.40969 6.59991 9.74969 6.25991 9.74969 5.84991C9.74969 5.43991 9.40969 5.09991 8.99969 5.09991H8.00969C7.99969 5.09991 7.9897 5.09991 7.9897 5.09991H7.9697H7.7097C7.6697 4.71991 7.3597 4.41992 6.9697 4.41992C6.5797 4.41992 6.26969 4.71991 6.22969 5.09991H4.9397C4.5297 5.09991 4.1897 5.43991 4.1897 5.84991C4.1897 6.25991 4.5297 6.59991 4.9397 6.59991H7.1097C6.8097 7.55991 5.94969 8.25992 4.92969 8.25992C4.51969 8.25992 4.17969 8.59992 4.17969 9.00992C4.17969 9.41992 4.51969 9.75992 4.92969 9.75992C5.73969 9.75992 6.4897 9.48992 7.1097 9.03992C7.6597 9.49992 8.31969 9.75992 8.99969 9.75992C9.40969 9.75992 9.74969 9.41992 9.74969 9.00992C9.74969 8.59992 9.41969 8.25992 9.00969 8.25992Z" fill="currentColor" /><path d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.81 20.44 7.58 21.09L7.31 20.64C7.1 20.28 7.21001 19.82 7.57001 19.61C7.92001 19.4 8.39001 19.51 8.60001 19.87L9.64999 21.62C9.78999 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z" fill="currentColor" /><path d="M22.0004 9.75C21.5904 9.75 21.2504 9.41 21.2504 9C21.2504 6.04 19.1904 3.56 16.4204 2.91L16.6904 3.35999C16.9004 3.71999 16.7904 4.18001 16.4304 4.39001C16.0804 4.60001 15.6104 4.49001 15.4004 4.13L14.3504 2.38C14.2104 2.15 14.2104 1.86 14.3404 1.63C14.4704 1.39 14.7204 1.25 14.9904 1.25C19.2604 1.25 22.7404 4.73 22.7404 9C22.7504 9.41 22.4104 9.75 22.0004 9.75Z" fill="currentColor" /><path d="M19.7296 18.3301L17.5896 14.0601C17.4596 13.8101 17.1996 13.6401 16.9196 13.6401C16.6396 13.6401 16.3796 13.8001 16.2496 14.0501L14.1096 18.3201C13.9196 18.6901 14.0696 19.1401 14.4496 19.3301C14.5596 19.3801 14.6696 19.4101 14.7796 19.4101C15.0496 19.4101 15.3196 19.2601 15.4496 19.0001L15.6196 18.6601H18.2096L18.3796 19.0001C18.5696 19.3701 19.0196 19.5201 19.3896 19.3401C19.7696 19.1501 19.9196 18.7001 19.7296 18.3301ZM16.3796 17.1601L16.9295 16.0701L17.4796 17.1601H16.3796Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTranslate as IconComponentType).keywords = [
  "translate",
  "interpret",
  "read",
  "transform",
  "understand",
  "translation",
  "interpretation",
  "transcribe",
  "replicate",
  "articulate"
];

export default IconTranslate as IconComponentType;