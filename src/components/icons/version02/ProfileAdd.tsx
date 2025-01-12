import { FC } from 'react';

const IconProfileAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M19.1699 19.5H15.1699" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M17.1699 21.5V17.5" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></g><path opacity={duotone ? "0.4" : "1"} d="M12.83 10.87C12.73 10.86 12.61 10.86 12.5 10.87C10.12 10.79 8.23002 8.84 8.23002 6.44C8.22002 3.99 10.21 2 12.66 2C15.11 2 17.1 3.99 17.1 6.44C17.1 8.84 15.2 10.79 12.83 10.87Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M12.66 21.8099C10.84 21.8099 9.02996 21.3499 7.64996 20.4299C5.22996 18.8099 5.22996 16.1699 7.64996 14.5599C10.4 12.7199 14.91 12.7199 17.66 14.5599" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C10.0499 2 7.91992 4.13 7.91992 6.75C7.91992 9.32 9.92992 11.4 12.5499 11.49C12.6299 11.48 12.7099 11.48 12.7699 11.49C12.7899 11.49 12.7999 11.49 12.8199 11.49C12.8299 11.49 12.8299 11.49 12.8399 11.49C15.3999 11.4 17.4099 9.32 17.4199 6.75C17.4199 4.13 15.2899 2 12.6699 2Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M17.7499 14.1499C14.9599 12.2899 10.4099 12.2899 7.59988 14.1499C6.32988 14.9999 5.62988 16.1499 5.62988 17.3799C5.62988 18.6099 6.32988 19.7499 7.58988 20.5899C8.98988 21.5299 10.8299 21.9999 12.6699 21.9999C14.5099 21.9999 16.3499 21.5299 17.7499 20.5899C19.0099 19.7399 19.7099 18.5999 19.7099 17.3599C19.6999 16.1299 19.0099 14.9899 17.7499 14.1499Z" fill="currentColor" /><path d="M14.6699 16.6299H13.4199V15.3799C13.4199 14.9699 13.0799 14.6299 12.6699 14.6299C12.2599 14.6299 11.9199 14.9699 11.9199 15.3799V16.6299H10.6699C10.2599 16.6299 9.91992 16.9699 9.91992 17.3799C9.91992 17.7899 10.2599 18.1299 10.6699 18.1299H11.9199V19.3799C11.9199 19.7899 12.2599 20.1299 12.6699 20.1299C13.0799 20.1299 13.4199 19.7899 13.4199 19.3799V18.1299H14.6699C15.0799 18.1299 15.4199 17.7899 15.4199 17.3799C15.4199 16.9699 15.0799 16.6299 14.6699 16.6299Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6699 2C10.0499 2 7.91992 4.13 7.91992 6.75C7.91992 9.32 9.92992 11.4 12.5499 11.49C12.6299 11.48 12.7099 11.48 12.7699 11.49C12.7899 11.49 12.7999 11.49 12.8199 11.49C12.8299 11.49 12.8299 11.49 12.8399 11.49C15.3999 11.4 17.4099 9.32 17.4199 6.75C17.4199 4.13 15.2899 2 12.6699 2Z" fill="currentColor" /><path d="M17.7499 14.1499C14.9599 12.2899 10.4099 12.2899 7.59988 14.1499C6.32988 14.9999 5.62988 16.1499 5.62988 17.3799C5.62988 18.6099 6.32988 19.7499 7.58988 20.5899C8.98988 21.5299 10.8299 21.9999 12.6699 21.9999C14.5099 21.9999 16.3499 21.5299 17.7499 20.5899C19.0099 19.7399 19.7099 18.5999 19.7099 17.3599C19.6999 16.1299 19.0099 14.9899 17.7499 14.1499ZM14.6699 18.1299H13.4199V19.3799C13.4199 19.7899 13.0799 20.1299 12.6699 20.1299C12.2599 20.1299 11.9199 19.7899 11.9199 19.3799V18.1299H10.6699C10.2599 18.1299 9.91988 17.7899 9.91988 17.3799C9.91988 16.9699 10.2599 16.6299 10.6699 16.6299H11.9199V15.3799C11.9199 14.9699 12.2599 14.6299 12.6699 14.6299C13.0799 14.6299 13.4199 14.9699 13.4199 15.3799V16.6299H14.6699C15.0799 16.6299 15.4199 16.9699 15.4199 17.3799C15.4199 17.7899 15.0799 18.1299 14.6699 18.1299Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProfileAdd as IconComponent).keywords = [
  "profile",
  "add",
  "outline",
  "image",
  "description",
  "img",
  "sketch",
  "contour",
  "structure",
  "effigy",
  "template",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconProfileAdd as IconComponent;