import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconDocumentFilter: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.01977 2H12.9198C13.6598 2 14.2698 2.61001 14.2698 3.35001V4.82999C14.2698 5.36999 13.9298 6.04 13.5998 6.38L10.6998 8.94C10.2998 9.28 10.0298 9.94999 10.0298 10.49V13.39C10.0298 13.79 9.7598 14.33 9.4198 14.54L8.4798 15.15C7.5998 15.69 6.38977 15.08 6.38977 14V10.43C6.38977 9.95999 6.11979 9.35001 5.84979 9.01001L3.28979 6.31C2.94979 5.97 2.67981 5.36999 2.67981 4.95999V3.41C2.66981 2.61 3.27977 2 4.01977 2Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.66992 12V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 5.88 21.8899 3.91999 20.0799 2.89999C19.5699 2.60999 18.5499 2.38999 17.6199 2.23999" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.6699 13H18.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M11.6699 17H18.6699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.8999 1H12.0299C12.7099 1 13.2599 1.56 13.2599 2.25V3.62C13.2599 4.12 12.9499 4.73999 12.6399 5.04999L9.98993 7.42001C9.61993 7.73001 9.36993 8.36001 9.36993 8.85001V11.53C9.36993 11.9 9.11995 12.4 8.81995 12.59L7.9599 13.15C7.1599 13.65 6.04993 13.09 6.04993 12.09V8.78C6.04993 8.34 5.79994 7.78 5.55994 7.47L3.21991 4.97C2.90991 4.66 2.66992 4.1 2.66992 3.72V2.29001C2.66992 1.56001 3.2199 1 3.8999 1Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.6699 2H15.2699C14.9899 2 14.7699 2.22 14.7699 2.5C14.7699 2.98 14.7699 3.62 14.7699 3.62C14.7699 4.61 14.2399 5.57999 13.7199 6.10999L10.9999 8.54001C10.9699 8.61001 10.9199 8.71001 10.8899 8.79001V11.54C10.8899 12.45 10.3499 13.44 9.60992 13.89L8.78992 14.42C8.32992 14.71 7.81994 14.85 7.30994 14.85C6.84994 14.85 6.38991 14.73 5.96991 14.5C5.31991 14.14 4.86992 13.55 4.66992 12.87V10.21C4.66992 10.08 4.6199 9.94999 4.5199 9.85999L3.5199 8.85999C3.1999 8.54999 2.66992 8.76999 2.66992 9.20999V17C2.66992 19.76 4.90992 22 7.66992 22H17.6699C20.4299 22 22.6699 19.76 22.6699 17V7C22.6699 4.24 20.4299 2 17.6699 2Z" fill="currentColor" /><path d="M18.6699 13.75H13.6699C13.2599 13.75 12.9199 13.41 12.9199 13C12.9199 12.59 13.2599 12.25 13.6699 12.25H18.6699C19.0799 12.25 19.4199 12.59 19.4199 13C19.4199 13.41 19.0799 13.75 18.6699 13.75Z" fill="currentColor" /><path d="M18.6699 17.75H11.6699C11.2599 17.75 10.9199 17.41 10.9199 17C10.9199 16.59 11.2599 16.25 11.6699 16.25H18.6699C19.0799 16.25 19.4199 16.59 19.4199 17C19.4199 17.41 19.0799 17.75 18.6699 17.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.89992 1H12.0299C12.7099 1 13.2599 1.56 13.2599 2.25V3.62C13.2599 4.12 12.9499 4.74 12.6399 5.05L9.99992 7.43C9.62992 7.74 9.38992 8.36 9.38992 8.86V11.54C9.38992 11.91 9.13992 12.41 8.83992 12.6L7.96992 13.17C7.16992 13.67 6.05992 13.11 6.05992 12.11V8.8C6.05992 8.36 5.80992 7.8 5.56992 7.49L3.22992 4.99C2.91992 4.68 2.66992 4.12 2.66992 3.75V2.31C2.66992 1.56 3.21992 1 3.89992 1Z" fill="currentColor" /><path d="M17.6699 2H15.2699C14.9899 2 14.7699 2.22 14.7699 2.5C14.7699 2.98 14.7699 3.62 14.7699 3.62C14.7699 4.61 14.2399 5.58 13.7199 6.11L10.9999 8.54C10.9699 8.61 10.9199 8.71 10.8899 8.79V11.54C10.8899 12.45 10.3499 13.44 9.60992 13.89L8.78992 14.42C8.32992 14.71 7.81992 14.85 7.30992 14.85C6.84992 14.85 6.38992 14.73 5.96992 14.5C5.45246 14.2134 5.06175 13.781 4.82302 13.2736C4.70105 13.0143 4.66992 12.7245 4.66992 12.438V10.21C4.66992 10.08 4.61992 9.95 4.51992 9.86L3.51992 8.86C3.20992 8.54 2.66992 8.76 2.66992 9.21V17C2.66992 19.76 4.90992 22 7.66992 22H17.6699C20.4299 22 22.6699 19.76 22.6699 17V7C22.6699 4.24 20.4299 2 17.6699 2ZM18.6699 17.75H11.6699C11.2599 17.75 10.9199 17.41 10.9199 17C10.9199 16.59 11.2599 16.25 11.6699 16.25H18.6699C19.0799 16.25 19.4199 16.59 19.4199 17C19.4199 17.41 19.0799 17.75 18.6699 17.75ZM18.6699 13.75H13.6699C13.2599 13.75 12.9199 13.41 12.9199 13C12.9199 12.59 13.2599 12.25 13.6699 12.25H18.6699C19.0799 12.25 19.4199 12.59 19.4199 13C19.4199 13.41 19.0799 13.75 18.6699 13.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDocumentFilter;