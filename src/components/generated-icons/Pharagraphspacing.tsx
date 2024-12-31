import { FC } from 'react';
import { IconProps } from "@/types";

const IconPharagraphspacing: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 2H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.8299 7.71965L11.9999 4.88965L9.16992 7.71965" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.8299 15.8896L11.9999 18.7196L9.16992 15.8896" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M21 2.75H3C2.59 2.75 2.25 2.41 2.25 2C2.25 1.59 2.59 1.25 3 1.25H21C21.41 1.25 21.75 1.59 21.75 2C21.75 2.41 21.41 2.75 21 2.75Z" fill="currentColor" /><path d="M14.2994 15.3599L12.7494 16.9099V6.6999L14.2994 8.2499C14.4494 8.3999 14.6394 8.4699 14.8294 8.4699C15.0194 8.4699 15.2094 8.3999 15.3594 8.2499C15.6494 7.9599 15.6494 7.4799 15.3594 7.1899L12.5294 4.3599C12.2494 4.0799 11.7494 4.0799 11.4694 4.3599L8.63938 7.1899C8.34938 7.4799 8.34938 7.9599 8.63938 8.2499C8.92937 8.5399 9.40937 8.5399 9.69937 8.2499L11.2494 6.6999V16.9099L9.69937 15.3599C9.40937 15.0699 8.92937 15.0699 8.63938 15.3599C8.34938 15.6499 8.34938 16.1299 8.63938 16.4199L11.4694 19.2499C11.6094 19.3899 11.7994 19.4699 11.9994 19.4699C12.1994 19.4699 12.3894 19.3899 12.5294 19.2499L15.3594 16.4199C15.6494 16.1299 15.6494 15.6499 15.3594 15.3599C15.0694 15.0699 14.5894 15.0699 14.2994 15.3599Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconPharagraphspacing;