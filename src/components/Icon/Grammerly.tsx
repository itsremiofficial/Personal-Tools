import { FC } from 'react';
import { IconProps } from "../../types";

const IconGrammerly: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0707 4.95008C23.0407 8.92008 22.9707 15.4 18.8707 19.29C15.0807 22.88 8.93069 22.88 5.13069 19.29C1.02069 15.4 0.950683 8.92008 4.93068 4.95008C8.83068 1.04008 15.1707 1.04008 19.0707 4.95008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.8399 16.0698C13.7199 18.0698 10.2799 18.0698 8.16992 16.0698" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.2 5.87C12.13 5.87 12.06 5.87 12 5.88V2.00999C12.07 1.99999 12.13 2 12.2 2C14.46 2 16.4 2.69 17.99 3.86C18.49 4.22 18.53 4.95 18.09 5.38L16.7 6.74001C16.36 7.07001 15.84 7.13 15.45 6.86C14.7 6.34 13.63 5.87 12.2 5.87Z" fill="currentColor" /><path d="M21.8 12.2197C21.8 15.2697 20.71 17.8297 18.82 19.5797C17.17 21.1097 14.9 21.9997 12.2 21.9997C12.13 21.9997 12.07 21.9997 12 21.9897V18.1197C12.07 18.1297 12.13 18.1297 12.2 18.1297C13.69 18.1297 14.82 17.7197 15.67 17.1297C17 16.1997 17.6 14.8097 17.71 13.8897H13.2C12.65 13.8897 12.2 13.4397 12.2 12.8897V11.1797C12.2 10.6297 12.65 10.1797 13.2 10.1797H20.75C21.26 10.1797 21.69 10.5597 21.74 11.0697C21.78 11.4197 21.8 11.7897 21.8 12.2197Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M6.49922 10.0198C6.29922 10.6398 6.17922 11.3098 6.17922 11.9998C6.17922 12.6898 6.29922 13.3498 6.50922 13.9798C7.28922 16.3298 9.44922 18.0398 11.9992 18.1198V21.9898C8.17922 21.9198 4.88922 19.6998 3.27922 16.4898H3.26922C2.58922 15.1298 2.19922 13.6098 2.19922 11.9998C2.19922 10.3898 2.58922 8.86977 3.26922 7.50977C4.87922 4.29977 8.16922 2.07977 11.9992 2.00977V5.87978C9.63922 5.94978 7.62922 7.40977 6.70922 9.47977C6.62922 9.65977 6.55922 9.83978 6.49922 10.0198Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconGrammerly;