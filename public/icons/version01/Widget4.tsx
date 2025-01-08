import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconWidget4: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2.5 6.50049C2.5 4.61487 2.5 3.67206 3.08579 3.08627C3.67157 2.50049 4.61438 2.50049 6.5 2.50049C8.38562 2.50049 9.32843 2.50049 9.91421 3.08627C10.5 3.67206 10.5 4.61487 10.5 6.50049V17.5005C10.5 19.3861 10.5 20.3289 9.91421 20.9147C9.32843 21.5005 8.38562 21.5005 6.5 21.5005C4.61438 21.5005 3.67157 21.5005 3.08579 20.9147C2.5 20.3289 2.5 19.3861 2.5 17.5005V6.50049Z" stroke="currentColor" strokeWidth={width} /><path d="M13.5 15.5005C13.5 13.6149 13.5 12.6721 14.0858 12.0863C14.6716 11.5005 15.6144 11.5005 17.5 11.5005C19.3856 11.5005 20.3284 11.5005 20.9142 12.0863C21.5 12.6721 21.5 13.6149 21.5 15.5005V17.5005C21.5 19.3861 21.5 20.3289 20.9142 20.9147C20.3284 21.5005 19.3856 21.5005 17.5 21.5005C15.6144 21.5005 14.6716 21.5005 14.0858 20.9147C13.5 20.3289 13.5 19.3861 13.5 17.5005V15.5005Z" stroke="currentColor" strokeWidth={width} /><path d="M13.5 5.50049C13.5 4.56861 13.5 4.10266 13.6522 3.73512C13.8552 3.24507 14.2446 2.85572 14.7346 2.65273C15.1022 2.50049 15.5681 2.50049 16.5 2.50049H18.5C19.4319 2.50049 19.8978 2.50049 20.2654 2.65273C20.7554 2.85572 21.1448 3.24507 21.3478 3.73512C21.5 4.10266 21.5 4.56861 21.5 5.50049C21.5 6.43237 21.5 6.89831 21.3478 7.26586C21.1448 7.75591 20.7554 8.14526 20.2654 8.34825C19.8978 8.50049 19.4319 8.50049 18.5 8.50049H16.5C15.5681 8.50049 15.1022 8.50049 14.7346 8.34825C14.2446 8.14526 13.8552 7.75591 13.6522 7.26586C13.5 6.89831 13.5 6.43237 13.5 5.50049Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 6.21101C2 4.22615 2 3.23372 2.65901 2.61711C3.31802 2.00049 4.37868 2.00049 6.5 2.00049C8.62132 2.00049 9.68198 2.00049 10.341 2.61711C11 3.23372 11 4.22615 11 6.21101V17.79C11 19.7748 11 20.7673 10.341 21.3839C9.68198 22.0005 8.62132 22.0005 6.5 22.0005C4.37868 22.0005 3.31802 22.0005 2.65901 21.3839C2 20.7673 2 19.7748 2 17.79V6.21101Z" fill="currentColor" /><path d="M13 15.4005C13 13.3263 13 12.2892 13.659 11.6449C14.318 11.0005 15.3787 11.0005 17.5 11.0005C19.6213 11.0005 20.682 11.0005 21.341 11.6449C22 12.2892 22 13.3263 22 15.4005V17.6005C22 19.6747 22 20.7118 21.341 21.3561C20.682 22.0005 19.6213 22.0005 17.5 22.0005C15.3787 22.0005 14.318 22.0005 13.659 21.3561C13 20.7118 13 19.6747 13 17.6005V15.4005Z" fill="currentColor" /><path d="M13 5.50049C13 4.41329 13 3.86969 13.1713 3.44089C13.3996 2.86916 13.8376 2.41492 14.389 2.1781C14.8024 2.00049 15.3266 2.00049 16.375 2.00049H18.625C19.6734 2.00049 20.1976 2.00049 20.611 2.1781C21.1624 2.41492 21.6004 2.86916 21.8287 3.44089C22 3.86969 22 4.41329 22 5.50049C22 6.58769 22 7.13128 21.8287 7.56008C21.6004 8.13181 21.1624 8.58605 20.611 8.82287C20.1976 9.00049 19.6734 9.00049 18.625 9.00049H16.375C15.3266 9.00049 14.8024 9.00049 14.389 8.82287C13.8376 8.58605 13.3996 8.13181 13.1713 7.56008C13 7.13128 13 6.58769 13 5.50049Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.21101C2 4.22615 2 3.23372 2.65901 2.61711C3.31802 2.00049 4.37868 2.00049 6.5 2.00049C8.62132 2.00049 9.68198 2.00049 10.341 2.61711C11 3.23372 11 4.22615 11 6.21101V17.79C11 19.7748 11 20.7673 10.341 21.3839C9.68198 22.0005 8.62132 22.0005 6.5 22.0005C4.37868 22.0005 3.31802 22.0005 2.65901 21.3839C2 20.7673 2 19.7748 2 17.79V6.21101Z" fill="currentColor" /><path d="M13 15.4005C13 13.3263 13 12.2892 13.659 11.6449C14.318 11.0005 15.3787 11.0005 17.5 11.0005C19.6213 11.0005 20.682 11.0005 21.341 11.6449C22 12.2892 22 13.3263 22 15.4005V17.6005C22 19.6747 22 20.7118 21.341 21.3561C20.682 22.0005 19.6213 22.0005 17.5 22.0005C15.3787 22.0005 14.318 22.0005 13.659 21.3561C13 20.7118 13 19.6747 13 17.6005V15.4005Z" fill="currentColor" /><path d="M13 5.50049C13 4.41329 13 3.86969 13.1713 3.44089C13.3996 2.86916 13.8376 2.41492 14.389 2.1781C14.8024 2.00049 15.3266 2.00049 16.375 2.00049H18.625C19.6734 2.00049 20.1976 2.00049 20.611 2.1781C21.1624 2.41492 21.6004 2.86916 21.8287 3.44089C22 3.86969 22 4.41329 22 5.50049C22 6.58769 22 7.13128 21.8287 7.56008C21.6004 8.13181 21.1624 8.58605 20.611 8.82287C20.1976 9.00049 19.6734 9.00049 18.625 9.00049H16.375C15.3266 9.00049 14.8024 9.00049 14.389 8.82287C13.8376 8.58605 13.3996 8.13181 13.1713 7.56008C13 7.13128 13 6.58769 13 5.50049Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWidget4 as IconComponentType).keywords = [
  "widget",
  "4",
  "gadget",
  "gizmo",
  "convenience",
  "contraption",
  "contrivance",
  "appliance",
  "thingy",
  "accessory",
  "wizard",
  "dh",
  "f4f"
];

export default IconWidget4 as IconComponentType;