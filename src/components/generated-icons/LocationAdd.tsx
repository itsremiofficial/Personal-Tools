import { FC } from 'react';
import { IconProps } from "@/types";

const IconLocationAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.25 11H14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M12 13.75V8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></g><path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="currentColor" strokeWidth="1.5" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.6207 8.7C19.5807 4.07 15.5407 2 12.0007 2C12.0007 2 12.0007 2 11.9907 2C8.46073 2 4.43073 4.07 3.38073 8.69C2.20073 13.85 5.36073 18.22 8.22073 20.98C9.28073 22 10.6407 22.51 12.0007 22.51C13.3607 22.51 14.7207 22 15.7707 20.98C18.6307 18.22 21.7907 13.86 20.6207 8.7Z" fill="currentColor" /><path d="M14.75 10.25H12.75V8.25C12.75 7.84 12.41 7.5 12 7.5C11.59 7.5 11.25 7.84 11.25 8.25V10.25H9.25C8.84 10.25 8.5 10.59 8.5 11C8.5 11.41 8.84 11.75 9.25 11.75H11.25V13.75C11.25 14.16 11.59 14.5 12 14.5C12.41 14.5 12.75 14.16 12.75 13.75V11.75H14.75C15.16 11.75 15.5 11.41 15.5 11C15.5 10.59 15.16 10.25 14.75 10.25Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconLocationAdd;