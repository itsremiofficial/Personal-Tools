import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconComponent: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6197 14.55L15.2297 20.94C13.8297 22.34 11.5297 22.34 10.1197 20.94L3.72969 14.55C2.32969 13.15 2.32969 10.85 3.72969 9.44001L10.1197 3.05C11.5197 1.65 13.8197 1.65 15.2297 3.05L21.6197 9.44001C23.0197 10.85 23.0197 13.15 21.6197 14.55Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6197 14.55L15.2297 20.94C13.8297 22.34 11.5297 22.34 10.1197 20.94L3.72969 14.55C2.32969 13.15 2.32969 10.85 3.72969 9.44001L10.1197 3.05C11.5197 1.65 13.8197 1.65 15.2297 3.05L21.6197 9.44001C23.0197 10.85 23.0197 13.15 21.6197 14.55Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6197 14.55L15.2297 20.94C13.8297 22.34 11.5297 22.34 10.1197 20.94L3.72969 14.55C2.32969 13.15 2.32969 10.85 3.72969 9.44L10.1197 3.05C11.5197 1.65 13.8197 1.65 15.2297 3.05L21.6197 9.44C23.0197 10.85 23.0197 13.15 21.6197 14.55Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconComponent;