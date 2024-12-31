import { FC } from 'react';
import { IconProps } from "@/types";

const IconSend1: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.50929 4.23013L18.0693 8.51013C21.9093 10.4301 21.9093 13.5701 18.0693 15.4901L9.50929 19.7701C3.74929 22.6501 1.39929 20.2901 4.27929 14.5401L5.14929 12.8101C5.36929 12.3701 5.36929 11.6401 5.14929 11.2001L4.27929 9.46013C1.39929 3.71013 3.75929 1.35013 9.50929 4.23013Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.34" : "1"} d="M5.43945 12H10.8395" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.4992 22.8002H3.49922C3.09922 22.8002 2.69922 22.5002 2.69922 22.0002C2.69922 21.5002 2.99922 21.2002 3.49922 21.2002H20.4992C20.8992 21.2002 21.2992 21.5002 21.2992 22.0002C21.2992 22.5002 20.8992 22.8002 20.4992 22.8002Z" fill="currentColor" /><path d="M18.9984 18.2004C18.7984 18.2004 18.5984 18.1004 18.4984 18.0004L4.49844 4.00039C4.19844 3.70039 4.19844 3.30039 4.49844 3.00039C4.79844 2.70039 5.29844 2.70039 5.59844 3.00039L19.5984 17.0004C19.8984 17.3004 19.8984 17.8004 19.5984 18.1004C19.3984 18.2004 19.1984 18.2004 18.9984 18.2004Z" fill="currentColor" /><path d="M4.99922 14.5002C4.59922 14.5002 4.19922 14.2002 4.19922 13.7002V3.5002C4.19922 3.1002 4.49922 2.7002 4.99922 2.7002H15.2992C15.6992 2.7002 16.0992 3.0002 16.0992 3.5002C16.0992 4.0002 15.7992 4.3002 15.2992 4.3002H5.79922V13.8002C5.79922 14.2002 5.39922 14.5002 4.99922 14.5002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSend1;