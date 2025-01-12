import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconTag: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.8403 15.3L9.3703 19.83C11.2303 21.69 14.2503 21.69 16.1203 19.83L20.5103 15.44C22.3703 13.58 22.3703 10.56 20.5103 8.69005L15.9703 4.17005C15.0203 3.22005 13.7103 2.71005 12.3703 2.78005L7.3703 3.02005C5.3703 3.11005 3.7803 4.70005 3.6803 6.69005L3.4403 11.69C3.3803 13.04 3.8903 14.35 4.8403 15.3Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.1699 12C11.5506 12 12.6699 10.8807 12.6699 9.5C12.6699 8.11929 11.5506 7 10.1699 7C8.78921 7 7.66992 8.11929 7.66992 9.5C7.66992 10.8807 8.78921 12 10.1699 12Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M4.8403 15.3L9.3703 19.83C11.2303 21.6901 14.2503 21.6901 16.1203 19.83L20.5103 15.44C22.3703 13.58 22.3703 10.56 20.5103 8.69005L15.9703 4.17005C15.0203 3.22005 13.7103 2.71005 12.3703 2.78005L7.3703 3.02005C5.3703 3.11005 3.7803 4.70005 3.6803 6.69005L3.4403 11.69C3.3803 13.04 3.8903 14.35 4.8403 15.3Z" fill="currentColor" /><path d="M10.17 12.38C11.7606 12.38 13.05 11.0906 13.05 9.5C13.05 7.90942 11.7606 6.62 10.17 6.62C8.57946 6.62 7.29004 7.90942 7.29004 9.5C7.29004 11.0906 8.57946 12.38 10.17 12.38Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5023 8.70005L15.9723 4.17005C15.0223 3.22005 13.7123 2.71005 12.3723 2.78005L7.37234 3.02005C5.37234 3.11005 3.78234 4.70005 3.68234 6.69005L3.44234 11.69C3.38234 13.03 3.88234 14.34 4.83234 15.29L9.36234 19.82C11.2223 21.68 14.2423 21.68 16.1123 19.82L20.5023 15.43C22.3723 13.58 22.3723 10.56 20.5023 8.70005ZM10.1723 12.38C8.58234 12.38 7.29234 11.09 7.29234 9.50005C7.29234 7.91005 8.58234 6.62005 10.1723 6.62005C11.7623 6.62005 13.0523 7.91005 13.0523 9.50005C13.0523 11.09 11.7623 12.38 10.1723 12.38Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconTag;