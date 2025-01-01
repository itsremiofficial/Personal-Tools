import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMedalRibbonsStar: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M11.1459 7.02288C11.5259 6.3412 11.7159 6.00037 12 6.00037C12.2841 6.00037 12.4741 6.3412 12.8541 7.02288L12.9524 7.19924C13.0603 7.39295 13.1143 7.4898 13.1985 7.55371C13.2827 7.61761 13.3875 7.64134 13.5972 7.68878L13.7881 7.73197C14.526 7.89893 14.895 7.98241 14.9828 8.26469C15.0706 8.54696 14.819 8.84109 14.316 9.42934L14.1858 9.58153C14.0429 9.7487 13.9714 9.83228 13.9392 9.93568C13.9071 10.0391 13.9179 10.1506 13.9395 10.3736L13.9592 10.5767C14.0352 11.3615 14.0733 11.754 13.8435 11.9284C13.6136 12.1029 13.2682 11.9438 12.5773 11.6257L12.3986 11.5434C12.2022 11.453 12.1041 11.4078 12 11.4078C11.8959 11.4078 11.7978 11.453 11.6014 11.5434L11.4227 11.6257C10.7318 11.9438 10.3864 12.1029 10.1565 11.9284C9.92674 11.754 9.96476 11.3615 10.0408 10.5767L10.0605 10.3736C10.0821 10.1506 10.0929 10.0391 10.0608 9.93568C10.0286 9.83228 9.95713 9.7487 9.81418 9.58153L9.68403 9.42934C9.18097 8.84109 8.92945 8.54696 9.01723 8.26469C9.10501 7.98241 9.47396 7.89893 10.2119 7.73197L10.4028 7.68878C10.6125 7.64134 10.7173 7.61761 10.8015 7.55371C10.8857 7.4898 10.9397 7.39295 11.0476 7.19924L11.1459 7.02288Z" stroke="currentColor" strokeWidth={width} /><path d="M19 9.00037C19 12.8664 15.866 16.0004 12 16.0004C8.13401 16.0004 5 12.8664 5 9.00037C5 5.13437 8.13401 2.00037 12 2.00037C15.866 2.00037 19 5.13437 19 9.00037Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 16.0682L8.22855 19.9732C7.68843 20.5324 7.41837 20.812 7.18967 20.9088C6.66852 21.1293 6.09042 20.9406 5.81628 20.4605C5.69597 20.2498 5.65848 19.8698 5.5835 19.1098C5.54117 18.6807 5.52 18.4662 5.45575 18.2865C5.31191 17.8841 5.00966 17.5712 4.6211 17.4223C4.44754 17.3557 4.24033 17.3338 3.82589 17.29C3.09187 17.2124 2.72486 17.1735 2.52138 17.049C2.05772 16.7651 1.87548 16.1666 2.08843 15.627C2.18188 15.3902 2.45194 15.1105 2.99206 14.5513L5.45575 12.0004" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M12 16.0682L15.7715 19.9732C16.3116 20.5324 16.5816 20.812 16.8103 20.9088C17.3315 21.1293 17.9096 20.9406 18.1837 20.4605C18.304 20.2498 18.3415 19.8698 18.4165 19.1098C18.4588 18.6807 18.48 18.4662 18.5442 18.2865C18.6881 17.8841 18.9903 17.5712 19.3789 17.4223C19.5525 17.3557 19.7597 17.3338 20.1741 17.29C20.9081 17.2124 21.2751 17.1735 21.4786 17.049C21.9423 16.7651 22.1245 16.1666 21.9116 15.627C21.8181 15.3902 21.5481 15.1105 21.0079 14.5513L18.5442 12.0004" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M12 16.0681L8.22855 19.9731C7.68843 20.5324 7.41837 20.812 7.18967 20.9087C6.66852 21.1292 6.09042 20.9405 5.81628 20.4605C5.69597 20.2498 5.65848 19.8698 5.5835 19.1098C5.54117 18.6806 5.52 18.4661 5.45575 18.2864C5.31191 17.8841 5.00966 17.5711 4.6211 17.4222C4.44755 17.3557 4.24033 17.3337 3.82592 17.2899L3.82589 17.2899C3.09187 17.2123 2.72486 17.1735 2.52138 17.0489C2.05772 16.765 1.87548 16.1665 2.08843 15.6269C2.18188 15.3901 2.45194 15.1105 2.99206 14.5512L5.45575 12.0003L6.69396 10.7621L12 16.0681L17.306 10.7621L18.5442 12.0003L21.0079 14.5512C21.5481 15.1105 21.8181 15.3901 21.9116 15.6269C22.1245 16.1665 21.9423 16.765 21.4786 17.0489C21.2751 17.1735 20.9081 17.2123 20.1741 17.2899C19.7597 17.3337 19.5525 17.3557 19.3789 17.4222C18.9903 17.5711 18.6881 17.8841 18.5442 18.2864C18.48 18.4661 18.4588 18.6806 18.4165 19.1097V19.1098C18.3415 19.8698 18.304 20.2498 18.1837 20.4605C17.9096 20.9405 17.3315 21.1292 16.8103 20.9087C16.5816 20.812 16.3116 20.5324 15.7715 19.9731L12 16.0681Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 16.0004C15.866 16.0004 19 12.8664 19 9.00037C19 5.13437 15.866 2.00037 12 2.00037C8.13401 2.00037 5 5.13437 5 9.00037C5 12.8664 8.13401 16.0004 12 16.0004ZM12 6.00037C11.7159 6.00037 11.5259 6.3412 11.1459 7.02288L11.0476 7.19924C10.9397 7.39295 10.8857 7.4898 10.8015 7.55371C10.7173 7.61761 10.6125 7.64134 10.4028 7.68878L10.2119 7.73197C9.47396 7.89893 9.10501 7.98241 9.01723 8.26469C8.92945 8.54696 9.18097 8.84109 9.68403 9.42934L9.81418 9.58153C9.95713 9.7487 10.0286 9.83228 10.0608 9.93568C10.0929 10.0391 10.0821 10.1506 10.0605 10.3736L10.0408 10.5767C9.96476 11.3615 9.92674 11.754 10.1565 11.9284C10.3864 12.1029 10.7318 11.9438 11.4227 11.6257L11.6014 11.5434C11.7978 11.453 11.8959 11.4078 12 11.4078C12.1041 11.4078 12.2022 11.453 12.3986 11.5434L12.5773 11.6257C13.2682 11.9438 13.6136 12.1029 13.8435 11.9284C14.0733 11.754 14.0352 11.3615 13.9592 10.5767L13.9395 10.3736C13.9179 10.1506 13.9071 10.0391 13.9392 9.93568C13.9714 9.83228 14.0429 9.7487 14.1858 9.58154L14.316 9.42934C14.819 8.84109 15.0706 8.54696 14.9828 8.26469C14.895 7.98241 14.526 7.89893 13.7881 7.73197L13.5972 7.68878C13.3875 7.64134 13.2827 7.61761 13.1985 7.55371C13.1143 7.4898 13.0603 7.39295 12.9524 7.19924L12.8541 7.02288C12.4741 6.3412 12.2841 6.00037 12 6.00037Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 16.0004C15.866 16.0004 19 12.8664 19 9.00037C19 5.13437 15.866 2.00037 12 2.00037C8.13401 2.00037 5 5.13437 5 9.00037C5 12.8664 8.13401 16.0004 12 16.0004ZM12 6.00037C11.7159 6.00037 11.5259 6.3412 11.1459 7.02288L11.0476 7.19924C10.9397 7.39295 10.8857 7.4898 10.8015 7.55371C10.7173 7.61761 10.6125 7.64134 10.4028 7.68878L10.2119 7.73197C9.47396 7.89893 9.10501 7.98241 9.01723 8.26469C8.92945 8.54696 9.18097 8.84109 9.68403 9.42934L9.81418 9.58153C9.95713 9.7487 10.0286 9.83228 10.0608 9.93568C10.0929 10.0391 10.0821 10.1506 10.0605 10.3736L10.0408 10.5767C9.96476 11.3615 9.92674 11.754 10.1565 11.9284C10.3864 12.1029 10.7318 11.9438 11.4227 11.6257L11.6014 11.5434C11.7978 11.453 11.8959 11.4078 12 11.4078C12.1041 11.4078 12.2022 11.453 12.3986 11.5434L12.5773 11.6257C13.2682 11.9438 13.6136 12.1029 13.8435 11.9284C14.0733 11.754 14.0352 11.3615 13.9592 10.5767L13.9395 10.3736C13.9179 10.1506 13.9071 10.0391 13.9392 9.93568C13.9714 9.83228 14.0429 9.7487 14.1858 9.58154L14.316 9.42934C14.819 8.84109 15.0706 8.54696 14.9828 8.26469C14.895 7.98241 14.526 7.89893 13.7881 7.73197L13.5972 7.68878C13.3875 7.64134 13.2827 7.61761 13.1985 7.55371C13.1143 7.4898 13.0603 7.39295 12.9524 7.19924L12.8541 7.02288C12.4741 6.3412 12.2841 6.00037 12 6.00037Z" fill="currentColor" /><path d="M4.49517 12.9949L2.99206 14.5512C2.45194 15.1105 2.18188 15.3901 2.08843 15.6269C1.87548 16.1665 2.05772 16.7651 2.52138 17.0489C2.72486 17.1735 3.09187 17.2123 3.82589 17.2899C4.2403 17.3337 4.44755 17.3557 4.6211 17.4222C5.00966 17.5711 5.31191 17.8841 5.45575 18.2864C5.52 18.4661 5.54117 18.6807 5.5835 19.1098C5.65848 19.8698 5.69597 20.2498 5.81628 20.4605C6.09042 20.9405 6.66852 21.1292 7.18967 20.9087C7.41837 20.812 7.68843 20.5324 8.22855 19.9731L10.7106 17.4032C8.01306 16.9927 5.73225 15.3142 4.49517 12.9949Z" fill="currentColor" /><path d="M13.2894 17.4032L15.7715 19.9731C16.3116 20.5324 16.5816 20.812 16.8103 20.9087C17.3315 21.1292 17.9096 20.9405 18.1837 20.4605C18.304 20.2498 18.3415 19.8698 18.4165 19.1098C18.4588 18.6807 18.48 18.4661 18.5442 18.2864C18.6881 17.8841 18.9903 17.5711 19.3789 17.4222C19.5525 17.3557 19.7597 17.3338 20.1741 17.2899C20.9081 17.2123 21.2751 17.1735 21.4786 17.0489C21.9423 16.7651 22.1245 16.1665 21.9116 15.6269C21.8181 15.3901 21.5481 15.1105 21.0079 14.5512L19.5048 12.9949C18.2677 15.3142 15.9869 16.9927 13.2894 17.4032Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMedalRibbonsStar as IconComponentType).keywords = [
  "medal",
  "ribbons",
  "star",
  "medallion",
  "decoration",
  "laurel wreath",
  "ribbon",
  "palm",
  "medalist",
  "decorating",
  "décor",
  "plaque",
  "thread",
  "typewriter ribbon",
  "bands",
  "bonds",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner"
];

export default IconMedalRibbonsStar as IconComponentType;