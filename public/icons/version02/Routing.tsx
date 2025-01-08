import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconRouting: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M2.73998 4.59988C3.53998 1.13988 8.74998 1.13988 9.53998 4.59988C10.01 6.62988 8.71998 8.34988 7.59998 9.41988C6.77998 10.1999 5.48998 10.1899 4.66998 9.41988C3.55998 8.34988 2.26998 6.62988 2.73998 4.59988Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.4" : "1"} d="M15.7399 16.5999C16.5399 13.1399 21.7799 13.1399 22.5799 16.5999C23.0499 18.6299 21.7599 20.3499 20.6299 21.4199C19.8099 22.1999 18.5099 22.1899 17.6899 21.4199C16.5599 20.3499 15.2699 18.6299 15.7399 16.5999Z" stroke="currentColor" strokeWidth={width} /><path d="M12.6696 5H15.3496C17.1996 5 18.0596 7.29 16.6696 8.51L8.67962 15.5C7.28962 16.71 8.14962 19 9.98962 19H12.6696" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.15565 5.5H6.1672" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.1556 17.5H19.1672" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M9.54995 4.60022C8.74995 1.14022 3.53995 1.13022 2.73995 4.60022C2.26995 6.63022 3.55995 8.35022 4.67995 9.42022C5.49995 10.1902 6.78995 10.1902 7.60995 9.42022C8.72995 8.35022 10.0099 6.63022 9.54995 4.60022ZM6.17995 6.20022C5.62995 6.20022 5.17995 5.75022 5.17995 5.20022C5.17995 4.65022 5.61995 4.20022 6.16995 4.20022H6.17995C6.73995 4.20022 7.17995 4.65022 7.17995 5.20022C7.17995 5.75022 6.73995 6.20022 6.17995 6.20022Z" fill="currentColor" /><path d="M7.17969 5.2002C7.17969 5.7502 6.73969 6.2002 6.17969 6.2002C5.62969 6.2002 5.17969 5.7502 5.17969 5.2002C5.17969 4.6502 5.61969 4.2002 6.16969 4.2002H6.17969C6.73969 4.2002 7.17969 4.6502 7.17969 5.2002Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.5799 16.6002C21.7799 13.1402 16.5499 13.1302 15.7399 16.6002C15.2699 18.6302 16.5599 20.3502 17.6899 21.4202C18.5099 22.1902 19.8099 22.1902 20.6299 21.4202C21.7599 20.3502 23.0499 18.6302 22.5799 16.6002ZM19.1999 18.2002C18.6499 18.2002 18.1999 17.7502 18.1999 17.2002C18.1999 16.6502 18.6399 16.2002 19.1899 16.2002H19.1999C19.7499 16.2002 20.1999 16.6502 20.1999 17.2002C20.1999 17.7502 19.7499 18.2002 19.1999 18.2002Z" fill="currentColor" /><path d="M20.2002 17.2002C20.2002 17.7502 19.7502 18.2002 19.2002 18.2002C18.6502 18.2002 18.2002 17.7502 18.2002 17.2002C18.2002 16.6502 18.6402 16.2002 19.1902 16.2002H19.2002C19.7502 16.2002 20.2002 16.6502 20.2002 17.2002Z" fill="currentColor" /><path d="M12.6704 19.75H9.99035C8.83035 19.75 7.82035 19.05 7.42035 17.97C7.01035 16.89 7.31035 15.7 8.18035 14.93L16.1704 7.94C16.6504 7.52 16.6604 6.95 16.5204 6.56C16.3704 6.17 15.9904 5.75 15.3504 5.75H12.6704C12.2604 5.75 11.9204 5.41 11.9204 5C11.9204 4.59 12.2604 4.25 12.6704 4.25H15.3504C16.5104 4.25 17.5204 4.95 17.9204 6.03C18.3304 7.11 18.0304 8.3 17.1604 9.07L9.17035 16.06C8.69035 16.48 8.68035 17.05 8.82035 17.44C8.97035 17.83 9.35035 18.25 9.99035 18.25H12.6704C13.0804 18.25 13.4204 18.59 13.4204 19C13.4204 19.41 13.0804 19.75 12.6704 19.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12_64972)"><path d="M9.54995 4.60022C8.74995 1.14022 3.53995 1.13022 2.73995 4.60022C2.26995 6.63022 3.55995 8.35022 4.67995 9.42022C5.49995 10.1902 6.78995 10.1902 7.60995 9.42022C8.72995 8.35022 10.0099 6.63022 9.54995 4.60022ZM6.17995 6.20022C5.62995 6.20022 5.17995 5.75022 5.17995 5.20022C5.17995 4.65022 5.61995 4.20022 6.16995 4.20022H6.17995C6.73995 4.20022 7.17995 4.65022 7.17995 5.20022C7.17995 5.75022 6.73995 6.20022 6.17995 6.20022Z" fill="currentColor" /><path d="M22.5799 16.6002C21.7799 13.1402 16.5499 13.1302 15.7399 16.6002C15.2699 18.6302 16.5599 20.3502 17.6899 21.4202C18.5099 22.1902 19.8099 22.1902 20.6299 21.4202C21.7599 20.3502 23.0499 18.6302 22.5799 16.6002ZM19.1999 18.2002C18.6499 18.2002 18.1999 17.7502 18.1999 17.2002C18.1999 16.6502 18.6399 16.2002 19.1899 16.2002H19.1999C19.7499 16.2002 20.1999 16.6502 20.1999 17.2002C20.1999 17.7502 19.7499 18.2002 19.1999 18.2002Z" fill="currentColor" /><path d="M12.6694 19.75H9.98937C8.82937 19.75 7.81937 19.05 7.41937 17.97C7.00937 16.89 7.30937 15.7 8.17937 14.93L16.1694 7.94C16.6494 7.52 16.6594 6.95 16.5194 6.56C16.3694 6.17 15.9894 5.75 15.3494 5.75H12.6694C12.2594 5.75 11.9194 5.41 11.9194 5C11.9194 4.59 12.2594 4.25 12.6694 4.25H15.3494C16.5094 4.25 17.5194 4.95 17.9194 6.03C18.3294 7.11 18.0294 8.3 17.1594 9.07L9.16937 16.06C8.68937 16.48 8.67937 17.05 8.81937 17.44C8.96937 17.83 9.34937 18.25 9.98937 18.25H12.6694C13.0794 18.25 13.4194 18.59 13.4194 19C13.4194 19.41 13.0794 19.75 12.6694 19.75Z" fill="currentColor" /></g><defs><clipPath ><rect width="24" height="24" fill="none" transform="translate(0.669922)" /></clipPath></defs></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRouting as IconComponentType).keywords = [
  "routing",
  "mob",
  "expel",
  "spread-eagle",
  "rabble",
  "discomfiture",
  "discomfit",
  "groove",
  "rootle",
  "gouge"
];

export default IconRouting as IconComponentType;