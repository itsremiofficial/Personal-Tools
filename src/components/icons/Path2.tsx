import { FC } from 'react';
import { IconProps } from "../../types";

const IconPathSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M16.7502 9.11998L14.9002 7.26998C14.2002 6.56998 13.2402 6.60998 12.7702 7.34998L11.7402 8.97998L15.0302 12.27L16.6602 11.24C17.3702 10.8 17.4102 9.76998 16.7502 9.11998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7395 8.98017L9.34947 8.84017C8.00947 8.76017 7.54947 9.17017 7.39947 10.4402L6.79947 15.5102C6.66947 16.5802 7.43947 17.3402 8.50947 17.2202L13.5795 16.6202C14.8495 16.4702 15.3095 16.0102 15.1795 14.6702L15.0395 12.2802" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.49023 16.5199L9.34023 14.6699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.0205 10.6999L17.2205 12.4699L11.5605 6.80992L13.3205 4.00992C14.1405 2.71992 15.7805 2.65992 16.9905 3.85992L20.1705 7.03992C21.3005 8.16992 21.2305 9.92992 20.0205 10.6999Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M14.7103 19.95L6.0003 20.98C5.4003 21.05 4.8603 20.96 4.4103 20.74C3.9203 20.5 3.5403 20.12 3.3003 19.63C3.0803 19.18 3.0003 18.64 3.0603 18.05L4.1003 9.32998C4.3503 7.14998 5.1603 6.43999 7.4603 6.56999L11.5803 6.81999L17.2403 12.48L17.4803 16.6C17.6903 18.9 16.9003 19.7 14.7103 19.95Z" fill="currentColor" /><path d="M7.97906 17.1502L4.39906 20.7302C3.90906 20.4902 3.52906 20.1102 3.28906 19.6202L6.87906 16.0302C7.18906 15.7302 7.68906 15.7302 7.98906 16.0302C8.29906 16.3502 8.29906 16.8402 7.97906 17.1502Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPathSquare;