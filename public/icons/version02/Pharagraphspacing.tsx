import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconPharagraphspacing: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.67188 22H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M3.67188 2H21.6719" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12.6719 6V18" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5018 7.71965L12.6718 4.88965L9.8418 7.71965" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M15.5018 15.8896L12.6718 18.7196L9.8418 15.8896" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.6719 22.75H3.67188C3.26188 22.75 2.92188 22.41 2.92188 22C2.92188 21.59 3.26188 21.25 3.67188 21.25H21.6719C22.0819 21.25 22.4219 21.59 22.4219 22C22.4219 22.41 22.0819 22.75 21.6719 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6719 2.75H3.67188C3.26188 2.75 2.92188 2.41 2.92188 2C2.92188 1.59 3.26188 1.25 3.67188 1.25H21.6719C22.0819 1.25 22.4219 1.59 22.4219 2C22.4219 2.41 22.0819 2.75 21.6719 2.75Z" fill="currentColor" /><path d="M14.9722 15.36L13.4222 16.91V6.70002L14.9722 8.25002C15.1222 8.40002 15.3122 8.47002 15.5022 8.47002C15.6922 8.47002 15.8822 8.40002 16.0322 8.25002C16.3222 7.96002 16.3222 7.48002 16.0322 7.19002L13.2022 4.36002C12.9222 4.08002 12.4222 4.08002 12.1422 4.36002L9.31223 7.19002C9.02223 7.48002 9.02223 7.96002 9.31223 8.25002C9.60223 8.54002 10.0822 8.54002 10.3722 8.25002L11.9222 6.70002V16.91L10.3722 15.36C10.0822 15.07 9.60223 15.07 9.31223 15.36C9.02223 15.65 9.02223 16.13 9.31223 16.42L12.1422 19.25C12.2822 19.39 12.4722 19.47 12.6722 19.47C12.8722 19.47 13.0622 19.39 13.2022 19.25L16.0322 16.42C16.3222 16.13 16.3222 15.65 16.0322 15.36C15.7422 15.07 15.2622 15.07 14.9722 15.36Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6719 22.75H3.67188C3.26188 22.75 2.92188 22.41 2.92188 22C2.92188 21.59 3.26188 21.25 3.67188 21.25H21.6719C22.0819 21.25 22.4219 21.59 22.4219 22C22.4219 22.41 22.0819 22.75 21.6719 22.75Z" fill="currentColor" /><path d="M21.6719 2.75H3.67188C3.26188 2.75 2.92188 2.41 2.92188 2C2.92188 1.59 3.26188 1.25 3.67188 1.25H21.6719C22.0819 1.25 22.4219 1.59 22.4219 2C22.4219 2.41 22.0819 2.75 21.6719 2.75Z" fill="currentColor" /><path d="M14.9722 15.36L13.4222 16.91V6.70002L14.9722 8.25002C15.1222 8.40002 15.3122 8.47002 15.5022 8.47002C15.6922 8.47002 15.8822 8.40002 16.0322 8.25002C16.3222 7.96002 16.3222 7.48002 16.0322 7.19002L13.2022 4.36002C12.9222 4.08002 12.4222 4.08002 12.1422 4.36002L9.31223 7.19002C9.02223 7.48002 9.02223 7.96002 9.31223 8.25002C9.60223 8.54002 10.0822 8.54002 10.3722 8.25002L11.9222 6.70002V16.91L10.3722 15.36C10.0822 15.07 9.60223 15.07 9.31223 15.36C9.02223 15.65 9.02223 16.13 9.31223 16.42L12.1422 19.25C12.2822 19.39 12.4722 19.47 12.6722 19.47C12.8722 19.47 13.0622 19.39 13.2022 19.25L16.0322 16.42C16.3222 16.13 16.3222 15.65 16.0322 15.36C15.7422 15.07 15.2622 15.07 14.9722 15.36Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPharagraphspacing;