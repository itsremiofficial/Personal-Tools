import { FC } from 'react';
import { IconProps } from "../../types";

const IconMusicDashboard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7 2.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M11.4705 16.7998C12.2934 16.7998 12.9605 16.1327 12.9605 15.3098C12.9605 14.4869 12.2934 13.8198 11.4705 13.8198C10.6476 13.8198 9.98047 14.4869 9.98047 15.3098C9.98047 16.1327 10.6476 16.7998 11.4705 16.7998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.4309 14.3098V8.47977C18.4309 7.23977 17.6509 7.06982 16.8609 7.27982L13.8809 8.08982C13.3409 8.23982 12.9609 8.66977 12.9609 9.28977V10.3298V11.0298V15.2998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16.9314 15.7998C17.7543 15.7998 18.4214 15.1327 18.4214 14.3098C18.4214 13.4869 17.7543 12.8198 16.9314 12.8198C16.1085 12.8198 15.4414 13.4869 15.4414 14.3098C15.4414 15.1327 16.1085 15.7998 16.9314 15.7998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.9609 11.0398L18.4309 9.5498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.2894 10.3398V18.4098C10.2894 20.3898 8.66937 21.9998 6.69937 21.9998C4.71937 21.9998 3.10938 20.3898 3.10938 18.4098C3.10938 16.4398 4.71937 14.8298 6.69937 14.8298C7.52938 14.8298 8.27938 15.1198 8.88938 15.5898V10.7398L10.2894 10.3398Z" fill="currentColor" /><path d="M20.8909 7.31982V16.4798C20.8909 18.4598 19.2809 20.0698 17.3009 20.0698C15.3309 20.0698 13.7109 18.4598 13.7109 16.4798C13.7109 14.5098 15.3309 12.8998 17.3009 12.8998C18.1409 12.8998 18.8909 13.1898 19.5009 13.6698V7.71982L20.8909 7.31982Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.8906 5.18007V7.32007L8.89062 10.7401V6.75007C8.89062 5.28007 9.78062 4.14007 11.1906 3.76007L16.9706 2.18007C18.1406 1.86007 19.1306 1.97007 19.8306 2.51007C20.5406 3.04007 20.8906 3.94007 20.8906 5.18007Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMusicDashboard;