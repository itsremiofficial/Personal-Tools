import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconShare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.76002 13.28H9.85002V20.48C9.85002 22.16 10.76 22.5 11.87 21.24L19.44 12.64C20.37 11.59 19.98 10.72 18.57 10.72H15.48V3.52C15.48 1.84 14.57 1.5 13.46 2.76L5.89002 11.36C4.97002 12.42 5.36002 13.28 6.76002 13.28Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6694 3.67V20.33L11.8694 21.24C10.7594 22.5 9.84945 22.16 9.84945 20.48V13.28H6.75945C5.35945 13.28 4.96944 12.42 5.89944 11.37L12.6694 3.67Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M19.4399 12.63L12.6699 20.33V3.67L13.4699 2.76C14.5799 1.5 15.4899 1.84 15.4899 3.52V10.72H18.5799C19.9799 10.72 20.3699 11.58 19.4399 12.63Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5794 10.72H15.4894V3.52C15.4894 1.84 14.5794 1.5 13.4694 2.76L12.6694 3.67L5.89944 11.37C4.96944 12.42 5.35945 13.28 6.75945 13.28H9.84945V20.48C9.84945 22.16 10.7594 22.5 11.8694 21.24L12.6694 20.33L19.4394 12.63C20.3694 11.58 19.9794 10.72 18.5794 10.72Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShare;