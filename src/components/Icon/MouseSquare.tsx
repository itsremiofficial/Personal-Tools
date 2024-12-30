import { FC } from 'react';
import { IconProps } from "../../types";

const IconMusic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.28016 21.9998C8.00328 21.9998 9.40016 20.6029 9.40016 18.8798C9.40016 17.1566 8.00328 15.7598 6.28016 15.7598C4.55703 15.7598 3.16016 17.1566 3.16016 18.8798C3.16016 20.6029 4.55703 21.9998 6.28016 21.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.7196 19.9202C19.4427 19.9202 20.8396 18.5233 20.8396 16.8002C20.8396 15.077 19.4427 13.6802 17.7196 13.6802C15.9965 13.6802 14.5996 15.077 14.5996 16.8002C14.5996 18.5233 15.9965 19.9202 17.7196 19.9202Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M20.8404 16.8003V4.60034C20.8404 2.00034 19.2104 1.64034 17.5604 2.09034L11.3204 3.79034C10.1804 4.10034 9.40039 5.00034 9.40039 6.30034V8.47034V9.93034V18.8703" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.40039 9.52039L20.8404 6.40039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconMusic;