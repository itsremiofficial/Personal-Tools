import { FC } from 'react';
import { IconProps } from "@/types";

const IconFormatCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5008 5.35C21.5008 6.26 21.0708 7.07 20.4108 7.59C19.9308 7.97 19.3208 8.2 18.6508 8.2C17.0708 8.2 15.8008 6.93 15.8008 5.35C15.8008 4.68 16.0308 4.08 16.4108 3.59H16.4208C16.9308 2.93 17.7408 2.5 18.6508 2.5C20.2308 2.5 21.5008 3.77 21.5008 5.35Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.2 5.35C8.2 6.93 6.93 8.2 5.35 8.2C4.68 8.2 4.08 7.97 3.59 7.59C2.93 7.07 2.5 6.26 2.5 5.35C2.5 3.77 3.77 2.5 5.35 2.5C6.26 2.5 7.07 2.93 7.59 3.59C7.97 4.08 8.2 4.68 8.2 5.35Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M21.5008 18.6498C21.5008 20.2298 20.2308 21.4998 18.6508 21.4998C17.7408 21.4998 16.9308 21.0698 16.4208 20.4098H16.4108C16.0308 19.9298 15.8008 19.3198 15.8008 18.6498C15.8008 17.0698 17.0708 15.7998 18.6508 15.7998C19.3208 15.7998 19.9208 16.0298 20.4108 16.4098V16.4198C21.0708 16.9298 21.5008 17.7398 21.5008 18.6498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.2 18.6498C8.2 19.3198 7.97 19.9198 7.59 20.4098C7.07 21.0798 6.26 21.4998 5.35 21.4998C3.77 21.4998 2.5 20.2298 2.5 18.6498C2.5 17.7398 2.93 16.9298 3.59 16.4198V16.4098C4.07 16.0298 4.68 15.7998 5.35 15.7998C6.93 15.7998 8.2 17.0698 8.2 18.6498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M21.5 12C21.5 13.6 21.11 15.09 20.41 16.41C19.93 16.03 19.32 15.8 18.65 15.8C17.07 15.8 15.8 17.07 15.8 18.65C15.8 19.32 16.03 19.92 16.41 20.41C15.09 21.11 13.6 21.5 12 21.5C10.41 21.5 8.91 21.11 7.59 20.41C7.97 19.93 8.2 19.32 8.2 18.65C8.2 17.07 6.93 15.8 5.35 15.8C4.68 15.8 4.08 16.03 3.59 16.41C2.89 15.09 2.5 13.6 2.5 12C2.5 10.41 2.89 8.91 3.59 7.59C4.08 7.97 4.68 8.2 5.35 8.2C6.93 8.2 8.2 6.93 8.2 5.35C8.2 4.68 7.97 4.08 7.59 3.59C8.91 2.89 10.41 2.5 12 2.5C13.6 2.5 15.09 2.89 16.41 3.59C16.03 4.07 15.8 4.68 15.8 5.35C15.8 6.93 17.07 8.2 18.65 8.2C19.32 8.2 19.92 7.97 20.41 7.59C21.11 8.91 21.5 10.41 21.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.03 5.17C9.02 5.08 9.01 5 8.99 4.91C8.98 4.84 8.97 4.77 8.95 4.69C8.92 4.57 8.88 4.44 8.83 4.32C8.71 3.97 8.53 3.65 8.3 3.35C8.17 3.19 8.03 3.03 7.87 2.9C7.23 2.32 6.4 2 5.53 2C3.58 2 2 3.58 2 5.53C2 6.4 2.32 7.23 2.9 7.87C3.03 8.03 3.19 8.17 3.35 8.3C3.65 8.53 3.97 8.71 4.32 8.83C4.44 8.88 4.57 8.92 4.69 8.95C4.77 8.97 4.84 8.98 4.91 8.99C5 9.01 5.08 9.02 5.17 9.03C5.29 9.04 5.41 9.05 5.53 9.05C7.47 9.05 9.05 7.47 9.05 5.53C9.05 5.41 9.04 5.29 9.03 5.17Z" fill="currentColor" /><path d="M21.0992 16.1402C20.9992 16.0102 20.8692 15.8802 20.7292 15.7702C20.7092 15.7502 20.6792 15.7202 20.6492 15.7002C20.3792 15.4902 20.0792 15.3202 19.7692 15.2002C19.7392 15.1802 19.7092 15.1702 19.6792 15.1702C19.5692 15.1302 19.4592 15.0902 19.3492 15.0602C19.1792 15.0202 18.9992 14.9902 18.8292 14.9702C18.7092 14.9602 18.5892 14.9502 18.4692 14.9502C16.5292 14.9502 14.9492 16.5302 14.9492 18.4702C14.9492 18.5902 14.9592 18.7102 14.9692 18.8302C14.9892 19.0002 15.0192 19.1802 15.0592 19.3502C15.0892 19.4602 15.1292 19.5702 15.1692 19.6802C15.1692 19.7102 15.1792 19.7402 15.1992 19.7702C15.3192 20.0802 15.4892 20.3802 15.6992 20.6502C15.7192 20.6802 15.7492 20.7002 15.7692 20.7302C15.8792 20.8702 16.0092 21.0002 16.1392 21.1002C16.7792 21.6802 17.5992 22.0002 18.4692 22.0002C20.4192 22.0002 21.9992 20.4202 21.9992 18.4702C21.9992 17.6002 21.6792 16.7802 21.0992 16.1402Z" fill="currentColor" /><path d="M5.53 14.9502C5.41 14.9502 5.29 14.9602 5.17 14.9702C5 14.9902 4.82 15.0202 4.65 15.0602C4.54 15.0902 4.43 15.1302 4.32 15.1702C4.29 15.1702 4.26 15.1802 4.23 15.2002C3.92 15.3202 3.62 15.4902 3.35 15.7002C3.32 15.7202 3.3 15.7502 3.27 15.7702C3.13 15.8802 3 16.0102 2.9 16.1402C2.32 16.7802 2 17.6002 2 18.4702C2 20.4202 3.58 22.0002 5.53 22.0002C6.4 22.0002 7.23 21.6802 7.87 21.1002C8.03 20.9702 8.17 20.8102 8.3 20.6502C8.51 20.3802 8.68 20.0802 8.8 19.7702C8.82 19.7402 8.83 19.7102 8.83 19.6802C8.87 19.5702 8.91 19.4602 8.94 19.3502C8.98 19.1802 9.01 19.0002 9.03 18.8302C9.04 18.7102 9.05 18.5902 9.05 18.4702C9.05 16.5302 7.47 14.9502 5.53 14.9502Z" fill="currentColor" /><path d="M18.4692 2C17.5992 2 16.7792 2.32 16.1392 2.9C16.0092 3 15.8792 3.13 15.7692 3.27C15.7492 3.29 15.7192 3.32 15.6992 3.35C15.4892 3.62 15.3192 3.92 15.1992 4.23C15.1792 4.26 15.1692 4.29 15.1692 4.32C15.1292 4.43 15.0892 4.54 15.0592 4.65C15.0192 4.82 14.9892 5 14.9692 5.17C14.9592 5.29 14.9492 5.41 14.9492 5.53C14.9492 7.47 16.5292 9.05 18.4692 9.05C18.5892 9.05 18.7092 9.04 18.8292 9.03C18.9992 9.01 19.1792 8.98 19.3492 8.94C19.4592 8.91 19.5692 8.87 19.6792 8.83C19.7092 8.83 19.7392 8.82 19.7692 8.8C20.0792 8.68 20.3792 8.51 20.6492 8.3C20.8092 8.17 20.9692 8.03 21.0992 7.87C21.6792 7.23 21.9992 6.4 21.9992 5.53C21.9992 3.58 20.4192 2 18.4692 2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M15.77 20.73C15.75 20.7 15.72 20.68 15.7 20.65C15.49 20.38 15.32 20.08 15.2 19.77C15.21 19.8 15.22 19.83 15.23 19.86C13.22 20.7 10.82 20.71 8.77 19.86C8.78 19.83 8.79 19.8 8.8 19.77C8.68 20.08 8.51 20.38 8.3 20.65C8.17 20.81 8.03 20.97 7.87 21.1C9.15 21.69 10.57 22 12 22C13.46 22 14.85 21.7 16.14 21.1C16.01 21 15.88 20.87 15.77 20.73ZM3.5 12C3.5 10.89 3.72 9.78 4.14 8.77C4.15 8.77 4.17 8.78 4.18 8.78C4.06 8.73 3.93 8.67 3.82 8.61C3.66 8.52 3.5 8.42 3.35 8.3C3.19 8.17 3.03 8.03 2.9 7.87C2.31 9.15 2 10.57 2 12C2 13.46 2.3 14.85 2.9 16.14C3 16.01 3.13 15.88 3.27 15.77C3.3 15.75 3.32 15.72 3.35 15.7C3.62 15.49 3.92 15.32 4.23 15.2C4.2 15.21 4.17 15.22 4.14 15.23C3.71 14.22 3.5 13.13 3.5 12ZM21.1 7.87C20.97 8.03 20.81 8.17 20.65 8.3C20.38 8.51 20.08 8.68 19.77 8.8C19.8 8.79 19.83 8.78 19.86 8.77C20.28 9.78 20.5 10.89 20.5 12C20.5 13.13 20.29 14.22 19.86 15.23C19.83 15.22 19.8 15.21 19.77 15.2C20.08 15.32 20.38 15.49 20.65 15.7C20.68 15.72 20.71 15.75 20.73 15.77C20.87 15.88 21 16.01 21.1 16.14C21.7 14.85 22 13.46 22 12C22 10.57 21.69 9.15 21.1 7.87ZM12 2C10.57 2 9.15 2.31 7.87 2.9C8.03 3.03 8.17 3.19 8.3 3.35C8.42 3.5 8.52 3.66 8.61 3.82C8.67 3.93 8.73 4.06 8.78 4.18C8.78 4.17 8.77 4.15 8.77 4.14C10.81 3.29 13.22 3.3 15.23 4.14C15.22 4.17 15.21 4.2 15.2 4.23C15.32 3.92 15.49 3.62 15.7 3.35C15.72 3.32 15.75 3.29 15.77 3.27C15.88 3.13 16.01 3 16.14 2.9C14.85 2.3 13.46 2 12 2Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconFormatCircle;