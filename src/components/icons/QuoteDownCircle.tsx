import { FC } from 'react';
import { IconProps } from "../../types";

const IconQuoteDownSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M7 12.1597H9.68C10.39 12.1597 10.87 12.6997 10.87 13.3497V14.8397C10.87 15.4897 10.39 16.0297 9.68 16.0297H8.19C7.54 16.0297 7 15.4897 7 14.8397V12.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 12.1597C7 9.36973 7.52 8.89973 9.09 7.96973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1406 12.1597H15.8206C16.5306 12.1597 17.0106 12.6997 17.0106 13.3497V14.8397C17.0106 15.4897 16.5306 16.0297 15.8206 16.0297H14.3306C13.6806 16.0297 13.1406 15.4897 13.1406 14.8397V12.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.1406 12.1597C13.1406 9.36973 13.6606 8.89973 15.2306 7.96973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.9101 12.3699H20.6001C20.5201 17.0399 19.6001 17.8099 16.7301 19.5099C16.4001 19.7099 16.2901 20.1299 16.4901 20.4699C16.6901 20.7999 17.1101 20.91 17.4501 20.71C20.8301 18.71 22.0101 17.4899 22.0101 11.6699V6.27997C22.0101 4.56997 20.6201 3.18994 18.9201 3.18994H15.9201C14.1601 3.18994 12.8301 4.51997 12.8301 6.27997V9.27997C12.8201 11.04 14.1501 12.3699 15.9101 12.3699Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M5.08982 12.3699H9.77982C9.69982 17.0399 8.77982 17.8099 5.90982 19.5099C5.57982 19.7099 5.46982 20.1299 5.66982 20.4699C5.86982 20.7999 6.28982 20.91 6.62982 20.71C10.0098 18.71 11.1898 17.4899 11.1898 11.6699V6.27997C11.1898 4.56997 9.79982 3.18994 8.09982 3.18994H5.09982C3.33982 3.18994 2.00982 4.51997 2.00982 6.27997V9.27997C1.99982 11.04 3.32982 12.3699 5.08982 12.3699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconQuoteDownSquare;