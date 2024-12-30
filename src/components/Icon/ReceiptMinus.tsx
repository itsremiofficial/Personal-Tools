import { FC } from 'react';
import { IconProps } from "../../types";

const IconReceiptSearch: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 22L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6.00008V8.42008C22 10.0001 21 11.0001 19.42 11.0001H16V4.01008C16 2.90008 16.91 1.99008 18.02 2.00008C19.11 2.01008 20.11 2.45008 20.83 3.17008C21.55 3.90008 22 4.90008 22 6.00008Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" fill="currentColor" /><path d="M12 12.2598H9C8.59 12.2598 8.25 12.5998 8.25 13.0098C8.25 13.4198 8.59 13.7598 9 13.7598H12C12.41 13.7598 12.75 13.4198 12.75 13.0098C12.75 12.5998 12.41 12.2598 12 12.2598Z" fill="currentColor" /><path d="M9 9.75977H12C12.41 9.75977 12.75 9.41977 12.75 9.00977C12.75 8.59977 12.41 8.25977 12 8.25977H9C8.59 8.25977 8.25 8.59977 8.25 9.00977C8.25 9.41977 8.59 9.75977 9 9.75977Z" fill="currentColor" /><path d="M5.9707 8.00977C5.4107 8.00977 4.9707 8.45977 4.9707 9.00977C4.9707 9.55977 5.4207 10.0098 5.9707 10.0098C6.5207 10.0098 6.9707 9.55977 6.9707 9.00977C6.9707 8.45977 6.5207 8.00977 5.9707 8.00977Z" fill="currentColor" /><path d="M5.9707 12.0098C5.4107 12.0098 4.9707 12.4598 4.9707 13.0098C4.9707 13.5598 5.4207 14.0098 5.9707 14.0098C6.5207 14.0098 6.9707 13.5598 6.9707 13.0098C6.9707 12.4598 6.5207 12.0098 5.9707 12.0098Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconReceiptSearch;