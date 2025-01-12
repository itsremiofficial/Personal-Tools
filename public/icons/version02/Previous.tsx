import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconPrevious: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9099 7.21999V16.79C20.9099 18.75 18.7799 19.98 17.0799 19L12.9299 16.61L8.77988 14.21C7.07988 13.23 7.07988 10.78 8.77988 9.79998L12.9299 7.39998L17.0799 5.01C18.7799 4.03 20.9099 5.24999 20.9099 7.21999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.42969 18.18V5.82001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.9099 7.21999V16.79C20.9099 18.75 18.7799 19.98 17.0799 19L12.9299 16.61L8.77988 14.21C7.07988 13.23 7.07988 10.78 8.77988 9.79998L12.9299 7.39998L17.0799 5.01C18.7799 4.03 20.9099 5.24999 20.9099 7.21999Z" fill="currentColor" /><path d="M4.42969 18.93C4.01969 18.93 3.67969 18.59 3.67969 18.18V5.82001C3.67969 5.41001 4.01969 5.07001 4.42969 5.07001C4.83969 5.07001 5.17969 5.41001 5.17969 5.82001V18.18C5.17969 18.59 4.83969 18.93 4.42969 18.93Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9099 7.22V16.79C20.9099 18.75 18.7799 19.98 17.0799 19L12.9299 16.61L8.77988 14.21C7.07988 13.23 7.07988 10.78 8.77988 9.8L12.9299 7.4L17.0799 5.01C18.7799 4.03 20.9099 5.25 20.9099 7.22Z" fill="currentColor" /><path d="M4.42969 18.93C4.01969 18.93 3.67969 18.59 3.67969 18.18V5.82C3.67969 5.41 4.01969 5.07 4.42969 5.07C4.83969 5.07 5.17969 5.41 5.17969 5.82V18.18C5.17969 18.59 4.83969 18.93 4.42969 18.93Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPrevious;