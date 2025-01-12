import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconWidget3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.5 6.50049C2.5 4.29135 4.29086 2.50049 6.5 2.50049C8.70914 2.50049 10.5 4.29135 10.5 6.50049C10.5 8.70963 8.70914 10.5005 6.5 10.5005C4.29086 10.5005 2.5 8.70963 2.5 6.50049Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13.5 17.5005C13.5 15.2913 15.2909 13.5005 17.5 13.5005C19.7091 13.5005 21.5 15.2913 21.5 17.5005C21.5 19.7096 19.7091 21.5005 17.5 21.5005C15.2909 21.5005 13.5 19.7096 13.5 17.5005Z" stroke="currentColor" strokeWidth={width} /><path d="M21.5 6.50049C21.5 4.29135 19.7091 2.50049 17.5 2.50049C15.2909 2.50049 13.5 4.29135 13.5 6.50049C13.5 8.70963 15.2909 10.5005 17.5 10.5005C19.7091 10.5005 21.5 8.70963 21.5 6.50049Z" stroke="currentColor" strokeWidth={width} /><path d="M10.5 17.5005C10.5 15.2913 8.70914 13.5005 6.5 13.5005C4.29086 13.5005 2.5 15.2913 2.5 17.5005C2.5 19.7096 4.29086 21.5005 6.5 21.5005C8.70914 21.5005 10.5 19.7096 10.5 17.5005Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.25 6.50049C22.25 3.87714 20.1234 1.75049 17.5 1.75049C14.8766 1.75049 12.75 3.87714 12.75 6.50049C12.75 9.12384 14.8766 11.2505 17.5 11.2505C20.1234 11.2505 22.25 9.12384 22.25 6.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.25 17.5005C11.25 14.8771 9.12335 12.7505 6.5 12.7505C3.87665 12.7505 1.75 14.8771 1.75 17.5005C1.75 20.1238 3.87665 22.2505 6.5 22.2505C9.12335 22.2505 11.25 20.1238 11.25 17.5005Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M1.75 6.50049C1.75 3.87714 3.87665 1.75049 6.5 1.75049C9.12335 1.75049 11.25 3.87714 11.25 6.50049C11.25 9.12384 9.12335 11.2505 6.5 11.2505C3.87665 11.2505 1.75 9.12384 1.75 6.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.75 17.5005C12.75 14.8771 14.8766 12.7505 17.5 12.7505C20.1234 12.7505 22.25 14.8771 22.25 17.5005C22.25 20.1238 20.1234 22.2505 17.5 22.2505C14.8766 22.2505 12.75 20.1238 12.75 17.5005Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.75 6.50049C1.75 3.87714 3.87665 1.75049 6.5 1.75049C9.12335 1.75049 11.25 3.87714 11.25 6.50049C11.25 9.12384 9.12335 11.2505 6.5 11.2505C3.87665 11.2505 1.75 9.12384 1.75 6.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.75 17.5005C12.75 14.8771 14.8766 12.7505 17.5 12.7505C20.1234 12.7505 22.25 14.8771 22.25 17.5005C22.25 20.1238 20.1234 22.2505 17.5 22.2505C14.8766 22.2505 12.75 20.1238 12.75 17.5005Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.25 6.50049C22.25 3.87714 20.1234 1.75049 17.5 1.75049C14.8766 1.75049 12.75 3.87714 12.75 6.50049C12.75 9.12384 14.8766 11.2505 17.5 11.2505C20.1234 11.2505 22.25 9.12384 22.25 6.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.25 17.5005C11.25 14.8771 9.12335 12.7505 6.5 12.7505C3.87665 12.7505 1.75 14.8771 1.75 17.5005C1.75 20.1238 3.87665 22.2505 6.5 22.2505C9.12335 22.2505 11.25 20.1238 11.25 17.5005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconWidget3;