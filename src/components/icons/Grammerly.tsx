import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconGrammerly: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0707 4.95008C23.0407 8.92008 22.9707 15.4 18.8707 19.29C15.0807 22.88 8.93069 22.88 5.13069 19.29C1.02069 15.4 0.950683 8.92008 4.93068 4.95008C8.83068 1.04008 15.1707 1.04008 19.0707 4.95008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M15.8399 16.0698C13.7199 18.0698 10.2799 18.0698 8.16992 16.0698" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M19.0707 4.95008C23.0407 8.92008 22.9707 15.4 18.8707 19.29C15.0807 22.88 8.93069 22.88 5.13069 19.29C1.02069 15.4 0.950683 8.92008 4.93068 4.95008C8.83068 1.04008 15.1707 1.04008 19.0707 4.95008Z" fill="currentColor" /><path d="M12.0007 18.3199C10.4207 18.3199 8.85073 17.7499 7.65073 16.6199C7.35073 16.3299 7.34073 15.8599 7.62073 15.5599C7.91073 15.2599 8.38073 15.2499 8.68073 15.5299C10.5107 17.2599 13.4907 17.2599 15.3207 15.5299C15.6207 15.2499 16.1007 15.2599 16.3807 15.5599C16.6607 15.8599 16.6507 16.3399 16.3507 16.6199C15.1507 17.7499 13.5807 18.3199 12.0007 18.3199Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGrammerly as IconComponentType).keywords = [
  "grammerly"
];

export default IconGrammerly as IconComponentType;