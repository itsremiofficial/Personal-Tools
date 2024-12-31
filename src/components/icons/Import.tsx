import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconImport: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><g opacity={duotone ? "0.4" : "1"}><path d="M22.0008 2L13.8008 10.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 6.16992V10.9999H17.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M22 10.7599C22 10.2899 21.62 9.8999 21.14 9.8999H2.86C2.38 9.8999 2 10.2799 2 10.7599C2 16.6499 6.11 20.7599 12 20.7599C17.89 20.7599 22 16.6399 22 10.7599Z" fill="currentColor" /><path d="M12.4598 15.9L15.3098 13.06C15.5998 12.77 15.5998 12.29 15.3098 12C15.0198 11.71 14.5398 11.71 14.2498 12L12.6898 13.56V3.98999C12.6898 3.57999 12.3498 3.23999 11.9398 3.23999C11.5298 3.23999 11.1898 3.57999 11.1898 3.98999V13.56L9.61984 12C9.32984 11.71 8.84984 11.71 8.55984 12C8.40984 12.15 8.33984 12.34 8.33984 12.53C8.33984 12.72 8.40984 12.91 8.55984 13.06L11.4098 15.9C11.6998 16.2 12.1698 16.2 12.4598 15.9Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconImport as IconComponentType).keywords = [
  "import",
  "consequence",
  "signification",
  "significance",
  "implication",
  "meaning",
  "moment",
  "spell",
  "export",
  "exportation"
];

export default IconImport as IconComponentType;