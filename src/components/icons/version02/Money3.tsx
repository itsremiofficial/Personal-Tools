import { FC } from 'react';

const IconMoney3: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6748 20.5H7.6748C4.6748 20.5 2.6748 19 2.6748 15.5V8.5C2.6748 5 4.6748 3.5 7.6748 3.5H17.6748C20.6748 3.5 22.6748 5 22.6748 8.5V15.5C22.6748 19 20.6748 20.5 17.6748 20.5Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.6748 15C14.3317 15 15.6748 13.6569 15.6748 12C15.6748 10.3431 14.3317 9 12.6748 9C11.018 9 9.6748 10.3431 9.6748 12C9.6748 13.6569 11.018 15 12.6748 15Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M19.6748 7H16.6748" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M8.6748 17H5.6748" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M17.6748 20.5H7.6748C4.6748 20.5 2.6748 19 2.6748 15.5V8.5C2.6748 5 4.6748 3.5 7.6748 3.5H17.6748C20.6748 3.5 22.6748 5 22.6748 8.5V15.5C22.6748 19 20.6748 20.5 17.6748 20.5Z" fill="currentColor" /><path d="M12.6748 15C14.3317 15 15.6748 13.6569 15.6748 12C15.6748 10.3431 14.3317 9 12.6748 9C11.018 9 9.6748 10.3431 9.6748 12C9.6748 13.6569 11.018 15 12.6748 15Z" fill="currentColor" /><path d="M19.6748 7.75H16.6748C16.2648 7.75 15.9248 7.41 15.9248 7C15.9248 6.59 16.2648 6.25 16.6748 6.25H19.6748C20.0848 6.25 20.4248 6.59 20.4248 7C20.4248 7.41 20.0848 7.75 19.6748 7.75Z" fill="currentColor" /><path d="M8.6748 17.75H5.6748C5.2648 17.75 4.9248 17.41 4.9248 17C4.9248 16.59 5.2648 16.25 5.6748 16.25H8.6748C9.0848 16.25 9.4248 16.59 9.4248 17C9.4248 17.41 9.0848 17.75 8.6748 17.75Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6768 3.5H7.67676C4.67676 3.5 2.67676 5 2.67676 8.5V15.5C2.67676 19 4.67676 20.5 7.67676 20.5H17.6768C20.6768 20.5 22.6768 19 22.6768 15.5V8.5C22.6768 5 20.6768 3.5 17.6768 3.5ZM8.67676 17.75H5.67676C5.26676 17.75 4.92676 17.41 4.92676 17C4.92676 16.59 5.26676 16.25 5.67676 16.25H8.67676C9.08676 16.25 9.42676 16.59 9.42676 17C9.42676 17.41 9.08676 17.75 8.67676 17.75ZM12.6768 15C11.0168 15 9.67676 13.66 9.67676 12C9.67676 10.34 11.0168 9 12.6768 9C14.3368 9 15.6768 10.34 15.6768 12C15.6768 13.66 14.3368 15 12.6768 15ZM19.6768 7.75H16.6768C16.2668 7.75 15.9268 7.41 15.9268 7C15.9268 6.59 16.2668 6.25 16.6768 6.25H19.6768C20.0868 6.25 20.4268 6.59 20.4268 7C20.4268 7.41 20.0868 7.75 19.6768 7.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoney3 as IconComponent).keywords = [
  "money",
  "3",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down"
];

export default IconMoney3 as IconComponent;