import { FC } from 'react';
import { IconProps } from "../../types";

const IconPauseCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.72 14.5298V9.4698C10.72 8.9898 10.52 8.7998 10.01 8.7998H8.71C8.2 8.7998 8 8.9898 8 9.4698V14.5298C8 15.0098 8.2 15.1998 8.71 15.1998H10C10.52 15.1998 10.72 15.0098 10.72 14.5298Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.9991 14.5298V9.4698C15.9991 8.9898 15.7991 8.7998 15.2891 8.7998H13.9991C13.4891 8.7998 13.2891 8.9898 13.2891 9.4698V14.5298C13.2891 15.0098 13.4891 15.1998 13.9991 15.1998H15.2891C15.7991 15.1998 15.9991 15.0098 15.9991 14.5298Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M16.6602 11.25L15.0402 12.27L11.7402 8.97998L12.7702 7.34998C13.2402 6.60998 14.2002 6.56998 14.9002 7.26998L16.7502 9.11998C17.4102 9.76998 17.3702 10.8 16.6602 11.25Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M13.5796 16.6202L8.50958 17.2202C8.28958 17.2502 8.08958 17.2402 7.89958 17.1802C7.34958 17.0602 6.95958 16.6702 6.83958 16.1202C6.77958 15.9302 6.76958 15.7302 6.79958 15.5102L7.38958 10.4402C7.54958 9.17017 8.00958 8.76017 9.34958 8.84017L11.7396 8.98017L15.0396 12.2702L15.1796 14.6702C15.3096 16.0102 14.8496 16.4702 13.5796 16.6202Z" fill="currentColor" /><path d="M9.87984 15.1999L7.89984 17.1799C7.34984 17.0599 6.95984 16.6699 6.83984 16.1199L8.80984 14.1399C9.10984 13.8499 9.57984 13.8499 9.87984 14.1399C10.1698 14.4299 10.1698 14.9099 9.87984 15.1999Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPauseCircle;