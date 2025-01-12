import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconLocationAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.91992 11H15.4199" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M12.6699 13.75V8.25" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></g><path d="M4.28963 8.49C6.25963 -0.169998 19.0896 -0.159997 21.0496 8.5C22.1996 13.58 19.0396 17.88 16.2696 20.54C14.2596 22.48 11.0796 22.48 9.05963 20.54C6.29963 17.88 3.13963 13.57 4.28963 8.49Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21.2897 8.7C20.2497 4.07 16.2097 2 12.6697 2C12.6697 2 12.6697 2 12.6597 2C9.12967 2 5.09967 4.07 4.04967 8.69C2.86967 13.85 6.02967 18.22 8.88967 20.98C9.94967 22 11.3097 22.51 12.6697 22.51C14.0297 22.51 15.3897 22 16.4397 20.98C19.2997 18.22 22.4597 13.86 21.2897 8.7Z" fill="currentColor" /><path d="M15.4199 10.25H13.4199V8.25C13.4199 7.84 13.0799 7.5 12.6699 7.5C12.2599 7.5 11.9199 7.84 11.9199 8.25V10.25H9.91992C9.50992 10.25 9.16992 10.59 9.16992 11C9.16992 11.41 9.50992 11.75 9.91992 11.75H11.9199V13.75C11.9199 14.16 12.2599 14.5 12.6699 14.5C13.0799 14.5 13.4199 14.16 13.4199 13.75V11.75H15.4199C15.8299 11.75 16.1699 11.41 16.1699 11C16.1699 10.59 15.8299 10.25 15.4199 10.25Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64854)"><path d="M21.2897 8.7C20.2497 4.07 16.2097 2 12.6697 2C12.6697 2 12.6697 2 12.6597 2C9.12967 2 5.09967 4.07 4.04967 8.69C2.86967 13.85 6.02967 18.22 8.88967 20.98C9.94967 22 11.3097 22.51 12.6697 22.51C14.0297 22.51 15.3897 22 16.4397 20.98C19.2997 18.22 22.4597 13.86 21.2897 8.7ZM15.4197 11.75H13.4197V13.75C13.4197 14.16 13.0797 14.5 12.6697 14.5C12.2597 14.5 11.9197 14.16 11.9197 13.75V11.75H9.91967C9.50967 11.75 9.16967 11.41 9.16967 11C9.16967 10.59 9.50967 10.25 9.91967 10.25H11.9197V8.25C11.9197 7.84 12.2597 7.5 12.6697 7.5C13.0797 7.5 13.4197 7.84 13.4197 8.25V10.25H15.4197C15.8297 10.25 16.1697 10.59 16.1697 11C16.1697 11.41 15.8297 11.75 15.4197 11.75Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

export default IconLocationAdd;