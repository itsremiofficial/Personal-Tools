import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconBucketCircle: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M10.0799 15.9499L7.68984 13.56C6.88984 12.76 6.88984 11.9599 7.68984 11.1699L11.6799 7.17993L16.0698 11.5699C16.2898 11.7899 16.2898 12.1499 16.0698 12.3699L12.4799 15.9599C11.6799 16.7499 10.8799 16.7499 10.0799 15.9499Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.8799 6.37988L11.6799 7.17987" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.12988 12.3299L16.1599 11.9399" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M17.14 14.1699C17.14 14.1699 16.04 15.3699 16.04 16.0999C16.04 16.7099 16.54 17.1998 17.14 17.1998C17.75 17.1998 18.2401 16.6999 18.2401 16.0999C18.2501 15.3599 17.14 14.1699 17.14 14.1699Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M16.3304 11.93C16.3204 11.79 16.2604 11.64 16.1604 11.54L11.4604 6.84001L10.9104 6.28996C10.7204 6.09996 10.4204 6.09996 10.2304 6.28996C10.0404 6.47996 10.0404 6.77995 10.2304 6.96995L10.7804 7.52L7.18039 11.12C6.77039 11.53 6.55038 11.95 6.54038 12.36C6.53038 12.8 6.74039 13.24 7.18039 13.68L9.75037 16.25C10.6104 17.1 11.4704 17.1 12.3204 16.25L16.1704 12.4C16.2804 12.27 16.3404 12.09 16.3304 11.93Z" fill="currentColor" /><path d="M17.6308 14.1899C17.4708 14.0099 17.1608 14.0099 16.9908 14.1899C16.7908 14.3999 15.8008 15.5199 15.8008 16.3599C15.8008 17.1899 16.4708 17.8599 17.3008 17.8599C18.1308 17.8599 18.8008 17.1899 18.8008 16.3599C18.8108 15.5199 17.8308 14.4099 17.6308 14.1899Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM12.2999 16.25C11.4499 17.1 10.5899 17.1 9.72992 16.25L7.16992 13.68C6.72992 13.24 6.51992 12.8 6.52992 12.35C6.53992 11.93 6.75992 11.52 7.16992 11.11L10.7699 7.51L10.2099 6.96C10.0199 6.77 10.0199 6.47 10.2099 6.28C10.3999 6.09 10.6999 6.09 10.8899 6.28L11.4399 6.83L16.1399 11.53C16.2399 11.63 16.3099 11.78 16.3099 11.92C16.3199 12.09 16.2699 12.26 16.1399 12.39L12.2999 16.25ZM17.3099 17.86C16.4799 17.86 15.8099 17.19 15.8099 16.36C15.8099 15.52 16.7999 14.41 16.9999 14.19C17.1599 14.01 17.4699 14.01 17.6399 14.19C17.8399 14.4 18.8299 15.52 18.8299 16.36C18.8099 17.19 18.1399 17.86 17.3099 17.86Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconBucketCircle;