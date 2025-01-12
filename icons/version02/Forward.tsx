import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconForward: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.66992 8.34V15.66C2.66992 17.16 4.29991 18.1 5.59991 17.35L8.76993 15.53L11.9399 13.7C12.1399 13.58 12.2999 13.45 12.4299 13.29V10.73C12.2999 10.57 12.1399 10.44 11.9399 10.32L8.76993 8.48999L5.59991 6.67002C4.29991 5.90002 2.66992 6.84 2.66992 8.34Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.4297 8.34V15.66C12.4297 17.16 14.0597 18.1 15.3597 17.35L18.5297 15.53L21.6997 13.7C22.9997 12.95 22.9997 11.08 21.6997 10.32L18.5297 8.48999L15.3597 6.67002C14.0597 5.90002 12.4297 6.84 12.4297 8.34Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.66992 8.33998V15.66C2.66992 17.16 4.29991 18.1 5.59991 17.35L8.76993 15.52L11.9399 13.69L12.4299 13.41V10.59L11.9399 10.31L8.76993 8.48L5.59991 6.64998C4.29991 5.89998 2.66992 6.83998 2.66992 8.33998Z" fill="currentColor" /><path d="M12.4297 8.33998V15.66C12.4297 17.16 14.0597 18.1 15.3497 17.35L18.5297 15.52L21.6997 13.69C22.9897 12.94 22.9897 11.06 21.6997 10.31L18.5297 8.48L15.3497 6.64998C14.0597 5.89998 12.4297 6.83998 12.4297 8.33998Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66992 8.34V15.66C2.66992 17.16 4.29992 18.1 5.59992 17.35L8.76992 15.52L11.9399 13.69L12.4299 13.41V10.59L11.9399 10.31L8.76992 8.48L5.59992 6.65C4.29992 5.9 2.66992 6.84 2.66992 8.34Z" fill="currentColor" /><path d="M12.4297 8.34V15.66C12.4297 17.16 14.0597 18.1 15.3497 17.35L18.5297 15.52L21.6997 13.69C22.9897 12.94 22.9897 11.06 21.6997 10.31L18.5297 8.48L15.3497 6.65C14.0597 5.9 12.4297 6.84 12.4297 8.34Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconForward;