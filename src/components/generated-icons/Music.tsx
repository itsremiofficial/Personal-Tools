import { FC } from 'react';
import { IconProps } from "@/types";

const IconMusic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.28016 21.9998C8.00328 21.9998 9.40016 20.6029 9.40016 18.8798C9.40016 17.1566 8.00328 15.7598 6.28016 15.7598C4.55703 15.7598 3.16016 17.1566 3.16016 18.8798C3.16016 20.6029 4.55703 21.9998 6.28016 21.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.7196 19.9202C19.4427 19.9202 20.8396 18.5233 20.8396 16.8002C20.8396 15.077 19.4427 13.6802 17.7196 13.6802C15.9965 13.6802 14.5996 15.077 14.5996 16.8002C14.5996 18.5233 15.9965 19.9202 17.7196 19.9202Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M20.8404 16.8003V4.60034C20.8404 2.00034 19.2104 1.64034 17.5604 2.09034L11.3204 3.79034C10.1804 4.10034 9.40039 5.00034 9.40039 6.30034V8.47034V9.93034V18.8703" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.40039 9.52039L20.8404 6.40039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.2894 10.3398V18.4098C10.2894 20.3898 8.66937 21.9998 6.69937 21.9998C4.71937 21.9998 3.10938 20.3898 3.10938 18.4098C3.10938 16.4398 4.71937 14.8298 6.69937 14.8298C7.52938 14.8298 8.27938 15.1198 8.88938 15.5898V10.7398L10.2894 10.3398Z" fill="currentColor" /><path d="M20.8909 7.31982V16.4798C20.8909 18.4598 19.2809 20.0698 17.3009 20.0698C15.3309 20.0698 13.7109 18.4598 13.7109 16.4798C13.7109 14.5098 15.3309 12.8998 17.3009 12.8998C18.1409 12.8998 18.8909 13.1898 19.5009 13.6698V7.71982L20.8909 7.31982Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M20.8906 5.18007V7.32007L8.89062 10.7401V6.75007C8.89062 5.28007 9.78062 4.14007 11.1906 3.76007L16.9706 2.18007C18.1406 1.86007 19.1306 1.97007 19.8306 2.51007C20.5406 3.04007 20.8906 3.94007 20.8906 5.18007Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMusic;