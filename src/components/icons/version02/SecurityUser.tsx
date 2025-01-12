import { FC } from 'react';

const IconSecurityUser: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1598 2.23006L6.16983 4.10005C5.01983 4.53005 4.07983 5.89004 4.07983 7.12004V14.55C4.07983 15.73 4.85984 17.28 5.80984 17.99L10.1098 21.2001C11.5198 22.2601 13.8398 22.2601 15.2498 21.2001L19.5498 17.99C20.4998 17.28 21.2798 15.73 21.2798 14.55V7.12004C21.2798 5.89004 20.3398 4.53005 19.1898 4.10005L14.1998 2.23006C13.3498 1.92006 11.9898 1.92006 11.1598 2.23006Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M12.6699 10.9199C12.6299 10.9199 12.5799 10.9199 12.5399 10.9199C11.5999 10.8899 10.8499 10.1099 10.8499 9.15991C10.8499 8.18991 11.6399 7.3999 12.6099 7.3999C13.5799 7.3999 14.3699 8.18991 14.3699 9.15991C14.3599 10.1199 13.6099 10.8899 12.6699 10.9199Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M10.68 13.7199C9.71996 14.3599 9.71996 15.4099 10.68 16.0498C11.77 16.7799 13.56 16.7799 14.65 16.0498C15.61 15.4099 15.61 14.3599 14.65 13.7199C13.57 12.9899 11.78 12.9899 10.68 13.7199Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M11.1598 2.23006L6.16983 4.10007C5.01983 4.53007 4.07983 5.89006 4.07983 7.12006V14.5501C4.07983 15.7301 4.85984 17.2801 5.80984 17.9901L10.1098 21.2001C11.5198 22.2601 13.8398 22.2601 15.2498 21.2001L19.5498 17.9901C20.4998 17.2801 21.2798 15.7301 21.2798 14.5501V7.12006C21.2798 5.89006 20.3398 4.53007 19.1898 4.10007L14.1998 2.23006C13.3498 1.92006 11.9898 1.92006 11.1598 2.23006Z" fill="currentColor" /><path d="M12.5697 11.2998C12.5897 11.2998 12.6097 11.2998 12.6297 11.2998H12.6497H12.6697C13.8197 11.2598 14.7197 10.3298 14.7297 9.16978C14.7297 7.98978 13.7697 7.02979 12.5897 7.02979C11.4097 7.02979 10.4497 7.98978 10.4497 9.16978C10.4697 10.3198 11.3697 11.2598 12.5697 11.2998Z" fill="currentColor" /><path d="M14.8598 13.4096C13.6498 12.6096 11.6898 12.6096 10.4698 13.4096C9.90982 13.7896 9.57983 14.3296 9.57983 14.8896C9.57983 15.4596 9.89982 15.9796 10.4698 16.3596C11.0798 16.7596 11.8698 16.9696 12.6598 16.9696C13.4498 16.9696 14.2498 16.7696 14.8498 16.3596C15.4098 15.9796 15.7398 15.4396 15.7398 14.8796C15.7498 14.3096 15.4298 13.7896 14.8598 13.4096Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1698 4.10982L14.1798 2.23982C13.3498 1.92982 11.9898 1.92982 11.1598 2.23982L6.16983 4.10982C5.01983 4.53982 4.07983 5.89982 4.07983 7.11982V14.5498C4.07983 15.7298 4.85983 17.2798 5.80983 17.9898L10.1098 21.1998C11.5198 22.2598 13.8398 22.2598 15.2498 21.1998L19.5498 17.9898C20.4998 17.2798 21.2798 15.7298 21.2798 14.5498V7.11982C21.2598 5.89982 20.3198 4.53982 19.1698 4.10982ZM12.5998 7.02982C13.7798 7.02982 14.7398 7.98982 14.7398 9.16982C14.7398 10.3298 13.8298 11.2598 12.6798 11.2998H12.6598H12.6398C12.6198 11.2998 12.5998 11.2998 12.5798 11.2998C11.3798 11.2598 10.4798 10.3298 10.4798 9.16982C10.4698 7.98982 11.4298 7.02982 12.5998 7.02982ZM14.8598 16.3598C14.2498 16.7598 13.4598 16.9698 12.6698 16.9698C11.8798 16.9698 11.0798 16.7698 10.4798 16.3598C9.90983 15.9798 9.59983 15.4598 9.58983 14.8898C9.58983 14.3298 9.90983 13.7898 10.4798 13.4098C11.6898 12.6098 13.6598 12.6098 14.8698 13.4098C15.4398 13.7898 15.7598 14.3098 15.7598 14.8798C15.7498 15.4398 15.4298 15.9798 14.8598 16.3598Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSecurityUser as IconComponent).keywords = [
  "security",
  "user",
  "surety",
  "protection",
  "certificate",
  "security system",
  "security measures",
  "confidentiality",
  "safe",
  "secure",
  "peace",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee"
];

export default IconSecurityUser as IconComponent;