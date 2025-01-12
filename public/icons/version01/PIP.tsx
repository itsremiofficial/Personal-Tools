import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconPIP: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M22 17V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H11H18" stroke="currentColor" strokeWidth={width} /><path d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M13.9961 21H9.99612C9.60457 21 9.23334 21 8.88113 20.9987C5.84103 20.9874 4.21763 20.8784 3.1677 19.8284C3.10065 19.7614 3.03744 19.6904 2.97785 19.6153C2.13532 18.5939 2.01875 17.0574 2.00262 14.3804C2.00036 14.198 1.99889 14.0344 2.00067 13.8872C2.00003 13.6036 2.00003 13.3081 2.00003 13V11C2.00003 7.22876 2.00003 5.34315 3.1716 4.17157C4.34318 3 6.22879 3 10 3H14C17.7713 3 19.6569 3 20.8285 4.17157C20.8955 4.23863 20.9587 4.30966 21.0183 4.38471C21.8608 5.40615 21.9774 6.94261 21.9935 9.61959C21.9958 9.80203 21.9973 9.96561 21.9955 10.1128C21.9961 10.3964 21.9961 10.6919 21.9961 11V13C21.9961 16.7712 21.9961 18.6569 20.8246 19.8284C19.653 21 17.7674 21 13.9961 21Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17C13 15.1144 13 14.1716 13.5858 13.5858C14.1716 13 15.1144 13 17 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H17C15.1144 21 14.1716 21 13.5858 20.4142C13 19.8284 13 18.8856 13 17Z" fill="currentColor" /><path d="M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21C10.4659 21 10.6989 21 10.8827 20.9239C11.1277 20.8224 11.3224 20.6277 11.4239 20.3827C11.5 20.1989 11.5 19.9659 11.5 19.5V17.5C11.5 14.6716 11.5 13.2574 12.3787 12.3787C13.2574 11.5 14.6716 11.5 17.5 11.5H20C20.9486 11.5 21.4229 11.5 21.7166 11.2025C22.0102 10.905 22.0042 10.4366 21.992 9.49974C21.9577 6.86626 21.7775 5.1206 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPIP;