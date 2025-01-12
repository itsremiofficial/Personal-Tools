import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMedicalKit: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.0002C2 10.229 2 8.34339 3.17157 7.17182C4.34315 6.00024 6.22876 6.00024 10 6.00024H14C17.7712 6.00024 19.6569 6.00024 20.8284 7.17182C22 8.34339 22 10.229 22 14.0002C22 17.7715 22 19.6571 20.8284 20.8287C19.6569 22.0002 17.7712 22.0002 14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.8287C2 19.6571 2 17.7715 2 14.0002Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16 6.00024C16 4.11463 16 3.17182 15.4142 2.58603C14.8284 2.00024 13.8856 2.00024 12 2.00024C10.1144 2.00024 9.17157 2.00024 8.58579 2.58603C8 3.17182 8 4.11463 8 6.00024" stroke="currentColor" strokeWidth={width} /><path d="M13.5 14.0002H10.5M12 12.5002V15.5002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle opacity={duotone ? "0.5" : "1"} cx="12" cy="14.0002" r="4" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.052 1.25025H11.948C11.0495 1.25022 10.3003 1.25019 9.70552 1.33016C9.07773 1.41456 8.51093 1.60023 8.05546 2.0557C7.59999 2.51117 7.41432 3.07797 7.32991 3.70577C7.24995 4.30054 7.24997 5.04975 7.25 5.94821L7.25 6.02596C7.70703 6.01101 8.20535 6.00475 8.75 6.00213V6.00025C8.75 5.03624 8.7516 4.38868 8.81654 3.90564C8.87858 3.44418 8.9858 3.24668 9.11612 3.11636C9.24644 2.98605 9.44393 2.87882 9.9054 2.81678C10.3884 2.75184 11.036 2.75025 12 2.75025C12.964 2.75025 13.6116 2.75184 14.0946 2.81678C14.5561 2.87882 14.7536 2.98605 14.8839 3.11636C15.0142 3.24668 15.1214 3.44418 15.1835 3.90564C15.2484 4.38868 15.25 5.03624 15.25 6.00025V6.00213C15.7947 6.00475 16.293 6.01101 16.75 6.02596V5.94825C16.75 5.04979 16.7501 4.30054 16.6701 3.70577C16.5857 3.07797 16.4 2.51117 15.9445 2.0557C15.4891 1.60023 14.9223 1.41456 14.2945 1.33016C13.6997 1.25019 12.9505 1.25022 12.052 1.25025Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M2 14.0002C2 10.229 2 8.34339 3.17157 7.17182C4.34315 6.00024 6.22876 6.00024 10 6.00024H14C17.7712 6.00024 19.6569 6.00024 20.8284 7.17182C22 8.34339 22 10.229 22 14.0002C22 17.7715 22 19.6571 20.8284 20.8287C19.6569 22.0002 17.7712 22.0002 14 22.0002H9.99998C6.22876 22.0002 4.34314 22.0002 3.17157 20.8287C2 19.6571 2 17.7715 2 14.0002ZM12.75 12.5002C12.75 12.086 12.4142 11.7502 12 11.7502C11.5858 11.7502 11.25 12.086 11.25 12.5002V13.2502H10.5C10.0858 13.2502 9.75 13.586 9.75 14.0002C9.75 14.4145 10.0858 14.7502 10.5 14.7502H11.25V15.5002C11.25 15.9145 11.5858 16.2502 12 16.2502C12.4142 16.2502 12.75 15.9145 12.75 15.5002V14.7502H13.5C13.9142 14.7502 14.25 14.4145 14.25 14.0002C14.25 13.586 13.9142 13.2502 13.5 13.2502H12.75V12.5002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 18.0002C14.2091 18.0002 16 16.2094 16 14.0002C16 11.7911 14.2091 10.0002 12 10.0002C9.79086 10.0002 8 11.7911 8 14.0002C8 16.2094 9.79086 18.0002 12 18.0002ZM12.75 12.5002C12.75 12.086 12.4142 11.7502 12 11.7502C11.5858 11.7502 11.25 12.086 11.25 12.5002V13.2502H10.5C10.0858 13.2502 9.75 13.586 9.75 14.0002C9.75 14.4145 10.0858 14.7502 10.5 14.7502H11.25V15.5002C11.25 15.9145 11.5858 16.2502 12 16.2502C12.4142 16.2502 12.75 15.9145 12.75 15.5002V14.7502H13.5C13.9142 14.7502 14.25 14.4145 14.25 14.0002C14.25 13.586 13.9142 13.2502 13.5 13.2502H12.75V12.5002Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 11.7502C12.4142 11.7502 12.75 12.086 12.75 12.5002V13.2502H13.5C13.9142 13.2502 14.25 13.586 14.25 14.0002C14.25 14.4145 13.9142 14.7502 13.5 14.7502H12.75V15.5002C12.75 15.9145 12.4142 16.2502 12 16.2502C11.5858 16.2502 11.25 15.9145 11.25 15.5002V14.7502H10.5C10.0858 14.7502 9.75 14.4145 9.75 14.0002C9.75 13.586 10.0858 13.2502 10.5 13.2502H11.25V12.5002C11.25 12.086 11.5858 11.7502 12 11.7502Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.948 1.25025C11.0495 1.25022 10.3003 1.25019 9.70552 1.33016C9.07773 1.41456 8.51093 1.60023 8.05546 2.0557C7.59999 2.51117 7.41432 3.07797 7.32991 3.70577C7.24995 4.30055 7.24997 5.04977 7.25 5.94825L7.25 6.02596C5.22882 6.09209 4.01511 6.32828 3.17157 7.17182C2 8.34339 2 10.229 2 14.0002C2 17.7715 2 19.6571 3.17157 20.8287C4.34314 22.0002 6.22876 22.0002 9.99998 22.0002H14C17.7712 22.0002 19.6569 22.0002 20.8284 20.8287C22 19.6571 22 17.7715 22 14.0002C22 10.229 22 8.34339 20.8284 7.17182C19.9849 6.32828 18.7712 6.09209 16.75 6.02596L16.75 5.94825C16.75 5.04978 16.7501 4.30054 16.6701 3.70577C16.5857 3.07797 16.4 2.51117 15.9445 2.0557C15.4891 1.60023 14.9223 1.41456 14.2945 1.33016C13.6997 1.25019 12.9505 1.25022 12.052 1.25025H11.948ZM15.25 6.00213V6.00025C15.25 5.03624 15.2484 4.38868 15.1835 3.90564C15.1214 3.44418 15.0142 3.24668 14.8839 3.11636C14.7536 2.98605 14.5561 2.87882 14.0946 2.81678C13.6116 2.75184 12.964 2.75025 12 2.75025C11.036 2.75025 10.3884 2.75184 9.90539 2.81678C9.44393 2.87882 9.24643 2.98605 9.11612 3.11636C8.9858 3.24668 8.87858 3.44418 8.81654 3.90564C8.75159 4.38868 8.75 5.03624 8.75 6.00025V6.00213C9.14203 6.00025 9.55807 6.00025 10 6.00025H14C14.4419 6.00025 14.858 6.00025 15.25 6.00213ZM16 14.0002C16 16.2094 14.2091 18.0002 12 18.0002C9.79086 18.0002 8 16.2094 8 14.0002C8 11.7911 9.79086 10.0002 12 10.0002C14.2091 10.0002 16 11.7911 16 14.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMedicalKit;