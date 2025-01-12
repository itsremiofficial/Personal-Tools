import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconMessageRemove: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.42993V13.4299C22.6699 14.9299 22.1699 16.1799 21.2899 17.0599C20.4199 17.9299 19.1699 18.4299 17.6699 18.4299V20.5599C17.6699 21.3599 16.7799 21.84 16.1199 21.4L11.6699 18.4299H9.54993C9.62993 18.1299 9.66992 17.8199 9.66992 17.4999C9.66992 16.4799 9.27992 15.54 8.63992 14.83C7.91992 14.01 6.84992 13.4999 5.66992 13.4999C4.54992 13.4999 3.52993 13.96 2.79993 14.71C2.70993 14.31 2.66992 13.8799 2.66992 13.4299V7.42993C2.66992 4.42993 4.66992 2.42993 7.66992 2.42993H17.6699C20.6699 2.42993 22.6699 4.42993 22.6699 7.42993Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.66992 17.5C9.66992 17.82 9.62993 18.13 9.54993 18.43C9.45993 18.83 9.29994 19.22 9.08994 19.56C8.39994 20.72 7.12992 21.5 5.66992 21.5C4.63992 21.5 3.70992 21.11 3.00992 20.47C2.70992 20.21 2.44991 19.9 2.24991 19.56C1.87991 18.96 1.66992 18.25 1.66992 17.5C1.66992 16.42 2.09993 15.43 2.79993 14.71C3.52993 13.96 4.54992 13.5 5.66992 13.5C6.84992 13.5 7.91992 14.01 8.63992 14.83C9.27992 15.54 9.66992 16.48 9.66992 17.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.73914 18.5399L4.61914 16.4299" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.7196 16.46L4.59961 18.5699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.16992 10.5H16.1699" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22.6699 7.42993V13.4299C22.6699 14.9299 22.1699 16.1799 21.2899 17.0599C20.4199 17.9299 19.1699 18.4299 17.6699 18.4299V20.5599C17.6699 21.3599 16.7799 21.84 16.1199 21.4L11.6699 18.4299H9.54993C9.62993 18.1299 9.66992 17.8199 9.66992 17.4999C9.66992 16.4799 9.27992 15.54 8.63992 14.83C7.91992 14.01 6.84992 13.4999 5.66992 13.4999C4.54992 13.4999 3.52993 13.96 2.79993 14.71C2.70993 14.31 2.66992 13.8799 2.66992 13.4299V7.42993C2.66992 4.42993 4.66992 2.42993 7.66992 2.42993H17.6699C20.6699 2.42993 22.6699 4.42993 22.6699 7.42993Z" fill="currentColor" /><path d="M16.1699 11.25H9.16992C8.75992 11.25 8.41992 10.91 8.41992 10.5C8.41992 10.09 8.75992 9.75 9.16992 9.75H16.1699C16.5799 9.75 16.9199 10.09 16.9199 10.5C16.9199 10.91 16.5799 11.25 16.1699 11.25Z" fill="currentColor" /><path d="M8.63992 14.83C7.91992 14.01 6.84992 13.5 5.66992 13.5C3.45992 13.5 1.66992 15.29 1.66992 17.5C1.66992 18.25 1.87991 18.96 2.24991 19.56C2.44991 19.9 2.70992 20.21 3.00992 20.47C3.70992 21.11 4.63992 21.5 5.66992 21.5C7.12992 21.5 8.39994 20.72 9.08994 19.56C9.45994 18.96 9.66992 18.25 9.66992 17.5C9.66992 16.48 9.27992 15.54 8.63992 14.83ZM7.26993 19.08C7.11993 19.23 6.92993 19.3 6.73993 19.3C6.54993 19.3 6.35993 19.23 6.20993 19.08L5.67993 18.55L5.12991 19.1C4.97991 19.25 4.78991 19.32 4.59991 19.32C4.40991 19.32 4.21992 19.25 4.06992 19.1C3.77992 18.81 3.77992 18.33 4.06992 18.04L4.61993 17.49L4.08994 16.96C3.79994 16.67 3.79994 16.19 4.08994 15.9C4.37994 15.61 4.85993 15.61 5.14993 15.9L5.67993 16.43L6.17993 15.93C6.46993 15.64 6.94993 15.64 7.23993 15.93C7.52993 16.22 7.52993 16.7 7.23993 16.99L6.73993 17.49L7.26993 18.02C7.55993 18.31 7.55993 18.78 7.26993 19.08Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.63992 14.83C7.91992 14.01 6.84992 13.5 5.66992 13.5C3.45992 13.5 1.66992 15.29 1.66992 17.5C1.66992 18.25 1.87992 18.96 2.24992 19.56C2.44992 19.9 2.70992 20.21 3.00992 20.47C3.70992 21.11 4.63992 21.5 5.66992 21.5C7.12992 21.5 8.39992 20.72 9.08992 19.56C9.45992 18.96 9.66992 18.25 9.66992 17.5C9.66992 16.48 9.27992 15.54 8.63992 14.83ZM7.26992 19.08C7.11992 19.23 6.92992 19.3 6.73992 19.3C6.54992 19.3 6.35992 19.23 6.20992 19.08L5.67992 18.55L5.12992 19.1C4.97992 19.25 4.78992 19.32 4.59992 19.32C4.40992 19.32 4.21992 19.25 4.06992 19.1C3.77992 18.81 3.77992 18.33 4.06992 18.04L4.61992 17.49L4.08992 16.96C3.79992 16.67 3.79992 16.19 4.08992 15.9C4.37992 15.61 4.85992 15.61 5.14992 15.9L5.67992 16.43L6.17992 15.93C6.46992 15.64 6.94992 15.64 7.23992 15.93C7.52992 16.22 7.52992 16.7 7.23992 16.99L6.73992 17.49L7.26992 18.02C7.55992 18.31 7.55992 18.78 7.26992 19.08Z" fill="currentColor" /><path d="M17.9199 2.42993H8.41992C5.56992 2.42993 3.66992 4.32993 3.66992 7.17993V11.6399C3.66992 11.9899 4.02992 12.2399 4.36992 12.1499C4.78992 12.0499 5.21992 11.9999 5.66992 11.9999C8.52992 11.9999 10.8899 14.3199 11.1499 17.1299C11.1699 17.4099 11.3999 17.6299 11.6699 17.6299H12.2199L16.4499 20.4499C17.0699 20.8699 17.9199 20.4099 17.9199 19.6499V17.6299C19.3399 17.6299 20.5299 17.1499 21.3599 16.3299C22.1899 15.4899 22.6699 14.2999 22.6699 12.8799V7.17993C22.6699 4.32993 20.7699 2.42993 17.9199 2.42993ZM16.4999 10.8099H9.83992C9.44992 10.8099 9.12992 10.4899 9.12992 10.0999C9.12992 9.69993 9.44992 9.37993 9.83992 9.37993H16.4999C16.8899 9.37993 17.2099 9.69993 17.2099 10.0999C17.2099 10.4899 16.8899 10.8099 16.4999 10.8099Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMessageRemove;