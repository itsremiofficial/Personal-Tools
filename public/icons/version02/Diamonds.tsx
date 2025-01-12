import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconDiamonds: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9604 2.14999H8.37036C6.67036 2.14999 5.92036 2.99999 5.46036 4.03999L2.90036 9.79999C2.44036 10.84 2.69036 12.39 3.46036 13.23L10.3204 20.77C11.6204 22.19 13.7404 22.19 15.0304 20.77L21.8804 13.22C22.6504 12.37 22.9004 10.83 22.4304 9.78999L19.8704 4.02999C19.4104 2.99999 18.6604 2.14999 16.9604 2.14999Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M4.16992 8H21.1699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8804 13.24L15.0304 20.78C13.7304 22.21 11.6104 22.21 10.3104 20.78L3.46036 13.24C2.69036 12.39 2.44036 10.85 2.90036 9.8L3.70037 8H21.6404L22.4404 9.8C22.9004 10.85 22.6504 12.39 21.8804 13.24Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21.6402 8.00002H3.7002L5.46019 4.04002C5.93019 3.00002 6.67019 2.15002 8.37019 2.15002H16.9702C18.6702 2.15002 19.4102 3.00002 19.8802 4.04002L21.6402 8.00002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4404 9.79999L21.6404 7.99999L19.8804 4.03999C19.4104 2.99999 18.6704 2.14999 16.9704 2.14999H8.37036C6.67036 2.14999 5.93036 2.99999 5.46036 4.03999L3.70036 7.99999L2.90036 9.79999C2.44036 10.85 2.69036 12.39 3.46036 13.24L10.3104 20.78C11.6104 22.21 13.7304 22.21 15.0304 20.78L21.8804 13.24C22.6504 12.39 22.9004 10.85 22.4404 9.79999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconDiamonds;