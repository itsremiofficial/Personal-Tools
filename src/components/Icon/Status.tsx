import { FC } from 'react';
import { IconProps } from "../../types";

const IconStatusUp: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M6.87988 18.1501V16.0801" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M12 18.1498V14.0098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path opacity={duotone ? "0.4" : "1"} d="M17.1201 18.1502V11.9302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M17.1199 5.84961L16.6599 6.38961C14.1099 9.36961 10.6899 11.4796 6.87988 12.4296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M14.1904 5.84961H17.1204V8.76961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.6992 14.46C18.3492 14.81 18.1492 15.52 18.2592 16L18.9492 19.01C19.2392 20.26 19.0592 21.2 18.4392 21.65C18.1892 21.83 17.8892 21.92 17.5392 21.92C17.0292 21.92 16.4292 21.73 15.7692 21.34L12.8392 19.6C12.3892 19.33 11.6092 19.33 11.1592 19.6L8.22922 21.34C7.11922 21.99 6.16922 22.1 5.55922 21.65C5.51922 21.62 5.47922 21.59 5.44922 21.55L18.7992 8.19995L19.9692 8.39995C21.0292 8.57995 21.7392 9.05995 21.9692 9.75995C22.1892 10.46 21.8892 11.27 21.1292 12.03L18.6992 14.46Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.73937 16C5.84937 15.52 5.64937 14.81 5.29937 14.46L2.86937 12.03C2.10937 11.27 1.80937 10.46 2.02937 9.76C2.25937 9.06 2.96937 8.58 4.02937 8.4L7.14937 7.88C7.59937 7.8 8.14937 7.4 8.35937 6.99L10.0794 3.54C10.5794 2.55 11.2594 2 11.9994 2C12.7394 2 13.4194 2.55 13.9194 3.54L15.6394 6.99C15.7694 7.25 16.0394 7.5 16.3294 7.67L5.06937 18.93L5.73937 16Z" fill="currentColor" /><path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconStatusUp;