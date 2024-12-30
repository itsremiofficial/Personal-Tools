import { FC } from 'react';
import { IconProps } from "../../types";

const IconShieldSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5902 10.5501V7.12006C20.5902 5.89006 19.6502 4.53006 18.5002 4.10006L13.5102 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.1402 21.7401 11.0702 22.0001 12.0002 22.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M20.9955 21H21.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M20.4098 6.95994V9.79994L7.39984 19.3399L4.76984 17.3699C4.11984 16.8799 3.58984 15.8299 3.58984 15.0199V6.95994C3.58984 5.83994 4.44984 4.59994 5.49984 4.20994L10.9698 2.15994C11.5398 1.94994 12.4598 1.94994 13.0298 2.15994L18.4998 4.20994C19.5498 4.59994 20.4098 5.83994 20.4098 6.95994Z" fill="currentColor" /><path d="M20.4103 11.1699V15.0199C20.4103 15.8299 19.8803 16.8799 19.2303 17.3699L13.7603 21.4599C13.2803 21.8199 12.6403 21.9999 12.0003 21.9999C11.3603 21.9999 10.7203 21.8199 10.2403 21.4599L8.32031 20.0299L20.4103 11.1699Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconShieldSearch;