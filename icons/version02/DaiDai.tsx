import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconDaiDai: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M8.66992 7V17H12.6699C15.4299 17 17.6699 14.76 17.6699 12C17.6699 9.24 15.4299 7 12.6699 7H8.66992Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.1499 10H19.1899" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.1499 14H19.1899" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z" fill="currentColor" /><path d="M12.6699 17.75H8.66992C8.25992 17.75 7.91992 17.41 7.91992 17V7C7.91992 6.59 8.25992 6.25 8.66992 6.25H12.6699C15.8399 6.25 18.4199 8.83 18.4199 12C18.4199 15.17 15.8399 17.75 12.6699 17.75ZM9.41992 16.25H12.6699C15.0099 16.25 16.9199 14.34 16.9199 12C16.9199 9.66 15.0099 7.75 12.6699 7.75H9.41992V16.25Z" fill="currentColor" /><path d="M19.1899 10.75H7.1499C6.7399 10.75 6.3999 10.41 6.3999 10C6.3999 9.59 6.7399 9.25 7.1499 9.25H19.1899C19.5999 9.25 19.9399 9.59 19.9399 10C19.9399 10.41 19.5999 10.75 19.1899 10.75Z" fill="currentColor" /><path d="M19.1899 14.75H7.1499C6.7399 14.75 6.3999 14.41 6.3999 14C6.3999 13.59 6.7399 13.25 7.1499 13.25H19.1899C19.5999 13.25 19.9399 13.59 19.9399 14C19.9399 14.41 19.5999 14.75 19.1899 14.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 7.75H9.41992V9.25H15.8799C15.0999 8.34 13.9599 7.75 12.6699 7.75Z" fill="none" /><path d="M16.9199 12C16.9199 11.56 16.8299 11.15 16.7099 10.75H9.41992V13.25H16.7099C16.8299 12.85 16.9199 12.44 16.9199 12Z" fill="none" /><path d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM19.1899 14.75H17.7199C16.7399 16.54 14.8499 17.75 12.6699 17.75H8.66992C8.25992 17.75 7.91992 17.41 7.91992 17V14.75H7.1499C6.7399 14.75 6.3999 14.41 6.3999 14C6.3999 13.59 6.7399 13.25 7.1499 13.25H7.91992V10.75H7.1499C6.7399 10.75 6.3999 10.41 6.3999 10C6.3999 9.59 6.7399 9.25 7.1499 9.25H7.91992V7C7.91992 6.59 8.25992 6.25 8.66992 6.25H12.6699C14.8499 6.25 16.7399 7.46 17.7199 9.25H19.1899C19.5999 9.25 19.9399 9.59 19.9399 10C19.9399 10.41 19.5999 10.75 19.1899 10.75H18.2799C18.3699 11.15 18.4199 11.57 18.4199 12C18.4199 12.43 18.3699 12.85 18.2799 13.25H19.1899C19.5999 13.25 19.9399 13.59 19.9399 14C19.9399 14.41 19.5999 14.75 19.1899 14.75Z" fill="none" /><path d="M9.41992 16.25H12.6699C13.9599 16.25 15.0999 15.66 15.8799 14.75H9.41992V16.25Z" fill="none" /></svg> 
      )}
    </>
  );
};

export default IconDaiDai;