import { FC } from 'react';
import { IconProps } from "../../types";

const IconCreativeCommons: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.8792 14.1499C10.3692 14.5899 9.70914 14.8699 8.98914 14.8699C7.40914 14.8699 6.11914 13.5899 6.11914 11.9999C6.11914 10.4099 7.39914 9.12988 8.98914 9.12988C9.71914 9.12988 10.3792 9.39985 10.8792 9.84985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.8792 14.1499C17.3692 14.5899 16.7091 14.8699 15.9891 14.8699C14.4091 14.8699 13.1191 13.5899 13.1191 11.9999C13.1191 10.4099 14.3991 9.12988 15.9891 9.12988C16.7191 9.12988 17.3792 9.39985 17.8792 9.84985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.42 1.3802C17.21 1.2402 16.95 1.21018 16.72 1.30018C15.29 1.87018 13.71 1.87018 12.28 1.30018C12.05 1.21018 11.79 1.2402 11.58 1.3802C11.37 1.5202 11.25 1.7502 11.25 2.0002V5.0002V8.0002C11.25 8.41019 11.59 8.7502 12 8.7502C12.41 8.7502 12.75 8.41019 12.75 8.0002V6.02021C13.33 6.16021 13.91 6.24019 14.5 6.24019C15.44 6.24019 16.38 6.06021 17.28 5.70021C17.56 5.59021 17.75 5.3102 17.75 5.0002V2.0002C17.75 1.7502 17.63 1.5202 17.42 1.3802Z" fill="currentColor" /><path d="M22 21.25H20.75V11C20.75 8.58 19.42 7.25 17 7.25H7C4.58 7.25 3.25 8.58 3.25 11V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H4H20H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25ZM19.25 12.75V21.25H16.74V12.75H19.25ZM11.24 21.25H8.74V12.75H11.24V21.25ZM12.74 12.75H15.24V21.25H12.74V12.75ZM4.75 12.75H7.24V21.25H4.75V12.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCreativeCommons;