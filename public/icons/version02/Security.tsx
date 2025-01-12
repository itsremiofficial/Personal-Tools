import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconSecurity: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.58 11.1198C21.58 16.0098 18.03 20.5898 13.18 21.9298C12.85 22.0198 12.49 22.0198 12.16 21.9298C7.31 20.5898 3.76001 16.0098 3.76001 11.1198V6.72979C3.76001 5.90979 4.38002 4.97979 5.15002 4.66979L10.72 2.38982C11.97 1.87982 13.38 1.87982 14.63 2.38982L20.2 4.66979C20.96 4.97979 21.59 5.90979 21.59 6.72979L21.58 11.1198Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M10.71 2.38982C11.96 1.87982 13.37 1.87982 14.62 2.38982L20.19 4.66979C20.95 4.97979 21.58 5.90979 21.58 6.72979V11.1198C21.58 16.0098 18.03 20.5898 13.18 21.9298C12.85 22.0198 12.49 22.0198 12.16 21.9298C7.31 20.5898 3.76001 16.0098 3.76001 11.1198" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19 5.67L7.26001 17.41C6.82001 17.85 6.08 17.79 5.72 17.27C4.48 15.46 3.75 13.32 3.75 11.12V6.73C3.75 5.91 4.37 4.98 5.13 4.67L10.7 2.39C11.96 1.87 13.36 1.87 14.62 2.39L18.66 4.03999C19.33 4.30999 19.5 5.17 19 5.67Z" fill="currentColor" /><path d="M19.9399 7.04012C20.5899 6.49012 21.5799 6.96011 21.5799 7.81011V11.1201C21.5799 16.0101 18.0299 20.5901 13.1799 21.9301C12.8499 22.0201 12.4899 22.0201 12.1499 21.9301C10.7299 21.5301 9.40992 20.8601 8.27992 19.9801C7.79992 19.6101 7.74994 18.9101 8.16994 18.4801C10.3499 16.2501 16.7299 9.75012 19.9399 7.04012Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5.67L7.26 17.41C6.82 17.85 6.08 17.79 5.72 17.27C4.48 15.46 3.75 13.32 3.75 11.12V6.73C3.75 5.91 4.37 4.98 5.13 4.67L10.7 2.39C11.96 1.87 13.36 1.87 14.62 2.39L18.67 4.04C19.33 4.31 19.5 5.17 19 5.67Z" fill="currentColor" /><path d="M19.9399 7.04012C20.5899 6.49012 21.5799 6.96012 21.5799 7.81012V11.1201C21.5799 16.0101 18.0299 20.5901 13.1799 21.9301C12.8499 22.0201 12.4899 22.0201 12.1499 21.9301C10.7299 21.5301 9.40993 20.8601 8.27993 19.9801C7.79993 19.6101 7.74993 18.9101 8.16993 18.4801C10.3499 16.2501 16.7299 9.75012 19.9399 7.04012Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSecurity;