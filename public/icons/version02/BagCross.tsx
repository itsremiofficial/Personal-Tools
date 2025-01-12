import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconBagCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 19C14.8791 19 16.6699 17.2091 16.6699 15C16.6699 12.7909 14.8791 11 12.6699 11C10.4608 11 8.66992 12.7909 8.66992 15C8.66992 17.2091 10.4608 19 12.6699 19Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M13.7391 16.11L11.6191 14" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.7196 14.0195L11.5996 16.1395" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M9.66975 22H15.6697C19.6897 22 20.4097 20.39 20.6197 18.43L21.3697 12.43C21.6397 9.99 20.9397 8 16.6697 8H8.66975C4.39975 8 3.69975 9.99 3.96975 12.43L4.71975 18.43C4.92975 20.39 5.64975 22 9.66975 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.16992 7.67001V6.70001C8.16992 4.45001 9.97992 2.24001 12.2299 2.03001C14.9099 1.77001 17.1699 3.88001 17.1699 6.51001V7.89001" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M16.8603 8.8599C16.4703 8.8599 16.1603 8.5499 16.1603 8.1599V6.8799C16.1603 5.8999 15.7403 4.9599 15.0203 4.2999C14.2803 3.6299 13.3303 3.3199 12.3303 3.4099C10.6503 3.5699 9.18027 5.2799 9.18027 7.0599V7.9599C9.18027 8.3499 8.87027 8.6599 8.48027 8.6599C8.09027 8.6599 7.78027 8.3499 7.78027 7.9599V7.0599C7.78027 4.5599 9.80027 2.2499 12.1903 2.0199C13.5803 1.8899 14.9203 2.3299 15.9503 3.2699C16.9703 4.1899 17.5503 5.5099 17.5503 6.8799V8.1599C17.5503 8.5499 17.2403 8.8599 16.8603 8.8599Z" fill="currentColor" /><path d="M20.6297 8.96008C19.7897 8.03008 18.4097 7.58008 16.3897 7.58008H8.94967C6.92967 7.58008 5.54967 8.03008 4.70967 8.96008C3.73967 10.0401 3.76967 11.4801 3.87967 12.4801L4.57967 18.0501C4.78967 20.0001 5.57967 22.0001 9.87967 22.0001H15.4597C19.7597 22.0001 20.5497 20.0001 20.7597 18.0601L21.4597 12.4701C21.5697 11.4801 21.5997 10.0401 20.6297 8.96008ZM12.6697 18.5801C10.5797 18.5801 8.87967 16.8801 8.87967 14.7901C8.87967 12.7001 10.5797 11.0001 12.6697 11.0001C14.7597 11.0001 16.4597 12.7001 16.4597 14.7901C16.4597 16.8801 14.7597 18.5801 12.6697 18.5801Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 18.58C14.763 18.58 16.4599 16.8832 16.4599 14.79C16.4599 12.6968 14.763 11 12.6699 11C10.5767 11 8.87988 12.6968 8.87988 14.79C8.87988 16.8832 10.5767 18.58 12.6699 18.58Z" fill="currentColor" /><path d="M14.27 15.3102L13.74 14.7802L14.24 14.2802C14.53 13.9902 14.53 13.5102 14.24 13.2202C13.95 12.9302 13.47 12.9302 13.18 13.2202L12.68 13.7202L12.15 13.1902C11.86 12.9002 11.38 12.9002 11.09 13.1902C10.8 13.4802 10.8 13.9602 11.09 14.2502L11.62 14.7802L11.07 15.3302C10.78 15.6202 10.78 16.1002 11.07 16.3902C11.22 16.5402 11.41 16.6102 11.6 16.6102C11.79 16.6102 11.98 16.5402 12.13 16.3902L12.68 15.8402L13.21 16.3702C13.36 16.5202 13.55 16.5902 13.74 16.5902C13.93 16.5902 14.12 16.5202 14.27 16.3702C14.56 16.0802 14.56 15.6102 14.27 15.3102Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6297 8.9599C19.9597 8.2199 18.9497 7.7899 17.5497 7.6399V6.8799C17.5497 5.5099 16.9697 4.1899 15.9497 3.2699C14.9197 2.3299 13.5797 1.8899 12.1897 2.0199C9.79967 2.2499 7.78967 4.5599 7.78967 7.0599V7.6399C6.38967 7.7899 5.37967 8.2199 4.70967 8.9599C3.73967 10.0399 3.76967 11.4799 3.87967 12.4799L4.57967 18.0499C4.78967 19.9999 5.57967 21.9999 9.87967 21.9999H15.4597C19.7597 21.9999 20.5497 19.9999 20.7597 18.0599L21.4597 12.4699C21.5697 11.4799 21.5997 10.0399 20.6297 8.9599ZM12.3297 3.4099C13.3297 3.3199 14.2797 3.6299 15.0197 4.2999C15.7497 4.9599 16.1597 5.8999 16.1597 6.8799V7.5799H9.17967V7.0599C9.17967 5.2799 10.6497 3.5699 12.3297 3.4099ZM12.6697 18.5799C10.5797 18.5799 8.87967 16.8799 8.87967 14.7899C8.87967 12.6999 10.5797 10.9999 12.6697 10.9999C14.7597 10.9999 16.4597 12.6999 16.4597 14.7899C16.4597 16.8799 14.7597 18.5799 12.6697 18.5799Z" fill="currentColor" /><path d="M14.27 15.3102L13.74 14.7802L14.24 14.2802C14.53 13.9902 14.53 13.5102 14.24 13.2202C13.95 12.9302 13.47 12.9302 13.18 13.2202L12.68 13.7202L12.15 13.1902C11.86 12.9002 11.38 12.9002 11.09 13.1902C10.8 13.4802 10.8 13.9602 11.09 14.2502L11.62 14.7802L11.07 15.3302C10.78 15.6202 10.78 16.1002 11.07 16.3902C11.22 16.5402 11.41 16.6102 11.6 16.6102C11.79 16.6102 11.98 16.5402 12.13 16.3902L12.68 15.8402L13.21 16.3702C13.36 16.5202 13.55 16.5902 13.74 16.5902C13.93 16.5902 14.12 16.5202 14.27 16.3702C14.56 16.0802 14.56 15.6102 14.27 15.3102Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBagCross;