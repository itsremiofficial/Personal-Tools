import { FC } from 'react';
import { IconProps } from "../../types";

const IconSendSqaure2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M10.5898 7.68018H14.8298V11.9302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.8299 7.68018L9.16992 13.3402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.4992 22.8002H3.49922C3.09922 22.8002 2.69922 22.5002 2.69922 22.0002C2.69922 21.5002 2.99922 21.2002 3.49922 21.2002H20.4992C20.8992 21.2002 21.2992 21.5002 21.2992 22.0002C21.2992 22.5002 20.8992 22.8002 20.4992 22.8002Z" fill="currentColor" /><path d="M18.9984 18.2004C18.7984 18.2004 18.5984 18.1004 18.4984 18.0004L4.49844 4.00039C4.19844 3.70039 4.19844 3.30039 4.49844 3.00039C4.79844 2.70039 5.29844 2.70039 5.59844 3.00039L19.5984 17.0004C19.8984 17.3004 19.8984 17.8004 19.5984 18.1004C19.3984 18.2004 19.1984 18.2004 18.9984 18.2004Z" fill="currentColor" /><path d="M4.99922 14.5002C4.59922 14.5002 4.19922 14.2002 4.19922 13.7002V3.5002C4.19922 3.1002 4.49922 2.7002 4.99922 2.7002H15.2992C15.6992 2.7002 16.0992 3.0002 16.0992 3.5002C16.0992 4.0002 15.7992 4.3002 15.2992 4.3002H5.79922V13.8002C5.79922 14.2002 5.39922 14.5002 4.99922 14.5002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconSendSqaure2;