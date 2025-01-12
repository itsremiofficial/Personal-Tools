import { FC } from 'react';

const IconWidgetAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 6.50049H17.5M17.5 6.50049H20.5M17.5 6.50049V9.50049M17.5 6.50049V3.50049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M2.5 6.50049C2.5 4.61487 2.5 3.67206 3.08579 3.08627C3.67157 2.50049 4.61438 2.50049 6.5 2.50049C8.38562 2.50049 9.32843 2.50049 9.91421 3.08627C10.5 3.67206 10.5 4.61487 10.5 6.50049C10.5 8.38611 10.5 9.32892 9.91421 9.9147C9.32843 10.5005 8.38562 10.5005 6.5 10.5005C4.61438 10.5005 3.67157 10.5005 3.08579 9.9147C2.5 9.32892 2.5 8.38611 2.5 6.50049Z" stroke="currentColor" strokeWidth={width} /><path d="M13.5 17.5005C13.5 15.6149 13.5 14.6721 14.0858 14.0863C14.6716 13.5005 15.6144 13.5005 17.5 13.5005C19.3856 13.5005 20.3284 13.5005 20.9142 14.0863C21.5 14.6721 21.5 15.6149 21.5 17.5005C21.5 19.3861 21.5 20.3289 20.9142 20.9147C20.3284 21.5005 19.3856 21.5005 17.5 21.5005C15.6144 21.5005 14.6716 21.5005 14.0858 20.9147C13.5 20.3289 13.5 19.3861 13.5 17.5005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M2.5 17.5005C2.5 15.6149 2.5 14.6721 3.08579 14.0863C3.67157 13.5005 4.61438 13.5005 6.5 13.5005C8.38562 13.5005 9.32843 13.5005 9.91421 14.0863C10.5 14.6721 10.5 15.6149 10.5 17.5005C10.5 19.3861 10.5 20.3289 9.91421 20.9147C9.32843 21.5005 8.38562 21.5005 6.5 21.5005C4.61438 21.5005 3.67157 21.5005 3.08579 20.9147C2.5 20.3289 2.5 19.3861 2.5 17.5005Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.5 2.75049C17.9142 2.75049 18.25 3.08627 18.25 3.50049V5.75049H20.5C20.9142 5.75049 21.25 6.08627 21.25 6.50049C21.25 6.9147 20.9142 7.25049 20.5 7.25049H18.25V9.50049C18.25 9.9147 17.9142 10.2505 17.5 10.2505C17.0858 10.2505 16.75 9.9147 16.75 9.50049V7.25049H14.5C14.0858 7.25049 13.75 6.9147 13.75 6.50049C13.75 6.08627 14.0858 5.75049 14.5 5.75049H16.75V3.50049C16.75 3.08627 17.0858 2.75049 17.5 2.75049Z" fill="currentColor" /><path d="M2 6.50049C2 4.37917 2 3.31851 2.65901 2.6595C3.31802 2.00049 4.37868 2.00049 6.5 2.00049C8.62132 2.00049 9.68198 2.00049 10.341 2.6595C11 3.31851 11 4.37917 11 6.50049C11 8.62181 11 9.68247 10.341 10.3415C9.68198 11.0005 8.62132 11.0005 6.5 11.0005C4.37868 11.0005 3.31802 11.0005 2.65901 10.3415C2 9.68247 2 8.62181 2 6.50049Z" fill="currentColor" /><path d="M13 17.5005C13 15.3792 13 14.3185 13.659 13.6595C14.318 13.0005 15.3787 13.0005 17.5 13.0005C19.6213 13.0005 20.682 13.0005 21.341 13.6595C22 14.3185 22 15.3792 22 17.5005C22 19.6218 22 20.6825 21.341 21.3415C20.682 22.0005 19.6213 22.0005 17.5 22.0005C15.3787 22.0005 14.318 22.0005 13.659 21.3415C13 20.6825 13 19.6218 13 17.5005Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M2 17.5005C2 15.3792 2 14.3185 2.65901 13.6595C3.31802 13.0005 4.37868 13.0005 6.5 13.0005C8.62132 13.0005 9.68198 13.0005 10.341 13.6595C11 14.3185 11 15.3792 11 17.5005C11 19.6218 11 20.6825 10.341 21.3415C9.68198 22.0005 8.62132 22.0005 6.5 22.0005C4.37868 22.0005 3.31802 22.0005 2.65901 21.3415C2 20.6825 2 19.6218 2 17.5005Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.5 2.75049C17.9142 2.75049 18.25 3.08627 18.25 3.50049V5.75049H20.5C20.9142 5.75049 21.25 6.08627 21.25 6.50049C21.25 6.9147 20.9142 7.25049 20.5 7.25049H18.25V9.50049C18.25 9.9147 17.9142 10.2505 17.5 10.2505C17.0858 10.2505 16.75 9.9147 16.75 9.50049V7.25049H14.5C14.0858 7.25049 13.75 6.9147 13.75 6.50049C13.75 6.08627 14.0858 5.75049 14.5 5.75049H16.75V3.50049C16.75 3.08627 17.0858 2.75049 17.5 2.75049Z" fill="currentColor" /><path d="M2 6.50049C2 4.37917 2 3.31851 2.65901 2.6595C3.31802 2.00049 4.37868 2.00049 6.5 2.00049C8.62132 2.00049 9.68198 2.00049 10.341 2.6595C11 3.31851 11 4.37917 11 6.50049C11 8.62181 11 9.68247 10.341 10.3415C9.68198 11.0005 8.62132 11.0005 6.5 11.0005C4.37868 11.0005 3.31802 11.0005 2.65901 10.3415C2 9.68247 2 8.62181 2 6.50049Z" fill="currentColor" /><path d="M13 17.5005C13 15.3792 13 14.3185 13.659 13.6595C14.318 13.0005 15.3787 13.0005 17.5 13.0005C19.6213 13.0005 20.682 13.0005 21.341 13.6595C22 14.3185 22 15.3792 22 17.5005C22 19.6218 22 20.6825 21.341 21.3415C20.682 22.0005 19.6213 22.0005 17.5 22.0005C15.3787 22.0005 14.318 22.0005 13.659 21.3415C13 20.6825 13 19.6218 13 17.5005Z" fill="currentColor" /><path d="M2 17.5005C2 15.3792 2 14.3185 2.65901 13.6595C3.31802 13.0005 4.37868 13.0005 6.5 13.0005C8.62132 13.0005 9.68198 13.0005 10.341 13.6595C11 14.3185 11 15.3792 11 17.5005C11 19.6218 11 20.6825 10.341 21.3415C9.68198 22.0005 8.62132 22.0005 6.5 22.0005C4.37868 22.0005 3.31802 22.0005 2.65901 21.3415C2 20.6825 2 19.6218 2 17.5005Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWidgetAdd as IconComponent).keywords = [
  "widget",
  "add",
  "gadget",
  "gizmo",
  "convenience",
  "contraption",
  "contrivance",
  "appliance",
  "thingy",
  "accessory",
  "wizard",
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

export default IconWidgetAdd as IconComponent;