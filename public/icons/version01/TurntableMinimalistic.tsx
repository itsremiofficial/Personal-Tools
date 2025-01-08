import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconTurntableMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12.0001C2 7.28608 2 4.92905 3.46447 3.46459C4.92893 2.00012 7.28595 2.00012 12 2.00012C16.714 2.00012 19.0711 2.00012 20.5355 3.46459C22 4.92905 22 7.28608 22 12.0001C22 16.7142 22 19.0712 20.5355 20.5357C19.0711 22.0001 16.714 22.0001 12 22.0001C7.28595 22.0001 4.92893 22.0001 3.46447 20.5357C2 19.0712 2 16.7142 2 12.0001Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M14 10.5001L16.5547 8.79699C16.8329 8.61152 17 8.29929 17 7.96494V2.50012" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M17 12.0001C17 14.7615 14.7614 17.0001 12 17.0001C9.23858 17.0001 7 14.7615 7 12.0001C7 9.2387 9.23858 7.00012 12 7.00012C12.5226 7.00012 13.0265 7.0803 13.5 7.22902" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M12 14.0001C10.8954 14.0001 10 13.1047 10 12.0001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M12 2.00012C13.7005 2.00012 15.0943 2.00012 16.2501 2.06886L17.7501 2.22177C18.9728 2.41604 19.8515 2.78057 20.5355 3.46459C22 4.92905 22 7.28608 22 12.0001C22 16.7142 22 19.0712 20.5355 20.5357C19.0711 22.0001 16.714 22.0001 12 22.0001C7.28595 22.0001 4.92893 22.0001 3.46447 20.5357C2 19.0712 2 16.7142 2 12.0001C2 7.28608 2 4.92905 3.46447 3.46459C4.92893 2.00012 7.28595 2.00012 12 2.00012Z" fill="currentColor" /><path d="M12 6.25012C8.82436 6.25012 6.25 8.82448 6.25 12.0001C6.25 15.1758 8.82436 17.7501 12 17.7501C15.1756 17.7501 17.75 15.1758 17.75 12.0001C17.75 11.5859 17.4142 11.2501 17 11.2501C16.5858 11.2501 16.25 11.5859 16.25 12.0001C16.25 14.3473 14.3472 16.2501 12 16.2501C9.65279 16.2501 7.75 14.3473 7.75 12.0001C7.75 9.65291 9.65279 7.75012 12 7.75012C12.4455 7.75012 12.8736 7.81841 13.2753 7.94456C13.6704 8.06868 14.0914 7.84894 14.2155 7.45376C14.3397 7.05858 14.1199 6.63761 13.7247 6.51349C13.1793 6.34219 12.5997 6.25012 12 6.25012Z" fill="currentColor" /><path d="M10.75 12.0001C10.75 11.5859 10.4142 11.2501 10 11.2501C9.58579 11.2501 9.25 11.5859 9.25 12.0001C9.25 13.5189 10.4812 14.7501 12 14.7501C12.4142 14.7501 12.75 14.4143 12.75 14.0001C12.75 13.5859 12.4142 13.2501 12 13.2501C11.3096 13.2501 10.75 12.6905 10.75 12.0001Z" fill="currentColor" /><path d="M17.7501 7.96456V2.22139L16.2501 2.06848V7.96456C16.2501 8.04814 16.2083 8.1262 16.1388 8.17257L13.5841 9.8757C13.2394 10.1055 13.1463 10.5711 13.376 10.9158C13.6058 11.2604 14.0715 11.3535 14.4161 11.1238L16.9708 9.42064C17.4577 9.09608 17.7501 8.54967 17.7501 7.96456Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.7501 2.22177V7.96494C17.7501 8.55006 17.4577 9.09646 16.9708 9.42103L14.4161 11.1242C14.0715 11.3539 13.6058 11.2608 13.376 10.9161C13.1463 10.5715 13.2394 10.1058 13.5841 9.87608L16.1388 8.17295C16.2083 8.12658 16.2501 8.04853 16.2501 7.96494V2.06886C15.0943 2.00012 13.7005 2.00012 12 2.00012C7.28595 2.00012 4.92893 2.00012 3.46447 3.46459C2 4.92905 2 7.28608 2 12.0001C2 16.7142 2 19.0712 3.46447 20.5357C4.92893 22.0001 7.28595 22.0001 12 22.0001C16.714 22.0001 19.0711 22.0001 20.5355 20.5357C22 19.0712 22 16.7142 22 12.0001C22 7.28608 22 4.92905 20.5355 3.46459C19.8515 2.78057 18.9728 2.41604 17.7501 2.22177ZM6.25 12.0001C6.25 8.82448 8.82436 6.25012 12 6.25012C12.5997 6.25012 13.1793 6.34219 13.7247 6.51349C14.1199 6.63761 14.3397 7.05858 14.2155 7.45376C14.0914 7.84894 13.6704 8.06868 13.2753 7.94456C12.8736 7.81841 12.4455 7.75012 12 7.75012C9.65279 7.75012 7.75 9.65291 7.75 12.0001C7.75 14.3473 9.65279 16.2501 12 16.2501C14.3472 16.2501 16.25 14.3473 16.25 12.0001C16.25 11.5859 16.5858 11.2501 17 11.2501C17.4142 11.2501 17.75 11.5859 17.75 12.0001C17.75 15.1758 15.1756 17.7501 12 17.7501C8.82436 17.7501 6.25 15.1758 6.25 12.0001ZM10 11.2501C10.4142 11.2501 10.75 11.5859 10.75 12.0001C10.75 12.6905 11.3096 13.2501 12 13.2501C12.4142 13.2501 12.75 13.5859 12.75 14.0001C12.75 14.4143 12.4142 14.7501 12 14.7501C10.4812 14.7501 9.25 13.5189 9.25 12.0001C9.25 11.5859 9.58579 11.2501 10 11.2501Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTurntableMinimalistic as IconComponentType).keywords = [
  "turntable",
  "minimalistic",
  "lazy susan",
  "rotary",
  "revolving",
  "gateway",
  "hub",
  "carousel",
  "shelf",
  "plateau",
  "sinker",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic"
];

export default IconTurntableMinimalistic as IconComponentType;