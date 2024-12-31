import { FC } from 'react';
import { IconProps } from "../../types";

const IconEraser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M6.98945 15.0798L8.92944 17.0198C9.56944 17.6598 10.6295 17.6598 11.2695 17.0198L17.0195 11.2698C17.6595 10.6298 17.6595 9.56975 17.0195 8.92975L15.0794 6.98977C14.4394 6.34977 13.3795 6.34977 12.7395 6.98977L6.98945 12.7398C6.33945 13.3798 6.33945 14.4298 6.98945 15.0798Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.30859 10.4199L13.5786 14.6899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor" /><path d="M10.6395 9.49994C10.4495 9.49994 10.2595 9.42994 10.1095 9.27994C9.39945 8.56994 8.23945 8.56994 7.52945 9.27994C7.23945 9.56994 6.75945 9.56994 6.46945 9.27994C6.17945 8.98994 6.17945 8.50994 6.46945 8.21994C7.75945 6.92994 9.86945 6.92994 11.1695 8.21994C11.4595 8.50994 11.4595 8.98994 11.1695 9.27994C11.0195 9.42994 10.8295 9.49994 10.6395 9.49994Z" fill="currentColor" /><path d="M13.3608 9.49994C13.1708 9.49994 12.9808 9.42994 12.8308 9.27994C12.5408 8.98994 12.5408 8.50994 12.8308 8.21994C14.1208 6.92994 16.2308 6.92994 17.5308 8.21994C17.8208 8.50994 17.8208 8.98994 17.5308 9.27994C17.2408 9.56994 16.7608 9.56994 16.4708 9.27994C15.7608 8.56994 14.6008 8.56994 13.8908 9.27994C13.7508 9.42994 13.5608 9.49994 13.3608 9.49994Z" fill="currentColor" /><path d="M11.9991 11.9199C9.30914 11.9199 7.11914 14.1099 7.11914 16.7999C7.11914 17.4999 7.68914 18.0799 8.38914 18.0799H15.5891C16.2891 18.0799 16.8591 17.5099 16.8591 16.7999C16.8791 14.1099 14.6891 11.9199 11.9991 11.9199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconEraser;