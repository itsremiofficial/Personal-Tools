import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconCupMusic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16Z" stroke="currentColor" strokeWidth={width} /><path d="M13 10.5V7.5V5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="11.5" cy="10.5" r="1.5" stroke="currentColor" strokeWidth={width} /><path d="M15 7C13.8954 7 13 6.10457 13 5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M19 5L19.9486 5.31621C20.9387 5.64623 21.4337 5.81124 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.87809C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L17.5 12.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M4.99994 5L4.05132 5.31621C3.06126 5.64623 2.56623 5.81124 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.87809C2.41441 10.2302 2.79063 10.4392 3.54305 10.8572L6.49994 12.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 16V19" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M15.5 22H8.5L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.5 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M18 22H6" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16Z" fill="currentColor" /><path d="M17.6404 12.422L20.4569 10.8572C21.2093 10.4392 21.5855 10.2302 21.7927 9.87809C21.9999 9.52598 21.9999 9.09561 21.9999 8.23487L21.9999 8.16234C22 7.11873 22 6.59692 21.7168 6.20408C21.4337 5.81124 20.9387 5.64623 19.9486 5.31621L19 5L18.9831 5.08464C18.9784 5.27391 18.9702 5.48006 18.9612 5.70645C18.8729 7.93085 18.5842 10.4387 17.6404 12.422Z" fill="currentColor" /><path d="M5.03907 5.70647C5.12739 7.93096 5.41612 10.4389 6.36008 12.4223L3.54305 10.8572C2.79063 10.4392 2.41442 10.2302 2.20723 9.87809C2.00004 9.52598 2.00003 9.09561 2 8.23487L2 8.16234C1.99997 7.11874 1.99996 6.59692 2.2831 6.20408C2.56624 5.81124 3.06126 5.64623 4.05132 5.31621L4.99994 5L5.01728 5.08671C5.02196 5.27541 5.03011 5.4809 5.03907 5.70647Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.25 22C5.25 21.5858 5.58579 21.25 6 21.25H18C18.4142 21.25 18.75 21.5858 18.75 22C18.75 22.4142 18.4142 22.75 18 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M15.4577 21.25H8.54248L8.8393 19.5002C8.93278 19.0327 9.3432 18.6963 9.81988 18.6963H14.1803C14.657 18.6963 15.0674 19.0327 15.1609 19.5002L15.4577 21.25Z" fill="currentColor" /><path d="M12.0002 16.0002C11.7406 16.0002 11.4907 15.9885 11.25 15.9658V18.6963H12.75V15.9658C12.5094 15.9885 12.2596 16.0002 12.0002 16.0002Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13 4.25C13.4142 4.25 13.75 4.58579 13.75 5C13.75 5.69036 14.3096 6.25 15 6.25C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75C14.5499 7.75 14.125 7.64186 13.75 7.45015V10.5C13.75 11.7426 12.7426 12.75 11.5 12.75C10.2574 12.75 9.25 11.7426 9.25 10.5C9.25 9.25736 10.2574 8.25 11.5 8.25C11.763 8.25 12.0154 8.29512 12.25 8.37803V5C12.25 4.58579 12.5858 4.25 13 4.25ZM11.5 9.75C11.9142 9.75 12.25 10.0858 12.25 10.5C12.25 10.9142 11.9142 11.25 11.5 11.25C11.0858 11.25 10.75 10.9142 10.75 10.5C10.75 10.0858 11.0858 9.75 11.5 9.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3164 11.2666C11.8687 11.2666 12.3164 10.8189 12.3164 10.2666C12.3164 9.71432 11.8687 9.2666 11.3164 9.2666C10.7641 9.2666 10.3164 9.71432 10.3164 10.2666C10.3164 10.8189 10.7641 11.2666 11.3164 11.2666Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7886 10.0545 17.8503 15.4853 12.75 15.9657V19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.35 21.25H18C18.4142 21.25 18.75 21.5858 18.75 22C18.75 22.4142 18.4142 22.75 18 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22C5.25 21.5858 5.58579 21.25 6 21.25H8.65L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H11.25V15.9657C6.14996 15.4851 5.21169 10.0544 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2ZM13.5 4.75C13.5 4.33579 13.1642 4 12.75 4C12.3358 4 12 4.33579 12 4.75V8.12803C11.7654 8.04512 11.513 8 11.25 8C10.0074 8 9 9.00736 9 10.25C9 11.4926 10.0074 12.5 11.25 12.5C12.4926 12.5 13.5 11.4926 13.5 10.25V7.20015C13.875 7.39186 14.2999 7.5 14.75 7.5C15.1642 7.5 15.5 7.16421 15.5 6.75C15.5 6.33579 15.1642 6 14.75 6C14.0596 6 13.5 5.44036 13.5 4.75Z" fill="currentColor" /><path d="M2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.8781C2.41442 10.2302 2.79063 10.4392 3.54304 10.8572L4.33681 11.2982C3.79007 9.45001 3.60767 7.46422 3.54025 5.76597C3.53736 5.69318 3.53411 5.61949 3.53081 5.54502L3.5285 5.49266C2.87701 5.7189 2.51126 5.88752 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234Z" fill="currentColor" /><path d="M21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.8781C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L19.6636 11.298C20.2102 9.44984 20.3926 7.46414 20.4601 5.76597C20.4629 5.69316 20.4662 5.61945 20.4695 5.54497L20.4718 5.49279C21.1231 5.71896 21.4887 5.88758 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconCupMusic;