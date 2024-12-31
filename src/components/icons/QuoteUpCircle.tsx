import { FC } from 'react';
import { IconProps } from "../../types";

const IconQuoteUpSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M16.9989 11.8398H14.3189C13.6089 11.8398 13.1289 11.2998 13.1289 10.6498V9.15973C13.1289 8.50973 13.6089 7.96973 14.3189 7.96973H15.8089C16.4589 7.96973 16.9989 8.50973 16.9989 9.15973V11.8398Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.0002 11.8398C17.0002 14.6298 16.4802 15.0998 14.9102 16.0298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8602 11.8398H8.18023C7.47023 11.8398 6.99023 11.2998 6.99023 10.6498V9.15973C6.99023 8.50973 7.47023 7.96973 8.18023 7.96973H9.67023C10.3202 7.96973 10.8602 8.50973 10.8602 9.15973V11.8398Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8595 11.8398C10.8595 14.6298 10.3395 15.0998 8.76953 16.0298" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.09027 11.63H3.40027C3.48027 6.95997 4.40026 6.18996 7.27026 4.48996C7.60026 4.28996 7.71025 3.86996 7.51025 3.52996C7.31025 3.19996 6.89023 3.08997 6.55023 3.28997C3.17023 5.28997 1.99023 6.50995 1.99023 12.33V17.72C1.99023 19.43 3.38026 20.81 5.08026 20.81H8.08026C9.84026 20.81 11.1702 19.48 11.1702 17.72V14.72C11.1802 12.96 9.85027 11.63 8.09027 11.63Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M18.9105 11.63H14.2205C14.3005 6.95997 15.2206 6.18996 18.0906 4.48996C18.4206 4.28996 18.5306 3.86996 18.3306 3.52996C18.1306 3.19996 17.7105 3.08997 17.3705 3.28997C13.9905 5.28997 12.8105 6.50995 12.8105 12.33V17.72C12.8105 19.43 14.2006 20.81 15.9006 20.81H18.9006C20.6606 20.81 21.9905 19.48 21.9905 17.72V14.72C22.0005 12.96 20.6705 11.63 18.9105 11.63Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconQuoteUpSquare;