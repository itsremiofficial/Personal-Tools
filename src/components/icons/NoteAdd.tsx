import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconNoteAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M9.56055 18V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 15.5H7" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M15.8098 3.41992C19.1498 3.53992 20.8398 4.76992 20.9398 9.46992L21.0698 15.6399C21.1498 19.7599 20.1998 21.8299 15.1998 21.9399L9.19983 22.0599C4.19983 22.1599 3.15983 20.1199 3.07983 16.0099L2.93983 9.82992C2.83983 5.12992 4.48983 3.82992 7.80983 3.57992L15.8098 3.41992Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M7.37 22H16.62C19.31 22 21.49 19.82 21.49 17.13V8.37C21.49 5.68 19.31 3.5 16.62 3.5H7.37C4.68 3.5 2.5 5.68 2.5 8.37V17.12C2.5 19.82 4.68 22 7.37 22Z" fill="currentColor" /><path d="M8.28906 6.29C7.86906 6.29 7.53906 5.95 7.53906 5.54V2.75C7.53906 2.34 7.86906 2 8.28906 2C8.70906 2 9.03906 2.34 9.03906 2.75V5.53C9.03906 5.95 8.70906 6.29 8.28906 6.29Z" fill="currentColor" /><path d="M15.7109 6.29C15.2909 6.29 14.9609 5.95 14.9609 5.54V2.75C14.9609 2.33 15.3009 2 15.7109 2C16.1309 2 16.4609 2.34 16.4609 2.75V5.53C16.4609 5.95 16.1309 6.29 15.7109 6.29Z" fill="currentColor" /><path d="M12 14.75H10.31V13C10.31 12.59 9.97 12.25 9.56 12.25C9.15 12.25 8.81 12.59 8.81 13V14.75H7C6.59 14.75 6.25 15.09 6.25 15.5C6.25 15.91 6.59 16.25 7 16.25H8.81V18C8.81 18.41 9.15 18.75 9.56 18.75C9.97 18.75 10.31 18.41 10.31 18V16.25H12C12.41 16.25 12.75 15.91 12.75 15.5C12.75 15.09 12.41 14.75 12 14.75Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNoteAdd as IconComponentType).keywords = [
  "note",
  "add",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
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

export default IconNoteAdd as IconComponentType;