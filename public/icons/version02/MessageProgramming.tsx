import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMessageProgramming: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16992 18.97H8.66992C4.66992 18.97 2.66992 17.97 2.66992 12.97V7.96997C2.66992 3.96997 4.66992 1.96997 8.66992 1.96997H16.6699C20.6699 1.96997 22.6699 3.96997 22.6699 7.96997V12.97C22.6699 16.97 20.6699 18.97 16.6699 18.97H16.1699C15.8599 18.97 15.5599 19.12 15.3699 19.37L13.8699 21.37C13.2099 22.25 12.1299 22.25 11.4699 21.37L9.96991 19.37C9.80991 19.15 9.44992 18.97 9.16992 18.97Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.66992 8.69995L6.66992 10.7L8.66992 12.7" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16.6699 8.69995L18.6699 10.7L16.6699 12.7" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M13.6699 8.37012L11.6699 13.0302" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.16992 18.97H8.66992C4.66992 18.97 2.66992 17.97 2.66992 12.97V7.96997C2.66992 3.96997 4.66992 1.96997 8.66992 1.96997H16.6699C20.6699 1.96997 22.6699 3.96997 22.6699 7.96997V12.97C22.6699 16.97 20.6699 18.97 16.6699 18.97H16.1699C15.8599 18.97 15.5599 19.12 15.3699 19.37L13.8699 21.37C13.2099 22.25 12.1299 22.25 11.4699 21.37L9.96991 19.37C9.80991 19.15 9.44992 18.97 9.16992 18.97Z" fill="currentColor" /><path d="M8.66986 13.4499C8.47986 13.4499 8.28986 13.3799 8.13986 13.2299L6.13986 11.2299C5.84986 10.9399 5.84986 10.4599 6.13986 10.1699L8.13986 8.16989C8.42986 7.87989 8.90986 7.87989 9.19986 8.16989C9.48986 8.45989 9.48986 8.93989 9.19986 9.22989L7.72986 10.6999L9.19986 12.1699C9.48986 12.4599 9.48986 12.9399 9.19986 13.2299C9.04986 13.3799 8.85986 13.4499 8.66986 13.4499Z" fill="currentColor" /><path d="M16.6699 13.4499C16.4799 13.4499 16.2899 13.3799 16.1399 13.2299C15.8499 12.9399 15.8499 12.4599 16.1399 12.1699L17.6099 10.6999L16.1399 9.22989C15.8499 8.93989 15.8499 8.45989 16.1399 8.16989C16.4299 7.87989 16.9099 7.87989 17.1999 8.16989L19.1999 10.1699C19.4899 10.4599 19.4899 10.9399 19.1999 11.2299L17.1999 13.2299C17.0499 13.3799 16.8599 13.4499 16.6699 13.4499Z" fill="currentColor" /><path d="M11.6698 13.78C11.5698 13.78 11.4698 13.76 11.3698 13.72C10.9898 13.56 10.8098 13.12 10.9798 12.73L12.9798 8.05999C13.1398 7.67999 13.5798 7.49998 13.9698 7.66998C14.3498 7.82998 14.5298 8.26997 14.3598 8.65997L12.3598 13.33C12.2398 13.61 11.9598 13.78 11.6698 13.78Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6699 1.96997H8.66992C4.66992 1.96997 2.66992 3.96997 2.66992 7.96997V12.97C2.66992 17.97 4.66992 18.97 8.66992 18.97H9.16992C9.44992 18.97 9.80992 19.15 9.96992 19.37L11.4699 21.37C12.1299 22.25 13.2099 22.25 13.8699 21.37L15.3699 19.37C15.5599 19.12 15.8599 18.97 16.1699 18.97H16.6699C20.6699 18.97 22.6699 16.97 22.6699 12.97V7.96997C22.6699 3.96997 20.6699 1.96997 16.6699 1.96997ZM9.19992 12.17C9.48992 12.46 9.48992 12.94 9.19992 13.23C9.04992 13.38 8.85992 13.45 8.66992 13.45C8.47992 13.45 8.28992 13.38 8.13992 13.23L6.13992 11.23C5.84992 10.94 5.84992 10.46 6.13992 10.17L8.13992 8.16997C8.42992 7.87997 8.90992 7.87997 9.19992 8.16997C9.48992 8.45997 9.48992 8.93997 9.19992 9.22997L7.72992 10.7L9.19992 12.17ZM14.3599 8.65997L12.3599 13.33C12.2399 13.61 11.9599 13.78 11.6699 13.78C11.5699 13.78 11.4699 13.76 11.3699 13.72C10.9899 13.56 10.8099 13.12 10.9799 12.73L12.9799 8.05997C13.1399 7.67997 13.5799 7.49997 13.9699 7.66997C14.3499 7.83997 14.5199 8.27997 14.3599 8.65997ZM19.1999 11.23L17.1999 13.23C17.0499 13.38 16.8599 13.45 16.6699 13.45C16.4799 13.45 16.2899 13.38 16.1399 13.23C15.8499 12.94 15.8499 12.46 16.1399 12.17L17.6099 10.7L16.1399 9.22997C15.8499 8.93997 15.8499 8.45997 16.1399 8.16997C16.4299 7.87997 16.9099 7.87997 17.1999 8.16997L19.1999 10.17C19.4899 10.46 19.4899 10.94 19.1999 11.23Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessageProgramming;