import { FC } from 'react';
import { IconProps } from "@/types";

const IconMirroringScreen: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V8C2 5 4 3 7 3H17C20 3 22 5 22 8V16C22 19 20 21 17 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M3.69043 11.71C8.31043 12.3 11.7004 15.7 12.3004 20.32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M2.62012 15.0698C6.01012 15.4998 8.50012 17.9998 8.94012 21.3898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M1.98047 18.8599C3.67047 19.0799 4.92047 20.3199 5.14047 22.0199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2 9V8C2 5.24 4.24 3 7 3H17C19.76 3 22 5.24 22 8V16C22 18.76 19.76 21 17 21H16H7C4.24 21 2 18.76 2 16V9Z" fill="currentColor" /><path d="M16.1383 15.44C15.7683 15.44 15.4483 15.16 15.3983 14.79C14.9683 11.41 12.5083 8.95003 9.12827 8.52003C8.71827 8.47003 8.42826 8.09001 8.47826 7.68001C8.52826 7.27001 8.90827 6.98002 9.31827 7.03002C13.3883 7.55002 16.3583 10.52 16.8883 14.6C16.9383 15.01 16.6483 15.39 16.2383 15.44C16.2083 15.44 16.1783 15.44 16.1383 15.44Z" fill="currentColor" /><path d="M13.4389 16.3C13.0689 16.3 12.7489 16.02 12.6989 15.65C12.3889 13.27 10.6589 11.53 8.2689 11.22C7.8589 11.17 7.56889 10.79 7.61889 10.38C7.66889 9.96998 8.0489 9.67997 8.4589 9.72997C11.5389 10.13 13.7889 12.37 14.1889 15.46C14.2389 15.87 13.9489 16.25 13.5389 16.3C13.5089 16.3 13.4689 16.3 13.4389 16.3Z" fill="currentColor" /><path d="M10.3891 16.81C10.0191 16.81 9.69911 16.53 9.64911 16.16C9.51911 15.14 8.77911 14.4 7.75912 14.27C7.34912 14.22 7.05912 13.84 7.10912 13.43C7.15912 13.02 7.53912 12.73 7.94912 12.78C9.63912 13 10.9191 14.28 11.1391 15.97C11.1891 16.38 10.8991 16.76 10.4891 16.81C10.4591 16.81 10.4191 16.81 10.3891 16.81Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMirroringScreen;