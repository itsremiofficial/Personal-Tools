import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWidget2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6.50049C2.5 4.29135 4.29086 2.50049 6.5 2.50049C8.70914 2.50049 10.5 4.29135 10.5 6.50049C10.5 8.70963 8.70914 10.5005 6.5 10.5005C4.29086 10.5005 2.5 8.70963 2.5 6.50049Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13.5 17.5005C13.5 15.2913 15.2909 13.5005 17.5 13.5005C19.7091 13.5005 21.5 15.2913 21.5 17.5005C21.5 19.7096 19.7091 21.5005 17.5 21.5005C15.2909 21.5005 13.5 19.7096 13.5 17.5005Z" stroke="currentColor" strokeWidth={width} /><path d="M2.5 17.5005C2.5 15.6149 2.5 14.6721 3.08579 14.0863C3.67157 13.5005 4.61438 13.5005 6.5 13.5005C8.38562 13.5005 9.32843 13.5005 9.91421 14.0863C10.5 14.6721 10.5 15.6149 10.5 17.5005C10.5 19.3861 10.5 20.3289 9.91421 20.9147C9.32843 21.5005 8.38562 21.5005 6.5 21.5005C4.61438 21.5005 3.67157 21.5005 3.08579 20.9147C2.5 20.3289 2.5 19.3861 2.5 17.5005Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M13.5 6.50049C13.5 4.61487 13.5 3.67206 14.0858 3.08627C14.6716 2.50049 15.6144 2.50049 17.5 2.50049C19.3856 2.50049 20.3284 2.50049 20.9142 3.08627C21.5 3.67206 21.5 4.61487 21.5 6.50049C21.5 8.38611 21.5 9.32892 20.9142 9.9147C20.3284 10.5005 19.3856 10.5005 17.5 10.5005C15.6144 10.5005 14.6716 10.5005 14.0858 9.9147C13.5 9.32892 13.5 8.38611 13.5 6.50049Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 6.63463C2 4.07527 4.07478 2.00049 6.63415 2.00049C9.19351 2.00049 11.2683 4.07527 11.2683 6.63463C11.2683 9.194 9.19351 11.2688 6.63415 11.2688C4.07478 11.2688 2 9.194 2 6.63463Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M12.7319 17.3663C12.7319 14.807 14.8067 12.7322 17.3661 12.7322C19.9254 12.7322 22.0002 14.807 22.0002 17.3663C22.0002 19.9257 19.9254 22.0005 17.3661 22.0005C14.8067 22.0005 12.7319 19.9257 12.7319 17.3663Z" fill="currentColor" /><path d="M2 17.5005C2 15.3792 2 14.3185 2.65901 13.6595C3.31802 13.0005 4.37868 13.0005 6.5 13.0005C8.62132 13.0005 9.68198 13.0005 10.341 13.6595C11 14.3185 11 15.3792 11 17.5005C11 19.6218 11 20.6825 10.341 21.3415C9.68198 22.0005 8.62132 22.0005 6.5 22.0005C4.37868 22.0005 3.31802 22.0005 2.65901 21.3415C2 20.6825 2 19.6218 2 17.5005Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M13 6.50049C13 4.37917 13 3.31851 13.659 2.6595C14.318 2.00049 15.3787 2.00049 17.5 2.00049C19.6213 2.00049 20.682 2.00049 21.341 2.6595C22 3.31851 22 4.37917 22 6.50049C22 8.62181 22 9.68247 21.341 10.3415C20.682 11.0005 19.6213 11.0005 17.5 11.0005C15.3787 11.0005 14.318 11.0005 13.659 10.3415C13 9.68247 13 8.62181 13 6.50049Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 6.63463C2 4.07527 4.07478 2.00049 6.63415 2.00049C9.19351 2.00049 11.2683 4.07527 11.2683 6.63463C11.2683 9.194 9.19351 11.2688 6.63415 11.2688C4.07478 11.2688 2 9.194 2 6.63463Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.7317 17.3663C12.7317 14.807 14.8065 12.7322 17.3659 12.7322C19.9252 12.7322 22 14.807 22 17.3663C22 19.9257 19.9252 22.0005 17.3659 22.0005C14.8065 22.0005 12.7317 19.9257 12.7317 17.3663Z" fill="currentColor" /><path d="M2 17.5005C2 15.3792 2 14.3185 2.65901 13.6595C3.31802 13.0005 4.37868 13.0005 6.5 13.0005C8.62132 13.0005 9.68198 13.0005 10.341 13.6595C11 14.3185 11 15.3792 11 17.5005C11 19.6218 11 20.6825 10.341 21.3415C9.68198 22.0005 8.62132 22.0005 6.5 22.0005C4.37868 22.0005 3.31802 22.0005 2.65901 21.3415C2 20.6825 2 19.6218 2 17.5005Z" fill="currentColor" /><path d="M13 6.50049C13 4.37917 13 3.31851 13.659 2.6595C14.318 2.00049 15.3787 2.00049 17.5 2.00049C19.6213 2.00049 20.682 2.00049 21.341 2.6595C22 3.31851 22 4.37917 22 6.50049C22 8.62181 22 9.68247 21.341 10.3415C20.682 11.0005 19.6213 11.0005 17.5 11.0005C15.3787 11.0005 14.318 11.0005 13.659 10.3415C13 9.68247 13 8.62181 13 6.50049Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWidget2 as IconComponentType).keywords = [
  "widget",
  "2",
  "gadget",
  "gizmo",
  "convenience",
  "contraption",
  "contrivance",
  "appliance",
  "thingy",
  "accessory",
  "wizard",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconWidget2 as IconComponentType;